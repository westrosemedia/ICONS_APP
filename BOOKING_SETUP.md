# ICONS_APP Booking System Setup Guide

This guide will help you set up the new booking and payment flow for ICONS_APP.

## Environment Variables Required

Create a `.env.local` file in your project root with the following variables:

### Firebase Configuration
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

### Stripe Configuration
```
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

### Stripe Price IDs
Create these products and prices in your Stripe dashboard (in CAD):

```
STRIPE_PRICE_SPOTLIGHT_ONE_TIME=price_your_spotlight_price_id
STRIPE_PRICE_LITE_SUBSCRIPTION_MONTHLY_2400=price_your_lite_subscription_price_id
STRIPE_PRICE_IMMERSION_BASE_ONE_TIME=price_your_immersion_base_price_id
STRIPE_PRICE_IMMERSION_PARTICIPANT_ADDON_1000=price_your_participant_addon_price_id
STRIPE_PRICE_ICON_ONE_TIME=price_your_icon_price_id
```

### Calendar Integration
```
NEXT_PUBLIC_CAL_CALGARY=https://cal.com/your_calgary_calendar
NEXT_PUBLIC_CAL_VANCOUVER=https://cal.com/your_vancouver_calendar
NEXT_PUBLIC_CAL_TORONTO=https://cal.com/your_toronto_calendar
```

### App Configuration
```
NEXT_PUBLIC_BASE_URL=// app/book/wrm_lite/page.tsx
"use client";

import { useState } from "react";
import { wrmLiteCopy } from "@/content/wrmLite";
import { createBookingAndCheckout } from "./actions";

type FormState = {
  fullName: string;
  email: string;
  instagram: string;
  businessUrl: string;
  niche: string;
  revenueRange: string;
  topPlatforms: string[];
  approvalWorkflow: string;
  billingEmail: string;
  notes?: string;
};

