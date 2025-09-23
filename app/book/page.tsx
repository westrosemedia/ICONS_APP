"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function BookingPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading the Sprout Studio embed
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-tight bg-gray-50 border-b border-gray-200">
        <div className="container-elegant">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/packages">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Packages
                </Link>
              </Button>
              <div>
                <h1 className="text-display text-black">Book Your Session</h1>
                <p className="text-gray-600 mt-2">Choose your date and time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="section-tight bg-white">
        <div className="container-elegant">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-elegant text-lg mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">Book sessions that fit your schedule</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-elegant text-lg mb-2">Multiple Locations</h3>
              <p className="text-gray-600 text-sm">Calgary, Vancouver, Toronto available</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-elegant text-lg mb-2">Quick Turnaround</h3>
              <p className="text-gray-600 text-sm">Photos in 1 week, videos in 10 days</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sprout Studio Embed */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-elegant text-2xl mb-2">Select Your Package & Date</h2>
                <p className="text-gray-600">Choose from our available packages and book your session</p>
              </div>
              
              <div className="p-6">
                {!isLoaded ? (
                  <div className="flex items-center justify-center py-20">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading booking calendar...</p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <h3 className="text-elegant text-xl mb-4">Sprout Studio Integration</h3>
                    <p className="text-gray-600 mb-6">
                      This is where the Sprout Studio booking widget would be embedded.
                      The actual implementation would include the Sprout Studio iframe or API integration.
                    </p>
                    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12">
                      <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Sprout Studio Calendar Widget</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Available packages: Spotlight, WRM Lite, Immersion, ICON
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alternative Booking Options */}
      <section className="section-padding bg-white">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-display text-black mb-8">
              Need Help Choosing?
            </h2>
            <p className="text-editorial max-w-2xl mx-auto mb-12">
              Not sure which package is right for you? Take our quiz to find your perfect match.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="accent">
                <Link href="/quiz">Take the Quiz</Link>
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
