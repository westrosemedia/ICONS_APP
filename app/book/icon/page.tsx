"use client";

import { useState } from "react";
import { iconCopy } from "@/content/icon";
import { submitIconApplication } from "./actions";

type FormState = {
  fullName: string;
  email: string;
  businessUrl: string;
  niche: string;
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
    niche: "",
    currentRevenue: "",
    goalRevenue: "",
    bottleneck: "",
    teamOrSolo: "",
    whyNow: "",
    notes: ""
  });

  const submit = async () => {
    setSubmitting(true);
    try {
      const res = await submitIconApplication({ intake: form });
      if (res?.ok) setSubmitted(true);
      else throw new Error("Failed to submit");
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    } finally {
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[60vh] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR3352.jpg?alt=media')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">{iconCopy.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-white/80">{iconCopy.heroSubtitle}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-16 space-y-8 text-lg md:text-xl leading-relaxed text-white/90">
          <p>{iconCopy.intro}</p>
          <p>{iconCopy.bigPromise}</p>
        </section>

        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-heading font-bold mb-8">{iconCopy.bulletsTitle}</h2>
            <ul className="space-y-6">
              {iconCopy.bullets.map(item => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white/90 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-white/80">{iconCopy.beliefShift}</p>

            <div className="mt-8 p-6 bg-red-900/20 border border-red-500/30 rounded-xl">
              <p className="font-heading font-bold text-xl">{iconCopy.priceLine}</p>
              <p className="text-white/70 mt-2">{iconCopy.scarcity}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-heading font-bold mb-6">{iconCopy.howTitle}</h3>
              <ol className="space-y-4">
                {iconCopy.howSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-white/90 text-lg">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-heading font-bold mb-6">Apply Now</h3>
            
            {/* Book a Call Button */}
            <div className="mb-8 p-6 bg-white/10 border border-white/20 rounded-xl">
              <h4 className="text-lg font-heading font-semibold mb-3 text-white">Have Questions?</h4>
              <p className="text-white/80 text-sm mb-4">
                Book a 15-minute call to discuss the ICON partnership and get your questions answered.
              </p>
              <a
                href="https://westrosemedia.sproutstudio.com/invitation/book-a-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full bg-white text-black hover:bg-gray-100 font-heading font-bold py-3 px-6 rounded-lg text-center transition-all duration-200 transform hover:scale-105"
              >
                Book a Call
              </a>
            </div>
            <div className="space-y-4">
              <input
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body"
                placeholder="Full name"
                value={form.fullName}
                onChange={e => setForm({ ...form, fullName: e.target.value })}
              />
              <input
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body"
                placeholder="Email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <input
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body"
                placeholder="Business URL"
                value={form.businessUrl}
                onChange={e => setForm({ ...form, businessUrl: e.target.value })}
              />
              <input
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body"
                placeholder="Niche"
                value={form.niche}
                onChange={e => setForm({ ...form, niche: e.target.value })}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body"
                  placeholder="Current monthly revenue"
                  value={form.currentRevenue}
                  onChange={e => setForm({ ...form, currentRevenue: e.target.value })}
                />
                <input
                  className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body"
                  placeholder="Goal monthly revenue"
                  value={form.goalRevenue}
                  onChange={e => setForm({ ...form, goalRevenue: e.target.value })}
                />
              </div>
              <textarea
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body resize-none"
                placeholder="Biggest content bottleneck"
                rows={2}
                value={form.bottleneck}
                onChange={e => setForm({ ...form, bottleneck: e.target.value })}
              />
              <input
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body"
                placeholder="Team or solo"
                value={form.teamOrSolo}
                onChange={e => setForm({ ...form, teamOrSolo: e.target.value })}
              />
              <textarea
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body resize-none"
                placeholder="Why this now"
                rows={2}
                value={form.whyNow}
                onChange={e => setForm({ ...form, whyNow: e.target.value })}
              />
              <textarea
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:bg-white/20 transition-all duration-200 font-body resize-none"
                placeholder="Notes"
                rows={3}
                value={form.notes}
                onChange={e => setForm({ ...form, notes: e.target.value })}
              />
            </div>

            <button
              onClick={submit}
              disabled={submitting}
              className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-heading font-bold py-6 px-8 rounded-xl text-xl transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : iconCopy.ctaLabel}
            </button>

            <p className="mt-4 text-sm text-white/60 font-body">
              {iconCopy.priceLine}
            </p>
          </aside>
        </section>
      </div>
    </div>
  );
}


