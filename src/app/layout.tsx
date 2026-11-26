import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daa729.github.io"),
  title: {
    default: "Anderson Allen | Portfolio",
    template: "%s | Anderson Allen",
  },
  description:
    "Portfolio of Anderson Allen: interactive software engineering, Unity/VR development, and collegiate esports.",
  openGraph: {
    title: "Anderson Allen | Portfolio",
    description: "Interactive software engineering, Unity/VR development, and collegiate esports.",
    url: "/",
    siteName: "Anderson Allen",
    type: "website",
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#0E131B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
