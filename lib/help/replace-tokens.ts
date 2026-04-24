export const replaceTokens = (s: string) =>
  s
    .replaceAll("{{APP_URL}}", process.env.NEXT_PUBLIC_APP_URL ?? "https://app.cadence.com")
    .replaceAll("{{MARKETING_URL}}", process.env.NEXT_PUBLIC_MARKETING_URL ?? "https://cadence.com")
    .replaceAll("{{SUPPORT_EMAIL}}", process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "help@cadence.com")
    .replaceAll("{{SUPPORT_CHAT}}", process.env.NEXT_PUBLIC_SUPPORT_CHAT ?? "Chat with support");
