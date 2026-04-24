export type MdOrPlaceholder =
  | { type: "md"; text: string }
  | { type: "ph"; kind: "screenshot" | "video"; label: string };

const RE = /\[SCREENSHOT:\s*([^\]]+)\]|\[VIDEO:\s*([^\]]+)\]/gi;

export function splitMediaPlaceholders(markdown: string): MdOrPlaceholder[] {
  const out: MdOrPlaceholder[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  const re = new RegExp(RE.source, RE.flags);
  while ((m = re.exec(markdown)) !== null) {
    if (m.index > last) {
      out.push({ type: "md", text: markdown.slice(last, m.index) });
    }
    if (m[1]) {
      out.push({ type: "ph", kind: "screenshot", label: m[1].trim() });
    } else if (m[2]) {
      out.push({ type: "ph", kind: "video", label: m[2].trim() });
    }
    last = m.index + m[0].length;
  }
  if (last < markdown.length) {
    out.push({ type: "md", text: markdown.slice(last) });
  }
  return out;
}
