import fs from "fs";
import path from "path";
import {
  DOORS_CLOSE_AT,
  DOORS_OPEN_AT,
  coachStats,
  copy,
  getPageState,
  memberResults,
  parsePreview,
  splitRemaining,
  validateSignup,
} from "../lib/hotAndViral";
import { GOOGLE_REVIEWS_URL } from "../lib/siteLinks";

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
  expect(copy.hero.buttonOpen).toBe("Join Hot & Viral");
  expect(copy.pricing.monthly.sale).toBe("$250");
  expect(copy.pricing.monthly.regular).toBe("$500 CAD/month");
  expect(copy.pricing.yearly.sale).toBe("$2,750");
  expect(copy.pricing.yearly.note).toContain("$250 less than twelve monthly payments");
  expect(copy.pricing.monthly.gst).toBe("Plus GST");
  expect(copy.pricing.yearly.gst).toBe("Plus GST");
  expect(copy.cammy.beforeStat).toBe("200 views");
  expect(copy.cammy.afterStat).toBe("1.4M views");
  expect(copy.cammy.story).toContain("1.4 million views");
  expect(copy.cammy.story.toLowerCase()).toContain("can't promise");
  const tuesday = `${copy.inside.steps[0].title} ${copy.inside.steps[0].text}`;
  expect(tuesday).toContain("The calls are recorded.");
  expect(tuesday).toContain("December 1, 2026");
  expect(tuesday).toContain("10am MST");
  expect(copy.hero.checklist.join(" ")).toContain("Coaching is on the call, not in the chat.");
  expect(copy.pricing.cancel).toBe("You can cancel anytime.");
  expect(copy.firstAccess.success).toBe("You're in. Watch your inbox on November 25.");
  expect(copy.closed.success).toBe("You're on the list.");
  expect(copy.closed.heading).toBe("Hot & Viral is closed.");
  expect(copy.countdown.before).toBe("Doors open in");
  expect(copy.countdown.open).toBe("Doors close in");
  expect(copy.countdown.line.replace(/\u00a0/g, " ")).toBe(
    "3 days only. Then it is closed until spring 2027, at double the price.",
  );
  expect(memberResults[0]?.name).toBe("Erin");
  expect(memberResults[0]?.afterStat).toBe("5,258 views");
  expect(coachStats.instagramFollowers).toBe("34,200 followers");
  expect(coachStats.tiktokFollowers).toBe("19,000 followers");
  expect(coachStats.viewsStat).toBe("2.7 million views in the last 30 days");

  const places = [
    copy.hero.windowLines.join(" "),
    copy.countdown.line,
    [copy.pricing.heading, copy.pricing.note, copy.pricing.monthly.lock, copy.pricing.yearly.note].join(" "),
    [copy.final.heading, copy.final.body].join(" "),
  ];
  for (const place of places) {
    expect(place.toLowerCase()).toContain("3 day");
    expect(place.toLowerCase().replace(/\u00a0/g, " ")).toContain("spring 2027");
    expect(place.toLowerCase()).toContain("double");
  }

  const blob = JSON.stringify(copy).toLowerCase();
  expect(blob).not.toContain("locked for life");
  expect(blob).not.toContain("no date set");
  expect(copy.closed.body.toLowerCase()).toContain("spring 2027");
  expect(copy.closed.body).toContain("$500 CAD/month");
});

test("google reviews link is the West Rose Media listing and quotes nothing unread", () => {
  expect(GOOGLE_REVIEWS_URL).toBe(
    "https://www.google.com/search?q=west+rose+media+reviews#mpd=~14691031191379244407/customers/reviews",
  );
  expect(copy.googleReviews.link).toBe("Read the Google reviews");
  expect(copy.googleReviews.line).toBe("The reviews are on the West Rose Media Google listing.");
  expect(copy.googleReviews.quotes).toEqual([]);
  const page = fs.readFileSync(path.join(__dirname, "../components/hot-and-viral/HotAndViralPage.tsx"), "utf8");
  expect(page).toContain("href={GOOGLE_REVIEWS_URL}");
  expect(page).toContain('target="_blank"');
  expect(page).toContain('rel="noopener noreferrer"');
  expect(page).not.toMatch(/[0-9](\.[0-9])?\s*stars?/i);
});
