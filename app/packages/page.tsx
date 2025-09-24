"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PACKAGE_SUMMARIES } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
              Professional content creation tailored to your needs. All packages include GST.
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
            minHeight: '40vh',
            maxHeight: '70vh',
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 drop-shadow-lg">See the Work</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl drop-shadow-lg">Behind the scenes of what we create</p>
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
    </div>
  );
}

