import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Get the data sent from your "Pay" button
    const { phone, amount, reference } = await req.json();

    // 2. Format the phone number to 254...
    let formattedPhone = phone.trim().replace(/\D/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = `254${formattedPhone.substring(1)}`;
    }

    // 3. This is where your code snippet goes:
    const response = await fetch("https://backend.payhero.co.ke/api/v2/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.PAYHERO_AUTH_TOKEN as string, 
      },
      body: JSON.stringify({
        amount: Number(amount),
        phone_number: formattedPhone,
        channel_id: process.env.PAYHERO_CHANNEL_ID,
        provider: "m-pesa", 
        external_reference: reference || "FaithfulMorning_Order",
        callback_url: "https://your-domain.com/api/payhero/callback",
      }),
    });

    const data = await response.json();

    // 4. Return the result back to your frontend
    if (!response.ok) {
      return NextResponse.json({ error: data.message || "Request failed" }, { status: response.status });
    }

    return NextResponse.json({ success: true, data });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}