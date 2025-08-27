import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
});

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  const { amount, paymentType, uid } = req.body;
  if (!amount || !paymentType || !uid) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: paymentType,
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payments/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payments/cancel`,
      metadata: {
        uid,
        paymentType,
      },
    });
    // Store transaction in Firestore
    const paymentId = session.id;
    await setDoc(doc(db, `payments/${uid}/${paymentId}`), {
      paymentType,
      amount,
      success: false, // Will update via webhook in production
      timestamp: serverTimestamp(),
      stripeSessionId: session.id,
    });
    res.status(200).json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: "Stripe session creation failed" });
  }
} 