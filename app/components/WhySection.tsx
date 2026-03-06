"use client";

import { Repeat, Zap, TrendingUp, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function WhySection() {
  const stats = [
    {
      icon: <Repeat size={22} />,
      title: "Increase repeat sales",
      desc: "Automated follow-ups bring customers back without you lifting a finger.",
    },
    {
      icon: <Zap size={22} />,
      title: "Reduce manual work",
      desc: "Stop copying orders into spreadsheets. Let Comflo handle the workflow.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Scale without hiring",
      desc: "Serve 10x more customers without adding team members.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Understand what drives revenue",
      desc: "See which products, channels, and follow-ups generate the most sales.",
    },
  ];

  return (
    <section className="py-28" id="why" aria-label="Why WhatsApp automation matters for business growth">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold tracking-widest text-[#19C37D] uppercase">
              Why This Matters
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0E2E24] sm:text-4xl leading-tight">
              Growth today is not about more customers.{" "}
              <span className="gradient-text">
                It&rsquo;s about better systems.
              </span>
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Most businesses spend money on ads but lose customers because they
              don&rsquo;t follow up. <strong>Comflo&rsquo;s automated WhatsApp workflows</strong> change that — increasing repeat sales, reducing manual work, and scaling your business without hiring.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="group relative rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:shadow-xl hover:shadow-[#19C37D]/5 hover:border-[#19C37D]/20 h-full">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#19C37D]/10 to-[#0E2E24]/5 flex items-center justify-center text-[#19C37D] mb-5 transition-all group-hover:bg-gradient-to-br group-hover:from-[#19C37D] group-hover:to-[#0E2E24] group-hover:text-white">
                  {stat.icon}
                </div>
                <h3 className="text-base font-bold text-[#0E2E24]">
                  {stat.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
