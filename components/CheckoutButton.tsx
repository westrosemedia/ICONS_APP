"use client";

import { useState } from "react";

type Props = {
  priceId: string;
  mode?: "subscription" | "payment";
  label?: string;
  className?: string;
};

export default function CheckoutButton({ priceId, mode = "subscription", label = "Buy Now", className }: Props) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout/icon-society", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, mode }),
      });
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url as string;
      } else {
        alert("Checkout could not start. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading || !priceId}
      className={`bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition ${className || ""} ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {loading ? "Redirecting..." : label}
    </button>
  );
}
