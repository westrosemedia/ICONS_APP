import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GROW_LIKE_YOU_MEAN_IT,
} from "@/lib/courses/grow-like-you-mean-it";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/siteLinks";
import GrowLikeYouMeanItClient from "./GrowLikeYouMeanItClient";

const metaDescription =
  "You're already posting. You just don't know what to say. A self-paced video series on brand foundation and growing your social media consistently. $47 CAD.";

export const metadata: Metadata = {
  title: `${GROW_LIKE_YOU_MEAN_IT.title} | West Rose Media`,
  description: metaDescription,
  openGraph: {
    title: `${GROW_LIKE_YOU_MEAN_IT.title} | West Rose Media`,
    description: metaDescription,
    url: `https://westrosemedia.com${GROW_LIKE_YOU_MEAN_IT.salesPath}`,
    type: "website",
    images: [
      {
        url: GROW_LIKE_YOU_MEAN_IT.heroImage,
        width: 1200,
        height: 630,
        alt: "Grow Like You Mean It by West Rose Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${GROW_LIKE_YOU_MEAN_IT.title} | West Rose Media`,
    description: metaDescription,
    images: [GROW_LIKE_YOU_MEAN_IT.heroImage],
  },
};

const walkAwayItems = [
  "A clear brand foundation you're not rebuilding every few months.",
  "An actual system for growing your social media, not another list of ideas you'll never use.",
  "Consistency, because you'll finally know how long everything takes and when to do it.",
];

const testimonials = [
  {
    quote:
      "Stephanie is the real deal. She's grounded, raw, honest, and brings an undeniable fire to every space she leads. I've had the honor of working with her inside her Icon Society and the value she delivers is consistently next-level.",
    name: "Gigi Hunt",
  },
  {
    quote:
      "In today's world, every dollar we spend is a vote for the kind of future we want to build, and choosing who you work with matters. Working with Stephanie Rose is a choice I'd make again a hundred times over.",
    name: "Abby Belin",
  },
  {
    quote:
      "Stephanie is an absolute pro and has such a gift for capturing your best self.",
    name: "Brooke Redelle Robichaud",
  },
];

const ctaClassName =
  "px-10 py-4 bg-[#1a1a1a] text-[#f5f1ea] rounded-lg font-medium hover:bg-[#2d2d2d] transition-colors text-base tracking-wide disabled:opacity-50 disabled:cursor-not-allowed";

function ImInButton({ className }: { className?: string }) {
  return (
    <GrowLikeYouMeanItClient label="I'm In" className={className || ctaClassName} />
  );
}

export default function GrowLikeYouMeanItPage() {
  return (
    <div className="min-h-screen bg-[#f5f1ea] text-[#1a1a1a]">
      {/* Section 1: Hero */}
      <section className="border-b border-[#1a1a1a]/10">
        <div className="grid lg:grid-cols-2 lg:min-h-[85vh]">
          <div className="section-padding flex items-center order-2 lg:order-1">
            <div className="container-elegant max-w-xl lg:max-w-none lg:px-12 xl:px-16 text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-[#1a1a1a]/55 mb-8">
                West Rose Media presents
              </p>
              <h1 className="text-hero text-[#1a1a1a] mb-10">
                Grow Like You Mean It
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/80 mb-10">
                You're already posting. You just don't know what to say. Content is
                never neutral, every post brings people closer to buying from you or
                further away.
              </p>
              <ImInButton />
              <p className="mt-8 text-sm tracking-wide text-[#1a1a1a]/60">
                $47 CAD. Self-paced. Watch it whenever you want.
              </p>
              <Link
                href={GROW_LIKE_YOU_MEAN_IT.coursePath}
                className="mt-6 inline-block text-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors"
              >
                Already enrolled? Go to your course
              </Link>
            </div>
          </div>
          <div className="relative min-h-[50vh] lg:min-h-full order-1 lg:order-2">
            <Image
              src={GROW_LIKE_YOU_MEAN_IT.heroImage}
              alt="Grow Like You Mean It by West Rose Media"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section 2: The Real Problem */}
      <section className="section-padding bg-white">
        <div className="container-elegant max-w-3xl">
          <h2 className="text-display text-[#1a1a1a] mb-12">
            Here's what's actually stalling you.
          </h2>
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85">
            <p>
              You're already posting. That was never the problem. The problem is
              what you're saying when you do it.
            </p>
            <p>
              Content is never neutral. Every post brings someone closer to
              buying from you, or pushes them further away. Nothing you put out
              is filler, whether you meant it to count or not.
            </p>
            <p>
              Most of what's going out right now is landing in that gap by
              accident. That's why the ideas keep coming and the sales still
              aren't. And underneath that, you've never actually sat down and
              learned how long content really takes to plan, film, edit, and
              get out the door, so even when you do land the right message, you
              can't repeat it.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Who This Is For */}
      <section className="section-padding border-t border-[#1a1a1a]/10">
        <div className="container-elegant max-w-3xl">
          <h2 className="text-display text-[#1a1a1a] mb-12">
            This is for you if.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85">
            You're already building something real. A book, a practice, a brand,
            a channel you just started. This gives you a simple system for showing
            up, staying visible, and building momentum you can actually sustain.
          </p>
        </div>
      </section>

      {/* Section 4: What's Inside */}
      <section className="section-padding bg-white border-t border-[#1a1a1a]/10">
        <div className="container-elegant">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:max-w-none">
              <Image
                src={GROW_LIKE_YOU_MEAN_IT.insideImage}
                alt="Grow Like You Mean It course preview"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </div>
            <div className="max-w-xl">
              <h2 className="text-display text-[#1a1a1a] mb-12">
                What happens inside.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85">
                A short, self-paced video series covering two things: your brand
                foundation (your niche, your voice, your look, all in one place)
                and a real system for growing your social media consistently. Watch
                it in one sitting or spread it across a week. Nothing to unlock,
                nothing to wait for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Proof */}
      <section className="section-padding border-t border-[#1a1a1a]/10">
        <div className="container-elegant max-w-3xl">
          <h2 className="text-display text-[#1a1a1a] mb-12">
            This is the system, not a fluke.
          </h2>
          <div className="space-y-12">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85">
                A client of mine started this system less than a week ago.
                She'd had under 200 followers for two years, posting daily,
                getting nowhere. One reel we posted last night already brought
                her 20 new followers. Not from luck. From a plan.
              </p>
              <p className="text-sm uppercase tracking-[0.2em] text-[#1a1a1a]/55">
                20 new followers · one reel · week one
              </p>
            </div>

            <div className="border-t border-[#1a1a1a]/10 pt-12 space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85">
                I built the same system on my own account. In the last 40 days I
                grew to 11,000 followers and past 1 million views, using the
                exact process that's inside this course.
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm uppercase tracking-[0.15em] text-[#1a1a1a]/55">
                <span>11K followers</span>
                <span>1M+ views</span>
                <span>40 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="section-padding bg-white border-t border-[#1a1a1a]/10">
        <div className="container-elegant max-w-5xl">
          <h2 className="text-display text-[#1a1a1a] mb-12 text-center">
            Don't take it from me.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="border border-[#1a1a1a]/10 bg-[#f5f1ea] p-8 flex flex-col justify-between"
              >
                <p className="text-base md:text-lg leading-relaxed text-[#1a1a1a]/85">
                  "{testimonial.quote}"
                </p>
                <footer className="mt-8 text-sm font-medium text-[#1a1a1a]">
                  {testimonial.name}
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-10 text-center">
            <a
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#1a1a1a]/70 hover:text-[#1a1a1a] underline underline-offset-4 transition-colors"
            >
              Read more reviews on Google
            </a>
          </p>
        </div>
      </section>

      {/* Section 7: What You Walk Away With */}
      <section className="section-padding bg-white border-t border-[#1a1a1a]/10">
        <div className="container-elegant max-w-3xl">
          <h2 className="text-display text-[#1a1a1a] mb-12">
            By the time you finish.
          </h2>
          <ul className="space-y-6 text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85">
            {walkAwayItems.map((item) => (
              <li key={item} className="pl-6 border-l-2 border-[#1a1a1a]/20">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 8: The Investment */}
      <section className="section-padding border-t border-[#1a1a1a]/10">
        <div className="container-elegant max-w-3xl">
          <h2 className="text-display text-[#1a1a1a] mb-12">
            Here's the part that matters more than the price.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85 mb-12">
            Most people say money isn't actually what's holding them back from
            investing in their brand. They still need a clear vision or plan
            first. This gives you that first, for $47 CAD, instead of waiting on
            a bigger, more expensive program to hand it to you.
          </p>
          <div className="border border-[#1a1a1a]/15 bg-white p-8 md:p-10 space-y-6 mb-12">
            <div className="grid gap-6 sm:grid-cols-[7rem,1fr] sm:gap-8 border-b border-[#1a1a1a]/10 pb-6">
              <p className="text-sm uppercase tracking-[0.15em] text-[#1a1a1a]/55">
                Investment
              </p>
              <p className="text-lg text-[#1a1a1a]/85">
                $47 CAD, one time.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-[7rem,1fr] sm:gap-8 border-b border-[#1a1a1a]/10 pb-6">
              <p className="text-sm uppercase tracking-[0.15em] text-[#1a1a1a]/55">
                Access
              </p>
              <p className="text-lg text-[#1a1a1a]/85">
                Instant, self-paced, watch whenever.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-[7rem,1fr] sm:gap-8">
              <p className="text-sm uppercase tracking-[0.15em] text-[#1a1a1a]/55">
                Refunds
              </p>
              <p className="text-lg text-[#1a1a1a]/85">
                None. If you're not sure yet, that's fine, come back when you
                are.
              </p>
            </div>
          </div>
          <div className="text-center">
            <ImInButton />
          </div>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="section-padding bg-[#1a1a1a] text-[#f5f1ea]">
        <div className="container-elegant max-w-3xl text-center">
          <h2 className="text-display text-[#f5f1ea] mb-10">Stop winging it.</h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#f5f1ea]/80 mb-12 max-w-2xl mx-auto">
            You already know what to say. Now go build the thing that gets you
            found saying it.
          </p>
          <GrowLikeYouMeanItClient
            label="I'm In"
            className="px-10 py-4 bg-[#f5f1ea] text-[#1a1a1a] rounded-lg font-medium hover:bg-white transition-colors text-base tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </section>
    </div>
  );
}
