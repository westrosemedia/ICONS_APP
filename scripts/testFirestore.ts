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

async function test() {
  try {
    console.log("🔍 Testing Firestore connection...");
    console.log("Project ID:", serviceAccount.project_id);
    
    // Try to list collections (this will fail if database doesn't exist)
    const collections = await db.listCollections();
    console.log("✅ Firestore connection successful!");
    console.log("Collections found:", collections.length);
    
    for (const collection of collections) {
      console.log(`  - ${collection.id}`);
    }
    
  } catch (error: any) {
    console.error("❌ Firestore connection failed:", error.message);
    
    if (error.code === 5) {
      console.log("\n💡 This usually means:");
      console.log("   1. Firestore database hasn't been created yet");
      console.log("   2. Go to Firebase Console → Firestore → Create Database");
      console.log("   3. Choose 'Start in test mode' for now");
    }
  }
}

test();

