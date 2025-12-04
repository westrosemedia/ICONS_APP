"use client";

import { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import { PACKAGE_SUMMARIES } from "@/data/packages";
import { INTAKE_COPY } from "@/types/forms";
import DynamicForm from "@/components/forms/DynamicForm";
import BGSection from "@/components/BGSection";

type PkgId = "spotlight" | "immersion" | "icon";

export default function BookPage() {
  const params = useParams();
  const pkg = String(params.package) as PkgId;
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const packageSummary = PACKAGE_SUMMARIES.find(p => p.key === pkg);
  const intakeSpec = INTAKE_COPY.find(spec => spec.pkg === pkg);

  async function onSubmit(values: Record<string, any>) {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pkg, values }),
      });
      if (!res.ok) throw new Error("Checkout start failed");
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error");
    } finally {
      setSubmitting(false);
    }
  }

  if (!packageSummary || !intakeSpec) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold mb-4">Package Not Found</h1>
          <p className="text-white/80">The requested package could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <BGSection 
        image={packageSummary.imageUrl || "/images/packages/default.jpg"}
        height="h-[50vh]"
      >
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
          {packageSummary.title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
          {packageSummary.blurb}
        </p>
        <div className="text-center">
          <div className="text-sm text-white/70 mb-1">GST included</div>
          <div className="text-3xl font-bold">{packageSummary.priceLabel}</div>
        </div>
      </BGSection>

      {/* Package Highlights */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packageSummary.highlights.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <p className="text-white/90 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Form */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Let's Get Started</h2>
            <p className="text-white/80 text-lg">
              Tell us about your vision and we'll create something unforgettable together.
            </p>
          </div>
          
          {error && (
            <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 mb-8">
              <p className="text-red-400">{error}</p>
            </div>
          )}

          <DynamicForm 
            spec={intakeSpec}
            onSubmit={onSubmit}
            className="max-w-3xl mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
