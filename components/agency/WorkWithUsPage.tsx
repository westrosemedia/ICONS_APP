import WrmButton from "@/components/agency/WrmButton";
import PaletteBand from "@/components/agency/PaletteBand";
import { FRAME, iconCopy } from "@/lib/agency";

const offers = [
  {
    index: "01",
    kicker: "Flagship. Open.",
    title: "ICON Brand Partnership",
    href: "/icon",
    body: iconCopy.intro,
    meta: "Open. From $5,000 CAD per month. Six or twelve month commitment. By application.",
    cta: "Read the partnership",
  },
  {
    index: "02",
    kicker: "Private. Full.",
    title: "Private 1:1 Coaching",
    href: "/coaching",
    body: "Direct time with Stephanie on the strategy behind the brand. Private 1:1 coaching is full.",
    meta: "This offer is full.",
    cta: "Private 1:1 is full",
  },
  {
    index: "03",
    kicker: "Mastermind. Opens in January.",
    title: "Hot & Rich",
    href: "/hot-and-rich",
    body: "Four months with Stephanie. Biweekly live calls, text support inside the group three days a week, the strategy she is running now, and a ticket to Wildly Wealthy Woman Live in Banff, March 2027.",
    meta: "Opens in January. $6,000 CAD for four months.",
    cta: "Hot & Rich",
  },
  {
    index: "04",
    kicker: "Mastermind. Opens in January.",
    title: "Manifesting & Marketing",
    href: "/mastermind",
    body: "Stephanie Rose and Jackie McDonald. Six months of weekly coaching, personal tapping sessions, Cadence, and the Story Stack. The retreat tier adds Kananaskis. Signing up includes a ticket to Wildly Wealthy Woman Live.",
    meta: "Opens in January. $14,000 CAD, or $20,000 CAD with the retreat.",
    cta: "Manifesting & Marketing",
  },
  {
    index: "05",
    kicker: "Membership",
    title: "Hot & Viral",
    href: "/hot-and-viral",
    body: "A live membership for getting your content seen. Dates, price, and how to join are on its own page.",
    meta: "Open the page for the current window.",
    cta: "Enter Hot & Viral",
  },
];

export default function WorkWithUsPage() {
  return (
    <div className="bg-[#020405] text-[#CCCCCE]">
      <PaletteBand />
      <header className={`${FRAME} flex min-h-[calc(100svh-10rem)] flex-col justify-end pb-16 pt-16`}>
        <h1 className="max-w-[14ch] text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.9]">
          What is open, what is full, what opens in January.
        </h1>
        <div className="mt-10">
          <WrmButton href="/apply" variant="blue">
            Apply for ICON
          </WrmButton>
        </div>
      </header>

      <div className={`${FRAME} pb-24`}>
        {offers.map((offer) => (
          <article key={offer.href} className="border-t border-[#CCCCCE]/25 py-12 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-12">
              <p className="font-[family-name:var(--font-wrm-display)] text-4xl text-[#CCCCCE] lg:col-span-2">
                {offer.index}
              </p>
              <div className="lg:col-span-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#CCCCCE]">{offer.kicker}</p>
                <h2 className="mt-3 text-[clamp(2.2rem,4vw,3.6rem)] leading-[1]">{offer.title}</h2>
                <p className="mt-6 max-w-xl text-[17px] leading-[1.75]">{offer.body}</p>
              </div>
              <div className="flex flex-col justify-between gap-8 lg:col-span-4">
                <p className="text-sm leading-relaxed text-[#CCCCCE]/75">{offer.meta}</p>
                <WrmButton href={offer.href} variant={offer.href === "/hot-and-viral" ? "solid" : "line"}>
                  {offer.cta}
                </WrmButton>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
