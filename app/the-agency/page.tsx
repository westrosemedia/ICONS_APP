import type { Metadata } from "next";
import Image from "next/image";
import WrmButton from "@/components/agency/WrmButton";
import PaletteBand from "@/components/agency/PaletteBand";
import { FRAME, portraits } from "@/lib/agency";

export const metadata: Metadata = {
  title: "The Agency | West Rose Media",
  description:
    "How West Rose Media works: high-end photography and video for social media, with strategy and publishing in the same studio. Based in Calgary.",
  alternates: { canonical: "/the-agency" },
};

export default function TheAgencyPage() {
  return (
    <div className="bg-[#020405] text-[#CCCCCE]">
      <header className="relative flex min-h-[calc(100svh-4.5rem)] flex-col">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={portraits.featured}
            alt="Stephanie Rose"
            fill
            priority
            className="object-cover object-[center_22%] wrm-ken"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020405] via-[#020405]/45 to-[#020405]/20" />
        <div className={`${FRAME} relative z-10 flex flex-1 max-w-none flex-col justify-end pb-10 pt-16`}>
          <h1 className="wrm-fade-late max-w-[12ch] text-[clamp(3.4rem,7vw,6.6rem)] leading-[0.88] text-[#F4F4F4]">
            The Agency
          </h1>
          <div className="wrm-fade-late mt-10">
            <WrmButton href="/work-with-us" variant="blue">
              Work with us
            </WrmButton>
          </div>
        </div>
        <div className="relative z-10">
          <PaletteBand />
        </div>
      </header>

      <section className="wrm-rise bg-[#404042]">
        <div className={`${FRAME} grid gap-10 py-20 lg:grid-cols-12 lg:py-28`}>
          <h2 className="text-[clamp(2.4rem,4vw,4rem)] leading-[0.95] lg:col-span-5">
            High-end content is not an aesthetic choice. It is a trust decision.
          </h2>
          <div className="max-w-xl space-y-6 text-[17px] leading-[1.75] lg:col-span-6 lg:col-start-7">
            <p>
              When a founder’s online presence matches their real capability, the market responds faster. Better leads. Better opportunities. Cleaner sales conversations.
            </p>
            <p>
              West Rose Media is built for people who want to move. Clear direction, decisive execution, and content that looks like leadership.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#404042] text-[#CCCCCE]">
        <div className={`${FRAME} grid items-end gap-10 py-20 lg:grid-cols-12 lg:py-24`}>
          <div className="lg:col-span-7">
            <h2 className="max-w-[16ch] text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] text-white">
              ICON Brand Partnership
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.75]">
              ICON Brand Partnership is open. It is the inner system: strategic creative direction, brand and offer building, photography, video, social content, and launch assets, run as one team. <span className="text-[#916545]">From $5,000 CAD per month.</span> Six or twelve months. By application.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WrmButton href="/icon" variant="light">
                ICON Brand Partnership
              </WrmButton>
              <WrmButton href="/the-work" variant="light">
                Explore the work
              </WrmButton>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden lg:col-span-5">
            <Image
              src={portraits.partnership}
              alt="West Rose Media client work"
              fill
              className="object-cover wrm-ken"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
