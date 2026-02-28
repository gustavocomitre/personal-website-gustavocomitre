import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const BASE_URL = "https://gustavocomitre.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Gustavo Comitre — Head of Product | Healthcare",
    template: "%s — Gustavo Comitre",
  },
  description:
    "Head of Product in Healthcare. 90M+ users impacted, 3 companies built. Obsessed with shipping beautiful health products that change lives.",
  keywords: [
    "Gustavo Comitre",
    "Head of Product",
    "Product Director",
    "Healthcare",
    "Health Tech",
    "Digital Health",
    "Docplanner",
    "Deepful",
    "Zaia Health",
    "CUCO Health",
    "Product Management",
    "Product Leadership",
  ],
  authors: [{ name: "Gustavo Comitre", url: BASE_URL }],
  creator: "Gustavo Comitre",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Gustavo Comitre",
    title: "Gustavo Comitre — Head of Product | Healthcare",
    description:
      "Head of Product in Healthcare. 90M+ users impacted, 3 companies built. Obsessed with shipping beautiful health products that change lives.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gustavo Comitre — Head of Product | Healthcare",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gustavocomitre",
    creator: "@gustavocomitre",
    title: "Gustavo Comitre — Head of Product | Healthcare",
    description:
      "Head of Product in Healthcare. 90M+ users impacted, 3 companies built. Obsessed with shipping beautiful health products that change lives.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSans.variable}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
