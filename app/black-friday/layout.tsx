import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Friday 2024 | Exclusive Offers | West Rose Media",
  description: "Black Friday specials on Movement Makers Mastermind, photography packages, and business coaching. Limited time offers - sign up now!",
  openGraph: {
    title: "Black Friday 2024 | Exclusive Offers | West Rose Media",
    description: "Black Friday specials on Movement Makers Mastermind, photography packages, and business coaching. Limited time offers - sign up now!",
  },
};

export default function BlackFridayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


