"use client";
import React from "react";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

export default function TermsOfUse() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="font-heading text-2xl font-bold">ICONS</span>
            <span className="text-white/60 font-body">Terms of Use</span>
          </div>
          <Button color="white" onClick={() => router.back()} className="text-sm">
            ← Back
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
            Terms of Use
          </h1>
          <p className="text-xl font-body text-white/80 max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg font-body text-white/80 mb-8">
              Welcome to ICONS by West Rose Media. These Terms of Use govern your use of our platform 
              and services. By accessing or using our services, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-white/80 font-body mb-8">
              By using ICONS, you acknowledge that you have read, understood, and agree to be bound by 
              these Terms of Use. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">Services Description</h2>
            <p className="text-white/80 font-body mb-6">
              ICONS provides:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Personal branding and content creation services</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Digital platform for content management</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Community access and networking opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Educational resources and tools</span>
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">User Accounts</h2>
            <p className="text-white/80 font-body mb-6">
              When you create an account, you agree to:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Provide accurate and complete information</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Maintain the security of your account credentials</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Accept responsibility for all activities under your account</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Notify us immediately of any unauthorized use</span>
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">Payment Terms</h2>
            <p className="text-white/80 font-body mb-8">
              All payments are processed securely through our payment partners. Prices are subject to change 
              with notice. Refunds are handled according to our refund policy, which varies by service package.
            </p>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">Intellectual Property</h2>
            <p className="text-white/80 font-body mb-8">
              All content, features, and functionality of ICONS are owned by West Rose Media and are protected 
              by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, 
              or create derivative works without our express written consent.
            </p>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">User Conduct</h2>
            <p className="text-white/80 font-body mb-6">
              You agree not to:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Use our services for any unlawful purpose</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Harass, abuse, or harm other users</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Attempt to gain unauthorized access to our systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Share your account credentials with others</span>
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-white/80 font-body mb-8">
              To the maximum extent permitted by law, West Rose Media shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">Termination</h2>
            <p className="text-white/80 font-body mb-8">
              We may terminate or suspend your account at any time for violations of these terms. You may 
              cancel your account at any time through your account settings.
            </p>

            <div className="bg-white/10 border border-white/20 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-heading font-bold text-white mb-4">Complete Terms of Use</h3>
              <p className="text-white/80 font-body mb-6">
                For our complete terms of use, including detailed provisions about dispute resolution, 
                governing law, and additional legal requirements, please visit our main website.
              </p>
              <Button 
                color="accent" 
                onClick={() => window.open('https://westrosemedia.com/terms', '_blank')}
                className="w-full md:w-auto"
              >
                View Complete Terms
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/60 font-body text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-white/60 font-body text-sm">
                For questions about these terms, contact us at legal@westrosemedia.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 