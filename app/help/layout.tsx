import type { Metadata } from "next";

const base =
  process.env.NEXT_PUBLIC_SITE_URL ?
    new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("https://westrosemedia.com");

export const metadata: Metadata = {
  metadataBase: base,
  title: { default: "Cadence Help Center", template: "%s | Cadence Help" },
  description: "Documentation and guides for Cadence social media scheduling.",
  openGraph: {
    siteName: "Cadence Help",
    type: "website",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Cadence" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-default.png"],
  },
};

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <a
        href="#help-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg"
      >
        Skip to help content
      </a>
      {children}
    </div>
  );
}
