import type { Metadata } from "next";
import { Geist,Geist_Mono, Tinos } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

// Tinos - serif font for headings (replaces Playfair Display)
const tinos = Tinos({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "700"],
  preload: true,
});

// Geist - Google Font sans-serif for body/UI
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  preload: true,
});

// Geist Mono - monospace font for nav, labels
const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
});

export const metadata: Metadata = {
  title: "Rachel Chen | Product Designer + Engineer",
  description: "Product Designer + Engineer portfolio featuring AI & hardware projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${tinos.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
