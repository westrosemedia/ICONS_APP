import type { Metadata } from "next";
import Image from "next/image";
import WrmButton from "@/components/agency/WrmButton";
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
      <header>
        <div className="wrm-ink bg-[#F4F4F4] text-[#404042]">
          <div className={`${FRAME} max-w-3xl py-20 lg:py-28`}>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">Calgary</p>
            <div className="mt-5 h-0.5 w-16 bg-[#2D4B70]" />
            <h1 className="mt-6 max-w-[12ch] text-[clamp(3.4rem,7vw,6.6rem)] leading-[0.88]">
              The Agency
            </h1>
            <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed">
              <p>
                Stephanie Rose is the founder and creative director of West Rose Media, a premium brand photography and content studio based in Calgary, Alberta, Canada.
              </p>
              <p>
                She leads strategy and creative direction and works alongside a team of professional photographers, videographers, and content producers. The flagship engagement is the ICON Brand Partnership.
              </p>
            </div>
            <div className="mt-10">
              <WrmButton href="/work-with-us" variant="ink">
                Work with us
              </WrmButton>
            </div>
          </div>
        </div>
        <div className="relative min-h-[72vh] overflow-hidden">
          <Image
            src={portraits.featured}
            alt="Stephanie Rose"
            fill
            priority
            className="object-cover object-[center_22%]"
            sizes="100vw"
          />
        </div>
      </header>

      <section className="wrm-rise bg-[#404042]">
        <div className={`${FRAME} grid gap-10 py-20 lg:grid-cols-12 lg:py-28`}>
          <h2 className="text-[clamp(2.4rem,4vw,4rem)] leading-[0.95] lg:col-span-5">
            High-end content is a trust decision.
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
