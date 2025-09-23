"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock, Mic, Play, Download, Trash2, Plus, Star, Zap, Crown, Sparkles } from "lucide-react";
import Link from "next/link";

export default function VaultPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-tight bg-gray-50 border-b border-gray-200">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Crown className="w-8 h-8 text-black" />
              <h1 className="text-hero text-black">Story Vault</h1>
              <Lock className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-editorial max-w-3xl mx-auto">
              The exclusive content creation suite for ICON Brand Partners. Your private space for voice notes, content strategy, and brand storytelling tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locked Content Teaser */}
      <section className="section-padding">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-dashed border-gray-300 rounded-2xl p-12 mb-12">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-gray-500" />
              </div>
              <h2 className="text-display text-black mb-6">ICON Brand Partners Only</h2>
              <p className="text-editorial text-gray-600 mb-8">
                This premium content creation suite is exclusively available to ICON Brand Partners. 
                Unlock advanced tools, private coaching resources, and exclusive content templates.
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/book/icon">
                  Become an ICON Brand Partner
                  <Crown className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Teasers */}
      <section className="section-padding bg-gray-50">
        <div className="container-elegant">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-display text-black mb-6">What's Inside the Vault</h2>
            <p className="text-editorial max-w-2xl mx-auto text-gray-600">
              Exclusive tools and resources designed to amplify your brand's voice and accelerate your content strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Voice Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-lg p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-elegant text-xl mb-4">Voice Notes & Transcription</h3>
              <p className="text-gray-600 mb-6">
                Drop in your thoughts and stories. The West Rose Media team transforms them into content that carries your brand, your voice, and your vision.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Never lose a big idea again. Capture inspiration the moment it strikes.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Show up consistently with content created straight from your own stories.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Build a brand presence that sounds like you, even when you are not the one writing.</span>
                </div>
              </div>
            </motion.div>

            {/* Content Strategy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-lg p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-elegant text-xl mb-4">Content Strategy Lab</h3>
              <p className="text-gray-600 mb-6">
                Access exclusive content frameworks, launch templates, and strategic planning tools used by top-tier entrepreneurs.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>Launch frameworks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>Content calendars</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>Brand positioning tools</span>
                </div>
              </div>
            </motion.div>

            {/* Private Coaching */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-gray-200 rounded-lg p-8 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Crown className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-elegant text-xl mb-4">Private Coaching Vault</h3>
              <p className="text-gray-600 mb-6">
                Exclusive access to Stephanie's private coaching sessions, brand audits, and personalized feedback on your content.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  <span>Private coaching calls</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  <span>Brand audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  <span>Content reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-display text-black mb-8">
              Ready to Unlock Your Content Potential?
            </h2>
            <p className="text-editorial max-w-2xl mx-auto mb-12 text-gray-600">
              Join the ICON Brand Partners and gain access to exclusive tools, private coaching, and the content creation suite that's transforming how entrepreneurs build their brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/book/icon">
                  Become an ICON Brand Partner
                  <Crown className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </Link>
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

