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
 * Paste the two Stripe Payment Links before 25 November. Leave them blank
 * until then: the checkout buttons only render while the doors are open.
 *
 * Instagram, TikTok, and the views line are the figures already published
 * on the Hot and Rich page. Replace them when the new profile screenshots arrive.
 */

export const DOORS_OPEN_AT = Date.parse("2026-11-25T00:00:00-06:00");
export const DOORS_CLOSE_AT = Date.parse("2026-11-28T00:00:00-06:00");

export const STRIPE_MONTHLY_URL = "";
export const STRIPE_YEARLY_URL = "";

export const WAITLIST_COLLECTION = "hot_and_viral_waitlist";
export const NEXT_ROUND_COLLECTION = "hot_and_viral_next_round";

export const HERO_IMAGE = {
  src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7",
  alt: "Stephanie Rose, founder of West Rose Media",
  width: 1200,
  height: 1500,
};

export const COACH_IMAGE = {
  src: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_075.jpg?alt=media&token=ae30650a-5ad9-43ed-8723-a237d5b551a4",
  alt: "Stephanie Rose",
  width: 1200,
  height: 1500,
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

export const memberResults: MemberResult[] = [];

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
      "Weekly live coaching on Instagram and TikTok growth. Doors open November 25 to 27 only, at half price for Black Friday.",
  },
  hero: {
    eyebrow: "Instagram + TikTok",
    headline:
      "Six months of posting, 200 views. I looked at her account and knew right away what to fix. Two months later, 1.5 million.",
    subheadline:
      "Inside Hot & Viral, I look at your account, tell you what to fix, and show you how to fix it, on Instagram and TikTok.",
    checklist: [
      "Weekly live coaching every Tuesday at 10am MST, with real member accounts broken down on the call",
      "A members chat group and a separate wins group",
      "Instagram and TikTok strategy in the same room",
    ],
    buttonBefore: "Get first access",
    buttonOpen: "Join Hot & Viral",
    underButton: "Black Friday only. $250 CAD/month, locked for life. Doors open November 25 to 27.",
  },
  problem: {
    heading: "You're good at what you do. Your views haven't caught up yet.",
    body: "You know your stuff. Your clients get results. You've filmed, posted, rewritten captions at midnight and watched the same number come back again.",
    cards: [
      {
        title: "Stuck at 200",
        text: "You post, you check your insights, and the views barely reach past the people who already follow you.",
      },
      {
        title: "Out-shouted",
        text: "Accounts that know half of what you know keep pulling a million views right past you.",
      },
      {
        title: "Guessing",
        text: "You can't tell which part of the post is the problem, so you change everything and learn nothing.",
      },
    ],
    triedHeading: "What you've already tried",
    triedBody:
      "The course. The coach who said to post three times a day. Trending audio, talking to camera, text on screen. Every one of them handed you more to post. What's holding your account back is what you're saying and how it shows up in the post, and that's the part I can see the second I open your account.",
  },
  ai: {
    eyebrow: "About that AI",
    heading: "You've probably asked AI to help with your posts. It can't make you go viral.",
    body: "AI only pulls from the past. It writes from what already worked for millions of other people, which is why your post comes out sounding like everyone else's. We're building the future. The posts that blow up say something your audience hasn't heard yet, in a way only you can say it.",
  },
  copycats: {
    eyebrow: "Proof",
    heading:
      "You've tried the courses, the coaches and posting every single day. Meanwhile, accounts with 700k followers are copying my posts word for word.",
    body: "When the biggest accounts in your industry are taking notes from my page, you know where the growth is coming from. Inside Hot & Viral, I teach you what they're copying.",
  },
  cammy: {
    label: "Client · Cammy",
    beforeStat: "200 views",
    afterStat: "1.5M views",
    story:
      "Cammy had been posting for six months, and her reels kept landing around 200 views. She was showing up and filming like she'd been told. She was also saying the wrong thing in every post. I looked at her account and knew right away what to fix. We fixed her message and made sure it showed up in everything she posted. Two months later, one of her reels hit 1.5 million views.",
  },
  membersHeading: "More accounts I've fixed",
  winsHeading: "Views from my account and from clients.",
  coach: {
    eyebrow: "Meet your coach",
    heading: "I rebuilt from zero, in public.",
  },
  inside: {
    heading: "What happens inside Hot & Viral",
    steps: [
      {
        title: "The Tuesday call.",
        text: "Every Tuesday at 10am MST, I pull up member accounts live and tell you exactly what to fix. Every breakdown teaches the whole room.",
      },
      {
        title: "Instagram and TikTok.",
        text: "Two platforms, one strategy, built around your message.",
      },
      {
        title: "The chat group.",
        text: "Ask questions, share drafts and swap ideas with women doing the same work.",
      },
      {
        title: "The wins group.",
        text: "Where the screenshots go when a reel takes off.",
      },
      {
        title: "One place for coaching.",
        text: "Everything happens on the call. Show up Tuesday and leave knowing what to fix.",
      },
    ],
  },
  who: {
    heading: "Where brave, smart, dedicated women get seen",
    intro: "This is for you if:",
    points: [
      "You're excellent at what you do and your views don't show it yet",
      "You're ready to say the thing on camera you've been holding back",
      "You'll show up on Tuesdays and post what we work on",
      "You want growth on Instagram, TikTok or both",
    ],
  },
  onlyWay: {
    heading: "This is the only way to work with me right now.",
    body: "My 1:1 coaching is sold out. ICON Brand Partnership is sold out. The mastermind is closed. Hot & Viral is open for three days, November 25 to 27. When the doors close Friday at 11:59pm MST, the group locks, and there's no date set for it to open again.",
  },
  pricing: {
    heading: "Black Friday is half price, and it stays that way.",
    beforeNote: "Doors open November 25. Leave your email for first access.",
    monthly: {
      regular: "$500 CAD/month",
      sale: "$250",
      cadence: "CAD/month",
      lock: "Locked for life while you stay a member",
      gst: "Plus GST",
      button: "Join monthly",
    },
    yearly: {
      regular: "$5,500 CAD/year",
      sale: "$2,750",
      cadence: "CAD for the year",
      note: "One payment, twelve months, and $250 CAD less than paying monthly",
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
      q: "When are the calls?",
      a: "Tuesdays at 10am MST, starting December 1, 2026.",
    },
    {
      q: "Will you look at my account?",
      a: "I break down member accounts live every week, and every breakdown teaches the whole call what to fix.",
    },
    {
      q: "Do you coach in the chat group?",
      a: "All coaching happens live on Tuesday's call. The chat group is where members connect, ask each other questions and share what's working.",
    },
    {
      q: "What happens to my price after Black Friday?",
      a: "Your $250 CAD/month stays locked for as long as you're a member.",
    },
    {
      q: "I'm starting from zero. Can I join?",
      a: "Yes. I rebuilt my own account from zero this year.",
    },
  ],
  final: {
    heading: "Doors close Friday at 11:59pm MST.",
    body: "Bring your account to Tuesday's call and I'll show you exactly what to fix.",
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
