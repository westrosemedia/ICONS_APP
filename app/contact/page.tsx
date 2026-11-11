import type { Metadata } from "next";
import SproutStudioLeadForm from "@/components/SproutStudioLeadForm";
import PaletteBand from "@/components/agency/PaletteBand";
import WrmButton from "@/components/agency/WrmButton";
import { FRAME, PHONE_DISPLAY, PHONE_TEL, PUBLIC_EMAIL } from "@/lib/agency";

export const metadata: Metadata = {
  title: "Contact | West Rose Media",
  description:
    "Contact West Rose Media. ICON Brand Partnership is open. Private 1:1 coaching is full.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-[#020405] text-[#CCCCCE]">
      <PaletteBand blue="Contact" camel="Calgary" />
      <div className={`${FRAME} grid gap-16 py-12 lg:grid-cols-12 lg:py-16`}>
        <div className="lg:col-span-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">Contact</p>
          <h1 className="mt-4 text-[clamp(3.2rem,6vw,5.5rem)] leading-[0.9]">Contact</h1>
          <div className="mt-10 space-y-6 text-lg">
            <p>
              <a href={PHONE_TEL} className="border-b border-[#CCCCCE]/25">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={`mailto:${PUBLIC_EMAIL}`} className="border-b border-[#CCCCCE]/25">
                {PUBLIC_EMAIL}
              </a>
            </p>
            <p className="max-w-sm text-base leading-relaxed text-[#CCCCCE]/80">
              Calgary, Alberta. Strategy can happen remotely. Photography and video are scheduled in Calgary, Vancouver, Toronto, and on travel dates.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-start gap-3">
            <WrmButton href="/apply" variant="line">
              Apply for ICON
            </WrmButton>
            <WrmButton href="/work-with-us" variant="line">
              Work with us
            </WrmButton>
            <WrmButton href="/hot-and-viral" variant="line">
              Hot & Viral
            </WrmButton>
          </div>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-[#CCCCCE]/80">
            ICON Brand Partnership is open. Private 1:1 coaching is full. Hot & Rich and the Manifesting & Marketing Mastermind both open in January.
          </p>
        </div>
        <div id="application" className="lg:col-span-6 lg:col-start-7">
          <h2 className="text-4xl">ICON application</h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed">
            The partnership application is the Sprout Studio form. Every applicant gets a response.
          </p>
          <div className="mt-8 bg-[#CCCCCE] p-4 text-[#020405] sm:p-8">
            <SproutStudioLeadForm leadFormId="1860679" className="w-full flex justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
