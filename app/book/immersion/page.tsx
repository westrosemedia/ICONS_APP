"use client";

import { useState } from "react";
import { immersionCopy } from "@/content/immersion";
import { createBookingAndCheckout } from "./actions";

type FormState = {
  fullName: string;
  businessName: string;
  instagramHandle: string;
  pronouns: string;
  phoneNumber: string;
  email: string;
  howDidYouHear: string;
  city: string;
  eventType: string;
  eventName: string;
  eventDates: string;
  numberOfGuests: string;
  eventLocation: string;
  eventSchedule: string;
  keyMoments: string;
  participantQuantity: number; // 0 to 10
  notes?: string;
  acknowledgeParticipantBilling: boolean;
};

export default function ImmersionPage() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    fullName: "",
    businessName: "",
    instagramHandle: "",
    pronouns: "",
    phoneNumber: "",
    email: "",
    howDidYouHear: "",
    city: "",
    eventType: "",
    eventName: "",
    eventDates: "",
    numberOfGuests: "",
    eventLocation: "",
    eventSchedule: "",
    keyMoments: "",
    participantQuantity: 0,
    notes: "",
    acknowledgeParticipantBilling: false
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
    if (!form.acknowledgeParticipantBilling) {
      alert("Please confirm participant billing terms.");
      return;
    }
    
    setSubmitting(true);
    try {
      const { url } = await createBookingAndCheckout({
        pkg: "immersion",
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
            backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6544.jpg?alt=media')"
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-white">{immersionCopy.heroTitle}</h1>
          <p className="text-xl md:text-2xl text-white/80">{immersionCopy.heroSubtitle}</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Tagline Section */}
        <section className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium">
              Immersion is designed for live events and masterminds. It gives you professional photo and video coverage that turns every moment into high-value brand content.
            </p>
          </div>
        </section>

        <section className="mb-16 space-y-8 text-lg md:text-xl leading-relaxed text-gray-700">
          <p>{immersionCopy.intro}</p>
          <p>{immersionCopy.bigPromise}</p>
        </section>

        {/* First Image Section */}
        <section className="mb-16">
          <div className="relative w-full h-[50vh] overflow-hidden rounded-2xl">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2308.jpg?alt=media&token=72da2ca9-c31e-4773-85f0-7bea980b4e21"
              alt="Immersion Experience"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center center' }}
            />
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-heading font-bold mb-8 text-black">{immersionCopy.bulletsTitle}</h2>
            <ul className="space-y-6">
              {immersionCopy.bullets.map(item => (
                <li key={item} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gray-600">{immersionCopy.delivery}</p>
            <div className="mt-8 p-6 bg-black border border-gray-300 rounded-lg">
              <p className="font-heading font-bold text-xl text-white">{immersionCopy.priceLine}</p>
              <p className="text-gray-300 mt-2">{immersionCopy.scarcity}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-black">{immersionCopy.howTitle}</h3>
              <ol className="space-y-4">
                {immersionCopy.howSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700 text-lg">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-gray-600">{immersionCopy.tip}</p>
            </div>

            {/* Participant Content Section */}
            <div className="mt-12 p-6 bg-gray-100 border border-gray-300 rounded-lg">
              <h3 className="text-2xl font-heading font-bold mb-4 text-black">{immersionCopy.participantContent.title}</h3>
              <p className="text-gray-700 text-lg mb-6">{immersionCopy.participantContent.description}</p>
              
              <div className="space-y-4 mb-6">
                {immersionCopy.participantContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-gray-700 text-lg mb-4">{immersionCopy.participantContent.organizerBenefits}</p>
              <p className="text-black font-semibold text-lg">{immersionCopy.participantContent.pricing}</p>
            </div>
          </div>

          <aside className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h3 className="text-2xl font-heading font-bold mb-6 text-black">Start Your Intake</h3>
            <div className="space-y-4">
              {/* Personal Information */}
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-heading font-semibold mb-3 text-black">Personal Information</h4>
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="Full Name *"
                  value={form.fullName}
                  onChange={e => setForm({ ...form, fullName: e.target.value })}
                />
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="Business Name"
                  value={form.businessName}
                  onChange={e => setForm({ ...form, businessName: e.target.value })}
                />
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="Instagram Handle"
                  value={form.instagramHandle}
                  onChange={e => setForm({ ...form, instagramHandle: e.target.value })}
                />
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="Pronouns"
                  value={form.pronouns}
                  onChange={e => setForm({ ...form, pronouns: e.target.value })}
                />
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="Phone Number"
                  value={form.phoneNumber}
                  onChange={e => setForm({ ...form, phoneNumber: e.target.value })}
                />
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>

              {/* Business Information */}
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-heading font-semibold mb-3 text-black">Business Information</h4>
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="How did you hear about West Rose Media?"
                  value={form.howDidYouHear}
                  onChange={e => setForm({ ...form, howDidYouHear: e.target.value })}
                />
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="What city are you booking this Immersion for?"
                  value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}
                />
              </div>

              {/* Event Information */}
              <div className="border-b border-gray-200 pb-4">
                <h4 className="text-lg font-heading font-semibold mb-3 text-black">Event Information</h4>
                <select
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  value={form.eventType}
                  onChange={e => setForm({ ...form, eventType: e.target.value })}
                >
                  <option value="" className="bg-white text-black">Event Type (mastermind, retreat, conference, etc.)</option>
                  <option value="mastermind" className="bg-white text-black">Mastermind</option>
                  <option value="retreat" className="bg-white text-black">Retreat</option>
                  <option value="conference" className="bg-white text-black">Conference</option>
                  <option value="workshop" className="bg-white text-black">Workshop</option>
                  <option value="launch" className="bg-white text-black">Launch Event</option>
                  <option value="other" className="bg-white text-black">Other</option>
                </select>
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="Event Name"
                  value={form.eventName}
                  onChange={e => setForm({ ...form, eventName: e.target.value })}
                />
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="Event Dates"
                  value={form.eventDates}
                  onChange={e => setForm({ ...form, eventDates: e.target.value })}
                />
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="Number of Guests / Attendees"
                  value={form.numberOfGuests}
                  onChange={e => setForm({ ...form, numberOfGuests: e.target.value })}
                />
                <input
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body mb-4"
                  placeholder="Event Location / Venue"
                  value={form.eventLocation}
                  onChange={e => setForm({ ...form, eventLocation: e.target.value })}
                />
                <textarea
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body resize-none mb-4"
                  placeholder="Event Schedule or Agenda (if available)"
                  rows={3}
                  value={form.eventSchedule}
                  onChange={e => setForm({ ...form, eventSchedule: e.target.value })}
                />
                <textarea
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body resize-none"
                  placeholder="Key Moments You Want Captured (ex: opening night dinner, keynote speech, breakout sessions, candid networking, etc.)"
                  rows={3}
                  value={form.keyMoments}
                  onChange={e => setForm({ ...form, keyMoments: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-lg font-heading font-semibold mb-3 text-black">Participant content quantity</label>
                <input
                  type="number"
                  min={0}
                  max={10}
                  className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body"
                  value={form.participantQuantity}
                  onChange={e =>
                    setForm({ ...form, participantQuantity: Number(e.target.value) })
                  }
                />
              </div>


              <textarea
                className="w-full px-6 py-4 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 font-body resize-none"
                placeholder="Notes"
                rows={3}
                value={form.notes}
                onChange={e => setForm({ ...form, notes: e.target.value })}
              />

              <label className="flex items-start gap-3 text-gray-700">
                <input
                  type="checkbox"
                  className="mt-1 w-5 h-5 text-black bg-white border-gray-300 rounded focus:ring-black focus:ring-2"
                  checked={form.acknowledgeParticipantBilling}
                  onChange={e =>
                    setForm({ ...form, acknowledgeParticipantBilling: e.target.checked })
                  }
                />
                <span className="text-sm">
                  I acknowledge participant content is billed at one thousand eight hundred CAD per person, up to ten participants.
                </span>
              </label>
            </div>

            <button
              onClick={submit}
              disabled={submitting}
              className="mt-8 w-full bg-black hover:bg-gray-800 text-white font-heading font-bold py-6 px-8 rounded-lg text-xl transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Redirecting..." : immersionCopy.ctaLabel}
            </button>

            <p className="mt-4 text-sm text-gray-600 font-body">
              Starting at six thousand CAD for two days. GST included. Travel quoted as needed.
            </p>
          </aside>
        </section>

        {/* Second Image Section */}
        <section className="mb-16">
          <div className="relative w-full h-[50vh] overflow-hidden rounded-2xl">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR3492.jpg?alt=media&token=bddf7496-760e-43d9-8b72-5da9f9b036eb"
              alt="Immersion Experience"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center center' }}
            />
          </div>
        </section>
      </div>

      {/* Third Image Section - Full Width */}
      <section className="w-full mb-16">
        <div className="relative w-full h-[60vh] overflow-hidden">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8009.jpg?alt=media&token=8ada8e3d-d7a8-43f8-8485-6506724dc58d"
            alt="Immersion Experience"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
        </div>
      </section>
    </div>
  );
}
