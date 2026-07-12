import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

interface DemoRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  employees: string;
  message: string;
  turnstileToken: string;
  /** Honeypot — must stay empty. */
  website: string;
}

interface DemoSuccessResponse {
  success: true;
}

interface DemoErrorResponse {
  error: string;
}

type DemoResponse = DemoSuccessResponse | DemoErrorResponse;

interface TurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
}

const EMPLOYEE_RANGES = new Set(["1-20", "21-50", "51-100", "100+"]);

// Cloudflare's public always-pass test secret; used when no real key is set (dev).
const TURNSTILE_TEST_SECRET = "1x0000000000000000000000000000000AA";

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY ?? TURNSTILE_TEST_SECRET;
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  if (!res.ok) return false;
  const data = (await res.json()) as TurnstileVerifyResponse;
  if (!data.success) {
    console.error("Turnstile verification failed:", data["error-codes"]);
  }
  return data.success;
}

async function sendNotificationEmail(fields: DemoRequestBody): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured; demo request stored in DB only");
    return;
  }
  const to = process.env.DEMO_NOTIFY_EMAIL;
  if (!to) {
    console.error("DEMO_NOTIFY_EMAIL not configured; demo request stored in DB only");
    return;
  }
  const from = process.env.RESEND_FROM ?? "Stegocare <onboarding@resend.dev>";

  const escape = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: fields.email,
      subject: `Demo-aanvraag: ${fields.organisation} (${fields.firstName} ${fields.lastName})`,
      html: `
        <h2>Nieuwe demo-aanvraag via stego.care</h2>
        <table cellpadding="4">
          <tr><td><strong>Naam</strong></td><td>${escape(fields.firstName)} ${escape(fields.lastName)}</td></tr>
          <tr><td><strong>E-mail</strong></td><td>${escape(fields.email)}</td></tr>
          <tr><td><strong>Organisatie</strong></td><td>${escape(fields.organisation)}</td></tr>
          <tr><td><strong>Medewerkers</strong></td><td>${escape(fields.employees)}</td></tr>
        </table>
        <p><strong>Bericht:</strong></p>
        <p>${escape(fields.message) || "-"}</p>
      `,
    }),
  });
  if (!res.ok) {
    console.error("Resend error:", res.status, await res.text());
  }
}

export async function POST(request: Request): Promise<NextResponse<DemoResponse>> {
  try {
    const body = (await request.json()) as DemoRequestBody;

    // Honeypot: real users never fill this hidden field.
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const firstName = (body.firstName ?? "").trim().slice(0, 100);
    const lastName = (body.lastName ?? "").trim().slice(0, 100);
    const email = (body.email ?? "").trim().slice(0, 200);
    const organisation = (body.organisation ?? "").trim().slice(0, 200);
    const employees = (body.employees ?? "").trim();
    const message = (body.message ?? "").trim().slice(0, 5000);

    if (!firstName || !lastName || !organisation) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "invalid_email" }, { status: 400 });
    }
    if (!EMPLOYEE_RANGES.has(employees)) {
      return NextResponse.json({ error: "invalid_employees" }, { status: 400 });
    }

    const captchaOk = await verifyTurnstile(
      body.turnstileToken ?? "",
      request.headers.get("x-forwarded-for")
    );
    if (!captchaOk) {
      return NextResponse.json({ error: "captcha_failed" }, { status: 400 });
    }

    const databaseUrl = process.env.DATABASE_URL;
    if (databaseUrl) {
      const sql = neon(databaseUrl);
      await sql`
        CREATE TABLE IF NOT EXISTS demo_requests (
          id SERIAL PRIMARY KEY,
          first_name TEXT NOT NULL,
          last_name TEXT NOT NULL,
          email TEXT NOT NULL,
          organisation TEXT NOT NULL,
          employees TEXT NOT NULL,
          message TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        )
      `;
      await sql`
        INSERT INTO demo_requests (first_name, last_name, email, organisation, employees, message)
        VALUES (${firstName}, ${lastName}, ${email}, ${organisation}, ${employees}, ${message})
      `;
    } else {
      console.error("DATABASE_URL is not configured; demo request not persisted");
    }

    await sendNotificationEmail({ ...body, firstName, lastName, email, organisation, employees, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Demo request error:", error);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
