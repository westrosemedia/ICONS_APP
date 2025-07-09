"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc, query, orderBy } from "firebase/firestore";
import PaymentPlanForm, { PaymentPlan } from "./PaymentPlanForm";

export default function PaymentPlanList() {
  const [plans, setPlans] = useState<PaymentPlan[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const fetchPlans = async () => {
    setLoading(true);
    setError(null);
    try {
      const q = query(collection(db, "paymentPlans"), orderBy("name"));
      const snap = await getDocs(q);
      setPlans(
        snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as PaymentPlan))
      );
    } catch (err) {
      setError("Failed to load payment plans.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleEdit = (id: string) => setEditingId(id);
  const handleCancel = () => setEditingId(null);
  const handleSave = () => {
    setEditingId(null);
    fetchPlans();
  };

  const handleDelete = async (id: string) => {
    setError(null);
    setSuccess(null);
    try {
      await deleteDoc(doc(db, "paymentPlans", id));
      setSuccess("Payment plan deleted.");
      fetchPlans();
    } catch (err) {
      setError("Failed to delete payment plan.");
    } finally {
      setConfirmDelete(null);
    }
  };

  const handleTogglePrePay = async (plan: PaymentPlan) => {
    setError(null);
    setSuccess(null);
    try {
      await updateDoc(doc(db, "paymentPlans", plan.id!), {
        prePayRequired: !plan.prePayRequired,
      });
      setSuccess("Pre-pay requirement updated.");
      fetchPlans();
    } catch (err) {
      setError("Failed to update pre-pay requirement.");
    }
  };

  return (
    <div className="space-y-4">
      {loading && <div className="text-primary">Loading payment plans...</div>}
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
      {!loading && plans.length === 0 && (
        <div className="text-gray-400">No payment plans found.</div>
      )}
      <ul className="space-y-4">
        {plans.map((plan) => (
          <li key={plan.id} className="bg-white rounded shadow p-4">
            {editingId === plan.id ? (
              <PaymentPlanForm
                initial={plan}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ) : (
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1 space-y-1">
                  <div className="font-bold text-lg">{plan.name}</div>
                  <div className="text-gray-600">
                    ${plan.price} / {plan.frequency} &bull; {plan.numberOfPayments} payments
                  </div>
                  {plan.notes && <div className="text-gray-500 text-sm">{plan.notes}</div>}
                  <div className="flex items-center gap-2 mt-2">
                    <label className="flex items-center gap-1 text-sm">
                      <input
                        type="checkbox"
                        checked={plan.prePayRequired}
                        onChange={() => handleTogglePrePay(plan)}
                        className="h-4 w-4"
                      />
                      Pre-pay required
                    </label>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => handleEdit(plan.id!)}
                    className="px-3 py-1 bg-primary text-white rounded hover:bg-blue-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setConfirmDelete(plan.id!)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
            {/* Confirm delete dialog */}
            {confirmDelete === plan.id && (
              <div className="mt-4 bg-gray-50 border border-gray-200 rounded p-3 flex flex-col gap-2">
                <div>Are you sure you want to delete <span className="font-bold">{plan.name}</span>?</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDelete(plan.id!)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                  >
                    Yes, Delete
                  </button>
                  <button
                    onClick={() => setConfirmDelete(null)}
                    className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
} 