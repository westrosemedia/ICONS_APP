/** Minimal YAML for single-line key: value frontmatter blocks. */
export function parseFlatYaml(raw: string): Record<string, string | number> {
  const out: Record<string, string | number> = {};
  for (const line of raw.split("\n")) {
    const m = line.match(/^([a-zA-Z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    const val = m[2].trim();
    if (key === "order" && /^\d+$/.test(val)) {
      out[key] = parseInt(val, 10);
    } else {
      out[key] = val;
    }
  }
  return out;
}
