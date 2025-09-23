"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the main PPB page where the Stripe link will be added
    router.push("/powerfulpersonalbrand");
  }, [router]);

  return (
    <main className="mx-auto max-w-2xl px-6 py-12 text-center">
      <p>Redirecting to Powerful Personal Brand page...</p>
    </main>
  );
}
