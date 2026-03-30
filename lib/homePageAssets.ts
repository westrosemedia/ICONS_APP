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
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_075.jpg?alt=media&token=ae30650a-5ad9-43ed-8723-a237d5b551a4",

  // 6) The photo behind “Ready to get started?”
  behindReadyToStart:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR7086.jpg?alt=media&token=6bf7e2b2-0eab-46cf-bc95-8a1729102797",

  // 7) The photo behind the Mastermind section at the bottom
  behindMastermind:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285",
} as const;
