import { NextResponse } from "next/server";
import Stripe from "stripe";

// 1. Absolute top-level instruction to Next.js
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// 2. Safe instantiation with a dummy fallback
const stripe = new Stripe((process.env.STRIPE_SECRET_KEY || "sk_dummy_key_for_build") as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  try {
    const { priceId } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err: any) {
    console.error("Stripe Checkout Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}