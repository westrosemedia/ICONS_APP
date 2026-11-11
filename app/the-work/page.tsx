import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PaletteBand from "@/components/agency/PaletteBand";
import { clientStudies, FRAME } from "@/lib/agency";

export const metadata: Metadata = {
  title: "The Work | West Rose Media",
  description:
    "Client work from West Rose Media: Jen, Cheryl, and Jackie. Existing stories, photographs, and results only.",
  alternates: { canonical: "/the-work" },
};

export default function TheWorkPage() {
  return (
    <div className="bg-[#020405] text-[#CCCCCE]">
      <PaletteBand />
      <header className={`${FRAME} pb-6 pt-12 lg:pt-16`}>
        <h1 className="max-w-[12ch] text-[clamp(3.4rem,7vw,6.4rem)] leading-[0.88]">
          The work
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed">
          Jen, Cheryl, and Jackie. The names, industries, photographs, and results already published on this site.
        </p>
      </header>

      {clientStudies.map((study, index) => (
        <article key={study.href} className="border-t border-[#CCCCCE]/25">
          <div className={`${FRAME} grid gap-10 py-16 lg:grid-cols-12 lg:py-24`}>
            <div className={`relative min-h-[70vh] overflow-hidden lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image
                src={study.image}
                alt={study.imageAlt}
                fill
                className="object-cover object-center wrm-ken"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority={index === 0}
              />
            </div>
            <div className={`flex flex-col justify-end lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#CCCCCE]">
                0{index + 1} / {study.place}
              </p>
              <h2 className="mt-3 text-[clamp(3.2rem,6vw,5.4rem)] leading-[0.9]">{study.name}</h2>
              <p className="mt-4 text-sm uppercase tracking-[0.16em]">{study.industry}</p>
              <p className="mt-8 font-[family-name:var(--font-wrm-display)] text-3xl italic leading-snug text-[#916545]">
                {study.result}
              </p>
              <p className="mt-6 text-[17px] leading-[1.75]">{study.story}</p>
              <p className="mt-4 text-[17px] leading-[1.75] text-[#CCCCCE]/80">{study.fit}</p>
              <Link
                href={study.href}
                className="mt-8 inline-block w-fit border-b border-[#CCCCCE]/25 pb-1 text-[11px] uppercase tracking-[0.2em]"
              >
                Open the full study
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
