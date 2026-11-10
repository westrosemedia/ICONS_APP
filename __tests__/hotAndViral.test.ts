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

test("hero, section 2, and introducing hot and viral are Stephanie's exact words", () => {
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

  expect(copy.problem.heading).toBe("You're not creating content to be ignored. So why is nobody watching?");
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


  expect(copy.introducing.heading).toBe("WHAT IF YOUR NEXT REEL WAS THE ONE THAT TOOK OFF?");
  expect(copy.introducing.subheading).toBe("Welcome to HOT & VIRAL.");
  expect(copy.introducing.button).toBe("I WANT IN");
  expect(copy.introducing.paragraphs.map((paragraph) => paragraph.text)).toEqual([
    "This is where we stop throwing content at the wall and hoping something sticks.",
    "Hot & Viral is my live content coaching membership where we get inside your Instagram and TikTok accounts, look at what you're creating, and figure out how to give your content a much better chance of getting seen.",
    "We're talking about the hooks that make people stop scrolling.",
    "The ideas that make people curious.",
    "The videos people watch right to the end.",
    "The content people can't help but share.",
    "And the little things that can make a BIG difference to how far your content travels.",
    "And here's what makes this different.",
    "I'm not handing you another course with 47 lessons you'll never finish.",
    "I'm not giving you a generic list of trending audio and telling you to go figure it out.",
    "We're working on YOUR content.",
    "YOUR account.",
    "YOUR ideas.",
    "Every Tuesday, I bring my experience, my strategic eyes and my honest feedback into the room.",
    "You get to see what I'm seeing, understand why I'm recommending changes, and learn how to apply those strategies to your own content.",
    "Because the goal isn't to make one lucky reel go viral.",
    "It's to get better at creating content that has the potential to reach people far beyond your current audience.",
    "More reach. More views. More opportunities to go viral.",
    "That's what we're working towards inside HOT & VIRAL.",
  ]);
  expect(copy.introducing.paragraphs.filter((paragraph) => paragraph.bold).map((paragraph) => paragraph.text)).toEqual([
    "And here's what makes this different.",
    "More reach. More views. More opportunities to go viral.",
  ]);

  const problemAt = page.indexOf('id="problem-heading"');
  const introducingAt = page.indexOf('id="introducing-heading"');
  const proofAt = page.indexOf('id="proof-heading"');
  const copycatAt = page.indexOf('id="copycat-heading"');
  expect(problemAt).toBeGreaterThan(-1);
  expect(introducingAt).toBeGreaterThan(problemAt);
  expect(proofAt).toBeGreaterThan(introducingAt);
  expect(copycatAt).toBeGreaterThan(proofAt);
  expect(page).toContain("{copy.hero.button}");
  expect(page).toContain("{copy.introducing.button}");
  expect(page).toContain('state === "before" ? "#first-access" : "#pricing"');
  const introducingBlock = page.slice(introducingAt, proofAt);
  expect(introducingBlock).toContain("copy.introducing.paragraphs.map");
  expect(introducingBlock).toContain("{copy.introducing.button}");
  expect(introducingBlock).not.toContain("<li");
  expect(introducingBlock).not.toContain("copy.proof.button");
});

