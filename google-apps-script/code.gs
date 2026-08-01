/**
 * Google Apps Script backend for JomKahwin RSVP submissions.
 * Bind this script to the RSVP spreadsheet and deploy it as a Web App:
 * Execute as: Me | Who has access: Anyone
 */

var SHEET_NAME = "RSVP";
var SPREADSHEET_ID = "1MWbcl5ju2YJg9JREoZlcp1rzxkVyKKP9X8dn2CyP7g0";
var HEADERS = [
  "Tarikh Masa",
  "Nama Penuh",
  "Nombor Telefon",
  "Kehadiran",
  "Bilangan Pax",
  "Ucapan & Doa"
];

function doGet(e) {
  var action = e && e.parameter && e.parameter.action;

  if (action === "wishes") {
    return wishesResponse_(e);
  }

  return jsonResponse_({ result: "ok", service: "JomKahwin RSVP" });
}

function doPost(e) {
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Permintaan kosong.");
    }

    var data = JSON.parse(e.postData.contents);
    var name = cleanCell_(data.name, 120);
    var phone = normalizePhone_(data.phone);
    var attendance = data.attendance === "tidak_hadir" ? "TIDAK HADIR" : "HADIR";
    var pax = attendance === "HADIR" ? clamp_(Number(data.pax) || 1, 1, 5) : 0;
    var wishes = cleanCell_(data.wishes, 1000) || "-";

    if (!name || !phone) {
      throw new Error("Nama dan nombor telefon diperlukan.");
    }

    var spreadsheet = getSpreadsheet_();
    var sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    ensureHeaders_(sheet);

    var row = [new Date(), name, phone, attendance, pax, wishes];
    var existingRow = findPhoneRow_(sheet, phone);

    writeRsvpRow_(sheet, existingRow || sheet.getLastRow() + 1, row);

    sheet.getRange(2, 1, Math.max(sheet.getLastRow() - 1, 1), 1)
      .setNumberFormat("dd/MM/yyyy HH:mm:ss");

    return jsonResponse_({ result: "success", updated: Boolean(existingRow) });
  } catch (error) {
    return jsonResponse_({ result: "error", message: error.message || String(error) });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.getRange(1, 1, 1, HEADERS.length)
    .setValues([HEADERS])
    .setFontWeight("bold")
    .setBackground("#4A0E17")
    .setFontColor("#F5E6AB");
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, HEADERS.length);
}

function wishesResponse_(e) {
  var spreadsheet = getSpreadsheet_();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);
  var wishes = [];

  if (sheet && sheet.getLastRow() >= 2) {
    var rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getDisplayValues();

    for (var index = rows.length - 1; index >= 0; index--) {
      var row = rows[index];
      var message = cleanCell_(row[5], 1000);

      if (!message || message === "-") continue;

      wishes.push({
        id: "sheet-" + (index + 2),
        name: cleanCell_(row[1], 120) || "Tetamu",
        message: message,
        createdAt: row[0] || "",
        attendance: row[3] === "TIDAK HADIR" ? "tidak_hadir" : "hadir"
      });

      if (wishes.length >= 30) break;
    }
  }

  return dataResponse_(e, { result: "success", wishes: wishes });
}

function findPhoneRow_(sheet, phone) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

  var phones = sheet.getRange(2, 3, lastRow - 1, 1).getDisplayValues();
  for (var index = 0; index < phones.length; index++) {
    if (normalizePhone_(phones[index][0]) === phone) return index + 2;
  }
  return 0;
}

function writeRsvpRow_(sheet, rowNumber, row) {
  sheet.getRange(rowNumber, 1, 1, row.length).setValues([row]);

  // The apostrophe forces Google Sheets to keep the leading 0 as text.
  sheet.getRange(rowNumber, 3)
    .setNumberFormat("@")
    .setValue("'" + row[2]);
}

// Run once from the Apps Script editor to correct phone numbers saved before
// the text-format fix was added.
function repairStoredPhoneNumbers() {
  var sheet = getSpreadsheet_().getSheetByName(SHEET_NAME);
  var lastRow = sheet ? sheet.getLastRow() : 0;
  if (lastRow < 2) return;

  var phoneRange = sheet.getRange(2, 3, lastRow - 1, 1);
  var correctedPhones = phoneRange.getDisplayValues().map(function (row) {
    return ["'" + normalizePhone_(row[0])];
  });

  phoneRange.setNumberFormat("@").setValues(correctedPhones);
}

function getSpreadsheet_() {
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function normalizePhone_(value) {
  var digits = String(value || "").replace(/\D/g, "");

  // Store Malaysian numbers consistently. This also makes old spreadsheet
  // values that lost their leading zero match new form submissions.
  if (digits.indexOf("60") === 0) {
    digits = "0" + digits.slice(2);
  } else if (digits.indexOf("1") === 0 && (digits.length === 9 || digits.length === 10)) {
    digits = "0" + digits;
  }

  return digits.slice(0, 12);
}

function cleanCell_(value, maxLength) {
  var cleaned = String(value || "").trim().slice(0, maxLength);
  return /^[=+\-@]/.test(cleaned) ? "'" + cleaned : cleaned;
}

function clamp_(value, minimum, maximum) {
  return Math.min(Math.max(Math.round(value), minimum), maximum);
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function dataResponse_(e, payload) {
  var callback = e && e.parameter && e.parameter.callback;

  if (callback) {
    return ContentService.createTextOutput(callback + "(" + JSON.stringify(payload) + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return jsonResponse_(payload);
}
