"use client";

import { useState } from "react";
import { copy, validateSignup, type SignupList } from "@/lib/hotAndViral";

type AccessFormProps = {
  list: SignupList;
  button: string;
  success: string;
  id?: string;
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-black/15 bg-white px-4 py-3.5 text-base text-black outline-none transition-colors focus:border-black";

export default function AccessForm({ list, button, success, id }: AccessFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = validateSignup({ name, email });
    if (!parsed.ok) {
      setError(parsed.error);
      return;
    }

    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/hot-and-viral/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: parsed.name, email: parsed.email, list }),
      });
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      if (response.status === 409) {
        setError(data?.error || copy.duplicate);
        return;
      }
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
      <p className="text-editorial text-black" role="status">
        {success}
      </p>
    );
  }

  return (
    <form id={id} onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor={`${list}-name`} className="text-sm font-medium text-neutral-700">
          First name
        </label>
        <input
          id={`${list}-name`}
          name="name"
          type="text"
          autoComplete="given-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={fieldClass}
          required
        />
      </div>
      <div>
        <label htmlFor={`${list}-email`} className="text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          id={`${list}-email`}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={fieldClass}
          required
        />
      </div>
      {error ? (
        <p className="text-sm text-accent" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[15px] font-semibold tracking-wide text-white transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
        disabled={pending}
      >
        {pending ? "Sending" : button}
      </button>
    </form>
  );
}
