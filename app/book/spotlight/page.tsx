"use client";

import { useState, useEffect } from "react";
import { spotlightCopy } from "@/content/spotlight";

type FormState = {
  fullName: string;
  email: string;
  instagram: string;
  city: "calgary" | "vancouver" | "toronto" | "other";
  brandVibe: string;
  usageGoals: string;
};

export default function SpotlightPage() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    instagram: "",
    city: "other",
    brandVibe: "",
    usageGoals: ""
  });

  // Redirect to booking link for supported cities
  useEffect(() => {
    if (form.city !== "other" && (form.city === "calgary" || form.city === "vancouver" || form.city === "toronto")) {
      window.location.href = "https://westrosemedia.sproutstudio.com/bookings";
    }
  }, [form.city]);

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
      // Send form data to email first
      await fetch('/api/send-spotlight-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      
      // Then redirect to Stripe payment
      window.location.href = 'https://buy.stripe.com/bJecN49oYf5z5zt3cN87K0P';
    } catch (e) {
      console.error(e);
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5005.jpg?alt=media&token=ffcfc151-4b95-4155-8ff7-a9648dd70b09')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {spotlightCopy.heroTitle}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            {spotlightCopy.heroSubtitle}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-10">

      <section className="mt-8 space-y-5 text-lg leading-8">
        <p>{spotlightCopy.intro}</p>
        <p>{spotlightCopy.bigPromise}</p>
      </section>

      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold">{spotlightCopy.bulletsTitle}</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            {spotlightCopy.bullets.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="mt-6">{spotlightCopy.delivery}</p>
          <p className="mt-4">{spotlightCopy.beliefShift}</p>

          <div className="mt-6 p-4 rounded-xl bg-neutral-50">
            <p className="font-medium">{spotlightCopy.priceLine}</p>
            <p className="text-sm text-neutral-600 mt-1">{spotlightCopy.scarcity}</p>
            <p className="text-sm text-neutral-600 mt-1">{spotlightCopy.cityNote}</p>
            <p className="text-sm text-neutral-600 mt-1">{spotlightCopy.addOnNote}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">{spotlightCopy.howTitle}</h3>
            <ol className="mt-3 list-decimal pl-6 space-y-2">
              {spotlightCopy.howSteps.map(step => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <aside className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold">Start your intake</h3>
          <div className="mt-4 space-y-3">
            <label className="block text-sm font-medium">City</label>
            <select
              className="w-full border rounded px-3 py-2"
              value={form.city}
              onChange={e => setForm({ ...form, city: e.target.value as FormState["city"] })}
            >
              <option value="calgary">Calgary</option>
              <option value="vancouver">Vancouver</option>
              <option value="toronto">Toronto</option>
              <option value="other">Other</option>
            </select>

            {form.city === "other" && (
              <>
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Full name"
              value={form.fullName}
              onChange={e => setForm({ ...form, fullName: e.target.value })}
            />
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Instagram"
              value={form.instagram}
              onChange={e => setForm({ ...form, instagram: e.target.value })}
            />
            <textarea
              className="w-full border rounded px-3 py-2"
              placeholder="Brand vibe in one sentence"
              rows={2}
              value={form.brandVibe}
              onChange={e => setForm({ ...form, brandVibe: e.target.value })}
            />
            <textarea
              className="w-full border rounded px-3 py-2"
              placeholder="How you plan to use this content"
              rows={3}
              value={form.usageGoals}
              onChange={e => setForm({ ...form, usageGoals: e.target.value })}
            />
              </>
            )}
          </div>

          {form.city === "other" && (
            <>
          <button
            onClick={submit}
            disabled={submitting}
            className="mt-4 w-full rounded-xl bg-black text-white py-3 font-semibold"
          >
                {submitting ? "Submitting" : spotlightCopy.ctaLabel}
          </button>
          <p className="mt-3 text-xs text-neutral-500">{spotlightCopy.priceLine}</p>
            </>
          )}
        </aside>
      </section>
      </div>
    </div>
  );
}
