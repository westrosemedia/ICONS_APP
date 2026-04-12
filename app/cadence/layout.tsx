import { Bodoni_Moda } from "next/font/google";

/**
 * Giaza is the brand-specified display font for the cadence wordmark.
 * Bodoni Moda is loaded here as a licensed web-font substitute until Giaza webfont files are self-hosted.
 */
const cadenceDisplay = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-cadence-display",
  display: "swap",
});

export default function CadenceLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${cadenceDisplay.variable} min-w-0`}>{children}</div>;
}
