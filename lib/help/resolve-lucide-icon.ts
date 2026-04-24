import type { LucideIcon } from "lucide-react";
import * as Lucide from "lucide-react";

export function resolveLucideIcon(name: string): LucideIcon {
  const key = name
    .trim()
    .split(/[-_]/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join("");
  return (Lucide as Record<string, LucideIcon>)[key] ?? Lucide.CircleHelp;
}
