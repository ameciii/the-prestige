/**
 * Inquiry submission helper.
 *
 * Sends form data to a Google Apps Script Web App endpoint, which
 * appends a row to a Google Spreadsheet and emails a notification.
 *
 * ── Endpoint setup ──
 *   1. Create a Google Sheet
 *   2. Extensions → Apps Script → paste apps-script/Code.gs
 *   3. Deploy → Web App → Execute as: Me, Access: Anyone → copy URL
 *   4. Set VITE_INQUIRY_ENDPOINT=<url> in .env.development (and prod)
 *
 * ── Dev fallback ──
 *   If VITE_INQUIRY_ENDPOINT is empty in dev, this module logs the
 *   payload to console and returns success after 800ms — no real
 *   network call. This lets you build & test the UI without setting
 *   up Google Sheets first.
 */

export type InquiryPayload = {
  groom: string;
  bride: string;
  phone: string;
  email: string;
  date: string;
  city: string;
  message: string;
  /** Honeypot — bots fill this; humans never see it. Must stay empty. */
  website: string;
};

export type SubmitResult =
  | { ok: true }
  | { ok: false; error: string };

const ENDPOINT = import.meta.env.VITE_INQUIRY_ENDPOINT as string | undefined;

export async function submitInquiry(data: InquiryPayload): Promise<SubmitResult> {
  // ── Dev mock: no endpoint configured → simulate success ──
  if (!ENDPOINT) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log('[submitInquiry] MOCK MODE — payload:', data);
      await delay(800);
      return { ok: true };
    }
    return { ok: false, error: 'Inquiry endpoint not configured.' };
  }

  try {
    // Note: we use Content-Type: text/plain to avoid a CORS preflight
    // request that Apps Script web apps don't always handle cleanly.
    // The body is still JSON; Apps Script parses it via e.postData.contents.
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        ...data,
        userAgent: navigator.userAgent,
        submittedAt: new Date().toISOString(),
      }),
      redirect: 'follow',
    });

    if (!res.ok) {
      return { ok: false, error: `Server responded with ${res.status}` };
    }

    // Apps Script returns JSON like { ok: true } or { ok: false, error: '...' }
    const json = (await res.json().catch(() => null)) as
      | { ok: boolean; error?: string }
      | null;

    if (!json) return { ok: true }; // assume success if response unparseable
    if (!json.ok) return { ok: false, error: json.error ?? 'Unknown error' };
    return { ok: true };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : 'Network error',
    };
  }
}

/** Email shape validation — keep loose so legitimate addresses aren't rejected. */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/** Phone validation — at least 7 digits (very permissive for international). */
export function isValidPhone(phone: string): boolean {
  return phone.replace(/\D/g, '').length >= 7;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
