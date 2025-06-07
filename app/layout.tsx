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
  title: "TWS",
  description: "Information about The Wall Survival [SRP] server",
  openGraph: {
    title: "TWS",
    description: "Information about The Wall Survival [SRP] server",
    url: "https://countdown-tws.vercel.app/",
    siteName: "TWS",
    images: [
      {
        url: "https://countdown-tws.vercel.app/images/og-image.png",
        width: 1200,
        height: 497,
        alt: "The Wall Survival",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TWS",
    description: "Information about The Wall Survival [SRP] server",
    images: ["https://countdown-tws.vercel.app/images/og-image.png"],
  },
  metadataBase: new URL("https://countdown-tws.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${KanitFont.variable}`}>
        <MainLayout>{children}</MainLayout>
        <Analytics />
      </body>
    </html>
  );
}