test("proof block is Stephanie's exact Cammy and Erin words", () => {
  expect(copy.proof.heading).toBe("DON'T JUST TAKE MY WORD FOR IT. LOOK AT THE VIEWS.");
  expect(copy.proof.subheading).toBe("Real accounts. Real content. Real reach.");
  expect(copy.proof.paragraphs.map((paragraph) => paragraph.text)).toEqual([
    "I'm not here to tell you that getting millions of views is possible without showing you what that can look like.",
    "Let's look at a couple of examples.",
  ]);
  expect(copy.proof.cammyHeading).toBe("CAMMY: FROM 200 VIEWS TO 1.4 MILLION.");
  expect(copy.cammy.story.map((paragraph) => paragraph.text)).toEqual([
    "Cammy had been posting consistently for six months.",
    "Her reels were averaging around 200 views.",
    "She was creating content, showing up and putting in the effort, but her videos weren't reaching the people she wanted to reach.",
    "We worked on her content strategy, looked at how she was communicating her ideas, and identified opportunities to make her videos more compelling.",
    "Two months later?",
    "One of her reels reached 1.4 MILLION VIEWS.",
    "That's what can happen when you stop guessing and start understanding what makes people watch and share.",
  ]);
  expect(copy.cammy.story.find((paragraph) => paragraph.marks)?.marks).toEqual(["1.4 MILLION VIEWS"]);
  expect(copy.proof.erinHeading).toBe("ERIN: FROM A FEW HUNDRED VIEWS TO THOUSANDS.");
  expect(copy.proof.erinParagraphs.map((paragraph) => paragraph.text)).toEqual([
    "Erin creates content around tapping and mindfulness for parents.",
    "Her reels were getting a few hundred views, and she wanted to reach more people who needed what she had to offer.",
    "We worked on her content and started making strategic changes.",
    "The result?",
    "One reel reached 5,258 VIEWS, and her account generated 94,337 VIEWS OVER 90 DAYS.",
    "That's more people discovering her content, more opportunities to connect with her audience, and a whole lot more eyes on her work.",
  ]);
  expect(copy.proof.erinParagraphs.find((paragraph) => paragraph.marks)?.marks).toEqual([
    "5,258 VIEWS",
    "94,337 VIEWS OVER 90 DAYS",
  ]);
  expect(copy.proof.closingHeading).toBe("AND THIS IS WHY I LOVE WHAT I DO.");
  expect(copy.proof.closing.map((paragraph) => paragraph.text)).toEqual([
    "Because sometimes the difference between content that gets 200 views and content that gets thousands isn't that you need to become a different creator.",
    "You need to understand what makes people stop scrolling.",
    "And that's exactly what we're going to work on inside HOT & VIRAL.",
    "Your next big-view reel could be closer than you think.",
  ]);
  expect(copy.proof.closing.filter((paragraph) => paragraph.bold).map((paragraph) => paragraph.text)).toEqual([
    "Your next big-view reel could be closer than you think.",
  ]);
  expect(copy.proof.button).toBe("GET FIRST ACCESS");
  expect(copy.hero.button).toBe("I WANT IN");
  expect(copy.introducing.button).toBe("I WANT IN");
  expect(copy.sticky.before).toBe("I WANT IN");
  expect(copy.sticky.open).toBe("I WANT IN");

  const page = fs.readFileSync(path.join(__dirname, "../components/hot-and-viral/HotAndViralPage.tsx"), "utf8");
  const proofBlock = page.slice(page.indexOf('id="proof"'), page.indexOf('id="ai-heading"'));
  expect(proofBlock).toContain("frames={cammyFrames}");
  expect(proofBlock).toContain("frames={erinFrames}");
  expect(proofBlock).toContain("plates={cammySummary ? [cammySummary] : []}");
  expect(proofBlock).toContain("plates={erinPlates}");
  expect(proofBlock).toContain("{copy.proof.button}");
  expect(proofBlock).not.toContain("{copy.hero.button}");
  expect(proofBlock).not.toContain("{copy.introducing.button}");
  expect(page).toContain('w-[210px]');
  expect(page).toContain("lg:grid-cols-[minmax(0,1fr)_auto]");
  expect(page).toContain('label: "Before"');
  expect(page).toContain('label: "After"');
  expect(page.match(/copy\.proof\.button/g)?.length).toBe(1);
  expect(page).not.toContain("She needed to communicate what she already knew differently.");
  expect(page).not.toContain("Erin teaches tapping");
  expect(page).not.toContain("Stop posting content that gets ignored");
  expect(page).not.toContain("You're posting into silence");
});

