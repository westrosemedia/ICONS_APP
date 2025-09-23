"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function CheckoutPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id || "unknown";
  const router = useRouter();

  return (
    <main className="w-full px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <p className="mt-2">Package: <span className="font-mono">{id}</span></p>

      <div className="mt-6 space-x-3">
        <Link href="/packages" className="inline-block px-4 py-2 rounded-2xl bg-black text-white">
          Back to Packages
        </Link>
        <button
          className="inline-block px-4 py-2 rounded-2xl border"
          onClick={() => router.push(`/checkout/${id}/confirm`)}
        >
          Continue
        </button>
      </div>
    </main>
  );
}
