import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "help-center");

function commonBody(focus, shot = "main workspace") {
  return `## Overview

This guide covers **${focus}** in Cadence. Your live workspace is at {{APP_URL}}.

## What you will learn

- Where to find the right controls in Cadence.
- Recommended defaults and guardrails.
- What to verify before you publish.

## Walkthrough

1. Sign in and open the section from the sidebar.
2. Apply the settings described in each step below.
3. Save and confirm the preview matches what you expect on the network.

[SCREENSHOT: ${shot}]

## Related resources

Marketing site: {{MARKETING_URL}}

If you are stuck, email {{SUPPORT_EMAIL}} or use {{SUPPORT_CHAT}} inside the product.

[VIDEO: Short walkthrough of ${focus}]
`;
}

function mdBlock(collection, sub, a) {
  const body = a.body ?? commonBody(a.title, a.title);
  const subLine = sub ? `subCollection: ${sub}\n` : "";
  return `---\nslug: ${a.slug}\ntitle: ${a.title}\ncollection: ${collection}\n${subLine}order: ${a.order}\nsummary: ${a.summary}\n---\n\n${body}\n\n`;
}

function series(collection, sub, prefix, titles, startOrder) {
  return titles.map(([suffix, title], idx) => ({
    slug: `${prefix}-${suffix}`,
    title,
    summary: `Learn ${title.toLowerCase()} in Cadence.`,
    order: startOrder + idx,
  }));
}

mkdirSync(ROOT, { recursive: true });

const gettingStartedSubs = {
  "account-setup": series(
    "getting-started",
    "account-setup",
    "account",
    [
      ["create-workspace", "Create your Cadence workspace"],
      ["invite-users", "Invite teammates to Cadence"],
      ["roles-permissions", "Roles and permissions overview"],
      ["sso-saml", "SSO and SAML (team plans)"],
      ["security-checklist", "Security checklist for admins"],
    ],
    1
  ),
  "billing-plans": series(
    "getting-started",
    "billing-plans",
    "billing",
    [
      ["plans-compared", "Plans compared"],
      ["upgrade-downgrade", "Upgrade or downgrade your plan"],
      ["invoices-tax", "Invoices and tax IDs"],
      ["credits-refunds", "Credits and refunds policy"],
    ],
    1
  ),
  "first-schedule": series(
    "getting-started",
    "first-schedule",
    "first",
    [
      ["publish-first-post", "Publish your first scheduled post"],
      ["timezone-best-practices", "Timezone best practices"],
      ["mobile-quick-actions", "Mobile quick actions"],
    ],
    1
  ),
};

