import Image from "next/image";
import Link from "next/link";
import WrmButton from "@/components/agency/WrmButton";
import { homePageFaqItems } from "@/data/homePageFaq";
import { clientStudies, FRAME, iconCopy, portraits } from "@/lib/agency";
import { homePageAssets } from "@/lib/homePageAssets";

const capabilities = [
  {
    num: "01",
    title: "Strategic creative direction",
    body: "Stephanie Rose leads strategy and creative direction for every client. The work starts with the sale you want, then builds backwards from it.",
  },
  {
    num: "02",
    title: "Photography and video",
    body: "High-end visuals that make a business look as credible as it actually is. Personal brand shoots, campaign and launch visuals, event coverage, and short-form video.",
  },
  {
    num: "03",
    title: "Social content and launch assets",
    body: "Copy, publishing, and launch assets handled as one system, so an idea ships while it is still hot.",
  },
  {
    num: "04",
    title: "Brand and offer building",
    body: "Positioning, offers, and the public story, aligned so the woman online matches the one who already earned the room.",
  },
];

export default function HomePageClient() {
  return (
    <div className="bg-[#E9E1D7] text-[#171515]">
      <section className="grid min-h-[calc(100svh-73px)] lg:grid-cols-12">
        <div className={`${FRAME} flex flex-col justify-end py-16 lg:col-span-6 lg:max-w-none lg:py-20 lg:pr-10`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">
            West Rose Media
          </p>
          <h1 className="mt-6 text-[clamp(3.1rem,5.6vw,5.4rem)] uppercase leading-[0.88]">
            <span className="block">The art of being</span>
            <span className="mt-3 block font-normal normal-case italic leading-[0.92]">
              impossible to ignore.
            </span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed">
            Beautifully disruptive. Strategically brilliant. Built to be remembered.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[#171515]/80">
            West Rose Media is a creative growth agency for brands ready to make a bigger impression.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WrmButton href="/the-work">Explore the work</WrmButton>
            <WrmButton href="/work-with-us" variant="line">
              Work with us
            </WrmButton>
          </div>
        </div>
        <div className="relative min-h-[72vh] lg:col-span-6 lg:min-h-full">
          <Image
            src={portraits.hero}
            alt="Stephanie Rose, founder of West Rose Media"
            fill
            priority
            className="object-cover object-[center_18%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="border-t border-[#171515]/15 bg-white">
        <div className={`${FRAME} grid gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
          <h2 className="text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] lg:col-span-5">
            Pretty is not a strategy.
          </h2>
          <div className="max-w-xl space-y-6 text-[17px] leading-[1.75] lg:col-span-6 lg:col-start-7">
            <p>
              Your clients refer you without being asked. Women you worked with a year ago still message you about what changed for them. Then someone clicks your profile, and the woman they find online is two sizes smaller than the one who earned all of it.
            </p>
            <p>
              A PR firm asks a gatekeeper to validate you and rents you borrowed authority. The day the coverage stops, the momentum stops with it. West Rose Media builds the audience you own. The trust compounds in public, and it keeps working after any single feature would have faded.
            </p>
            <p>Your brand deserves more than another content calendar.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#171515]">
        <video
          className="mx-auto max-h-[82vh] w-full object-cover"
          src={homePageAssets.topVideo}
          poster={homePageAssets.topVideoStill}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      </section>

      <section>
        <div className={`${FRAME} py-20 lg:py-28`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">
            Capabilities
          </p>
          <h2 className="mt-4 max-w-[14ch] text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95]">
            What the studio actually does.
          </h2>
          <div className="mt-14 border-t border-[#171515]">
            {capabilities.map((item) => (
              <div
                key={item.num}
                className="grid gap-4 border-b border-[#171515] py-8 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <p className="font-[family-name:var(--font-wrm-display)] text-3xl text-[#A66A55] md:col-span-2">
                  {item.num}
                </p>
                <h3 className="text-3xl md:col-span-4">{item.title}</h3>
                <p className="text-[16px] leading-relaxed text-[#171515]/80 md:col-span-6">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${FRAME} py-20 lg:py-28`}>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">
                The work
              </p>
              <h2 className="mt-4 max-w-[12ch] text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95]">
                Real clients. Documented results.
              </h2>
            </div>
            <WrmButton href="/the-work" variant="line">
              Explore the work
            </WrmButton>
          </div>

          <div className="mt-16 space-y-20">
            {clientStudies.map((study, index) => (
              <article
                key={study.href}
                className="grid items-end gap-8 border-t border-[#171515]/15 pt-10 lg:grid-cols-12"
              >
                <div className={`relative aspect-[4/5] lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                </div>
                <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#A66A55]">
                    0{index + 1} — {study.place}
                  </p>
                  <h3 className="mt-3 text-5xl md:text-6xl">{study.name}</h3>
                  <p className="mt-4 text-sm uppercase tracking-[0.16em]">{study.industry}</p>
                  <p className="mt-6 text-xl leading-snug">{study.result}</p>
                  <Link
                    href={study.href}
                    className="mt-8 inline-block border-b border-[#171515] pb-1 text-[11px] uppercase tracking-[0.2em]"
                  >
                    Read the study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className={`${FRAME} grid gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">
              Point of view
            </p>
            <h2 className="mt-4 text-[clamp(2.6rem,5vw,4.4rem)] leading-[0.95]">
              Visibility should have a purpose.
            </h2>
          </div>
          <div className="max-w-xl space-y-6 text-[17px] leading-[1.75] lg:col-span-6 lg:col-start-7">
            <p>
              Your content is never neutral. Every safe post quietly trains the right people to scroll past you. You rarely catch it happening. You just notice the inquiries are smaller than they should be.
            </p>
            <p>
              A photo that is almost right. A caption you talked yourself down from. A profile that still looks like where you were two years ago. Each one tells a buyer you are operating below the level she needs.
            </p>
            <p className="font-[family-name:var(--font-wrm-display)] text-3xl italic leading-snug text-[#4A1828]">
              Stop blending in. Start building a brand people remember.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#4A1828] text-[#E9E1D7]">
        <div className={`${FRAME} grid gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#B7A38E]">
              Flagship
            </p>
            <h2 className="mt-4 text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] text-white">
              {iconCopy.heroTitle}
            </h2>
            <p className="mt-6 max-w-md text-xl text-white">{iconCopy.heroSubtitle}</p>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.75] text-[#E9E1D7]/90">{iconCopy.intro}</p>
            <p className="mt-8 font-[family-name:var(--font-wrm-display)] text-3xl text-white">
              From $5,000 CAD per month
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#B7A38E]">
              Open. Six or twelve month commitment. By application.
            </p>
            <div className="mt-8">
              <WrmButton href="/icon" variant="light">
                ICON Brand Partnership
              </WrmButton>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:col-span-5 lg:col-start-8">
            <Image
              src={portraits.icon}
              alt="ICON Brand Partnership"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[#171515]/15">
        <div className={`${FRAME} grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
          <div className="relative aspect-[4/5] lg:col-span-5">
            <Image
              src={portraits.featured}
              alt="Stephanie Rose"
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">
              Private
            </p>
            <h2 className="mt-4 text-[clamp(2.6rem,4.5vw,4.4rem)] leading-[0.95]">
              Private 1:1 Coaching
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.75]">
              Private 1:1 coaching is full.
            </p>
            <div className="mt-8">
              <WrmButton href="/coaching" variant="line">
                Private 1:1 is full
              </WrmButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#171515]">
        <div className={`${FRAME} py-20 lg:py-24`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">
            Two masterminds. Both open in January.
          </p>
          <div className="mt-12 grid gap-16 lg:grid-cols-2">
            <article>
              <h2 className="text-5xl">Hot & Rich</h2>
              <p className="mt-6 text-[17px] leading-[1.75]">
                A separate program from the Manifesting & Marketing Mastermind. It opens in January. $6,000 CAD for four months.
              </p>
              <ul className="mt-6 space-y-2 text-[16px] leading-relaxed">
                <li>Biweekly live calls with Stephanie</li>
                <li>Text support inside the group, three days a week</li>
                <li>The exact strategy she is running right now</li>
                <li>Ticket to Wildly Wealthy Woman Live, Banff, March 2027</li>
              </ul>
              <div className="mt-8">
                <WrmButton href="/hot-and-rich" variant="line">
                  Hot & Rich
                </WrmButton>
              </div>
            </article>
            <article>
              <h2 className="text-5xl">Manifesting & Marketing</h2>
              <p className="mt-6 text-[17px] leading-[1.75]">
                Stephanie Rose and Jackie McDonald. Six months. It opens in January. This is not Hot & Rich.
              </p>
              <ul className="mt-6 space-y-2 text-[16px] leading-relaxed">
                <li>$14,000 CAD. Weekly coaching, personal tapping sessions, Cadence, and the Story Stack.</li>
                <li>$20,000 CAD. Everything above, plus the Kananaskis retreat.</li>
                <li>Signing up includes a ticket to Wildly Wealthy Woman Live.</li>
              </ul>
              <div className="mt-8">
                <WrmButton href="/mastermind" variant="line">
                  Manifesting & Marketing
                </WrmButton>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#171515]">
        <div className={`${FRAME} flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center`}>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#A66A55]">Also</p>
            <h2 className="mt-2 text-4xl md:text-5xl">Hot & Viral</h2>
          </div>
          <Link
            href="/hot-and-viral"
            className="border-b border-[#171515] pb-1 text-[12px] uppercase tracking-[0.22em]"
          >
            Enter Hot & Viral
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className={`${FRAME} grid gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
          <div className="relative min-h-[520px] lg:col-span-6">
            <Image
              src={portraits.story}
              alt="Stephanie Rose"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">
              Founder
            </p>
            <h2 className="mt-4 text-[clamp(2.4rem,4vw,3.8rem)] leading-[1]">
              There&apos;s a woman behind the strategy. And she has opinions.
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-[1.75]">
              <p>
                West Rose Media was built during a season of real, irreversible change. Stephanie built this business while leaving religion, getting divorced, coming out, and raising three kids on her own. Later, she met her partner and built a life that finally felt aligned. Through all of it, the business kept working.
              </p>
              <p>
                A strong brand is not fragile. It does not depend on trends, platforms, or a single version of your life. It is built to hold you through change, growth, grief, reinvention, and expansion.
              </p>
            </div>
            <div className="mt-8">
              <WrmButton href="/about" variant="line">
                About Stephanie
              </WrmButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#171515] text-[#E9E1D7]">
        <div className={`${FRAME} py-24 text-left lg:py-32`}>
          <h2 className="max-w-[16ch] text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.92] text-white">
            Stop blending in. Start building a brand people remember.
          </h2>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <WrmButton href="/the-work" variant="light">
              Explore the work
            </WrmButton>
            <WrmButton href="/work-with-us" variant="light">
              Work with us
            </WrmButton>
          </div>
        </div>
      </section>

      <section>
        <div className={`${FRAME} max-w-3xl py-20 lg:py-28`}>
          <h2 className="text-5xl">Questions</h2>
          <div className="mt-10 border-t border-[#171515]/20">
            {homePageFaqItems.map((item) => (
              <details key={item.question} className="border-b border-[#171515]/20 py-5">
                <summary className="cursor-pointer list-none font-[family-name:var(--font-wrm-display)] text-2xl leading-snug">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#171515]/80">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
