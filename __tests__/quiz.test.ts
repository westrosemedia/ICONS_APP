import fs from "fs";
import path from "path";

test("quiz questions contain exact approved prompts", () => {
  const file = fs.readFileSync(path.join(process.cwd(), "components/quiz/quizData.ts"), "utf8");
  const mustContain = [
    "What's holding you back from the next level right now?",
    "When you picture your business a year from now, what excites you the most?",
    "How does content feel in your business right now?",
    "What's the big audacious goal you're chasing right now?",
    "How much of your content do you want taken off your plate?",
    "When it comes to content and visibility, how much are you doing alone right now?"
  ];
  for (const line of mustContain) expect(file).toContain(line);
});

test("result copy contains key approved lines", () => {
  const file = fs.readFileSync(path.join(process.cwd(), "components/quiz/quizData.ts"), "utf8");
  const mustContain = [
    "Your Result: The Spotlight Package",
    "Your Result: The WRM Lite Package",
    "Your Result: The Immersion Package",
    "Your Result: The ICON Package",
    "This is how you step into the spotlight and claim the authority you already are.",
    "This is how you transform your events into an engine for growth.",
    "This is the move that ensures your vision stays alive without you chasing it."
  ];
  for (const line of mustContain) expect(file).toContain(line);
});
