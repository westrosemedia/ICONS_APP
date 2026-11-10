import fs from "fs";
import path from "path";
import {
  DOORS_CLOSE_AT,
  DOORS_OPEN_AT,
  coachStats,
  copy,
  getPageState,
  memberResults,
  openingWindow,
  parsePreview,
  splitRemaining,
  validateSignup,
} from "../lib/hotAndViral";

function calgaryPart(ms: number, type: Intl.DateTimeFormatPartTypes) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Edmonton",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date(ms));
  return parts.find((part) => part.type === type)?.value;
}

test("doors open Wednesday November 25 2026 at midnight in Calgary", () => {
  expect(calgaryPart(DOORS_OPEN_AT, "weekday")).toBe("Wednesday");
  expect(calgaryPart(DOORS_OPEN_AT, "month")).toBe("November");
  expect(calgaryPart(DOORS_OPEN_AT, "day")).toBe("25");
  expect(calgaryPart(DOORS_OPEN_AT, "year")).toBe("2026");
  expect(calgaryPart(DOORS_OPEN_AT, "hour")).toBe("00");
  expect(calgaryPart(DOORS_OPEN_AT, "minute")).toBe("00");
});

test("doors close as Saturday November 28 2026 begins in Calgary", () => {
  expect(calgaryPart(DOORS_CLOSE_AT, "weekday")).toBe("Saturday");
  expect(calgaryPart(DOORS_CLOSE_AT, "day")).toBe("28");
  expect(calgaryPart(DOORS_CLOSE_AT, "hour")).toBe("00");
  expect(getPageState(DOORS_CLOSE_AT - 1)).toBe("open");
  expect(getPageState(DOORS_CLOSE_AT)).toBe("closed");
});

test("page state follows the three door windows", () => {
  expect(getPageState(DOORS_OPEN_AT - 1)).toBe("before");
  expect(getPageState(DOORS_OPEN_AT)).toBe("open");
  expect(getPageState(DOORS_CLOSE_AT + 1000)).toBe("closed");
});

