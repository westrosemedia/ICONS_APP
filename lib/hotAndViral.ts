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

export const openingWindow =
  "This is a 3-day window only, Wednesday November 25, 2026 at 12:00am MST through Friday November 27, 2026 at 11:59pm MST. Then it is closed until spring 2027, when the price is double ($500 CAD/month).";

export const copy = {
  meta: {
    title: "Hot & Viral | West Rose Media",
    description:
      "You're showing up. You're posting. You're putting in the work. A 3-day window only, November 25 to 27, 2026. Then closed until spring 2027, at double the price.",
  },
  hero: {
    eyebrow: "HOT & VIRAL",
    headline:
      "You're showing up. You're posting. You're putting in the work. So why are your reels still struggling to get past 300 views?",
    paragraphs: [
      {
        text: "You know your work is good. Your clients know it. But when it comes to getting that same attention online, something isn't clicking.",
        bold: false,
      },
      {
        text: "You're trying different hooks, changing your captions, testing trending audio and doing all the things you're told you're supposed to do.",
        bold: false,
      },
      {
        text: "And yet, the views aren't moving. The right people aren't finding you. And you're starting to wonder what you're missing.",
        bold: false,
      },
      {
        text: "Here's the thing: posting more isn't necessarily the answer.",
        bold: false,
      },
      {
        text: "Sometimes it's your messaging. Sometimes it's your content strategy. Sometimes you're making small mistakes that are costing you big opportunities to get seen.",
        bold: false,
      },
      {
        text: "That's where I come in.",
        bold: true,
      },
      {
        text: "I'm Stephanie Rose, founder of West Rose Media, and I want to help you stop guessing what to post and start understanding what actually makes people pay attention.",
        bold: false,
      },
      {
        text: "Welcome to HOT & VIRAL.",
        bold: true,
      },
      {
        text: "The live content coaching room where we look at your actual account, break down your content, and figure out what needs to change.",
        bold: false,
      },
    ],
    window: openingWindow,
    button: "I WANT IN",
    buttonBefore: "Get first access",
    buttonOpen: "Join Hot & Viral",
  },
  // Why the content is not working. Stephanie's section 2, exact.
  problem: {
    heading: "You're not creating content to be ignored. So why is nobody watching?",
    paragraphs: [
      { text: "Let's be honest.", bold: false },
      {
        text: "You're spending time coming up with ideas, filming reels, editing videos, writing captions and trying to figure out what Instagram wants from you this week.",
        bold: false,
      },
      { text: "And for what?", bold: false },
      {
        text: "200 views. Maybe 300. Occasionally one surprises you and hits 1,000.",
        bold: false,
      },
      {
        text: 'Meanwhile, you\'re watching other creators rack up 50K, 100K or even a million views on content that makes you wonder, "How the hell did THAT take off?"',
        bold: false,
      },
      { text: "Here's what you need to understand.", bold: false },
      {
        text: "Going viral isn't just luck. And it's definitely not about posting more.",
        bold: true,
      },
      {
        text: "There are things that make people stop scrolling. Things that make them curious enough to keep watching. Things that make them want to share your content with someone else.",
        bold: false,
      },
      {
        text: "Your hook matters. Your topic matters. Your delivery matters. And the way you package an idea can be the difference between a reel that gets ignored and one that gets shared thousands of times.",
        bold: false,
      },
      { text: "The problem?", bold: false },
      {
        text: "Most people are creating content without understanding why some videos take off and others don't.",
        bold: false,
      },
      { text: "They're guessing.", bold: false },
      { text: "And guessing is an expensive content strategy.", bold: false },
      {
        text: "It's time to understand what makes people WATCH, SHARE and FOLLOW.",
        bold: true,
      },
    ],
  },
  introducing: {
    heading: "WHAT IF YOUR NEXT REEL WAS THE ONE THAT TOOK OFF?",
    subheading: "Welcome to HOT & VIRAL.",
    paragraphs: [
      {
        text: "This is where we stop throwing content at the wall and hoping something sticks.",
        bold: false,
      },
      {
        text: "Hot & Viral is my live content coaching membership where we get inside your Instagram and TikTok accounts, look at what you're creating, and figure out how to give your content a much better chance of getting seen.",
        bold: false,
      },
      { text: "We're talking about the hooks that make people stop scrolling.", bold: false },
      { text: "The ideas that make people curious.", bold: false },
      { text: "The videos people watch right to the end.", bold: false },
      { text: "The content people can't help but share.", bold: false },
      {
        text: "And the little things that can make a BIG difference to how far your content travels.",
        bold: false,
      },
      { text: "And here's what makes this different.", bold: true },
      {
        text: "I'm not handing you another course with 47 lessons you'll never finish.",
        bold: false,
      },
      {
        text: "I'm not giving you a generic list of trending audio and telling you to go figure it out.",
        bold: false,
      },
      { text: "We're working on YOUR content.", bold: false },
      { text: "YOUR account.", bold: false },
      { text: "YOUR ideas.", bold: false },
      {
        text: "Every Tuesday, I bring my experience, my strategic eyes and my honest feedback into the room.",
        bold: false,
      },
      {
        text: "You get to see what I'm seeing, understand why I'm recommending changes, and learn how to apply those strategies to your own content.",
        bold: false,
      },
      {
        text: "Because the goal isn't to make one lucky reel go viral.",
        bold: false,
      },
      {
        text: "It's to get better at creating content that has the potential to reach people far beyond your current audience.",
        bold: false,
      },
      { text: "More reach. More views. More opportunities to go viral.", bold: true },
      { text: "That's what we're working towards inside HOT & VIRAL.", bold: false },
    ],
    button: "I WANT IN",
  },
  ai: {
    heading: "AI can write you a caption. It can't build your point of view.",
    paragraphs: [
      "You've probably used AI to come up with hooks, captions, content ideas and even entire posting strategies. And there's nothing wrong with that. But here's the problem.",
      "When everyone is using the same tools, asking similar questions and pulling from the same pool of content, everything starts sounding the same.",
      "Your audience doesn't need another version of something they've already scrolled past. They need your perspective. Your experience. Your opinions. Your way of explaining something.",
      "Inside Hot & Viral, I'll help you identify what makes your content different and turn that into a strategy people actually want to watch.",
    ],
  },
  copycats: {
    eyebrow: "Proof",
    heading: "When your content becomes the blueprint, you're doing something right.",
    paragraphs: [
      "I've watched accounts with hundreds of thousands of followers recreate my content, sometimes almost word for word. That's not an accident. It's what happens when you understand how to communicate an idea in a way that makes people stop, watch and share.",
      "Inside Hot & Viral, I'm not teaching you to copy what's already working for someone else. I'm teaching you how to understand WHY it works, and how to create your own version that actually sounds like you.",
    ],
  },
  cammy: {
    label: "Client · Cammy",
    beforeStat: "200 views",
    afterStat: "1.4M views",
    story: [
      "Cammy had been consistently creating content for six months. She was showing up, filming and doing everything she'd been told to do. But her videos weren't reaching new people.",
      "When I looked at her account, I could see what was missing. Her message wasn't connecting the way it needed to. We worked on changing how she communicated her expertise and making sure that message carried through her content. Two months later, one of her reels reached 1.4 million views.",
      "She didn't need to become someone else on camera. She needed to communicate what she already knew differently.",
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
    paragraphs: [
      "No more sitting down to create content and wondering whether it's going to work. No more spending three hours writing a caption that still doesn't sound right. No more looking at someone else's viral reel and wondering why you can't seem to get the same results.",
      "Inside Hot & Viral, you'll have a place to bring your questions, get your account looked at, learn from real examples and understand what needs to change.",
    ],
    items: [
      "Weekly live account breakdowns on Tuesday at 10am MST, starting December 1, 2026. The calls are recorded.",
      "Instagram and TikTok strategy.",
      "A members chat where members ask each other. Coaching is on the call, not in the chat.",
      "A wins group.",
      "Recorded calls you can rewatch.",
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
    body: `My 1:1 coaching is sold out. ICON Brand Partnership is sold out. The mastermind is closed. ${openingWindow}`,
  },
  pricing: {
    heading: "Get in at the lowest price. Keep it for as long as you're a member.",
    paragraphs: [
      "Hot & Viral will be $500 CAD per month. This opening is half price. Join during this window and $250 CAD/month stays for as long as you remain a member. Not a temporary introductory rate.",
      "Annual is $2,750 CAD, $250 less than paying monthly for twelve months. Plus GST.",
      "You can cancel anytime. The price lock ends when the membership ends.",
      openingWindow,
    ],
    beforeNote: "Leave your email and the link lands the minute the doors open.",
    cancel: "You can cancel anytime. The price lock ends when the membership ends.",
    monthly: {
      regular: "$500 CAD/month",
      sale: "$250",
      cadence: "CAD/month",
      lock: "$250 CAD/month stays for as long as you remain a member. Not a temporary introductory rate. The price lock ends when the membership ends.",
      gst: "Plus GST",
      button: "Join monthly",
    },
    yearly: {
      regular: "$5,500 CAD/year",
      sale: "$2,750",
      cadence: "CAD for the year",
      note: "$2,750 CAD, $250 less than paying monthly for twelve months.",
      gst: "Plus GST",
      button: "Join for the year",
      badge: "Best value",
    },
  },
  firstAccess: {
    heading: "Get there before it opens.",
    body: `${openingWindow} Leave your email and the link lands the minute the doors open.`,
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
      a: "Yes. Bring your account to the weekly live breakdowns on Tuesday at 10am MST. The calls are recorded, so you can rewatch them.",
    },
    {
      q: "Do you coach in the chat group?",
      a: "The members chat is where members ask each other. Coaching is on the call, not in the chat.",
    },
    {
      q: "When can I buy?",
      a: openingWindow,
    },
    {
      q: "What happens to my price after these 3 days?",
      a: "Join during this window and $250 CAD/month stays for as long as you remain a member. Not a temporary introductory rate. Annual is $2,750 CAD, $250 less than paying monthly for twelve months. Plus GST. You can cancel anytime. The price lock ends when the membership ends. In spring 2027 the price is double, $500 CAD/month.",
    },
    {
      q: "I'm starting from zero. Can I join?",
      a: "Yes. I rebuilt my own account from zero this year.",
    },
  ],
  final: {
    heading: "You don't need to keep guessing.",
    paragraphs: [
      "You need to understand what makes people stop scrolling, what makes them watch, and what makes them want to hear more from you. That's what we're building inside Hot & Viral. The doors are open for three days. Get in, and lock $250 CAD/month for as long as you remain a member. Then it is closed until spring 2027, at double the price.",
      openingWindow,
    ],
  },
  closed: {
    heading: "Hot & Viral is closed.",
    body: "Wednesday November 25, 2026 at 12:00am MST through Friday November 27, 2026 at 11:59pm MST was the only window. It is closed until spring 2027, when the price is double ($500 CAD/month). Leave your email and you'll hear first.",
    button: "Tell me first",
    success: "You're on the list.",
  },
  countdown: {
    before: "Doors open in",
    open: "Doors close in",
    // Digits come from the live clock via splitRemaining. This line does not hardcode a day count.
    line: openingWindow,
  },
  sticky: {
    before: "I WANT IN",
    open: "I WANT IN",
  },
  duplicate: "This email is already on the list.",
};
