import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://relokeycyprus.com"),
  title: {
    default: "ReloKey Cyprus — Your Key to Cyprus Living",
    template: "%s | ReloKey Cyprus",
  },
  description:
    "Cyprus real estate, relocation, and investment specialist. Helping individuals, families, investors, and companies settle, invest, and grow in Cyprus — with Limassol as the center of opportunities.",
  keywords: [
    "Cyprus real estate",
    "Limassol property",
    "relocate to Cyprus",
    "Cyprus investment",
    "corporate relocation Cyprus",
    "buy property Cyprus",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ReloKey Cyprus",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "ReloKey Cyprus — Your Key to Cyprus Living",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReloKey Cyprus — Your Key to Cyprus Living",
    description:
      "Cyprus real estate, relocation, and investment specialist based in Limassol.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "ReloKey Cyprus",
  description:
    "Cyprus real estate, relocation, and investment specialist based in Limassol.",
  url: "https://relokeycyprus.com",
  telephone: "+357 99 123 456",
  email: "info@relokeycyprus.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Limassol",
    addressCountry: "CY",
  },
  areaServed: {
    "@type": "Country",
    name: "Cyprus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD is a static constant — safe to inline
  const structuredData = JSON.stringify(jsonLd);

  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
