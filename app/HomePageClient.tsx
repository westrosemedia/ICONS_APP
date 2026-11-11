import Image from "next/image";
import Link from "next/link";
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

type ProofPlate = {
  image: HotAndViralImage;
  name?: string;
  lines: string[];
  className?: string;
  sizes: string;
};

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

const erinAfter = proofImage("/hot-and-viral/erin-after.jpg");

const phoneProof: ProofPlate[] = [
  {
    image: proofImage("/hot-and-viral/cammy-after-1-4m.jpg"),
    name: "Cammy",
    lines: ["1,417,529 views"],
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    image: proofImage("/hot-and-viral/reel-401k-follows.jpg"),
    name: "Stephanie Rose",
    lines: ["401,794 views", "12,157 follows"],
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  {
    image: proofImage("/hot-and-viral/cammy-reel-420k.jpg"),
    name: "Cammy",
    lines: ["419,979 views"],
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
];

const statProof: ProofPlate[] = [
  {
    image: proofImage("/hot-and-viral/views-4-9-million.jpg"),
    lines: ["4,940,292 views", "34,711 followers"],
    className: "lg:col-span-7",
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
  {
    image: proofImage("/hot-and-viral/views-2-2-million.jpg"),
    lines: ["30-day insights", "2,243,099 views", "10,977 new followers"],
    className: "lg:col-span-5",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  {
    image: proofImage("/hot-and-viral/views-1-9-million-week.jpg"),
    lines: ["7-day insights", "1,905,912 views", "12,994 new followers"],
    className: "lg:col-span-5",
    sizes: "(max-width: 1024px) 100vw, 40vw",
  },
  {
    image: proofImage("/hot-and-viral/cammy-90-days.jpg"),
    name: "Cammy",
    lines: ["1,388,924 views", "978 followers"],
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
  {
    image: proofImage("/hot-and-viral/erin-summary.jpg"),
    name: "Erin",
    lines: [
      "August 11 to November 8",
      "94,337 views, up 483.6% versus August 10",
      "602 followers, up 18.3%",
      "93 net followers",
    ],
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
  {
    image: proofImage("/hot-and-viral/video-views-417k.jpg"),
    lines: ["417,100 views", "9,900 new followers"],
    className: "lg:col-span-7",
    sizes: "(max-width: 1024px) 100vw, 58vw",
  },
];

function ProofFigure({
  plate,
  tone = "ink",
}: {
  plate: ProofPlate;
  tone?: "ink" | "light";
}) {
  const nameColor = tone === "light" ? "text-[#B7A38E]" : "text-[#A66A55]";
  const lineColor = tone === "light" ? "text-[#E9E1D7]/80" : "text-[#171515]/75";

  return (
    <figure className={plate.className}>
      <Image
        src={plate.image.src}
        alt={plate.image.alt}
        width={plate.image.width}
        height={plate.image.height}
        sizes={plate.sizes}
        className="h-auto w-full ring-1 ring-[#171515]/10"
      />
      <figcaption className="mt-4">
        {plate.name ? (
          <p className={`text-[11px] font-medium uppercase tracking-[0.22em] ${nameColor}`}>
            {plate.name}
          </p>
        ) : null}
        <div className={plate.name ? "mt-2" : undefined}>
          {plate.lines.map((line) => (
            <p key={line} className={`text-[15px] leading-relaxed ${lineColor}`}>
              {line}
            </p>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

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
        <div className={`${FRAME} pt-20 lg:pt-28`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[#A66A55]">
            The views
          </p>
          <h2 className="mt-4 max-w-[12ch] text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95]">
            Look at the views.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[#171515]/80">
            Real accounts. Real content. Real reach.
          </p>

          <figure className="mt-16 grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Image
                src={erinAfter.src}
                alt={erinAfter.alt}
                width={erinAfter.width}
                height={erinAfter.height}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full lg:max-w-[640px]"
              />
            </div>
            <figcaption className="lg:sticky lg:top-24 lg:col-span-4 lg:col-start-9 lg:self-start">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#A66A55]">
                Erin
              </p>
              <p className="mt-4 font-[family-name:var(--font-wrm-display)] text-5xl leading-[0.95] md:text-6xl">
                5,258 views
              </p>
              <p className="mt-6 max-w-sm text-[16px] leading-relaxed text-[#171515]/80">
                {erinAfter.alt}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 bg-[#171515] text-[#E9E1D7] lg:mt-28">
          <div className={`${FRAME} grid gap-14 py-16 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-3 lg:py-24`}>
            {phoneProof.map((plate) => (
              <figure key={plate.image.src} className="flex flex-col">
                <div className="flex items-end justify-center lg:h-[70vh] lg:max-h-[780px] lg:min-h-[520px]">
                  <Image
                    src={plate.image.src}
                    alt={plate.image.alt}
                    width={plate.image.width}
                    height={plate.image.height}
                    sizes={plate.sizes}
                    className="h-auto w-full object-contain lg:h-full lg:w-auto lg:max-w-full"
                  />
                </div>
                <figcaption className="mt-6">
                  {plate.name ? (
                    <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#B7A38E]">
                      {plate.name}
                    </p>
                  ) : null}
                  <div className="mt-2">
                    {plate.lines.map((line) => (
                      <p key={line} className="text-[15px] leading-relaxed text-[#E9E1D7]/85">
                        {line}
                      </p>
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className={`${FRAME} grid gap-16 py-20 lg:gap-24 lg:py-28`}>
          <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-10">
            <ProofFigure plate={statProof[0]} />
            <ProofFigure plate={statProof[1]} />
          </div>
          <div className="grid items-start gap-16 lg:grid-cols-12 lg:gap-10">
            <ProofFigure plate={statProof[2]} />
            <div className="grid content-start gap-16 lg:col-span-7">
              <ProofFigure plate={statProof[3]} />
              <ProofFigure plate={statProof[4]} />
            </div>
          </div>
          <div className="grid lg:grid-cols-12">
            <ProofFigure plate={statProof[5]} />
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
