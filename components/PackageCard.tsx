"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { PackageSummary } from "@/types/package";

interface PackageCardProps {
  package: PackageSummary;
  index: number;
}

export default function PackageCard({ package: pkg, index }: PackageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-xl overflow-hidden">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={pkg.imageUrl}
            alt={pkg.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            style={pkg.key === "ppb" ? { objectPosition: "center 25%" } : undefined}
          />
        </div>
        
        {/* Content */}
        <div className="p-10">
          <div className="mb-8">
            <h3 className="text-elegant text-2xl mb-4">{pkg.title}</h3>
            <p className="text-editorial mb-6">{pkg.blurb}</p>
            {pkg.priceLabel && pkg.priceLabel.trim() !== "" && (
              <div className="text-elegant text-xl font-semibold text-accent mb-8">
                {pkg.priceLabel}
              </div>
            )}
          </div>
          
          {/* Highlights */}
          <div className="space-y-4 mb-10">
            {pkg.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{highlight.label}</span>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <Button asChild className="w-full group/btn">
            <Link href={pkg.ctaHref}>
              {pkg.key === "spotlight" && "Book Spotlight"}
              {pkg.key === "immersion" && "Plan Immersion"}
              {pkg.key === "icon" && "Become an ICON"}
              {pkg.key === "ppb" && "Learn More"}
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}