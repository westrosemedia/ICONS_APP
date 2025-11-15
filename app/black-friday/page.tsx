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
    <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
      <div className="min-h-full flex items-start justify-center p-4 py-8 md:py-12">
        <div className="max-w-2xl w-full bg-black border border-white/10 rounded-lg p-6 md:p-8 lg:p-12 relative my-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl font-light leading-none w-8 h-8 flex items-center justify-center"
            aria-label="Close"
          >
            ×
          </button>

          {isSuccess ? (
            <div className="text-center pt-4">
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 text-center pr-8">
                Apply for The ICON Legacy Experience
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
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
                  Are you prepared to invest $4700/month or $55,000 PIF if accepted?
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

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium hover:border-white/60 hover:bg-white/10 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BlackFridayPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // TODO: Add Stripe checkout link for Jumpstart when provided
  const jumpstartStripeLink = "#"; // Placeholder - user will provide

  // Calculate dynamic Jumpstart price based on date ranges
  const calculateJumpstartPrice = () => {
    const now = new Date();
    const mstOffset = -7 * 60; // MST is UTC-7
    const mstNow = new Date(now.getTime() + (now.getTimezoneOffset() + mstOffset) * 60000);
    
    // Create date ranges (all times in MST)
    const nov15 = new Date(mstNow.getFullYear(), 10, 15, 0, 0, 0); // Nov 15, 2024
    const nov23 = new Date(mstNow.getFullYear(), 10, 23, 0, 0, 0); // Nov 23, 2024
    const nov30 = new Date(mstNow.getFullYear(), 10, 30, 0, 0, 0); // Nov 30, 2024
    const dec8 = new Date(mstNow.getFullYear(), 11, 8, 23, 59, 59); // Dec 8, 2024
    
    let currentPrice = 297; // Default to highest price
    let priceRange = "";
    let nextPrice = null;
    let nextDate = null;
    
    if (mstNow >= nov15 && mstNow < nov23) {
      // Nov 15-22: $97
      currentPrice = 97;
      priceRange = "Nov 15-22";
      nextPrice = 197;
      nextDate = nov23;
    } else if (mstNow >= nov23 && mstNow < nov30) {
      // Nov 23-29: $197
      currentPrice = 197;
      priceRange = "Nov 23-29";
      nextPrice = 297;
      nextDate = nov30;
    } else if (mstNow >= nov30 && mstNow <= dec8) {
      // Nov 30-Dec 8: $297
      currentPrice = 297;
      priceRange = "Nov 30-Dec 8";
      nextPrice = null; // No next price after Dec 8
      nextDate = null;
    } else if (mstNow < nov15) {
      // Before Nov 15, show Nov 15-22 price
      currentPrice = 97;
      priceRange = "Nov 15-22";
      nextPrice = 197;
      nextDate = nov15;
    } else {
      // After Dec 8, keep at $297
      currentPrice = 297;
      priceRange = "Final Price";
      nextPrice = null;
      nextDate = null;
    }
    
    return {
      currentPrice,
      priceRange,
      nextPrice,
      nextDate,
      isAfterDec8: mstNow > dec8
    };
  };

  const jumpstartPricing = calculateJumpstartPrice();

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
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/70" />
            {/* Subtle pattern overlay */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(193, 255, 114, 0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            />
            {/* Accent gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c1ff72]/5 to-transparent" />
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

        {/* Offer One: The ICON Jumpstart - LOWEST PRICE */}
        <section id="offers" className="relative py-20 px-4 border-t border-white/10 overflow-hidden">
          {/* Background pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(193, 255, 114, 0.1) 50%, transparent 70%),
                                linear-gradient(-45deg, transparent 30%, rgba(193, 255, 114, 0.1) 50%, transparent 70%)`,
              backgroundSize: '60px 60px'
            }}
          />
          {/* Gradient accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1ff72]/50 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The ICON Jumpstart
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-2">
                Five day intensive running December 8-12
              </p>
              <div className="text-lg text-white/70 mb-4">
                Start January as an icon and sell out your January offer
              </div>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl md:text-3xl font-bold text-white/50 line-through">$350</span>
                <span className="text-3xl md:text-4xl font-bold">${jumpstartPricing.currentPrice.toLocaleString()}</span>
              </div>
              {jumpstartPricing.nextPrice && jumpstartPricing.nextDate ? (
                <div className="bg-[#c1ff72]/10 border-2 border-[#c1ff72]/30 rounded-lg p-4 md:p-6 mb-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-lg md:text-xl font-bold text-[#c1ff72] mb-2">
                      ⚠️ Price Increases Soon!
                    </div>
                    <div className="text-base md:text-lg text-white/90 mb-2">
                      Current price: <span className="font-bold text-white text-xl">${jumpstartPricing.currentPrice}</span>
                    </div>
                    <div className="text-base md:text-lg text-white/80">
                      Price increases to <span className="font-bold text-[#c1ff72] text-xl">${jumpstartPricing.nextPrice}</span> on <span className="font-semibold text-white">{jumpstartPricing.nextDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="text-sm md:text-base text-[#c1ff72] font-semibold mt-3">
                      Join now to lock in this price before it goes up!
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-lg text-white/70 mb-4">
                  Current price: <span className="font-semibold text-white">${jumpstartPricing.currentPrice}</span> ({jumpstartPricing.priceRange})
                </div>
              )}
            </div>

            <div className="max-w-4xl mx-auto text-lg text-white/80 space-y-6 mb-8">
              <p>
                A fast and focused five day intensive that gets your brand ready for January with clarity direction and momentum. This is the thing that will help you start January as an icon and sell out your January offer. If you have been waiting to show up as the CEO of your business consider this your invitation to stop waiting.
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

        {/* Offer Two: Powerful Personal Brand Early Enrollment */}
        <section className="relative py-20 px-4 border-t border-white/10 bg-white/5 overflow-hidden">
          {/* Diagonal pattern background */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(193, 255, 114, 0.1) 10px,
                rgba(193, 255, 114, 0.1) 20px
              )`
            }}
          />
          {/* Radial gradient accent */}
          <div 
            className="absolute top-1/2 left-0 w-1/2 h-full opacity-50"
            style={{
              background: 'radial-gradient(circle at left center, rgba(193, 255, 114, 0.1) 0%, transparent 70%)'
            }}
          />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Powerful Personal Brand Early Enrollment
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-2">
                Sixteen weeks to make your brand look sound and sell like a leader
              </p>
              <div className="text-lg text-white/70 mb-6">
                Program begins January 2026
              </div>
              <div className="text-lg text-[#c1ff72] font-semibold mb-8">
                Black Friday Sale: This is a limited-time offer. Prices go up soon and will never be this low again.
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-lg text-white/80 space-y-6 mb-8">
              <p>
                The signature curriculum that gives you complete clarity and control over your brand. You refine your message your aesthetic and your strategy so your online presence finally matches your results.
              </p>
            </div>

            {/* Pricing Section */}
            <div className="max-w-3xl mx-auto mb-8">
              <div className="bg-black/50 border border-white/10 rounded-lg p-6 md:p-8 mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-white/60 mb-4 text-center">Regular Pricing</h3>
                <div className="space-y-3 text-center">
                  <div className="text-lg text-white/70">
                    The 16 Week Intensive: <span className="text-white font-semibold">$3,500 USD</span>
                  </div>
                  <div className="text-lg text-white/70">
                    The One Year Experience: <span className="text-white font-semibold">$5,000 USD</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/70 border-2 border-[#c1ff72]/30 rounded-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-[#c1ff72] mb-4 text-center">Black Friday Pricing (Ending Soon)</h3>
                <div className="space-y-4 text-center">
                  <div>
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <span className="text-lg text-white/50 line-through">$3,500</span>
                      <span className="text-2xl md:text-3xl font-bold text-white">$2,500 USD</span>
                    </div>
                    <div className="text-sm text-white/70">The 16 Week Intensive</div>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <span className="text-lg text-white/50 line-through">$5,000</span>
                      <span className="text-2xl md:text-3xl font-bold text-white">$3,500 USD</span>
                    </div>
                    <div className="text-sm text-white/70">The One Year Experience</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <Link
                href="https://westrosemedia.com/ppb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-medium hover:border-white hover:bg-white/10 transition-colors mb-6"
              >
                Learn More
              </Link>
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

        {/* Offer Three: The Movement Maker's Mastermind */}
        <section className="relative py-20 px-4 border-t border-white/10 overflow-hidden">
          {/* Dot pattern background */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(193, 255, 114, 0.5) 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}
          />
          {/* Side accent gradients */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#c1ff72]/5 via-transparent to-transparent" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c1ff72]/5 via-transparent to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                The Movement Maker's Mastermind
              </h2>
              <p className="text-xl md:text-2xl text-white/80 mb-2">
                High level hybrid mastermind for visibility influence and wealth
              </p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl md:text-3xl font-bold text-white/50 line-through">$12,000</span>
                <span className="text-3xl md:text-4xl font-bold">$10,000</span>
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

        {/* Offer Four: The ICON Legacy Experience - HIGHEST PRICE */}
        <section className="relative py-20 px-4 border-t border-white/10 bg-white/5 overflow-hidden">
          {/* Mesh gradient background */}
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              background: `
                radial-gradient(at 0% 0%, rgba(193, 255, 114, 0.2) 0px, transparent 50%),
                radial-gradient(at 100% 100%, rgba(193, 255, 114, 0.2) 0px, transparent 50%),
                radial-gradient(at 50% 50%, rgba(193, 255, 114, 0.1) 0px, transparent 50%)
              `
            }}
          />
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c1ff72]/30 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto">
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
              <div className="mb-4">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-white/50 line-through">$60,000</span>
                  <span className="text-3xl md:text-4xl font-bold">$55,000</span>
                </div>
                <div className="text-xl md:text-2xl text-white/80">
                  or $4,800/month
                </div>
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

        {/* Urgency Section */}
        <section className="relative py-20 px-4 border-t border-white/10 overflow-hidden">
          {/* Subtle wave pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(193, 255, 114, 0.1) 2px,
                rgba(193, 255, 114, 0.1) 4px
              )`
            }}
          />
          {/* Center glow */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(193, 255, 114, 0.3) 0%, transparent 70%)'
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              This is your turning point
            </h2>
            <p className="text-xl md:text-2xl text-white/80">
              Every offer closes December 1st at midnight. Spots are limited and the bonuses never return.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-20 px-4 border-t border-white/10 bg-white/5 overflow-hidden">
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(193, 255, 114, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(193, 255, 114, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#c1ff72]/5 to-transparent" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#c1ff72]/5 to-transparent" />
          <div className="relative z-10 max-w-4xl mx-auto">
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
