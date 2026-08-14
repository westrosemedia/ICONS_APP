import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/siteLinks";

const STRIPE_LINK = "https://buy.stripe.com/bJe5kCgRqbTnfa38x787K1g";
const PRICE = "$225 CAD";

const IMAGES = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FKAY_8505.jpg?alt=media&token=84693866-4afc-4403-b378-61cf0aeb36e8",
  gap: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FKAY_8516.jpg?alt=media&token=78612690-f90d-46b0-9bd5-7636df8a609e",
  system:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FKAY_8537.jpg?alt=media&token=65a77c6f-da85-41c6-b2f1-50020dc037f6",
  proof:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FKAY_8494.jpg?alt=media&token=585973a6-a5b5-4108-82ce-5cb67ac5f687",
  investment:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FKAY_8499-2.jpg?alt=media&token=394ead07-896a-43a1-86d9-634f25477d90",
};

const SOCIAL_PROOF = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FWhatsApp%20Image%202026-08-12%20at%2010.06.53%20(1).jpeg?alt=media&token=c17b8e4c-05e2-4744-8ac9-5c3b112062e9",
    alt: "Loaded Grid social proof screenshot 1",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FWhatsApp%20Image%202026-08-12%20at%2010.06.53%20(2).jpeg?alt=media&token=27c43f96-0a78-42d1-af35-a24ea01ca2b9",
    alt: "Loaded Grid social proof screenshot 2",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FWhatsApp%20Image%202026-08-12%20at%2010.06.53%20(3).jpeg?alt=media&token=c0792cfe-167d-4c64-a899-b51f9dc4acb7",
    alt: "Loaded Grid social proof screenshot 3",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FWhatsApp%20Image%202026-08-12%20at%2010.06.53%20(4).jpeg?alt=media&token=2295164d-6ccb-4273-9025-f2c68e150e4b",
    alt: "Loaded Grid social proof screenshot 4",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FWhatsApp%20Image%202026-08-12%20at%2010.06.53%20(5).jpeg?alt=media&token=3fb6f859-33bb-439a-82b8-167301e222fa",
    alt: "Loaded Grid social proof screenshot 5",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FWhatsApp%20Image%202026-08-12%20at%2010.06.53%20(6).jpeg?alt=media&token=88ae2dd6-5643-445c-97ed-3e5a0846eb70",
    alt: "Loaded Grid social proof screenshot 6",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FWhatsApp%20Image%202026-08-12%20at%2010.06.53%20(8).jpeg?alt=media&token=4a26683b-4e4d-46dc-90e1-37b72eaa5ed7",
    alt: "Loaded Grid social proof screenshot 7",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FWhatsApp%20Image%202026-08-12%20at%2010.06.54%20(1).jpeg?alt=media&token=0ca23b52-3cc0-40d3-9470-5b7d1037d277",
    alt: "Loaded Grid social proof screenshot 8",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/the%20loaded%20grid%2FWhatsApp%20Image%202026-08-12%20at%2010.06.54%20(4).jpeg?alt=media&token=c9c13882-771d-4519-81ba-940a815a8650",
    alt: "Loaded Grid social proof screenshot 9",
  },
];

const META = {
  title: "The Loaded Grid | Weekly Visibility Membership | West Rose Media",
  description:
    "Test. Break. Repeat. A weekly membership that gets your posts past the algorithm's early tests. $225 CAD/month. Cancel anytime.",
};

export const revalidate = 0;

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: { canonical: "/the-loaded-grid" },
  openGraph: {
    title: META.title,
    description: META.description,
    url: "https://westrosemedia.com/the-loaded-grid",
    type: "website",
    images: [
      {
        url: IMAGES.hero,
        width: 1200,
        height: 630,
        alt: "The Loaded Grid by West Rose Media",
      },
    ],
  },
};

const frameworkKicker =
  "text-xs md:text-sm tracking-[0.35em] uppercase text-[#C9B99A]";

const ctaPrimary =
  "inline-block bg-[#FAF7F2] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#E8E4DD] transition-colors duration-300 rounded-none";

const systemItems = [
  "A live weekly class. What's suppressing reach right now, why posts stall, how to fix it. Open Q&A on whatever's happening in your account that week.",
  "A new content play every week. The exact hooks and formats built to clear the next tier, not a library from six months ago.",
  "A private community for wins, examples, and accountability. Not a DM line to Stephanie, the class is where the coaching happens.",
  "Visibility tracking built in. You'll know which posts cleared a tier and which stayed stuck, not a vague view count.",
];

