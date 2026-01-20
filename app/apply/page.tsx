 "use client";
 
 import { useState } from "react";
 
 type FormState = {
   fullName: string;
   businessName: string;
   website: string;
   instagram: string;
   tiktok: string;
   city: string;
   monthlyRevenue: string;
   primaryGoal: string;
   bottleneck: string;
   longTerm: string;
   email: string;
 };
 
 const initialState: FormState = {
   fullName: "",
   businessName: "",
   website: "",
   instagram: "",
   tiktok: "",
   city: "",
   monthlyRevenue: "",
   primaryGoal: "",
   bottleneck: "",
   longTerm: "",
   email: "",
 };
 
 export default function ApplyPage() {
   const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
 
   const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
     setForm((prev) => ({ ...prev, [field]: event.target.value }));
   };
 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("Thank you for applying to the ICON Brand Partnership. You will hear from us soon.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
   };
 
   return (
     <main className="min-h-screen bg-white text-black">
       <section className="section-padding">
         <div className="container-elegant max-w-3xl">
          <h1 className="text-hero text-black mb-4">Apply for the ICON Brand Partnership</h1>
          <p className="text-editorial text-gray-700 mb-6">
            The ICON Brand Partnership is a long term content partnership for founders who want their brand positioned at the same level as their business.
          </p>
          <p className="text-editorial text-gray-700 mb-10">
            This is not a one off service or a short term project. It is designed for founders who are ready to invest in consistent visibility, authority, and opportunity without managing content themselves.
          </p>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Who should apply</h2>
            <div className="space-y-4 text-gray-700">
              <p>This partnership is best suited for founders who:</p>
              <ul className="space-y-2">
                <li>Are already generating consistent revenue</li>
                <li>See brand and visibility as a growth lever, not a nice to have</li>
                <li>Want a strategic partner to handle content end to end</li>
                <li>Are comfortable investing several thousand dollars per month in their brand</li>
              </ul>
              <p>If you are earlier in your business or looking for a single shoot, this will not be the right fit.</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Location and logistics</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                West Rose Media works with founders across North America, with recurring work in Calgary, Vancouver, and Toronto.
              </p>
              <p>
                ICON Brand Partnership clients collaborate remotely on strategy and planning, with content captured through scheduled travel dates and intentional shoot days.
              </p>
              <p>You do not need to live in the same city to apply.</p>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">The application process</h2>
            <div className="space-y-4 text-gray-700">
              <p>Applications are reviewed carefully.</p>
              <p>
                All applicants will receive a response. If the partnership is aligned, you will be contacted with next steps. If it is not the right fit at this time, you will still hear from us.
              </p>
            </div>
          </div>
 
           <form onSubmit={handleSubmit} className="space-y-6">
             <div>
               <label htmlFor="full-name" className="block text-sm font-semibold mb-2">
                 Full name
               </label>
               <input
                 id="full-name"
                 type="text"
                 value={form.fullName}
                 onChange={handleChange("fullName")}
                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                 required
               />
             </div>
             <div>
               <label htmlFor="business-name" className="block text-sm font-semibold mb-2">
                 Business name
               </label>
               <input
                 id="business-name"
                 type="text"
                 value={form.businessName}
                 onChange={handleChange("businessName")}
                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                 required
               />
             </div>
             <div>
              <label htmlFor="website" className="block text-sm font-semibold mb-2">
                Website
              </label>
               <input
                 id="website"
                 type="text"
                 value={form.website}
                 onChange={handleChange("website")}
                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                 required
               />
             </div>
             <div>
              <label htmlFor="instagram" className="block text-sm font-semibold mb-2">
                Instagram handle
              </label>
               <input
                id="instagram"
                 type="text"
                value={form.instagram}
                onChange={handleChange("instagram")}
                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                 required
               />
             </div>
             <div>
              <label htmlFor="tiktok" className="block text-sm font-semibold mb-2">
                TikTok handle
              </label>
              <input
                id="tiktok"
                type="text"
                value={form.tiktok}
                onChange={handleChange("tiktok")}
                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                 required
               />
             </div>
             <div>
              <label htmlFor="city" className="block text-sm font-semibold mb-2">
                City
              </label>
              <input
                id="city"
                type="text"
                value={form.city}
                onChange={handleChange("city")}
                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                 required
               />
             </div>
            <div>
              <label htmlFor="monthly-revenue" className="block text-sm font-semibold mb-2">
                Current monthly revenue range (10k to 25k, 25k to 50k, 50k plus)
              </label>
              <select
                id="monthly-revenue"
                value={form.monthlyRevenue}
                onChange={(event) => setForm((prev) => ({ ...prev, monthlyRevenue: event.target.value }))}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black bg-white"
                required
              >
                <option value="" disabled>
                  Select a range
                </option>
                <option value="10k to 25k">10k to 25k</option>
                <option value="25k to 50k">25k to 50k</option>
                <option value="50k plus">50k plus</option>
              </select>
            </div>
            <div>
              <label htmlFor="primary-goal" className="block text-sm font-semibold mb-2">
                Primary business goal for the next 12 months
              </label>
              <textarea
                id="primary-goal"
                value={form.primaryGoal}
                onChange={handleChange("primaryGoal")}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                rows={3}
                required
              />
            </div>
            <div>
              <label htmlFor="bottleneck" className="block text-sm font-semibold mb-2">
                Biggest content bottleneck right now
              </label>
              <textarea
                id="bottleneck"
                value={form.bottleneck}
                onChange={handleChange("bottleneck")}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                rows={3}
                required
              />
            </div>
            <div>
              <label htmlFor="long-term" className="block text-sm font-semibold mb-2">
                Are you looking for a long term content partnership (Yes, No)
              </label>
              <select
                id="long-term"
                value={form.longTerm}
                onChange={(event) => setForm((prev) => ({ ...prev, longTerm: event.target.value }))}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black bg-white"
                required
              >
                <option value="" disabled>
                  Select one
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
             <div>
               <label htmlFor="email" className="block text-sm font-semibold mb-2">
                 Email address
               </label>
               <input
                 id="email"
                 type="email"
                 value={form.email}
                 onChange={handleChange("email")}
                 className="w-full rounded-xl border border-gray-200 px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-black"
                 required
               />
             </div>
             <button
               type="submit"
              className="w-full rounded-xl bg-black px-6 py-3 text-white font-semibold hover:bg-gray-900 transition-colors disabled:opacity-60"
              disabled={status === "loading"}
             >
              {status === "loading" ? "Submitting..." : "Submit application"}
             </button>
            {message ? (
              <p
                className={`text-sm ${status === "success" ? "text-green-600" : "text-red-600"}`}
                role="status"
              >
                {message}
              </p>
            ) : null}
           </form>
         </div>
       </section>
     </main>
   );
 }
