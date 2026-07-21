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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vaibhavtradersudupi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | Interior Decorators & Plywood Dealers in Udupi`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Leading interior decorators, turnkey interior execution contractors, plywood & hardware dealers in Udupi. Custom modular kitchens, wardrobes, aluminium fabrication and woodwork.",
  keywords: [
    "Interior Decorators in Udupi",
    "Best Interior Designers Udupi",
    "Interior Execution Contractor Udupi",
    "Plywood Dealer Udupi",
    "Best Plywood Shop Udupi",
    "Marine Plywood Udupi",
    "Hardware Store Udupi",
    "Aluminium Fabrication Udupi",
    "Modular Kitchen Contractor Udupi",
    "Custom Wardrobes Udupi",
    "Home Interior Execution Udupi",
    "Villa Interior Designers Udupi",
    "Complete Interior Works Udupi",
    "Udupi Interior Designers",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: `${siteConfig.name} | Interior Decorators & Plywood Dealers in Udupi`,
    description:
      "Premier interior decorators, plywood & hardware suppliers, and turnkey interior execution contractors in Udupi. Over 23 years of trusted quality.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/projects/project18.jpg",
        width: 1200,
        height: 630,
        alt: "Vaibhav Traders - Premium Interior Design & Execution in Udupi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Interior Decorators in Udupi`,
    description:
      "Turnkey interior design execution, custom woodwork, plywood & hardware supply in Udupi.",
    images: ["/projects/project18.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": `${siteUrl}/#contractor`,
      name: siteConfig.name,
      image: `${siteUrl}/projects/project18.jpg`,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.line1,
        addressLocality: "Udupi",
        addressRegion: "Karnataka",
        postalCode: "574118",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.315,
        longitude: 74.75,
      },
      url: siteUrl,
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: siteConfig.googleRating.toString(),
        reviewCount: siteConfig.reviewCount.toString(),
      },
      areaServed: [
        { "@type": "City", name: "Udupi" },
        { "@type": "City", name: "Manipal" },
        { "@type": "City", name: "Udyavara" },
        { "@type": "City", name: "Brahmavar" },
        { "@type": "City", name: "Kundapura" },
        { "@type": "City", name: "Mangalore" },
      ],
      knowsAbout: [
        "Interior Decoration",
        "Interior Design & Execution",
        "Modular Kitchen Design",
        "Custom Wardrobe Fabrication",
        "Plywood Supply",
        "Hardware Supply",
        "Aluminium Fabrication",
      ],
    },
    {
      "@type": "HomeGoodsStore",
      "@id": `${siteUrl}/#store`,
      name: siteConfig.name,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.line1,
        addressLocality: "Udupi",
        addressRegion: "Karnataka",
        postalCode: "574118",
        addressCountry: "IN",
      },
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
