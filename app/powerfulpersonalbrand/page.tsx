"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPPBCheckout } from "./book/ppb/actions";

type FormState = {
  fullName: string;
  businessName: string;
  instagram: string;
  pronouns: string;
  phone: string;
  email: string;
  mailingAddress: string;
  howDidYouHear: string;
  city: string;
  bigLaunch: string;
  incomeGoal: string;
};

export default function Page() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    fullName: "",
    businessName: "",
    instagram: "",
    pronouns: "",
    phone: "",
    email: "",
    mailingAddress: "",
    howDidYouHear: "",
    city: "",
    bigLaunch: "",
    incomeGoal: ""
  });

  const submit = async () => {
    // Validate required fields
    if (!form.fullName.trim()) {
      alert("Please enter your full name");
      return;
    }
    if (!form.email.trim() || !form.email.includes('@')) {
      alert("Please enter a valid email address");
      return;
    }
    if (!form.businessName.trim()) {
      alert("Please enter your business name");
      return;
    }

    setSubmitting(true);
    try {
      await createPPBCheckout(form);
    } catch (e) {
      console.error(e);
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

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
            <button 
              onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Enroll Now
            </button>
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
              
              <button 
                onClick={() => document.getElementById('intake-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block rounded-xl px-8 py-4 bg-black text-white no-underline text-lg font-semibold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Enroll Now
              </button>
            </motion.div>

            {/* Intake Form */}
            <motion.div
              id="intake-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-black mb-6 text-center">Ready to Transform Your Brand?</h3>
              <p className="text-editorial text-center mb-8">
                Fill out the form below to secure your spot in Powerful Personal Brand.
              </p>
              
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({...form, fullName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Business Name *</label>
                    <input
                      type="text"
                      value={form.businessName}
                      onChange={(e) => setForm({...form, businessName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Your business name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Instagram Handle</label>
                    <input
                      type="text"
                      value={form.instagram}
                      onChange={(e) => setForm({...form, instagram: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="@yourhandle"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Pronouns</label>
                    <input
                      type="text"
                      value={form.pronouns}
                      onChange={(e) => setForm({...form, pronouns: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="she/her, he/him, they/them"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">Email Address *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">Mailing Address</label>
                  <textarea
                    value={form.mailingAddress}
                    onChange={(e) => setForm({...form, mailingAddress: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    rows={3}
                    placeholder="Your mailing address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">How did you hear about West Rose Media?</label>
                  <input
                    type="text"
                    value={form.howDidYouHear}
                    onChange={(e) => setForm({...form, howDidYouHear: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Social media, referral, search, etc."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">What city are you in?</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({...form, city: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your city"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">What big launch or offer are you focused on right now?</label>
                  <textarea
                    value={form.bigLaunch}
                    onChange={(e) => setForm({...form, bigLaunch: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    rows={3}
                    placeholder="Tell us about your current focus"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-black mb-2">What is your income goal for the next 12 months?</label>
                  <input
                    type="text"
                    value={form.incomeGoal}
                    onChange={(e) => setForm({...form, incomeGoal: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your income goal"
                  />
                </div>
                
                <div className="text-center pt-6">
                  <button
                    onClick={submit}
                    disabled={submitting}
                    className="px-8 py-4 bg-black text-white rounded-xl text-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Processing..." : "Complete Enrollment - $2,000"}
                  </button>
                  <p className="text-sm text-gray-600 mt-4">
                    You'll be redirected to secure payment processing
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
