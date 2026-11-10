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

test("hero opening is Stephanie's exact words", () => {
  expect(copy.hero.eyebrow).toBe("HOT & VIRAL");
  expect(copy.hero.headline).toBe(
    "You're showing up. You're posting. You're putting in the work. So why are your reels still struggling to get past 300 views?",
  );
  expect(copy.hero.paragraphs.map((paragraph) => paragraph.text)).toEqual([
    "You know your work is good. Your clients know it. But when it comes to getting that same attention online, something isn't clicking.",
    "You're trying different hooks, changing your captions, testing trending audio and doing all the things you're told you're supposed to do.",
    "And yet, the views aren't moving. The right people aren't finding you. And you're starting to wonder what you're missing.",
    "Here's the thing: posting more isn't necessarily the answer.",
    "Sometimes it's your messaging. Sometimes it's your content strategy. Sometimes you're making small mistakes that are costing you big opportunities to get seen.",
    "That's where I come in.",
    "I'm Stephanie Rose, founder of West Rose Media, and I want to help you stop guessing what to post and start understanding what actually makes people pay attention.",
    "Welcome to HOT & VIRAL.",
    "The live content coaching room where we look at your actual account, break down your content, and figure out what needs to change.",
  ]);
  expect(copy.hero.paragraphs.filter((paragraph) => paragraph.bold).map((paragraph) => paragraph.text)).toEqual([
    "That's where I come in.",
    "Welcome to HOT & VIRAL.",
  ]);
  expect(copy.hero.button).toBe("I WANT IN");
  expect(copy.sticky.before).toBe("I WANT IN");
  expect(copy.sticky.open).toBe("I WANT IN");

  const heroText = [copy.hero.eyebrow, copy.hero.headline, ...copy.hero.paragraphs.map((paragraph) => paragraph.text)].join(
    "\n",
  );
  expect(heroText).not.toContain("200 views. 347. Maybe 600.");
  expect(heroText).not.toContain("You're posting into silence.");
  expect(heroText).not.toContain("Someone with less experience just passed you.");
  expect(heroText).not.toContain("Stop posting content that gets ignored.");

  const page = fs.readFileSync(path.join(__dirname, "../components/hot-and-viral/HotAndViralPage.tsx"), "utf8");
  expect(page).toContain("<h1");
  expect(page).toContain("{copy.hero.headline}");
  expect(page).toContain("{copy.hero.button}");
  expect(page).toContain('state === "before" ? "#first-access" : "#pricing"');
});

test("section 2 is why the content is not working, in Stephanie's exact words", () => {
  expect(copy.problem.heading).toBe(
    "You're not creating content to be ignored. So why is nobody watching?",
  );
  expect(copy.problem.paragraphs.map((paragraph) => paragraph.text)).toEqual([
    "Let's be honest.",
    "You're spending time coming up with ideas, filming reels, editing videos, writing captions and trying to figure out what Instagram wants from you this week.",
    "And for what?",
    "200 views. Maybe 300. Occasionally one surprises you and hits 1,000.",
    'Meanwhile, you\'re watching other creators rack up 50K, 100K or even a million views on content that makes you wonder, "How the hell did THAT take off?"',
    "Here's what you need to understand.",
    "Going viral isn't just luck. And it's definitely not about posting more.",
    "There are things that make people stop scrolling. Things that make them curious enough to keep watching. Things that make them want to share your content with someone else.",
    "Your hook matters. Your topic matters. Your delivery matters. And the way you package an idea can be the difference between a reel that gets ignored and one that gets shared thousands of times.",
    "The problem?",
    "Most people are creating content without understanding why some videos take off and others don't.",
    "They're guessing.",
    "And guessing is an expensive content strategy.",
    "It's time to understand what makes people WATCH, SHARE and FOLLOW.",
  ]);
  expect(copy.problem.paragraphs.filter((paragraph) => paragraph.bold).map((paragraph) => paragraph.text)).toEqual([
    "Going viral isn't just luck. And it's definitely not about posting more.",
    "It's time to understand what makes people WATCH, SHARE and FOLLOW.",
  ]);

  const page = fs.readFileSync(path.join(__dirname, "../components/hot-and-viral/HotAndViralPage.tsx"), "utf8");
  expect(page).toContain('id="why-the-content-is-not-working"');
  expect(page).toContain("{copy.problem.heading}");
  expect(page).toContain("copy.problem.paragraphs.map");
  expect(page).not.toContain("copy.problem.cards");
  expect(page).not.toContain("200 views. 347. Maybe 600.");

  const copySource = fs.readFileSync(path.join(__dirname, "../lib/hotAndViral.ts"), "utf8");
  expect(copySource).toContain("200 views. Maybe 300. Occasionally one surprises you and hits 1,000.");
  expect(copySource).not.toContain("200 views. 347. Maybe 600.");
  expect(copySource).not.toContain("200. Then 347. Then 600.");
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
