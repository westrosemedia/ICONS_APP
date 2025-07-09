import React from "react";

type Props = {
  title: string;
  description: string;
  amount: number;
  onPay: () => void;
  loading?: boolean;
};

export default function PaymentOptionCard({ title, description, amount, onPay, loading }: Props) {
  return (
    <div className="bg-white rounded shadow p-6 flex flex-col items-center space-y-4 border border-gray-100">
      <div className="text-xl font-bold text-primary text-center">{title}</div>
      <div className="text-gray-600 text-center">{description}</div>
      <div className="text-2xl font-semibold text-gray-800">${amount.toFixed(2)}</div>
      <button
        onClick={onPay}
        disabled={loading}
        className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600 font-semibold disabled:opacity-50 w-full"
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
} 