"use client";
import React from "react";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

export default function PrivacyPolicy() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="font-heading text-2xl font-bold">ICONS</span>
            <span className="text-white/60 font-body">Privacy Policy</span>
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
            Privacy Policy
          </h1>
          <p className="text-xl font-body text-white/80 max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we protect and handle your information.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg font-body text-white/80 mb-8">
              ICONS by West Rose Media is committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy outlines how we collect, use, and safeguard your data.
            </p>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">Information We Collect</h2>
            <p className="text-white/80 font-body mb-6">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Complete our quiz or intake forms</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Create an account or sign up for services</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Contact us for support or inquiries</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Subscribe to our newsletter or updates</span>
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">How We Use Your Information</h2>
            <p className="text-white/80 font-body mb-6">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Provide and improve our services</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Communicate with you about your account and services</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Send you marketing communications (with your consent)</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Ensure the security and integrity of our platform</span>
              </li>
            </ul>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">Data Security</h2>
            <p className="text-white/80 font-body mb-8">
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely 
              using industry-standard encryption and security practices.
            </p>

            <h2 className="text-2xl font-heading font-bold text-white mb-4">Your Rights</h2>
            <p className="text-white/80 font-body mb-6">
              You have the right to:
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Access and update your personal information</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Request deletion of your data</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Opt out of marketing communications</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 text-xl">•</span>
                <span className="text-white/80 font-body">Contact us with privacy concerns</span>
              </li>
            </ul>

            <div className="bg-white/10 border border-white/20 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-heading font-bold text-white mb-4">Full Privacy Policy</h3>
              <p className="text-white/80 font-body mb-6">
                For our complete privacy policy, including detailed information about data collection, 
                third-party services, and international data transfers, please visit our main website.
              </p>
              <Button 
                color="accent" 
                onClick={() => window.open('https://westrosemedia.com/privacy', '_blank')}
                className="w-full md:w-auto"
              >
                View Full Privacy Policy
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/60 font-body text-sm">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-white/60 font-body text-sm">
                For questions about this privacy policy, contact us at privacy@westrosemedia.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 