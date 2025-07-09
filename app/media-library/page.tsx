"use client";

import React, { useEffect, useState } from "react";
import { auth, storage, db } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import MediaGrid from "../../components/media/MediaGrid";

function getFileType(filename: string): "image" | "video" {
  const ext = filename.split(".").pop()?.toLowerCase();
  if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext || "")) return "image";
  if (["mp4", "mov", "webm", "avi", "mkv"].includes(ext || "")) return "video";
  return "image";
}

export default function MediaLibraryPage() {
  const [uid, setUid] = useState<string | null>(null);
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
        return;
      }
      setUid(user.uid);
    });
    return () => unsub();
  }, [router]);

  useEffect(() => {
    if (!uid) return;
    const fetchMedia = async () => {
      setLoading(true);
      try {
        const folderRef = ref(storage, `mediaLibrary/${uid}`);
        const res = await listAll(folderRef);
        const files = await Promise.all(
          res.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            // Try to get Firestore metadata (optional enhancement)
            let paid = false;
            let date = "";
            let filename = itemRef.name;
            try {
              const metaDoc = await getDoc(doc(db, `mediaLibrary/${uid}/${itemRef.name}`));
              if (metaDoc.exists()) {
                paid = !!metaDoc.data().paid;
                date = metaDoc.data().date || "";
                filename = metaDoc.data().filename || itemRef.name;
              }
            } catch {}
            // Fallback: use itemRef.name and no paid/date
            return {
              url,
              filename,
              date: date || new Date(itemRef.name.split("_")[0] * 1).toLocaleString() || "",
              type: getFileType(itemRef.name),
              paid,
              onDownload: () => window.open(url, "_blank"),
            };
          })
        );
        setMedia(files);
      } catch (err) {
        setMedia([]);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, [uid]);

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">Media Library</h1>
        <MediaGrid media={media} loading={loading} />
      </div>
    </main>
  );
} 