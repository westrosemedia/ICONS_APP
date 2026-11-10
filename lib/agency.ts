import { iconCopy } from "@/content/icon";
import { GOOGLE_REVIEWS_URL } from "@/lib/siteLinks";
import { STRATEGY_BOOK_URL } from "@/lib/workWithUsLinks";

/** Layout + facts for the redesigned public site. Hot & Viral is not in this system. */

export const FRAME = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-14";

export const PHONE_DISPLAY = "+1 (587) 609-5021";
export const PHONE_TEL = "tel:+15876095021";
export const PUBLIC_EMAIL = "stephanie@westrosemedia.com";
export const PHOTO_GALLERIES_URL = "https://westrosemedia.sproutstudio.com/galleries";
export const COACHING_ENQUIRY_URL = STRATEGY_BOOK_URL;

export { GOOGLE_REVIEWS_URL, iconCopy };

export const redesignedRoots = [
  "/the-agency",
  "/the-work",
  "/work-with-us",
  "/packages",
  "/icon",
  "/coaching",
  "/about",
  "/blog",
  "/contact",
  "/apply",
  "/case-studies",
  "/faq",
] as const;

export function isRedesignedPath(pathname: string) {
  if (pathname === "/") return true;
  return redesignedRoots.some(
    (root) => pathname === root || pathname.startsWith(`${root}/`),
  );
}

export type NavLink = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const agencyNav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/the-agency", label: "The Agency" },
  { href: "/the-work", label: "The Work" },
  {
    href: "/work-with-us",
    label: "Work with us",
    children: [
      { href: "/icon", label: "ICON Brand Partnership" },
      { href: "/coaching", label: "Private 1:1 Coaching" },
      { href: "/hot-and-viral", label: "Hot & Viral" },
    ],
  },
  { href: "/about", label: "About Stephanie" },
  { href: "/blog", label: "The Journal" },
  { href: "/contact", label: "Contact" },
];

export const portraits = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7",
  story:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_012.jpg?alt=media&token=d22f0bf0-f15c-458c-bcc7-421c4006bc28",
  featured:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_075.jpg?alt=media&token=ae30650a-5ad9-43ed-8723-a237d5b551a4",
  still:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_026.jpg?alt=media&token=35b646af-2e21-47e2-84ec-91543d8f9910",
  icon:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2F_VWR6863.jpg?alt=media&token=749b0527-f85a-4f9c-8133-0d31d25306ef",
  partnership:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR1984.jpg?alt=media&token=f12f7493-bda1-48ff-a343-31502519d648",
} as const;

export const clientStudies = [
  {
    name: "Jen",
    place: "Calgary",
    industry: "Event planning",
    result: "Booked solid into Q4",
    href: "/case-studies/jen-event-planner",
    image:
      "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR0577.jpg?alt=media&token=eccb7758-5b96-46d0-9022-9a72609aa0cd",
    imageAlt: "Jen, event planner",
    story:
      "When we took over content for Jen, she had almost no online presence and relied on a social media manager producing low quality graphics with poor communication. Within the first week of our partnership, Jen received multiple inquiries through LinkedIn and her website after months of silence. Those inquiries turned into sales, and she is now booked solid into Q4 with multi day events, allowing her to focus entirely on planning while her brand does the selling.",
    fit: "Jen works through the ICON Brand Partnership. Strategy, production, and publishing are handled end to end. She does not manage content, review drafts, or direct posts.",
  },
  {
    name: "Cheryl",
    place: "Vancouver",
    industry: "Neuro-inclusive regulation consulting and training",
    result: "Hired by large non-profits and institutions",
    href: "/case-studies/cheryl-neuro-inclusive-consulting-vancouver",
    image:
      "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR2678.jpg?alt=media&token=acc9d03e-d6fa-47c9-9f49-0d33844bc979",
    imageAlt: "Cheryl, neuro-inclusive regulation consulting and training",
    story:
      "Before working together, Cheryl’s online presence did not reflect the level of expertise or the seriousness of the organizations they were capable of serving. We clarified Cheryl’s positioning, elevated their visual presence, and aligned content with the level of institutions they wanted to be hired by. The focus was trust, clarity, and authority. Cheryl began attracting more qualified leads and significantly increased trust with organizations. They are now being hired by large non-profits and institutions that require credibility and professionalism before engaging.",
    fit: "Cheryl works with West Rose Media through the ICON Brand Partnership, combining strategy, photography, video, and execution to support long-term authority and visibility.",
  },
  {
    name: "Jackie",
    place: "Kelowna",
    industry: "Online coach and founder of Tapping School",
    result: "Booked $10,000 in clients from event content",
    href: "/case-studies/jackie-event-kelowna",
    image:
      "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6544.jpg?alt=media&token=030a8826-fc61-4385-86a1-733769131292",
    imageAlt: "Jackie, live event in Kelowna",
    story:
      "Jackie is an online coach and founder of Tapping School. This event marked her first major in-person experience for her clients, designed to deepen connection and momentum inside her business. The goal was to capture high-quality photo and video that reflected the energy, trust, and transformation in the room, and to create assets that could be used immediately. Jackie booked $10,000 in clients directly from content posted during the first day of the event.",
    fit: "The footage created immediate demand and converted into sales while the event was still in progress. That event content became the foundation for continued visibility, authority, and sales beyond the event itself.",
  },
] as const;
