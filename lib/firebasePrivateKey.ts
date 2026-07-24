export function normalizeFirebasePrivateKey(
  raw: string | undefined
): string | undefined {
  if (!raw) return undefined;

  let key = raw.trim();

  const jsonMatch = key.match(/"private_key"\s*:\s*"((?:\\.|[^"\\])*)"/);
  if (jsonMatch) {
    key = jsonMatch[1];
  }

  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1);
  }

  key = key.replace(/\\n/g, "\n").trim();

  if (!key.includes("BEGIN PRIVATE KEY")) {
    return undefined;
  }

  return key;
}
