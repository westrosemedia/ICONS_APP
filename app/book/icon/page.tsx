"use client";

import { useState } from "react";
import { iconCopy } from "@/content/icon";
import { submitIconApplication } from "./actions";

type FormState = {
  fullName: string;
  email: string;
  businessUrl: string;
  currentRevenue: string;
  goalRevenue: string;
  bottleneck: string;
  teamOrSolo: string;
  whyNow: string;
  notes?: string;
};

export default function IconPage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    businessUrl: "",
    currentRevenue: "",
    goalRevenue: "",
    bottleneck: "",
    teamOrSolo: "",
    whyNow: "",
    notes: ""
  });

  const submit = async () => {
    console.log("Form submission started with data:", form);
    
    // Validate required fields
    if (!form.fullName || !form.email || !form.businessUrl || !form.currentRevenue || !form.goalRevenue || !form.bottleneck || !form.teamOrSolo || !form.whyNow) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    console.log("Form validation passed, calling submitIconApplication...");
    
    try {
      const res = await submitIconApplication({ intake: form });
      console.log("Response from submitIconApplication:", res);
      
      if (res?.ok) {
        console.log("Form submitted successfully, setting submitted to true");
        setSubmitted(true);
      } else {
        const errorMessage = res?.error || "Failed to submit application";
        console.error("Form submission failed:", errorMessage);
        alert(`Error: ${errorMessage}`);
      }
    } catch (e) {
      console.error("Form submission error:", e);
      alert("Something went wrong. Please try again.");
    } finally {
      console.log("Form submission completed, setting submitting to false");
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8">{iconCopy.successTitle}</h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">{iconCopy.successBody}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat parallax-bg"
          style={{ 
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0142.jpg?alt=media&token=4152e9e3-dbe3-4632-b2dc-5fc54d0ee00f')",
            backgroundPosition: "center 25%",
            transform: "scale(1.05)"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">{iconCopy.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-white/90">{iconCopy.heroSubtitle}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-16 space-y-8 text-lg md:text-xl leading-relaxed text-gray-600">
          <p>{iconCopy.intro}</p>
          <p>{iconCopy.bigPromise}</p>
        </section>

        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-10 shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-8 text-black">{iconCopy.bulletsTitle}</h2>
            <ul className="space-y-6">
              {iconCopy.bullets.map(item => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-gray-600">{iconCopy.beliefShift}</p>

            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
              <p className="font-heading font-bold text-xl text-black">{iconCopy.priceLine}</p>
              <p className="text-gray-600 mt-2">{iconCopy.scarcity}</p>
            </div>

            {/* The Vault Section */}
            <div className="mt-8 p-8 bg-black text-white rounded-xl">
              <h3 className="text-2xl font-heading font-bold mb-4">The Vault: Your Private Content Creation Suite</h3>
              <p className="text-white/90 mb-6">
                Every ICON Brand Partner unlocks The Vault, a private space built to turn raw ideas into powerful content. There is nothing else like it in the industry.
              </p>
              <p className="text-white/90 mb-6">
                Here is how it works. You drop voice notes, thoughts, and sparks of inspiration into The Vault. The West Rose Media team takes it from there, transforming your words into polished, on-brand content that keeps your business visible and magnetic.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-heading font-semibold mb-4">Inside The Vault you get:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold">Voice Notes & Transcription.</span> Capture your stories in real time and let the team shape them into content that sounds exactly like you.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold">Content Strategy Lab.</span> Proven frameworks, launch calendars, and positioning tools to keep your brand sharp and scalable.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="font-semibold">Private Coaching Vault.</span> Access to coaching, audits, and direct feedback to refine your message and expand your reach.
                    </div>
                  </li>
                </ul>
              </div>
              
              <p className="text-white/90 mb-6">
                The Vault is not available anywhere else. It is the premium creative suite that ensures your ideas never get lost and your brand never goes quiet.
              </p>
              <p className="text-white/90 mb-6">
                When you become an ICON Brand Partner, you gain full access to The Vault. This is where your vision stays alive without you chasing it.
              </p>
              
              <a
                href="/vault"
                className="inline-block bg-white text-black hover:bg-gray-100 font-heading font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Explore The Vault
              </a>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-black">{iconCopy.howTitle}</h3>
              <ol className="space-y-4">
                {iconCopy.howSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 text-lg">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg">
            <h3 className="text-2xl font-heading font-bold mb-6 text-black">Apply Now</h3>
            
            {/* Book a Call Button */}
            <div className="mb-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
              <h4 className="text-lg font-heading font-semibold mb-3 text-black">Have Questions?</h4>
              <p className="text-gray-600 text-sm mb-4">
                Book a call to discuss the ICON partnership and get your questions answered.
              </p>
              <a
                href="https://westrosemedia.sproutstudio.com/invitation/book-a-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-black text-white hover:bg-gray-800 font-heading font-bold py-3 px-6 rounded-lg text-center transition-all duration-200 transform hover:scale-105"
              >
                Book a Call
              </a>
            </div>
            <div className="space-y-4">
              <input
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                placeholder="Full name"
                value={form.fullName}
                onChange={e => setForm({ ...form, fullName: e.target.value })}
              />
              <input
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                placeholder="Email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <input
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                placeholder="Business URL"
                value={form.businessUrl}
                onChange={e => setForm({ ...form, businessUrl: e.target.value })}
              />
              <div className="grid grid-cols-2 gap-4">
                <select
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                  value={form.currentRevenue}
                  onChange={e => setForm({ ...form, currentRevenue: e.target.value })}
                >
                  <option value="">Current monthly revenue</option>
                  <option value="0-5k">$0 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
                <select
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                  value={form.goalRevenue}
                  onChange={e => setForm({ ...form, goalRevenue: e.target.value })}
                >
                  <option value="">Goal monthly revenue</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="500k+">$500,000+</option>
                </select>
              </div>
              <textarea
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body resize-none"
                placeholder="Biggest content bottleneck"
                rows={2}
                value={form.bottleneck}
                onChange={e => setForm({ ...form, bottleneck: e.target.value })}
              />
              <input
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                placeholder="Team or solo"
                value={form.teamOrSolo}
                onChange={e => setForm({ ...form, teamOrSolo: e.target.value })}
              />
              <textarea
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body resize-none"
                placeholder="Why this now"
                rows={2}
                value={form.whyNow}
                onChange={e => setForm({ ...form, whyNow: e.target.value })}
              />
              <textarea
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body resize-none"
                placeholder="Notes"
                rows={3}
                value={form.notes}
                onChange={e => setForm({ ...form, notes: e.target.value })}
              />
            </div>

            <button
              onClick={submit}
              disabled={submitting}
              className="mt-8 w-full bg-black hover:bg-gray-800 text-white font-heading font-bold py-6 px-8 rounded-lg text-xl transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : iconCopy.ctaLabel}
            </button>

            <p className="mt-4 text-sm text-gray-600 font-body">
              {iconCopy.priceLine}
            </p>
          </aside>
        </section>
      </div>
    </div>
  );
}


