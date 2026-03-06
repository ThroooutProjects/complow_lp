"use client";

import { ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function FutureSection() {
  return (
    <section className="py-28" id="future" aria-label="Comflo vision - the future of online business operations">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="relative rounded-3xl p-12 lg:p-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #0E2E24 0%, #0E2E24 55%, #143d32 75%, #1a5240 100%)" }}>
            {/* Subtle mesh texture */}
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
            {/* Soft glow accents */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#19C37D]/8 blur-[100px]" />
            <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-[#19C37D]/6 blur-[80px]" />

            <div className="relative max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-[#19C37D] uppercase">
                Our Vision
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl leading-tight">
                The future of online business operations.
              </h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                We started with WhatsApp because that&rsquo;s where modern
                businesses sell. But Comflo is designed to become the central
                system that powers how online businesses operate and grow.
              </p>

              {/* Future roadmap items */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "AI customer insights",
                  "Multi-channel messaging",
                  "Inventory management",
                  "Team collaboration",
                  "Revenue forecasting",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-2 border border-white/10"
                  >
                    <ChevronRight size={14} className="text-[#19C37D]" />
                    <span className="text-sm text-white/80 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
