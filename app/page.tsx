"use client";
import React from "react";
import Link from "next/link";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="bg-black text-white font-body w-full overflow-x-hidden">
      {/* 1️⃣ Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-0 sm:px-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Banner.mp4?alt=media"
          autoPlay
          loop
          muted
          playsInline
          style={{ minWidth: '100vw', minHeight: '100vh' }}
        />
        <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 py-24">
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-white drop-shadow-lg">
            Where ICONS come to rise.
          </h1>
          <p className="text-lg md:text-2xl font-body mt-6 max-w-2xl text-white/80">
            The future of personal branding is cinematic, strategic, and unforgettable. Welcome to ICONS.
          </p>
          <Link
            href="/quiz"
            className="btn accent mt-10"
          >
            find out what your next power move is &rarr;
          </Link>
        </div>
      </section>

      {/* 2️⃣ Quiz Entry */}
      <section id="quiz" className="w-full flex flex-col items-center justify-center py-24 px-4 bg-black">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white text-center">
          What’s your next iconic move?
        </h2>
        <p className="text-lg md:text-xl font-body mt-4 max-w-2xl text-center text-white/80">
          Take the quiz to find your perfect path - custom-tailored for where you are and where you’re going.
        </p>
        <Link
          href="/quiz"
          className="btn accent mt-8"
        >
          find out what your next power move is &rarr;
        </Link>
      </section>

      {/* 3️⃣ Parallax Image Gallery */}
      <section className="relative w-full py-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {/* First image with quote */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5983.jpg?alt=media"
                alt="Editorial client image 1"
                className="w-full h-[60vw] max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                style={{ willChange: 'transform' }}
              />
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <span className="bg-black/60 px-8 py-4 text-xl md:text-3xl font-heading text-white border-l-4 border-white shadow-lg">
                  "When the world sees you as iconic, they pay you like you are."
                </span>
              </div>
            </div>
            {/* Second image */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6544.jpg?alt=media"
                alt="Editorial client image 2"
                className="w-full h-[60vw] max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                style={{ willChange: 'transform' }}
              />
            </div>
            {/* Third image */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR3352.jpg?alt=media"
                alt="Editorial client image 3"
                className="w-full h-[60vw] max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                style={{ willChange: 'transform' }}
              />
            </div>
            {/* Fourth image */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR4578.jpg?alt=media"
                alt="Editorial client image 4"
                className="w-full h-[60vw] max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                style={{ willChange: 'transform' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ About West Rose Media */}
      <section className="w-full py-24 px-4 bg-black flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-6">
          This isn’t just content. This is legacy work.
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-center text-white/80 font-body">
          You’ve built something powerful. But the world doesn’t see it the way you feel it yet.<br />
          That’s where I come in.<br /><br />
          West Rose Media was born because I was tired of watching brilliant entrepreneurs get overlooked. You don’t need more to-do’s. You need a partner who gets it, owns it, and delivers. Strategy. Execution. Visuals. Copy. Done with style and soul.<br /><br />
          My clients don’t hire me for photos. They partner with me to amplify their presence, elevate their brand, and unlock the kind of influence that turns into serious revenue. If you’re scaling fast and ready to look, sound, and feel like the leader you are, this is your next move.
        </p>
      </section>

      {/* 5️⃣ The ICON Society */}
      <section className="w-full py-24 px-4 bg-black flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-6">
          The ICON Society
        </h2>
        <p className="max-w-2xl text-lg md:text-xl text-center text-white/80 font-body mb-8">
          You weren’t meant to build your legacy alone.<br /><br />
          The ICON Society is our private community for rising entrepreneurs. A space where bold, visionary leaders get seen, paid, and supported. This is where real influence is built - in rooms where everyone is playing big.<br /><br />
          This isn’t a cheerleader circle. It’s a power table.
        </p>
        <Link
          href="#waitlist"
          className="btn accent mt-2"
        >
          Get on the Waitlist
        </Link>
        <Link href="/login" className="text-white/60 underline text-sm hover:text-white transition-all duration-200">
          Already a member? Log in here.
        </Link>
      </section>

      {/* 6️⃣ Client Login Section */}
      <section className="w-full py-24 px-4 bg-black flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-6">
          Welcome back, ICONS.
        </h2>
        <p className="max-w-xl text-lg text-center text-white/80 font-body mb-8">
          Access your dashboard and get back to building your empire.
        </p>
        <Link
          href="/login"
          className="btn accent mt-2"
        >
          Enter Portal &rarr;
        </Link>
      </section>

      {/* 7️⃣ Social Proof - Client Love */}
      <section className="w-full py-24 px-4 bg-black flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
          Client Love
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
          {/* Abby Belin */}
          <div className="bg-charcoal/80 border-l-4 border-white p-8 rounded-lg shadow-lg flex flex-col">
            <p className="text-lg font-body mb-4">“Working with Stephanie Rose is a choice I’d make again a hundred times over.<br />She’s a visionary, a storyteller, and a deeply intentional creator. She doesn’t just take photos - she captures truth, power, and raw beauty that often goes unseen.<br />It wasn’t about aesthetics - it was about meaning. It was empowering, transformative, and unforgettable.”</p>
            <span className="font-heading font-bold text-white mt-2">Abby Belin</span>
          </div>
          {/* Gigi Hunt */}
          <div className="bg-charcoal/80 border-l-4 border-white p-8 rounded-lg shadow-lg flex flex-col">
            <p className="text-lg font-body mb-4">“Stephanie is the real deal. She’s grounded, raw, honest, and brings undeniable fire to every space she leads.<br />I’ve worked with her inside the Icon Society - the value is consistently next-level.<br />If you’re serious about building an iconic brand, you’d be missing out not to have her in your corner.”</p>
            <span className="font-heading font-bold text-white mt-2">Gigi Hunt</span>
          </div>
          {/* Leigh Marino */}
          <div className="bg-charcoal/80 border-l-4 border-white p-8 rounded-lg shadow-lg flex flex-col">
            <p className="text-lg font-body mb-4">“Stephanie delivers incredible value. Her knowledge, energy, and integrity are unmatched.<br />She walks her talk, and I’ve learned so much from her.”</p>
            <span className="font-heading font-bold text-white mt-2">Leigh Marino</span>
          </div>
          {/* Charlene Christiansen */}
          <div className="bg-charcoal/80 border-l-4 border-white p-8 rounded-lg shadow-lg flex flex-col">
            <p className="text-lg font-body mb-4">“She’s raw, open, and honest - but her approach is so kind.<br />What I didn’t expect was the confidence I built from working with her. The group coaching experience was truly incredible.<br />Stephanie is ICONIC. Don’t sleep on working with her.”</p>
            <span className="font-heading font-bold text-white mt-2">Charlene Christiansen</span>
          </div>
        </div>
      </section>

      {/* 8️⃣ Cinematic Video Section */}
      <section className="w-full py-24 px-4 bg-black flex flex-col items-center">
        <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <video
            className="w-full h-[60vw] max-h-[600px] object-cover rounded-lg"
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/ASR_BTS.mp4?alt=media"
            autoPlay
            loop
            muted
            playsInline
            controls
            poster="/fallback-image.jpg" // Optional: add a fallback image in public/
          />
        </div>
      </section>
    </div>
  );
}
  