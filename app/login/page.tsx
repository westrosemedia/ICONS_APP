"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-hero text-black mb-8">Coming Soon</h1>
          <p className="text-editorial text-gray-600 mb-12">
            The ICONS portal is currently under construction. Check back soon for access to your exclusive content and resources.
          </p>
          
          <div className="space-y-4">
            <Button size="lg" className="w-full opacity-50 cursor-not-allowed" disabled>
              Coming Soon
            </Button>
            
            <div className="text-center">
              <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                ← Back to Home
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
