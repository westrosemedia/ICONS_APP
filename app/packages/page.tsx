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

