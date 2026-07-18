import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Plywood & Interior Solutions in Udupi`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Plywood Dealer Udupi",
    "Best Plywood Shop Udupi",
    "Marine Plywood Udupi",
    "Hardware Store Udupi",
    "Aluminium Fabrication Udupi",
    "Roofing Contractor Udupi",
    "Interior Solutions Udupi",
    "Interior Designers Udupi",
    "Modular Kitchen Contractor Udupi",
    "Custom Wardrobes Udupi",
    "Complete Interior Works Udupi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
