import Image from "next/image";
import Link from "next/link";
import CinematicVideo from "@/components/agency/CinematicVideo";
import PaletteBand from "@/components/agency/PaletteBand";
import WrmButton from "@/components/agency/WrmButton";
import { homePageFaqItems } from "@/data/homePageFaq";
import { FRAME, iconCopy, portraits } from "@/lib/agency";
import {
  cammyMore,
  cammyShots,
  memberResults,
  winShots,
  type HotAndViralImage,
} from "@/lib/hotAndViral";
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

function proofImage(src: string): HotAndViralImage {
  const pool: Array<HotAndViralImage | null> = [
    ...winShots,
    ...cammyMore,
    cammyShots.before,
    cammyShots.after,
    ...memberResults.flatMap((member) => [
      member.before,
      member.after,
      member.summary ?? null,
      member.profile ?? null,
    ]),
  ];
  const image = pool.find((item) => item?.src === src);
  if (!image) {
    throw new Error(`Homepage proof image is missing: ${src}`);
  }
  return image;
}

const proofs = [
  {
    image: proofImage("/hot-and-viral/erin-after.jpg"),
    name: "Erin",
    sentence:
      "Erin’s later reels show view counts of 4,552, 774, 3,471, 2,850, 5,258, 3,807, 925, 1,514 and 852.",
  },
  {
    image: proofImage("/hot-and-viral/cammy-after-1-4m.jpg"),
    name: "Cammy",
    sentence: "Cammy’s reel insights show 1,417,529 views.",
  },
  {
    image: proofImage("/hot-and-viral/reel-401k-follows.jpg"),
    name: "Stephanie Rose",
    sentence: "Stephanie Rose’s reel insights show 401,794 views and 12,157 follows.",
  },
  {
    image: proofImage("/hot-and-viral/erin-summary.jpg"),
    name: "Erin",
    sentence:
      "From August 11 to November 8, Erin’s account had 94,337 views, up 483.6% versus August 10, 602 followers, up 18.3%, and 93 net followers.",
  },
  {
    image: proofImage("/hot-and-viral/cammy-90-days.jpg"),
    name: "Cammy",
    sentence: "Cammy’s 90-day summary shows 1,388,924 views and 978 followers.",
  },
];

