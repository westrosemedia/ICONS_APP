import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICONS by West Rose Media | Podcast",
  description: "Listen to the latest episodes from ICONS by West Rose Media podcast featuring conversations about branding, business, and building iconic brands.",
  keywords: "ICONS podcast, business podcast, branding podcast, entrepreneur podcast, West Rose Media podcast",
  openGraph: {
    title: "ICONS by West Rose Media | Podcast",
    description: "Listen to the latest episodes from ICONS by West Rose Media podcast featuring conversations about branding, business, and building iconic brands.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICONS by West Rose Media | Podcast",
    description: "Listen to the latest episodes from ICONS by West Rose Media podcast featuring conversations about branding, business, and building iconic brands.",
  },
};

export default function PodcastPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding border-b border-gray-200">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-hero mb-6">
              ICONS by West Rose Media
            </h1>
            <p className="text-large text-gray-600 max-w-2xl mx-auto">
              Listen to conversations about branding, business, and building iconic brands.
            </p>
          </div>
        </div>
      </section>

      {/* Podcast Player Section */}
      <section className="section-padding">
        <div className="container-elegant">
          <div className="max-w-4xl mx-auto">
            <div className="w-full mb-8 rounded-lg overflow-hidden shadow-sm" style={{ height: "200px" }}>
              <iframe
                style={{ width: "100%", height: "200px", border: "none" }}
                frameBorder="0"
                scrolling="no"
                allow="clipboard-write"
                seamless
                src="https://player.captivate.fm/show/04e67684-d3b9-4e5b-a75a-c0919acaf7d4/latest/"
                title="ICONS by West Rose Media Podcast Player"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

