import Image from "next/image";
import CinematicVideo from "@/components/agency/CinematicVideo";
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
    light: true,
    paragraphs: [
      "One of Erin’s later reels reached 5,258 views.",
      "Erin creates content around tapping and mindfulness for parents.",
    ],
  },
  {
    image: proofImage("/hot-and-viral/cammy-after-1-4m.jpg"),
    name: "Cammy",
    light: false,
    paragraphs: [
      "Cammy’s reel reached 1,417,529 views.",
      "Cammy had been posting consistently for six months.",
    ],
  },
  {
    image: proofImage("/hot-and-viral/reel-401k-follows.jpg"),
    name: "Stephanie Rose",
    light: true,
    paragraphs: ["Stephanie Rose’s reel reached 401,794 views and 12,157 follows."],
  },
  {
    image: proofImage("/hot-and-viral/erin-summary.jpg"),
    name: "Erin",
    light: false,
    paragraphs: [
      "From August 11 to November 8, Erin’s account generated 94,337 views, up 483.6% versus August 10.",
      "Erin creates content around tapping and mindfulness for parents.",
    ],
  },
];

export default function HomePageClient() {
  return (
    <div>
      <section className="wrm-ink bg-[#F4F4F4] text-[#404042]">
        <div className={`${FRAME} max-w-3xl py-20 lg:py-28`}>
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">Stephanie Rose</p>
          <div className="mt-5 h-0.5 w-16 bg-[#2D4B70]" />
          <h1 className="mt-8 max-w-[11em] text-[clamp(2.8rem,6.2vw,5.6rem)] font-normal uppercase leading-[0.88] text-[#020405]">
            The art of being impossible to ignore.
          </h1>
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-[#404042]">
            <p>
              Stephanie Rose is the founder and creative director of West Rose Media, a premium brand photography and content studio based in Calgary, Alberta, Canada.
            </p>
            <p>
              She works with established founders, coaches, and entrepreneurs across Canada, specializing in brand photography, video content, and strategic brand positioning.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#020405] text-[#CCCCCE]">
        <div className="relative min-h-[78vh] overflow-hidden">
          <div className="absolute inset-0">
            <CinematicVideo src={homePageAssets.topVideo} poster={homePageAssets.topVideoStill} />
          </div>
        </div>
        <p className={`${FRAME} py-6 text-sm tracking-wide text-[#CCCCCE]`}>
          Stephanie Rose, founder of West Rose Media.
        </p>
      </section>

      {proofs.map((proof) => (
        <figure
          key={proof.image.src}
          className={proof.light ? "bg-[#F4F4F4] text-[#404042]" : "bg-[#020405] text-[#CCCCCE]"}
        >
          <div className="grid items-center lg:grid-cols-2">
            <div className={`px-5 py-10 sm:px-8 lg:px-14 ${proof.light ? "" : "lg:order-2"}`}>
              <Image
                src={proof.image.src}
                alt={proof.image.alt}
                width={proof.image.width}
                height={proof.image.height}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="mx-auto h-auto max-h-[78vh] w-full object-contain"
              />
            </div>
            <figcaption className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-16 lg:py-24">
              <div className={`h-0.5 w-12 ${proof.light ? "bg-[#2D4B70]" : "bg-[#916545]"}`} />
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">{proof.name}</p>
              <div className="mt-6 max-w-md space-y-4 text-lg leading-relaxed">
                {proof.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </figcaption>
          </div>
        </figure>
      ))}

      <section className="wrm-ink bg-[#F4F4F4] text-[#404042]">
        <div className={`${FRAME} max-w-3xl space-y-8 py-20 text-lg leading-relaxed lg:py-28`}>
          <div className="h-0.5 w-16 bg-[#2D4B70]" />
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">Work with us</p>
          <h2 className="max-w-[12ch] text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1] text-[#020405]">
            {iconCopy.heroTitle}
          </h2>
          <p>
            ICON Brand Partnership is open. It starts at $5,000 CAD per month, on a six or twelve month commitment, by application. Monthly strategy intensives and a working roadmap, full content execution with a trusted thought partner, and publishing and analytics that drive real decisions.
          </p>
          <h2 className="pt-4 text-3xl text-[#020405]">Private 1:1 coaching</h2>
          <p>Private 1:1 coaching is direct time with Stephanie Rose on the strategy behind the brand. It is full.</p>
          <h2 className="pt-4 text-3xl text-[#020405]">Hot & Rich</h2>
          <p>
            Hot & Rich opens in January. It is $6,000 CAD for four months with Stephanie: biweekly live calls, text support inside the group three days a week, the strategy she is running now, and a ticket to Wildly Wealthy Woman Live in Banff, March 2027.
          </p>
          <h2 className="pt-4 text-3xl text-[#020405]">Manifesting & Marketing</h2>
          <p>
            Manifesting & Marketing opens in January. Stephanie Rose and Jackie McDonald. It is $14,000 CAD, or $20,000 CAD with the retreat. Six months of weekly coaching, personal tapping sessions, Cadence, and the Story Stack. The retreat tier adds Kananaskis. Signing up includes a ticket to Wildly Wealthy Woman Live.
          </p>
          <div className="flex flex-col gap-3 pt-4 sm:flex-row">
            <WrmButton href="/work-with-us" variant="quiet">
              Work with us
            </WrmButton>
            <WrmButton href="/apply" variant="ink">
              Apply for ICON
            </WrmButton>
          </div>
        </div>
      </section>

      <section className="grid bg-[#020405] lg:grid-cols-2">
        <div className="relative min-h-[70vh]">
          <Image
            src={portraits.story}
            alt="Stephanie Rose"
            fill
            className="object-cover object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-[#F4F4F4] px-5 py-16 text-[#404042] sm:px-8 lg:px-16">
          <div className="h-0.5 w-12 bg-[#2D4B70]" />
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">Stephanie Rose</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            West Rose Media was built during a season of real, irreversible change. I built this business while leaving religion, getting divorced, coming out, and raising three kids on my own. Later, I met my partner and built a life that finally felt aligned. Through all of it, the business kept working.
          </p>
          <div className="mt-10">
            <WrmButton href="/about" variant="ink">
              About Stephanie
            </WrmButton>
          </div>
        </div>
      </section>

      <section className="bg-[#020405] text-[#CCCCCE]">
        <div className={`${FRAME} max-w-3xl py-20 lg:py-28`}>
          <h2 className="text-5xl text-[#F4F4F4]">Questions</h2>
          <div className="mt-10 border-t border-[#666668]">
            {homePageFaqItems.map((item) => (
              <details key={item.question} className="border-b border-[#666668] py-5">
                <summary className="cursor-pointer list-none font-[family-name:var(--font-wrm-display)] text-2xl leading-snug text-[#F4F4F4]">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#CCCCCE]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
