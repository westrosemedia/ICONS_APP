import type { Metadata } from "next";
import SproutStudioLeadForm from "@/components/SproutStudioLeadForm";
import WrmButton from "@/components/agency/WrmButton";
import {
  COACHING_ENQUIRY_URL,
  FRAME,
  PHONE_DISPLAY,
  PHONE_TEL,
  PUBLIC_EMAIL,
} from "@/lib/agency";

export const metadata: Metadata = {
  title: "Contact | West Rose Media",
  description:
    "Contact West Rose Media. Apply for the ICON Brand Partnership, enquire about private 1:1 coaching, or call the studio.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-[#E9E1D7] text-[#171515]">
      <div className={`${FRAME} grid gap-16 py-16 lg:grid-cols-12 lg:py-24`}>
        <div className="lg:col-span-5">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">Contact</p>
          <h1 className="mt-4 text-[clamp(3.2rem,6vw,5.5rem)] leading-[0.9]">Write, call, or apply.</h1>
          <div className="mt-10 space-y-6 text-lg">
            <p>
              <a href={PHONE_TEL} className="border-b border-[#171515]">
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>
              <a href={`mailto:${PUBLIC_EMAIL}`} className="border-b border-[#171515]">
                {PUBLIC_EMAIL}
              </a>
            </p>
            <p className="max-w-sm text-base leading-relaxed text-[#171515]/80">
              Calgary, Alberta. Strategy can happen remotely. Photography and video are scheduled in Calgary, Vancouver, Toronto, and on travel dates.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-start gap-3">
            <WrmButton href={COACHING_ENQUIRY_URL} external variant="line">
              Enquire about 1:1
            </WrmButton>
            <WrmButton href="/hot-and-viral" variant="line">
              Hot & Viral
            </WrmButton>
          </div>
        </div>
        <div id="application" className="lg:col-span-6 lg:col-start-7">
          <h2 className="text-4xl">ICON application</h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed">
            The partnership application is the Sprout Studio form. Every applicant gets a response.
          </p>
          <div className="mt-8 bg-white p-4 sm:p-8">
            <SproutStudioLeadForm leadFormId="1860679" className="w-full flex justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
