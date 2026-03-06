"use client";

import { Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function DemoSection() {
  return (
    <section className="py-28 bg-[#fafbfa]" id="demo" aria-label="Watch Comflo WhatsApp automation demo">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#19C37D] uppercase">
              See It In Action
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0E2E24] sm:text-4xl">
              How businesses use{" "}
              <span className="gradient-text">Comflo</span> to automate WhatsApp sales
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-[#0E2E24]/10 border border-gray-200 bg-[#0E2E24] aspect-video flex items-center justify-center group cursor-pointer">
            {/* Placeholder for video */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0E2E24] to-[#19C37D]/30" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur flex items-center justify-center transition-transform group-hover:scale-110">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
              <p className="text-white/70 text-sm font-medium">
                Watch the 2-minute demo
              </p>
              <span className="sr-only">Watch how Comflo automates WhatsApp conversations, order tracking, and customer follow-ups for online businesses</span>
            </div>

            {/* Decorative chat bubbles */}
            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur rounded-xl px-4 py-2 text-white/60 text-xs">
              💬 &quot;Do you have size M?&quot;
            </div>
            <div className="absolute bottom-8 right-8 bg-[#19C37D]/20 backdrop-blur rounded-xl px-4 py-2 text-white/60 text-xs">
              ✅ Order #1847 placed automatically
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
