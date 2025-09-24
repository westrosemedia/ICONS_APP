"use client";
import React from "react";
import Link from "next/link";
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
          style={{ 
            minWidth: '100vw', 
            minHeight: '100vh',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 py-8 sm:py-12 lg:py-24 max-w-5xl mx-auto"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 drop-shadow-lg px-2">
            Where ICONS come to rise.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed mb-6 sm:mb-8 lg:mb-12 px-4">
            The future of personal branding is cinematic, strategic, and unforgettable. Welcome to ICONS.
          </p>
          <Button asChild size="lg" className="group">
            <Link href="/quiz">
              Find out what your next power move is
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Quiz Entry */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-black mb-6">
              What's your next iconic move?
            </h2>
            <p className="text-editorial max-w-2xl mx-auto mb-12">
              Take the quiz to find your perfect path - custom-tailored for where you are and where you're going.
            </p>
            <Button asChild size="lg" variant="accent" className="group">
              <Link href="/quiz">
                Find out what your next power move is
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Editorial Grid */}
      <EditorialGrid />

      {/* About West Rose Media */}
      <section className="relative section-padding overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6695.jpg?alt=media&token=bdc5c5e0-b699-41af-acaf-18962769071b')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
          </motion.div>
        </div>
      </section>

      {/* The ICON Society */}
      <section className="relative section-padding overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2148.jpg?alt=media&token=b84171c2-0c44-40e3-802d-55e90ab4f8f7')"
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero text-white mb-12 drop-shadow-lg">
              The ICON Society
            </h2>
            <div className="max-w-4xl mx-auto space-y-8 mb-12">
              <p className="text-editorial text-white/90">
                You weren't meant to build your legacy alone.
              </p>
              <p className="text-editorial text-white/90">
                The ICON Society is our private community for rising entrepreneurs. A space where bold, visionary leaders get seen, paid, and supported. This is where real influence is built - in rooms where everyone is playing big.
              </p>
              <p className="text-editorial text-white/90">
                This isn't a cheerleader circle. It's a power table.
              </p>
            </div>
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="https://buy.stripe.com/fZe4ia1eQ1nc5hu3cK">Join the ICON Society</Link>
              </Button>
              <div>
                <Link href="/login" className="text-white/80 underline hover:text-white transition-colors">
                  Already a member? Log in here.
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Powerful Personal Brand */}=
      <section className="relative section-padding overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6175.jpg?alt=media&token=0733ba88-1b27-4ca2-be4d-924b8c175e74')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero text-white mb-12 drop-shadow-lg">
              Powerful Personal Brand
            </h2>
            <div className="max-w-4xl mx-auto space-y-8 mb-12">
              <p className="text-editorial text-white/90">
                8 Week Live Course — The signature program of West Rose Media.
              </p>
              <p className="text-editorial text-white/90">
                Build a brand that carries you through every season. This is the exact framework I am known for, completely revamped and leveled up for maximum transformation.
              </p>
              <p className="text-editorial text-white/90">
                First cohort begins October 27. Presale: $2,000 | Regular: $3,000
              </p>
            </div>
            <div className="space-y-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/powerfulpersonalbrand">Learn More</Link>
              </Button>
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-hero text-black mb-8">
              Welcome back, ICONS.
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
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
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
                quote: "Stephanie is the real deal. She's grounded, raw, honest, and brings undeniable fire to every space she leads. I've worked with her inside the Icon Society - the value is consistently next-level. If you're serious about building an iconic brand, you'd be missing out not to have her in your corner.",
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-l-4 border-black p-8 card-elevated"
              >
                <p className="text-editorial mb-6">"{testimonial.quote}"</p>
                <span className="text-elegant text-lg">{testimonial.author}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
  