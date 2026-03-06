"use client";

import {
  Send,
  Bell,
  Users,
  Package,
  BarChart3,
  ShoppingBag,
  Globe,
  Zap,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Send size={22} />,
      title: "Bulk WhatsApp Messaging",
      desc: "Send targeted promotions to hundreds of customers with one click.",
    },
    {
      icon: <Bell size={22} />,
      title: "Automated Follow-ups",
      desc: "Never miss a lead. Comflo follows up at the perfect time, automatically.",
    },
    {
      icon: <Users size={22} />,
      title: "Customer Segmentation",
      desc: "Segment by purchase history, behavior, and preferences.",
    },
    {
      icon: <Package size={22} />,
      title: "Order Tracking",
      desc: "From order placed to delivered — track everything in one view.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Retention Analytics",
      desc: "Understand churn, repeat purchase rates, and customer lifetime value.",
    },
    {
      icon: <ShoppingBag size={22} />,
      title: "WooCommerce & Shopify",
      desc: "Seamlessly connect your existing store with zero code.",
    },
    {
      icon: <Globe size={22} />,
      title: "Multi-language Automation",
      desc: "Automate in Sinhala, Tamil, and English — reach every customer.",
    },
    {
      icon: <Zap size={22} />,
      title: "Smart Workflows",
      desc: "Build if-this-then-that workflows for any customer scenario.",
    },
  ];

  return (
    <section className="py-28 bg-[#fafbfa]" id="features" aria-label="Comflo core features - WhatsApp automation, bulk messaging, order tracking, analytics">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#19C37D] uppercase">
              Core Features
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0E2E24] sm:text-4xl">
              Everything you need to{" "}
              <span className="gradient-text">automate growth.</span>
            </h2>
            <p className="sr-only">Bulk WhatsApp messaging, automated follow-ups, customer segmentation, order tracking, retention analytics, WooCommerce and Shopify integration, multi-language automation, and smart workflows.</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 75}>
              <div className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:shadow-lg hover:shadow-[#19C37D]/5 hover:border-[#19C37D]/30 h-full">
                <div className="w-11 h-11 rounded-xl bg-[#0E2E24] flex items-center justify-center text-[#19C37D] mb-4 transition-all group-hover:bg-gradient-to-br group-hover:from-[#19C37D] group-hover:to-[#0E2E24] group-hover:text-white">
                  {f.icon}
                </div>
                <h3 className="text-sm font-bold text-[#0E2E24]">{f.title}</h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
