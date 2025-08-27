import "./globals.css";
import type { ReactNode } from "react";
import Image from "next/image";
import Button from "../components/Button";
import ServiceWorkerRegistration from "../components/ServiceWorkerRegistration";
import ErrorBoundary from "../components/ErrorBoundary";
import AccessibilityAudit from "../components/AccessibilityAudit";
import PerformanceMonitor from "../components/PerformanceMonitor";

export const metadata = {
  title: "ICONS by West Rose Media",
  description: "Your journey to becoming iconic starts here. Professional content creation and community for bold entrepreneurs.",
  keywords: "content creation, photography, videography, branding, entrepreneurship, business, professional, luxury",
  authors: [{ name: "West Rose Media" }],
  creator: "West Rose Media",
  publisher: "West Rose Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://icons.westrosemedia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ICONS by West Rose Media",
    description: "Your journey to becoming iconic starts here. Professional content creation and community for bold entrepreneurs.",
    url: 'https://icons.westrosemedia.com',
    siteName: 'ICONS',
    images: [
      {
        url: '/logo-512.png',
        width: 512,
        height: 512,
        alt: 'ICONS App Logo',
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ICONS by West Rose Media",
    description: "Your journey to becoming iconic starts here. Professional content creation and community for bold entrepreneurs.",
    images: ['/logo-512.png'],
  },
  icons: {
    icon: [
      { url: '/logo-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/logo-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ICONS',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'ICONS',
    'application-name': 'ICONS',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
};

function AppLogo() {
  return (
    <div className="flex items-center gap-2">
      <span className="block dark:hidden">
        <Image src="/logo.png" alt="West Rose Media Logo" width={40} height={40} priority />
      </span>
      <span className="hidden dark:block">
        <Image src="/logo-inverse.png" alt="West Rose Media Logo (inverse)" width={40} height={40} priority />
      </span>
      <span className="font-heading text-xl font-bold tracking-tight text-primary">ICONS_APP</span>
    </div>
  );
}

function AppErrorBoundary({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 font-sans dark:bg-black dark:text-white">
        <ServiceWorkerRegistration />
        <ErrorBoundary>
          <AppErrorBoundary>
            <header className="w-full px-4 py-3 border-b flex items-center justify-between bg-white dark:bg-black sticky top-0 z-20">
              <AppLogo />
            </header>
            <main className="w-full mx-auto max-w-7xl px-2 sm:px-4 py-6">
              <div className="p-8 border border-dashed border-gray-400">
                {children}
              </div>
            </main>
            <AccessibilityAudit />
            <PerformanceMonitor />
          </AppErrorBoundary>
        </ErrorBoundary>
      </body>
    </html>
  );
}
