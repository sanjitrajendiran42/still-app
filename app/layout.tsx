import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = DM_Serif_Display({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Still — Quit Drinking, One Clear Day at a Time",
    template: "%s · Still",
  },
  description: "Still is a calm, private iPhone app to help adults quit drinking, beat urges, track clear days and build a personalized recovery plan.",
  applicationName: "Still",
  keywords: ["quit drinking", "sober", "sobriety", "alcohol free", "craving support", "recovery app"],
  authors: [{ name: "Still", url: siteUrl }],
  creator: "Sanjit Rajendiran",
  icons: {
    icon: "/app/icon.png",
    apple: "/app/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Still",
    title: "Quit drinking. Keep becoming you.",
    description: "A calm, private system for the next clear decision.",
    images: [{ url: new URL("/og.png", siteUrl).toString(), width: 1731, height: 909, alt: "Still — Quit drinking. Keep becoming you." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Still — Your clear way forward",
    description: "Quit drinking, beat urges and build your streak on iPhone.",
    images: [new URL("/og.png", siteUrl).toString()],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
