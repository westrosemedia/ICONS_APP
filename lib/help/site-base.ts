export function helpSiteBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    process.env.VERCEL_URL?.replace(/^(?!https)/, "https://") ??
    "https://westrosemedia.com"
  );
}
