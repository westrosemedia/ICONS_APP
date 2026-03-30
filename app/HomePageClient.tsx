"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { homePageAssets } from "@/lib/homePageAssets";
import { SPOTLIGHT_BOOK_URL } from "@/lib/workWithUsLinks";

/** Vertical position for “Your content is not neutral.” background (face in frame). Percent from top. */
const PROBLEM_BG_FOCUS_Y = "30%";

/** “Two ways…” section — focal area in top third of image */
const TWO_OFFERS_BG_FOCUS_Y = "18%";

export default function HomePageClient() {
  const problemSectionRef = useRef<HTMLElement | null>(null);
  const twoOffersSectionRef = useRef<HTMLElement | null>(null);
  const [problemParallaxY, setProblemParallaxY] = useState(0);
  const [twoOffersParallaxY, setTwoOffersParallaxY] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const updateOffset = (
      el: HTMLElement | null,
      setter: React.Dispatch<React.SetStateAction<number>>,
    ) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      const sectionMid = rect.top + rect.height / 2;
      const viewportMid = vh / 2;
      setter((sectionMid - viewportMid) * 0.15);
    };

    const onScroll = () => {
      updateOffset(problemSectionRef.current, setProblemParallaxY);
      updateOffset(twoOffersSectionRef.current, setTwoOffersParallaxY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="w-full bg-white text-black">
      {/* Hero */}
      <section className="w-full">
        <div className="relative min-h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src={homePageAssets.topVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={homePageAssets.topVideoStill}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
          <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 py-8 sm:py-12 lg:py-24 max-w-5xl mx-auto"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 drop-shadow-lg px-2 leading-tight">
              Stop marketing like a startup.
              <br />
              Your business is an empire. Your brand should reflect it.
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed mb-6 sm:mb-8 lg:mb-10 px-4">
              West Rose Media produces photography and video for established founders whose brand presence needs to catch up to their results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                <a href={SPOTLIGHT_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  Book a Spotlight Shoot
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 border-white text-white hover:bg-white hover:text-black"
              >
                <Link href="/book/immersion">
                  Cover My Event
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
              ICON Brand Partnership is full for 2026. September applications are open.{" "}
              <Link href="/apply" className="underline underline-offset-4 hover:text-white">
                Join the waitlist
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Identity */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display text-black mb-8 text-center">
              The brand that reflects your level changes everything.
            </h2>
            <div className="space-y-6 text-editorial text-gray-700">
              <p>
                There is a version of your brand that walks into a room before you do. Where potential clients land on your page and immediately feel the weight of what you have built. Where opportunities reach out because your presence alone communicates that you are operating at a level worth paying attention to.
              </p>
              <p>
                When the outside finally matches what you have built on the inside, everything starts to shift. Better clients arrive more easily because your brand has already done the convincing. Bigger opportunities take you more seriously because your visual presence signals that you belong in those rooms. The quality of who reaches out to you, who wants to collaborate with you, who refers you without hesitation, all of it shifts when your brand finally reflects how serious you actually are.
              </p>
              <p>
                Most established founders are doing the work at a high level and showing up online with a brand that quietly undersells all of it. The business is real. The results are real. The brand just has not caught up yet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section
        ref={problemSectionRef}
        className="relative section-padding overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat parallax-bg pointer-events-none -top-[8%] -bottom-[8%]"
          style={{
            backgroundImage: `url('${homePageAssets.behindProblem}')`,
            backgroundPosition: `center ${PROBLEM_BG_FOCUS_Y}`,
            transform: `translateY(${problemParallaxY}px) scale(1.1)`,
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" aria-hidden />
        <div className="container-elegant relative z-10">
          <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white px-6 py-10 shadow-md md:px-12 md:py-12">
            <h2 className="text-display text-black mb-8 text-center">Your content is not neutral.</h2>
            <div className="space-y-6 text-editorial text-gray-800">
              <p>
                Every time you post with a brand that does not match your level, you are actively signaling to potential clients and opportunities that you are not ready for the room they are operating in. That signal is silent but it lands every single time.
              </p>
              <p>
                The wrong photo sends someone scrolling past before they ever read a word. The wrong brand presence on a speaker pitch, a collaboration inquiry, or a DM follow-up makes a decision maker hesitate. Content that looks almost right but does not fully land is not harmless. Every post you put out with a brand that is behind where you actually are is pushing clients and opportunities farther from hiring you, and you would never even know which ones walked away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What they have tried */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display text-black mb-8 text-center">You have already tried to solve this.</h2>
            <div className="space-y-6 text-editorial text-gray-700">
              <p>
                You have worked with photographers who were talented but had no framework for your brand. You have posted more consistently without results that matched the effort. You have hired people who showed up, captured the moment, and left, and the content sat in a folder because no one connected the shoot to the brand to the strategy.
              </p>
              <p>
                And you have probably shown up to events or hosted them. You walked into the room, connected with incredible people, and felt the energy of something real happening. You came home fired up. And then two weeks later nothing had changed. The excitement faded, the connections went quiet, and the brand that was supposed to reflect that version of you was still exactly the same as when you left. Because showing up in the room is one thing. Having a brand that locks in what happened there and keeps working after you get home is something else entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two offers */}
      <section
        ref={twoOffersSectionRef}
        className="relative section-padding overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat parallax-bg pointer-events-none -top-[8%] -bottom-[8%]"
          style={{
            backgroundImage: `url('${homePageAssets.behindTwoOffers}')`,
            backgroundPosition: `center ${TWO_OFFERS_BG_FOCUS_Y}`,
            transform: `translateY(${twoOffersParallaxY}px) scale(1.1)`,
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" aria-hidden />
        <div className="container-elegant relative z-10">
          <div className="mx-auto mb-10 max-w-4xl rounded-2xl border border-gray-200 bg-white px-6 py-8 shadow-md md:mb-14 md:px-10 md:py-9">
            <h2 className="text-display text-black text-center">Two ways to work together right now.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-md">
              <h3 className="text-2xl font-semibold text-black mb-4">Content that finally matches your level.</h3>
              <p className="text-editorial text-gray-800 mb-6">
                Spotlight is for founders who are ready to stop showing up online with a brand that undersells everything they have built. You show up and we handle the rest. Creative direction, visual strategy, and execution built around your brand specifically. What you walk away with is a library of content that makes your authority visible the moment someone lands on your page.
              </p>
              <p className="text-editorial text-gray-800 mb-8">
                This is not a generic shoot. Every image and every frame is built to work for your brand and your ideal client. You leave with content that converts.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto group">
                <a href={SPOTLIGHT_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  Book a Spotlight Shoot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-md">
              <h3 className="text-2xl font-semibold text-black mb-4">Your event deserves content that keeps working.</h3>
              <p className="text-editorial text-gray-800 mb-6">
                You planned the room. You sold the tickets. The transformation your clients experience inside that event is real. Immersion captures all of it in a way that lasts long after the event ends.
              </p>
              <p className="text-editorial text-gray-800 mb-8">
                The content becomes the proof of your authority. It becomes social proof for your next launch. It becomes the thing that makes the next room sell faster because people can see exactly what it looks like to be in a room you lead. Average coverage takes photos. Immersion builds an asset.
              </p>
              <Button asChild size="lg" className="w-full sm:w-auto group">
                <Link href="/book/immersion">
                  Plan My Event Coverage
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ICON waitlist */}
      <section className="section-padding bg-black text-white">
        <div className="container-elegant">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display text-white mb-8">Looking for the full partnership?</h2>
            <div className="space-y-6 text-editorial text-white/90 mb-10 text-left md:text-center">
              <p>
                ICON Brand Partnership is a monthly retainer where West Rose Media handles the entire content operation. Strategy. Creative direction. Photography. Video. Editing. Publishing. Four clients at a time.
              </p>
              <p>
                One spot remains for 2026, starting in September. A deposit holds your place. If that spot is claimed before you apply, you can still apply to join the 2027 waitlist.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 group">
              <Link href="/apply">
                Apply Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={homePageAssets.behindHowItWorks}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="container-elegant relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-display text-black mb-4">How it works</h2>
            <p className="text-editorial text-gray-600">
              Whether you are booking a shoot, bringing us to your event, or applying for the full partnership, the process is the same. Clear creative direction from the start. No managing logistics on your end. Content that performs when it lands.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">01</p>
              <h3 className="text-xl font-semibold mb-3">Strategy and vision alignment</h3>
              <p className="text-gray-600">
                We align on goals, long-term vision, and how your brand should feel at the next level. Creative direction and visual alignment are set up front so the brand evolves with intention.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">02</p>
              <h3 className="text-xl font-semibold mb-3">Concept and shoot preparation</h3>
              <p className="text-gray-600">
                We build the shoot concept and handle logistics like locations, creative direction, and prep so you are not managing details or making it up as you go.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">03</p>
              <h3 className="text-xl font-semibold mb-3">Capture</h3>
              <p className="text-gray-600">
                We direct high-end photography and video that makes you look credible, powerful, and established while respecting your time and attention.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">04</p>
              <h3 className="text-xl font-semibold mb-3">Edit, package, and publish</h3>
              <p className="text-gray-600">
                We edit the content, package it into post-ready assets, and prepare it for consistent publishing so execution does not fall back on you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-hero text-black mb-6">What changes when the brand finally matches the business.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Stephanie is an absolute pro and has such a gift for capturing your best self. The difference between good photos and investing at a higher level is massive. I feel like a completely different business owner with these shots in my toolkit. I am obsessed with this new chapter for my brand. Thank you, Stephanie, for such an incredible experience.",
                author: "Brooke",
              },
              {
                quote:
                  "Working with Stephanie Rose is a choice I would make again a hundred times over. She is a visionary, a storyteller, and a deeply intentional creator. She does not just take photos. She captures truth, power, and raw beauty that often goes unseen. It was not about aesthetics. It was about meaning. It was empowering, transformative, and unforgettable.",
                author: "Abby Belin",
              },
              {
                quote:
                  "Stephanie is the real deal. She is grounded, raw, honest, and brings undeniable fire to every space she leads. The value is consistently next-level. If you are serious about building an iconic brand, you would be missing out not to have her in your corner.",
                author: "Gigi Hunt",
              },
              {
                quote:
                  "Stephanie delivers incredible value. Her knowledge, energy, and integrity are unmatched. She walks her talk, and I have learned so much from her.",
                author: "Leigh Marino",
              },
              {
                quote:
                  "She is raw, open, and honest, but her approach is so kind. What I did not expect was the confidence I built from working with her. The group coaching experience was truly incredible. Stephanie is ICONIC. Do not sleep on working with her.",
                author: "Charlene Christiansen",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="bg-white border-l-4 border-black p-10 card-elevated"
              >
                <p className="text-editorial mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <span className="text-elegant text-lg">{testimonial.author}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={homePageAssets.behindReadyToStart}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero text-white mb-6">Ready to get started?</h2>
            <p className="text-editorial text-white/90 max-w-2xl mx-auto mb-10">
              Whether you have a shoot to book, an event to cover, or you are serious about the full partnership, here is where to go next.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 group">
                <a href={SPOTLIGHT_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  Book a Spotlight Shoot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 group">
                <Link href="/book/immersion">
                  Plan My Event Coverage
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black group">
                <Link href="/apply">
                  Apply for September (ICON)
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white border-t border-gray-200">
        <div className="container-elegant max-w-3xl mx-auto">
          <h2 className="text-display text-black mb-12 text-center">Frequently asked questions</h2>
          <dl className="space-y-10">
            <div>
              <dt className="font-semibold text-black text-lg mb-2">What does West Rose Media do?</dt>
              <dd className="text-editorial text-gray-700">
                West Rose Media produces brand photography and video for established founders and entrepreneurs across Canada. Services include one-time Spotlight shoots, full event and mastermind coverage through the Immersion package, and the ICON Brand Partnership for ongoing monthly content operations. Stephanie Rose leads strategy and creative direction for every client.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-black text-lg mb-2">Where does West Rose Media work?</dt>
              <dd className="text-editorial text-gray-700">
                West Rose Media is based in Calgary, Alberta and works with founders across North America. Regular shoot calendars run in Calgary, Vancouver, and Toronto. Other cities are available by quote. ICON Brand Partnership clients work remotely on strategy and planning, with in-person content captured during scheduled travel dates and intentional shoot days in key cities.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-black text-lg mb-2">How much does a brand photography shoot cost?</dt>
              <dd className="text-editorial text-gray-700">
                The Spotlight package starts at $1,921 CAD and includes photos and vertical video content. Event and mastermind coverage through the Immersion package starts at $6,000 CAD. The ICON Brand Partnership starts at $5,000 CAD per month.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-black text-lg mb-2">How quickly do I receive my content?</dt>
              <dd className="text-editorial text-gray-700">
                Spotlight photos are delivered within one week. Video is delivered within ten days.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-black text-lg mb-2">Is West Rose Media accepting new clients?</dt>
              <dd className="text-editorial text-gray-700">
                Spotlight and Immersion bookings are available now. One ICON Brand Partnership spot remains for 2026, starting in September. A deposit holds the spot. Applications for the 2027 waitlist are also open at westrosemedia.com.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-black text-lg mb-2">What is the ICON Brand Partnership?</dt>
              <dd className="text-editorial text-gray-700">
                The ICON Brand Partnership is a monthly retainer where West Rose Media handles the full content operation for a founder&apos;s brand. It includes strategy, creative direction, photography, video, editing, and publishing. West Rose Media partners with a maximum of four ICON clients at a time.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-black text-lg mb-2">Who is Stephanie Rose?</dt>
              <dd className="text-editorial text-gray-700">
                Stephanie Rose is the founder of West Rose Media, a premium brand content studio based in Calgary, Alberta. She leads strategy and creative direction for every client and works alongside a team of professional photographers and videographers. West Rose Media specializes in personal brand content for founders, coaches, and digital product creators across Canada.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Mastermind */}
      <section className="relative section-padding overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat parallax-bg"
          style={{
            backgroundImage: `url('${homePageAssets.behindMastermind}')`,
            backgroundPosition: "center center",
            transform: "scale(1.05)",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero text-white mb-12 drop-shadow-lg">Manifesting & Marketing Mastermind</h2>
            <div className="max-w-4xl mx-auto space-y-8 mb-12">
              <p className="text-editorial text-white/90">
                Become the woman whose brand is seen, felt, and followed without burning out or playing small.
              </p>
              <p className="text-editorial text-white/90">
                A 6-month Manifesting & Marketing Mastermind experience. Marketing strategy that converts. Manifestation that moves money. Stephanie and Jackie. One room. Six months.
              </p>
              <p className="text-editorial text-white/90">
                Includes luxury content retreat March 6-9th in Kelowna BC, Canada.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/mastermind">Learn about the Mastermind</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
