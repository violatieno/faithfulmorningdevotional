import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    // Log the callback payload for debugging (rotate secrets after testing)
    console.log('MPESA callback received:', JSON.stringify(body));
    // Respond quickly with 200 and the expected structure
    return NextResponse.json({ ResultCode: 0, ResultDesc: 'Accepted' });
  } catch (err: any) {
    console.error('MPESA callback error', err);
    return NextResponse.json({ error: 'callback handling failed' }, { status: 500 });
  }
}