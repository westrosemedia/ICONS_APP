import React, { useState } from "react";

const serviceTypes = ["Consultation", "Branding Session", "Photo Shoot"];

type Props = {
  city: string;
  email: string;
  availableSlots: string[];
  onBook: (data: any) => void;
};

export default function BookingForm({ city, email, availableSlots, onBook }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: email || "",
    date: "",
    time: "",
    serviceType: serviceTypes[0],
    notes: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!form.name || !form.email || !form.date || !form.time || !form.serviceType) {
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await onBook(form);
      setSuccess("Booking request sent!");
      setForm({
        name: "",
        email: email || "",
        date: "",
        time: "",
        serviceType: serviceTypes[0],
        notes: "",
      });
    } catch {
      setError("Failed to send booking request.");
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
        <label className="font-medium">Email *</label>
        <input
          name="email"
          value={form.email}
          readOnly
          className="border rounded p-2 bg-gray-100 cursor-not-allowed"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Date *</label>
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Time Slot *</label>
        <select
          name="time"
          value={form.time}
          onChange={handleChange}
          className="border rounded p-2"
          required
        >
          <option value="">Select a time...</option>
          {availableSlots.map((slot) => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-medium">Service Type *</label>
        <select
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className="border rounded p-2"
          required
        >
          {serviceTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
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
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        disabled={loading}
      >
        Book Now
      </button>
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
    </form>
  );
} 