const scheduleSubs = {
  "social-profile-manager": [
    ...series("schedule-and-publishing", "social-profile-manager", "spm", [
      ["how-to-connect-instagram", "How to connect your Instagram profiles"],
      ["facebook-pages", "Connect Facebook Pages"],
      ["linkedin-company", "Connect LinkedIn Company Pages"],
      ["tiktok-account", "Connect TikTok"],
      ["pinterest-boards", "Connect Pinterest"],
      ["youtube-channel", "Connect YouTube"],
      ["threads-profiles", "Connect Threads"],
      ["reddit-subreddits", "Connect Reddit (beta)"],
      ["disconnect-reconnect", "Disconnect and reconnect safely"],
      ["profile-health", "Profile health and token refresh"],
    ], 1),
  ],
  "composer-editor": series("schedule-and-publishing", "composer-editor", "composer", [
    ["drafts-autosave", "Drafts and autosave"],
    ["hashtags-mentions", "Hashtags and mentions"],
    ["first-comments-instagram", "First comments on Instagram"],
    ["link-previews", "Link previews"],
    ["utm-parameters", "UTM parameters"],
    ["canva-import", "Import designs from Canva"],
    ["dropbox-assets", "Attach assets from Dropbox"],
    ["emoji-shortcuts", "Emoji shortcuts"],
  ], 1),
  "content-calendar": series("schedule-and-publishing", "content-calendar", "cal", [
    ["month-week-day-views", "Month, week, and day views"],
    ["drag-to-reschedule", "Drag to reschedule"],
    ["color-labels", "Color labels and filters"],
    ["team-visibility", "Team visibility on the calendar"],
    ["export-calendar", "Export to ICS"],
    ["conflict-warnings", "Conflict warnings"],
    ["queue-vs-scheduled", "Queue vs fixed time"],
  ], 1),
  "recycling-queue": series("schedule-and-publishing", "recycling-queue", "recycle", [
    ["evergreen-recycling", "Evergreen recycling"],
    ["pause-recycling", "Pause recycling for a profile"],
    ["rotation-limits", "Rotation limits"],
    ["exclude-holidays", "Exclude holidays"],
    ["smart-gaps", "Smart gaps between repeats"],
    ["recurring-post-patterns", "Recurring post patterns"],
  ], 1),
  "analytics-reports": series("schedule-and-publishing", "analytics-reports", "analytics", [
    ["post-performance", "Post performance overview"],
    ["engagement-by-network", "Engagement by network"],
    ["export-csv", "Export CSV reports"],
    ["team-activity-log", "Team activity log"],
    ["audience-growth", "Audience growth charts"],
    ["custom-date-ranges", "Custom date ranges"],
  ], 1),
  "teams-permissions": series("schedule-and-publishing", "teams-permissions", "team", [
    ["invite-reviewers", "Invite reviewers"],
    ["approval-workflows", "Approval workflows"],
    ["brand-guidelines", "Brand guidelines library"],
    ["content-locks", "Content locks while editing"],
    ["remove-member", "Remove a member"],
  ], 1),
  "integrations": series("schedule-and-publishing", "integrations", "integ", [
    ["slack-notifications", "Slack notifications"],
    ["google-drive", "Google Drive attachments"],
    ["api-overview", "Cadence API overview"],
    ["rate-limits", "Rate limits"],
  ], 1),
};

const spmArticles = scheduleSubs["social-profile-manager"];
spmArticles[0].slug = "how-to-connect-instagram";

const linkInBioSubs = {
  "pages-blocks": series("link-in-bio", "pages-blocks", "lib-page", [
    ["start-from-template", "Start from a template"],
    ["buttons-and-links", "Buttons and links"],
    ["featured-media", "Featured media blocks"],
    ["embed-forms", "Embed newsletter forms"],
    ["styling-themes", "Styling and themes"],
  ], 1),
  "domains-seo": series("link-in-bio", "domains-seo", "lib-domain", [
    ["custom-domain", "Connect a custom domain"],
    ["ssl-provisioning", "SSL provisioning"],
    ["seo-titles", "SEO titles and descriptions"],
    ["redirects", "Redirects"],
  ], 1),
  "tracking-pixels": series("link-in-bio", "tracking-pixels", "lib-track", [
    ["meta-pixel", "Meta Pixel"],
    ["google-analytics", "Google Analytics 4"],
    ["utm-builder", "UTM builder for bio links"],
  ], 1),
};

const scheduleTop = series("schedule-and-publishing", undefined, "sched-top", [
  ["instagram-recurring-post", "Instagram recurring posts"],
  ["cross-post-safety", "Cross-posting safety checklist"],
  ["holiday-pauses", "Holiday pauses across profiles"],
  ["content-approvals-101", "Content approvals 101"],
], 1);

