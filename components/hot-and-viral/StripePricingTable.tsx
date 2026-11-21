"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import { STRIPE_PRICING_TABLE_ID, STRIPE_PUBLISHABLE_KEY, copy } from "@/lib/hotAndViral";

const scrollTarget = "scroll-mt-[22rem] scroll-mb-28";

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
        <p className="mb-4 text-center text-[15px] font-semibold tracking-wide text-neutral-900">
          {copy.pricing.currency}
        </p>
        {/* @ts-expect-error stripe-pricing-table is a Stripe custom element */}
        <stripe-pricing-table ref={ref} className="block w-full max-w-full" />
      </div>
    </>
  );
}
