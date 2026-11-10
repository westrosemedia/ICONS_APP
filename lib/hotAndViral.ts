/**
 * Hot & Viral sales page.
 *
 * Door times are Calgary wall-clock instants in America/Edmonton.
 * Doors open Wednesday 25 November 2026 at 12:00am and stay open through
 * Friday 27 November 2026. The page switches to closed at Saturday
 * 28 November 2026 at 12:00am, the end of 11:59pm Friday.
 *
 * In the current timezone data, Calgary stays on UTC-6 after 1 November 2026
 * (it does not fall back to UTC-7). The offsets below are that local midnight,
 * so every browser agrees even if its own timezone data is older.
 *
 * Checkout is Stephanie's Stripe pricing table. It renders only while the
 * doors are open. STRIPE_MONTHLY_URL and STRIPE_YEARLY_URL stay empty; the
 * pricing table replaces those two payment links.
 *
 * Instagram, TikTok, and the views line are the figures already published
 * on the Hot and Rich page. Replace them when the new profile screenshots arrive.
 */

export const DOORS_OPEN_AT = Date.parse("2026-11-25T00:00:00-06:00");
export const DOORS_CLOSE_AT = Date.parse("2026-11-28T00:00:00-06:00");

export const STRIPE_MONTHLY_URL = "";
export const STRIPE_YEARLY_URL = "";

export const STRIPE_PRICING_TABLE_ID = "prctbl_1Ua13GCcsY3WjV3QMtZNzqaJ";
export const STRIPE_PUBLISHABLE_KEY =
  "pk_live_51MSOJeCcsY3WjV3Q0h4k8hC7da1piQaQSHx6ukPgWe3hkxDR4GsmfEDah7RoIkH6k9Qln3ups7flMXSS3kuAMhdL005i3wmuav";

export const WAITLIST_COLLECTION = "hot_and_viral_waitlist";
export const NEXT_ROUND_COLLECTION = "hot_and_viral_next_round";

export const HERO_IMAGE = {
  src: "/hot-and-viral/stephanie-suit.jpg",
  alt: "Stephanie Rose, founder of West Rose Media",
  width: 2000,
  height: 1333,
};

export const COACH_IMAGE = {
  src: "/hot-and-viral/stephanie-camera.jpg",
  alt: "Stephanie Rose photographing in a hall",
  width: 1400,
  height: 2099,
};

export const coachStats = {
  instagramFollowers: "34,200 followers",
  tiktokFollowers: "19,000 followers",
  viewsStat: "2.7 million views in the last 30 days",
};

export type PageState = "before" | "open" | "closed";
export type SignupList = "waitlist" | "next_round";

export type HotAndViralImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MemberResult = {
  name: string;
  role: string;
  beforeStat: string;
  afterStat: string;
  sentences: [string, string];
  before: HotAndViralImage | null;
  after: HotAndViralImage | null;
  summary?: HotAndViralImage | null;
  profile?: HotAndViralImage | null;
};

export type CopycatPair = {
  mine: HotAndViralImage | null;
  theirs: HotAndViralImage | null;
  note?: HotAndViralImage | null;
};

export const copycatPairs: CopycatPair[] = [
  {
    mine: {
      src: "/hot-and-viral/copycat-mine.jpg",
      alt: "Stephanie Rose's original reel, filmed on a rooftop while holding a camera",
      width: 900,
      height: 1507,
    },
    theirs: {
      src: "/hot-and-viral/copycat-theirs.jpg",
      alt: "The copied reel. The other account's name is covered.",
      width: 900,
      height: 1651,
    },
    note: {
      src: "/hot-and-viral/copycat-message.jpg",
      alt: "A message about the copied reel. The other account's name is covered.",
      width: 900,
      height: 1321,
    },
  },
  { mine: null, theirs: null },
  { mine: null, theirs: null },
];

export const cammyShots: { before: HotAndViralImage | null; after: HotAndViralImage | null } = {
  before: {
    src: "/hot-and-viral/cammy-before-grid.jpg",
    alt: "Cammy's reels when the view counts were landing between about 300 and 600",
    width: 1206,
    height: 1583,
  },
  after: {
    src: "/hot-and-viral/cammy-after-1-4m.jpg",
    alt: "Cammy's reel insights showing 1,417,529 views",
    width: 900,
    height: 1407,
  },
};

