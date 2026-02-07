import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

interface SubscribeRequest {
  email: string;
}

interface SubscribeSuccessResponse {
  success: true;
}

interface SubscribeErrorResponse {
  error: string;
}

type SubscribeResponse = SubscribeSuccessResponse | SubscribeErrorResponse;

export async function POST(
  request: Request
): Promise<NextResponse<SubscribeResponse>> {
  try {
    const body = (await request.json()) as SubscribeRequest;
    const { email } = body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.error("DATABASE_URL is not configured");
      return NextResponse.json(
        { error: "Service temporarily unavailable" },
        { status: 503 }
      );
    }

    const sql = neon(databaseUrl);

    await sql`
      CREATE TABLE IF NOT EXISTS subscribers (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;

    await sql`
      INSERT INTO subscribers (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
