# Cadence Help Center — build brief

This folder is the **source of truth** for help content.

- `BUILD_BRIEF.md` — this file.
- `content.json` — navigation manifest (collections, sub-collections, article metadata).
- `getting-started.md`, `schedule-publishing.md`, `link-in-bio.md` — article bodies as consecutive frontmatter blocks.

The Next.js app reads these files at build time, generates static routes under `/help`, emits `public/help-index.json` for client search, and replaces `{{…}}` tokens at render time.

Regenerate markdown + manifest with `node scripts/generate-help-content.mjs` when you bulk-edit structure.
