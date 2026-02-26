"use client";

import { useState } from "react";

export default function WaitlistPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're in. We'll reach out when a spot opens.");
      setName("");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="section-padding">
        <div className="container-elegant max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500 mb-4">Private client waitlist</p>
          <h1 className="text-hero text-black mb-6">Apply for the monthly retainer</h1>
          <p className="text-editorial text-gray-700 mb-10">
            This is a done for you content operator for founders who want authority, recognition, and demand
            without living on social media. Spots are limited. Join the waitlist and we will reach out with
            next steps.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="waitlist-name">
                Name
              </label>
              <input
                id="waitlist-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="waitlist-email">
                Email
              </label>
              <input
                id="waitlist-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="you@company.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-black px-6 py-3 text-white font-semibold hover:bg-gray-900 transition-colors disabled:opacity-60"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Submitting..." : "Join the private client waitlist"}
            </button>
            {message ? (
              <p
                className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}
                role="status"
              >
                {message}
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}
