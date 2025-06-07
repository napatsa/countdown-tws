import "./globals.css";

import { Analytics } from "@vercel/analytics/next";
import Head from "next/head";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="TWS" />
        <meta
          property="og:description"
          content="Information about The Wall Survival [SRP] server"
        />
        <meta
          property="og:image"
          content="https://countdown-tws.vercel.app/images/tws.png"
        />
        <meta property="og:url" content="https://countdown-tws.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={`${KanitFont.variable}`}>
        <MainLayout>{children}</MainLayout>
        <Analytics />
      </body>
    </html>
  );
}
