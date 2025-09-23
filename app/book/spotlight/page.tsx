"use client";

import { useState } from "react";
import { spotlightCopy } from "@/content/spotlight";
import { createBookingAndCheckout } from "./actions";

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
    city: "calgary",
    brandVibe: "",
    usageGoals: ""
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

    setSubmitting(true);
    try {
      const { url } = await createBookingAndCheckout({
        pkg: "spotlight",
        intake: form,
        calendarCity: form.city
      });
      window.location.href = url;
    } catch (e) {
      console.error(e);
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">{spotlightCopy.heroTitle}</h1>
        <p className="mt-2 text-lg text-neutral-600">{spotlightCopy.heroSubtitle}</p>
      </header>

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

            <label className="block text-sm font-medium mt-2">City</label>
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
          </div>

          <button
            onClick={submit}
            disabled={submitting}
            className="mt-4 w-full rounded-xl bg-black text-white py-3 font-semibold"
          >
            {submitting ? "Redirecting" : spotlightCopy.ctaLabel}
          </button>

          <p className="mt-3 text-xs text-neutral-500">{spotlightCopy.priceLine}</p>
        </aside>
      </section>
    </div>
  );
}
