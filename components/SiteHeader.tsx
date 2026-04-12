import Link from "next/link";
import MobileNavigation from "@/components/MobileNavigation";
import WorkWithUsNav from "@/components/WorkWithUsNav";

const SHOW_NAV = true;

export default function SiteHeader() {
  if (!SHOW_NAV) return null;

  return (
    <header className="w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="container-elegant py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-elegant text-xl tracking-wide">West Rose Media</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/how-it-works" className="text-gray-600 hover:text-black transition-colors duration-200">
            How it works
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-black transition-colors duration-200">
            About
          </Link>
          <Link href="/packages" className="text-gray-600 hover:text-black transition-colors duration-200">
            Packages
          </Link>
          <Link href="/cadence" className="text-gray-600 hover:text-black transition-colors duration-200">
            Cadence
          </Link>
          <Link href="/mastermind" className="text-gray-600 hover:text-black transition-colors duration-200">
            Mastermind
          </Link>
          <Link href="/case-studies" className="text-gray-600 hover:text-black transition-colors duration-200">
            Case studies
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-black transition-colors duration-200">
            Blog
          </Link>
          <WorkWithUsNav />
        </nav>

        <MobileNavigation />
      </div>
    </header>
  );
}
