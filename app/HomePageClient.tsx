import Image from "next/image";
import Link from "next/link";
import WrmButton from "@/components/agency/WrmButton";
import { homePageFaqItems } from "@/data/homePageFaq";
import { FRAME, portraits } from "@/lib/agency";
import { homePageAssets } from "@/lib/homePageAssets";
import { homepageResults } from "@/lib/clientResults";

const pictures = {
  opening: portraits.featured,
  problem: portraits.still,
  approach:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_080.jpg?alt=media&token=d485b703-9e16-48e0-baeb-09c3e7dc0f35",
  offers:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_037.jpg?alt=media&token=04a83038-59fe-447a-8f3b-99900c5db7f1",
  cammy:
    "/hot-and-viral/stephanie-suit.jpg",
  erin:
    "/hot-and-viral/stephanie-camera.jpg",
  erinAccount:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_003.jpg?alt=media&token=62172af0-d2ad-4af1-a500-eb8a48d795a3",
  obsessed:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_038.jpg?alt=media&token=93446e09-e15f-4253-add9-a4ba78f05bdf",
} as const;

const proofLines = [
  {
    src: homePageAssets.topVideo,
    poster: portraits.hero,
    alt: "Stephanie Rose",
    line: homepageResults[1].caption,
    video: true,
    position: "object-center",
  },
  {
    src: pictures.cammy,
    alt: "Stephanie Rose",
    line: homepageResults[0].caption,
    video: false,
    position: "object-[center_40%] lg:object-center",
  },
  {
    src: pictures.erin,
    alt: "Stephanie Rose",
    line: homepageResults[2].caption,
    video: false,
    position: "object-[center_30%]",
  },
  {
    src: pictures.erinAccount,
    alt: "Stephanie Rose",
    line: homepageResults[3].caption,
    video: false,
    position: "object-[center_40%]",
  },
] as const;

function Picture({
  src,
  alt,
  position,
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  position: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={`object-cover ${position}`} />
  );
}

