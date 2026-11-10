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
      "Erin creates content around tapping and mindfulness for parents.",
      "One reel reached 5,258 VIEWS, and her account generated 94,337 VIEWS OVER 90 DAYS.",
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
      { text: "Cammy had been posting consistently for six months.", bold: false },
      { text: "Her reels were averaging around 200 views.", bold: false },
      {
        text: "She was creating content, showing up and putting in the effort, but her videos weren't reaching the people she wanted to reach.",
        bold: false,
      },
      {
        text: "We worked on her content strategy, looked at how she was communicating her ideas, and identified opportunities to make her videos more compelling.",
        bold: false,
      },
      { text: "Two months later?", bold: false },
      {
        text: "One of her reels reached 1.4 MILLION VIEWS.",
        bold: false,
        marks: ["1.4 MILLION VIEWS"],
      },
      {
        text: "That's what can happen when you stop guessing and start understanding what makes people watch and share.",
        bold: false,
      },
    ],
  },
  proof: {
    heading: "DON'T JUST TAKE MY WORD FOR IT. LOOK AT THE VIEWS.",
    subheading: "Real accounts. Real content. Real reach.",
    paragraphs: [
      {
        text: "I'm not here to tell you that getting millions of views is possible without showing you what that can look like.",
        bold: false,
      },
      { text: "Let's look at a couple of examples.", bold: false },
    ],
    cammyHeading: "CAMMY: FROM 200 VIEWS TO 1.4 MILLION.",
    erinHeading: "ERIN: FROM A FEW HUNDRED VIEWS TO THOUSANDS.",
    erinParagraphs: [
      { text: "Erin creates content around tapping and mindfulness for parents.", bold: false },
      {
        text: "Her reels were getting a few hundred views, and she wanted to reach more people who needed what she had to offer.",
        bold: false,
      },
      { text: "We worked on her content and started making strategic changes.", bold: false },
      { text: "The result?", bold: false },
      {
        text: "One reel reached 5,258 VIEWS, and her account generated 94,337 VIEWS OVER 90 DAYS.",
        bold: false,
        marks: ["5,258 VIEWS", "94,337 VIEWS OVER 90 DAYS"],
      },
      {
        text: "That's more people discovering her content, more opportunities to connect with her audience, and a whole lot more eyes on her work.",
        bold: false,
      },
    ],
    closingHeading: "AND THIS IS WHY I LOVE WHAT I DO.",
    closing: [
      {
        text: "Because sometimes the difference between content that gets 200 views and content that gets thousands isn't that you need to become a different creator.",
        bold: false,
      },
      { text: "You need to understand what makes people stop scrolling.", bold: false },
      { text: "And that's exactly what we're going to work on inside HOT & VIRAL.", bold: false },
      { text: "Your next big-view reel could be closer than you think.", bold: true },
    ],
    button: "GET FIRST ACCESS",
  },
  membersHeading: "More accounts I've fixed",
  winsHeading: "Views from my account and from clients.",
  // Stephanie's receipts section, exact. Sits after the right-room section and before pricing.
  coach: {
    heading: "I'VE BEEN IN THE CONTENT GAME. AND I'VE GOT THE RECEIPTS.",
    subheading: "I'm Stephanie Rose. And I know what it takes to get people watching.",
    beforeInstagram: [
      {
        text: "I've spent years creating content, building brands, growing audiences and helping business owners get their work seen.",
        bold: false,
      },
      {
        text: "I've seen reels take off. I've watched accounts grow. I've helped clients go from wondering why nobody was watching to reaching audiences they never thought possible.",
        bold: false,
      },
      { text: "But I've also had to start over myself.", bold: false },
      {
        text: "On June 15, 2026, my Instagram account was deleted after a mass-reporting campaign.",
        bold: false,
      },
      { text: "Seven years of content. Gone.", bold: false },
      { text: "Instead of letting that be the end of the story, I started again.", bold: false },
      {
        text: "I rebuilt my Instagram account to 34,200 followers and grew my TikTok to 19,000 followers, with 2.7 million views in a 30-day period at the time those results were recorded.",
        bold: false,
      },
      { text: "Why am I telling you this?", bold: false },
      { text: "Because I don't teach content strategy from the sidelines.", bold: false },
      {
        text: "I'm in it. I'm testing ideas, watching what works, paying attention to what changes, and constantly looking at how content gets discovered and shared.",
        bold: false,
      },
      {
        text: "And I LOVE figuring out why one reel gets 200 views while another reaches millions.",
        bold: false,
      },
      { text: "That's the experience I bring into Hot & Viral.", bold: false },
      {
        text: "I'm not going to tell you there's one magic formula or that every reel will go viral.",
        bold: false,
      },
      {
        text: "But I can teach you how to approach your content more strategically, recognize opportunities, and give your videos a stronger chance of getting seen.",
        bold: false,
      },
      { text: "And if you want to see what I'm talking about, come follow along.", bold: false },
    ],
    instagramLead: "Find me on Instagram:",
    instagramName: "Stephanie Rose – @stephanie.the.rose",
    instagramHref: "https://www.instagram.com/stephanie.the.rose/",
    afterInstagram: [
      { text: "Come see what I'm creating, what I'm testing and what I'm learning.", bold: false },
      { text: "Because I'm not just teaching this stuff.", bold: false },
      { text: "I'm doing it, too.", bold: false },
    ],
    button: "COME JOIN ME INSIDE HOT & VIRAL",
  },
  membership: {
    heading: "THIS IS WHERE WE GET INTO THE GOOD STUFF.",
    subheading: "You're not joining another content library. You're getting access to my brain.",
    intro: [
      "Hot & Viral is built around one thing: helping you create content that gets more attention.",
      "And we're doing it together.",
      "Here's what happens when you become a member.",
    ],
    steps: [
      {
        title: "01. LIVE CONTENT COACHING EVERY TUESDAY",
        paragraphs: [
          "This is where the magic happens.",
          "Every Tuesday, we get together live and work on real content from real accounts.",
          "Bring your Instagram or TikTok account. Bring the reel that's flopped. Bring the idea you're not sure how to execute.",
          "I'll look at what's happening, share what I'm seeing, and give you practical feedback on what I'd change.",
          "No generic advice. No guessing. We're talking about YOUR content.",
        ],
      },
      {
        title: "02. LIVE ACCOUNT BREAKDOWNS",
        paragraphs: [
          "Ever wish you could look over someone's shoulder while they figure out why their content isn't working?",
          "That's exactly why we review accounts together.",
          "I'll pull up member accounts and walk through the content, looking at things like:",
        ],
        bullets: [
          "Hooks that need more punch.",
          "Content ideas with bigger reach potential.",
          "Why a reel might be losing people's attention.",
          "Opportunities to make content more shareable.",
          "Ways to create stronger curiosity and interest.",
        ],
        after: [
          "And here's the bonus: even when we're reviewing someone else's account, you're learning how to look at your own differently.",
        ],
      },
      {
        title: "03. REPLAYS YOU CAN WATCH AGAIN",
        paragraphs: [
          "Can't make a Tuesday call? Want to revisit something we discussed?",
          "The calls are recorded so you can go back and revisit the coaching, ideas and feedback.",
          "Because sometimes the lightbulb moment happens the second time you hear something.",
        ],
      },
      {
        title: "04. YOUR PRIVATE HOT & VIRAL COMMUNITY",
        paragraphs: [
          "You'll also get access to our private member space.",
          "Share your reels. Ask questions. Celebrate your wins. Get inspired by what other members are creating.",
          "It's a room full of people who understand what it's like to put yourself out there and want their content to reach more people.",
        ],
      },
      {
        title: "05. A ROOM FULL OF CONTENT IDEAS AND MOMENTUM",
        paragraphs: [
          "One of the biggest challenges with content is figuring out what to create next.",
          "Being surrounded by other business owners who are experimenting, learning and sharing ideas can help you see opportunities you might have missed.",
          "You'll start looking at content differently.",
          "And hopefully, you'll never look at a reel the same way again.",
        ],
      },
    ],
    planHeading: "HERE'S THE PLAN.",
    plan: [
      { label: "Live coaching:", value: "Tuesdays at 10am MST." },
      { label: "Starting:", value: "December 1, 2026." },
      { label: "Platforms:", value: "Instagram and TikTok." },
      { label: "Access:", value: "Live coaching, call replays and private member community." },
    ],
    closing: [
      "Bring your account, bring your questions, and bring your willingness to experiment.",
      "I'll bring the strategy, the feedback and the fresh set of eyes.",
    ],
    button: "I'M READY TO GET MORE VIEWS",
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
  // Stephanie's right-room section, exact. Sits after the membership section and before pricing.
  rightRoom: {
    heading: "LET'S MAKE SURE YOU'RE IN THE RIGHT ROOM.",
    forYouSubhead: "Hot & Viral is for you if...",
    forYou: [
      {
        text: "You're a business owner, creator or entrepreneur who is tired of creating content that nobody seems to see.",
        bold: false,
      },
      {
        text: "You're ready for more than another list of Instagram tips.",
        bold: false,
      },
      {
        text: "You want to understand what makes people stop scrolling, watch your videos, share your content and discover your account.",
        bold: false,
      },
      {
        text: "You're willing to experiment, try different approaches and actually put the coaching into practice.",
        bold: false,
      },
    ],
    mightBeLabel: "You might be:",
    mightBe: [
      "Posting regularly but struggling to get past a few hundred views.",
      "Watching other accounts take off and wondering what you're missing.",
      "Getting views on some reels but struggling to repeat that success.",
      "Running out of fresh ideas that have the potential to reach new audiences.",
      "Spending hours creating content that barely gets any traction.",
      "Ready to stop treating every reel like a guessing game.",
      "Excited about the possibility of reaching thousands, hundreds of thousands or even millions of people.",
    ],
    qualifiers: [
      { text: "You don't need a massive following to join.", bold: true },
      { text: "You don't need to be an experienced content creator.", bold: false },
      {
        text: "You just need to be willing to learn, experiment and get your content in front of more people.",
        bold: false,
      },
    ],
    notForYouSubhead: "Hot & Viral probably isn't for you if...",
    notForYou: [
      "You want guaranteed viral results.",
      "You expect someone else to create all your content for you.",
      "You're not willing to take feedback or try something different.",
      "You want another course to buy, download and never open.",
    ],
    closing: [
      {
        text: "I'm here to help you get better at creating content with reach potential.",
        bold: false,
      },
      { text: "But you have to be willing to show up and do the work.", bold: false },
      {
        text: "If you're ready to stop playing small with your content, you're in the right room.",
        bold: true,
      },
    ],
    button: "YES, I'M READY. LET'S GO.",
  },
  onlyWay: {
    heading: "This is the only way to work with me right now.",
    body: `My 1:1 coaching is sold out. ICON Brand Partnership is sold out. The mastermind is closed. ${openingWindow}`,
  },
  pricing: {
    heading: "YOUR CONTENT COULD BE REACHING A WHOLE LOT MORE PEOPLE.",
    readySubhead: "So, are you ready to stop guessing?",
    paragraphs: [
      "You could keep trying to figure out Instagram on your own.",
      "Keep testing random hooks. Keep changing your captions. Keep wondering why someone else's reel gets 100,000 views while yours gets 300.",
      "Or you could get in the room with someone who knows what to look for.",
      "Inside HOT & VIRAL, you get live coaching, real account reviews, strategic feedback and a community of people who are working towards the same thing.",
      "And because you're joining during the launch window, you're getting access at my introductory membership rate.",
    ],
    offerHeading: "THE HOT & VIRAL LAUNCH OFFER",
    monthly: {
      amount: "$250",
      cadence: "CAD / MONTH",
      lock: "Your monthly rate is locked in for as long as you remain an active member.",
    },
    or: "OR",
    yearly: {
      amount: "$2,750",
      cadence: "CAD / YEAR",
      note: "That's $250 in savings compared with paying monthly for 12 months.",
    },
    gst: "Plus GST.",
    includesHeading: "WHAT YOU GET:",
    includes: [
      "Weekly Tuesday live coaching.",
      "Instagram and TikTok account reviews.",
      "Direct feedback on your content.",
      "Live content breakdowns.",
      "Recorded coaching calls.",
      "Private member community.",
      "Ongoing opportunities to learn, experiment and improve your content.",
    ],
    thingHeading: "HERE'S THE THING...",
    thingIntro: "This introductory price won't be available forever.",
    windows: [
      { label: "November 25–27, 2026:", body: "Join for $250 CAD/month." },
      { label: "Spring 2027:", body: "The monthly membership price increases to $500 CAD/month." },
    ],
    lockLine:
      "Join during the launch window and keep your $250 monthly rate for as long as your membership remains active.",
    cancel: "Cancel anytime.",
    closeLine: "Three days to get in. Then enrollment closes until spring.",
    button: "YES! I WANT HOT & VIRAL",
    closer: "Your next reel could be the one that reaches thousands. Let's work on making that happen.",
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
