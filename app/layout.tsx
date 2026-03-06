import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comflo — Turn Every Conversation Into a Sale",
  description:
    "Comflo helps online businesses manage WhatsApp, orders, follow-ups, and repeat customers in one automated system.",
  keywords: [
    "WhatsApp automation",
    "customer chat",
    "order tracking",
    "ecommerce automation",
    "Comflo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
