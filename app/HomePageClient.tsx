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
    sentence: "One of Erin’s later reels reached 5,258 views.",
  },
  {
    image: proofImage("/hot-and-viral/cammy-after-1-4m.jpg"),
    name: "Cammy",
    sentence: "Cammy’s reel reached 1,417,529 views.",
  },
  {
    image: proofImage("/hot-and-viral/reel-401k-follows.jpg"),
    name: "Stephanie Rose",
    sentence: "Stephanie Rose’s reel reached 401,794 views.",
  },
  {
    image: proofImage("/hot-and-viral/erin-summary.jpg"),
    name: "Erin",
    sentence: "From August 11 to November 8, Erin’s views were up 483.6% versus August 10.",
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
          <h1 className="wrm-fade-late max-w-[8em] text-[clamp(2.7rem,6.6vw,6.2rem)] font-normal uppercase leading-[0.84] text-[#F4F4F4]">
            The art of being
            <span className="mt-2 block italic text-[#916545]">impossible to ignore.</span>
          </h1>
          <p className="wrm-fade-late mt-8 text-lg text-[#F4F4F4]">Stephanie Rose. Calgary.</p>
          <div className="wrm-fade-late mt-10">
            <WrmButton href="/work-with-us" variant="blue">
              Work with us
            </WrmButton>
          </div>
        </div>
        <div className="relative z-10">
          <PaletteBand />
        </div>
      </section>

      <section>
        {proofs.map((proof) => (
          <figure key={proof.image.src} className="border-t border-[#CCCCCE]/20">
            <div className={`${FRAME} grid items-start gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16`}>
              <div className="lg:col-span-7">
                <Image
                  src={proof.image.src}
                  alt={proof.image.alt}
                  width={proof.image.width}
                  height={proof.image.height}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="h-auto max-h-[82vh] w-full object-contain object-left"
                />
              </div>
              <figcaption className="lg:col-span-5 lg:pt-4">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#F4F4F4]">{proof.name}</p>
                <p className="mt-5 max-w-md font-[family-name:var(--font-wrm-display)] text-[clamp(1.8rem,3vw,2.8rem)] italic leading-[1.15] text-[#916545]">
                  {proof.sentence}
                </p>
              </figcaption>
            </div>
          </figure>
        ))}
      </section>

      <section className="border-t border-[#CCCCCE]/20">
        <div className={`${FRAME} flex min-h-[calc(100svh-4.5rem)] flex-col justify-end py-20`}>
          <h2 className="max-w-[14ch] text-[clamp(3rem,6vw,5.4rem)] leading-[0.9] text-[#F4F4F4]">
            {iconCopy.heroTitle}
          </h2>
          <p className="mt-8 font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,4vw,3.4rem)] text-[#916545]">
            From $5,000 CAD per month
          </p>
          <p className="mt-4 text-lg text-[#F4F4F4]">Open. Six or twelve months. By application.</p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed">
            Private 1:1 coaching is full. Hot & Rich opens in January at $6,000 CAD for four months. Manifesting & Marketing, with Stephanie Rose and Jackie McDonald, opens in January at $14,000 CAD, or $20,000 CAD with the retreat.{" "}
            <Link href="/hot-and-viral" className="border-b border-[#CCCCCE]/40 text-[#F4F4F4]">
              Hot & Viral
            </Link>{" "}
            keeps its own page.
          </p>
          <div className="mt-10">
            <WrmButton href="/apply" variant="blue">
              Apply for ICON
            </WrmButton>
          </div>
        </div>
      </section>

      <section>
        <div className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden">
          <Image
            src={portraits.story}
            alt="Stephanie Rose"
            fill
            className="object-cover object-[center_30%] wrm-ken"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020405] via-[#020405]/35 to-[#020405]/10" />
          <div className={`${FRAME} relative z-10 flex min-h-[calc(100svh-4.5rem)] max-w-none flex-col justify-end pb-16`}>
            <h2 className="max-w-xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-[#F4F4F4]">
              Stephanie Rose
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F4F4F4]">
              Stephanie Rose is the founder and creative director of West Rose Media, a premium brand photography and content studio based in Calgary, Alberta, Canada.
            </p>
            <div className="mt-10">
              <WrmButton href="/about" variant="camel">
                About Stephanie
              </WrmButton>
            </div>
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
