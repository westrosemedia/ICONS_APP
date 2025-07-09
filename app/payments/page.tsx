"use client";

import React, { useState } from "react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import PaymentOptionCard from "../../components/payments/PaymentOptionCard";

const paymentOptions = [
  {
    title: "Pay-per-Photo/Video",
    description: "Purchase individual photos or videos.",
    amount: 25,
    paymentType: "per-item",
  },
  {
    title: "Full Package",
    description: "Get the full branding package at a discounted rate.",
    amount: 250,
    paymentType: "package",
  },
  {
    title: "Custom Invoice",
    description: "Pay a custom amount as invoiced by your account manager.",
    amount: 100,
    paymentType: "custom",
  },
];

export default function PaymentsPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.replace("/login");
        return;
      }
      setUser(u);
    });
    return () => unsub();
  }, [router]);

  const handlePay = async (option: typeof paymentOptions[0]) => {
    setError(null);
    setLoading(option.paymentType);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: option.amount,
          paymentType: option.paymentType,
          uid: user.uid,
        }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError("Failed to create Stripe session.");
      }
    } catch {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">Payments</h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paymentOptions.map((option) => (
            <PaymentOptionCard
              key={option.paymentType}
              title={option.title}
              description={option.description}
              amount={option.amount}
              onPay={() => handlePay(option)}
              loading={loading === option.paymentType}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 