"use client";
import React, { useState } from "react";
import Button from "../../components/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const packageForms = {
  empire: {
    title: "Book The ICON Package",
    description: "Ready to dominate your industry? Let's create your most iconic year yet.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "pronouns", label: "Pronouns", type: "text", required: true },
      { name: "businessName", label: "Business Name", type: "text", required: true },
      { name: "instagram", label: "Instagram Handle", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: false },
      { name: "mailingAddress", label: "Mailing Address", type: "textarea", required: false },
      { name: "marketingOptIn", label: "Marketing Communications", type: "checkbox", required: false },
      { name: "website", label: "Website", type: "url", required: true },
      { name: "monthlyRevenue", label: "Monthly Revenue Bracket", type: "select", required: true, options: ["Under $10K", "$10K-$50K", "$50K-$100K", "$100K+"] },
      { name: "contentFrustration", label: "Biggest content frustration?", type: "textarea", required: true },
      { name: "timePerWeek", label: "How much time per week do you spend on content?", type: "text", required: true },
      { name: "wantToOffload", label: "What do you want to offload?", type: "textarea", required: true },
      { name: "dreamOutcome", label: "90-day dream outcome?", type: "textarea", required: true },
      { name: "readyToCommit", label: "Ready to commit to 4+ months?", type: "select", required: true, options: ["Yes", "No"] },
      { name: "preferredLocation", label: "Preferred shoot location", type: "select", required: true, options: ["Calgary", "Other"] },
      { name: "hairMakeup", label: "Hair/makeup referral needed?", type: "select", required: true, options: ["Yes", "No"] }
    ]
  },
  spotlight: {
    title: "Book The Spotlight",
    description: "Ready for your 90-minute power shoot? Let's capture your most iconic moments.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "pronouns", label: "Pronouns", type: "text", required: true },
      { name: "businessName", label: "Business Name", type: "text", required: true },
      { name: "instagram", label: "Instagram Handle", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: false },
      { name: "mailingAddress", label: "Mailing Address", type: "textarea", required: false },
      { name: "marketingOptIn", label: "Marketing Communications", type: "checkbox", required: false },
      { name: "shootFor", label: "What's the shoot for?", type: "select", required: true, options: ["Launch", "Website", "Rebrand", "Social Media", "Other"] },
      { name: "city", label: "Select City", type: "select", required: true, options: ["Calgary", "Vancouver", "Toronto", "Other"] },
      { name: "vibe", label: "Preferred vibe / shoot goal", type: "textarea", required: true },
      { name: "preferredDates", label: "Preferred date(s)", type: "textarea", required: true }
    ]
  },
  lite: {
    title: "Book WRM Lite",
    description: "Ready for consistent, strategic content that grows your brand? Let's get started.",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "pronouns", label: "Pronouns", type: "text", required: true },
      { name: "businessName", label: "Business Name", type: "text", required: true },
      { name: "instagram", label: "Instagram Handle", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: false },
      { name: "mailingAddress", label: "Mailing Address", type: "textarea", required: false },
      { name: "marketingOptIn", label: "Marketing Communications", type: "checkbox", required: false },
      { name: "currentPosting", label: "Where are you currently posting?", type: "textarea", required: true },
      { name: "currentPosts", label: "How many posts do you create now?", type: "text", required: true },
      { name: "successIn30Days", label: "What does success look like in 30 days?", type: "textarea", required: true }
    ]
  },
  immersion: {
    title: "Book Event Package",
    description: "Ready to capture your event's most iconic moments? Let's create something unforgettable.",
    fields: [
      { name: "hostName", label: "Host Full Name", type: "text", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "pronouns", label: "Pronouns", type: "text", required: true },
      { name: "businessName", label: "Business Name", type: "text", required: true },
      { name: "instagram", label: "Instagram Handle", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: false },
      { name: "mailingAddress", label: "Mailing Address", type: "textarea", required: false },
      { name: "marketingOptIn", label: "Marketing Communications", type: "checkbox", required: false },
      { name: "eventDates", label: "Event Dates", type: "text", required: true },
      { name: "eventLocation", label: "Event Location", type: "text", required: true },
      { name: "participantContent", label: "Do you want participant content included?", type: "select", required: true, options: ["Yes", "No"] },
      { name: "participantCount", label: "Estimated participant count (up to 10)", type: "number", required: true },
      { name: "contentGoals", label: "Content goals or theme", type: "textarea", required: true }
    ]
  }
};

