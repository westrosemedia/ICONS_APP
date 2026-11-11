import Image from "next/image";
import type { Metadata } from "next";
import AboutStructuredData from "@/components/AboutStructuredData";
import PaletteBand from "@/components/agency/PaletteBand";
import WrmButton from "@/components/agency/WrmButton";
import { FRAME, portraits } from "@/lib/agency";

export const metadata: Metadata = {
  title: "About Stephanie Rose | West Rose Media",
  description:
    "Stephanie Rose is the founder and creative director of West Rose Media, a premium brand photography and content studio based in Calgary.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Stephanie Rose | West Rose Media",
    description:
      "Founder and creative director of West Rose Media. Strategy, photography, video, and brand positioning for founders across Canada.",
    url: "https://westrosemedia.com/about",
    siteName: "West Rose Media",
    images: [
      {
        url: portraits.hero,
        width: 1200,
        height: 630,
        alt: "Stephanie Rose",
      },
    ],
    type: "website",
    locale: "en_CA",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#020405] text-[#CCCCCE]">
      <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={portraits.hero}
            alt="Stephanie Rose, founder of West Rose Media"
            fill
            priority
            className="object-cover object-[center_18%] wrm-ken"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020405] via-[#020405]/35 to-[#020405]/15" />
        <div className={`${FRAME} relative z-10 flex flex-1 max-w-none flex-col justify-end pb-10 pt-16`}>
          <p className="wrm-fade text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">About Stephanie</p>
          <h1 className="wrm-fade-late mt-4 text-[clamp(4rem,9vw,8rem)] leading-[0.84] text-[#F4F4F4]">
            Stephanie
            <span className="block italic text-[#916545]">Rose</span>
          </h1>
        </div>
        <div className="relative z-10">
          <PaletteBand blue="Founder" camel="Calgary" />
        </div>
      </section>

      <section className="wrm-rise">
        <div className={`${FRAME} max-w-3xl py-20 lg:py-28`}>
          <div className="max-w-xl space-y-5 text-[17px] leading-[1.75]">
            <p>
              Stephanie Rose is the founder and creative director of West Rose Media, a premium brand photography and content studio based in Calgary, Alberta, Canada. She works with established founders, coaches, and entrepreneurs across Canada, specializing in brand photography, video content, and strategic brand positioning.
            </p>
            <p>
              She leads strategy and creative direction and works alongside a team of professional photographers, videographers, and content producers. The flagship engagement is the ICON Brand Partnership. West Rose Media serves clients in Calgary, Vancouver, Toronto, and across North America.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WrmButton href="/work-with-us">Work with us</WrmButton>
            <WrmButton href="/apply" variant="line">
              Apply for ICON
            </WrmButton>
          </div>
        </div>
      </section>

      <section>
        <div className="relative h-[70vh] min-h-[420px] overflow-hidden">
          <Image
            src={portraits.story}
            alt="Stephanie Rose"
            fill
            className="object-cover object-[center_33%] wrm-ken"
            sizes="100vw"
          />
        </div>
        <div className={`${FRAME} max-w-3xl py-16 lg:py-24`}>
          <h2 className="text-5xl md:text-6xl">The story</h2>
          <div className="mt-10 space-y-6 text-[17px] leading-[1.8]">
            <p>
              West Rose Media was built during a season of real, irreversible change. I built this business while leaving religion, getting divorced, coming out, and raising three kids on my own. Later, I met my partner and built a life that finally felt aligned. Through all of it, the business kept working.
            </p>
            <p>
              That experience fundamentally shaped how I see brand and business. A strong brand is not fragile. It does not depend on trends, platforms, or a single version of your life. It is built to hold you through change, growth, grief, reinvention, and expansion. West Rose Media survived Covid, personal upheaval, and massive transition because it was built on clarity, integrity, and execution, not noise.
            </p>
            <p>
              West Rose Media is deeply committed to the queer community, not as a positioning strategy, but as lived experience. I know what it means to rebuild your identity while still needing your business to be stable, visible, and profitable. The work we do is designed to support real people with real lives, not a polished persona that collapses under pressure.
            </p>
            <p>
              Clients come to West Rose Media because they want a brand that can grow with them. One that supports their family, their future, their visibility, and their income without requiring them to burn everything down every few years. This is content and positioning built to last. Built to create trust. Built to carry you forward, no matter what changes next.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#404042]">
        <div className={`${FRAME} py-20 lg:py-24`}>
          <h2 className="text-5xl">What she does</h2>
          <div className="mt-12 grid gap-12 border-t border-[#CCCCCE]/25 pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-3xl">Photography and video</h3>
              <p className="mt-4 leading-relaxed">High-end visuals that make a business look as credible as it actually is.</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                <li>Personal brand shoots</li>
                <li>Campaign and launch visuals</li>
                <li>Event coverage and behind-the-scenes content</li>
                <li>Reels and short-form video assets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl">ICON Brand Partnership</h3>
              <p className="mt-4 leading-relaxed">
                A done-for-you content operation for founders who want strategy, production, and publishing handled end to end.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                <li>Strategy and content direction</li>
                <li>Monthly production, photo and video</li>
                <li>Copy support and publishing workflows</li>
                <li>Content that builds trust and inbound demand</li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl">Event coverage</h3>
              <p className="mt-4 leading-relaxed">
                Multi-day content capture for founders and teams who want the room, the energy, and the results documented.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                <li>Event photo and video coverage</li>
                <li>Same-day asset delivery options</li>
                <li>Content built for immediate demand</li>
                <li>A post-event content pipeline</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#020405] text-[#CCCCCE]">
        <div className={`${FRAME} max-w-3xl py-20 lg:py-28`}>
          <p className="font-[family-name:var(--font-wrm-display)] text-3xl italic leading-snug text-white">
            High-end content is not an aesthetic choice. It is a trust decision.
          </p>
          <div className="mt-8 space-y-5 text-[17px] leading-[1.75]">
            <p>
              When a founder’s online presence matches their real capability, the market responds faster. Better leads. Better opportunities. Cleaner sales conversations.
            </p>
            <p>West Rose Media is built for people who want to move. Clear direction, decisive execution, and content that looks like leadership.</p>
          </div>
        </div>
      </section>

      <div className="relative h-[68vh] min-h-[380px] overflow-hidden">
        <Image
          src={portraits.featured}
          alt="Stephanie Rose"
          fill
          className="object-cover object-[center_30%] wrm-ken"
          sizes="100vw"
        />
      </div>

      <section>
        <div className={`${FRAME} max-w-3xl py-20 text-left`}>
          <p className="text-[17px] leading-[1.75]">
            West Rose Media is based in Calgary and works with clients across Canada, including Vancouver and Toronto. The work is designed for established entrepreneurs, consultants, and event-led brands who want their presence to match their level.
          </p>
          <div className="mt-10">
            <WrmButton href="/contact">Contact</WrmButton>
          </div>
        </div>
      </section>
      <AboutStructuredData />
    </div>
  );
}
