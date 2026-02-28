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

export const metadata: Metadata = {
  title: "Gustavo Comitre - Product Director | Health Tech",
  description:
    "Product Director passionate about building beautiful healthcare products that improve millions of lives. Led hypergrowth at Docplanner (90M+ users), founded CUCO Health (acquired), and building Deepful.",
  openGraph: {
    title: "Gustavo Comitre - Product Director | Health Tech",
    description:
      "Product Director passionate about building beautiful healthcare products that improve millions of lives.",
    type: "website",
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
