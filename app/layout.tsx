import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://comflo.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#19C37D",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Comflo — Turn Every WhatsApp Conversation Into a Sale",
    template: "%s | Comflo",
  },
  description:
    "Comflo is the all-in-one WhatsApp automation platform for online businesses. Manage customer conversations, orders, follow-ups, and repeat sales in one automated system. Scale without hiring.",
  keywords: [
    "WhatsApp automation",
    "WhatsApp business automation",
    "WhatsApp CRM",
    "WhatsApp marketing",
    "customer chat automation",
    "order tracking automation",
    "ecommerce automation",
    "automated follow-ups",
    "customer retention",
    "bulk WhatsApp messaging",
    "customer segmentation",
    "WooCommerce WhatsApp",
    "Shopify WhatsApp",
    "online business automation",
    "sales automation",
    "conversation commerce",
    "D2C automation",
    "repeat customer strategy",
    "WhatsApp order management",
    "multi-language WhatsApp",
    "Comflo",
  ],
  authors: [{ name: "Comflo", url: siteUrl }],
  creator: "Comflo",
  publisher: "Comflo",
  category: "Business Software",
  applicationName: "Comflo",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Comflo",
    title: "Comflo — Turn Every WhatsApp Conversation Into a Sale",
    description:
      "Manage WhatsApp conversations, orders, follow-ups, and repeat customers in one automated system. Scale your online business without hiring more people.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Comflo — WhatsApp Automation for Online Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comflo — Turn Every WhatsApp Conversation Into a Sale",
    description:
      "The all-in-one WhatsApp automation platform. Manage conversations, orders & follow-ups in one system.",
    images: ["/images/og-image.png"],
    creator: "@comflo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/images/mini_logo.jpeg",
    apple: "/images/mini_logo.jpeg",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Comflo",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: siteUrl,
  description:
    "All-in-one WhatsApp automation platform for online businesses. Manage conversations, orders, follow-ups, and repeat sales.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Custom pricing based on usage",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "50",
  },
  featureList: [
    "Bulk WhatsApp Messaging",
    "Automated Follow-ups",
    "Customer Segmentation",
    "Order Tracking",
    "Retention Analytics",
    "WooCommerce & Shopify Integration",
    "Multi-language Automation",
    "Smart Workflows",
  ],
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Comflo",
  url: siteUrl,
  logo: `${siteUrl}/images/logo1.png`,
  sameAs: [
    "https://www.linkedin.com/company/comflo",
    "https://www.instagram.com/comfloapp",
  ],
  description:
    "Comflo helps online businesses automate WhatsApp conversations, orders, and customer retention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
