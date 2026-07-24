/**
 * Seed Grow Like You Mean It course in Firestore.
 * Run with: npm run seed:grow-like-you-mean-it
 */

import { config } from "dotenv";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { GROW_LIKE_YOU_MEAN_IT } from "../lib/courses/grow-like-you-mean-it";

config({ path: ".env.local" });

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

const db = getFirestore();

async function seedGrowLikeYouMeanIt() {
  const { id, title, description, stripePriceId, totalLessons, selfPaced, priceAmount, priceCurrency } =
    GROW_LIKE_YOU_MEAN_IT;

  console.log(`\nSeeding course: ${title}\n`);

  const courseRef = db.collection("courses").doc(id);
  await courseRef.set(
    {
      title,
      description,
      totalWeeks: totalLessons,
      stripePriceId,
      selfPaced,
      priceAmount,
      priceCurrency,
      published: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    { merge: true }
  );

  console.log(`✅ Course document upserted: ${id}`);

  const existingWeeks = await db
    .collection("courseWeeks")
    .where("courseId", "==", id)
    .get();

  if (!existingWeeks.empty) {
    console.log(`ℹ️  Found ${existingWeeks.size} existing lessons. Updating templates only where missing.`);
  }

  for (let lessonNumber = 1; lessonNumber <= totalLessons; lessonNumber++) {
    const existing = existingWeeks.docs.find(
      (doc) => doc.data().weekNumber === lessonNumber
    );

    if (existing) {
      console.log(`↪︎ Lesson ${lessonNumber} already exists (${existing.id})`);
      continue;
    }

    const lessonRef = db.collection("courseWeeks").doc();
    await lessonRef.set({
      courseId: id,
      weekNumber: lessonNumber,
      title: `Lesson ${lessonNumber}`,
      description: "Add your lesson description in the admin or Firebase console.",
      videoUrl: "",
      videoId: "",
      content: `<h2>Lesson ${lessonNumber}</h2><p>Add your lesson notes and resources here.</p>`,
      resources: [],
      unlocked: true,
    });

    console.log(`✅ Lesson ${lessonNumber} created (${lessonRef.id})`);
  }

  console.log("\n🎉 Grow Like You Mean It course seed complete.");
  console.log(`Sales page: https://westrosemedia.com${GROW_LIKE_YOU_MEAN_IT.salesPath}`);
  console.log(`Course hub: https://westrosemedia.com${GROW_LIKE_YOU_MEAN_IT.coursePath}\n`);
}

seedGrowLikeYouMeanIt().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
