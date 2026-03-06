"use client";

import { MessageSquare, Bell, Package, Users, Repeat } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ProblemSection() {
  const problems = [
    { icon: <MessageSquare size={20} />, text: "Too many chats" },
    { icon: <Bell size={20} />, text: "Missed follow-ups" },
    { icon: <Package size={20} />, text: "Orders tracked manually" },
    { icon: <Users size={20} />, text: "No customer data" },
    { icon: <Repeat size={20} />, text: "No retention strategy" },
  ];

  return (
    <section className="relative py-28 bg-[#fafbfa]" id="problem">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Chat-style problem illustration */}
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-100/50 border border-gray-100">
              {/* Simulated messy chat overview */}
              <div className="space-y-3">
                {[
                  { name: "Nadeesha", msg: "Is the red one available?", time: "2h", unread: 3, color: "bg-red-400" },
                  { name: "Kamal", msg: "My order hasn't arrived yet 😤", time: "5h", unread: 1, color: "bg-orange-400" },
                  { name: "Sachini", msg: "Can I get a discount for 5 pcs?", time: "1d", unread: 7, color: "bg-purple-400" },
                  { name: "Rahul", msg: "Sent payment screenshot", time: "2d", unread: 0, color: "bg-blue-400" },
                  { name: "Amaya", msg: "When will you restock size L?", time: "3d", unread: 0, color: "bg-pink-400" },
                ].map((chat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${chat.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                    >
                      {chat.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-800 truncate">
                          {chat.name}
                        </p>
                        <span className="text-[11px] text-gray-400">{chat.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{chat.msg}</p>
                    </div>
                    {chat.unread > 0 && (
                      <span className="w-5 h-5 rounded-full bg-[#19C37D] text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                        {chat.unread}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                <p className="text-xs text-red-400 font-medium">
                  ⚠️ 11 unread · 3 orders unfulfilled · 0 follow-ups sent
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <ScrollReveal delay={200}>
            <div>
              <span className="text-xs font-bold tracking-widest text-[#19C37D] uppercase">
                The Reality
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-[#0E2E24] sm:text-4xl leading-tight">
                Your business is growing.{" "}
                <span className="gradient-text">Your system isn&rsquo;t.</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Today, customers don&rsquo;t just buy from websites. They ask
                questions. They compare. They message before they buy. This
                creates new challenges:
              </p>

              <div className="mt-6 space-y-3">
                {problems.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl bg-red-50/60 border border-red-100/50 px-4 py-3"
                  >
                    <div className="text-red-400">{p.icon}</div>
                    <span className="text-sm font-medium text-gray-700">
                      {p.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#0E2E24] to-[#19C37D]/80 p-6 text-white">
                <p className="text-sm font-semibold opacity-90">The result?</p>
                <p className="mt-1 text-lg font-bold">
                  You work more, but growth stays limited.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
