"use client";

import { useState } from "react";

type Props = {
  label?: string;
  className?: string;
};

export default function CheckoutButton({ label = "Buy Now", className }: Props) {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Direct link to your existing Stripe payment link
    window.location.href = "https://buy.stripe.com/fZe4ia1eQ1nc5hu3cK";
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition ${className || ""} ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {loading ? "Redirecting..." : label}
    </button>
  );
}