export const cammyMore: HotAndViralImage[] = [
  {
    src: "/hot-and-viral/cammy-reel-420k.jpg",
    alt: "Cammy's reel insights showing 419,979 views",
    width: 900,
    height: 1536,
  },
  {
    src: "/hot-and-viral/cammy-reel-157k.jpg",
    alt: "Cammy's reel insights showing 156,993 views",
    width: 900,
    height: 1528,
  },
  {
    src: "/hot-and-viral/cammy-reel-68k.jpg",
    alt: "Cammy's reel insights showing 68,305 views",
    width: 900,
    height: 1408,
  },
  {
    src: "/hot-and-viral/cammy-90-days.jpg",
    alt: "Cammy's 90-day summary with 1,388,924 views and 978 followers",
    width: 1200,
    height: 860,
  },
];

export const memberResults: MemberResult[] = [
  {
    name: "Erin",
    role: "Tapping and mindfulness tools for parents.",
    beforeStat: "A few hundred views",
    afterStat: "5,258 views",
    sentences: [
      "Erin teaches tapping and mindfulness for raising regulated kids.",
      "In two months her reels went from a few hundred views to posts at 5,258 views, and the account showed 94,337 views.",
    ],
    before: {
      src: "/hot-and-viral/erin-before.jpg",
      alt: "Erin's earlier reels, with view counts of 591, 283, 286, 789, 454, 323, 723, 474 and 515",
      width: 1158,
      height: 2048,
    },
    after: {
      src: "/hot-and-viral/erin-after.jpg",
      alt: "Erin's later reels, with view counts of 4,552, 774, 3,471, 2,850, 5,258, 3,807, 925, 1,514 and 852",
      width: 1160,
      height: 2048,
    },
    summary: {
      src: "/hot-and-viral/erin-summary.jpg",
      alt: "90-day summary from August 11 to November 8, with 94,337 views, up 483.6% versus August 10, 602 followers, up 18.3%, and 93 net followers",
      width: 1200,
      height: 1000,
    },
    profile: {
      src: "/hot-and-viral/erin-profile.jpg",
      alt: "Profile for Erin- Tap Into Sunshine, she/her, with 108 posts, 602 followers and 553 following. Bio: Simple taping and mindfulness tools for raising regulated kids and confident caregivers.",
      width: 1200,
      height: 711,
    },
  },
];

