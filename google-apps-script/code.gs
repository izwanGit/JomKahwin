/**
 * Google Apps Script backend for JomKahwin RSVP submissions.
 * Bind this script to the RSVP spreadsheet and deploy it as a Web App:
 * Execute as: Me | Who has access: Anyone
 */

var SHEET_NAME = "RSVP";
var HEADERS = [
  "Tarikh Masa",
  "Nama Penuh",
  "Nombor Telefon",
  "Kehadiran",
  "Bilangan Pax",
  "Ucapan & Doa"
];

function doGet() {
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

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
    ensureHeaders_(sheet);

    var row = [new Date(), name, phone, attendance, pax, wishes];
    var existingRow = findPhoneRow_(sheet, phone);

    if (existingRow) {
      sheet.getRange(existingRow, 1, 1, row.length).setValues([row]);
    } else {
      sheet.appendRow(row);
    }

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

function findPhoneRow_(sheet, phone) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return 0;

  var phones = sheet.getRange(2, 3, lastRow - 1, 1).getDisplayValues();
  for (var index = 0; index < phones.length; index++) {
    if (normalizePhone_(phones[index][0]) === phone) return index + 2;
  }
  return 0;
}

function normalizePhone_(value) {
  return String(value || "").replace(/[^0-9+]/g, "").slice(0, 20);
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
