"use client";

import { useState } from "react";
import { wrmLiteCopy } from "@/content/wrmLite";
import { createBookingAndCheckout } from "./actions";

type FormState = {
  fullName: string;
  email: string;
  instagram: string;
  businessUrl: string;
  niche: string;
  revenueRange: string;
  topPlatforms: string[];
  approvalWorkflow: string;
  billingEmail: string;
  notes?: string;
};

export default function WRMLitePage() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    instagram: "",
    businessUrl: "",
    niche: "",
    revenueRange: "",
    topPlatforms: [],
    approvalWorkflow: "",
    billingEmail: "",
    notes: ""
  });

  const togglePlatform = (p: string) => {
    setForm(prev => {
      const set = new Set(prev.topPlatforms);
      if (set.has(p)) set.delete(p);
      else set.add(p);
      return { ...prev, topPlatforms: Array.from(set) };
    });
  };

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

    setSubmitting(true);
    try {
      const { url } = await createBookingAndCheckout({
        pkg: "lite",
        intake: form
      });
      window.location.href = url;
    } catch (e) {
      console.error(e);
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5983.jpg?alt=media')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">{wrmLiteCopy.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-white/80">{wrmLiteCopy.heroSubtitle}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">

        <section className="mb-16 space-y-8 text-lg md:text-xl leading-relaxed text-gray-600">
          <p>{wrmLiteCopy.intro}</p>
          <p>{wrmLiteCopy.bigPromise}</p>
        </section>

        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-10 shadow-lg">
            <h2 className="text-3xl font-heading font-bold mb-8 text-black">{wrmLiteCopy.bulletsTitle}</h2>
            <ul className="space-y-6">
              {wrmLiteCopy.bullets.map(item => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600">{wrmLiteCopy.delivery}</p>
            <p className="mt-6 text-gray-600">{wrmLiteCopy.beliefShift}</p>
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200 rounded-xl">
              <p className="font-heading font-bold text-xl text-black">{wrmLiteCopy.priceLine}</p>
              <p className="text-gray-600 mt-2">{wrmLiteCopy.scarcity}</p>
            </div>
          </div>

          <aside className="bg-white border border-gray-200 rounded-xl p-10 shadow-lg">
            <h3 className="text-2xl font-heading font-bold mb-6 text-black">Start Your Intake</h3>
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
                placeholder="Instagram"
                value={form.instagram}
                onChange={e => setForm({ ...form, instagram: e.target.value })}
              />
              <input
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                placeholder="Business URL"
                value={form.businessUrl}
                onChange={e => setForm({ ...form, businessUrl: e.target.value })}
              />
              <input
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                placeholder="Niche"
                value={form.niche}
                onChange={e => setForm({ ...form, niche: e.target.value })}
              />
              <input
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                placeholder="Current monthly revenue range"
                value={form.revenueRange}
                onChange={e => setForm({ ...form, revenueRange: e.target.value })}
              />

              <div className="pt-2">
                <p className="text-lg font-heading font-semibold mb-3 text-black">Top platforms</p>
                <div className="flex flex-wrap gap-3">
                  {["Instagram", "Facebook", "TikTok", "LinkedIn"].map(p => {
                    const active = form.topPlatforms.includes(p);
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => togglePlatform(p)}
                        className={`px-4 py-2 rounded-lg border transition-all duration-200 font-body ${
                          active 
                            ? "bg-black text-white border-black" 
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>

              <input
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                placeholder="Billing email"
                value={form.billingEmail}
                onChange={e => setForm({ ...form, billingEmail: e.target.value })}
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
              {submitting ? "Redirecting..." : wrmLiteCopy.ctaLabel}
            </button>

            <p className="mt-4 text-sm text-gray-600 font-body">
              Two thousand four hundred CAD per month. GST included.
            </p>
          </aside>
        </section>
      </div>
    </div>
  );
}