import fs from "fs";
import path from "path";

test("PPB page contains exact approved copy", () => {
  const file = fs.readFileSync(path.join(process.cwd(), "app/powerfulpersonalbrand/page.tsx"), "utf8");
  const mustContain = [
    "Imagine this. The market takes a nosedive.",
    "Your presence keeps working for you even when you step away.",
    "Powerful Personal Brand is the signature program of West Rose Media.",
    "It has been completely revamped, re recorded, and leveled up.",
    "Over 8 weeks we will build a brand that:",
    "First cohort begins",
    "Use the presale price now: $2,000",
    "There will not be another presale for January."
  ];
  for (const line of mustContain) {
    expect(file).toContain(line);
  }
});