const manifest = {
  collections: [
    {
      slug: "getting-started",
      title: "Getting Started",
      description:
        "Set up your Cadence workspace, billing, and your first scheduled posts with confidence.",
      icon: "rocket",
      articles: [],
      subCollections: Object.entries(gettingStartedSubs).map(([slug, articles]) => ({
        slug,
        title: slug
          .split("-")
          .map((w) => w[0].toUpperCase() + w.slice(1))
          .join(" "),
        description: `Articles about ${slug.replace(/-/g, " ")}.`,
        articles: articles.map(({ slug: s, title, summary, order }) => ({
          slug: s,
          title,
          summary,
          order,
        })),
      })),
    },
    {
      slug: "schedule-and-publishing",
      title: "Schedule & Publishing",
      description:
        "Connect profiles, compose posts, manage your calendar, recycling, analytics, and team workflows.",
      icon: "calendar",
      articles: scheduleTop.map(({ slug: s, title, summary, order }) => ({
        slug: s,
        title,
        summary,
        order,
      })),
      subCollections: Object.entries(scheduleSubs).map(([slug, articles]) => ({
        slug,
        title: slug
          .split("-")
          .map((w) => w[0].toUpperCase() + w.slice(1))
          .join(" "),
        description: `Deep dives for ${slug.replace(/-/g, " ")}.`,
        articles: articles.map(({ slug: s, title, summary, order }) => ({
          slug: s,
          title,
          summary,
          order,
        })),
      })),
    },
    {
      slug: "link-in-bio",
      title: "Link in Bio",
      description: "Build high-converting bio pages, connect domains, and measure performance.",
      icon: "link",
      articles: [],
      subCollections: Object.entries(linkInBioSubs).map(([slug, articles]) => ({
        slug,
        title: slug
          .split("-")
          .map((w) => w[0].toUpperCase() + w.slice(1))
          .join(" "),
        description: `Guides for ${slug.replace(/-/g, " ")}.`,
        articles: articles.map(({ slug: s, title, summary, order }) => ({
          slug: s,
          title,
          summary,
          order,
        })),
      })),
    },
  ],
};

function countArticles(col) {
  return col.articles.length + col.subCollections.reduce((n, s) => n + s.articles.length, 0);
}

const total = manifest.collections.reduce((n, c) => n + countArticles(c), 0);
if (total !== 74) console.warn(`Expected 74 articles, got ${total}`);

writeFileSync(join(ROOT, "content.json"), JSON.stringify(manifest, null, 2), "utf8");

const introGs = `# Getting Started

Welcome to Cadence. These articles walk you from account creation to your first successful publish.
`;

let mdGs = introGs;
for (const sub of manifest.collections[0].subCollections) {
  const items = gettingStartedSubs[sub.slug];
  for (const a of items) mdGs += mdBlock("getting-started", sub.slug, a);
}

const introSp = `# Schedule & Publishing

Everything about connected profiles, the composer, calendar, recycling, analytics, and team workflows.
`;

let mdSp = introSp;
for (const a of scheduleTop) mdSp += mdBlock("schedule-and-publishing", undefined, a);
for (const sub of manifest.collections[1].subCollections) {
  const items = scheduleSubs[sub.slug];
  for (const a of items) mdSp += mdBlock("schedule-and-publishing", sub.slug, a);
}

const introLib = `# Link in Bio

Design fast bio pages, wire up domains, and add the right tracking without leaving Cadence.
`;

let mdLib = introLib;
for (const sub of manifest.collections[2].subCollections) {
  const items = linkInBioSubs[sub.slug];
  for (const a of items) mdLib += mdBlock("link-in-bio", sub.slug, a);
}

writeFileSync(join(ROOT, "getting-started.md"), mdGs, "utf8");
writeFileSync(join(ROOT, "schedule-publishing.md"), mdSp, "utf8");
writeFileSync(join(ROOT, "link-in-bio.md"), mdLib, "utf8");

writeFileSync(
  join(ROOT, "BUILD_BRIEF.md"),
  `# Cadence Help Center — build brief

This folder is the **source of truth** for help content.

- \`BUILD_BRIEF.md\` — this file.
- \`content.json\` — navigation manifest (collections, sub-collections, article metadata).
- \`getting-started.md\`, \`schedule-publishing.md\`, \`link-in-bio.md\` — article bodies as consecutive frontmatter blocks.

The Next.js app reads these files at build time, generates static routes under \`/help\`, emits \`public/help-index.json\` for client search, and replaces \`{{…}}\` tokens at render time.

Regenerate markdown + manifest with \`node scripts/generate-help-content.mjs\` when you bulk-edit structure.
`,
  "utf8"
);

console.log(`Wrote help-center (${total} articles). Run prebuild or node scripts/build-help-index.mjs for search index.`);
