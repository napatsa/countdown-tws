import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import { Kanit } from "next/font/google";
import MainLayout from "../components/MainLayout";
import type { Metadata } from "next";

const KanitFont = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TWS - The Wall Survival",
  description: "Information about The Wall Survival [SRP] server",
  keywords: ["TWS", "The Wall Survival", "SRP", "roleplay", "server"],
  authors: [{ name: "TWS Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",

  // Open Graph
  openGraph: {
    title: "TWS - The Wall Survival",
    description: "Information about The Wall Survival [SRP] server",
    url: "https://countdown-tws.vercel.app",
    siteName: "TWS",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.png", // ใช้ relative path
        width: 1200,
        height: 630, // เปลี่ยนเป็น 630 (มาตรฐาน OG)
        alt: "The Wall Survival",
        type: "image/png",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "TWS - The Wall Survival",
    description: "Information about The Wall Survival [SRP] server",
    images: ["/images/og-image.png"],
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Verification
  verification: {
    google: "your-google-verification-code", // เพิ่มถ้ามี
  },

  metadataBase: new URL("https://countdown-tws.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      {" "}
      {/* เปลี่ยนเป็น th ถ้าเว็บเป็นภาษาไทย */}
      <head>
        {/* เพิ่ม manual meta tags ถ้าจำเป็น */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${KanitFont.variable} antialiased`}>
        <MainLayout>{children}</MainLayout>
        <Analytics />
      </body>
    </html>
  );
}
