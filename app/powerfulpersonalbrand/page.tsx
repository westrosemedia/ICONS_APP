"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8772.jpg?alt=media')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 flex flex-col items-center text-center px-4 sm:px-8 py-24 max-w-5xl mx-auto"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl">
            <h1 className="text-hero text-black mb-8">
              Powerful Personal Brand
            </h1>
            <p className="text-large text-black/90 max-w-3xl leading-relaxed mb-8">
              8 Week Live Course — The signature program of West Rose Media, completely revamped and leveled up for maximum transformation.
            </p>
            <a 
              className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors" 
              href="/checkout/ppb"
            >
              Enroll Now
            </a>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Opening Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-display text-black mb-8">The Power of an Unstoppable Brand</h2>
              <div className="space-y-6 text-editorial">
                <p>Imagine this. The market takes a nosedive. Your industry gets quiet. Everyone is scrambling. But your brand is so magnetic, so recognizable, that clients still find you. They trust you. They buy from you because you are unforgettable.</p>
                
                <p>Or picture this. Life shifts. You decide to take time off to be with family. You choose to homeschool, travel, or have a baby. A strong personal brand gives you that freedom. Your presence keeps working for you even when you step away.</p>
                
                <p>That is the power of a brand that is bigger than algorithms, bigger than launches, bigger than whatever life throws your way.</p>
              </div>
            </motion.div>

            {/* Program Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-black mb-6 text-center">The Signature Program</h3>
              <p className="text-editorial text-center mb-8">
                <strong>Powerful Personal Brand</strong> is the signature program of West Rose Media. It has been completely revamped, re recorded, and leveled up. This is the most powerful version yet. It is richer in strategy, deeper in transformation, and designed to make your brand unstoppable.
              </p>
              
              <h4 className="text-2xl font-bold text-black mb-6 text-center">Over 8 weeks we will build a brand that:</h4>
              <ul className="space-y-4 text-editorial max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Reflects your authority now.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Carries you through every pivot, every reinvention, every life change.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span>Keeps you visible, unforgettable, and paid no matter what season you are in.</span>
                </li>
              </ul>
            </motion.div>

            {/* Pricing & Dates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h3 className="text-3xl font-bold text-black">Ready to Transform Your Brand?</h3>
              
              <div className="bg-black text-white rounded-2xl p-8 max-w-2xl mx-auto">
                <div className="space-y-4">
                  <p className="text-lg">📅 First cohort begins <strong>October 27</strong></p>
                  <p className="text-lg">📅 Or save your seat for <strong>January 2026</strong></p>
                  
                  <div className="border-t border-white/20 pt-4 mt-6">
                    <p className="text-lg">✨ Use the presale price now: <strong>$2,000</strong></p>
                    <p className="text-lg">Regular price: <strong>$3,000</strong></p>
                    <p className="text-sm text-white/80 mt-2">There will not be another presale for January.</p>
                  </div>
                </div>
              </div>
              
              <a 
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors" 
                href="/checkout/ppb"
              >
                Enroll Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