test("membership section is Stephanie's exact words, after proof and before pricing", () => {
  expect(copy.membership.heading).toBe("THIS IS WHERE WE GET INTO THE GOOD STUFF.");
  expect(copy.membership.subheading).toBe(
    "You're not joining another content library. You're getting access to my brain.",
  );
  expect(copy.membership.intro).toEqual([
    "Hot & Viral is built around one thing: helping you create content that gets more attention.",
    "And we're doing it together.",
    "Here's what happens when you become a member.",
  ]);
  expect(copy.membership.steps.map((step) => step.title)).toEqual([
    "01. LIVE CONTENT COACHING EVERY TUESDAY",
    "02. LIVE ACCOUNT BREAKDOWNS",
    "03. REPLAYS YOU CAN WATCH AGAIN",
    "04. YOUR PRIVATE HOT & VIRAL COMMUNITY",
    "05. A ROOM FULL OF CONTENT IDEAS AND MOMENTUM",
  ]);
  expect(copy.membership.steps[0]?.paragraphs).toEqual([
    "This is where the magic happens.",
    "Every Tuesday, we get together live and work on real content from real accounts.",
    "Bring your Instagram or TikTok account. Bring the reel that's flopped. Bring the idea you're not sure how to execute.",
    "I'll look at what's happening, share what I'm seeing, and give you practical feedback on what I'd change.",
    "No generic advice. No guessing. We're talking about YOUR content.",
  ]);
  expect(copy.membership.steps[1]?.paragraphs).toEqual([
    "Ever wish you could look over someone's shoulder while they figure out why their content isn't working?",
    "That's exactly why we review accounts together.",
    "I'll pull up member accounts and walk through the content, looking at things like:",
  ]);
  expect(copy.membership.steps[1]?.bullets).toEqual([
    "Hooks that need more punch.",
    "Content ideas with bigger reach potential.",
    "Why a reel might be losing people's attention.",
    "Opportunities to make content more shareable.",
    "Ways to create stronger curiosity and interest.",
  ]);
  expect(copy.membership.steps[1]?.after).toEqual([
    "And here's the bonus: even when we're reviewing someone else's account, you're learning how to look at your own differently.",
  ]);
  expect(copy.membership.steps[2]?.paragraphs).toEqual([
    "Can't make a Tuesday call? Want to revisit something we discussed?",
    "The calls are recorded so you can go back and revisit the coaching, ideas and feedback.",
    "Because sometimes the lightbulb moment happens the second time you hear something.",
  ]);
  expect(copy.membership.steps[3]?.paragraphs).toEqual([
    "You'll also get access to our private member space.",
    "Share your reels. Ask questions. Celebrate your wins. Get inspired by what other members are creating.",
    "It's a room full of people who understand what it's like to put yourself out there and want their content to reach more people.",
  ]);
  expect(copy.membership.steps[4]?.paragraphs).toEqual([
    "One of the biggest challenges with content is figuring out what to create next.",
    "Being surrounded by other business owners who are experimenting, learning and sharing ideas can help you see opportunities you might have missed.",
    "You'll start looking at content differently.",
    "And hopefully, you'll never look at a reel the same way again.",
  ]);
  expect(copy.membership.planHeading).toBe("HERE'S THE PLAN.");
  expect(copy.membership.plan).toEqual([
    { label: "Live coaching:", value: "Tuesdays at 10am MST." },
    { label: "Starting:", value: "December 1, 2026." },
    { label: "Platforms:", value: "Instagram and TikTok." },
    { label: "Access:", value: "Live coaching, call replays and private member community." },
  ]);
  expect(copy.membership.closing).toEqual([
    "Bring your account, bring your questions, and bring your willingness to experiment.",
    "I'll bring the strategy, the feedback and the fresh set of eyes.",
  ]);
  expect(copy.membership.button).toBe("I'M READY TO GET MORE VIEWS");
  expect(copy.hero.button).toBe("I WANT IN");
  expect(copy.introducing.button).toBe("I WANT IN");
  expect(copy.proof.button).toBe("GET FIRST ACCESS");

  const page = fs.readFileSync(path.join(__dirname, "../components/hot-and-viral/HotAndViralPage.tsx"), "utf8");
  const copySource = fs.readFileSync(path.join(__dirname, "../lib/hotAndViral.ts"), "utf8");
  const proofAt = page.indexOf('id="proof-heading"');
  const goodAt = page.indexOf('id="good-stuff-heading"');
  const pricingAt = page.indexOf('id="pricing"');
  expect(proofAt).toBeGreaterThan(-1);
  expect(goodAt).toBeGreaterThan(proofAt);
  expect(pricingAt).toBeGreaterThan(goodAt);
  expect(page).toContain("{copy.membership.heading}");
  expect(page).toContain("{copy.membership.button}");
  expect(page).toContain("<strong");
  expect(page).not.toContain("Imagine knowing exactly what to post next.");
  expect(copySource).not.toContain("Imagine knowing exactly what to post next.");
  expect(page).toContain("w-[210px]");
  expect(page).toContain("lg:grid-cols-[minmax(0,1fr)_auto]");
});

