import type { Metadata } from "next";
import SproutStudioLeadForm from "@/components/SproutStudioLeadForm";
import { FRAME } from "@/lib/agency";

export const metadata: Metadata = {
  title: "Apply for the ICON Brand Partnership | West Rose Media",
  description:
    "Apply for the ICON Brand Partnership. From $5,000 CAD per month, on a six or twelve month commitment.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <div className="bg-[#020405] text-[#CCCCCE]">
      <section className={`${FRAME} max-w-3xl py-16 lg:py-24`}>
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">Application</p>
        <h1 className="mt-4 text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.95]">
          Apply for the ICON Brand Partnership
        </h1>
        <div className="mt-8 space-y-6 text-[17px] leading-[1.75]">
          <p>
            ICON Brand Partnership is the West Rose Media inner system for the founder ready to scale past running a business and into being an icon in her industry. Known by name. Sought out by opportunity. Recognized as a leader in her category.
          </p>
          <p>
            The partnership delivers a complete content team inside her business without her having to hire one. Stephanie Rose leads strategic creative direction, brand and offer building, and business coaching. The West Rose Media team handles ongoing photography, video, social content, and launch assets. Aligned execution turns her decisions into work fast enough that every idea ships while it is still hot.
          </p>
          <p>
            ICON Brand Partnership is open. It runs on a 6-month or 12-month commitment. From $5,000 CAD per month. Applications are reviewed carefully. Every applicant gets a response.
          </p>
        </div>

        <div className="mt-14">
          <h2 className="text-3xl">Who should apply</h2>
          <div className="mt-4 space-y-4 leading-relaxed">
            <p>This partnership is best suited for founders who:</p>
            <ul className="space-y-2">
              <li>Are already generating consistent revenue</li>
              <li>See brand and visibility as a growth lever, not a nice to have</li>
              <li>Want a strategic partner to handle content end to end</li>
              <li>Are comfortable investing several thousand dollars per month in their brand</li>
            </ul>
            <p>If you are earlier in your business or looking for a single shoot, this will not be the right fit.</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl">Location and logistics</h2>
          <div className="mt-4 space-y-4 leading-relaxed">
            <p>
              West Rose Media works with founders across North America, with recurring work in Calgary, Vancouver, and Toronto.
            </p>
            <p>
              ICON Brand Partnership clients collaborate remotely on strategy and planning, with content captured through scheduled travel dates and intentional shoot days.
            </p>
            <p>You do not need to live in the same city to apply.</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl">The application process</h2>
          <div className="mt-4 space-y-4 leading-relaxed">
            <p>Applications are reviewed carefully.</p>
            <p>
              All applicants will receive a response. If the partnership is aligned, you will be contacted with next steps. If it is not the right fit at this time, you will still hear from us.
            </p>
          </div>
        </div>

        <div id="application" className="mt-14 bg-[#CCCCCE] p-4 text-[#020405] sm:p-8">
          <SproutStudioLeadForm leadFormId="1860679" className="w-full flex justify-center" />
        </div>
      </section>
    </div>
  );
}
