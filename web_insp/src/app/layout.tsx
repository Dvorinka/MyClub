import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyClub | SportCreative",
  description:
    "MyClub je SaaS platforma pro sportovní kluby: web, obsah, tým, zápasy a fanoušci v jednom.",
  keywords: [
    "sportovní klub",
    "SaaS",
    "web pro klub",
    "správa obsahu",
    "zápasy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <StickyCTA />
        <Footer />
      </body>
    </html>
  );
}
