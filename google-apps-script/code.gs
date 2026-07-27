/**
 * Google Apps Script Webhook for JomKahwin RSVP & Kehadiran Database
 * 
 * Instructions:
 * 1. Open Google Sheets (https://sheets.new)
 * 2. Click Extensions > Apps Script
 * 3. Paste this code into Code.gs
 * 4. Click Deploy > New Deployment > Select type: Web App
 * 5. Execute as: "Me", Who has access: "Anyone"
 * 6. Copy the Web App URL and pass it to the React app or set process.env.VITE_RSVP_WEBHOOK_URL
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Tarikh Masa", "Nama Penuh", "Nombor Telefon", "Kehadiran", "Bilangan Pax", "Ucapan & Doa"]);
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#064E3B").setFontColor("#D4AF37");
    }

    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" }),
      data.name || "-",
      data.phone || "-",
      data.attendance === "hadir" ? "HADIR" : "TIDAK HADIR",
      data.pax || 1,
      data.wishes || "-"
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
