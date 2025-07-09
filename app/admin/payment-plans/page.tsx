"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "../../../lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import PaymentPlanForm from "../../../components/admin/PaymentPlanForm";
import PaymentPlanList from "../../../components/admin/PaymentPlanList";

export default function PaymentPlansPage() {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        router.replace("/login");
        return;
      }
      setUser(firebaseUser);
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
    return <div className="flex items-center justify-center min-h-[40vh] text-primary">Loading...</div>;
  }
  if (role !== "admin") {
    return <div className="flex items-center justify-center min-h-[40vh] text-red-500 font-semibold text-lg">Access Denied</div>;
  }

  // Show form for new plan and list of all plans
  const [showForm, setShowForm] = useState(false);
  const handleFormSave = () => {
    setShowForm(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-primary">Payment Plans</h1>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? "Close" : "New Plan"}
        </button>
      </div>
      {showForm && <PaymentPlanForm onSave={handleFormSave} />}
      <PaymentPlanList />
    </div>
  );
} 