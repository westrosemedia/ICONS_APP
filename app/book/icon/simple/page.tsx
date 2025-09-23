"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown, Users, Calendar, DollarSign } from "lucide-react";
import Link from "next/link";

export default function IconSimplePage() {
  const handleBookNow = () => {
    // Direct link to your Stripe checkout
    window.open('https://buy.stripe.com/00w00i7gQ4qVe5ZcNn87K0L', '_blank');
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
            <div className="flex items-center justify-center mb-6">
              <Crown className="w-12 h-12 text-accent mr-4" />
              <h1 className="text-hero text-black">
                ICON Brand Partner
              </h1>
            </div>
            <p className="text-editorial max-w-3xl mx-auto mb-12">
              Our premium monthly partnership program for industry leaders ready to build an unforgettable brand legacy. This is where legends are made.
            </p>
            <div className="text-elegant text-3xl text-accent mb-8">
              From $5,000 CAD per month
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
                icon: Crown,
                title: "Premium Partnership",
                description: "Exclusive monthly collaboration with West Rose Media"
              },
              {
                icon: Users,
                title: "VIP Access",
                description: "Priority access to all services and exclusive events"
              },
              {
                icon: Calendar,
                title: "Ongoing Support",
                description: "Continuous brand development and content creation"
              },
              {
                icon: DollarSign,
                title: "Investment Level",
                description: "Starting at $5,000 CAD monthly for complete transformation"
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
            <h2 className="text-display text-black mb-8">Partnership Benefits</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-elegant text-2xl text-black mb-6">Monthly Services</h3>
              <ul className="space-y-4">
                {[
                  "Strategic brand consultation",
                  "Professional content creation",
                  "Social media management",
                  "Brand positioning strategy",
                  "Exclusive photo/video shoots",
                  "Priority booking and scheduling"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-elegant text-2xl text-black mb-6">Exclusive Access</h3>
              <ul className="space-y-4">
                {[
                  "ICON Society membership",
                  "Private networking events",
                  "Industry insider insights",
                  "Collaboration opportunities",
                  "Brand partnership deals",
                  "Legacy building support"
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
                $5,000+ CAD
              </div>
              <p className="text-gray-600 mb-6">Monthly partnership investment</p>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Base monthly partnership</span>
                  <span className="font-medium">$5,000 CAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Additional services</span>
                  <span className="font-medium">As needed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Travel & events</span>
                  <span className="font-medium">Included</span>
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
              Become an ICON Partner
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
              Ready to Build Your Legacy?
            </h2>
            <p className="text-editorial max-w-2xl mx-auto mb-12">
              The ICON Brand Partner program is for industry leaders who understand that building a legendary brand requires a legendary partnership. This is where your legacy begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleBookNow} size="lg" variant="accent" className="group">
                Start Your Partnership
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
