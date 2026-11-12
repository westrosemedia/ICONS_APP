import { validateCoachingEmail } from "../lib/coachingWaitlist";

test("coaching waitlist rejects an empty or badly formed email", () => {
  expect(validateCoachingEmail("").ok).toBe(false);
  expect(validateCoachingEmail("stephanie").ok).toBe(false);
  expect(validateCoachingEmail("stephanie@westrose").ok).toBe(false);
});

test("coaching waitlist keeps a clean email", () => {
  const parsed = validateCoachingEmail("  Stephanie@WestRoseMedia.com ");
  expect(parsed).toEqual({ ok: true, email: "stephanie@westrosemedia.com" });
});
