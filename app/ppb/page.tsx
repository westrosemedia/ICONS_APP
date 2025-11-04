"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Countdown from "./Countdown";

const BF_END_ISO = "2025-12-03T07:00:00Z"; // set your end time for Black Friday window
const CURRENCY = "USD";

type PriceBlock = {
  title: string;
  blurb: string;
  priceMain: string;
  priceAlt?: string;
  notes?: string[];
};

export default function PPBPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isBF = useMemo(() => {
    if (!isClient) return false;
    try {
      const now = new Date();
      const cut = new Date(BF_END_ISO);
      return now < cut;
    } catch {
      return false;
    }
  }, [isClient]);

  const pricing: PriceBlock[] = useMemo(() => {
    if (isBF) {
      return [
        {
          title: "The One Year Experience",
          blurb:
            "Get an entire year of support, biweekly Q and A and pitch sessions, and a full year to refine your brand and pitches.",
          priceMain: `$3,500 ${CURRENCY}`,
          priceAlt: `12 month plan available at about $333.33 per month for a total of $4,000`,
          notes: [
            "Biweekly Q and A calls for a full year",
            "Biweekly pitch sessions with feedback",
            "Ongoing support through changes and pivots",
          ],
        },
        {
          title: "The 16 Week Intensive",
          blurb:
            "Dive into the full program and elevate your brand in four months. Structured, focused, and outcome driven.",
          priceMain: `$2,500 ${CURRENCY}`,
          priceAlt: "Six month payment plan available",
          notes: ["Clear weekly outcomes", "Six month plan spreads the total over six payments"],
        },
      ];
    }
    return [
      {
        title: "The One Year Experience",
        blurb:
          "A full year of support with biweekly Q and A and pitch sessions to refine your message and presence.",
        priceMain: `$5,000 ${CURRENCY}`,
        notes: ["Biweekly Q and A and biweekly pitch sessions all year"],
      },
      {
        title: "The 16 Week Intensive",
        blurb:
          "Four months to implement the full framework and bring your brand to life with clarity and confidence.",
        priceMain: `$3,000 ${CURRENCY}`,
      },
    ];
  }, [isBF]);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_003.jpg?alt=media&token=e27ee7d9-9bc5-468f-b568-b6d0a8883a7c"
            alt="Powerful Personal Brand Program - Build Your Legacy"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
          {isBF && isClient && (
            <div className="mb-6">
              <Countdown endDate={BF_END_ISO} />
            </div>
          )}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white mb-6">
            Build Your Legacy. Amplify Your Voice. Become Iconic.
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto mb-8">
            This is your personal revolution. A step by step journey to build a legacy, a voice, and a
            movement bigger than business. This is how you become unforgettable, whether you are
            launching offers or pitching yourself to the world's biggest stages.
          </p>
          <div>
            <a
              href="#investment"
              className="inline-block rounded-xl bg-white text-black px-8 py-4 text-lg font-medium transition hover:bg-white/90"
            >
              Claim Your {isBF ? "Black Friday Offer" : "Spot"} Now
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-16 md:py-24">

        {/* Who This Is For */}
        <section className="mt-16 md:mt-20 space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Is This Your Next Step</h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                This program is designed for ambitious women and nonbinary leaders who are ready to build
                something bigger than themselves. You have a deep sense of purpose, you care about social
                justice, and you want to change the world by sharing your story. If 2026 is the year you
                plan to launch your podcast, publish your book, deliver your TED Talk, or take the keynote
                spot at the biggest event of your career, this is where you step into that future.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_089.jpg?alt=media&token=589133f6-da89-4bcf-8e4a-0d322795b6fb"
                alt="Ambitious leaders ready to build their legacy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Who This Is NOT For */}
        <section className="mt-16 md:mt-20 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Who This Is Not For</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            This program is not for beginners. If you are just starting your business or have never
            used social media, this is not the right fit. This is for leaders who have already built a
            foundation and are ready to amplify their message and step into a larger arena. If you are
            not yet clear on your business, start there first and come back when you are ready for
            this level.
          </p>
        </section>

        {/* What's Included – High Level Journey */}
        <section className="mt-16 md:mt-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">What You Get Inside This Experience</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            You get the tools, the strategy, and real world practice to amplify your voice and your
            impact. Here is the high level journey.
          </p>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_096.jpg?alt=media&token=1a62d433-ffc3-4b92-8e5d-5681d2d97e0b"
              alt="Powerful Personal Brand Program Experience"
              fill
              className="object-cover"
            />
          </div>

          <div className="rounded-2xl bg-gray-50 p-8 md:p-12 border border-gray-200">
            <ul className="space-y-4 list-disc pl-6 text-lg text-gray-700">
              <li>
                <strong>Weeks 1 to 2:</strong> Define your purpose and map your vision. Know exactly why you are here
                and where you are going.
              </li>
              <li>
                <strong>Weeks 3 to 4:</strong> Build unshakable confidence and set boundaries that let you show up
                boldly without burnout.
              </li>
              <li>
                <strong>Week 5:</strong> Own your story and lead your audience with clarity. Story and leadership in
                one power packed week.
              </li>
              <li>
                <strong>Weeks 6 to 7:</strong> Brand clarity deep dive. First a full audit, then refine your message
                and visuals so your ideal client says yes.
              </li>
              <li>
                <strong>Week 8:</strong> Ideal client clarity. Speak directly to the real person you want to reach.
              </li>
              <li>
                <strong>Week 9:</strong> Audience over influence. Prioritize connection and engagement over vanity
                metrics.
              </li>
              <li>
                <strong>Week 10:</strong> Strategic presence. Races and reps planning for launches and daily content.
              </li>
              <li>
                <strong>Week 11:</strong> Create magnetic content that feels alive and draws your people in. Build a
                system so batching fits your real life.
              </li>
              <li>
                <strong>Week 12:</strong> Map your client transformation. Before, bridge, and after with stories that
                show the journey.
              </li>
              <li>
                <strong>Week 13:</strong> Story as strategy. Select key moments and structure them for many formats,
                including a TED Talk outline.
              </li>
              <li>
                <strong>Week 14:</strong> Prepare your launch or pitch. Get your offer or pitch ready to share.
              </li>
              <li>
                <strong>Week 15:</strong> Visibility era. Share it with the world and gather feedback you can use.
              </li>
            </ul>
            <p className="mt-8 text-base text-gray-600 italic">
              After you finish, you will have the tools, the confidence, and the strategy to keep
              growing. Launch offers, pitch to TED, or build a legacy that lasts.
            </p>
          </div>
        </section>

        {/* Bonuses and Support */}
        <section className="mt-16 md:mt-20 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Bonuses and Support</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            When you join, this journey becomes one of collaboration and growth, with expert support
            backing you at every step.
          </p>
          <ul className="space-y-4 list-disc pl-6 text-lg text-gray-700">
            <li>
              Biweekly Q and A calls. Ask questions, get advice, and gain clarity to keep momentum.
            </li>
            <li>
              Biweekly pitch sessions. Practice and refine your pitch for a program, a TED Talk, or
              any big stage, with feedback from Stephanie and the West Rose Media team.
            </li>
            <li>
              Full year support available. If you choose the year long option, this support continues
              all year as you navigate changes, pivots, and growth.
            </li>
            <li>
              Exclusive discount on content packages for program members. Your evolving brand deserves
              continuous excellence and production support.
            </li>
          </ul>
        </section>

        {/* Client Love */}
        <section className="mt-16 md:mt-20 space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Client Love</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <blockquote className="rounded-2xl bg-gray-50 p-8 border border-gray-200 italic text-lg text-gray-700">
              "Working with Stephanie is a choice I would make a hundred times over. She brings a
              level of care and vision that is unmatched."
            </blockquote>
            <blockquote className="rounded-2xl bg-gray-50 p-8 border border-gray-200 italic text-lg text-gray-700">
              "Stephanie is grounded, raw, honest, and brings fire to everything she leads. The
              transformation she creates is undeniable."
            </blockquote>
          </div>
        </section>

        {/* About Stephanie */}
        <section className="mt-16 md:mt-20 space-y-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_098.jpg?alt=media&token=75795b62-a1ee-4b78-bfcb-ea59de9e8738"
                alt="Stephanie Rose - Founder of West Rose Media and Creator of the Powerful Personal Brand Framework"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your Guide</h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                I am Stephanie Rose, founder of West Rose Media and the creator of the Powerful Personal
                Brand framework. My book, The Powerful Personal Brand, is launching soon, and this program
                brings the full journey to life. I built this from nothing through hard seasons, and my
                brand became the anchor that supported me and my family. Today I help high achieving women
                and nonbinary leaders elevate their brands, amplify their voices, and step into iconic
                success. This program is your chance to join that legacy and build the impact you want.
              </p>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section id="investment" className="mt-20 md:mt-24 space-y-8">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_097.jpg?alt=media&token=06f9ae26-28b7-4fba-9fc2-872e4bd7ae74"
              alt="Invest in Your Personal Brand"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Your Investment</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            {isBF
              ? "Black Friday pricing is live. Secure your spot now."
              : "Black Friday has ended. Current pricing is shown below."}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {pricing.map((p, idx) => (
              <div key={idx} className="rounded-2xl border-2 border-gray-200 p-8 bg-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-lg text-gray-700 mb-6">{p.blurb}</p>
                <p className="text-3xl md:text-4xl font-bold mb-2">{p.priceMain}</p>
                {p.priceAlt && <p className="text-base text-gray-600 mb-6">{p.priceAlt}</p>}
                {p.notes && (
                  <ul className="list-disc space-y-2 pl-5 text-base text-gray-700 mb-8">
                    {p.notes.map((n, i) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                )}
                <a
                  href="#cta"
                  className="inline-block rounded-xl bg-black px-6 py-3 text-white text-lg font-medium transition hover:opacity-90 w-full text-center"
                >
                  {isBF ? "Claim Black Friday Pricing" : "Enroll Now"}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="mt-20 md:mt-24 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Your Time Is Now</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            The future you want is waiting. The impact you want to make is within reach. Join now and
            let 2026 be the year you step fully into your power.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#investment"
              className="inline-block rounded-xl bg-black px-8 py-4 text-white text-lg font-medium transition hover:opacity-90"
            >
              Join the Program
            </a>
            {isBF && isClient && (
              <span className="text-base text-gray-600">
                Black Friday pricing ends when the countdown hits zero
              </span>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

