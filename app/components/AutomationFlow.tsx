"use client";

import { useEffect, useState } from "react";
import { CheckCheck, Zap, UserPlus, Package, Bell, BarChart3 } from "lucide-react";

interface FlowStep {
  icon: React.ReactNode;
  label: string;
  sublabel: string;
  delay: number;
}

const steps: FlowStep[] = [
  {
    icon: <UserPlus size={18} />,
    label: "Customer captured",
    sublabel: "Contact saved automatically",
    delay: 0,
  },
  {
    icon: <Package size={18} />,
    label: "Order tracked",
    sublabel: "Order #1847 created",
    delay: 400,
  },
  {
    icon: <Bell size={18} />,
    label: "Follow-up scheduled",
    sublabel: "Reminder in 3 days",
    delay: 800,
  },
  {
    icon: <Zap size={18} />,
    label: "Promo personalized",
    sublabel: "Size M preferences saved",
    delay: 1200,
  },
  {
    icon: <BarChart3 size={18} />,
    label: "Repeat customer flagged",
    sublabel: "Loyalty score: New → Active",
    delay: 1600,
  },
];

export default function AutomationFlow() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    const el = document.getElementById("automation-flow");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timeouts: NodeJS.Timeout[] = [];
    steps.forEach((step, i) => {
      timeouts.push(
        setTimeout(() => {
          setVisibleSteps((prev) => [...prev, i]);
        }, step.delay)
      );
    });
    return () => timeouts.forEach(clearTimeout);
  }, [started]);

  return (
    <div id="automation-flow" className="relative">
      {/* Incoming message trigger */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-[#19C37D]/10 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#19C37D">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.518-.809-6.237-2.162l-.436-.35-3.093 1.037 1.037-3.093-.35-.436A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </div>
        <div className="bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 flex-1">
          <p className="text-xs text-gray-400 font-medium">TRIGGER</p>
          <p className="text-sm text-gray-700 font-semibold">Customer sends a message</p>
        </div>
      </div>

      {/* Flow line */}
      <div className="absolute left-5 top-16 bottom-0 w-[2px] bg-gradient-to-b from-[#19C37D] to-[#0E2E24] opacity-20" />

      {/* Steps */}
      <div className="space-y-3 pl-2">
        {steps.map((step, i) => {
          const isVisible = visibleSteps.includes(i);
          return (
            <div
              key={i}
              className={`flex items-center gap-3 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              <div
                className={`relative z-10 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isVisible
                    ? "bg-[#19C37D] text-white shadow-lg shadow-[#19C37D]/30"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {isVisible ? <CheckCheck size={16} /> : step.icon}
              </div>
              <div className="flex-1 bg-white/80 backdrop-blur rounded-lg px-3 py-2 border border-gray-100">
                <p className="text-sm font-semibold text-[#0E2E24]">{step.label}</p>
                <p className="text-xs text-gray-400">{step.sublabel}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
