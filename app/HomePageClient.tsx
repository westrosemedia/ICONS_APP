"use client";

import Image from "next/image";
import Link from "next/link";
import WrmButton from "@/components/agency/WrmButton";
import HomeFaq from "@/components/home/HomeFaq";
import HomeReveal from "@/components/home/HomeReveal";
import {
  homeBody,
  homeEyebrowOnDark,
  homeEyebrowOnLight,
  homeSectionContainer,
  homeSectionHeading,
  homeSectionPadding,
} from "@/components/home/homeStyles";
import { portraits } from "@/lib/agency";

const pictures = {
  opening: portraits.featured,
  approach:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_080.jpg?alt=media&token=d485b703-9e16-48e0-baeb-09c3e7dc0f35",
  offers:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_037.jpg?alt=media&token=04a83038-59fe-447a-8f3b-99900c5db7f1",
  obsessed:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_038.jpg?alt=media&token=93446e09-e15f-4253-add9-a4ba78f05bdf",
} as const;

const heroStats = [
  { number: "2.7M", caption: "views in the last 30 days across the accounts we run" },
  { number: "82.9k", caption: "followers across Instagram and TikTok" },
  { number: "1,000+", caption: "founders photographed" },
  { number: "10 years", caption: "in business" },
] as const;

const problemLines = [
  "What the algorithm actually wants.",
  "Views, saves, and shares.",
  "Posts that go viral and make money.",
] as const;

