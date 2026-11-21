"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { STRIPE_PRICING_TABLE_ID, STRIPE_PUBLISHABLE_KEY, copy } from "@/lib/hotAndViral";

const scrollTarget = "scroll-mt-[22rem] scroll-mb-28";

export function RegularPriceBanner() {
  return (
    <div className="rounded-[1.4rem] bg-black px-6 py-8 text-center text-white md:px-10 md:py-10">
      <p className="font-heading text-[2.35rem] leading-[0.92] tracking-[-0.03em] text-[#f41cdc] sm:text-[3.4rem]">
        {copy.pricing.regular.line}
      </p>
      <p className="mt-5 font-heading text-[4.25rem] leading-none tracking-[-0.045em] text-white line-through decoration-[#f41cdc] decoration-[6px] sm:text-[6.5rem]">
        {copy.pricing.regular.amount}
      </p>
      <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.2em] text-white/70">{copy.pricing.regular.after}</p>
      <p className="mt-6 font-heading text-[3.4rem] leading-none tracking-[-0.04em] text-white sm:text-[4.75rem]">
        {copy.pricing.monthly.amount}
      </p>
      <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.2em] text-white">{copy.pricing.regular.now}</p>
    </div>
  );
}

/**
 * Stripe's pricing table is a custom element. React drops unknown attributes
 * on custom elements, so pricing-table-id and publishable-key are set on the
 * DOM node after mount. The element itself stays in React's tree so the page
 * clock can re-render without removing the checkout.
 */
export default function StripePricingTable() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const table = ref.current;
    if (!table) return;
    table.setAttribute("pricing-table-id", STRIPE_PRICING_TABLE_ID);
    table.setAttribute("publishable-key", STRIPE_PUBLISHABLE_KEY);
  }, []);

  return (
    <>
      <Script async src="https://js.stripe.com/v3/pricing-table.js" strategy="afterInteractive" />
      <div id="checkout" className={scrollTarget}>
        <RegularPriceBanner />
        <p className="mb-4 mt-8 text-center text-[15px] font-semibold tracking-wide text-neutral-900">
          {copy.pricing.currency}
        </p>
        {/* @ts-expect-error stripe-pricing-table is a Stripe custom element */}
        <stripe-pricing-table ref={ref} className="block w-full max-w-full" />
      </div>
    </>
  );
}
