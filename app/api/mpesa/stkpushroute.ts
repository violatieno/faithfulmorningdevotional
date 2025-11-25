import { NextResponse } from 'next/server';

const SHORTCODE = process.env.MPESA_SHORTCODE || '';
const PASSKEY = process.env.MPESA_PASSKEY || '';
const OAUTH_URL =
  process.env.MPESA_OAUTH_URL ||
  'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
const STK_URL =
  process.env.MPESA_STK_PUSH_URL ||
  'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
const CALLBACK_URL = process.env.MPESA_CALLBACK_URL || '';

function makeTimestamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  const YYYY = d.getUTCFullYear();
  const MM = pad(d.getUTCMonth() + 1);
  const DD = pad(d.getUTCDate());
  const hh = pad(d.getUTCHours());
  const mm = pad(d.getUTCMinutes());
  const ss = pad(d.getUTCSeconds());
  return `${YYYY}${MM}${DD}${hh}${mm}${ss}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { phone, amount, accountReference = 'FM_ORDER', description = 'Faithful Morning' } = body;

    if (!phone || !amount) {
      return NextResponse.json({ error: 'phone and amount required' }, { status: 400 });
    }
    if (!SHORTCODE || !PASSKEY) {
      return NextResponse.json({ error: 'MPESA shortcode/passkey not configured' }, { status: 500 });
    }
    if (!CALLBACK_URL) {
      return NextResponse.json({ error: 'MPESA callback URL not configured' }, { status: 500 });
    }

    // Obtain token directly from Safaricom OAuth
    const consumerKey = process.env.MPESA_CONSUMER_KEY || '';
    const consumerSecret = process.env.MPESA_CONSUMER_SECRET || '';
    if (!consumerKey || !consumerSecret) {
      return NextResponse.json({ error: 'MPESA consumer credentials missing' }, { status: 500 });
    }

    const basic = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
    const tokenRes = await fetch(OAUTH_URL, {
      method: 'GET',
      headers: { Authorization: `Basic ${basic}` },
    });
    const tokenJson = await tokenRes.json().catch(() => null);

    if (!tokenRes.ok || !tokenJson?.access_token) {
      console.error('MPESA token error', tokenJson);
      return NextResponse.json({ error: 'Failed to obtain MPESA access token', detail: tokenJson }, { status: 500 });
    }
    const accessToken = tokenJson.access_token;

    const timestamp = makeTimestamp();
    const password = Buffer.from(`${SHORTCODE}${PASSKEY}${timestamp}`).toString('base64');

    const payload = {
      BusinessShortCode: SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: Number(amount),
      PartyA: phone,
      PartyB: SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: CALLBACK_URL,
      AccountReference: accountReference,
      TransactionDesc: description,
    };

    const res = await fetch(STK_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      console.error('MPESA STK error', json);
      return NextResponse.json({ error: 'MPESA STK request failed', detail: json }, { status: res.status || 500 });
    }

    return NextResponse.json(json);
  } catch (err: any) {
    console.error('MPESA STK exception', err);
    return NextResponse.json({ error: err?.message || 'STK push failed' }, { status: 500 });
  }
}