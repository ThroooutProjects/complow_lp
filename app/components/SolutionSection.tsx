"use client";

import { Package, Repeat, Target } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import AutomationFlow from "./AutomationFlow";

export default function SolutionSection() {
  return (
    <section className="py-28" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#19C37D] uppercase">
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0E2E24] sm:text-4xl">
              Comflo organizes your entire{" "}
              <span className="gradient-text">customer journey.</span>
            </h2>
            <p className="mt-4 text-gray-500">
              When a customer sends a message, everything happens automatically
              — inside one system.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Automation flow */}
          <ScrollReveal>
            <AutomationFlow />
          </ScrollReveal>

          {/* Right — Benefits */}
          <ScrollReveal delay={200}>
            <div className="space-y-5">
              {[
                {
                  title: "No spreadsheets",
                  desc: "Customer data, orders, and history — all in one place.",
                  icon: <Package size={20} />,
                },
                {
                  title: "No switching between tools",
                  desc: "From chat to order to follow-up, everything flows automatically.",
                  icon: <Repeat size={20} />,
                },
                {
                  title: "No missed opportunities",
                  desc: "Every lead is captured, every customer is followed up.",
                  icon: <Target size={20} />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:shadow-[#19C37D]/5 hover:border-[#19C37D]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#19C37D] to-[#0E2E24] flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#0E2E24]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp-style result message */}
              <div className="mt-6 bg-[#dcf8c6] rounded-2xl rounded-tr-sm p-5 relative">
                <p className="text-sm text-gray-700 font-medium">
                  ✅ Order placed, follow-up in 3 days, customer tagged as
                  &quot;repeat buyer&quot; — all done automatically.
                </p>
                <div className="flex justify-end mt-2 items-center gap-1">
                  <span className="text-[10px] text-gray-500">10:25 AM</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#34B7F1"
                    strokeWidth="2.5"
                  >
                    <polyline points="1 12 5 16 12 6" />
                    <polyline points="7 12 11 16 20 6" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
