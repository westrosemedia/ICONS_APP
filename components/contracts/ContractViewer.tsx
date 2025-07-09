import React, { useState } from "react";

type Contract = {
  id: string;
  template: string;
  customNotes: string;
  signed: boolean;
  signatureData?: string;
  createdAt?: any;
};

type Props = {
  contract: Contract;
  clientName: string;
  paymentPlan: string;
  location: string;
  onSign: (signature: string) => void;
};

function fillTemplate(template: string, fields: Record<string, string>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => fields[key] || "");
}

export default function ContractViewer({ contract, clientName, paymentPlan, location, onSign }: Props) {
  const [signature, setSignature] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fields = {
    clientName,
    date: new Date().toLocaleDateString(),
    paymentPlan,
    location,
    customNotes: contract.customNotes || "",
  };

  const handleSign = () => {
    if (!signature) {
      setError("Signature required.");
      return;
    }
    setError(null);
    onSign(signature);
    setSuccess("Contract signed!");
  };

  return (
    <div className="bg-white rounded shadow p-6 space-y-6">
      <div className="whitespace-pre-line text-gray-800 mb-4">
        {fillTemplate(contract.template, fields)}
      </div>
      {contract.signed ? (
        <div className="mt-4">
          <div className="text-green-600 font-bold">Signed</div>
          <div className="mt-2">
            <span className="font-medium">Signature:</span> {contract.signatureData}
          </div>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          <label className="font-medium">Sign Contract (type your name)</label>
          <input
            className="border rounded p-2 w-full"
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder="Your signature"
          />
          <button
            onClick={handleSign}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
          >
            Sign & Submit
          </button>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-600 text-sm">{success}</div>}
        </div>
      )}
    </div>
  );
} 