import { Metadata } from "next";
import Image from "next/image";
import {
  GROW_LIKE_YOU_MEAN_IT,
} from "@/lib/courses/grow-like-you-mean-it";
import { GOOGLE_MAPS_REVIEWS_URL } from "@/lib/siteLinks";
import GrowLikeYouMeanItClient from "./GrowLikeYouMeanItClient";
import GrowLikeYouMeanItHero from "./GrowLikeYouMeanItHero";

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

const insideItems = [
  "Your brand foundation, dialed in for good. Your niche, your voice, your look, all in one place, so you stop rebuilding it every few months.",
  "A bio and link setup that works while you're not there. No application forms, no back and forth, someone can land on your profile at 2am and get real value or buy from you without ever DMing you.",
  "The content formats built around how the algorithm actually tests and pushes a post.",
  "A real filming system. One outfit change and an afternoon gets you weeks of content, no crew, no studio, just your phone and a stand.",
  "A posting cadence that tells you exactly what to post and when, so you're never starting from a blank feed wondering what to say today.",
];

const walkAwayItems = [
  "Your bio and link finally selling for you, even while you're asleep.",
  "Content that gets tested and pushed by the algorithm instead of guessed at.",
  "The real reason a post stalls, so you fix the actual problem instead of scrapping good ideas.",
  "Weeks of content filmed in one afternoon, one outfit change at a time.",
  "A posting rhythm you can actually keep up with, so consistency stops being the thing you keep failing at.",
];

const testimonials = [
  {
    quote:
      "Stephanie is the real deal. She's grounded, raw, honest, and brings an undeniable fire to every space she leads. I've had the honor of working with her inside her Icon Society and the value she delivers is consistently next-level.",
    name: "Gigi Hunt",
  },
  {
    quote:
      "It's gone up by 6,000 in the 45 minutes I've been awake.",
    name: "Cammy",
    attribution:
      "on a reel that hit 160K+ views after being stuck under 200 followers for two years",
  },
  {
    quote:
      "Stephanie is an absolute pro and has such a gift for capturing your best self.",
    name: "Brooke Redelle Robichaud",
  },
];

const proofScreenshots = [
  {
    src: "/courses/proof/views-111k.png",
    alt: "Client reel insights showing 111,388 views and 48,527 accounts reached",
  },
  {
    src: "/courses/proof/views-41k.png",
    alt: "Client reel insights showing 41,815 views and 10,908 accounts reached",
  },
  {
    src: "/courses/proof/chat-hooks.png",
    alt: "Client message about testing hooks and growing their audience",
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
      <GrowLikeYouMeanItHero />

      {/* Section 2: The Real Problem */}
      <section className="section-padding bg-white">
        <div className="container-elegant max-w-3xl">
          <h2 className="text-display text-[#1a1a1a] mb-4">
            I can tell you exactly why your last reel died at 200 views.
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-[#1a1a1a]/70 mb-12">
            It&apos;s not your caption.
          </p>
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85">
            <p>You&apos;re already posting. That was never the problem.</p>
            <p>
              Instagram tests every post before deciding who else gets to see
              it. A reel that stalls at 200 views failed that test, plain and
              simple. Not enough people stopped, commented, saved, or shared it
              to earn the next round. Most people never find that out. They just
              post more of the same and wait for something to change.
            </p>
            <p>
              Content is never neutral. Every post moves someone closer to
              buying from you or further away, whether you meant it to count or
              not. That&apos;s the real gap: the mechanics behind why posts take
              off, never explained to you. And even once you land the right
              message, you still need to know how long it actually takes to
              plan, film, and edit it, or you&apos;ll never be able to repeat
              it.
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
            You&apos;re already building something real. A book, a practice, a brand,
            a channel you just started. This gives you a simple system for showing
            up, staying visible, and building momentum you can actually sustain.
          </p>
        </div>
      </section>

      {/* Section 4: What's Inside */}
      <section className="section-padding bg-white border-t border-[#1a1a1a]/10">
        <div className="container-elegant">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-video w-full max-w-2xl mx-auto lg:max-w-none overflow-hidden rounded-2xl border border-[#1a1a1a]/10 shadow-sm">
              <Image
                src={GROW_LIKE_YOU_MEAN_IT.thumbnailUrl}
                alt="Grow Like You Mean It course preview"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 50vw"
                priority
              />
            </div>
            <div className="max-w-xl">
              <h2 className="text-display text-[#1a1a1a] mb-6">
                What happens inside.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85 mb-8">
                This is the full system. Here&apos;s what you&apos;re actually building:
              </p>
              <ul className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/85">
                {insideItems.map((item) => (
                  <li key={item} className="pl-6 border-l-2 border-[#1a1a1a]/20">
                    {item}
                  </li>
                ))}
              </ul>
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
                A client of mine started this system a few weeks ago. She&apos;d had
                under 200 followers for two years, posting daily, getting
                nowhere. Since then, one reel alone has passed 160,000 views,
                working the exact plan that&apos;s inside this course.
              </p>
              <p className="text-sm uppercase tracking-[0.2em] text-[#1a1a1a]/55">
                160K+ views · client
              </p>
            </div>

            <div className="border-t border-[#1a1a1a]/10 pt-12 space-y-8">
              <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85">
                I built the same system on my own account first. In 38 days I
                grew to 12,500 followers and past 1 million views, using that
                same process.
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm uppercase tracking-[0.15em] text-[#1a1a1a]/55">
                <span>12.5K followers</span>
                <span>1M+ views</span>
                <span>38 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="section-padding bg-white border-t border-[#1a1a1a]/10">
        <div className="container-elegant max-w-5xl">
          <h2 className="text-display text-[#1a1a1a] mb-12 text-center">
            Don&apos;t take it from me.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="border border-[#1a1a1a]/10 bg-[#f5f1ea] p-8 flex flex-col justify-between"
              >
                <p className="text-base md:text-lg leading-relaxed text-[#1a1a1a]/85">
                  &quot;{testimonial.quote}&quot;
                </p>
                <footer className="mt-8 text-sm text-[#1a1a1a]">
                  <p className="font-medium">— {testimonial.name}</p>
                  {"attribution" in testimonial && testimonial.attribution ? (
                    <p className="mt-2 text-[#1a1a1a]/65 leading-relaxed">
                      {testimonial.attribution}
                    </p>
                  ) : null}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-center text-sm uppercase tracking-[0.2em] text-[#1a1a1a]/55 mb-8">
              Real client results
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {proofScreenshots.map((screenshot) => (
                <div
                  key={screenshot.src}
                  className="w-full overflow-hidden rounded-2xl border border-[#1a1a1a]/10 bg-[#f5f1ea]"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={720}
                    height={1280}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 90vw, 30vw"
                  />
                </div>
              ))}
            </div>
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
            Here&apos;s the part that matters more than the price.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/85 mb-12">
            Most people are waiting on a bigger, more expensive program to hand
            them a clear plan. This gives you that plan first, for $47.
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
                None. If you&apos;re not sure yet, that&apos;s fine, come back when you
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