export default function HomePageClient() {
  return (
    <div>
      <section className="relative -mt-[62px] min-h-[100svh] bg-[#020405] text-[#F4F4F4]">
        <Picture
          src={pictures.opening}
          alt="Stephanie Rose"
          position="object-[center_22%] xl:object-[center_18%]"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#020405_0%,rgba(2,4,5,0.92)_18%,rgba(2,4,5,0.45)_34%,transparent_52%)] xl:bg-[linear-gradient(90deg,#020405_0%,rgba(2,4,5,0.9)_12%,rgba(2,4,5,0.55)_26%,rgba(2,4,5,0.12)_40%,transparent_52%)]" />
        <div className="relative z-10 flex min-h-[100svh] items-end px-5 pb-12 pt-28 sm:px-8 sm:pb-16 xl:items-center xl:px-14 xl:pb-0">
          <div className="w-full max-w-[34rem]">
            <h1 className="max-w-[12ch] text-[clamp(2.35rem,7vw,4.5rem)] font-normal uppercase leading-[0.86] xl:max-w-[10ch] xl:text-[clamp(3rem,4.2vw,4.6rem)]">
              The art of being impossible to ignore.
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-snug text-[#F4F4F4] sm:mt-6 sm:text-lg sm:leading-relaxed">
              For founders who want a brand people compliment, views that get them taken seriously, and a business that sells out.
            </p>
            <div className="mt-5 sm:mt-8">
              <WrmButton href="/apply" variant="solid">
                Apply for ICON
              </WrmButton>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#F4F4F4] sm:mt-4 sm:text-base">Working with me is seamless.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#020405] text-[#F4F4F4]">
        <div className="grid lg:min-h-[100svh] lg:grid-cols-2">
          <div className="relative min-h-[78vh] lg:min-h-full">
            <Picture
              src={pictures.problem}
              alt="Stephanie Rose"
              position="object-[center_28%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
            <div className="max-w-xl space-y-5">
              <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.08]">
                The brand does not get compliments.
              </p>
              <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.08]">
                The views do not match the business.
              </p>
              <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.08]">
                Selling still feels hard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4] text-[#020405]">
        <div className="grid lg:min-h-[100svh] lg:grid-cols-2">
          <div className="relative min-h-[78vh] lg:order-2 lg:min-h-full">
            <Picture
              src={pictures.approach}
              alt="Stephanie Rose"
              position="object-[center_36%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
            <div className="h-0.5 w-12 bg-[#916545]" />
            <div className="mt-8 max-w-xl">
              <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.08]">
                The brand and the views come from the same work.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-[#404042]">I lead it, so you do not assemble a team.</p>
              <p className="mt-4 text-lg leading-relaxed text-[#404042]">
                You get monthly strategy intensives and a working roadmap, full content execution with a trusted thought partner, and publishing and analytics.
              </p>
              <div className="mt-8">
                <WrmButton href="/apply" variant="ink">
                  Apply for ICON
                </WrmButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F4] text-[#404042]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[78vh] lg:sticky lg:top-0 lg:h-[100svh]">
            <Picture
              src={pictures.offers}
              alt="Stephanie Rose"
              position="object-[center_30%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className={`${FRAME} flex max-w-none flex-col py-16 lg:py-20`}>
            <div className="h-0.5 w-12 bg-[#2D4B70]" />
            <div className="mt-8 max-w-xl space-y-6 text-lg leading-relaxed">
              <p className="max-w-[14ch] font-[family-name:var(--font-wrm-display)] text-[clamp(2.4rem,4vw,3.6rem)] leading-[1] text-[#020405]">
                ICON Brand Partnership
              </p>
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
          </div>
        </div>
      </section>

      {proofLines.map((proof, index) => (
        <section key={proof.line} className="bg-[#020405] text-[#F4F4F4]">
          <div className={`${FRAME} grid items-center gap-8 py-12 lg:grid-cols-12 lg:gap-14 lg:py-20`}>
            <div className={`relative min-h-[78vh] overflow-hidden lg:col-span-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              {proof.video ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={proof.src}
                  poster={proof.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <Picture src={proof.src} alt={proof.alt} position={proof.position} sizes="(max-width: 1024px) 100vw, 62vw" />
              )}
            </div>
            <p className={`max-w-sm text-lg leading-relaxed text-[#F4F4F4] lg:col-span-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              {proof.line}
            </p>
          </div>
        </section>
      ))}

      <section className="relative min-h-[100svh] bg-[#020405] text-[#F4F4F4]">
        <Picture
          src={pictures.obsessed}
          alt="Stephanie Rose"
          position="object-[center_42%]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#020405_0%,rgba(2,4,5,0.72)_16%,transparent_42%)]" />
        <div className="relative z-10 flex min-h-[100svh] items-end px-5 pb-16 sm:px-8 lg:px-14 lg:pb-20">
          <div className="max-w-xl">
            <p className="font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,4vw,3.4rem)] leading-[1.12] text-[#F4F4F4]">
              Everyone online is obsessed with me, and it is easy to see why.
            </p>
            <p className="mt-8 text-lg">
              <Link href="/results" className="border-b border-[#916545] pb-0.5 text-[#F4F4F4]">
                Read the client results
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="grid bg-[#020405] lg:grid-cols-2">
        <div className="relative min-h-[78vh] lg:min-h-[100svh]">
          <Picture
            src={portraits.story}
            alt="Stephanie Rose"
            position="object-[center_30%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-[#F4F4F4] px-5 py-16 text-[#404042] sm:px-8 lg:px-16 lg:py-24">
          <div className="h-0.5 w-12 bg-[#2D4B70]" />
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">Stephanie Rose</p>
          <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed">
            <p>Apply. Every applicant gets a response.</p>
            <p>Strategy and the work are handled with me.</p>
            <p>ICON is open, from $5,000 CAD per month, for six or twelve months. Private 1:1 is full.</p>
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

      <section className="wrm-ink bg-[#F4F4F4] text-[#404042]">
        <div className={`${FRAME} max-w-3xl py-20 lg:py-28`}>
          <h2 className="text-5xl text-[#020405]">Questions</h2>
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
    </div>
  );
}