const resultStats = [
  { number: "1.4M", caption: "client reels in the 1 million club" },
  { number: "12,157", caption: "new followers from one reel" },
  { number: "483.6%", caption: "growth in one client\u2019s views from August to November" },
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
        <video
          className="absolute inset-0 h-full w-full object-cover object-[center_20%] lg:hidden"
          autoPlay
          muted
          loop
          playsInline
          poster={pictures.opening}
          aria-label="Stephanie Rose"
        >
          <source src="/home/wrm-web-vert.mp4" type="video/mp4" />
        </video>
        <video
          className="absolute inset-0 hidden h-full w-full object-cover object-[center_20%] lg:block"
          autoPlay
          muted
          loop
          playsInline
          poster={pictures.opening}
          aria-label="Stephanie Rose"
        >
          <source src="/home/wrm-web.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#020405_0%,rgba(2,4,5,0.92)_18%,rgba(2,4,5,0.45)_34%,transparent_52%)] xl:bg-[linear-gradient(90deg,#020405_0%,rgba(2,4,5,0.9)_12%,rgba(2,4,5,0.55)_26%,rgba(2,4,5,0.12)_40%,transparent_52%)]" />
        <HomeReveal className="relative z-10 flex min-h-[100svh] items-end px-5 pb-12 pt-28 sm:px-8 sm:pb-16 xl:items-center xl:px-14 xl:pb-0">
          <div className="w-full max-w-[34rem]">
            <h1
              data-home-reveal
              data-home-reveal-delay="0"
              className="max-w-[12ch] text-[clamp(2.35rem,7vw,4.5rem)] font-normal uppercase leading-[0.86] xl:max-w-[10ch] xl:text-[clamp(3rem,4.2vw,4.6rem)]"
            >
              The art of being <em className="italic">impossible</em> to ignore.
            </h1>
            <p
              data-home-reveal
              data-home-reveal-delay="100"
              className="mt-4 max-w-md text-[15px] leading-snug text-[#F4F4F4] sm:mt-6 sm:text-lg sm:leading-relaxed"
            >
              For founders who want a brand people compliment, views that get them taken seriously, and a business that sells out.
            </p>
            <div data-home-reveal data-home-reveal-delay="200" className="mt-5 sm:mt-8">
              <WrmButton href="/apply" variant="solid">
                Apply for ICON
              </WrmButton>
            </div>
            <p data-home-reveal data-home-reveal-delay="300" className="mt-3 text-sm leading-relaxed text-[#F4F4F4] sm:mt-4 sm:text-base">
              Posts the algorithm pushes.
            </p>
          </div>
        </HomeReveal>
      </section>

      <section className="bg-[#F4F4F4]">
        <HomeReveal className={`${homeSectionContainer} py-[56px]`}>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {heroStats.map((stat, index) => (
              <div
                key={stat.number}
                data-home-reveal
                data-home-reveal-delay={index * 100}
                className={`py-2 ${index % 2 === 1 ? "border-l border-[#404042]/15 pl-5" : "pr-5"} ${
                  index > 1 ? "mt-8 lg:mt-0" : ""
                } ${index > 0 ? "lg:border-l lg:border-[#404042]/15 lg:pl-8" : ""} ${index < 3 ? "lg:pr-8" : ""}`}
              >
                <p className="font-[family-name:var(--font-wrm-display)] text-[48px] leading-none text-[#020405]">
                  {stat.number}
                </p>
                <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-[14px] leading-snug text-[#404042]">
                  {stat.caption}
                </p>
              </div>
            ))}
          </div>
        </HomeReveal>
      </section>

      <section className="bg-[#020405]">
        <HomeReveal className={`${homeSectionContainer} ${homeSectionPadding}`}>
          {problemLines.map((line, index) => (
            <p
              key={line}
              data-home-reveal
              data-home-reveal-delay={index * 100}
              className={`${homeSectionHeading} text-left leading-[1.05] text-[#F4F4F4] ${
                index > 0
                  ? "relative mt-10 before:absolute before:inset-x-0 before:top-[-20px] before:h-px before:bg-[#CCCCCE]/15"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </HomeReveal>
      </section>

      <section className="bg-[#F4F4F4] text-[#020405]">
        <HomeReveal className={`${homeSectionContainer} ${homeSectionPadding}`}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-home-reveal data-home-reveal-delay="0" className="relative min-h-[70vh] lg:order-2 lg:min-h-[640px]">
              <Picture
                src={pictures.approach}
                alt="Stephanie Rose"
                position="object-[center_36%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div data-home-reveal data-home-reveal-delay="100" className="h-0.5 w-12 bg-[#916545]" />
              <p data-home-reveal data-home-reveal-delay="200" className={`${homeEyebrowOnLight} mt-8`}>
                HOW IT WORKS
              </p>
              <p
                data-home-reveal
                data-home-reveal-delay="300"
                className="mt-4 font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.08]"
              >
                The brand and the views come from the <em className="italic">same work</em>.
              </p>
              <p data-home-reveal data-home-reveal-delay="400" className="mt-6 text-lg leading-relaxed text-[#404042]">
                Posts built for what the algorithm actually wants.
              </p>
              <p data-home-reveal data-home-reveal-delay="500" className="mt-4 text-lg leading-relaxed text-[#404042]">
                Views, saves, and shares, so the right people find you, the work goes viral, and you make money.
              </p>
              <div data-home-reveal data-home-reveal-delay="600" className="mt-8">
                <WrmButton href="/apply" variant="ink">
                  Apply for ICON
                </WrmButton>
              </div>
            </div>
          </div>
        </HomeReveal>
      </section>

      <section className="bg-[#020405]">
        <HomeReveal className={`${homeSectionContainer} ${homeSectionPadding}`}>
          <p data-home-reveal data-home-reveal-delay="0" className={homeEyebrowOnDark}>
            RESULTS
          </p>
          <h2 data-home-reveal data-home-reveal-delay="100" className={`${homeSectionHeading} mt-5 text-[#F4F4F4]`}>
            The <em className="italic">numbers</em>
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-3 lg:gap-0">
            {resultStats.map((stat, index) => (
              <div
                key={stat.number}
                data-home-reveal
                data-home-reveal-delay={200 + index * 100}
                className={`${index > 0 ? "lg:border-l lg:border-[#CCCCCE]/15 lg:pl-10" : ""} ${
                  index < resultStats.length - 1 ? "lg:pr-10" : ""
                }`}
              >
                <p className="font-[family-name:var(--font-wrm-display)] text-[56px] leading-none text-[#F4F4F4] lg:text-[88px]">
                  {stat.number}
                </p>
                <p className={`${homeBody} mt-4 leading-snug text-[#CCCCCE]`}>{stat.caption}</p>
              </div>
            ))}
          </div>
        </HomeReveal>
      </section>

      <section className="bg-[#F4F4F4] text-[#404042]">
        <HomeReveal className={`${homeSectionContainer} ${homeSectionPadding}`}>
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-home-reveal data-home-reveal-delay="0" className="relative min-h-[70vh] lg:min-h-[640px]">
              <Picture
                src={pictures.offers}
                alt="Stephanie Rose"
                position="object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="max-w-xl">
              <div data-home-reveal data-home-reveal-delay="100" className="h-0.5 w-12 bg-[#2D4B70]" />
              <p data-home-reveal data-home-reveal-delay="200" className={`${homeEyebrowOnLight} mt-8`}>
                WORK WITH ME
              </p>
              <div className="mt-4 space-y-6 text-lg leading-relaxed">
              <p
                data-home-reveal
                data-home-reveal-delay="300"
                className="max-w-[14ch] font-[family-name:var(--font-wrm-display)] text-[clamp(2.4rem,4vw,3.6rem)] leading-[1] text-[#020405]"
              >
                ICON Brand Partnership
              </p>
              <p data-home-reveal data-home-reveal-delay="400">
                Monthly strategy intensives and a working roadmap for the brand.
              </p>
              <p data-home-reveal data-home-reveal-delay="500">
                Full content execution for the posts. They are planned, filmed, written, edited, scheduled, and measured.
              </p>
              <p data-home-reveal data-home-reveal-delay="600">
                Publishing and analytics that drive real decisions, for the views, the saves, the shares, and the work that makes money.
              </p>
              <p data-home-reveal data-home-reveal-delay="700">
                Exclusive access to The Vault, a private content creation suite, and free access to ICON Society while you are active.
              </p>
              <div data-home-reveal data-home-reveal-delay="800">
                <WrmButton href="/apply" variant="ink">
                  Apply for ICON
                </WrmButton>
              </div>
              </div>
            </div>
          </div>
        </HomeReveal>
      </section>

      <section className="relative min-h-[100svh] bg-[#020405] text-[#F4F4F4]">
        <Picture
          src={pictures.obsessed}
          alt="Stephanie Rose"
          position="object-[center_20%]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,#020405_0%,rgba(2,4,5,0.82)_18%,rgba(2,4,5,0.28)_32%,transparent_40%)]" />
        <HomeReveal className="relative z-10 flex min-h-[100svh] items-end px-5 pb-16 sm:px-8 lg:px-14 lg:pb-20">
          <div className="max-w-xl">
            <p
              data-home-reveal
              data-home-reveal-delay="0"
              className="font-[family-name:var(--font-wrm-display)] text-[clamp(2rem,4vw,3.4rem)] leading-[1.12] text-[#F4F4F4]"
            >
              Posts that get saved, shared, and pushed, so the right people find you and buy.
            </p>
            <p data-home-reveal data-home-reveal-delay="100" className="mt-8 text-lg">
              <Link href="/results" className="border-b border-[#916545] pb-0.5 text-[#F4F4F4]">
                Read the client results
              </Link>
            </p>
          </div>
        </HomeReveal>
      </section>

      <section className="bg-[#F4F4F4] text-[#404042]">
        <HomeReveal className={`${homeSectionContainer} ${homeSectionPadding}`}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div data-home-reveal data-home-reveal-delay="0" className="relative min-h-[70vh] lg:min-h-[640px]">
              <Picture
                src={portraits.story}
                alt="Stephanie Rose"
                position="object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div data-home-reveal data-home-reveal-delay="100" className="h-0.5 w-12 bg-[#2D4B70]" />
              <p data-home-reveal data-home-reveal-delay="200" className={`${homeEyebrowOnLight} mt-8`}>
                APPLY
              </p>
              <p data-home-reveal data-home-reveal-delay="300" className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#916545]">
                Stephanie Rose
              </p>
              <div className="mt-6 max-w-xl space-y-5 text-lg leading-relaxed">
                <p data-home-reveal data-home-reveal-delay="400">Strategy and the work are handled with me.</p>
                <p data-home-reveal data-home-reveal-delay="600">
                  ICON is open. The smallest level of the ICON Brand Partnership is $3,500 CAD per month, for six or twelve months. Private 1:1 is full.
                </p>
                <p data-home-reveal data-home-reveal-delay="700">
                  Stephanie Rose is the founder and creative director of West Rose Media, a premium brand photography and content studio based in Calgary, Alberta, Canada.
                </p>
                <p data-home-reveal data-home-reveal-delay="800">
                  West Rose Media was built during a season of real, irreversible change. I built this business while leaving religion, getting divorced, coming out, and raising three kids on my own. Later, I met my partner and built a life that finally felt aligned. Through all of it, the business kept working.
                </p>
              </div>
              <div data-home-reveal data-home-reveal-delay="900" className="mt-10 flex flex-col items-start gap-5">
                <WrmButton href="/apply" variant="ink">
                  Apply for ICON
                </WrmButton>
                <Link href="/work-with-us" className="border-b border-[#2D4B70] pb-0.5 text-[#020405]">
                  Work with us
                </Link>
              </div>
            </div>
          </div>
        </HomeReveal>
      </section>

      <section className="bg-[#F4F4F4] text-[#404042]">
        <HomeReveal className={`${homeSectionContainer} ${homeSectionPadding}`}>
          <p data-home-reveal data-home-reveal-delay="0" className={homeEyebrowOnLight}>
            QUESTIONS
          </p>
          <HomeFaq />
        </HomeReveal>
      </section>
    </div>
  );
}
