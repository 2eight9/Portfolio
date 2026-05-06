import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  title: "Apriliano Boimau",
  description:
    "Portfolio of Apriliano Ernando Benyamin Boimau — Frontend Developer & ML Enthusiast",
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
      </body>
    </html>
  );
}
