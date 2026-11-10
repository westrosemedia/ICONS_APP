import Link from "next/link";
import {
  agencyNav,
  GOOGLE_REVIEWS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  PHOTO_GALLERIES_URL,
  PUBLIC_EMAIL,
} from "@/lib/agency";

const social = [
  { label: "Instagram", href: "https://www.instagram.com/westrosemedia/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/stephanie-rose-7b007a22b/" },
  { label: "TikTok", href: "https://tiktok.com/@westrosemedia" },
  { label: "YouTube", href: "https://www.youtube.com/@westrosemedia" },
];

export default function AgencyFooter() {
  return (
    <footer className="bg-[#4A1828] text-[#E9E1D7]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-14 lg:py-20">
        <div className="lg:col-span-4">
          <p className="font-[family-name:var(--font-wrm-display)] text-4xl leading-none tracking-[-0.03em]">
            West Rose Media
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#E9E1D7]/80">
            A creative growth agency for brands ready to make a bigger impression. Based in Calgary.
          </p>
          <p className="mt-6 text-sm">
            <a href={PHONE_TEL} className="hover:text-white">
              {PHONE_DISPLAY}
            </a>
            <br />
            <a href={`mailto:${PUBLIC_EMAIL}`} className="hover:text-white">
              {PUBLIC_EMAIL}
            </a>
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#B7A38E]">Navigate</p>
          <ul className="mt-5 space-y-2 text-sm">
            {agencyNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#B7A38E]">Work with us</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <Link href="/icon" className="hover:text-white">
                ICON Brand Partnership
              </Link>
            </li>
            <li>
              <Link href="/coaching" className="hover:text-white">
                Private 1:1 Coaching
              </Link>
            </li>
            <li>
              <Link href="/hot-and-rich" className="hover:text-white">
                Hot & Rich
              </Link>
            </li>
            <li>
              <Link href="/mastermind" className="hover:text-white">
                Manifesting & Marketing
              </Link>
            </li>
            <li>
              <Link href="/hot-and-viral" className="hover:text-white">
                Hot & Viral
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#B7A38E]">Utility</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <Link href="/login" className="hover:text-white">
                Sign in
              </Link>
            </li>
            <li>
              <a href={PHOTO_GALLERIES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Photo galleries
              </a>
            </li>
            <li>
              <Link href="/cadence" className="hover:text-white">
                Cadence
              </Link>
            </li>
            <li>
              <Link href="/podcast" className="hover:text-white">
                Podcast
              </Link>
            </li>
            <li>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Google reviews
              </a>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#E9E1D7]/20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-5 py-6 text-[11px] uppercase tracking-[0.18em] text-[#E9E1D7]/70 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <p>© {new Date().getFullYear()} West Rose Media</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {social.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
