"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { msUntilEnd } from "@/lib/birthdayWeek";

export default function StickyBanner() {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(msUntilEnd() > 0);

  useEffect(() => {
    const id = setInterval(() => setActive(msUntilEnd() > 0), 1000);
    return () => clearInterval(id);
  }, []);

  if (!visible || !active) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 z-50">
      <div className="mx-auto max-w-4xl rounded-2xl bg-black text-white px-4 py-3 shadow-2xl flex items-center justify-between gap-3">
        <span className="text-sm">Birthday Week offers are live now. Offers end Oct 13.</span>
        <div className="flex items-center gap-2">
          <Link href="/birthday-week" className="rounded-xl bg-white text-black px-3 py-2 text-sm font-semibold">
            See offers
          </Link>
          <button
            onClick={() => setVisible(false)}
            aria-label="dismiss"
            className="rounded-xl bg-white/10 px-2 py-2 text-white text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
