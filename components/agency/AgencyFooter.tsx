import Link from "next/link";
import { homeSectionContainer } from "@/components/home/homeStyles";
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

const offerLinks = [
  { href: "/icon", label: "ICON Brand Partnership" },
  { href: "/coaching", label: "Private 1:1 Coaching" },
  { href: "/hot-and-rich", label: "Hot & Rich" },
  { href: "/mastermind", label: "Manifesting & Marketing" },
  { href: "/hot-and-viral", label: "Hot & Viral" },
];

export default function AgencyFooter() {
  return (
    <footer className="border-t border-[#CCCCCE]/15 bg-[#020405] text-[#CCCCCE]">
      <div className={`${homeSectionContainer} flex flex-col lg:min-h-[400px] lg:justify-between`}>
        <div className="grid gap-10 py-6 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="font-[family-name:var(--font-wrm-display)] text-4xl leading-none tracking-[-0.03em]">
              West Rose Media
            </p>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-[#CCCCCE]/80">
              A brand and content studio based in Calgary.
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

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm leading-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#916545]">Navigate</p>
              <ul className="mt-3 space-y-0.5">
                {agencyNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#916545]">Work with us</p>
              <ul className="mt-3 space-y-0.5">
                {offerLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-[#916545]">Utility</p>
              <ul className="mt-3 space-y-0.5">
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
              <ul className="mt-4 space-y-0.5">
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
        </div>

        <p className="border-t border-[#CCCCCE]/15 py-3 text-[11px] uppercase tracking-[0.18em] text-[#CCCCCE]/70">
          © {new Date().getFullYear()} West Rose Media
        </p>
      </div>
    </footer>
  );
}
