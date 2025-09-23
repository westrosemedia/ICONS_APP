"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

export default function WRMLiteSimplePage() {
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
            <h1 className="text-hero text-black mb-8">
              WRM Lite
            </h1>
            <p className="text-editorial max-w-3xl mx-auto mb-12">
              Your monthly partner in visibility. We take the weight of content off your shoulders and replace it with a system that keeps you top of mind and in demand.
            </p>
            <div className="text-elegant text-3xl text-accent mb-8">
              $2,400 CAD per month
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
                icon: Calendar,
                title: "Weekly Content",
                description: "Two posts each week created, written, and scheduled"
              },
              {
                icon: Users,
                title: "Strategy Calls",
                description: "Monthly strategy calls aligned to your revenue goals"
              },
              {
                icon: Clock,
                title: "Fresh Footage",
                description: "New footage captured every other month"
              },
              {
                icon: DollarSign,
                title: "Monthly Investment",
                description: "$2,400 CAD per month for complete content system"
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
              <h3 className="text-elegant text-2xl text-black mb-6">Content Creation</h3>
              <ul className="space-y-4">
                {[
                  "Two posts per week created and written",
                  "Content scheduled across your platforms",
                  "Custom captions and hashtags",
                  "Visual content creation",
                  "Brand voice consistency",
                  "Engagement optimization"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-elegant text-2xl text-black mb-6">Strategy & Support</h3>
              <ul className="space-y-4">
                {[
                  "Monthly strategy consultation calls",
                  "Content calendar planning",
                  "Performance tracking and analysis",
                  "Fresh footage every other month",
                  "Platform optimization",
                  "Ongoing brand development"
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
                $2,400 CAD
              </div>
              <p className="text-gray-600 mb-6">Monthly subscription</p>
              
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly content creation</span>
                  <span className="font-medium">$2,400 CAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Strategy calls</span>
                  <span className="font-medium">Included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fresh footage</span>
                  <span className="font-medium">Every 2 months</span>
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
              Start WRM Lite
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
              Ready to Stay Top of Mind?
            </h2>
            <p className="text-editorial max-w-2xl mx-auto mb-12">
              WRM Lite is perfect for busy entrepreneurs who want consistent, high-quality content without the time investment. Let us handle your content so you can focus on what you do best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleBookNow} size="lg" variant="accent" className="group">
                Start Your Content System
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
