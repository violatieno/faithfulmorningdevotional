// ...existing code...
import { NextResponse } from "next/server";

const MPESA_CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY || "";
const MPESA_CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET || "";
const MPESA_OAUTH_URL =
  process.env.MPESA_OAUTH_URL ||
  "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";

export async function POST(_: Request) {
  if (!MPESA_CONSUMER_KEY || !MPESA_CONSUMER_SECRET) {
    return NextResponse.json(
      { error: "MPESA_CONSUMER_KEY / MPESA_CONSUMER_SECRET not set" },
      { status: 500 }
    );
  }

  try {
    const basic = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString("base64");

    const res = await fetch(MPESA_OAUTH_URL, {
      method: "GET",
      headers: {
        Authorization: `Basic ${basic}`,
      },
    });

    const json = await res.json();

    if (!res.ok) {
      console.error("MPESA token error:", json);
      return NextResponse.json({ error: json?.error || "Failed to obtain MPESA token" }, { status: res.status });
    }

    // Expected shape: { access_token: "...", expires_in: "..." }
    return NextResponse.json(json);
  } catch (err: any) {
    console.error("MPESA token exception:", err);
    return NextResponse.json({ error: err?.message || "Token request failed" }, { status: 500 });
  }
}
// ...existing code...