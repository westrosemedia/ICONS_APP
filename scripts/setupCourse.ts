/**
 * Course Setup Script
 * Run with: npx tsx scripts/setupCourse.ts
 * 
 * This script helps you set up your course in Firestore.
 * You'll need to fill in your course details and Stripe info.
 */

import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import * as readline from "readline";

// Initialize Firebase Admin
if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

const db = getFirestore();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query: string): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function setupCourse() {
  console.log("\n🎓 Course Setup Helper\n");
  console.log("Let's set up your course step by step.\n");

  // Get course details
  const courseId = await question("Course ID (e.g., 'powerful-personal-brand'): ");
  const title = await question("Course Title: ");
  const description = await question("Course Description: ");
  const stripeProductId = await question("Stripe Product ID (prod_xxxxx): ");
  const stripePriceId = await question("Stripe Price ID (price_xxxxx): ");

  // Create course document
  const courseRef = db.collection("courses").doc(courseId);
  await courseRef.set({
    title,
    description,
    totalWeeks: 16,
    stripeProductId,
    stripePriceId,
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  console.log(`\n✅ Course created: ${courseId}\n`);

  // Ask if they want to set up weeks now
  const setupWeeks = await question("Do you want to set up week templates now? (y/n): ");
  
  if (setupWeeks.toLowerCase() === 'y') {
    console.log("\n📝 Creating week templates...\n");
    
    for (let weekNum = 1; weekNum <= 16; weekNum++) {
      const weekRef = db.collection("courseWeeks").doc();
      await weekRef.set({
        courseId,
        weekNumber: weekNum,
        title: `Week ${weekNum}: [Your Week Title]`,
        description: "[Your week description]",
        videoUrl: "[Your YouTube URL]",
        videoId: "[Will be auto-extracted]",
        content: `<h2>Week ${weekNum} Content</h2><p>Add your content here...</p>`,
        resources: [],
        unlocked: weekNum === 1, // Only week 1 is unlocked initially
      });
      
      console.log(`✅ Week ${weekNum} template created`);
    }
    
    console.log("\n✨ All week templates created!");
    console.log("\n📋 Next steps:");
    console.log("1. Go to Firebase Console → Firestore");
    console.log("2. Open the 'courseWeeks' collection");
    console.log("3. Edit each week with your:");
    console.log("   - Week title");
    console.log("   - Description");
    console.log("   - YouTube video URL");
    console.log("   - Content (HTML)");
    console.log("\n💡 Tip: The videoId will be extracted automatically from the YouTube URL");
  }

  console.log("\n🎉 Course setup complete!\n");
  rl.close();
}

setupCourse().catch(console.error);

