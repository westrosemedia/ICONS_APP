/**
 * Hot & Viral sales page.
 *
 * Door times are Calgary wall-clock instants in America/Edmonton.
 * Doors open Wednesday 25 November 2026 at 12:00am and stay open through
 * Friday 27 November 2026. The page switches to closed at Saturday
 * 28 November 2026 at 12:00am, the end of 11:59pm Friday.
 * The next opening is spring 2027, at double the price ($500 CAD/month).
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
      "3 days to buy. November 25 to 27. Then closed until spring 2027, at double the price. $250 CAD/month in this window.",
  },
  hero: {
    eyebrow: "Stephanie Rose · West Rose",
    lines: [
      "You're posting into silence.",
      "200 views. 347. Maybe 600.",
      "Someone with less experience just passed you.",
    ],
    windowLines: [
      "3 days only.",
      "Then it is closed until spring\u00A02027.",
      "At double the price.",
    ],
    subheadline:
      "I'm Stephanie. I open the account and I see it. What you're saying. Why it dies at 200. What to change. She posted into that silence for six months. Two months later, 1.4 million.",
    price:
      "This window is $250 CAD/month, locked for as long as you remain a member. Spring 2027 is $500 CAD/month. Plus GST.",
    checklist: [
      "Tuesdays at 10am MST. I open the account on the call.",
      "The calls are recorded.",
      "Coaching is on the call, not in the chat.",
      "Instagram and TikTok, in the same room.",
    ],
    buttonBefore: "Get first access",
    buttonOpen: "Join Hot & Viral",
  },
  problem: {
    heading: "200. Then 347. Then 600.",
    body: "You know your work. Your clients get the result. You filmed it, posted it, rewrote the caption at midnight, and the number came back the same.",
    cards: [
      {
        title: "200",
        text: "You post. You check. It barely clears the people who already follow you.",
      },
      {
        title: "Passed",
        text: "Someone with less experience is getting the views. You keep opening the account that passed you.",
      },
      {
        title: "Guessing",
        text: "You can't tell which part of the post is the problem, so you change all of it and learn nothing.",
      },
    ],
    triedHeading: "You already did the homework.",
    triedBody:
      "The course. The coach who said post three times a day. Trending audio, talking to camera, text on the screen. All of it gave you more to post. What's holding the account back is what you're saying, and how it shows up. I see it the second I open it.",
  },
  ai: {
    eyebrow: "About that AI",
    heading: "AI can write the post. It can't see why it died.",
    body: "It pulls from what already worked for everybody else. That's why your caption sounds like the last ten you scrolled. The posts that move say something your people haven't heard, the way only you say it.",
  },
  copycats: {
    eyebrow: "Proof",
    heading: "700k-follower accounts are copying my posts word for word.",
    body: "You took the course. You hired the coach. You posted every single day. They're still lifting the line off my page. Inside Hot & Viral I show you what they're copying, so you can see it in your own.",
  },
  cammy: {
    label: "Client · Cammy",
    beforeStat: "200 views",
    afterStat: "1.4M views",
    story:
      "Cammy posted for six months. The reels sat around 200 views. She was showing up. She was filming the way she'd been told. She was saying the wrong thing in every post. I opened the account and I knew what to change. We fixed the message and made it show up in the post. Two months later, one reel hit 1.4 million views. That was her account. I can see what's wrong with yours, and what to change. I can't promise the same number.",
  },
  membersHeading: "More accounts I've fixed",
  winsHeading: "Views from my account and from clients.",
  coach: {
    eyebrow: "Meet your coach",
    heading: "I rebuilt from zero, in public.",
  },
  inside: {
    heading: "What you walk into",
    steps: [
      {
        title: "Tuesday, 10am MST.",
        text: "Starting December 1, 2026. I pull a member's account up on the call and say what to change. The whole room hears it. The calls are recorded.",
      },
      {
        title: "Instagram and TikTok.",
        text: "Two platforms. One look at the message, and how it shows up in the post.",
      },
      {
        title: "The chat.",
        text: "Members talk to each other. Drafts, questions, what they're posting.",
      },
      {
        title: "The wins group.",
        text: "Where the screenshots go when a reel takes off.",
      },
      {
        title: "Coaching is on the call.",
        text: "Coaching is on the call, not in the chat. Show up Tuesday. Leave knowing what to change.",
      },
    ],
  },
  who: {
    heading: "You keep checking the insights.",
    intro: "This is for you if:",
    points: [
      "You're excellent at the work and the views don't show it",
      "You're ready to say the thing you've been holding back on camera",
      "You'll show up Tuesday and post what we change",
      "You want this on Instagram, TikTok, or both",
    ],
  },
  onlyWay: {
    heading: "This is the only way to work with me right now.",
    body: "My 1:1 coaching is sold out. ICON Brand Partnership is sold out. The mastermind is closed. Hot & Viral is open for 3 days, November 25 to 27. Friday at 11:59pm MST it closes. It does not open again until spring 2027, and the price will be double.",
  },
  pricing: {
    heading: "3 days at $250. Then the price doubles.",
    note: "November 25 to 27 is the only buy window. Then it is closed until spring 2027, at double the price. $500 CAD/month.",
    beforeNote: "Doors open November 25 at 12:00am MST. Leave your email and the link lands the minute they open.",
    cancel: "You can cancel anytime.",
    monthly: {
      regular: "$500 CAD/month",
      sale: "$250",
      cadence: "CAD/month",
      lock: "Locked for as long as you remain a member. In spring 2027 this is double, $500 CAD/month.",
      gst: "Plus GST",
      button: "Join monthly",
    },
    yearly: {
      regular: "$5,500 CAD/year",
      sale: "$2,750",
      cadence: "CAD for the year",
      note: "$2,750 CAD. $250 less than twelve monthly payments. This price is the 3-day window. Then closed until spring 2027, when the month is double.",
      gst: "Plus GST",
      button: "Join for the year",
      badge: "Best value",
    },
  },
  firstAccess: {
    heading: "Get there before it opens.",
    body: "Doors open Wednesday, November 25 at 12:00am MST. They close Friday, November 27 at 11:59pm MST. 3 days only. Then it is closed until spring 2027, at double the price. Leave your email and the link lands the minute they open.",
    button: "Send me first access",
    success: "You're in. Watch your inbox on November 25.",
  },
  faq: [
    {
      q: "Which platforms do you cover?",
      a: "Instagram and TikTok.",
    },
    {
      q: "When are the calls?",
      a: "Tuesdays at 10am MST, starting December 1, 2026. The calls are recorded.",
    },
    {
      q: "Will you look at my account?",
      a: "I open member accounts live on the Tuesday call and say what to change. The whole room hears it.",
    },
    {
      q: "Do you coach in the chat group?",
      a: "Coaching is on the call, not in the chat. The chat is where members talk to each other.",
    },
    {
      q: "When can I buy?",
      a: "3 days only. Wednesday, November 25, 2026 at 12:00am MST through Friday, November 27 at 11:59pm MST. Then it is closed until spring 2027, at double the price.",
    },
    {
      q: "What happens to my price after these 3 days?",
      a: "Your $250 CAD/month stays locked for as long as you remain a member. The year is $2,750 CAD, $250 less than twelve monthly payments. Plus GST. In spring 2027 the price is double, $500 CAD/month.",
    },
    {
      q: "I'm starting from zero. Can I join?",
      a: "Yes. I rebuilt my own account from zero this year.",
    },
  ],
  final: {
    heading: "3 days. Then spring 2027. Double the price.",
    body: "Friday, November 27, 11:59pm MST, the doors shut. That is the only buy window. It does not open again until spring 2027, and it will be $500 CAD/month. This window is $250 CAD/month, locked for as long as you remain a member. Bring your account to the Tuesday call. I'll show you what to change.",
  },
  closed: {
    heading: "Hot & Viral is closed.",
    body: "The only buy window was November 25 to 27, 2026. It opens again in spring 2027, at double the price. $500 CAD/month. Leave your email and you'll hear first.",
    button: "Tell me first",
    success: "You're on the list.",
  },
  countdown: {
    before: "Doors open in",
    open: "Doors close in",
    // The buy window is November 25–27. Digits come from the live clock, not from this line.
    line: "3 days only. Then it is closed until spring\u00A02027, at double the price.",
  },
  sticky: {
    before: "Get first access",
    open: "Join Hot & Viral",
  },
  duplicate: "This email is already on the list.",
};
