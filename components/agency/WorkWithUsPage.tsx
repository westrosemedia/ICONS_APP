import Link from "next/link";
import WrmButton from "@/components/agency/WrmButton";
import { COACHING_ENQUIRY_URL, FRAME, iconCopy } from "@/lib/agency";

const offers = [
  {
    index: "01",
    kicker: "Flagship",
    title: "ICON Brand Partnership",
    href: "/icon",
    body: iconCopy.intro,
    meta: "From $5,000 CAD per month. Six or twelve month commitment. By application.",
    cta: "Read the partnership",
  },
  {
    index: "02",
    kicker: "Private",
    title: "Private 1:1 Coaching",
    href: "/coaching",
    body: "Direct time with Stephanie on the strategy behind the brand. There is no public price and no published inclusion list. Enquire if you want to talk about fit.",
    meta: "Availability is confirmed in the enquiry, not on this page.",
    cta: "Enquire",
  },
  {
    index: "03",
    kicker: "Separate page",
    title: "Hot & Viral",
    href: "/hot-and-viral",
    body: "Hot & Viral is a separate live membership. It keeps its own page. This is the link.",
    meta: "The membership is not redesigned here.",
    cta: "Enter Hot & Viral",
  },
];

export default function WorkWithUsPage() {
  return (
    <div className="bg-[#E9E1D7] text-[#171515]">
      <header className={`${FRAME} pb-8 pt-16 lg:pt-24`}>
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">Work with us</p>
        <h1 className="mt-4 max-w-[14ch] text-[clamp(3.2rem,7vw,6.2rem)] leading-[0.9]">
          Three ways to work together.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed">
          ICON Brand Partnership, private 1:1 coaching, and Hot & Viral. Photography and video are part of how the studio works. They are not listed here as separate packages.
        </p>
      </header>

      <div className={`${FRAME} pb-24`}>
        {offers.map((offer) => (
          <article key={offer.href} className="border-t border-[#171515] py-12 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-12">
              <p className="font-[family-name:var(--font-wrm-display)] text-4xl text-[#A66A55] lg:col-span-2">
                {offer.index}
              </p>
              <div className="lg:col-span-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-[#A66A55]">{offer.kicker}</p>
                <h2 className="mt-3 text-[clamp(2.2rem,4vw,3.6rem)] leading-[1]">{offer.title}</h2>
                <p className="mt-6 max-w-xl text-[17px] leading-[1.75]">{offer.body}</p>
              </div>
              <div className="flex flex-col justify-between gap-8 lg:col-span-4">
                <p className="text-sm leading-relaxed text-[#171515]/75">{offer.meta}</p>
                {offer.href === "/coaching" ? (
                  <div className="flex flex-col items-start gap-4">
                    <WrmButton href={offer.href} variant="line">
                      {offer.cta}
                    </WrmButton>
                    <a
                      href={COACHING_ENQUIRY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] uppercase tracking-[0.18em] underline underline-offset-4"
                    >
                      Continue the enquiry
                    </a>
                  </div>
                ) : (
                  <WrmButton href={offer.href} variant={offer.href === "/hot-and-viral" ? "solid" : "line"}>
                    {offer.cta}
                  </WrmButton>
                )}
              </div>
            </div>
          </article>
        ))}
        <p className="border-t border-[#171515] pt-8 text-sm text-[#171515]/70">
          Partnership applications go through the{" "}
          <Link href="/apply" className="underline underline-offset-4">
            Sprout application
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
