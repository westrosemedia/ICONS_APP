// Homepage pictures and video — all Firebase links live HERE only.
// In Cursor: press Cmd+P (Mac) or Ctrl+P, type "homePageAssets", open this file.

export const homePageAssets = {
  // 1) Very top of the site — the moving background video
  topVideo:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Banner.mp4?alt=media",

  // 2) Very top — still image that shows while the video loads (optional; can match your video)
  topVideoStill:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_026.jpg?alt=media&token=35b646af-2e21-47e2-84ec-91543d8f9910",

  // 3) Behind “Your content is not neutral.” (face should stay in frame; tweak position in HomePageClient if needed)
  behindProblem:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR9774.jpg?alt=media&token=4b143443-d184-4db4-b310-4239e659cd1f",

  // 4) Behind “Two ways to work together right now.”
  behindTwoOffers:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_026.jpg?alt=media&token=35b646af-2e21-47e2-84ec-91543d8f9910",

  // 5) The big photo behind the “How it works” boxes
  behindHowItWorks:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_1477.jpg?alt=media&token=d2d64084-5115-465a-8759-0ad738cebabe",

  // 6) The photo behind “Ready to get started?”
  behindReadyToStart:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_2401.jpg?alt=media&token=f59d2da6-c4c7-4130-86f6-36191fd1ddd9",

  // 7) The photo behind the Mastermind section at the bottom
  behindMastermind:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_4770.jpg?alt=media&token=cf621cab-8ae4-4f0d-8639-d60d5cf2cbb6",
} as const;
