export interface Customer {
  name: string;
  email: string;
  phone: string;
  company: string;
  instagram: string;
  tiktok: string;
  website: string;
}

export interface BookingDetails {
  city?: "Calgary" | "Vancouver" | "Toronto" | "Other";
  requestedDate?: string;
  eventLocation?: string;
  teamSize?: number;
  participants?: number;
  goals: string;
  brandStyle: string;
  deliverablesFocus: "photo" | "video" | "both";
  accessibilityNeeds?: string;
  notes?: string;
  acceptsTerms: boolean;
  // Spotlight specific
  preferredNeighborhood?: string;
  // Lite specific
  monthlyBillingConfirmed?: boolean;
  firstShootWindow?: string;
  // Immersion specific
  eventDates?: string;
  expectedHeadcount?: number;
}

export interface Pricing {
  subtotal: number;     // in cents
  gst: number;          // 5 percent
  total: number;
  currency: "CAD";
  descriptor: string;   // human readable breakdown
}

export interface StripeData {
  checkoutSessionId?: string;
  customerId?: string;
  paymentIntentId?: string;
  priceId?: string;
}

export interface Booking {
  id: string;
  packageId: string;
  status: "draft" | "pending_payment" | "paid" | "canceled";
  customer: Customer;
  details: BookingDetails;
  pricing: Pricing;
  stripe: StripeData;
  timestamps: {
    createdAt: Date;
    updatedAt: Date;
  };
}
