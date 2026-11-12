"use client";

import { useState } from "react";
import { validateCoachingEmail } from "@/lib/coachingWaitlist";

export default function CoachingWaitlistForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = validateCoachingEmail(email);
    if (!parsed.ok) {
      setError(parsed.error);
      return;
    }

    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/coaching/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsed.email }),
      });
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) {
        setError(data?.error || "We couldn't save that. Try again in a minute.");
        return;
      }
      setDone(true);
    } catch {
      setError("We couldn't save that. Try again in a minute.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <p className="text-[17px] leading-[1.75] text-[#F4F4F4]" role="status">
        You&apos;re on the waitlist.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-4" noValidate>
      <div>
        <label htmlFor="coaching-waitlist-email" className="text-sm text-[#CCCCCE]">
          Email
        </label>
        <input
          id="coaching-waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="mt-2 w-full border border-[#CCCCCE]/40 bg-transparent px-4 py-3 text-[17px] text-[#F4F4F4] outline-none focus:border-[#F4F4F4]"
          required
        />
      </div>
      {error ? (
        <p className="text-sm text-[#F4F4F4]" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex items-center justify-center border border-[#F4F4F4] bg-[#F4F4F4] px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#020405] disabled:opacity-60"
        disabled={pending}
      >
        {pending ? "Joining the waitlist" : "Join the waitlist"}
      </button>
    </form>
  );
}
