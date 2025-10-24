"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PowerHourBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 z-50">
      <div 
        className="mx-auto max-w-4xl rounded-2xl text-white px-4 py-3 shadow-2xl flex items-center justify-between gap-3"
        style={{
          background: 'linear-gradient(135deg, #E46C32 0%, #5EB298 100%)'
        }}
      >
        <span className="text-sm font-medium">Get instant help with your brand strategy - Power Hour call available for $212</span>
        <div className="flex items-center gap-2">
          <Link 
            href="https://buy.stripe.com/cNifZggRqcXr4vpfZz87K0J" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white text-black px-3 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Power Hour
          </Link>
          <button
            onClick={() => setVisible(false)}
            aria-label="dismiss"
            className="rounded-xl bg-white/10 px-2 py-2 text-white text-sm hover:bg-white/20 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
