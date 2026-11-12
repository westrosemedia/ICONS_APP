/**
 * Shared homepage styles. Apply only on the homepage sections that name them.
 * Desktop is the lg breakpoint (1024px), the same step the homepage uses for its desktop layout.
 * Fonts already on the branch: Bodoni Moda is --font-wrm-display, DM Sans is --font-dm-sans.
 *
 * homeSectionContainer — max-width 1200px, centered, side padding 24px mobile / 64px desktop
 * homeSectionPadding — padding 80px top and bottom on mobile, 128px on desktop
 * homeEyebrow — DM Sans, 12px, uppercase, letter-spacing 0.15em
 * homeEyebrowOnDark — eyebrow in #CCCCCE
 * homeEyebrowOnLight — eyebrow in #404042
 * homeSectionHeading — Bodoni Moda, 36px mobile / 56px desktop
 * homeBody — DM Sans, 16px
 */

export const homeSectionContainer = "mx-auto w-full max-w-[1200px] px-[24px] lg:px-[64px]";

export const homeSectionPadding = "py-[80px] lg:py-[128px]";

export const homeEyebrow =
  "font-[family-name:var(--font-dm-sans)] text-[12px] uppercase tracking-[0.15em]";

export const homeEyebrowOnDark = `${homeEyebrow} text-[#CCCCCE]`;

export const homeEyebrowOnLight = `${homeEyebrow} text-[#404042]`;

export const homeSectionHeading =
  "font-[family-name:var(--font-wrm-display)] text-[36px] lg:text-[56px]";

export const homeBody = "font-[family-name:var(--font-dm-sans)] text-[16px]";
