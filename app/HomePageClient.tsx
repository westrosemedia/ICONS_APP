"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import EditorialGrid from "@/components/EditorialGrid";
import { ArrowRight, ChevronDown } from "lucide-react";
import { homePageFaqItems } from "@/data/homePageFaq";
import { homePageAssets } from "@/lib/homePageAssets";
import { SPOTLIGHT_BOOK_URL } from "@/lib/workWithUsLinks";

/** Background anchor: horizontal % pushes subject right (text sits on dark left), vertical % for vertical framing. */
const PROBLEM_BG_POSITION = "72% 36%";
/** How it works — centered layout; anchor blazer / subject (tweak if crop feels off). */
const HOW_IT_WORKS_BG_POSITION = "50% 28%";
const HOMEPAGE_ICON_IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6863.jpg?alt=media&token=749b0527-f85a-4f9c-8133-0d31d25306ef";

export default function HomePageClient() {
  const problemSectionRef = useRef<HTMLElement | null>(null);
  const howItWorksSectionRef = useRef<HTMLElement | null>(null);
  const [problemParallaxY, setProblemParallaxY] = useState(0);
  const [howItWorksParallaxY, setHowItWorksParallaxY] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
      updateOffset(howItWorksSectionRef.current, setHowItWorksParallaxY);
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

          <div
            className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 py-8 sm:py-12 lg:py-24 max-w-5xl mx-auto"
            data-aos="fade-up"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/75 sm:text-sm">
              Stop editing yourself out.
            </p>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 drop-shadow-lg px-2 leading-tight">
              Stop being the best-kept secret in your industry.
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed mb-6 sm:mb-8 lg:mb-10 px-4">
              West Rose Media builds the brand photography, content, and loyal community that turn accomplished women founders into the authority their market seeks out. We make you visible and impossible to scroll past, so the right clients and opportunities finally find you. ICON Brand Partnership is the full system: strategy, creative direction, photography, and video, run as one team.
            </p>
            <div className="flex flex-col items-center justify-center gap-3">
              <Button asChild size="lg" className="group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                <Link href="/hot&rich">
                  Hotter, Richer, Faster
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                variant="outline"
                className="group mt-3 border-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black"
              >
                <Link href="/apply">
                  Apply for ICON Brand Partnership
                  <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="section-padding bg-white" data-aos="fade-up">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display text-black mb-8 text-center">You did not come this far to stay a secret.</h2>
            <div className="space-y-6 text-editorial text-gray-700">
              <p>
                Your clients refer you without being asked. Women you worked with a year ago still message you about what changed for them. You have the waitlist, the testimonials, and the income to prove this stopped being a side project a long time ago. Then someone clicks your profile, and the woman they find online is two sizes smaller than the one who earned all of it.
              </p>
              <p>
                So you edit. You rewrite the caption until it stops sounding like you. You tell yourself you will post the bold thing once the offer is finished and the brand colors are finally decided. You catch yourself wondering what your old boss or the girl from your grade four class would think, and the version of you worth following stays in your drafts.
              </p>
              <p>
                Here is what is actually happening. You already know how big you are supposed to be, and carrying that quietly feels safer than saying it out loud.
              </p>
              <p>
                The women you are meant to reach cannot find you while you keep editing yourself out. Being visible is how they get to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <EditorialGrid />

      {/* Problem */}
      <section
        ref={problemSectionRef}
        className="relative section-padding overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat parallax-bg pointer-events-none -top-[8%] -bottom-[8%]"
          style={{
            backgroundImage: `url('${homePageAssets.behindProblem}')`,
            backgroundPosition: PROBLEM_BG_POSITION,
            transform: `translateY(${problemParallaxY}px) scale(1.1)`,
          }}
          aria-hidden
        />
        {/* Dark “safe zone” for text (like split editorial layouts): strong on mobile, angled on desktop */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.48) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.82) 24%, rgba(0,0,0,0.42) 46%, rgba(0,0,0,0.08) 62%, transparent 76%)",
          }}
          aria-hidden
        />
        <div className="container-elegant relative z-10" data-aos="fade-up">
          <div className="max-w-2xl text-left">
            <h2 className="text-display mb-6 text-balance text-white drop-shadow sm:mb-8">
              Every careful post teaches people to underestimate you.
            </h2>
            <div className="space-y-6 text-lg leading-[1.75] text-white/90">
              <p>
                Your content is never neutral. Every safe post quietly trains the right people to scroll past you and the right rooms to leave you off the list. You rarely catch it happening. You just notice the inquiries are smaller than they should be and assume the answer is to post more often.
              </p>
              <p>
                A photo that is almost right. A caption you talked yourself down from. A profile that still looks like where you were two years ago. Each one tells a buyer you are operating below the level she needs, so she hires the woman whose brand looks the part, even when your work is stronger.
              </p>
              <p>
                The version of you worth following never makes it onto the screen, so the market keeps pricing you on the careful one instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What they have tried */}
      <section className="section-padding bg-white" data-aos="fade-up">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display text-black mb-8 text-center">You have tried to fix this already.</h2>
            <div className="space-y-6 text-editorial text-gray-700">
              <p>
                You have hired photographers who were talented and had no idea who you are becoming, so you walked away with beautiful images and no brand. You have posted more, pushed harder, and watched the effort outrun the results. You have done the brand workbook, had the breakthrough, and gone home and posted the same safe content by Monday.
              </p>
              <p>
                You have probably been told to find your voice. You do not need to find your voice. You have always had it. What you have never had is someone who refuses to let you keep it quiet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PR model */}
      <section className="section-padding bg-gray-50" data-aos="fade-up">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display text-black mb-8 text-center">The PR era is over.</h2>
            <div className="space-y-6 text-editorial text-gray-700">
              <p>
                For decades the only way to be known was to pay a firm to convince a magazine you mattered. You hired a publicist, waited months for an editor to decide you were worth a feature, and rented authority you never owned. The day the coverage stopped, the momentum stopped with it.
              </p>
              <p>
                You do not need any of that anymore, and you do not have to be famous first. A PR firm sells you reach you cannot control and a name-drop that fades by next quarter. We build you a community that actually trusts you, and we can start building it right now, at the size you are today. You speak to your people in your own voice, the relationship gets deeper every week, and the authority belongs to you instead of to a press cycle.
              </p>
              <p>
                A few thousand people who believe you will out-earn a magazine cover every time. They buy the day you launch, they bring their friends, and they stay with you through every offer you make after that. That is what West Rose Media builds, in public and on your terms. It is what you hire instead of a PR firm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ICON Brand Partnership */}
      <section className="section-padding bg-black text-white" data-aos="fade-up">
        <div className="container-elegant">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display text-white mb-4">ICON Brand Partnership</h2>
            <p className="text-2xl font-semibold text-white/85 mb-8">
              The team, the direction, and the permission to finally show up as her.
            </p>
            <div
              className="relative mb-10 h-[50vh] min-h-[320px] overflow-hidden rounded-3xl bg-cover bg-no-repeat shadow-2xl md:bg-fixed"
              style={{
                backgroundImage: `url('${HOMEPAGE_ICON_IMAGE}')`,
                backgroundPosition: "center 33%",
              }}
              role="img"
              aria-label="ICON Brand Partnership content experience"
            />
            <div className="space-y-6 text-editorial text-white/90 mb-10 text-left md:text-center">
              <p>
                ICON Brand Partnership is the full system inside West Rose Media. Stephanie Rose leads your strategic creative direction, your brand and offer building, and the calls that keep you moving. The West Rose Media team runs your photography, video, social content, and launch assets, with execution fast enough to ship an idea while it is still hot.
              </p>
              <p>
                This is an entire content team inside your business. A creative director, a brand strategist, a photographer, a videographer, a social producer, and a coach, all running as one unit with Stephanie at the helm. One partnership instead of seven separate hires, and none of the management overhead.
              </p>
              <p>
                And this is the part most people will not say out loud. We stand between you and the internet so you can stop bracing for it. We tell you where to stand, what to say, and which version of you we are putting on the screen. We will not let you shrink the caption or wait for a safer week. The brand we build is the one your competitors study and the one the women you are meant to help can finally find.
              </p>
              <p>
                You stay in the seat that grows the business. We hold the seat that builds the icon and the audience. The combination compounds.
              </p>
              <p className="font-semibold text-white">
                ICON Brand Partnership starts at $5,000 CAD per month and is built custom around your business. Six month minimum, by application.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 group">
                <Link href="/apply">
                  Apply for ICON Brand Partnership
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group border-white text-white hover:bg-white hover:text-black">
                <Link href="/how-it-works">
                  How ICON Brand Partnership Works
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation */}
      <section className="section-padding bg-white" data-aos="fade-up">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display text-black mb-8 text-center">What changes when you stop editing yourself out.</h2>
            <div className="space-y-6 text-editorial text-gray-700">
              <p>
                You stop rehearsing what people might say and start being the name they pass around. The right clients show up to the call already sold, because your brand closed them before you said a word. The rooms you used to pitch your way into start sending the invitation first. The collaboration that was quietly going to someone else lands in your inbox instead.
              </p>
              <p>
                The women who came before you proved you could build a business quietly. You get to build one out loud, and faster than they could, because the tools they never had are sitting in front of you. A brand that finally matches you is what buys that. It moves faster than you can introduce yourself, and it gets to the room before you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        ref={howItWorksSectionRef}
        className="relative section-padding overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat parallax-bg pointer-events-none -top-[8%] -bottom-[8%]"
          style={{
            backgroundImage: `url('${homePageAssets.behindHowItWorks}')`,
            backgroundPosition: HOW_IT_WORKS_BG_POSITION,
            transform: `translateY(${howItWorksParallaxY}px) scale(1.1)`,
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.42) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.48) 40%, rgba(0,0,0,0.18) 72%, rgba(0,0,0,0.06) 100%)",
          }}
          aria-hidden
        />
        <div className="container-elegant relative z-10" data-aos="fade-up">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-display mb-4 text-white drop-shadow">How it works</h2>
            <p className="text-lg leading-[1.75] text-white/90">
              ICON Brand Partnership runs on a clear system. Strategy, production, and execution live inside one team so your brand stays visible and your business stays moving. No managing logistics on your end. Content that performs when it lands.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">01</p>
              <h3 className="text-xl font-semibold text-black mb-3">Strategy and vision alignment</h3>
              <p className="text-gray-700">
                We align on goals, long-term vision, and how your brand should feel at the next level. Creative direction and visual alignment are set up front so the brand evolves with intention.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">02</p>
              <h3 className="text-xl font-semibold text-black mb-3">Concept and shoot preparation</h3>
              <p className="text-gray-700">
                We build the shoot concept and handle logistics like locations, creative direction, and prep so you are not managing details or making it up as you go.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">03</p>
              <h3 className="text-xl font-semibold text-black mb-3">Capture</h3>
              <p className="text-gray-700">
                We direct high-end photography and video that makes you look credible, powerful, and established while respecting your time and attention.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">04</p>
              <h3 className="text-xl font-semibold text-black mb-3">Edit, package, and publish</h3>
              <p className="text-gray-700">
                We edit the content, package it into post-ready assets, and prepare it for consistent publishing so execution does not fall back on you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="section-padding bg-gray-50" data-aos="fade-up">
        <div className="container-elegant">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-hero text-black mb-6">The women who stopped editing themselves out.</h2>
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
              <div
                key={testimonial.author}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="bg-white border-l-4 border-black p-10 card-elevated"
              >
                <p className="text-editorial mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <span className="text-elegant text-lg">{testimonial.author}</span>
              </div>
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
        <div className="relative z-10 container-elegant text-center" data-aos="fade-up">
          <div>
            <h2 className="text-hero text-white mb-6">ICON Brand Partnership is by application, and the room is small.</h2>
            <p className="text-editorial text-white/90 max-w-2xl mx-auto mb-10">
              You cannot add ICON Brand Partnership to a cart. You apply, and Stephanie reviews every application herself. A small number of seats are open right now. Tell us about your business, what you are building toward, and the version of you that you are done editing out. If it is a fit, you will hear from Stephanie within five business days.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100 group">
                <Link href="/apply">
                  Apply for ICON Brand Partnership
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Another way in */}
      <section className="section-padding bg-white border-t border-gray-200" data-aos="fade-up">
        <div className="container-elegant max-w-5xl">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 md:p-12">
            <h2 className="text-display text-black mb-6">Not ready for the full partnership?</h2>
            <p className="text-editorial text-gray-700 mb-10">
              If ICON Brand Partnership comes later, you can still work with us. Spotlight is a one time brand shoot built around the woman you are becoming, beyond the one you have been performing. Immersion captures your event so the energy in the room keeps selling long after the doors close.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <a href={SPOTLIGHT_BOOK_URL} target="_blank" rel="noopener noreferrer">
                  Book a Spotlight Shoot
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/book/immersion">
                  Cover My Event
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
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
        <div className="relative z-10 container-elegant text-center" data-aos="fade-up">
          <div>
            <h2 className="text-hero text-white mb-12 drop-shadow-lg">Manifesting & Marketing Mastermind</h2>
            <div className="max-w-4xl mx-auto space-y-8 mb-12">
              <p className="text-editorial text-white/90">
                Become the woman whose brand is seen, felt, and followed without burning out or playing small.
              </p>
              <p className="text-editorial text-white/90">
                A 6-month Manifesting & Marketing Mastermind experience. Marketing strategy that converts. Manifestation that moves money. Stephanie and Jackie. One room. Six months.
              </p>
              <p className="text-editorial text-white/90">
                Includes luxury content retreat October 16-18 in Banff AB, Canada.
              </p>
            </div>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link href="/mastermind">Learn about the Mastermind</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white border-t border-gray-200" data-aos="fade-up">
        <div className="container-elegant max-w-3xl mx-auto">
          <h2 className="text-display text-black mb-12 text-center">Frequently asked questions</h2>
          <dl className="border-y border-gray-200 divide-y divide-gray-200">
            {homePageFaqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              const panelId = `faq-panel-${index}`;
              const triggerId = `faq-trigger-${index}`;
              return (
                <div key={item.question}>
                  <dt className="m-0">
                    <button
                      type="button"
                      id={triggerId}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-black text-lg hover:text-gray-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
                      onClick={() =>
                        setOpenFaqIndex((prev) => (prev === index ? null : index))
                      }
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span className="pr-2">{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                  </dt>
                  {isOpen ? (
                    <dd
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className="pb-5 pl-0 pr-10 text-editorial text-gray-700 -mt-1"
                    >
                      {item.answer}
                    </dd>
                  ) : null}
                </div>
              );
            })}
          </dl>
        </div>
      </section>
    </main>
  );
}
