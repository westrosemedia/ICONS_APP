"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";

// Countdown timer component
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const mstOffset = -7 * 60; // MST is UTC-7
      const mstNow = new Date(now.getTime() + (now.getTimezoneOffset() + mstOffset) * 60000);
      
      // Get December 1st at 11:59 PM MST
      const targetDate = new Date(mstNow);
      targetDate.setMonth(11); // December is month 11 (0-indexed)
      targetDate.setDate(1);
      targetDate.setHours(23, 59, 59, 999);
      
      // If we're already past December 1st this year, set it for next year
      if (targetDate.getTime() < mstNow.getTime()) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
      }
      
      const difference = targetDate.getTime() - mstNow.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-white mb-2">{timeLeft.days}</div>
        <div className="text-sm md:text-base text-white/70 uppercase tracking-wider">Days</div>
      </div>
      <div className="text-4xl md:text-6xl font-bold text-white/50">:</div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-white mb-2">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-sm md:text-base text-white/70 uppercase tracking-wider">Hours</div>
      </div>
      <div className="text-4xl md:text-6xl font-bold text-white/50">:</div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-white mb-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-sm md:text-base text-white/70 uppercase tracking-wider">Minutes</div>
      </div>
      <div className="text-4xl md:text-6xl font-bold text-white/50">:</div>
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-bold text-white mb-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
        <div className="text-sm md:text-base text-white/70 uppercase tracking-wider">Seconds</div>
      </div>
    </div>
  );
}

