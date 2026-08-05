"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PACKAGE_SUMMARIES } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PackagesStructuredData from "@/components/PackagesStructuredData";

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-loose bg-gray-50">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero text-black mb-8">
              Choose Your Package
            </h1>
            <p className="text-editorial max-w-3xl mx-auto">
              Professional content creation tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {PACKAGE_SUMMARIES.map((pkg, index) => (
              <PackageCard key={pkg.key} package={pkg} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* VIP Experiences */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant text-center">
          <h2 className="text-display text-black mb-6">VIP Experiences</h2>
          <p className="text-editorial text-gray-700 max-w-3xl mx-auto mb-10">
            High touch brand experiences designed for founders ready to make
            decisions, build momentum, and elevate how their business is perceived.
          </p>
          <Button asChild size="lg" className="group">
            <Link href="/vip">
              View VIP options
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Hot and Rich Mastermind */}
      <section className="section-padding bg-[#1C1917] text-[#FAF7F2]">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs tracking-[0.35em] uppercase text-[#C9B99A] mb-6">
              West Rose Media presents
            </p>
            <h2 className="text-display text-[#FAF7F2] mb-8">
              Hot and Rich Mastermind
            </h2>
            <p className="text-editorial text-[#FAF7F2]/90 max-w-3xl mx-auto">
              Four months to build an audience and revenue system sturdy enough that losing a
              platform becomes a setback instead of a funeral.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#C9B99A]/30">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#C9B99A]">What&apos;s included:</h3>
                  <ul className="space-y-3 text-[#FAF7F2]/90">
                    <li>• Biweekly live calls with Stephanie</li>
                    <li>• Text support inside the group, three days a week</li>
                    <li>• Direct access to the exact strategy running right now</li>
                    <li>• Four months of live coaching and implementation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#C9B99A]">Investment:</h3>
                  <ul className="space-y-3 text-[#FAF7F2]/90">
                    <li>• One payment of $3,050 CAD</li>
                    <li>• Four payments of $770 CAD</li>
                    <li>• Six payments of $510 CAD</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FAF7F2] text-[#1C1917] hover:bg-[#E8E4DD] transition-colors"
                >
                  <Link href="/hot-and-rich">
                    Join Hot and Rich Mastermind
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
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

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-black mb-8">
              Ready to Become Unforgettable?
            </h2>
            <p className="text-editorial max-w-2xl mx-auto mb-12">
              Your brand deserves content that matches your ambition. Let's create something that turns heads and drives results.
            </p>
            <Button asChild size="lg" variant="accent" className="group">
              <Link href="/quiz">
                Find Your Perfect Package
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Structured Data for SEO */}
      <PackagesStructuredData />
    </div>
  );
}

