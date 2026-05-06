import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageContext";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Apriliano Boimau",
  description:
    "Portfolio of Apriliano Ernando Benyamin Boimau — Frontend Developer & ML Enthusiast",
  // Blok Verifikasi Google Search Console:
  verification: {
    google: "wLcLN7e2xqX8WWKNA9bhEkz2Bo86sHkRoGQYVoOxcYo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>

        {/* Google Analytics dari Next.js */}
        <GoogleAnalytics gaId="G-CZ4W4F0JE3" />
      </body>
    </html>
  );
}
