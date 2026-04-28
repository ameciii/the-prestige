/**
 * The Prestige — inquiry form receiver.
 *
 * Receives POST requests from the website's contact form, appends a
 * row to a Google Sheet, and emails a notification to the owner.
 *
 * ── Setup ──
 *   1. Open the target Google Sheet
 *   2. Extensions → Apps Script → paste this entire file
 *   3. Update SHEET_ID and NOTIFY_EMAIL below
 *   4. Add header row to the sheet (see runSetup() helper)
 *   5. Deploy → New Deployment → type: Web App
 *        Execute as: Me
 *        Who has access: Anyone
 *      → copy the /exec URL
 *   6. Paste that URL into the website's VITE_INQUIRY_ENDPOINT env var
 *
 * ── Re-deploying after changes ──
 *   When you edit this script, you MUST create a *new deployment* (or
 *   "Manage deployments" → edit → New version) for the changes to take
 *   effect on the public URL. Saving the file alone is not enough.
 */

// ════════════════════════════════════════════════════════════════
// CONFIG — edit these two values
// ════════════════════════════════════════════════════════════════

/** ID of the spreadsheet (from its URL: docs.google.com/spreadsheets/d/<ID>/edit) */
const SHEET_ID = '16iy7SZGgcAQ9MNF7XxyqYqKENpc4oofw4gEmNDp10fk';

/** Email that receives a notification on every new inquiry */
const NOTIFY_EMAIL = 'salmaazariaaa@gmail.com';

/** Sheet tab name where rows are appended */
const SHEET_NAME = 'Inquiries';

/** Minimum seconds between two submissions from the same email (anti-spam) */
const RATE_LIMIT_SECONDS = 30;


// ════════════════════════════════════════════════════════════════
// MAIN HANDLER
// ════════════════════════════════════════════════════════════════

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // ── Honeypot: if the hidden "website" field is filled, it's a bot ──
    if (data.website && data.website.trim() !== '') {
      // Silently accept (don't tip off the bot) but don't write anything
      return jsonResponse({ ok: true });
    }

    // ── Basic field validation ──
    if (!data.email || !data.groom || !data.bride || !data.phone) {
      return jsonResponse({ ok: false, error: 'Missing required fields' });
    }

    // ── Rate limit: same email cannot submit twice within N seconds ──
    if (isRateLimited(data.email)) {
      return jsonResponse({
        ok: false,
        error: 'Please wait a moment before submitting again.',
      });
    }

    // ── Append row ──
    const sheet = getSheet();
    sheet.appendRow([
      new Date(),
      data.groom || '',
      data.bride || '',
      data.phone || '',
      data.email || '',
      data.date || '',
      data.city || '',
      data.message || '',
      data.userAgent || '',
    ]);

    // ── Notify owner via email ──
    sendNotificationEmail(data);

    return jsonResponse({ ok: true });
  } catch (err) {
    console.error('doPost error:', err);
    return jsonResponse({ ok: false, error: String(err) });
  }
}


// ════════════════════════════════════════════════════════════════
// HELPERS
// ════════════════════════════════════════════════════════════════

function getSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    writeHeaderRow(sheet);
  }
  return sheet;
}

function writeHeaderRow(sheet) {
  sheet.appendRow([
    'Timestamp',
    'Groom',
    'Bride',
    'Phone',
    'Email',
    'Event Date',
    'City & Country',
    'Vision',
    'User Agent',
  ]);
  sheet.setFrozenRows(1);
}

function sendNotificationEmail(data) {
  const subject = `New Inquiry — ${data.groom} & ${data.bride}`;
  const body = [
    `A new inquiry was submitted on the website:`,
    ``,
    `Groom:   ${data.groom}`,
    `Bride:   ${data.bride}`,
    `Phone:   ${data.phone}`,
    `Email:   ${data.email}`,
    `Date:    ${data.date || '(not provided)'}`,
    `City:    ${data.city || '(not provided)'}`,
    ``,
    `Vision:`,
    data.message || '(not provided)',
    ``,
    `── Submitted at ${new Date().toLocaleString('id-ID')}`,
  ].join('\n');

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    body: body,
    replyTo: data.email,
  });
}

/**
 * Track last-submission time per email in script properties.
 * Returns true if the email submitted within RATE_LIMIT_SECONDS.
 */
function isRateLimited(email) {
  const props = PropertiesService.getScriptProperties();
  const key = 'last_' + email.toLowerCase();
  const last = Number(props.getProperty(key) || 0);
  const now = Date.now();
  if (now - last < RATE_LIMIT_SECONDS * 1000) return true;
  props.setProperty(key, String(now));
  return false;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}


// ════════════════════════════════════════════════════════════════
// ONE-TIME SETUP HELPER
// Run this once (Run button in editor) to create the sheet tab
// with the correct header row.
// ════════════════════════════════════════════════════════════════

function runSetup() {
  const sheet = getSheet();
  if (sheet.getLastRow() === 0) writeHeaderRow(sheet);
  Logger.log('Setup complete. Sheet ready: ' + sheet.getName());
}


// ════════════════════════════════════════════════════════════════
// LOCAL TEST HELPER
// Run this from the editor to simulate a form submission.
// ════════════════════════════════════════════════════════════════

function runTestSubmission() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        groom: 'Test',
        bride: 'Submission',
        phone: '+62 812 3456 7890',
        email: 'test@example.com',
        date: '01/06/2026',
        city: 'Jakarta',
        message: 'This is a test row created by runTestSubmission().',
        website: '',
        userAgent: 'AppsScript/Test',
      }),
    },
  };
  const response = doPost(fakeEvent);
  Logger.log(response.getContent());
}
