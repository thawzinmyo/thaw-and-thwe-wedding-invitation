import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Outfit } from "next/font/google";
import "./globals.css";

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thaw & Thwe — Wedding Invitation",
  description:
    "Join Thaw and Thwe on Wednesday, 30 December 2026 at No.24 The Glass House.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${script.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