test("countdown shows days hours minutes and seconds", () => {
  expect(splitRemaining(0)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  expect(splitRemaining((2 * 86400 + 3 * 3600 + 4 * 60 + 5) * 1000)).toEqual({
    days: 2,
    hours: 3,
    minutes: 4,
    seconds: 5,
  });
});

test("preview switch only accepts the three states", () => {
  expect(parsePreview("before")).toBe("before");
  expect(parsePreview("open")).toBe("open");
  expect(parsePreview("closed")).toBe("closed");
  expect(parsePreview("early")).toBeNull();
  expect(parsePreview(undefined)).toBeNull();
});

test("signup blocks empty and badly formed emails and keeps a clean address", () => {
  expect(validateSignup({ name: "  ", email: "stephanie@westrosemedia.com" }).ok).toBe(false);
  expect(validateSignup({ name: "Stephanie", email: "not-an-email" }).ok).toBe(false);
  expect(validateSignup({ name: "Stephanie", email: "  Stephanie@WestRoseMedia.com " })).toEqual({
    ok: true,
    name: "Stephanie",
    email: "stephanie@westrosemedia.com",
  });
});

test("approved sales lines stay intact", () => {
  expect(copy.meta.title).toBe("Hot & Viral | West Rose Media");
  expect(copy.meta.description).toContain("November 25 to 27");
  expect(copy.hero.headline).toBe("Stop posting content that gets ignored.");
  expect(copy.hero.buttonBefore).toBe("Get first access");
  expect(copy.hero.buttonOpen).toBe("Join Hot & Viral");
  expect(copy.hero.paragraphs).toEqual([
    "You don't need another content calendar, another trending audio or another AI-generated caption.",
    "You need to understand why people aren't stopping to watch, what your content is missing, and how to create posts that actually get noticed.",
    "Inside Hot & Viral, I'll show you exactly what's holding your Instagram and TikTok content back, and how to fix it.",
    "Your content deserves more than 200 views.",
  ]);
  expect(copy.problem.heading).toBe("You're not bad at content. You're just missing something.");
  expect(copy.problem.paragraphs.join(" ")).toContain(
    "The problem isn't necessarily how often you're posting. It's what you're putting in front of people and how you're communicating it.",
  );
  expect(copy.ai.heading).toBe("AI can write you a caption. It can't build your point of view.");
  expect(copy.copycats.heading).toBe("When your content becomes the blueprint, you're doing something right.");
  expect(copy.copycats.paragraphs.join(" ")).toContain("understand WHY it works");
  expect(copy.inside.heading).toBe("Imagine knowing exactly what to post next.");
  expect(copy.pricing.heading).toBe("Get in at the lowest price. Keep it for as long as you're a member.");
  expect(copy.pricing.paragraphs.join(" ")).toContain(
    "Not a temporary introductory rate.",
  );
  expect(copy.pricing.monthly.sale).toBe("$250");
  expect(copy.pricing.monthly.regular).toBe("$500 CAD/month");
  expect(copy.pricing.yearly.sale).toBe("$2,750");
  expect(copy.pricing.yearly.note).toContain("$250 less than paying monthly for twelve months");
  expect(copy.pricing.monthly.gst).toBe("Plus GST");
  expect(copy.pricing.yearly.gst).toBe("Plus GST");
  expect(copy.cammy.beforeStat).toBe("200 views");
  expect(copy.cammy.afterStat).toBe("1.4M views");
  const cammy = copy.cammy.story.join(" ");
  expect(cammy).toContain("1.4 million views");
  expect(cammy).toContain("She needed to communicate what she already knew differently.");
  expect(cammy.toLowerCase()).not.toContain("can't promise");
  expect(copy.inside.items[0]).toContain("The calls are recorded.");
  expect(copy.inside.items[0]).toContain("December 1, 2026");
  expect(copy.inside.items[0]).toContain("10am MST");
  expect(copy.inside.items.join(" ")).toContain("Coaching is on the call, not in the chat.");
  expect(copy.inside.items.join(" ").toLowerCase()).not.toContain("dm");
  expect(copy.pricing.cancel).toContain("You can cancel anytime.");
  expect(copy.pricing.cancel).toContain("The price lock ends when the membership ends.");
  expect(copy.pricing.paragraphs.join(" ").toLowerCase()).not.toContain("refund");
  expect(copy.firstAccess.success).toBe("You're in. Watch your inbox on November 25.");
  expect(copy.closed.success).toBe("You're on the list.");
  expect(copy.closed.heading).toBe("Hot & Viral is closed.");
  expect(copy.countdown.before).toBe("Doors open in");
  expect(copy.countdown.open).toBe("Doors close in");
  expect(copy.countdown.line).toBe(openingWindow);
  expect(copy.final.heading).toBe("You don't need to keep guessing.");
  expect(copy.final.paragraphs[0]).toContain("lock $250 CAD/month for as long as you remain a member.");
  expect(memberResults[0]?.name).toBe("Erin");
  expect(memberResults[0]?.afterStat).toBe("5,258 views");
  expect(coachStats.instagramFollowers).toBe("34,200 followers");
  expect(coachStats.tiktokFollowers).toBe("19,000 followers");
  expect(coachStats.viewsStat).toBe("2.7 million views in the last 30 days");

  const places = [copy.hero.window, copy.countdown.line, copy.pricing.paragraphs.join(" "), copy.final.paragraphs.join(" ")];
  for (const place of places) {
    expect(place).toContain(openingWindow);
  }

  const page = fs.readFileSync(path.join(__dirname, "../components/hot-and-viral/HotAndViralPage.tsx"), "utf8");
  expect(page).toContain("copy.hero.headline");
  expect(page).toContain("parts.days");
  expect(page).toContain("splitRemaining");
  expect(page).not.toMatch(/text-\[#f41cdc\][^>]*>\s*\d+\s*</);

  const blob = JSON.stringify(copy);
  const lowered = blob.toLowerCase();
  expect(lowered).not.toContain("locked for life");
  expect(lowered).not.toContain("no date set");
  expect(blob).not.toContain("347");
  expect(blob).not.toContain("You're posting into silence");
  expect(blob).not.toContain("200 views. 347. Maybe 600.");
  expect(blob).not.toContain("Someone with less experience just passed you.");
  expect(page).not.toContain("347");
  expect(page).not.toContain("You're posting into silence");
  expect(copy.closed.body).toContain("spring 2027");
  expect(copy.closed.body).toContain("$500 CAD/month");
});

test("hot and viral keeps one quiet google reviews link and no quote block", () => {
  const page = fs.readFileSync(path.join(__dirname, "../components/hot-and-viral/HotAndViralPage.tsx"), "utf8");
  const copySource = fs.readFileSync(path.join(__dirname, "../lib/hotAndViral.ts"), "utf8");
  const shareUrl = "https://share.google/O5Gl6uzN8JRq35a59";

  expect(page.split(shareUrl).length - 1).toBe(1);
  expect(page).toContain('target="_blank"');
  expect(page).toContain('rel="noreferrer"');
  expect(page).toContain("Read the Google reviews");
  expect(page).not.toContain("googleReviews");
  expect(page).not.toContain("blockquote");
  expect(page).not.toContain("5.0 from 33");
  expect(copySource).not.toContain("googleReviews");
  expect(copySource).not.toContain("5.0 from 33");

  for (const name of ["Brooke", "Abby", "Gigi", "Whitney"]) {
    expect(page).not.toContain(name);
    expect(copySource).not.toContain(name);
  }
});
