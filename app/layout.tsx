import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sites.google.com/view/mrkhandipu"),
  title: {
    default: "M R KHAN DIPU — Software Engineer | Data Scientist | Researcher",
    template: "%s | M R KHAN DIPU",
  },
  description:
    "Production portfolio of M R Khan Dipu. Software Engineering graduate, full-stack web developer, and biomedical AI/ML researcher based in Dhaka, Bangladesh.",
  keywords: [
    "M R Khan Dipu",
    "Software Engineer",
    "Data Scientist",
    "AI Researcher",
    "Machine Learning",
    "Next.js",
    "React",
    "Biomedical Signal Processing",
    "Dhaka, Bangladesh",
  ],
  authors: [{ name: "M R Khan Dipu", url: "https://sites.google.com/view/mrkhandipu" }],
  creator: "M R Khan Dipu",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sites.google.com/view/mrkhandipu",
    title: "M R KHAN DIPU — Software Engineer | Data Scientist | Researcher",
    description:
      "Production portfolio of M R Khan Dipu. Software Engineering graduate, full-stack web developer, and biomedical AI/ML researcher.",
    siteName: "M R Khan Dipu Portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--text-secondary)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
