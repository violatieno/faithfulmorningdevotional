import { NextResponse } from "next/server";
import Stripe from "stripe";

const STRIPE_API_VERSION = "2022-11-15";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: STRIPE_API_VERSION });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items = Array.isArray(body?.items) ? body.items : [];
    if (items.length === 0) return NextResponse.json({ error: "No items provided" }, { status: 400 });

    const line_items = items.map((it: any) => ({
      price_data: {
        currency: String(it.currency || "usd"),
        product_data: { name: String(it.name || "Product") },
        unit_amount: Math.round((Number(it.price) || 0) * 100),
      },
      quantity: Math.max(1, parseInt(String(it.quantity || 1), 10)),
    }));

    const base =
      process.env.NEXT_PUBLIC_BASE_URL ||
      (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : process.env.BASE_URL || "http://localhost:3000");

    const success = process.env.STRIPE_SUCCESS_URL || `${base}/store/success`;
    const cancel = process.env.STRIPE_CANCEL_URL || `${base}/store/cancel`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: success,
      cancel_url: cancel,
      metadata: body.metadata || {},
    });

    if (!session.url) return NextResponse.json({ error: "No session URL returned" }, { status: 500 });
    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: err?.message || "Stripe error" }, { status: 500 });
  }
}