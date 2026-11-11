import {
  cammyMore,
  cammyShots,
  memberResults,
  winShots,
  type HotAndViralImage,
} from "@/lib/hotAndViral";

function proofImage(src: string): HotAndViralImage {
  const pool: Array<HotAndViralImage | null> = [
    ...winShots,
    ...cammyMore,
    cammyShots.before,
    cammyShots.after,
    ...memberResults.flatMap((member) => [
      member.before,
      member.after,
      member.summary ?? null,
      member.profile ?? null,
    ]),
  ];
  const image = pool.find((item) => item?.src === src);
  if (!image) {
    throw new Error(`Result image is missing: ${src}`);
  }
  return image;
}

/** Short result lines for the homepage group. Facts already on each file. */
export const homepageResults = [
  {
    image: proofImage("/hot-and-viral/cammy-after-1-4m.jpg"),
    caption: "Cammy’s reel reached 1,417,529 views.",
  },
  {
    image: proofImage("/hot-and-viral/reel-401k-follows.jpg"),
    caption: "Stephanie Rose’s reel reached 401,794 views and 12,157 follows.",
  },
  {
    image: proofImage("/hot-and-viral/erin-after.jpg"),
    caption: "One of Erin’s later reels reached 5,258 views.",
  },
  {
    image: proofImage("/hot-and-viral/erin-summary.jpg"),
    caption:
      "From August 11 to November 8, Erin’s account generated 94,337 views, up 483.6% versus August 10.",
  },
];

/** Fuller stories for /results. Same sentences as the previous homepage blocks. */
export const clientResultStories = [
  {
    name: "Erin",
    blocks: [
      {
        image: proofImage("/hot-and-viral/erin-after.jpg"),
        paragraphs: [
          "One of Erin’s later reels reached 5,258 views.",
          "Erin creates content around tapping and mindfulness for parents.",
        ],
      },
      {
        image: proofImage("/hot-and-viral/erin-summary.jpg"),
        paragraphs: [
          "From August 11 to November 8, Erin’s account generated 94,337 views, up 483.6% versus August 10.",
          "Erin creates content around tapping and mindfulness for parents.",
        ],
      },
    ],
  },
  {
    name: "Cammy",
    blocks: [
      {
        image: proofImage("/hot-and-viral/cammy-after-1-4m.jpg"),
        paragraphs: [
          "Cammy’s reel reached 1,417,529 views.",
          "Cammy had been posting consistently for six months.",
        ],
      },
    ],
  },
  {
    name: "Stephanie Rose",
    blocks: [
      {
        image: proofImage("/hot-and-viral/reel-401k-follows.jpg"),
        paragraphs: ["Stephanie Rose’s reel reached 401,794 views and 12,157 follows."],
      },
    ],
  },
];
