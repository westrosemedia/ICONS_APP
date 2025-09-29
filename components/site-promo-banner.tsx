"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MASTERMIND_ROUTE } from "@/lib/cta";
import { useEffect, useState } from "react";

export default function SitePromoBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  // Hide the banner on the mastermind page to avoid redundancy
  const shouldHide = pathname?.startsWith(MASTERMIND_ROUTE);

  useEffect(() => {
    setVisible(true);
  }, [pathname]);

  if (shouldHide || !visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40">
      <div className="mx-auto max-w-[1400px] px-4 pb-4">
        <div className="relative overflow-hidden rounded-2xl bg-black/80 backdrop-blur border border-white/10">
          <div className="absolute inset-0">
            {/* Subtle gradient glow */}
            <div className="absolute -inset-x-10 -inset-y-10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 blur-3xl opacity-30" />
          </div>
          <div className="relative flex flex-col gap-2 p-4 md:flex-row md:items-center md:justify-between md:gap-6 md:p-5">
            <p className="text-white text-base md:text-lg leading-tight">
              Do you want a luxury content weekend and weekly support from two of the best in the industry
              <span className="text-white/60">. Content and Tapping Mastermind + Retreat. </span>
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={MASTERMIND_ROUTE}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm md:text-base font-medium text-black bg-white hover:bg-white/90 transition focus:outline-none focus:ring-2 focus:ring-white"
              >
                Yes, show me the mastermind
              </Link>
              <button
                onClick={() => setVisible(false)}
                aria-label="Dismiss"
                className="rounded-xl border border-white/20 px-4 py-3 text-sm text-white/80 hover:bg-white/10 transition"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
