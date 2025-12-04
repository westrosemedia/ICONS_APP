"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const jumpstartStripeLink = "https://buy.stripe.com/9B63cuat26z36Dx7t387K0V";

export default function IconJumpstartPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5983.jpg?alt=media"
            alt="ICON Jumpstart"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/80" />
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-12 sm:py-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            The ICON Jumpstart
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-white/90 max-w-3xl mx-auto">
            Five days to transform your brand and start January as an icon
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/80 max-w-2xl mx-auto">
            A fast and focused intensive that gets your brand ready for January with clarity, direction, and momentum
          </p>

          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/50 line-through">$350</span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#c1ff72]">$176 USD</span>
            </div>
            <p className="text-sm sm:text-base text-white/70">
              One-time payment • Lifetime access
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
            <a
              href={jumpstartStripeLink}
              className="inline-block bg-[#c1ff72] text-black px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-bold hover:bg-[#c1ff72]/90 transition-colors w-full sm:w-auto shadow-lg shadow-[#c1ff72]/20"
            >
              Join the Jumpstart Now
            </a>
            <a
              href="#details"
              className="inline-block border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg text-lg sm:text-xl font-medium hover:border-white hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section id="details" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-white/10 overflow-hidden">
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
          {/* Hero Image */}
          <div className="mb-12 sm:mb-16">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5983.jpg?alt=media"
                alt="ICON Jumpstart Intensive"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              This is your invitation to stop waiting
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8 sm:mb-12">
              If you have been waiting to show up as the CEO of your business, consider this your invitation to stop waiting. This is the thing that will help you start January as an icon and sell out your January offer.
            </p>
          </div>

          {/* What's Included */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
              What You'll Get
            </h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8">
                <div className="text-3xl sm:text-4xl mb-4">🎯</div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Clarity & Direction</h4>
                <p className="text-base sm:text-lg text-white/80">
                  Get crystal clear on your brand message, your ideal client, and your unique positioning. No more second-guessing or spinning your wheels.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8">
                <div className="text-3xl sm:text-4xl mb-4">🚀</div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Momentum & Strategy</h4>
                <p className="text-base sm:text-lg text-white/80">
                  Build a strategic roadmap that actually works. Learn the systems and frameworks that help you show up consistently without burning out.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8">
                <div className="text-3xl sm:text-4xl mb-4">💎</div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Icon-Level Content</h4>
                <p className="text-base sm:text-lg text-white/80">
                  Create content that positions you as the expert you already are. Stop hiding behind inconsistency and start showing up with authority.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8">
                <div className="text-3xl sm:text-4xl mb-4">🔥</div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Sell Out Your Offer</h4>
                <p className="text-base sm:text-lg text-white/80">
                  Learn how to create content that sells before you ever speak. Turn your visibility into profit and your brand into a magnet for high-paying clients.
                </p>
              </div>
            </div>
          </div>

          {/* Who This Is For */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
              This Is For You If
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl flex-shrink-0">✓</div>
                <p className="text-base sm:text-lg text-white/90">
                  You're ready to show up as the CEO of your business but don't know where to start
                </p>
              </div>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl flex-shrink-0">✓</div>
                <p className="text-base sm:text-lg text-white/90">
                  You've been waiting for the "right time" to get serious about your brand
                </p>
              </div>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl flex-shrink-0">✓</div>
                <p className="text-base sm:text-lg text-white/90">
                  You want to start January strong and sell out your first offer of the year
                </p>
              </div>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl flex-shrink-0">✓</div>
                <p className="text-base sm:text-lg text-white/90">
                  You're done with inconsistency and ready to build a brand that matches your ambition
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#c1ff72]/30 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Ready to Start January as an Icon?
            </h3>
            <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8">
              Join the ICON Jumpstart today and get your brand ready for January. This is your moment to stop waiting and start showing up as the leader you already are.
            </p>
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-center gap-4 sm:gap-6 mb-2">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white/50 line-through">$350</span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#c1ff72]">$176 USD</span>
              </div>
              <p className="text-sm sm:text-base text-white/70">
                One-time payment • Lifetime access • Start immediately
              </p>
            </div>
            <a
              href={jumpstartStripeLink}
              className="inline-block bg-[#c1ff72] text-black px-10 sm:px-12 py-4 sm:py-5 rounded-lg text-xl sm:text-2xl font-bold hover:bg-[#c1ff72]/90 transition-colors w-full sm:w-auto shadow-lg shadow-[#c1ff72]/30"
            >
              Join the Jumpstart Now
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Stop waiting. Start showing up.
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 sm:mb-12">
            The ICON Jumpstart is your fast track to a brand that matches your ambition. Join today and start January as an icon.
          </p>
          <a
            href={jumpstartStripeLink}
            className="inline-block bg-[#c1ff72] text-black px-10 sm:px-12 py-4 sm:py-5 rounded-lg text-xl sm:text-2xl font-bold hover:bg-[#c1ff72]/90 transition-colors w-full sm:w-auto shadow-lg shadow-[#c1ff72]/30"
          >
            Join the Jumpstart Now
          </a>
        </div>
      </section>
    </div>
  );
}