export const winShots: HotAndViralImage[] = [
  {
    src: "/hot-and-viral/views-4-9-million.jpg",
    alt: "Account summary with 4,940,292 views and 34,711 followers",
    width: 900,
    height: 601,
  },
  {
    src: "/hot-and-viral/views-2-2-million.jpg",
    alt: "30-day insights with 2,243,099 views and 10,977 new followers",
    width: 900,
    height: 1201,
  },
  {
    src: "/hot-and-viral/views-1-9-million-week.jpg",
    alt: "7-day insights with 1,905,912 views and 12,994 new followers",
    width: 900,
    height: 1957,
  },
  {
    src: "/hot-and-viral/reel-401k-follows.jpg",
    alt: "Stephanie Rose reel insights with 401,794 views and 12,157 follows",
    width: 900,
    height: 1957,
  },
  {
    src: "/hot-and-viral/video-views-417k.jpg",
    alt: "Video analytics with 417,100 views and 9,900 new followers",
    width: 900,
    height: 591,
  },
  {
    src: "/hot-and-viral/reel-355k.jpg",
    alt: "Trial reel insights with 355,523 views",
    width: 900,
    height: 855,
  },
  {
    src: "/hot-and-viral/reel-304k.jpg",
    alt: "Trial reel insights with 304,081 views and 768 follows",
    width: 900,
    height: 870,
  },
  {
    src: "/hot-and-viral/viewers-579k-week.jpg",
    alt: "7-day analytics with 579,400 total viewers and 511,800 new viewers",
    width: 900,
    height: 1207,
  },
  {
    src: "/hot-and-viral/record-200k.jpg",
    alt: "A message celebrating a record, beside a dashboard with 200,435 views",
    width: 900,
    height: 652,
  },
  {
    src: "/hot-and-viral/reel-171k.jpg",
    alt: "Trial reel insights with 171,473 views and a 21 second average watch",
    width: 900,
    height: 849,
  },
  {
    src: "/hot-and-viral/reel-95k.jpg",
    alt: "Reel insights with 95,849 views and 4,006 follows",
    width: 900,
    height: 1060,
  },
  {
    src: "/hot-and-viral/reel-69k.jpg",
    alt: "Reel insights with 69,711 views and 2,785 follows",
    width: 900,
    height: 433,
  },
  {
    src: "/hot-and-viral/dashboard-62k.jpg",
    alt: "30-day dashboard with 62,901 views and 1,804 followers",
    width: 900,
    height: 620,
  },
  {
    src: "/hot-and-viral/reel-57k.jpg",
    alt: "Reel insights with 57,148 views, climbing from September 25 to October 16",
    width: 900,
    height: 1599,
  },
  {
    src: "/hot-and-viral/message-20k.jpg",
    alt: "A message celebrating 20,000 followers",
    width: 900,
    height: 352,
  },
  {
    src: "/hot-and-viral/reel-10k.jpg",
    alt: "Trial reel insights with 10,128 views and 417 comments",
    width: 900,
    height: 853,
  },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parsePreview(value: string | undefined | null): PageState | null {
  if (value === "before" || value === "open" || value === "closed") return value;
  return null;
}

export function getPageState(nowMs: number): PageState {
  if (nowMs < DOORS_OPEN_AT) return "before";
  if (nowMs < DOORS_CLOSE_AT) return "open";
  return "closed";
}

export function countdownTarget(state: PageState): number | null {
  if (state === "before") return DOORS_OPEN_AT;
  if (state === "open") return DOORS_CLOSE_AT;
  return null;
}

export type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function splitRemaining(ms: number): CountdownParts {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export function isStripeUrl(url: string): boolean {
  return url.startsWith("https://");
}

export function isValidEmail(email: string): boolean {
  const value = email.trim();
  return value.length <= 254 && EMAIL_PATTERN.test(value);
}

export function validateSignup(input: {
  name?: unknown;
  email?: unknown;
}): { ok: true; name: string; email: string } | { ok: false; error: string } {
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";

  if (!name) return { ok: false, error: "Enter your first name." };
  if (name.length > 80 || /[\u0000-\u001F]/.test(name)) {
    return { ok: false, error: "Enter your first name." };
  }
  if (!isValidEmail(email)) return { ok: false, error: "Enter a valid email address." };

  return { ok: true, name, email };
}

export const copy = {
  meta: {
    title: "Hot & Viral | West Rose Media",
    description:
      "Stop posting content that gets ignored. Instagram and TikTok coaching, open November 25 to 27. $250 CAD/month, locked for as long as you remain a member.",
  },
  hero: {
    eyebrow: "Instagram + TikTok",
    headline: "Stop posting content that gets ignored.",
    subheadline:
      "You don't need another content calendar, trending audio, or AI caption. You need to see why people aren't stopping, what the content is missing, and how to make posts that get noticed. Inside Hot & Viral, I show you what's holding your Instagram and TikTok content back, and how to fix it.",
    deserves: "Your content deserves more than 200 views.",
    proofBefore: "200 views",
    proofAfter: "1.4 million",
    buttonBefore: "Get first access",
    buttonOpen: "Join Hot & Viral",
    underButton: "$250 CAD/month, locked for as long as you remain a member. Doors open November 25 to 27.",
  },
  problem: {
    heading: "You're not bad at content. You're just missing something.",
    paragraphs: [
      "You know your work. You post, you try hooks, you try trending audio, you rewrite the caption, and you still see 200, 347, maybe 600.",
      "Someone with less experience is getting thousands of views on the thing you've been trying to explain for years. The problem is what you're putting in front of people, and how you're saying it. That's what I'm going to fix.",
    ],
  },
  ai: {
    eyebrow: "Using AI",
    heading: "AI can write you a caption. It can't build your point of view.",
    body: "Using AI for hooks and captions is fine. When everyone asks the same tools the same questions, the posts sound the same. Your audience needs your perspective. Inside Hot & Viral, I help you find what makes the content yours, and turn that into posts people stop for.",
  },
  copycats: {
    eyebrow: "Proof",
    heading: "When your content becomes the blueprint, you're doing something right.",
    body: "Accounts with hundreds of thousands of followers have recreated my posts, sometimes word for word. That happens when an idea is said in a way people stop, watch, and share. Inside Hot & Viral, I'm not teaching you to copy someone else. I teach you why it works, and how to make your own version that sounds like you.",
  },
  cammy: {
    label: "Client · Cammy",
    beforeStat: "200 views",
    afterStat: "1.4M views",
    story: [
      "Cammy spent six months showing up and doing what she was told. Her videos weren't reaching new people. I could see the message wasn't connecting. We changed how she communicated her expertise and carried that through the content. Two months later, one reel hit 1.4 million views.",
      "She didn't need to become someone else on camera. She needed to say what she already knew differently.",
    ],
  },
  membersHeading: "More accounts I've fixed",
  winsHeading: "Views from my account and from clients.",
  coach: {
    eyebrow: "Meet your coach",
    heading: "I rebuilt from zero, in public.",
  },
  inside: {
    heading: "Imagine knowing exactly what to post next.",
    intro:
      "No more guessing whether a post will work. No more spending hours on a caption that still sounds wrong. No more watching someone else's reel and wondering why yours didn't move.",
    steps: [
      {
        title: "Tuesday account breakdowns.",
        text: "Every Tuesday at 10am MST, I look at real member accounts and tell you what I would change. The calls are recorded. Missing Tuesday doesn't mean missing the breakdown.",
      },
      {
        title: "Instagram and TikTok.",
        text: "One strategy, both platforms.",
      },
      {
        title: "A members chat.",
        text: "Share drafts and ask each other questions. Coaching happens on the call, not in the chat.",
      },
      {
        title: "A wins group.",
        text: "For the posts that take off.",
      },
      {
        title: "Recorded calls.",
        text: "Rewatch the breakdown whenever you need it.",
      },
    ],
  },
  who: {
    heading: "For women who are excellent at what they do.",
    intro: "This is for you if:",
    points: [
      "Your views don't show the work yet",
      "You're ready to say what you already know, differently",
    ],
  },
  onlyWay: {
    heading: "This is the only way to work with me right now.",
    body: "My 1:1 coaching is sold out. ICON Brand Partnership is sold out. The mastermind is closed. Hot & Viral is open for three days, November 25 to 27. When the doors close Friday at 11:59pm MST, the group locks, and there's no date set for it to open again.",
  },
  pricing: {
    heading: "Get in at the lowest price. Keep it for as long as you're a member.",
    lede: "Hot & Viral will be $500 CAD/month. This opening is half price. Join now and $250 CAD/month stays for as long as you remain a member. Not an intro rate that jumps later.",
    beforeNote: "Doors open November 25. Leave your email for first access.",
    cancel: "You can cancel anytime. The locked price ends when the membership ends.",
    monthly: {
      regular: "$500 CAD/month",
      sale: "$250",
      cadence: "CAD/month",
      lock: "Locked for as long as you remain a member.",
      gst: "Plus GST",
      button: "Join monthly",
    },
    yearly: {
      regular: "$5,500 CAD/year",
      sale: "$2,750",
      cadence: "CAD for the year",
      note: "$250 CAD less than paying monthly for the year.",
      gst: "Plus GST",
      button: "Join for the year",
      badge: "Best value",
    },
  },
  firstAccess: {
    heading: "Get in first.",
    body: "Doors open Wednesday November 25 at 12:00am MST. Leave your email and the link lands in your inbox the minute they open.",
    button: "Send me first access",
    success: "You're in. Watch your inbox on November 25.",
  },
  faq: [
    {
      q: "Which platforms do you cover?",
      a: "Instagram and TikTok.",
    },
    {
      q: "Do I need a certain number of followers?",
      a: "No. Starting from zero is fine. I rebuilt my own account from zero this year.",
    },
    {
      q: "What if I've never had a viral post?",
      a: "Cammy was stuck around 200 views. The work is the message, not a viral history.",
    },
    {
      q: "When are the calls?",
      a: "Tuesdays at 10am MST, starting December 1, 2026.",
    },
    {
      q: "Will you actually review my account?",
      a: "Yes. Live on the Tuesday call. Every breakdown teaches the room.",
    },
    {
      q: "Are the calls recorded?",
      a: "Yes. The calls are recorded.",
    },
    {
      q: "What if I can't attend Tuesday?",
      a: "Watch the recording. Missing Tuesday doesn't mean missing the breakdown.",
    },
    {
      q: "Where does coaching happen?",
      a: "On the Tuesday call. The chat is for members to share drafts and ask each other questions. Coaching is not in the chat.",
    },
    {
      q: "What happens to my price?",
      a: "$250 CAD/month stays for as long as you remain a member. Not an intro rate that jumps later. The locked price ends when the membership ends.",
    },
    {
      q: "Can I cancel?",
      a: "Yes, anytime. The locked price applies while you stay a member.",
    },
    {
      q: "Are more views the same as sales?",
      a: "No. Views are not the same as sales. The work is getting the right people to stop and watch.",
    },
  ],
  final: {
    heading: "Stop guessing. Understand what makes someone stop scrolling and want to hear more.",
    body: "That's what Hot & Viral is. Doors open for a short window, November 25 to 27. Get in and lock $250 CAD/month for as long as you remain a member.",
  },
  closed: {
    heading: "Hot & Viral is closed.",
    body: "The doors were open November 25 to 27, 2026, and there's no date set for the next round. Leave your email and you'll hear first if it opens again.",
    button: "Tell me first",
    success: "You're on the list.",
  },
  countdown: {
    before: "Black Friday only. Doors open in",
    open: "Doors close in",
    openSuffix: "Half price closes with them.",
  },
  sticky: {
    before: "Get first access",
    open: "Join Hot & Viral",
  },
  duplicate: "This email is already on the list.",
};
