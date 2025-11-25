"use client";

import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";
import { FaPaypal } from "react-icons/fa";
import { FaCreditCard, FaMobileAlt } from "react-icons/fa";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "$5 / month",
    features: [
      "Access to daily devotionals",
      "Prayer journal",
      "Community support",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$10 / month",
    features: [
      "Everything in Basic",
      "Exclusive worship playlists",
      "Weekly Bible study notes",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$20 / month",
    features: [
      "Everything in Standard",
      "1-on-1 mentorship",
      "Monthly virtual prayer retreat",
    ],
  },
];

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleStripeCheckout = async (planId: string) => {
    const stripe = await stripePromise;
    if (!stripe) return toast.error("Stripe not loaded");

    const res = await fetch("/api/subscribe/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ planId }),
    });

    const data = await res.json();
    if (data.sessionId) {
      await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } else {
      toast.error("Failed to start Stripe checkout");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Choose Your Plan</h1>
        <p className="text-lg text-gray-600">
          Pick the subscription that best fits your spiritual journey.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white shadow-lg rounded-2xl p-8 text-center border hover:shadow-xl transition ${
              selectedPlan === plan.id ? "ring-2 ring-purple-500" : ""
            }`}
          >
            <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
            <p className="text-xl font-semibold text-purple-600 mb-6">
              {plan.price}
            </p>

            <ul className="text-gray-600 mb-6 space-y-2 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                setSelectedPlan((prev) => (prev === plan.id ? null : plan.id))
              }
              className={`w-full py-2 px-4 rounded-lg transition ${
                selectedPlan === plan.id
                  ? "bg-purple-700 text-white"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {selectedPlan === plan.id ? "Selected" : "Choose Plan"}
            </button>

            {/* Payment options appear cleanly below the plan card */}
            {selectedPlan === plan.id && (
              <div className="mt-8 space-y-4">
                <p className="text-gray-700 font-semibold">
                  Complete your subscription with:
                </p>
                <div className="flex justify-center gap-4">
                  {/* Stripe */}
                  <button
                    onClick={() => handleStripeCheckout(plan.id)}
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
                  >
                    <FaCreditCard className="text-purple-600" /> Stripe
                  </button>

                  {/* PayPal */}
                  <button
                    onClick={() => toast("PayPal integration here")}
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
                  >
                    <FaPaypal className="text-blue-600" /> PayPal
                  </button>

                  {/* M-PESA (using Mobile icon) */}
                  <button
                    onClick={() => toast("M-PESA integration here")}
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
                  >
                    <FaMobileAlt className="text-green-600" /> M-PESA
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
