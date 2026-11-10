import type { Metadata } from "next";
import Image from "next/image";
import WrmButton from "@/components/agency/WrmButton";
import { FRAME, portraits } from "@/lib/agency";

export const metadata: Metadata = {
  title: "The Agency | West Rose Media",
  description:
    "West Rose Media is a creative growth agency based in Calgary. Strategy, photography, video, and the ICON Brand Partnership for founders across Canada.",
  alternates: { canonical: "/the-agency" },
};

const practices = [
  {
    title: "Direction",
    body: "Stephanie leads strategy and creative direction. Goals, positioning, and the version of the brand that should be in public are set before anyone picks up a camera.",
  },
  {
    title: "Making",
    body: "Photography and video for founders, campaigns, and live rooms. The point is credibility, not a prettier grid.",
  },
  {
    title: "Publishing",
    body: "Social content and launch assets, edited and prepared so execution does not fall back on the founder.",
  },
];

export default function TheAgencyPage() {
  return (
    <div className="bg-[#E9E1D7] text-[#171515]">
      <header className="grid lg:grid-cols-12">
        <div className={`${FRAME} py-16 lg:col-span-6 lg:max-w-none lg:py-24 lg:pr-8`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">The agency</p>
          <h1 className="mt-4 text-[clamp(3.2rem,6.4vw,6rem)] leading-[0.9]">
            Built to be remembered.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed">
            West Rose Media is a creative growth agency for brands ready to make a bigger impression. Based in Calgary. Working with founders across North America, with regular shoot calendars in Calgary, Vancouver, and Toronto.
          </p>
        </div>
        <div className="relative min-h-[60vh] lg:col-span-6">
          <Image
            src={portraits.featured}
            alt="Stephanie Rose"
            fill
            priority
            className="object-cover object-[center_22%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </header>

      <section className="bg-white">
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
            <p>Pretty is not a strategy.</p>
          </div>
        </div>
      </section>

      <section>
        <div className={`${FRAME} py-20 lg:py-28`}>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#A66A55]">How the work is held</p>
          <div className="mt-12 grid gap-12 border-t border-[#171515] pt-12 md:grid-cols-3">
            {practices.map((item) => (
              <div key={item.title} className="border-t border-[#A66A55] pt-6 md:border-t-0 md:border-l md:pl-6 md:pt-0 md:first:border-l-0 md:first:pl-0">
                <h2 className="text-4xl">{item.title}</h2>
                <p className="mt-4 text-[16px] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#4A1828] text-[#E9E1D7]">
        <div className={`${FRAME} grid items-end gap-10 py-20 lg:grid-cols-12 lg:py-24`}>
          <div className="lg:col-span-7">
            <h2 className="max-w-[16ch] text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] text-white">
              The flagship is a partnership, not a content calendar.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.75]">
              ICON Brand Partnership is the inner system: strategic creative direction, brand and offer building, photography, video, social content, and launch assets, run as one team. From $5,000 CAD per month. Six or twelve months. By application.
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
          <div className="relative min-h-[360px] lg:col-span-5">
            <Image
              src={portraits.partnership}
              alt="West Rose Media client work"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
