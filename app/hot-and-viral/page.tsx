import type { Metadata } from "next";
import HotAndViralPage from "@/components/hot-and-viral/HotAndViralPage";
import { HERO_IMAGE, copy, parsePreview } from "@/lib/hotAndViral";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: copy.meta.title,
  description: copy.meta.description,
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: { canonical: "/hot-and-viral" },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: "https://westrosemedia.com/hot-and-viral",
    siteName: "West Rose Media",
    type: "website",
    images: [
      {
        url: HERO_IMAGE.src,
        width: HERO_IMAGE.width,
        height: HERO_IMAGE.height,
        alt: HERO_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.meta.title,
    description: copy.meta.description,
    images: [HERO_IMAGE.src],
  },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ preview?: string | string[] }>;
}) {
  const params = await searchParams;
  const raw = Array.isArray(params.preview) ? params.preview[0] : params.preview;

  return <HotAndViralPage preview={parsePreview(raw)} initialNowMs={Date.now()} />;
}
