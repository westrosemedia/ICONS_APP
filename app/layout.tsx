import "./globals.css";
import type { ReactNode } from "react";
import Image from "next/image";

export const metadata = {
  title: "ICONS_APP | Branding Platform",
  description: "Manage branding content, contracts, payments, and more.",
  icons: {
    icon: "/logo.png",
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

function ErrorBoundary({ children }: { children: ReactNode }) {
  // Simple error boundary placeholder
  return <>{children}</>;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/logo.png" />
        <title>ICONS_APP | Branding Platform</title>
      </head>
      <body className="min-h-screen bg-white text-gray-900 font-sans dark:bg-black dark:text-white">
        <ErrorBoundary>
          <header className="w-full px-4 py-3 border-b flex items-center justify-between bg-white dark:bg-black sticky top-0 z-20">
            <AppLogo />
          </header>
          <main className="w-full mx-auto max-w-7xl px-2 sm:px-4 py-6">{children}</main>
        </ErrorBoundary>
      </body>
    </html>
  );
} 