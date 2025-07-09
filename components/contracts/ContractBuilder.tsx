import React, { useState } from "react";
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const defaultTemplate = `This contract is between {clientName} and ICONS Agency.
Date: {date}
Payment Plan: {paymentPlan}
Location: {location}

Notes:
{customNotes}`;

type Props = {
  onSave: () => void;
};

export default function ContractBuilder({ onSave }: Props) {
  const [template, setTemplate] = useState(defaultTemplate);
  const [clientUid, setClientUid] = useState("");
  const [customNotes, setCustomNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!template || !clientUid) {
      setError("Template and client UID are required.");
      return;
    }
    setLoading(true);
    try {
      await addDoc(collection(db, `contracts/${clientUid}/`), {
        template,
        customNotes,
        createdAt: serverTimestamp(),
        signed: false,
      });
      setSuccess("Contract sent to client.");
      setTemplate(defaultTemplate);
      setClientUid("");
      setCustomNotes("");
      onSave();
    } catch {
      setError("Failed to save contract.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <div className="flex flex-col gap-2">
        <label className="font-medium">Contract Template *</label>
        <textarea
          className="border rounded p-2 min-h-[120px] font-mono"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          required
        />
        <div className="text-xs text-gray-500">
          Use dynamic fields: {'{clientName}'}, {'{date}'}, {'{paymentPlan}'}, {'{location}'}, {'{customNotes}'}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Client UID *</label>
        <input
          className="border rounded p-2"
          value={clientUid}
          onChange={(e) => setClientUid(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Custom Notes</label>
        <textarea
          className="border rounded p-2"
          value={customNotes}
          onChange={(e) => setCustomNotes(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        disabled={loading}
      >
        Send Contract
      </button>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
    </form>
  );
} 