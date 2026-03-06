"use client";

import { Zap, Check, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function PricingSection() {
  const included = [
    "WhatsApp automation",
    "Customer segmentation",
    "Order tracking",
    "Retention analytics",
    "Follow-up workflows",
    "WooCommerce & Shopify integration",
    "Multi-language support",
    "Priority onboarding",
  ];

  return (
    <section className="py-28 bg-[#fafbfa]" id="pricing" aria-label="Comflo pricing - one package, everything included">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#19C37D] uppercase">
              Simple Pricing
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0E2E24] sm:text-4xl">
              One package.{" "}
              <span className="gradient-text">Everything included.</span>
            </h2>
            <p className="sr-only">Comflo pricing includes WhatsApp automation, customer segmentation, order tracking, retention analytics, follow-up workflows, WooCommerce and Shopify integration, multi-language support, and priority onboarding.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="max-w-lg mx-auto">
            <div className="relative rounded-3xl bg-white border-2 border-[#19C37D]/20 p-8 shadow-xl shadow-[#19C37D]/5 overflow-hidden">
              {/* Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#19C37D]/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#19C37D] to-[#0E2E24] flex items-center justify-center">
                    <Zap size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0E2E24]">
                      Comflo Complete
                    </h3>
                    <p className="text-xs text-gray-400">
                      Everything your business needs
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-[#0E2E24]">
                    Custom
                  </span>
                  <span className="text-gray-400 text-sm">/based on usage</span>
                </div>

                <div className="space-y-3 mb-8">
                  {included.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#19C37D]/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-[#19C37D]" />
                      </div>
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#cta"
                  className="group flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-[#19C37D] to-[#0E2E24] py-4 text-sm font-bold text-white shadow-lg shadow-[#19C37D]/20 transition-all hover:shadow-xl hover:shadow-[#19C37D]/30 hover:scale-[1.01]"
                >
                  Book a Demo
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <p className="text-center text-xs text-gray-400 mt-4">
                  No credit card required · Setup in minutes
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
