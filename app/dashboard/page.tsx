"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page since dashboard is not ready
    router.push("/login");
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-hero text-black mb-6">Redirecting...</h1>
        <p className="text-editorial mb-8">Taking you to the login page.</p>
      </div>
    </div>
  );
}