"use client";

import { ArrowRight } from "lucide-react";
import WhatsAppMockup from "./WhatsAppMockup";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20" aria-label="Hero - Turn every customer conversation into a sale">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#19C37D]/5 blur-3xl" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-[#0E2E24]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left content */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#19C37D]/20 bg-[#19C37D]/5 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#19C37D] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#19C37D]" />
            </span>
            <span className="text-xs font-semibold text-[#0E2E24] tracking-wide">
              NOW IN EARLY ACCESS
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0E2E24] sm:text-5xl lg:text-[3.5rem]">
            Turn every customer{" "}
            <span className="gradient-text">conversation</span> into a sale.
          </h1>
          {/* Hidden SEO-friendly heading context */}
          <p className="sr-only">Comflo WhatsApp automation platform helps online businesses automate customer conversations, manage orders, send follow-ups, and drive repeat sales through one integrated system.</p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Comflo helps online businesses manage <strong>WhatsApp conversations</strong>, orders, follow-ups,
            and repeat customers in one <strong>automated system</strong>.
          </p>

          <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
            Most online businesses sell through chats. But they still track
            orders manually, forget follow-ups, and lose repeat customers.
            Comflo connects your customer messages, order tracking, and marketing
            into one workflow — so you can grow without hiring more people.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#19C37D] to-[#0E2E24] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[#19C37D]/20 transition-all hover:shadow-2xl hover:shadow-[#19C37D]/30 hover:scale-[1.02]"
            >
              Book a Demo
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#0E2E24]/10 px-8 py-4 text-sm font-bold text-[#0E2E24] transition-all hover:border-[#19C37D]/30 hover:bg-[#19C37D]/5"
              aria-label="See how Comflo WhatsApp automation works"
            >
              See How It Works
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-[#19C37D] to-[#0E2E24] flex items-center justify-center text-[10px] font-bold text-white shadow-sm"
                >
                  {["A", "M", "S", "R"][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0E2E24]">
                Early access users
              </p>
              <p className="text-xs text-gray-400">
                Join 50+ businesses already onboarded
              </p>
            </div>
          </div>
        </div>

        {/* Right — WhatsApp Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="animate-float">
            <WhatsAppMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