export default function HomePageClient() {
  return (
    <div className="bg-[#020405] text-[#CCCCCE]">
      <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col">
        <div className="absolute inset-0 overflow-hidden">
          <CinematicVideo src={homePageAssets.topVideo} poster={homePageAssets.topVideoStill} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020405] via-[#020405]/50 to-[#020405]/25" />
        <div className={`${FRAME} relative z-10 flex flex-1 max-w-none flex-col justify-end pb-10 pt-16`}>
          <p className="wrm-fade text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">
            West Rose Media
          </p>
          <h1 className="wrm-fade-late mt-6 max-w-[8em] text-[clamp(2.7rem,6.6vw,6.2rem)] font-normal uppercase leading-[0.84] text-[#F4F4F4]">
            The art of being
            <span className="mt-2 block italic text-[#916545]">impossible to ignore.</span>
          </h1>
          <p className="wrm-fade-late mt-8 text-lg text-[#F4F4F4]">Stephanie Rose. Calgary.</p>
          <div className="wrm-fade-late mt-10 flex flex-col gap-3 sm:flex-row">
            <WrmButton href="/the-agency" variant="blue">
              The agency
            </WrmButton>
            <WrmButton href="/work-with-us" variant="camel">
              Work with us
            </WrmButton>
          </div>
        </div>
        <div className="relative z-10">
          <PaletteBand />
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#CCCCCE]/15">
        <div className="wrm-marquee flex w-max">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              className="px-6 py-4 text-[11px] uppercase tracking-[0.28em] text-[#CCCCCE]"
              aria-hidden={copy === 1}
            >
              The art of being impossible to ignore · Stephanie Rose · Calgary · Vancouver · Toronto ·
            </p>
          ))}
        </div>
      </div>

      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src={portraits.hero}
          alt="Stephanie Rose, founder of West Rose Media"
          fill
          priority
          className="object-cover object-[center_18%] wrm-ken"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020405] via-[#020405]/25 to-transparent" />
        <div className={`${FRAME} relative z-10 flex min-h-[92vh] max-w-none flex-col justify-end pb-16`}>
          <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(3.2rem,7vw,6.4rem)] leading-[0.88] text-[#F4F4F4]">
            Stephanie Rose
          </p>
        </div>
      </section>

      <section className="wrm-rise border-t border-[#CCCCCE]/15">
        <div className={`${FRAME} grid gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
          <h2 className="text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] text-[#F4F4F4] lg:col-span-5">
            Pretty is not a strategy.
          </h2>
          <div className="max-w-xl space-y-6 text-[17px] leading-[1.75] lg:col-span-6 lg:col-start-7">
            <p>
              West Rose Media makes high-end photography and video for social media, then holds the strategy and the publishing in the same studio.
            </p>
            <p>
              Your clients refer you without being asked. Women you worked with a year ago still message you about what changed for them. Then someone clicks your profile, and the woman they find online is two sizes smaller than the one who earned all of it.
            </p>
            <p>
              A PR firm asks a gatekeeper to validate you and rents you borrowed authority. The day the coverage stops, the momentum stops with it. West Rose Media builds the audience you own. The trust compounds in public, and it keeps working after any single feature would have faded.
            </p>
            <p>Your brand deserves more than another content calendar.</p>
            <WrmButton href="/the-agency" variant="line">
              The agency
            </WrmButton>
          </div>
        </div>
      </section>

      <section>
        <div className={`${FRAME} py-20 lg:py-28`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">
            Capabilities
          </p>
          <h2 className="mt-4 max-w-[14ch] text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95]">
            What the studio actually does.
          </h2>
          <div className="mt-14 border-t border-[#CCCCCE]/25">
            {capabilities.map((item) => (
              <div
                key={item.num}
                className="grid gap-4 border-b border-[#CCCCCE]/25 py-8 md:grid-cols-12 md:items-baseline md:gap-8"
              >
                <p className="font-[family-name:var(--font-wrm-display)] text-3xl text-[#CCCCCE] md:col-span-2">
                  {item.num}
                </p>
                <h3 className="text-3xl md:col-span-4">{item.title}</h3>
                <p className="text-[16px] leading-relaxed text-[#CCCCCE]/80 md:col-span-6">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#020405]">
        <div className={`${FRAME} pt-20 lg:pt-28`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">
            The views
          </p>
          <h2 className="mt-4 max-w-[12ch] text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95]">
            Look at the views.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[#CCCCCE]/80">
            Real accounts. Real content. Real reach.
          </p>

        </div>

        <div className="mt-8">
          {proofs.map((proof) => (
            <figure key={proof.image.src} className="border-t border-[#CCCCCE]/25">
              <div className={`${FRAME} grid items-start gap-10 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24`}>
                <div className="lg:col-span-6">
                  <Image
                    src={proof.image.src}
                    alt={proof.image.alt}
                    width={proof.image.width}
                    height={proof.image.height}
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="mx-auto h-auto max-h-[78vh] w-full object-contain"
                  />
                </div>
                <figcaption className="lg:col-span-5 lg:col-start-8">
                  <p className="inline-block bg-[#2D4B70] px-5 py-3 font-[family-name:var(--font-wrm-display)] text-4xl leading-none text-[#F4F4F4] md:text-5xl">
                    {proof.name}
                  </p>
                  <p className="mt-6 max-w-md font-[family-name:var(--font-wrm-display)] text-[clamp(1.6rem,2.4vw,2.15rem)] italic leading-snug text-[#916545]">
                    {proof.sentence}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <div className={`${FRAME} grid gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
          <div className="lg:col-span-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">
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
            <p className="font-[family-name:var(--font-wrm-display)] text-3xl italic leading-snug text-[#F4F4F4]">
              Stop blending in. Start building a brand people remember.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#404042] text-[#CCCCCE]">
        <div className={`${FRAME} grid gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
          <div className="lg:col-span-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">
              Flagship
            </p>
            <h2 className="mt-4 text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] text-white">
              {iconCopy.heroTitle}
            </h2>
            <p className="mt-6 max-w-md text-xl text-white">{iconCopy.heroSubtitle}</p>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.75] text-[#CCCCCE]/90">{iconCopy.intro}</p>
            <p className="mt-8 font-[family-name:var(--font-wrm-display)] text-3xl text-[#916545]">
              From $5,000 CAD per month
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#CCCCCE]">
              Open. Six or twelve month commitment. By application.
            </p>
            <div className="mt-8">
              <WrmButton href="/icon" variant="light">
                ICON Brand Partnership
              </WrmButton>
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden lg:col-span-5 lg:col-start-8">
            <Image
              src={portraits.icon}
              alt="ICON Brand Partnership"
              fill
              className="object-cover object-[center_30%] wrm-ken"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[#CCCCCE]/15">
        <div className={`${FRAME} grid items-center gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Image
              src={portraits.featured}
              alt="Stephanie Rose"
              fill
              className="object-cover object-[center_20%] wrm-ken"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">
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

      <section className="border-t border-[#CCCCCE]/25">
        <div className={`${FRAME} py-20 lg:py-24`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">
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

      <section className="border-y border-[#CCCCCE]/25">
        <div className={`${FRAME} flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center`}>
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#CCCCCE]">Also</p>
            <h2 className="mt-2 text-4xl md:text-5xl">Hot & Viral</h2>
          </div>
          <Link
            href="/hot-and-viral"
            className="border-b border-[#CCCCCE]/50 pb-1 text-[12px] uppercase tracking-[0.22em]"
          >
            Enter Hot & Viral
          </Link>
        </div>
      </section>

      <section className="bg-[#020405]">
        <div className={`${FRAME} grid gap-12 py-20 lg:grid-cols-12 lg:py-28`}>
          <div className="relative min-h-[520px] overflow-hidden lg:col-span-6">
            <Image
              src={portraits.story}
              alt="Stephanie Rose"
              fill
              className="object-cover object-[center_30%] wrm-ken"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#CCCCCE]">
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

      <section className="bg-[#020405] text-[#CCCCCE]">
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
          <div className="mt-10 border-t border-[#CCCCCE]/20">
            {homePageFaqItems.map((item) => (
              <details key={item.question} className="border-b border-[#CCCCCE]/20 py-5">
                <summary className="cursor-pointer list-none font-[family-name:var(--font-wrm-display)] text-2xl leading-snug">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#CCCCCE]/80">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
