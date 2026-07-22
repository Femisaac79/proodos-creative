import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

// Route handlers run on the Node runtime by default, which we need for fs.
export const runtime = "nodejs";

// Subscribers are captured to a local JSON file. This makes the signup
// genuinely functional in development and self-hosting: every valid email is
// stored, deduplicated, and timestamped. To also *send* newsletters in
// production, plug an email provider (Resend, Mailchimp, ConvertKit, etc.)
// into the marked spot below — the capture and validation stay the same.
const STORE = path.join(process.cwd(), "data", "subscribers.json");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Subscriber = { email: string; source: string; at: string };

async function readStore(): Promise<Subscriber[]> {
  try {
    const raw = await fs.readFile(STORE, "utf8");
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  let body: { email?: unknown; source?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_request" },
      { status: 400 }
    );
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  const source = String(body.source ?? "site").slice(0, 80);

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 422 }
    );
  }

  try {
    const subscribers = await readStore();

    if (subscribers.some((s) => s.email === email)) {
      // Already on the list — treat as success so the UX stays friendly.
      return NextResponse.json({ ok: true, status: "already_subscribed" });
    }

    subscribers.push({ email, source, at: new Date().toISOString() });

    await fs.mkdir(path.dirname(STORE), { recursive: true });
    await fs.writeFile(STORE, JSON.stringify(subscribers, null, 2), "utf8");

    // ── Plug an email provider here to send a welcome / confirmation ──
    // e.g. await resend.contacts.create({ email, audienceId }) or an
    // equivalent API call. Left out until a provider key is configured.

    return NextResponse.json({ ok: true, status: "subscribed" });
  } catch {
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 }
    );
  }
}
