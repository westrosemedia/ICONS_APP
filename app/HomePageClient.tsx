import Image from "next/image";
import Link from "next/link";
import WrmButton from "@/components/agency/WrmButton";
import { homePageFaqItems } from "@/data/homePageFaq";
import { FRAME, portraits } from "@/lib/agency";
import { homepageResults } from "@/lib/clientResults";

const openingPictures = [
  { src: portraits.hero, alt: "Stephanie Rose", position: "object-[center_18%]" },
  { src: portraits.still, alt: "Stephanie Rose", position: "object-[center_30%]" },
];

export default function HomePageClient() {
  return (
    <div>
      <section className="bg-[#020405] text-[#F4F4F4]">
        <div className="grid min-h-[calc(100svh-3.5rem)] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-14 lg:py-12">
            <div className="h-0.5 w-12 bg-[#916545]" />
            <h1 className="mt-8 max-w-[8.5em] text-[clamp(2.5rem,4.4vw,4.5rem)] font-normal uppercase leading-[0.88]">
              The art of being impossible to ignore.
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-[#CCCCCE]">
              For founders who want a brand people compliment, views that get them taken seriously, and a business that sells out.
            </p>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-[#F4F4F4]">Working with me is seamless.</p>
            <div className="mt-10">
              <WrmButton href="/apply" variant="solid">
                Apply for ICON
              </WrmButton>
            </div>
          </div>
          <div className="grid gap-3 px-5 pb-5 sm:px-8 lg:grid-rows-[1.4fr_1fr] lg:py-3 lg:pl-0 lg:pr-3">
            {openingPictures.map((picture) => (
              <div key={picture.src} className="relative min-h-[38vh] overflow-hidden lg:min-h-0">
                <Image
                  src={picture.src}
                  alt={picture.alt}
                  fill
                  priority
                  className={`object-cover ${picture.position}`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wrm-ink bg-[#F4F4F4] text-[#404042]">
        <div className={`${FRAME} max-w-4xl space-y-8 py-24 lg:py-32`}>
          <div className="h-0.5 w-16 bg-[#2D4B70]" />
          <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,4vw,3.4rem)] leading-[1.12] text-[#020405]">
            The brand does not get compliments.
          </p>
          <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,4vw,3.4rem)] leading-[1.12] text-[#020405]">
            The views do not match the business.
          </p>
          <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,4vw,3.4rem)] leading-[1.12] text-[#020405]">
            Selling still feels hard.
          </p>
        </div>
      </section>

      <section className="bg-[#020405] text-[#CCCCCE]">
        <div className={`${FRAME} max-w-3xl py-24 lg:py-32`}>
          <div className="h-0.5 w-16 bg-[#916545]" />
          <p className="mt-8 font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,4vw,3.2rem)] leading-[1.15] text-[#F4F4F4]">
            The brand and the views come from the same work.
          </p>
          <p className="mt-6 text-lg leading-relaxed">I lead it, so you do not assemble a team.</p>
          <p className="mt-4 text-lg leading-relaxed">
            You get monthly strategy intensives and a working roadmap, full content execution with a trusted thought partner, and publishing and analytics.
          </p>
          <div className="mt-10">
            <WrmButton href="/apply" variant="solid">
              Apply for ICON
            </WrmButton>
          </div>
        </div>
      </section>

      <section className="wrm-ink bg-[#F4F4F4] text-[#404042]">
        <div className={`${FRAME} max-w-3xl space-y-8 py-20 text-lg leading-relaxed lg:py-28`}>
          <div className="h-0.5 w-16 bg-[#2D4B70]" />
          <h2 className="max-w-[14ch] text-[clamp(2.4rem,4.5vw,3.8rem)] leading-[1] text-[#020405]">
            ICON Brand Partnership
          </h2>
          <p>ICON is where I run the brand and the views together.</p>
          <p>It is open, from $5,000 CAD per month, on a six or twelve month commitment, by application.</p>
          <WrmButton href="/apply" variant="ink">
            Apply for ICON
          </WrmButton>
          <p>Private 1:1 is direct time with me on the strategy behind the brand. It is full.</p>
          <p>
            Hot & Rich is four months with me on the strategy I am running now. It opens in January at $6,000 CAD. Biweekly live calls, text support inside the group three days a week, and a ticket to Wildly Wealthy Woman Live in Banff, March 2027.
          </p>
          <p>
            Manifesting & Marketing is six months with Stephanie Rose and Jackie McDonald. It opens in January at $14,000 CAD, or $20,000 CAD with the retreat. Weekly coaching, personal tapping sessions, Cadence, and the Story Stack. The retreat adds Kananaskis. Signing up includes a ticket to Wildly Wealthy Woman Live.
          </p>
        </div>
      </section>

      <section className="bg-[#020405] text-[#CCCCCE]">
        <div className={`${FRAME} py-20 lg:py-28`}>
          <div className="h-0.5 w-16 bg-[#916545]" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#F4F4F4]">These are the views.</p>
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
                <figcaption className="mx-auto mt-6 max-w-sm text-lg leading-relaxed text-[#F4F4F4]">
                  {result.caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-16 max-w-xl text-lg leading-relaxed text-[#F4F4F4]">
            Everyone online is obsessed with me, and it is easy to see why.
          </p>
          <p className="mt-8 text-lg">
            <Link href="/results" className="border-b border-[#916545] pb-0.5 text-[#F4F4F4]">
              Read the client results
            </Link>
          </p>
        </div>
      </section>

      <section className="wrm-ink bg-[#F4F4F4] text-[#404042]">
        <div className={`${FRAME} max-w-3xl py-20 lg:py-28`}>
          <div className="h-0.5 w-16 bg-[#2D4B70]" />
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed">
            <p>Apply. Every applicant gets a response.</p>
            <p>Strategy and the work are handled with me.</p>
            <p>ICON is open, from $5,000 CAD per month, for six or twelve months. Private 1:1 is full.</p>
          </div>
          <h2 className="mt-16 text-5xl text-[#020405]">Questions</h2>
          <div className="mt-10 border-t border-[#CCCCCE]">
            {homePageFaqItems.map((item) => (
              <details key={item.question} className="border-b border-[#CCCCCE] py-5">
                <summary className="cursor-pointer list-none font-[family-name:var(--font-wrm-display)] text-2xl leading-snug text-[#020405]">
                  {item.question}
                </summary>
                <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#404042]">{item.answer}</p>
              </details>
            ))}
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
          <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed">
            <p>
              Stephanie Rose is the founder and creative director of West Rose Media, a premium brand photography and content studio based in Calgary, Alberta, Canada.
            </p>
            <p>
              West Rose Media was built during a season of real, irreversible change. I built this business while leaving religion, getting divorced, coming out, and raising three kids on my own. Later, I met my partner and built a life that finally felt aligned. Through all of it, the business kept working.
            </p>
          </div>
          <div className="mt-10 flex flex-col items-start gap-5">
            <WrmButton href="/apply" variant="ink">
              Apply for ICON
            </WrmButton>
            <Link href="/work-with-us" className="border-b border-[#2D4B70] pb-0.5 text-[#020405]">
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
