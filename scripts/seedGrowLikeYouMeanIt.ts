/**
 * Seed Grow Like You Mean It course in Firestore.
 * Run with: npm run seed:grow-like-you-mean-it
 *
 * CORE_LESSONS = regular course videos (add new ones here).
 * BONUS_LESSON is always appended last, no matter how many core lessons exist.
 */

import { config } from "dotenv";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { GROW_LIKE_YOU_MEAN_IT } from "../lib/courses/grow-like-you-mean-it";

/** Add new course videos here. The bonus is always kept last. */
const CORE_LESSONS = [
  {
    title: "Welcome",
    description: "Start here.",
    videoUrl: "https://www.youtube.com/watch?v=BOoXl-KJlic",
    videoId: "BOoXl-KJlic",
    content: "<h2>Welcome</h2><p>Welcome to Grow Like You Mean It.</p>",
  },
  {
    title: "Instagram and TikTok Basics",
    description: "The foundations of Instagram and TikTok.",
    videoUrl: "https://www.youtube.com/watch?v=JKvKy5TRvu4",
    videoId: "JKvKy5TRvu4",
    content:
      "<h2>Instagram and TikTok Basics</h2><p>Watch the video above to continue.</p>",
  },
  {
    title: "Posting Basics",
    description: "The essentials of posting with intention.",
    videoUrl: "https://www.youtube.com/watch?v=pfLfWS4oIt0",
    videoId: "pfLfWS4oIt0",
    content: "<h2>Posting Basics</h2><p>Watch the video above to continue.</p>",
  },
  {
    title: "Filming B-Roll",
    description: "How to film B-roll that supports your content.",
    videoUrl: "https://www.youtube.com/watch?v=M8Yu7U9D3s4",
    videoId: "M8Yu7U9D3s4",
    content: "<h2>Filming B-Roll</h2><p>Watch the video above to continue.</p>",
  },
];

/** Always last — do not put this in CORE_LESSONS. */
const BONUS_LESSON = {
  title: "Bonus: Live Coaching & Social Media Strategy",
  description:
    "A live coaching call and social media strategy session to help you grow with clarity and intention.",
  videoUrl: "https://www.youtube.com/watch?v=oMaAmcwdLJg",
  videoId: "oMaAmcwdLJg",
  content:
    "<h2>Bonus: Live Coaching & Social Media Strategy</h2><p>Watch the live coaching call and social media strategy session above.</p>",
  isBonus: true,
};

function buildLessons() {
  const lessons = CORE_LESSONS.map((lesson, index) => ({
    ...lesson,
    weekNumber: index + 1,
    isBonus: false,
  }));

  lessons.push({
    ...BONUS_LESSON,
    weekNumber: lessons.length + 1,
  });

  return lessons;
}

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
  const { id, title, description, stripePriceId, selfPaced, priceAmount, priceCurrency, thumbnailUrl } =
    GROW_LIKE_YOU_MEAN_IT;
  const LESSONS = buildLessons();

  console.log(`\nSeeding course: ${title}\n`);

  const courseRef = db.collection("courses").doc(id);
  await courseRef.set(
    {
      title,
      description,
      totalWeeks: LESSONS.length,
      stripePriceId,
      selfPaced,
      priceAmount,
      priceCurrency,
      thumbnailUrl,
      published: true,
      updatedAt: new Date(),
    },
    { merge: true }
  );

  console.log(`✅ Course document upserted (${LESSONS.length} lessons, bonus last)`);

  const existingWeeks = await db
    .collection("courseWeeks")
    .where("courseId", "==", id)
    .get();

  const keepVideoIds = new Set(LESSONS.map((lesson) => lesson.videoId));

  for (const doc of existingWeeks.docs) {
    const videoId = doc.data().videoId;
    if (!keepVideoIds.has(videoId)) {
      await doc.ref.delete();
      console.log(`🗑️  Removed unused lesson (${doc.id})`);
    }
  }

  for (const lesson of LESSONS) {
    const existing = existingWeeks.docs.find(
      (doc) => doc.data().videoId === lesson.videoId
    );

    const payload = {
      courseId: id,
      weekNumber: lesson.weekNumber,
      title: lesson.title,
      description: lesson.description,
      videoUrl: lesson.videoUrl,
      videoId: lesson.videoId,
      content: lesson.content,
      resources: [],
      unlocked: true,
      isBonus: !!lesson.isBonus,
    };

    if (existing) {
      await existing.ref.set(payload, { merge: true });
      console.log(
        `✅ Lesson ${lesson.weekNumber} updated: ${lesson.title}${lesson.isBonus ? " (bonus)" : ""}`
      );
      continue;
    }

    const lessonRef = db.collection("courseWeeks").doc();
    await lessonRef.set(payload);
    console.log(
      `✅ Lesson ${lesson.weekNumber} created: ${lesson.title}${lesson.isBonus ? " (bonus)" : ""}`
    );
  }

  console.log("\n🎉 Grow Like You Mean It course seed complete.");
  console.log(`Sales page: https://westrosemedia.com${GROW_LIKE_YOU_MEAN_IT.salesPath}`);
  console.log(`Course hub: https://westrosemedia.com${GROW_LIKE_YOU_MEAN_IT.coursePath}\n`);
}

seedGrowLikeYouMeanIt().catch((error) => {
  console.error("Seed failed:", error);
  process.exit(1);
});
