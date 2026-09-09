import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RE A Thakgala Trading Enterprise | Civil Engineering & Construction",
    template: "%s | RE A Thakgala Trading Enterprise",
  },
  description:
    "RE A Thakgala Trading Enterprise — Professional civil engineering, construction, procurement and supply solutions in South Africa. Building today for a stronger tomorrow.",
  keywords: [
    "civil engineering South Africa",
    "civil construction South Africa",
    "construction company South Africa",
    "civil engineering contractor",
    "construction contractor",
    "infrastructure construction",
    "construction materials supplier",
    "procurement and supply",
    "RE A Thakgala Trading Enterprise",
  ],
  openGraph: {
    title: "RE A Thakgala Trading Enterprise",
    description:
      "Professional civil engineering, construction, procurement and supply solutions in South Africa.",
    type: "website",
    locale: "en_ZA",
    siteName: "RE A Thakgala Trading Enterprise",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="min-h-screen flex flex-col bg-obsidian text-silver antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
