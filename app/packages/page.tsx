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

      {/* Mastermind Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display text-white mb-8">
              Ready for the Next Level?
            </h2>
            <p className="text-editorial text-white/90 max-w-3xl mx-auto mb-12">
              Join Canada's most exclusive 6-month Movement Makers Mastermind combining emotional mastery (Tapping) + magnetic marketing (Content). Luxury retreat in Kelowna BC included.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#c1ff72]">What's Included:</h3>
                  <ul className="space-y-3 text-white/90">
                    <li>• 6 months of weekly group coaching</li>
                    <li>• Luxury retreat in Kelowna BC</li>
                    <li>• Tapping therapy for emotional mastery</li>
                    <li>• Content strategy and creation</li>
                    <li>• 1:1 sessions with both coaches</li>
                    <li>• Exclusive community access</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-[#c1ff72]">Perfect For:</h3>
                  <ul className="space-y-3 text-white/90">
                    <li>• Entrepreneurs ready to scale</li>
                    <li>• Coaches and consultants</li>
                    <li>• Service-based professionals</li>
                    <li>• Anyone seeking emotional mastery</li>
                    <li>• Leaders wanting magnetic marketing</li>
                    <li>• Those ready for transformation</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Button asChild size="lg" className="bg-[#c1ff72] text-black hover:bg-[#a8e65a] transition-colors">
                  <Link href="/mastermind">
                    Join the Movement Makers Mastermind
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