const stayItems = [
  "A post that used to stall under a few hundred views clears its stuck tier. Not luck. Pattern.",
  "People who've never met you start recognizing your work. Remembering your name. DMing you first.",
  "You catch the weak spot in a post before you hit publish, not after it flops.",
  "You know exactly which post broke through and why. You repeat it instead of hoping for it again.",
];

const testimonials = [
  {
    quote:
      "Stephanie is the real deal. She's grounded, raw, honest, and brings an undeniable fire to every space she leads.",
    name: "Gigi Hunt",
  },
  {
    quote: "It's gone up by 6,000 in the 45 minutes I've been awake.",
    name: "Cammy",
    attribution:
      "on a reel that hit 160K+ views after being stuck under 200 followers for two years",
  },
];

const tickerItems = [
  "Test. Break. Repeat.",
  "Live Weekly Class",
  "Weekly Content Plays",
  "Private Community",
  "Visibility Tracking",
  "Get Seen This Week",
];

function DashList({
  items,
  light = false,
}: {
  items: string[];
  light?: boolean;
}) {
  const textClass = light ? "text-[#FAF7F2]/90" : "text-[#3D3632]";
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item} className={`flex gap-4 items-start ${textClass}`}>
          <span className="text-[#C9B99A] shrink-0 mt-1" aria-hidden>
            –
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TheLoadedGridPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src={IMAGES.hero}
          alt="Stephanie Rose for The Loaded Grid"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_65%]"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto py-32">
          <p className={frameworkKicker}>West Rose Media presents</p>
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight tracking-tight text-[#FAF7F2] mt-8 mb-6">
            The Loaded Grid
          </h1>
          <p className={`${frameworkKicker} mb-10`}>Test. Break. Repeat.</p>
          <p className="text-lg md:text-xl text-[#FAF7F2]/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            One post is all it takes to go from scrolled past to actually seen. This is
            the program that gets you there, every week.
          </p>
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaPrimary}
          >
            Get Seen This Week
          </a>
          <p className="text-[#C9B99A] font-heading text-xl font-light mt-8">
            {PRICE}/month. Cancel anytime.
          </p>
        </div>
      </section>

      {/* WLF-style ticker break between hero + gap */}
      <div
        className="relative z-20 overflow-hidden bg-[#1C1917] py-5 md:py-6"
        aria-hidden
      >
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {tickerItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="mx-6 md:mx-10 text-[11px] md:text-xs tracking-[0.28em] uppercase text-[#FAF7F2]/90"
                >
                  {item}
                  <span className="ml-6 md:ml-10 text-[#C9B99A]" aria-hidden>
                    –
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 2 — THE GAP */}
      <section
        className="relative overflow-hidden"
        aria-labelledby="gap-heading"
      >
        <Image
          src={IMAGES.gap}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2
              id="gap-heading"
              className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] text-center"
            >
              You post. The algorithm still doesn&apos;t know your name.
            </h2>
            <p className="text-lg text-[#FAF7F2]/90">
              Most business owners get stuck here for one of two reasons.
            </p>
            <p className="text-lg text-[#FAF7F2]/90">
              They don&apos;t know how the algorithm actually tests a post, so every
              result feels random. A win one week, nothing the next, no explanation
              either way.
            </p>
            <p className="text-lg text-[#FAF7F2]/90">
              Or they know the mechanics but have no system to repeat it. One good
              post happens, then three flops, then silence, because there was never
              a weekly plan behind it. Just a lucky guess that worked once.
            </p>
            <p className="text-lg text-[#FAF7F2]/90">
              Either way, the pattern is the same. You post, you refresh, you wait,
              and half the time you can&apos;t tell why one thing worked and the next
              one didn&apos;t. That&apos;s the Someday Trap. The version that would
              actually perform stays in your drafts, while the safe one sits at 200
              views.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHO THIS IS FOR */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="who-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="who-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            This is for you if.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#3D3632]">
            You&apos;re building an online business. Doesn&apos;t matter what kind.
            Right now you&apos;re invisible, whether you&apos;re starting at zero
            followers or you&apos;ve been stuck at the same number for a year. You
            need a weekly room that gets your content past round one, on purpose.
          </p>
        </div>
      </section>

      {/* SECTION 4 — THE SYSTEM */}
      <section
        id="the-system"
        className="relative bg-cover bg-no-repeat md:bg-fixed scroll-mt-24"
        style={{
          backgroundImage: `url('${IMAGES.system}')`,
          backgroundPosition: "center 32%",
        }}
        aria-labelledby="system-heading"
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-8">
            <p className={`${frameworkKicker} text-center`}>The system</p>
            <h2
              id="system-heading"
              className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] text-center"
            >
              Test. Break. Repeat.
            </h2>
            <p className="text-lg text-[#FAF7F2]/90">
              Every week runs the same loop. Test a post against what the algorithm
              is rewarding right now. Break past the tier it&apos;s stuck in. Repeat
              the pattern that worked, on purpose, the following week. That&apos;s
              the whole system, run live, every week, with you in the room.
            </p>
            <DashList light items={systemItems} />
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROOF */}
      <section
        id="proof"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24"
        aria-labelledby="proof-heading"
      >
        <div className="max-w-3xl mx-auto">
          <h2
            id="proof-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center"
          >
            Day 46: 13,600 followers, 1.5 million views, zero luck involved.
          </h2>

          <div
            className="relative mb-12 overflow-hidden rounded-none"
            style={{ minHeight: "50vh" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-no-repeat md:bg-fixed"
              style={{
                backgroundImage: `url('${IMAGES.proof}')`,
                backgroundPosition: "center 30%",
              }}
              aria-hidden
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 flex min-h-[50vh] items-end p-8 md:p-12">
              <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm uppercase tracking-[0.15em] text-[#FAF7F2]">
                <span>13.6K+ followers</span>
                <span>1.5M+ views</span>
                <span>Day 46</span>
                <span>Rebuilt twice</span>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-[#3D3632]">
                I&apos;ve built this system out of my own account twice. First from
                scratch to 12,500 followers and past a million views. Then again from
                zero, after Meta deactivated that account with no appeal, this time
                landing past 13,600 followers and 1.5 million views by day 46, running{" "}
                <span className="tracking-[0.12em] uppercase text-sm text-[#9C8E82]">
                  Test. Break. Repeat.
                </span>{" "}
                on myself first.
              </p>
            </div>

            <div className="border-t border-[#C9B99A]/30 pt-10 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-[#3D3632]">
                One member joined four weeks ago at 200 followers, with views nobody
                would post about. She wanted proof this worked before she trusted it
                with her own business. Four weeks into Test. Break. Repeat., one reel
                from her crossed 1.4 million views. She ran her first masterclass off
                the back of it. Fifty people showed up, for a program that didn&apos;t
                exist a month earlier.
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-3 text-sm uppercase tracking-[0.15em] text-[#9C8E82]">
                <span>200 followers → 1.4M+ views</span>
                <span>4 weeks</span>
                <span>50-person masterclass</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TESTIMONIALS + SOCIAL PROOF */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto border-t border-[#C9B99A]/20"
        aria-labelledby="testimonials-heading"
      >
        <h2
          id="testimonials-heading"
          className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center"
        >
          Don&apos;t take it from me.
        </h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto mb-16">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="border border-[#C9B99A]/30 bg-white/60 p-8 flex flex-col justify-between"
            >
              <p className="text-base md:text-lg leading-relaxed text-[#3D3632]">
                &quot;{testimonial.quote}&quot;
              </p>
              <footer className="mt-8 text-sm text-[#1C1917]">
                <p className="font-medium">— {testimonial.name}</p>
                {"attribution" in testimonial && testimonial.attribution ? (
                  <p className="mt-2 text-[#9C8E82] leading-relaxed">
                    {testimonial.attribution}
                  </p>
                ) : null}
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="text-center text-sm uppercase tracking-[0.2em] text-[#9C8E82] mb-8">
          Real results
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOCIAL_PROOF.map((shot) => (
            <div
              key={shot.src}
              className="w-full overflow-hidden border border-[#C9B99A]/30 bg-white"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={900}
                height={1200}
                className="h-auto w-full"
                sizes="(max-width: 768px) 90vw, 30vw"
              />
            </div>
          ))}
        </div>

        <p className="mt-10 text-center">
          <a
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#3D3632] hover:text-[#1C1917] underline underline-offset-4 transition-colors"
          >
            Read more reviews on Google
          </a>
        </p>
      </section>

      {/* SECTION 7 — WHAT CHANGES WHEN YOU STAY */}
      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto border-t border-[#C9B99A]/20"
        aria-labelledby="changes-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="changes-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            By week four, the pattern is obvious.
          </h2>

          <div className="border border-[#C9B99A]/40 bg-white/70 p-6 md:p-8 mb-10">
            <p className={`${frameworkKicker} mb-4`}>One-month result</p>
            <p className="font-heading text-2xl md:text-3xl font-light leading-snug text-[#1C1917]">
              A post that used to stall under a few hundred views clears its stuck
              tier.
            </p>
          </div>

          <DashList items={stayItems} />
        </div>
      </section>

      {/* SECTION 8 — THE INVESTMENT */}
      <section
        id="join"
        className="relative bg-cover bg-no-repeat md:bg-fixed scroll-mt-24"
        style={{
          backgroundImage: `url('${IMAGES.investment}')`,
          backgroundPosition: "center 30%",
        }}
        aria-labelledby="investment-heading"
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="investment-heading"
              className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-8"
            >
              Here&apos;s what it costs to stop being invisible.
            </h2>
            <p className="text-lg text-[#FAF7F2]/90 mb-6">
              {PRICE} a month gets you the weekly class, the weekly content plan, and
              the community. No contract, cancel anytime.
            </p>
            <p className="text-lg text-[#FAF7F2]/90 mb-12">
              This isn&apos;t a one-off program. It&apos;s the weekly room inside the
              wider West Rose Media system, the same one behind Hot and Rich
              Mastermind and Grow Like You Mean It. When you outgrow the group room
              and want hands-on strategy in a smaller space, the Mastermind is the
              next step. Not required. Some members stay here for good.
            </p>

            <div className="border border-[#C9B99A]/40 bg-black/30 backdrop-blur-sm p-6 md:p-8 text-left mb-10 space-y-6">
              <div className="grid gap-3 sm:grid-cols-[7rem,1fr] sm:gap-8 border-b border-[#C9B99A]/20 pb-6">
                <p className="text-xs tracking-widest uppercase text-[#C9B99A]">
                  Investment
                </p>
                <p className="text-lg text-[#FAF7F2]/90">{PRICE}/month</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-[7rem,1fr] sm:gap-8 border-b border-[#C9B99A]/20 pb-6">
                <p className="text-xs tracking-widest uppercase text-[#C9B99A]">
                  Access
                </p>
                <p className="text-lg text-[#FAF7F2]/90">
                  Weekly live class + private community, starts the week you join
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-[7rem,1fr] sm:gap-8">
                <p className="text-xs tracking-widest uppercase text-[#C9B99A]">
                  Cancellation
                </p>
                <p className="text-lg text-[#FAF7F2]/90">
                  Anytime, no contract, no penalty
                </p>
              </div>
            </div>

            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaPrimary}
            >
              Get Seen This Week
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section
        id="final-cta"
        className="bg-[#1C1917] text-[#FAF7F2]"
        aria-labelledby="final-cta-heading"
      >
        <div className="py-24 md:py-32 px-6 md:px-12 max-w-3xl mx-auto text-center">
          <p className={`${frameworkKicker} mb-6`}>Test. Break. Repeat.</p>
          <h2
            id="final-cta-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-8"
          >
            Test. Break. Repeat. Starting this week.
          </h2>
          <p className="text-lg text-[#FAF7F2]/90 mb-10 max-w-xl mx-auto">
            Show up to the class this week. Bring whatever you&apos;re already
            posting. That&apos;s exactly what this fixes.
          </p>
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaPrimary}
          >
            Get Seen This Week
          </a>
          <p className="text-sm text-[#FAF7F2]/60 mt-8">
            {PRICE}/month. Cancel anytime.
          </p>
        </div>
      </section>

      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#FAF7F2] border-t border-[#C9B99A]/30 md:hidden"
        aria-label="Mobile call to action"
      >
        <a
          href={STRIPE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 text-center rounded-none bg-[#1C1917] text-[#FAF7F2] text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300"
        >
          Get Seen This Week
        </a>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
