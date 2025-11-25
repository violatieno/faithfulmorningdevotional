import { NextResponse } from "next/server";
import Stripe from "stripe";

const STRIPE_API_VERSION = "2022-11-15";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: STRIPE_API_VERSION });
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature") || "";
  const rawBody = await req.text();

  if (!webhookSecret) {
    console.warn("STRIPE_WEBHOOK_SECRET not set — webhook will skip signature verification");
  }

  if (!sig && webhookSecret) {
    console.error("Missing stripe-signature header");
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  try {
    const event = webhookSecret ? stripe.webhooks.constructEvent(rawBody, sig, webhookSecret) : JSON.parse(rawBody);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("checkout.session.completed:", session.id, session.metadata || {});
        // TODO: fulfill order
        break;
      }
      case "payment_intent.succeeded": {
        const intent = event.data.object as Stripe.PaymentIntent;
        console.log("payment_intent.succeeded:", intent.id);
        break;
      }
      default:
        console.log("Unhandled Stripe event:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("Stripe webhook error:", err?.message || err);
    return NextResponse.json({ error: err?.message || "Webhook error" }, { status: 400 });
  }
}