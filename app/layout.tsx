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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
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
