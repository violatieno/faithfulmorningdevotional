import { NextResponse } from "next/server";
import Stripe from "stripe";

// 1. Force dynamic rendering at the absolute top
export const dynamic = 'force-dynamic';

// 2. Shield initialization from empty build environment variables
const stripe = new Stripe((process.env.STRIPE_SECRET_KEY || "sk_dummy_key_for_build") as string, {
  apiVersion: "2024-06-20", 
});

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature") as string;

    if (!signature) {
      return NextResponse.json({ error: "Missing stripe signature" }, { status: 400 });
    }

    // Webhook construction logic safely wrapped inside the runtime handler
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "whsec_dummy";
    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret);

    // Handle your Stripe events here
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("Payment successful for session:", session.id);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("Webhook error:", err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }
}