export default function WRMLitePage() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    instagram: "",
    businessUrl: "",
    niche: "",
    revenueRange: "",
    topPlatforms: [],
    approvalWorkflow: "",
    billingEmail: "",
    notes: ""
  });

  const togglePlatform = (p: string) => {
    setForm(prev => {
      const set = new Set(prev.topPlatforms);
      if (set.has(p)) set.delete(p);
      else set.add(p);
      return { ...prev, topPlatforms: Array.from(set) };
    });
  };

  const submit = async () => {
    setSubmitting(true);
    try {
      const { url } = await createBookingAndCheckout({
        pkg: "wrm_lite",
        intake: form
      });
      window.location.href = url;
    } catch (e) {
      console.error(e);
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">{wrmLiteCopy.heroTitle}</h1>
        <p className="mt-2 text-lg text-neutral-600">{wrmLiteCopy.heroSubtitle}</p>
      </header>

      <section className="mt-8 space-y-5 text-lg leading-8">
        <p>{wrmLiteCopy.intro}</p>
        <p>{wrmLiteCopy.bigPromise}</p>
      </section>

      <section className="mt-10 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl font-semibold">{wrmLiteCopy.bulletsTitle}</h2>
          <ul className="mt-4 space-y-3 list-disc pl-6">
            {wrmLiteCopy.bullets.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6">{wrmLiteCopy.delivery}</p>
          <p className="mt-4">{wrmLiteCopy.beliefShift}</p>
          <div className="mt-6 p-4 rounded-xl bg-neutral-50">
            <p className="font-medium">{wrmLiteCopy.priceLine}</p>
            <p className="text-sm text-neutral-600 mt-1">{wrmLiteCopy.scarcity}</p>
          </div>
        </div>

        <aside className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold">Start your intake</h3>
          <div className="mt-4 space-y-3">
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Full name"
              value={form.fullName}
              onChange={e => setForm({ ...form, fullName: e.target.value })}
            />
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Instagram"
              value={form.instagram}
              onChange={e => setForm({ ...form, instagram: e.target.value })}
            />
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Business URL"
              value={form.businessUrl}
              onChange={e => setForm({ ...form, businessUrl: e.target.value })}
            />
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Niche"
              value={form.niche}
              onChange={e => setForm({ ...form, niche: e.target.value })}
            />
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Current monthly revenue range"
              value={form.revenueRange}
              onChange={e => setForm({ ...form, revenueRange: e.target.value })}
            />

            <div className="pt-2">
              <p className="text-sm font-medium">Top platforms</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Instagram", "Facebook", "TikTok", "LinkedIn"].map(p => {
                  const active = form.topPlatforms.includes(p);
                  return (
                    <button
                      key={p}
                      type="button"
                      onClick={() => togglePlatform(p)}
                      className={`px-3 py-1 rounded-full border ${active ? "bg-black text-white" : "bg-white"}`}
                    >
                      {p}
                    </button>
                  );
                })}
              </div>
            </div>

            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Approval workflow"
              value={form.approvalWorkflow}
              onChange={e => setForm({ ...form, approvalWorkflow: e.target.value })}
            />
            <input
              className="w-full border rounded px-3 py-2"
              placeholder="Billing email"
              value={form.billingEmail}
              onChange={e => setForm({ ...form, billingEmail: e.target.value })}
            />
            <textarea
              className="w-full border rounded px-3 py-2"
              placeholder="Notes"
              rows={3}
              value={form.notes}
              onChange={e => setForm({ ...form, notes: e.target.value })}
            />
          </div>

          <button
            onClick={submit}
            disabled={submitting}
            className="mt-4 w-full rounded-xl bg-black text-white py-3 font-semibold"
          >
            {submitting ? "Redirecting" : wrmLiteCopy.ctaLabel}
          </button>

          <p className="mt-3 text-xs text-neutral-500">
            Two thousand four hundred CAD per month. GST included.
          </p>
        </aside>
      </section>
    </div>
  );
}
http://localhost:3000
```

## Stripe Setup Instructions

### 1. Create Products
In your Stripe dashboard, create the following products:

- **Spotlight Package** - One-time payment
- **WRM Lite Package** - Subscription (monthly)
- **Immersion Package** - One-time payment
- **ICON Package** - One-time payment

### 2. Create Prices
For each product, create the appropriate price:

- **Spotlight**: One-time price (set your desired amount in CAD)
- **Lite**: Recurring price at 2400 CAD/month
- **Immersion**: One-time price (set your desired amount in CAD)
- **ICON**: One-time price (set your desired amount in CAD)
- **Participant Add-on**: One-time price at 1000 CAD (for Immersion package)

### 3. Configure Webhooks
Set up a webhook endpoint at `/api/stripe/webhook` with these events:
- `checkout.session.completed`
- `invoice.payment_succeeded`
- `customer.subscription.created`

## Firestore Setup

### 1. Collections Structure
The system expects these collections:

#### `packages`
```typescript
{
  id: string,
  name: string,
  type: "one_time" | "subscription" | "event",
  basePrice: number, // in cents
  stripePriceId?: string,
  calendars?: {
    calgary?: string,
    vancouver?: string,
    toronto?: string
  },
  options?: {
    participantPrice?: number,
    maxParticipants?: number,
    addOnImagePrice?: number
  },
  description: string,
  includes: string[],
  cta: string,
  active: boolean
}
```

#### `bookings`
```typescript
{
  id: string,
  packageId: string,
  status: "draft" | "pending_payment" | "paid" | "canceled",
  customer: {
    name: string,
    email: string,
    phone: string,
    company: string,
    instagram: string,
    tiktok: string,
    website: string
  },
  details: {
    // Package-specific fields
  },
  pricing: {
    subtotal: number,
    gst: number,
    total: number,
    currency: "CAD",
    descriptor: string
  },
  stripe: {
    checkoutSessionId?: string,
    customerId?: string,
    paymentIntentId?: string,
    priceId?: string
  },
  timestamps: {
    createdAt: Date,
    updatedAt: Date
  }
}
```

### 2. Sample Package Data
You can manually create packages in Firestore or use the fallback data in the code.

## Testing the System

### 1. Local Development
```bash
npm run dev
```

### 2. Test Flow
1. Navigate to `/packages`
2. Click "Secure your date" on any package
3. Fill out the booking form
4. Submit to create a draft booking
5. Redirect to Stripe Checkout
6. Complete payment (use test card: 4242 4242 4242 4242)
7. Return to success page

### 3. Test Cards
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Requires Authentication**: 4000 0025 0000 3155

## Troubleshooting

### Common Issues

1. **Firebase Connection**: Ensure your Firebase config is correct
2. **Stripe Keys**: Verify your Stripe keys are for the correct environment (test/live)
3. **Webhook Endpoint**: Make sure your webhook URL is accessible from Stripe
4. **Price IDs**: Ensure all Stripe price IDs are valid and in CAD

### Debug Mode
Check the browser console and server logs for detailed error messages.

## Production Deployment

1. Update environment variables for production
2. Set up production Stripe account
3. Configure production Firebase project
4. Update webhook endpoints
5. Test complete flow in production environment

## Support

If you encounter issues:
1. Check the console logs
2. Verify all environment variables are set
3. Ensure Stripe webhooks are configured correctly
4. Check Firestore security rules allow read/write access
