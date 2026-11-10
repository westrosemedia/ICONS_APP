import Link from "next/link";
import MobileNavigation from "@/components/MobileNavigation";
import PrimaryNav from "@/components/PrimaryNav";
import { PHOTO_GALLERIES_URL } from "@/lib/siteNav";

const SHOW_NAV = true;

export default function SiteHeader() {
  if (!SHOW_NAV) return null;

  return (
    <header className="sticky top-0 z-40 h-header overflow-visible border-b border-black/10 bg-paper text-black">
      <div className="container-elegant flex h-full items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="h-4 w-px bg-accent" aria-hidden="true" />
          <span className="font-heading text-[1.45rem] font-medium leading-none tracking-[-0.02em] text-black sm:text-[1.65rem]">
            West Rose Media
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <nav aria-label="Primary">
            <PrimaryNav className="flex items-center gap-5 xl:gap-7" />
          </nav>
          <a href={PHOTO_GALLERIES_URL} target="_blank" rel="noopener noreferrer" className="nav-button shrink-0">
            View Photo Galleries
          </a>
        </div>

        <MobileNavigation />
      </div>
    </header>
  );
}
