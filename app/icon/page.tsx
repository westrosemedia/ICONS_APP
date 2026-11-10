import type { Metadata } from "next";
import Image from "next/image";
import WrmButton from "@/components/agency/WrmButton";
import { FRAME, iconCopy, portraits } from "@/lib/agency";

export const metadata: Metadata = {
  title: "ICON Brand Partnership | West Rose Media",
  description:
    "ICON Brand Partnership is open. From $5,000 CAD per month, on a six or twelve month commitment. By application.",
  alternates: { canonical: "/icon" },
};

export default function IconPage() {
  return (
    <div className="bg-[#E9E1D7] text-[#171515]">
      <header className="grid lg:grid-cols-12">
        <div className={`${FRAME} py-16 lg:col-span-6 lg:max-w-none lg:py-24`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">Flagship</p>
          <h1 className="mt-4 text-[clamp(3rem,6vw,5.6rem)] leading-[0.9]">{iconCopy.heroTitle}</h1>
          <p className="mt-6 max-w-lg text-2xl leading-snug">{iconCopy.heroSubtitle}</p>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.75]">{iconCopy.intro}</p>
          <p className="mt-8 font-[family-name:var(--font-wrm-display)] text-4xl">From $5,000 CAD / month</p>
          <p className="mt-3 text-sm uppercase tracking-[0.16em] text-[#A66A55]">
            Open. Six or twelve month commitment. GST included on a typical engagement.
          </p>
        </div>
        <div className="relative min-h-[64vh] lg:col-span-6">
          <Image
            src={portraits.icon}
            alt="ICON Brand Partnership"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </header>

      <section className="bg-white">
        <div className={`${FRAME} grid gap-12 py-20 lg:grid-cols-12 lg:py-24`}>
          <h2 className="text-5xl lg:col-span-4">What you get</h2>
          <ol className="lg:col-span-7 lg:col-start-6">
            {iconCopy.bullets.map((bullet, index) => (
              <li key={bullet} className="grid grid-cols-[auto_1fr] gap-6 border-t border-[#171515] py-6 text-lg">
                <span className="font-[family-name:var(--font-wrm-display)] text-[#A66A55]">0{index + 1}</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <div className={`${FRAME} grid gap-12 py-20 lg:grid-cols-2 lg:py-24`}>
          <div>
            <h2 className="text-5xl">{iconCopy.howTitle}</h2>
            <ol className="mt-8 space-y-6">
              {iconCopy.howSteps.map((step, index) => (
                <li key={step} className="text-lg leading-relaxed">
                  <span className="mr-3 text-[#A66A55]">0{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className="max-w-xl space-y-6 text-[17px] leading-[1.75]">
            <p>{iconCopy.bigPromise}</p>
            <p>{iconCopy.beliefShift}</p>
            <p>
              ICON Brand Partnership is open. Stephanie wants to scale it. It is by application. Every applicant gets a response. You do not need to live in the same city. Strategy and planning happen remotely, with content captured on scheduled shoot days and travel dates.
            </p>
            <p className="text-sm uppercase tracking-[0.14em] text-[#171515]/70">{iconCopy.priceLine}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#4A1828] text-white">
        <div className={`${FRAME} flex flex-col items-start gap-8 py-20 lg:py-24`}>
          <h2 className="max-w-[16ch] text-[clamp(2.6rem,5vw,4.5rem)] leading-[0.95]">
            Apply for the ICON Brand Partnership.
          </h2>
          <WrmButton href="/apply#application" variant="light">
            {iconCopy.ctaLabel}
          </WrmButton>
        </div>
      </section>
    </div>
  );
}
