import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(stripeSecretKey, {
    // Tell TypeScript to treat this string as the correct type
    apiVersion: API_VERSION as "2024-06-20", 
});

export async function POST(req: Request) {
  try {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      console.error("Missing STRIPE_SECRET_KEY");
      return NextResponse.json({ error: "Server misconfiguration: STRIPE_SECRET_KEY missing" }, { status: 500 });
    }

    // Use an env value if provided; cast to any to avoid literal type mismatch
    const apiVersion = (process.env.STRIPE_API_VERSION || "2024-06-20") as any;
    const stripe = new Stripe(stripeKey, { apiVersion });

    const { planId } = await req.json();

    const priceMap: Record<string, string> = {
      basic: "price_12345",    // replace with real Price IDs
      standard: "price_67890",
      premium: "price_abcde",
    };

    if (!priceMap[planId]) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceMap[planId],
          quantity: 1,
        },
      ],
      success_url: `${base}/success`,
      cancel_url: `${base}/subscribe`,
    });

    return NextResponse.json({ sessionId: session.id, url: session.url ?? null });
  } catch (err: any) {
    console.error("Stripe error:", err);
    return NextResponse.json({ error: err?.message || "Stripe error" }, { status: 500 });
  }
}
