"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
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
          priceAlt: "12 month payment plan available",
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
            className="object-cover"
            style={{ objectPosition: "center 35%" }}
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24 text-center">
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

      {/* Program Name & Tagline */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black">
            Powerful Personal Brand
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
            Build your legacy, amplify your voice, and become iconic.
          </p>
        </div>
      </section>

      {/* Black Friday Countdown */}
      {isBF && isClient && (
        <section className="bg-gray-50 py-8">
          <div className="max-w-5xl mx-auto px-6">
            <Countdown endDate={BF_END_ISO} />
          </div>
        </section>
      )}

      <main className="w-full">

        {/* Who This Is For */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Is This Your Next Step</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  This program is designed for ambitious women and nonbinary leaders who are ready to build
                  something bigger than themselves. You have a deep sense of purpose, you care about social
                  justice, and you want to change the world by sharing your story. If 2026 is the year you
                  plan to launch your podcast, publish your book, deliver your TED Talk, or take the keynote
                  spot at the biggest event of your career, this is where you step into that future.
                </p>
              </div>
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_089.jpg?alt=media&token=589133f6-da89-4bcf-8e4a-0d322795b6fb"
                  alt="Ambitious leaders ready to build their legacy"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 35%" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is NOT For */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black">Who This Is Not For</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              This program is not for beginners. If you are just starting your business or have never
              used social media, this is not the right fit. This is for leaders who have already built a
              foundation and are ready to amplify their message and step into a larger arena. If you are
              not yet clear on your business, start there first and come back when you are ready for
              this level.
            </p>
          </div>
        </section>

        {/* What's Included – The 16 Week Journey */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[60vh] min-h-[500px] rounded-2xl overflow-hidden mb-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_026.jpg?alt=media&token=35b646af-2e21-47e2-84ec-91543d8f9910"
                alt="Powerful Personal Brand Program Experience"
                fill
                className="object-cover"
                style={{ objectPosition: "center 35%" }}
              />
            </div>

            <div className="space-y-12">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">The 16 Week Journey</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  The Powerful Personal Brand program is built as a step-by-step journey designed to take you from invisible to unforgettable. Every week builds on the last, guiding you to master your story, your strategy, and your presence so you can lead with confidence, clarity, and influence that lasts.
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-white border-l-4 border-black p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Weeks 1–2: Purpose</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li><strong>Week 1:</strong> Defining Your Why – Reflect on your story, values, and mission.</li>
                    <li><strong>Week 2:</strong> Vision Mapping – Build a detailed vision for your brand and future.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border-l-4 border-black p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Weeks 3–4: Empowerment</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li><strong>Week 3:</strong> Confidence Building – Cultivate self-trust and embodied leadership.</li>
                    <li><strong>Week 4:</strong> Visibility and Boundaries – Step into visibility while protecting your energy and story.</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-black p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Week 5: Leadership</h3>
                  <p className="text-lg text-gray-700">
                    Owning Your Story and Leading Your Audience – Use your personal story as a tool of leadership and connection.
                  </p>
                </div>

                <div className="bg-gray-50 border-l-4 border-black p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Weeks 6–8: Clarity</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li><strong>Week 6:</strong> Brand Audit – Review your current brand, voice, and visuals to see what needs alignment.</li>
                    <li><strong>Week 7:</strong> Refining Your Brand – Polish your voice, visuals, and messaging for magnetic clarity.</li>
                    <li><strong>Week 8:</strong> Ideal Client Clarity – Define the real person you are speaking to and learn their language.</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-black p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Weeks 9–10: Audience and Strategy</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li><strong>Week 9:</strong> Audience Over Influence – Build a loyal audience that cares, not vanity metrics.</li>
                    <li><strong>Week 10:</strong> Strategic Presence – Plan your races and reps to stay consistent with launches and content.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border-l-4 border-black p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Weeks 11–12: Presence and Content</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li><strong>Week 11:</strong> Creating Magnetic Content – Make your content feel alive and sustainable.</li>
                    <li><strong>Week 12:</strong> Client Transformation Path – Map your client's journey before, bridge, and after.</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-black p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Weeks 13–14: Story and Strategy</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li><strong>Week 13:</strong> Story as Strategy – Turn your story into a marketing engine and craft your TED-style narrative.</li>
                    <li><strong>Week 14:</strong> Preparing Your Launch or Pitch – Translate everything into a clear offer or pitch that lands.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 border-l-4 border-black p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Weeks 15–16: Visibility Era</h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li><strong>Week 15:</strong> Preparing Your Launch or Pitch – Finalize your launch materials and ready your message.</li>
                    <li><strong>Week 16:</strong> Your Visibility Era – Go live, share your story, and embody the leader your audience needs.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bonuses and Support */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">Bonuses and Support</h2>
            <p className="text-lg leading-relaxed text-gray-700 text-center mb-12">
              When you join, this journey becomes one of collaboration and growth, with expert support
              backing you at every step.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-gray-200 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-black">Ongoing Support</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Biweekly Q and A calls</li>
                  <li>• Biweekly pitch sessions</li>
                  <li>• Full year support available</li>
                </ul>
              </div>
              <div className="bg-white p-8 border border-gray-200 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-black">Exclusive Benefits</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Feedback from Stephanie and team</li>
                  <li>• Exclusive discount on content packages</li>
                  <li>• Continuous excellence and production support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Client Love */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">Client Love</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <blockquote className="bg-white border-l-4 border-black p-10 italic text-lg text-gray-700">
                "Working with Stephanie is a choice I would make a hundred times over. She brings a
                level of care and vision that is unmatched."
              </blockquote>
              <blockquote className="bg-white border-l-4 border-black p-10 italic text-lg text-gray-700">
                "Stephanie is grounded, raw, honest, and brings fire to everything she leads. The
                transformation she creates is undeniable."
              </blockquote>
            </div>
          </div>
        </section>

        {/* About Stephanie */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden order-2 md:order-1">
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_098.jpg?alt=media&token=75795b62-a1ee-4b78-bfcb-ea59de9e8738"
                  alt="Stephanie Rose - Founder of West Rose Media and Creator of the Powerful Personal Brand Framework"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 35%" }}
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Meet Your Guide</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  I am Stephanie Rose, founder of West Rose Media and the creator of the Powerful Personal
                  Brand framework. My book, The Powerful Personal Brand, is launching soon, and this program
                  brings the full journey to life. I built this from nothing through hard seasons, and my
                  brand became the anchor that supported me and my family. Today I help high achieving women
                  and nonbinary leaders elevate their brands, amplify their voices, and step into iconic
                  success. This program is your chance to join that legacy and build the impact you want.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment */}
        <section id="investment" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[60vh] min-h-[500px] rounded-2xl overflow-hidden mb-16">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_097.jpg?alt=media&token=06f9ae26-28b7-4fba-9fc2-872e4bd7ae74"
                alt="Invest in Your Personal Brand"
                fill
                className="object-cover"
                style={{ objectPosition: "center 35%" }}
              />
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Your Investment</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                {isBF
                  ? "Black Friday pricing is live. Secure your spot now."
                  : "Black Friday has ended. Current pricing is shown below."}
              </p>
            </div>

            <Script
              src="https://js.stripe.com/v3/pricing-table.js"
              strategy="lazyOnload"
            />
            <stripe-pricing-table
              pricing-table-id="prctbl_1SQB3eCcsY3WjV3QGmc6dPm2"
              publishable-key="pk_live_51MSOJeCcsY3WjV3Q0h4k8hC7da1piQaQSHx6ukPgWe3hkxDR4GsmfEDah7RoIkH6k9Qln3ups7flMXSS3kuAMhdL005i3wmuav"
            />
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="py-20 px-4 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Your Time Is Now</h2>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 mb-12">
              The future you want is waiting. The impact you want to make is within reach. Join now and
              let 2026 be the year you step fully into your power.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#investment"
                className="inline-block rounded-xl bg-white text-black px-8 py-4 text-lg font-medium transition hover:bg-white/90"
              >
                Join the Program
              </a>
              {isBF && isClient && (
                <span className="text-base text-white/70">
                  Black Friday pricing ends when the countdown hits zero
                </span>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