test("approved sales lines stay intact", () => {
  expect(copy.meta.title).toBe("Hot & Viral | West Rose Media");
  expect(copy.meta.description).toContain("November 25 to 27");
  expect(copy.hero.buttonBefore).toBe("Get first access");
  expect(copy.hero.buttonOpen).toBe("Join Hot & Viral");
  expect(copy.hero.window).toBe(openingWindow);
  expect(copy.ai.heading).toBe("AI can write you a caption. It can't build your point of view.");
  expect(copy.copycats.heading).toBe("When your content becomes the blueprint, you're doing something right.");
  expect(copy.copycats.paragraphs.join(" ")).toContain("understand WHY it works");
  expect(copy.membership.heading).toBe("THIS IS WHERE WE GET INTO THE GOOD STUFF.");
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
  const cammy = copy.cammy.story.map((paragraph) => paragraph.text).join(" ");
  expect(cammy).toContain("1.4 MILLION VIEWS");
  expect(cammy).toContain("Cammy had been posting consistently for six months.");
  expect(cammy).not.toContain("She needed to communicate what she already knew differently.");
  expect(cammy.toLowerCase()).not.toContain("can't promise");
  expect(copy.membership.plan.map((row) => `${row.label} ${row.value}`).join(" ")).toContain("December 1, 2026");
  expect(copy.membership.plan.map((row) => `${row.label} ${row.value}`).join(" ")).toContain("10am MST");
  expect(copy.membership.steps.flatMap((step) => step.paragraphs).join(" ")).toContain("The calls are recorded");
  expect(copy.faq.map((item) => item.a).join(" ")).toContain("Coaching is on the call, not in the chat.");
  expect(JSON.stringify(copy.membership).toLowerCase()).not.toContain("dm");
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

test("right room is Stephanie's exact words and sits before pricing", () => {
  expect(copy.rightRoom.heading).toBe("LET'S MAKE SURE YOU'RE IN THE RIGHT ROOM.");
  expect(copy.rightRoom.forYouSubhead).toBe("Hot & Viral is for you if...");
  expect(copy.rightRoom.forYou.map((paragraph) => paragraph.text)).toEqual([
    "You're a business owner, creator or entrepreneur who is tired of creating content that nobody seems to see.",
    "You're ready for more than another list of Instagram tips.",
    "You want to understand what makes people stop scrolling, watch your videos, share your content and discover your account.",
    "You're willing to experiment, try different approaches and actually put the coaching into practice.",
  ]);
  expect(copy.rightRoom.mightBeLabel).toBe("You might be:");
  expect(copy.rightRoom.mightBe).toEqual([
    "Posting regularly but struggling to get past a few hundred views.",
    "Watching other accounts take off and wondering what you're missing.",
    "Getting views on some reels but struggling to repeat that success.",
    "Running out of fresh ideas that have the potential to reach new audiences.",
    "Spending hours creating content that barely gets any traction.",
    "Ready to stop treating every reel like a guessing game.",
    "Excited about the possibility of reaching thousands, hundreds of thousands or even millions of people.",
  ]);
  expect(copy.rightRoom.qualifiers.map((paragraph) => paragraph.text)).toEqual([
    "You don't need a massive following to join.",
    "You don't need to be an experienced content creator.",
    "You just need to be willing to learn, experiment and get your content in front of more people.",
  ]);
  expect(copy.rightRoom.qualifiers.filter((paragraph) => paragraph.bold).map((paragraph) => paragraph.text)).toEqual([
    "You don't need a massive following to join.",
  ]);
  expect(copy.rightRoom.notForYouSubhead).toBe("Hot & Viral probably isn't for you if...");
  expect(copy.rightRoom.notForYou).toEqual([
    "You want guaranteed viral results.",
    "You expect someone else to create all your content for you.",
    "You're not willing to take feedback or try something different.",
    "You want another course to buy, download and never open.",
  ]);
  expect(copy.rightRoom.closing.map((paragraph) => paragraph.text)).toEqual([
    "I'm here to help you get better at creating content with reach potential.",
    "But you have to be willing to show up and do the work.",
    "If you're ready to stop playing small with your content, you're in the right room.",
  ]);
  expect(copy.rightRoom.closing.filter((paragraph) => paragraph.bold).map((paragraph) => paragraph.text)).toEqual([
    "If you're ready to stop playing small with your content, you're in the right room.",
  ]);
  expect(copy.rightRoom.button).toBe("YES, I'M READY. LET'S GO.");
  expect(copy.hero.button).toBe("I WANT IN");
  expect(copy.introducing.button).toBe("I WANT IN");

  const page = fs.readFileSync(path.join(__dirname, "../components/hot-and-viral/HotAndViralPage.tsx"), "utf8");
  const rightRoomAt = page.indexOf('id="right-room"');
  const pricingAt = page.indexOf('id="pricing"');
  const membershipAt = page.indexOf("THIS IS WHERE WE GET INTO THE GOOD STUFF.");
  expect(rightRoomAt).toBeGreaterThan(-1);
  expect(pricingAt).toBeGreaterThan(rightRoomAt);
  if (membershipAt !== -1) expect(rightRoomAt).toBeGreaterThan(membershipAt);
  const block = page.slice(rightRoomAt, pricingAt);
  expect(block).toContain("{copy.rightRoom.heading}");
  expect(block).toContain("{copy.rightRoom.forYouSubhead}");
  expect(block).toContain("{copy.rightRoom.notForYouSubhead}");
  expect(block).toContain("{copy.rightRoom.button}");
  expect(block).toContain("<StateButton");
  expect(page).toContain('state === "before" ? "#first-access" : "#pricing"');
  expect(page).toContain("{copy.hero.button}");
  expect(page).toContain("{copy.introducing.button}");
});

test("hot and viral keeps one quiet google reviews link and no quote block", () => {
  const page = fs.readFileSync(path.join(__dirname, "../components/hot-and-viral/HotAndViralPage.tsx"), "utf8");
  const copySource = fs.readFileSync(path.join(__dirname, "../lib/hotAndViral.ts"), "utf8");
  const shareUrl = "https://share.google/O5Gl6uzN8JRq35a59";

  expect(page.split(shareUrl).length - 1).toBe(1);
  expect(page).toContain("href={GOOGLE_REVIEWS_SHARE_URL}");
  expect(page).toContain('target="_blank"');
  expect(page).toContain('rel="noreferrer"');
  expect(page).toContain("Read the Google reviews");
  expect(page).toContain("The reviews are on the West Rose Media Google listing.");
  expect(page).not.toContain("https://www.google.com/search?q=west+rose+media+reviews");
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
