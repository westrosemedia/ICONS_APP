export const BIRTHDAY_CAMPAIGN = {
  // Campaign ends end of day Oct 13 in America/Edmonton time
  endISO: "2025-10-14T05:59:59.000Z", // 23:59:59 Oct 13 MDT is 05:59:59 UTC Oct 14
  title: "Birthday Week at West Rose Media",
  subtitle: "Four days. Five offers. Pick what moves you forward today.",
};

export function msUntilEnd(now = new Date()) {
  const end = new Date(BIRTHDAY_CAMPAIGN.endISO);
  return Math.max(0, end.getTime() - now.getTime());
}

export function formatRemaining(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}