// Application Modal Component
function LegacyApplicationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    currentRevenue: "",
    desiredRevenue: "",
    visibilityBlock: "",
    contentChange: "",
    whyStephanie: "",
    investmentReady: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/legacy-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit application");
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Application submission error:", err);
      alert("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="max-w-2xl w-full bg-black border border-white/10 rounded-lg p-8 md:p-12 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl"
        >
          ×
        </button>

        {isSuccess ? (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your application has been received
            </h2>
            <p className="text-lg text-white/80 mb-8">
              We will reach out within twenty four hours to schedule your private call.
            </p>
            <button
              onClick={onClose}
              className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Apply for The ICON Legacy Experience
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-white/80 mb-2">
                  What is your full name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="businessName" className="block text-white/80 mb-2">
                  What is your business name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="currentRevenue" className="block text-white/80 mb-2">
                  What is your current monthly revenue
                </label>
                <input
                  type="text"
                  id="currentRevenue"
                  name="currentRevenue"
                  value={formData.currentRevenue}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="desiredRevenue" className="block text-white/80 mb-2">
                  What is your desired monthly revenue for 2026
                </label>
                <input
                  type="text"
                  id="desiredRevenue"
                  name="desiredRevenue"
                  value={formData.desiredRevenue}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="visibilityBlock" className="block text-white/80 mb-2">
                  What is the biggest visibility block in your business right now
                </label>
                <textarea
                  id="visibilityBlock"
                  name="visibilityBlock"
                  value={formData.visibilityBlock}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="contentChange" className="block text-white/80 mb-2">
                  What do you want to change about your content and brand presence
                </label>
                <textarea
                  id="contentChange"
                  name="contentChange"
                  value={formData.contentChange}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="whyStephanie" className="block text-white/80 mb-2">
                  Why do you want to work with Stephanie this year
                </label>
                <textarea
                  id="whyStephanie"
                  name="whyStephanie"
                  value={formData.whyStephanie}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="investmentReady" className="block text-white/80 mb-2">
                  Are you prepared to invest sixty thousand if accepted
                </label>
                <select
                  id="investmentReady"
                  name="investmentReady"
                  value={formData.investmentReady}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">
                  What email should we send your next steps to
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function BlackFridayPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // TODO: Add Stripe checkout link for Jumpstart when provided
  const jumpstartStripeLink = "#"; // Placeholder - user will provide

  return (
    <>
      <Script
        src="https://js.stripe.com/v3/pricing-table.js"
        strategy="lazyOnload"
      />
      
      <div className="min-h-screen bg-black text-white">
        {/* Site Wide Banner */}
        <div className="bg-[#c1ff72] text-black text-center py-3 sticky top-0 z-40">
          <p className="font-bold text-sm md:text-base">
            Black Friday Offers Live Now. Ends December 1st at Midnight.
          </p>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285"
              alt="Black Friday"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              This Black Friday you step into your icon era
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Exclusive limited time access to the most powerful offers of the year. When the clock hits midnight on December 1st these opportunities disappear forever.
            </p>

            <CountdownTimer />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#offers"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors"
              >
                Claim My Black Friday Offer
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-black transition-colors"
              >
                Apply for The ICON Legacy Experience
              </button>
            </div>
          </div>
        </section>

        {/* Offer One: The ICON Legacy Experience */}
        <section id="offers" className="py-20 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-[#c1ff72] text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                Three spots only
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The ICON Legacy Experience
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-2">
                The ultimate one year private brand transformation
              </p>
              <div className="text-3xl md:text-4xl font-bold mb-4">
                Six thousand per month or sixty thousand paid in full
              </div>
              <div className="text-lg text-[#c1ff72] font-semibold mb-8">
                Black Friday Bonus: Enroll by December 1st at midnight and receive December free
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-lg text-white/80 space-y-6 mb-8">
              <p>
                This is your full scale brand evolution with four signature brand shoots a luxury VIP weekend a complete brand overhaul and private access to Stephanie for an entire year. You become the most visible confident and sought after version of yourself with a content and strategy system that keeps your vision alive without you chasing it.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors"
              >
                Apply Now for Legacy Experience
              </button>
            </div>
          </div>
        </section>

        {/* Offer Two: The Movement Maker's Mastermind */}
        <section className="py-20 px-4 border-t border-white/10 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The Movement Maker's Mastermind
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-2">
                High level hybrid mastermind for visibility influence and wealth
              </p>
              <div className="text-3xl md:text-4xl font-bold mb-4">
                Eight thousand
              </div>
              <div className="text-lg text-[#c1ff72] font-semibold mb-8">
                Black Friday Bonus: Private one to one tap and content session with Stephanie and Jackie or a Kelowna retreat upgrade
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-lg text-white/80 space-y-6 mb-8">
              <p>
                Six months of deep visibility and inner leadership expansion. You become the woman whose content carries authority confidence and magnetism. You stop guessing and start selling with intention.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="https://jackie-mcdonald.mykajabi.com/offers/gbLLJg4v/checkout?fbclid=PAQ0xDSwMN6OZleHRuA2FlbQIxMAABp3v1UbwJ-bwikGOANEc48MEpfLirOZWyfQkatqEM11B1ne-TZkRX_wa4ni6y_aem_41lUrn27GEzuKv7uYmNlcA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors"
              >
                Join the Mastermind
              </Link>
            </div>
          </div>
        </section>

        {/* Offer Three: Powerful Personal Brand Early Enrollment */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Powerful Personal Brand Early Enrollment
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-2">
                Sixteen weeks to make your brand look sound and sell like a leader
              </p>
              <div className="text-3xl md:text-4xl font-bold mb-4">
                Two thousand five hundred
              </div>
              <div className="text-lg text-[#c1ff72] font-semibold mb-8">
                Black Friday Bonus: Forty five minute Brand Clarity Intensive and two hundred fifty WRM credit
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-lg text-white/80 space-y-6 mb-8">
              <p>
                The signature curriculum that gives you complete clarity and control over your brand. You refine your message your aesthetic and your strategy so your online presence finally matches your results.
              </p>
            </div>

            <div className="text-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<stripe-pricing-table pricing-table-id="prctbl_1SQB3eCcsY3WjV3QGmc6dPm2" publishable-key="pk_live_51MSOJeCcsY3WjV3Q0h4k8hC7da1piQaQSHx6ukPgWe3hkxDR4GsmfEDah7RoIkH6k9Qln3ups7flMXSS3kuAMhdL005i3wmuav"></stripe-pricing-table>`
                }}
              />
            </div>
          </div>
        </section>

        {/* Offer Four: The ICON Jumpstart */}
        <section className="py-20 px-4 border-t border-white/10 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The ICON Jumpstart
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-2">
                Three day accelerator to kickstart your 2026 brand clarity
              </p>
              <div className="text-3xl md:text-4xl font-bold mb-4">
                Ninety seven dollars or seventy seven for early bird
              </div>
              <div className="text-lg text-[#c1ff72] font-semibold mb-8">
                Black Friday Bonus: Ninety seven dollar credit toward any WRM offer in 2026
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-lg text-white/80 space-y-6 mb-8">
              <p>
                A fast and focused mini accelerator that gets your brand ready for January with clarity direction and momentum. If you have been waiting to show up as the CEO of your business consider this your invitation to stop waiting.
              </p>
            </div>

            <div className="text-center">
              <a
                href={jumpstartStripeLink}
                className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors"
              >
                Join the Jumpstart
              </a>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              This is your turning point
            </h2>
            <p className="text-xl md:text-2xl text-white/80">
              Every offer closes December 1st at midnight. Spots are limited and the bonuses never return.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 border-t border-white/10 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              What Leaders Are Saying
            </h2>
            
            <div className="space-y-8">
              {/* Testimonial 1: Abby Belin */}
              <div className="bg-black/50 border border-white/10 rounded-lg p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#c1ff72]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">Abby Belin</span>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  In today's world, every dollar we spend is a vote for the kind of future we want to build — and choosing who you work with matters. Working with Stephanie Rose is a choice I'd make again a hundred times over.
                </p>
                <p className="text-lg text-white/90 leading-relaxed mt-4">
                  Stephanie is more than a photographer — she's a visionary, a storyteller, and a deeply intentional creator. She doesn't just take photos; she captures truth, power, and the kind of raw beauty that often goes unseen. Her work uplifts real women — in all our complexity, diversity, and authenticity — and creates space for stories that need to be told.
                </p>
                <p className="text-lg text-white/90 leading-relaxed mt-4">
                  Working with Stephanie was one of the most empowering and transformative experiences I've ever had. She created a space rooted in comfort, trust, and authenticity. She adapted her skills and intuition to bring the vision to life in a way that felt effortless but deeply impactful. It wasn't about aesthetics — it was about meaning. And that's who Stephanie is — someone who uses her talent to create real, lasting change.
                </p>
                <p className="text-lg text-white/90 leading-relaxed mt-4">
                  If you're looking for someone who won't just photograph you, but see you — and do it with care, depth, and purpose — you won't find anyone better.
                </p>
                <p className="text-lg text-white/90 leading-relaxed mt-4 font-semibold">
                  Choose wisely. Choose Stephanie Rose.
                </p>
              </div>

              {/* Testimonial 2: Leigh */}
              <div className="bg-black/50 border border-white/10 rounded-lg p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#c1ff72]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">Leigh</span>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  Stephanie delivers incredible value. Her knowledge, energy and integrity are unmatched. She walks her talk and I have learned so much from her!
                </p>
              </div>

              {/* Testimonial 3: GiGi */}
              <div className="bg-black/50 border border-white/10 rounded-lg p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#c1ff72]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/60 text-sm">GiGi</span>
                </div>
                <p className="text-lg text-white/90 leading-relaxed">
                  Stephanie is the real deal. She's grounded, raw, honest + brings an undeniable fire to every space she leads. I've had the honor of working with her inside her Icon Society + the value she delivers is consistently next-level. She's a woman of deep integrity who shows up fully for her craft. Her work truly speaks for itself + I can't wait to book a branding session with her in the future. If you're serious about building an iconic brand, you'd be missing out not to have her in your corner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              You spent the year building everyone else's vision. This weekend you build your own.
            </h2>
            <a
              href="#offers"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors"
            >
              Claim Your Offer Before Midnight
            </a>
          </div>
        </section>
      </div>

      <LegacyApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
