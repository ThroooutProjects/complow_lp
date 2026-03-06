import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import DemoSection from "./components/DemoSection";
import WhySection from "./components/WhySection";
import FeaturesSection from "./components/FeaturesSection";
import AudienceSection from "./components/AudienceSection";
import PricingSection from "./components/PricingSection";
import FutureSection from "./components/FutureSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Comflo — Turn Every WhatsApp Conversation Into a Sale | WhatsApp Automation",
  description:
    "Comflo automates WhatsApp conversations, orders, follow-ups, and customer retention for online businesses. Bulk messaging, smart workflows, WooCommerce & Shopify integration. Book a free demo today.",
  alternates: {
    canonical: "https://comflo.com",
  },
};

// FAQ structured data for rich snippets
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Comflo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comflo is an all-in-one WhatsApp automation platform that helps online businesses manage customer conversations, orders, follow-ups, and repeat sales in one automated system.",
      },
    },
    {
      "@type": "Question",
      name: "Who is Comflo for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comflo is built for online businesses that sell through conversations — including fashion & apparel stores, food & restaurants, beauty & wellness brands, service businesses, and D2C startups.",
      },
    },
    {
      "@type": "Question",
      name: "Does Comflo integrate with WooCommerce and Shopify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Comflo seamlessly integrates with WooCommerce and Shopify with zero code required, connecting your existing store to automated WhatsApp workflows.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Comflo cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comflo offers custom pricing based on usage. One package includes everything: WhatsApp automation, customer segmentation, order tracking, retention analytics, follow-up workflows, and more. No credit card required to get started.",
      },
    },
    {
      "@type": "Question",
      name: "Does Comflo support multiple languages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Comflo supports multi-language automation including Sinhala, Tamil, and English, allowing you to reach every customer in their preferred language.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <DemoSection />
        <WhySection />
        <FeaturesSection />
        <AudienceSection />
        <PricingSection />
        <FutureSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
