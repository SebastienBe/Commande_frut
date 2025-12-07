import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RelayBookings · Merchant-grade reservation OS",
  description:
    "A SaaS B2B reservation platform combining Supabase, Stripe, and modern automation.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "RelayBookings",
    description: "Merchant dashboards and public booking flows in one stack.",
    url: "https://example.com",
    siteName: "RelayBookings",
    images: [
      {
        url: "https://example.com/og.png",
        width: 1200,
        height: 630,
        alt: "RelayBookings dashboard preview",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground",
          geistSans.variable,
          geistMono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
