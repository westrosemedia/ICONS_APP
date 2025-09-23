import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync("serviceAccount.json", "utf-8"));

if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount as any),
  });
}

const db = getFirestore();

async function run() {
  const packages = [
    {
      id: "spotlight",
      name: "Spotlight",
      type: "one_time",
      basePrice: 120000, // $1,200 CAD in cents
      active: true,
      description: "Professional photo and video content creation with city-specific availability",
      includes: [
        "Professional photo and video content",
        "City-specific availability (Calgary, Vancouver, Toronto)",
        "Photos delivered in 1 week",
        "Videos delivered in 10 days",
        "Additional images available at 35 CAD each (post-shoot add-on)"
      ],
      cta: "Secure your date",
      options: { addOnImagePrice: 3500 },
      calendars: {
        calgary: "https://cal.com/embed/calgary",
        vancouver: "https://cal.com/embed/vancouver",
        toronto: "https://cal.com/embed/toronto",
      },
    },
    {
      id: "lite",
      name: "WRM Lite",
      type: "subscription",
      basePrice: 240000,
      active: true,
      description: "Your monthly partner in visibility. We take the weight of content off your shoulders and replace it with a system that keeps you top of mind and in demand.",
      includes: [
        "Two posts each week created, written, and scheduled for you",
        "A monthly strategy call that aligns content to your revenue goals",
        "Fresh footage captured every other month so your visuals never go stale",
        "Photos delivered in 1 week",
        "Videos delivered in 10 days"
      ],
      cta: "Start WRM Lite",
    },
    {
      id: "immersion",
      name: "Immersion",
      type: "event",
      basePrice: 600000, // $6,000 CAD in cents
      active: true,
      description: "Two day capture for launches and events. Immersion turns your event into a library of assets that sell for months.",
      includes: [
        "Full coverage for the organizer and the event",
        "Participant content available at one thousand CAD per person",
        "Maximum ten participants over two days",
        "For groups over four people we include two shooters",
        "Organizer photos in one week. Organizer videos in ten days. Participant deliveries follow the same schedule."
      ],
      cta: "Book Immersion",
      options: { participantPrice: 100000, maxParticipants: 10 },
    },
    {
      id: "icon",
      name: "ICON",
      type: "subscription",
      basePrice: 600000, // $6,000 CAD in cents
      active: true,
      description: "White glove brand partnership. ICON turns your brand into a signal. Clear. Confident. Everywhere your clients look.",
      includes: [
        "Monthly strategy intensives and a working roadmap",
        "Full content execution with a trusted thought partner",
        "Publishing and analytics that drive real decisions",
        "Free access to ICON Society while you are active"
      ],
      cta: "Apply for ICON",
    },
  ];

  for (const p of packages) {
    await db.collection("packages").doc(p.id).set(p, { merge: true });
    console.log(`Seeded: ${p.name}`);
  }

  console.log("✅ Seeding complete");
}

run().catch(err => {
  console.error("Seeding failed", err);
  process.exit(1);
});
