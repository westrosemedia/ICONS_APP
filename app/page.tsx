"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import EditorialGrid from "@/components/EditorialGrid";

export default function HomePage() {
  // Homepage component
  return (
    <main className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
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
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%'
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
            Where brands come to rise.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed mb-6 sm:mb-8 lg:mb-12 px-4">
            Luxury personal branding photography and business coaching for female entrepreneurs in Calgary, Alberta and across Canada. The future of personal branding is cinematic, strategic, and unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
              <Link href="/quiz">
                Find out what your next power move is
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="group text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 border-white text-white hover:bg-white hover:text-black">
              <Link href="/mastermind">
                Join the Movement Makers Mastermind
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Quiz Entry */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-black mb-6">
              What's your next iconic move?
            </h2>
            <p className="text-editorial max-w-2xl mx-auto mb-12">
              Take the quiz to find your perfect path - custom-tailored for where you are and where you're going.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" variant="accent" className="group">
                <Link href="/quiz">
                  Find out what your next power move is
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Grid */}
      <EditorialGrid />

      {/* Featured Image Showcase */}
      <section className="relative w-full bg-black overflow-hidden">
        <div className="relative w-full h-[70vh] min-h-[500px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_075.jpg?alt=media&token=ae30650a-5ad9-43ed-8723-a237d5b551a4"
            alt="Luxury brand photography and content creation for entrepreneurs in Canada - West Rose Media"
            fill
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            sizes="100vw"
            loading="lazy"
            quality={85}
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center z-10"
          >
            <div className="text-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Where Vision Meets
                <br />
                <span className="text-[#c1ff72]">Reality</span>
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Every frame tells a story. Every story builds a legacy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Image Section */}
      <section className="relative w-full bg-black overflow-hidden">
        <div className="relative w-full h-[70vh] min-h-[500px]">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_5015.jpg?alt=media&token=5e9003c2-c69a-4fd9-8585-0255aad4497c"
            alt="Luxury brand photography and content creation for entrepreneurs - West Rose Media"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        </div>
      </section>

      {/* About West Rose Media */}
      <section className="relative section-padding overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat parallax-bg"
          style={{
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6695.jpg?alt=media&token=bdc5c5e0-b699-41af-acaf-18962769071b')",
            backgroundPosition: "center 25%",
            transform: "scale(1.05)"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero text-white mb-12 drop-shadow-lg">
              This isn't just content. This is legacy work.
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-editorial text-white/90">
                You've built something powerful. But the world doesn't see it the way you feel it yet.
              </p>
              <p className="text-editorial text-white/90">
                That's where I come in.
              </p>
              <p className="text-editorial text-white/90">
                West Rose Media was born because I was tired of watching brilliant entrepreneurs get overlooked. You don't need more to-do's. You need a partner who gets it, owns it, and delivers. Strategy. Execution. Visuals. Copy. Done with style and soul.
              </p>
              <p className="text-editorial text-white/90">
                My clients don't hire me for photos. They partner with me to amplify their presence, elevate their brand, and unlock the kind of influence that turns into serious revenue. If you're scaling fast and ready to look, sound, and feel like the leader you are, this is your next move.
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
                <Link href="/mastermind">Join the Movement Makers Mastermind</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Powerful Personal Brand */}
      <section className="relative section-padding overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat parallax-bg"
          style={{
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_077.jpg?alt=media&token=9a8f6303-cd9a-4e76-9302-4bbba5cacc47')",
            backgroundPosition: "center center",
            transform: "scale(1.05)"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero text-white mb-12 drop-shadow-lg">
              Powerful Personal Brand
            </h2>
            <div className="max-w-4xl mx-auto space-y-8 mb-12">
              <p className="text-editorial text-white/90">
                Build your legacy, amplify your voice, and become iconic.
              </p>
              <p className="text-editorial text-white/90">
                A step-by-step journey for ambitious women and nonbinary leaders ready to build something bigger than themselves. If 2026 is the year you plan to launch your podcast, publish your book, deliver your TED Talk, or take the keynote spot at the biggest event of your career, this is where you step into that future.
              </p>
              <p className="text-editorial text-white/90">
                Choose The One Year Experience or The 16 Week Intensive. Biweekly Q&A and pitch sessions included.
              </p>
            </div>
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/ppb">
                  Learn More About Powerful Personal Brand
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Podcast CTA Banner */}
      <section className="section-padding bg-black text-white">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Play className="w-12 h-12 mr-4" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Listen to ICONS Podcast
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Where bold entrepreneurs learn to look like money, lead with power, and turn their brand into influence that pays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="group bg-white text-black hover:bg-gray-100">
                <Link href="/podcast">
                  Listen Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <a
                href="https://open.spotify.com/show/4jQBGWzfyyYizEThs3BAeR?si=cc9eaa447dd7486a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors rounded-lg font-medium"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.419.34-.66.719-.48 4.56 1.021 8.52 1.561 11.64 3.48.42.18.479.659.24 1.021zm1.44-3.3c-.3.42-.84.6-1.26.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.359.18.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Subscribe on Spotify
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Login Section */}
      <section className="section-padding">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero text-black mb-8">
              Welcome back.
            </h2>
            <p className="text-editorial max-w-2xl mx-auto mb-12">
              Access your dashboard and get back to building your empire.
            </p>
            <Button asChild size="lg" className="group">
              <Link href="/login">
                Enter Portal
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
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
            <h2 className="text-hero text-black mb-8">Client Love</h2>
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

      {/* Video Showcase */}
      <section className="relative w-full bg-black overflow-hidden">
        <video
          className="w-full h-auto object-cover"
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/ASR_BTS.mp4?alt=media&token=0a669b8a-64b6-4043-84a3-dd2ab38d4a0b"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          loading="lazy"
          style={{ 
            width: '100%',
            height: 'auto',
            minHeight: '50vh',
            maxHeight: '80vh',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 z-10"
        >
        </motion.div>
      </section>

    </main>
  );
}
  