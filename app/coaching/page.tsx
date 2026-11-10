import type { Metadata } from "next";
import Image from "next/image";
import WrmButton from "@/components/agency/WrmButton";
import { COACHING_ENQUIRY_URL, FRAME, portraits, PUBLIC_EMAIL } from "@/lib/agency";

export const metadata: Metadata = {
  title: "Private 1:1 Coaching | West Rose Media",
  description:
    "Private 1:1 coaching with Stephanie Rose. Enquire about fit. No public price or inclusion list is published.",
  alternates: { canonical: "/coaching" },
};

export default function CoachingPage() {
  return (
    <div className="bg-[#E9E1D7] text-[#171515]">
      <section className="grid lg:grid-cols-12">
        <div className={`${FRAME} py-16 lg:col-span-6 lg:max-w-none lg:py-24`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">Private</p>
          <h1 className="mt-4 text-[clamp(3rem,6vw,5.6rem)] leading-[0.9]">Private 1:1 Coaching</h1>
          <div className="mt-8 max-w-xl space-y-6 text-[17px] leading-[1.75]">
            <p>
              Private 1:1 coaching is direct time with Stephanie Rose on the strategy behind the brand.
            </p>
            <p>
              There is no published price and no published list of inclusions. If you want to know whether it is the right fit, enquire. Availability is part of that conversation.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <WrmButton href={COACHING_ENQUIRY_URL} external>
              Enquire
            </WrmButton>
            <a
              href={`mailto:${PUBLIC_EMAIL}?subject=Private%201%3A1%20coaching`}
              className="text-[11px] uppercase tracking-[0.18em] underline underline-offset-4"
            >
              {PUBLIC_EMAIL}
            </a>
          </div>
        </div>
        <div className="relative min-h-[70vh] lg:col-span-6">
          <Image
            src={portraits.story}
            alt="Stephanie Rose"
            fill
            priority
            className="object-cover object-[center_28%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>
      <section className="border-t border-[#171515]/15">
        <div className={`${FRAME} py-16`}>
          <p className="max-w-2xl text-[17px] leading-[1.75]">
            If the work you want is a team running strategy, photography, video, and publishing, that is the{" "}
            <a href="/icon" className="underline underline-offset-4">
              ICON Brand Partnership
            </a>
            , from $5,000 CAD per month. Hot & Viral is a separate page.
          </p>
        </div>
      </section>
    </div>
  );
}