export default function QuizBookForm() {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const packageType = searchParams.get('package') || 'icon';
  const currentForm = packageForms[packageType as keyof typeof packageForms] || packageForms.empire;

  const handleInputChange = (fieldName: string, value: any) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const email = formData.email || `${formData.fullName || formData.hostName}@temp.com`;
      const password = `${formData.fullName || formData.hostName}${Date.now()}`;
      
      // Try to create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Store user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        ...formData,
        packageType,
        createdAt: new Date().toISOString(),
      });
      
      setSubmitted(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1200);
    } catch (err: any) {
      // If user exists, try to sign in
      if (err.code === "auth/email-already-in-use") {
        try {
          const email = formData.email || `${formData.fullName || formData.hostName}@temp.com`;
          const password = `${formData.fullName || formData.hostName}${Date.now()}`;
          await signInWithEmailAndPassword(auth, email, password);
          setSubmitted(true);
          setTimeout(() => {
            router.push("/dashboard");
          }, 1200);
          return;
        } catch (signInErr: any) {
          setError("Account exists. Please use a different email or contact support.");
        }
      } else {
        setError(err.message || "Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-24">
        <div className="max-w-lg w-full bg-black/80 rounded-lg shadow-2xl p-10 flex flex-col items-center text-center border border-white/10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Thank you!</h2>
          <p className="text-lg font-body text-white/80 mb-4">Your details have been received. We'll be in touch soon - and you'll be redirected to your dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-24">
      <form onSubmit={handleSubmit} className="max-w-2xl w-full bg-black/80 rounded-lg shadow-2xl p-10 flex flex-col items-center text-center border border-white/10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight leading-tight">
          {currentForm.title}
        </h2>
        <div className="text-lg font-body text-white/80 mb-8 max-w-prose">
          {currentForm.description}
        </div>
        
        <div className="w-full space-y-6">
          {currentForm.fields.map((field) => (
            <div key={field.name} className="text-left">
              <label className="block text-white font-body mb-2 text-lg">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={e => handleInputChange(field.name, e.target.value)}
                  className="w-full px-4 py-3 rounded bg-black/60 border border-white/20 text-white font-body focus:outline-none focus:ring-2 focus:ring-white text-lg placeholder-white/40 min-h-[120px]"
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                />
              ) : field.type === 'select' ? (
                <select
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={e => handleInputChange(field.name, e.target.value)}
                  className="w-full px-4 py-3 rounded bg-black/60 border border-white/20 text-white font-body focus:outline-none focus:ring-2 focus:ring-white text-lg"
                >
                  <option value="">Select {field.label.toLowerCase()}</option>
                  {field.options && field.options.map((option: string) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={e => handleInputChange(field.name, e.target.value)}
                  className="w-full px-4 py-3 rounded bg-black/60 border border-white/20 text-white font-body focus:outline-none focus:ring-2 focus:ring-white text-lg placeholder-white/40"
                  placeholder={`Enter your ${field.label.toLowerCase()}`}
                />
              )}
            </div>
          ))}
        </div>
        
        {error && <div className="text-white font-body mt-4 text-base">{error}</div>}
        
        <Button color="accent" className="w-full max-w-xs text-lg font-bold py-4 mt-8" disabled={loading}>
          {loading ? "Creating your account..." : "Submit"}
        </Button>
        
        <div className="mt-8 w-full border-t border-white/10"></div>
        <div className="mt-6 text-white/60 text-sm italic font-body">
          Your information is private and secure. We'll never share your details.
        </div>
      </form>
    </div>
  );
} 