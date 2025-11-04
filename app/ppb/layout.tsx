import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Powerful Personal Brand Program | Build Your Legacy & Amplify Your Voice | West Rose Media",
  description: "Build your legacy, amplify your voice, and become iconic. A step-by-step program for ambitious women and nonbinary leaders ready to launch podcasts, publish books, deliver TED Talks, and step onto the biggest stages. Transform your personal brand with Stephanie Rose.",
  keywords: "powerful personal brand, personal branding program, brand building course, personal brand strategy, TED Talk preparation, podcast launch, book publishing, keynote speaking, brand visibility, personal brand framework, Stephanie Rose, West Rose Media, brand legacy building, personal brand development",
  authors: [{ name: "Stephanie Rose", url: "https://westrosemedia.com" }],
  creator: "Stephanie Rose",
  publisher: "West Rose Media",
  metadataBase: new URL('https://westrosemedia.com'),
  alternates: {
    canonical: '/ppb',
  },
  openGraph: {
    title: "Powerful Personal Brand Program | Build Your Legacy & Amplify Your Voice",
    description: "Build your legacy, amplify your voice, and become iconic. A step-by-step program for ambitious leaders ready to launch podcasts, publish books, deliver TED Talks, and step onto the biggest stages.",
    url: 'https://westrosemedia.com/ppb',
    siteName: 'West Rose Media',
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Powerful Personal Brand Program | Build Your Legacy & Amplify Your Voice',
    description: 'Build your legacy, amplify your voice, and become iconic. A step-by-step program for ambitious leaders ready to launch podcasts, publish books, and deliver TED Talks.',
    creator: '@westrosemedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function PPBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

