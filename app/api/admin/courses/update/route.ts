import { NextRequest, NextResponse } from "next/server";

// Make this route dynamic to avoid build-time execution
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, title, description, totalWeeks, stripeProductId, stripePriceId, published } = body;

    // Validate required fields
    if (!id || !title || !description) {
      return NextResponse.json(
        { error: "Missing required fields: id, title, description" },
        { status: 400 }
      );
    }

    // Initialize Firebase Admin
    const { initializeApp, cert, getApps } = await import("firebase-admin/app");
    const { getFirestore, Timestamp } = await import("firebase-admin/firestore");

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
    const courseRef = db.collection("courses").doc(id);

    // Check if course exists
    const existingDoc = await courseRef.get();
    if (!existingDoc.exists) {
      return NextResponse.json(
        { error: "Course not found" },
        { status: 404 }
      );
    }

    // Update course document
    await courseRef.update({
      title,
      description,
      totalWeeks: totalWeeks || 16,
      stripeProductId: stripeProductId || null,
      stripePriceId: stripePriceId || null,
      published: published !== undefined ? published : true,
      updatedAt: Timestamp.now(),
    });

    return NextResponse.json({
      success: true,
      message: "Course updated successfully",
      courseId: id,
    });
  } catch (error: any) {
    console.error("Error updating course:", error);
    return NextResponse.json(
      {
        error: "Failed to update course",
        message: error?.message || "Unknown error",
        code: error?.code,
      },
      { status: 500 }
    );
  }
}
