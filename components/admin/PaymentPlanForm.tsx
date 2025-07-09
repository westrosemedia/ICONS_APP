"use client";

import React, { useState } from "react";
import { db } from "../../lib/firebase";
import { doc, setDoc, addDoc, collection, serverTimestamp } from "firebase/firestore";

export type PaymentPlan = {
  id?: string;
  name: string;
  price: number;
  frequency: string;
  numberOfPayments: number;
  notes?: string;
  prePayRequired: boolean;
};

type Props = {
  initial?: PaymentPlan;
  onSave: () => void;
  onCancel?: () => void;
};

const frequencies = ["Monthly", "Quarterly", "Yearly"];

export default function PaymentPlanForm({ initial, onSave, onCancel }: Props) {
  const [form, setForm] = useState<PaymentPlan>(
    initial || {
      name: "",
      price: 0,
      frequency: "Monthly",
      numberOfPayments: 1,
      notes: "",
      prePayRequired: false,
    }
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!form.name || !form.frequency || !form.price || !form.numberOfPayments) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      if (form.id) {
        // Edit existing
        await setDoc(doc(db, "paymentPlans", form.id), {
          ...form,
          price: Number(form.price),
          numberOfPayments: Number(form.numberOfPayments),
          updatedAt: serverTimestamp(),
        });
        setSuccess("Payment plan updated.");
      } else {
        // Create new
        await addDoc(collection(db, "paymentPlans"), {
          ...form,
          price: Number(form.price),
          numberOfPayments: Number(form.numberOfPayments),
          createdAt: serverTimestamp(),
        });
        setSuccess("Payment plan created.");
        setForm({
          name: "",
          price: 0,
          frequency: "Monthly",
          numberOfPayments: 1,
          notes: "",
          prePayRequired: false,
        });
      }
      onSave();
    } catch (err) {
      setError("Failed to save payment plan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div className="flex flex-col gap-2">
        <label className="font-medium">Name *</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Price *</label>
        <input
          name="price"
          type="number"
          min={0}
          value={form.price}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Frequency *</label>
        <select
          name="frequency"
          value={form.frequency}
          onChange={handleChange}
          className="border rounded p-2"
          required
        >
          {frequencies.map((freq) => (
            <option key={freq} value={freq}>{freq}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Number of Payments *</label>
        <input
          name="numberOfPayments"
          type="number"
          min={1}
          value={form.numberOfPayments}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Notes</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          className="border rounded p-2"
        />
      </div>
      <div className="flex items-center gap-2">
        <input
          name="prePayRequired"
          type="checkbox"
          checked={form.prePayRequired}
          onChange={handleChange}
          className="h-4 w-4"
        />
        <label className="font-medium">Pre-pay required</label>
      </div>
      <div className="flex gap-2 mt-2">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          disabled={loading}
        >
          {form.id ? "Update" : "Create"} Plan
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
            disabled={loading}
          >
            Cancel
          </button>
        )}
      </div>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
    </form>
  );
} 