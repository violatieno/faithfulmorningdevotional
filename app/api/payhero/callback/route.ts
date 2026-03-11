import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // PayHero sends a 'status' or 'ResultCode' depending on the event
    // We log it so you can see it in your Vercel/Server logs
    console.log("PayHero Callback Received:", JSON.stringify(data, null, 2));

    const status = data.status; // 'Success' or 'Failed'
    const reference = data.external_reference;
    const mpesaCode = data.mpesa_code; // The actual M-Pesa Receipt Number

    if (status === 'Success') {
      // SUCCESS LOGIC:
      // 1. Mark the order as 'Paid' in your database
      // 2. Send an email to the user
      // 3. Unlock the devotional content
      console.log(`✅ Payment Successful! Ref: ${reference}, Code: ${mpesaCode}`);
    } else {
      // FAILURE LOGIC:
      console.log(`❌ Payment Failed for Ref: ${reference}. Reason: ${data.message}`);
    }

    // You MUST tell PayHero you received the message, or they will keep sending it
    return NextResponse.json({ message: "Callback processed successfully" }, { status: 200 });

  } catch (error) {
    console.error("Callback Processing Error:", error);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}