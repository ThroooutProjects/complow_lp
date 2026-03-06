"use client";

import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section className="py-28 bg-[#fafbfa]" id="cta" aria-label="Book a free Comflo demo - automate your WhatsApp business">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#0E2E24] sm:text-4xl lg:text-5xl leading-tight">
              If your business depends on manual work,{" "}
              <span className="gradient-text">growth will slow down.</span>
            </h2>
            <p className="sr-only">Automate your WhatsApp business with Comflo. Book a free demo and get set up in under 15 minutes.</p>
            <p className="mt-6 text-lg text-gray-500">
              Build a system that grows with you.
              <br />
              <span className="font-semibold text-[#0E2E24]">
                Start with Comflo.
              </span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#19C37D] to-[#0E2E24] px-10 py-4 text-base font-bold text-white shadow-xl shadow-[#19C37D]/20 transition-all hover:shadow-2xl hover:shadow-[#19C37D]/30 hover:scale-[1.02] animate-pulse-glow"
              >
                Book a Demo
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* WhatsApp-style message */}
            <div className="mt-12 max-w-sm mx-auto">
              <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-sm px-5 py-4 text-left shadow-sm">
                <p className="text-sm text-gray-700">
                  Hey! 👋 Ready to automate your business? Let&rsquo;s chat and
                  get you set up in under 15 minutes.
                </p>
                <div className="flex justify-end mt-2 items-center gap-1">
                  <span className="text-[10px] text-gray-500">Just now</span>
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
