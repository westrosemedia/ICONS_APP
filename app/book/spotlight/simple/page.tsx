"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Clock, MapPin, DollarSign } from "lucide-react";
import Link from "next/link";

export default function SpotlightSimplePage() {
  const handleBookNow = () => {
    // Direct link to your Stripe checkout
    window.open('https://buy.stripe.com/eVq5kC9oY5uZ1jdfZz87K0N', '_blank');
  };

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
              Spotlight
            </h1>
            <p className="text-editorial max-w-3xl mx-auto mb-12">
              A focused 90-minute shoot that delivers scroll-stopping content fast. Perfect for immediate impact and professional presence.
            </p>
            <div className="text-elegant text-3xl text-accent mb-8">
              $1,200 CAD
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Camera,
                title: "90-Minute Shoot",
                description: "Focused session delivering maximum impact in minimal time"
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                description: "Photos in 1 week, videos in 10 days"
              },
              {
                icon: MapPin,
                title: "Multiple Cities",
                description: "Available in Calgary, Vancouver, and Toronto"
              },
              {
                icon: DollarSign,
                title: "Great Value",
                description: "$1,200 CAD for professional content package"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-elegant text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display text-black mb-8">What's Included</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-elegant text-2xl text-black mb-6">Content Package</h3>
              <ul className="space-y-4">
                {[
                  "20 professional photos",
                  "3 vertical videos",
                  "Professional styling consultation",
                  "Location scouting and setup",
                  "Multiple outfit changes",
                  "High-resolution edited files"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-elegant text-2xl text-black mb-6">Delivery & Support</h3>
              <ul className="space-y-4">
                {[
                  "Photos delivered in 1 week",
                  "Videos delivered in 10 days",
                  "Usage rights included",
                  "Social media ready formats",
                  "Additional images available",
                  "Professional editing and retouching"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-display text-black mb-8">Investment</h2>
            
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm mb-8">
              <div className="text-elegant text-4xl text-black mb-4">
                $1,200 CAD
              </div>
              <p className="text-gray-600 mb-6">One-time investment</p>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">90-minute shoot</span>
                  <span className="font-medium">$1,200 CAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">20 photos + 3 videos</span>
                  <span className="font-medium">Included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Additional images</span>
                  <span className="font-medium">$35 CAD each</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>GST included</span>
                    <span>✓</span>
                  </div>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleBookNow}
              size="lg" 
              className="w-full sm:w-auto group"
            >
              Book Your Spotlight Session
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              Secure payment processed by Stripe
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-black mb-8">
              Ready for Immediate Impact?
            </h2>
            <p className="text-editorial max-w-2xl mx-auto mb-12">
              Spotlight is perfect for entrepreneurs who need professional content fast. Get scroll-stopping photos and videos in just 90 minutes, with delivery in 1-10 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleBookNow} size="lg" variant="accent" className="group">
                Book Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/packages">View All Packages</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
