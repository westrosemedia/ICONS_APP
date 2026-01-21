"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import EditorialGrid from "@/components/EditorialGrid";

export default function HomePage() {
  // Homepage component
  const portfolioImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6965.jpg?alt=media&token=9f791e83-44d3-4022-bb61-8f3bd5a1def0",
      alt: "West Rose Media portfolio image 1"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR7086.jpg?alt=media&token=6bf7e2b2-0eab-46cf-bc95-8a1729102797",
      alt: "West Rose Media portfolio image 2"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_5030.jpg?alt=media&token=b368dc0e-7747-4683-a5f7-be87484155ae",
      alt: "West Rose Media portfolio image 3"
    }
  ];
  const founderGalleryImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_075.jpg?alt=media&token=ae30650a-5ad9-43ed-8723-a237d5b551a4",
      alt: "West Rose Media founder gallery image 1"
    }
  ];
  const travelImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_038.jpg?alt=media&token=93446e09-e15f-4253-add9-a4ba78f05bdf",
      alt: "West Rose Media travel image 1"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_037.jpg?alt=media&token=04a83038-59fe-447a-8f3b-99900c5db7f1",
      alt: "West Rose Media travel image 2"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_003.jpg?alt=media&token=62172af0-d2ad-4af1-a500-eb8a48d795a3",
      alt: "West Rose Media travel image 3"
    }
  ];
  return (
    <main className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="w-full">
        <div className="relative min-h-[80vh] w-full flex flex-col items-center justify-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover z-0"
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Banner.mp4?alt=media"
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            loading="lazy"
            poster="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_026.jpg?alt=media&token=35b646af-2e21-47e2-84ec-91543d8f9910"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center'
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
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed mb-6 sm:mb-8 lg:mb-12 px-4">
              West Rose Media brings high-level visions to life through photography, video, and end-to-end execution for founders who refuse to look underdeveloped.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
                <Link href="/apply">
                  Apply to work with us
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 border-white text-white hover:bg-white hover:text-black">
                <Link href="/how-it-works">
                  How it works
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="section-padding bg-gray-50">
          <div className="container-elegant">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-display text-black mb-6 text-center">
                Content leadership, handled end to end.
              </h2>
              <div className="space-y-6 text-editorial text-gray-700">
                <p>
                  You already have a massive vision for your brand. The problem is your marketing does not look like it yet.
                </p>
                <p>
                  West Rose Media takes the vision in your head and brings it to life visually, then handles everything required to execute it at a high level. Strategy, creative direction, photography, video, editing, and publishing.
                </p>
                <p>
                  This is built for perfectionist founders who care deeply how their brand shows up.
                </p>
                <p>
                  You keep control of the vision. We take full responsibility for the execution.
                </p>
                <p>
                  The result is a brand that signals authority the moment someone lands on your page, without you having to manage, micromanage, or lower your standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-black">
        <div className="container-elegant py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-8 text-center text-xs md:text-sm text-white/80 uppercase tracking-[0.25em]">
            <div>Done for you content ops</div>
            <div>Strategy + production + publishing</div>
            <div>Founder focused, demand driven</div>
          </div>
        </div>
      </section>

      {/* Editorial Grid */}
      <EditorialGrid />

      {/* How It Works */}
      <section id="how-it-works" className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_075.jpg?alt=media&token=ae30650a-5ad9-43ed-8723-a237d5b551a4"
            alt="West Rose Media how it works background"
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
              This partnership is designed to give you leverage without losing control.
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

      {/* Offer Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-black mb-6">The ICON Brand Partnership</h2>
            <div className="space-y-6 text-editorial text-gray-700">
              <p>
                This is a monthly partnership where West Rose Media handles the full content process from start to finish.
              </p>
              <p>
                It includes strategy, creative direction, photography, video, editing, and publishing so your visibility is managed by one system and one team.
              </p>
              <p>
                It is designed for founders who want one accountable team responsible for their authority and demand, without juggling photographers, editors, and content support separately.
              </p>
              <p>
                This partnership replaces the fragmented content stack and gives you a single, consistent execution engine.
              </p>
            </div>
            <div className="mt-6">
              <Link
                href="/case-studies"
                className="inline-flex text-sm font-semibold text-gray-700 underline underline-offset-4"
              >
                Explore client results
              </Link>
            </div>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/apply">
                  Apply to work with us
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What This Replaces */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_0428.jpg?alt=media&token=ea7f180f-5440-4344-85b8-97ea13bf6662"
            alt="West Rose Media what this replaces background"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="container-elegant relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-display text-black mb-4">What this replaces</h2>
            <p className="text-editorial text-gray-700 mb-8">
              Most founders are already paying more than they realize.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>A photographer hired a few times a year</li>
              <li>A videographer on a separate timeline</li>
              <li>A social media manager waiting on assets</li>
              <li>A strategist giving advice without execution</li>
              <li>Countless hours deciding what to post</li>
            </ul>
            <p className="text-editorial text-gray-700 mt-8">
              Instead of managing all of that, you have one partner responsible for the entire content operation. Fewer handoffs. Fewer decisions. More momentum.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-black text-white">
        <div className="container-elegant">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Where Vision Meets
              <br />
              <span className="text-[#c1ff72]">Reality</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Every frame tells a story. Every story builds a legacy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioImages.map((image) => (
              <div key={image.src} className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About West Rose Media */}
      <section className="relative section-padding bg-black">
        <div className="relative z-10 container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero text-white mb-12 drop-shadow-lg">
              Meet the founder
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-editorial text-white/90">
                West Rose Media was founded by Stephanie Rose to solve a problem she kept seeing in high performing businesses.
              </p>
              <p className="text-editorial text-white/90">
                Founders were hiring talented people, creating content consistently, and still feeling invisible, scattered, or misrepresented online.
              </p>
              <p className="text-editorial text-white/90">
                With a background in brand strategy and content direction, Stephanie built West Rose Media to operate differently. The ICON Brand Partnership brings strategy, production, and publishing into one system, guided by clear positioning, strong creative direction, and decisive leadership.
              </p>
              <p className="text-editorial text-white/90">
                Stephanie leads strategy and creative direction for every ICON Brand Partnership client and works alongside a team of professional, educated photographers and videographers who execute at the highest standard.
              </p>
              <p className="text-editorial text-white/90">
                This ensures founders are represented accurately, consistently, and at a level that matches the business they are building.
              </p>
            </div>
            
            {/* Featured Image */}
            <div className="mt-16 max-w-2xl mx-auto relative aspect-[4/5]">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_089.jpg?alt=media&token=589133f6-da89-4bcf-8e4a-0d322795b6fb"
                alt="Stephanie Rose - Calgary Personal Branding Photographer and Business Coach for Entrepreneurs"
                fill
                className="object-cover rounded-lg shadow-2xl"
                sizes="(max-width: 768px) 100vw, 672px"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Working Together Across Cities */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-display text-black mb-6">Working together across cities</h2>
              <div className="space-y-6 text-editorial text-gray-700">
                <p>
                  West Rose Media works with founders across North America, with recurring work in Calgary, Vancouver, and Toronto. You do not need to be based in the same city to partner with us.
                </p>
                <p>
                  ICON Brand Partnership clients work with us remotely on strategy and planning, with content captured through scheduled travel dates and intentional shoot days in key cities.
                </p>
                <p>
                  For founders looking for one off content capture, limited single shoot opportunities are available in Calgary, Vancouver, and Toronto based on the travel calendar.
                </p>
                <p>
                  All work is planned in advance to maintain quality, focus, and consistency.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src={travelImages[0].src}
                  alt={travelImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={travelImages[1].src}
                  alt={travelImages[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <Image
                  src={travelImages[2].src}
                  alt={travelImages[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-hero text-black mb-6">The results are in</h2>
            <div className="text-editorial text-gray-700 max-w-3xl mx-auto space-y-6">
              <p>
                Founders partner with West Rose Media because they want their content handled with the same level of care and precision as the rest of their business.
              </p>
              <p>
                What changes is not just how their brand looks. It is the increase in inbound inquiries, the confidence to show up consistently, and the authority that books them solid through future quarters.
              </p>
              <p>
                Event content is turning into revenue in real time, and the brand presence keeps building trust long after the shoot ends.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Working with Stephanie Rose is a choice I'd make again a hundred times over. She's a visionary, a storyteller, and a deeply intentional creator. She doesn't just take photos - she captures truth, power, and raw beauty that often goes unseen. It wasn't about aesthetics - it was about meaning. It was empowering, transformative, and unforgettable.",
                author: "Abby Belin"
              },
              {
                quote: "Stephanie is the real deal. She's grounded, raw, honest, and brings undeniable fire to every space she leads. The value is consistently next-level. If you're serious about building an iconic brand, you'd be missing out not to have her in your corner.",
                author: "Gigi Hunt"
              },
              {
                quote: "Stephanie delivers incredible value. Her knowledge, energy, and integrity are unmatched. She walks her talk, and I've learned so much from her.",
                author: "Leigh Marino"
              },
              {
                quote: "She's raw, open, and honest - but her approach is so kind. What I didn't expect was the confidence I built from working with her. The group coaching experience was truly incredible. Stephanie is ICONIC. Don't sleep on working with her.",
                author: "Charlene Christiansen"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                viewport={{ once: true }}
                className="bg-white border-l-4 border-black p-10 card-elevated"
              >
                <p className="text-editorial mb-6">"{testimonial.quote}"</p>
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
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR7086.jpg?alt=media&token=6bf7e2b2-0eab-46cf-bc95-8a1729102797"
            alt="West Rose Media final call to action image"
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
            <h2 className="text-hero text-white mb-8">
              Work with West Rose Media
            </h2>
            <p className="text-editorial text-white/90 max-w-2xl mx-auto mb-12">
              West Rose Media works with a limited number of founders each month to run their content operations at a high level.
              <br />
              <br />
              If you are looking for a long term partner who understands strategy, execution, and visibility as a business tool, you can apply to work with us.
              <br />
              <br />
              Applications are reviewed carefully. If it is aligned, you will hear from us. If it is not, we will not move forward.
            </p>
            <Button asChild size="lg" className="group bg-white text-black hover:bg-gray-100">
              <Link href="/apply">
                Apply to work with us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Movement Makers Mastermind */}
      <section className="relative section-padding overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat parallax-bg"
          style={{
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285')",
            backgroundPosition: "center center",
            transform: "scale(1.05)"
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
            <h2 className="text-hero text-white mb-12 drop-shadow-lg">
              Movement Makers Mastermind
            </h2>
            <div className="max-w-4xl mx-auto space-y-8 mb-12">
              <p className="text-editorial text-white/90">
                Become the woman whose brand is seen, felt, and followed without burning out or playing small.
              </p>
              <p className="text-editorial text-white/90">
                A 6-month Movement Makers Mastermind experience combining emotional mastery (Tapping with Jackie) + magnetic marketing (Content with Stephanie) to help you scale your visibility, elevate your brand, and be seen as the leader you already are.
              </p>
              <p className="text-editorial text-white/90">
                Includes luxury content retreat March 6-9th in Kelowna BC, Canada.
              </p>
            </div>
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/mastermind">Learn about the Mastermind</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
  