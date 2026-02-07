import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mas LED | Next-Gen LED Displays That Inspire",
  description: "Premium B2B LED display solutions engineered for impact. Commercial, outdoor, transparent, and interactive LED displays for businesses across India.",
  keywords: "LED displays, B2B LED, commercial LED, outdoor billboards, transparent LED, India",
  openGraph: {
    title: "Mas LED | Next-Gen LED Displays That Inspire",
    description: "Premium B2B LED display solutions engineered for impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
