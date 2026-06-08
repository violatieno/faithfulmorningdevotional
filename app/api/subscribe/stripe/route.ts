import { NextResponse } from "next/server";
import Stripe from "stripe";

// 1. Tell Next.js explicitly to skip static generation for this route
export const dynamic = 'force-dynamic';

// 2. Initialize Stripe safely with a fallback string so it never crashes compilation
const stripe = new Stripe((process.env.STRIPE_SECRET_KEY || "sk_dummy_key_for_build") as string, {
  apiVersion: "2024-06-20", 
});

export async function POST(req: Request) {
  try {
    const { planId } = await req.json();

    // Define your price IDs from Stripe Dashboard (Products → Prices)
    const priceMap: Record<string, string> = {
      basic: "price_12345",    // replace with your real Stripe Price ID
      standard: "price_67890", // replace with your real Stripe Price ID
      premium: "price_abcde",  // replace with your real Stripe Price ID
    };

    if (!priceMap[planId]) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceMap[planId],
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/subscribe`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}