import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

const STRIPE_LINK =
  "https://buy.stripe.com/28E9ASgRq8Hb4vp14F87K15";

export const metadata: Metadata = {
  title: "Influence Program | Visibility and Authority with Stephanie Rose",
  description:
    "Influence is a three month visibility and authority program for people navigating life transitions who are ready to be seen, speak boldly, and lead with clarity.",
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: { canonical: "/influence" },
  openGraph: {
    title: "Influence Program | Visibility and Authority with Stephanie Rose",
    description:
      "Influence is a three month visibility and authority program for people navigating life transitions who are ready to be seen, speak boldly, and lead with clarity.",
    url: "https://westrosemedia.com/influence",
  },
};

export default function InfluencePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative section-padding pt-24">
        <div className="container-elegant text-center">
          <h1 className="text-hero text-black mb-6">
            Influence
          </h1>
          <p className="text-editorial text-gray-700 max-w-2xl mx-auto mb-6">
            A three month program for people who are ready to be seen, heard, and respected without turning into someone they are not.
          </p>
          <div className="text-lg text-gray-700 max-w-2xl mx-auto mb-10 space-y-3 text-left">
            <p>You know you are meant for more visibility.</p>
            <p>More stages.</p>
            <p>More leadership.</p>
            <p>More impact.</p>
            <p>And you are tired of pretending you do not want it.</p>
            <p>But something still tightens in your chest when you think about going all in.</p>
            <p>This room is for the person in the middle of a shift.</p>
            <p>Divorce.</p>
            <p>Career pivot.</p>
            <p>Empty nest.</p>
            <p>Rebrand.</p>
            <p>Sobriety.</p>
            <p>Reinvention.</p>
            <p>Your life changed.</p>
            <p>Now your visibility has to catch up.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer">
                Join Presale
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#who-this-is-for">See If This Is You</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-12 border-y border-gray-200 bg-gray-50">
        <div className="container-elegant">
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="text-center">
              <p className="text-gray-700 italic mb-2">
                [TESTIMONIAL QUOTE ONE PLACEHOLDER]
              </p>
              <cite className="text-sm text-gray-500 not-italic">
                [NAME ONE]
              </cite>
            </blockquote>
            <blockquote className="text-center">
              <p className="text-gray-700 italic mb-2">
                [TESTIMONIAL QUOTE TWO PLACEHOLDER]
              </p>
              <cite className="text-sm text-gray-500 not-italic">
                [NAME TWO]
              </cite>
            </blockquote>
            <blockquote className="text-center">
              <p className="text-gray-700 italic mb-2">
                [TESTIMONIAL QUOTE THREE PLACEHOLDER]
              </p>
              <cite className="text-sm text-gray-500 not-italic">
                [NAME THREE]
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section
        id="who-this-is-for"
        className="section-padding scroll-mt-24"
        aria-labelledby="who-heading"
      >
        <div className="container-elegant">
          <h2 id="who-heading" className="text-display text-black mb-8 text-center">
            This is for you if
          </h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 text-lg text-gray-700 list-disc pl-6">
              <li>You want to speak, lead, or show up online in a bigger way but you hesitate before you hit publish.</li>
              <li>You feel the pull toward visibility but you are scared of judgment, family opinions, or people from your past.</li>
              <li>You know you have depth, story, and power but you struggle to articulate it clearly.</li>
              <li>You are not trying to become an influencer. You are trying to become undeniable.</li>
              <li>You are in a season of change and you refuse to shrink while you navigate it.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The shift (before/after) */}
      <section
        id="the-shift"
        className="section-padding bg-gray-50"
        aria-labelledby="shift-heading"
      >
        <div className="container-elegant">
          <h2 id="shift-heading" className="text-display text-black mb-12 text-center">
            What changes in three months
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-semibold text-black mb-4">Right now</h3>
              <ul className="space-y-2 text-gray-700 list-disc pl-6">
                <li>Overthinking every post.</li>
                <li>Second guessing your voice.</li>
                <li>Waiting to feel ready.</li>
                <li>Holding back your real story.</li>
                <li>Playing small while privately wanting more.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <h3 className="text-xl font-semibold text-black mb-4">After Influence</h3>
              <ul className="space-y-2 text-gray-700 list-disc pl-6">
                <li>You understand your story and how to share it with strength.</li>
                <li>You speak without apology.</li>
                <li>You post without spiraling.</li>
                <li>You own your evolution publicly.</li>
                <li>You walk into rooms knowing you belong there.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section
        id="what-you-get"
        className="section-padding"
        aria-labelledby="deliverables-heading"
      >
        <div className="container-elegant">
          <h2 id="deliverables-heading" className="text-display text-black mb-12 text-center">
            What you get
          </h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex gap-3">
                <span className="text-black font-medium shrink-0">1.</span>
                [DELIVERABLE ONE PLACEHOLDER]
              </li>
              <li className="flex gap-3">
                <span className="text-black font-medium shrink-0">2.</span>
                [DELIVERABLE TWO PLACEHOLDER]
              </li>
              <li className="flex gap-3">
                <span className="text-black font-medium shrink-0">3.</span>
                [DELIVERABLE THREE PLACEHOLDER]
              </li>
              <li className="flex gap-3">
                <span className="text-black font-medium shrink-0">4.</span>
                [DELIVERABLE FOUR PLACEHOLDER]
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="section-padding bg-gray-50"
        aria-labelledby="how-heading"
      >
        <div className="container-elegant">
          <h2 id="how-heading" className="text-display text-black mb-12 text-center">
            How it works
          </h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-lg text-gray-700 text-center">
              [3 MONTHS TIMELINE INTRO PLACEHOLDER]
            </p>
            <p className="text-lg text-gray-700 text-center">
              Led by Stephanie Rose, creative director and visibility strategist who works with leaders stepping into their next era.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="font-semibold text-black shrink-0">Week 1:</span>
                [WEEKLY CALL / ACTIVITY PLACEHOLDER]
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-black shrink-0">Ongoing:</span>
                [WEEKLY CALLS PLACEHOLDER]
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section
        id="bonuses"
        className="section-padding"
        aria-labelledby="bonuses-heading"
      >
        <div className="container-elegant">
          <h2 id="bonuses-heading" className="text-display text-black mb-12 text-center">
            Bonuses
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-gray-200 p-6 text-center">
              <p className="text-gray-700">[BONUS ONE PLACEHOLDER]</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 text-center">
              <p className="text-gray-700">[BONUS TWO PLACEHOLDER]</p>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 text-center">
              <p className="text-gray-700">[BONUS THREE PLACEHOLDER]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="section-padding bg-gray-50"
        aria-labelledby="pricing-heading"
      >
        <div className="container-elegant text-center">
          <h2 id="pricing-heading" className="text-display text-black mb-8">
            Presale Access
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Influence is currently open at presale pricing while the first group forms.
          </p>
          <div className="inline-flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center p-8 rounded-2xl border-2 border-black bg-white">
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">
                Presale
              </p>
              <p className="text-3xl font-bold text-black">$1,800 CAD</p>
            </div>
            <div className="hidden sm:block h-12 w-px bg-gray-300" aria-hidden />
            <div>
              <p className="text-sm text-gray-600 uppercase tracking-wide mb-1">
                Regular
              </p>
              <p className="text-3xl font-bold text-gray-500 line-through">
                $3,200 CAD
              </p>
            </div>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto mt-8">
            Presale is for the people who move before everything feels perfect.
            You are buying access at the founding rate.
            Price increases when this round fills or when it opens publicly.
          </p>
          <p className="text-gray-700 max-w-2xl mx-auto mt-3">
            Group size is capped at five people.
          </p>
          <p className="text-gray-700 max-w-2xl mx-auto mt-3">
            When the five seats are filled, enrollment closes.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer">
                Join Influence Now
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Immediate access to onboarding details after payment.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="section-padding"
        aria-labelledby="faq-heading"
      >
        <div className="container-elegant max-w-2xl mx-auto">
          <h2 id="faq-heading" className="text-display text-black mb-12 text-center">
            Frequently asked questions
          </h2>
          <ul className="space-y-4 list-none p-0 m-0">
            <li>
              <details className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-black hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  What if I am not sure I am ready?
                  <span className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-gray-700 border-t border-gray-100">
                  You are not supposed to feel fully ready. This program exists for the space between knowing you want more and believing you can handle it.
                </div>
              </details>
            </li>
            <li>
              <details className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-black hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  Is this about becoming an influencer?
                  <span className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-gray-700 border-t border-gray-100">
                  No. This is about becoming visible in a way that aligns with your integrity and your leadership.
                </div>
              </details>
            </li>
            <li>
              <details className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-black hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  What if I am going through something personal right now?
                  <span className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-gray-700 border-t border-gray-100">
                  That is often exactly why this program works. Big life shifts create powerful stories. We make sure you share them in a way that strengthens you.
                </div>
              </details>
            </li>
            <li>
              <details className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-black hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  How much time does this require each week?
                  <span className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-gray-700 border-t border-gray-100">
                  One weekly live call plus small visibility reps between sessions. The goal is integration, not overwhelm.
                </div>
              </details>
            </li>
            <li>
              <details className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-black hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  Will this help me speak on stages or grow my presence?
                  <span className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-gray-700 border-t border-gray-100">
                  Yes. We focus on clarity, authority, and confident communication so you can walk into bigger rooms prepared.
                </div>
              </details>
            </li>
            <li>
              <details className="group rounded-xl border border-gray-200 bg-white overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-black hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  What if I am scared of judgment?
                  <span className="shrink-0 text-gray-400 group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-gray-700 border-t border-gray-100">
                  Everyone in the room will understand that fear. Courage grows through repetition and support.
                </div>
              </details>
            </li>
          </ul>
        </div>
      </section>

      {/* Final CTA block */}
      <section
        id="final-cta"
        className="section-padding bg-black text-white"
        aria-labelledby="final-cta-heading"
      >
        <div className="container-elegant text-center">
          <h2 id="final-cta-heading" className="text-display text-white mb-4">
            Your life is already shifting.
          </h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-4">
            Now your voice needs to catch up.
          </p>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-8">
            If you feel the pull, that is your signal.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
            <a href={STRIPE_LINK} target="_blank" rel="noopener noreferrer">
              Secure Your Spot
            </a>
          </Button>
          <p className="text-sm text-white/80 mt-4">
            Presale pricing ends when this round fills.
          </p>
        </div>
      </section>

      {/* Sticky CTA on mobile */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 md:hidden"
        aria-label="Mobile call to action"
      >
        <a
          href={STRIPE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 text-center rounded-xl bg-black text-white font-semibold text-lg hover:bg-gray-800 transition-colors"
        >
          Join Presale
        </a>
      </div>

      {/* Spacer so content is not hidden behind sticky CTA on mobile */}
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
