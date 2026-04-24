import { replaceTokens } from "@/lib/help/replace-tokens";

/** Plain text for search index (no HTML). */
export function markdownToPlainText(md: string): string {
  let s = replaceTokens(md);
  s = s.replace(/```[\s\S]*?```/g, " ");
  s = s.replace(/^#{1,6}\s+/gm, "");
  s = s.replace(/^\s*[-*+]\s+/gm, "");
  s = s.replace(/^\s*\d+\.\s+/gm, "");
  s = s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  s = s.replace(/[*_`]+/g, "");
  s = s.replace(/\[SCREENSHOT:[^\]]+\]/gi, "");
  s = s.replace(/\[VIDEO:[^\]]+\]/gi, "");
  s = s.replace(/\s+/g, " ").trim();
  return s;
}
