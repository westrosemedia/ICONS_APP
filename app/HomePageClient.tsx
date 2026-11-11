import Image from "next/image";
import Link from "next/link";
import CinematicVideo from "@/components/agency/CinematicVideo";
import WrmButton from "@/components/agency/WrmButton";
import { homePageFaqItems } from "@/data/homePageFaq";
import { FRAME, iconCopy, portraits } from "@/lib/agency";
import { homepageResults } from "@/lib/clientResults";
import { homePageAssets } from "@/lib/homePageAssets";

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

      <section className="wrm-ink bg-[#F4F4F4] text-[#404042]">
        <div className={`${FRAME} py-20 lg:py-28`}>
          <div className="h-0.5 w-16 bg-[#2D4B70]" />
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">Results</p>
          <div className="mt-16 grid gap-x-16 gap-y-20 sm:grid-cols-2">
            {homepageResults.map((result) => (
              <figure key={result.image.src} className="flex flex-col">
                <Image
                  src={result.image.src}
                  alt={result.image.alt}
                  width={result.image.width}
                  height={result.image.height}
                  sizes="(max-width: 640px) 100vw, 42vw"
                  className="mx-auto h-auto max-h-[460px] w-auto max-w-full object-contain"
                />
                <figcaption className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-[#404042]">
                  {result.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-16 text-lg">
            <Link href="/results" className="border-b border-[#2D4B70] pb-0.5 text-[#020405]">
              Client results
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-[#020405] text-[#CCCCCE]">
        <div className={`${FRAME} max-w-3xl space-y-8 py-20 text-lg leading-relaxed lg:py-28`}>
          <div className="h-0.5 w-16 bg-[#916545]" />
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">Work with us</p>
          <h2 className="max-w-[12ch] text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1] text-[#F4F4F4]">
            {iconCopy.heroTitle}
          </h2>
          <p>
            ICON Brand Partnership is open. It starts at $5,000 CAD per month, on a six or twelve month commitment, by application. Monthly strategy intensives and a working roadmap, full content execution with a trusted thought partner, and publishing and analytics that drive real decisions.{" "}
            <Link href="/apply" className="border-b border-[#916545] pb-0.5 text-[#F4F4F4]">
              Apply for ICON
            </Link>
          </p>
          <h2 className="pt-4 text-3xl text-[#F4F4F4]">Private 1:1 coaching</h2>
          <p>Private 1:1 coaching is direct time with Stephanie Rose on the strategy behind the brand. It is full.</p>
          <h2 className="pt-4 text-3xl text-[#F4F4F4]">Hot & Rich</h2>
          <p>
            Hot & Rich opens in January. It is $6,000 CAD for four months with Stephanie: biweekly live calls, text support inside the group three days a week, the strategy she is running now, and a ticket to Wildly Wealthy Woman Live in Banff, March 2027.
          </p>
          <h2 className="pt-4 text-3xl text-[#F4F4F4]">Manifesting & Marketing</h2>
          <p>
            Manifesting & Marketing opens in January. Stephanie Rose and Jackie McDonald. It is $14,000 CAD, or $20,000 CAD with the retreat. Six months of weekly coaching, personal tapping sessions, Cadence, and the Story Stack. The retreat tier adds Kananaskis. Signing up includes a ticket to Wildly Wealthy Woman Live.
          </p>
          <p>
            <Link href="/work-with-us" className="border-b border-[#916545] pb-0.5 text-[#F4F4F4]">
              Work with us
            </Link>
          </p>
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
