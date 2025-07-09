"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        // Not logged in, redirect to login (placeholder)
        router.replace("/login");
        return;
      }
      setUser(firebaseUser);
      // Check Firestore for role
      const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
      if (userDoc.exists()) {
        setRole(userDoc.data().role || null);
      } else {
        setRole(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-primary">Loading...</div>
    );
  }

  if (role !== "admin") {
    return (
      <div className="flex items-center justify-center min-h-[40vh] text-red-500 font-semibold text-lg">
        Access Denied
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-primary">Admin Dashboard</h1>
      <div className="text-gray-600">Welcome, {user?.email || user?.uid}!</div>
      <div className="bg-white rounded shadow p-6 mt-4">
        <p className="text-gray-700">This is the admin dashboard. Use the sidebar to navigate to Payment Plans, Contracts, Clients, and Media Library.</p>
      </div>
    </div>
  );
} 