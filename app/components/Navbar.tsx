"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#future" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // track active section — pick whichever section top is closest to viewport
      let bestMatch = "";
      let bestTop = -Infinity;
      for (const link of navLinks) {
        const el = document.getElementById(link.href.replace("#", ""));
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 140 && top > bestTop) {
            bestTop = top;
            bestMatch = link.href;
          }
        }
      }
      setActiveSection(bestMatch);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop + Mobile Top Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Outer wrapper adds top padding so the bar "floats" */}
        <div
          className={`transition-all duration-500 ${
            scrolled ? "pt-3 px-4 lg:px-8" : "pt-0 px-0"
          }`}
        >
          <div
            className={`mx-auto flex max-w-6xl items-center justify-between transition-all duration-500 ${
              scrolled
                ? "rounded-2xl  bg-white/70 shadow-lg shadow-black/[0.04] backdrop-blur-2xl px-5 py-2"
                : "bg-white/0 px-6 py-5"
            }`}
          >
            {/* Logo */}
            <a href="#" className="flex items-center shrink-0">
              <Image
                src="/images/logo3.png"
                alt="Comflo"
                width={120}
                height={40}
                className={`w-auto transition-all duration-300 ${
                  scrolled ? "h-7" : "h-9"
                }`}
                priority
              />
            </a>

            {/* ── Desktop nav links (centered pill group) ── */}
            <div className="hidden md:flex items-center">
              <div
                className={`flex items-center gap-0.5 rounded-full transition-all duration-500 ${
                  scrolled
                    ? "bg-gray-100/70 p-1"
                    : "bg-white/60 backdrop-blur-md  p-1 shadow-sm"
                }`}
              >
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-white text-[#0E2E24] shadow-sm"
                          : "text-gray-500 hover:text-[#0E2E24] hover:bg-white/60"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#cta"
                className="hidden md:inline-flex items-center gap-2 rounded-full bg-[#0E2E24] px-5 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#19C37D] hover:shadow-lg hover:shadow-[#19C37D]/25 hover:scale-[1.04] active:scale-100"
              >
                <MessageCircle size={14} className="opacity-80" />
                Book a Demo
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden relative w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-[5px] bg-gray-100/80 transition-colors hover:bg-[#19C37D]/10"
                aria-label="Menu"
              >
                <span
                  className={`block h-[2px] w-4 rounded-full bg-[#0E2E24] transition-all duration-300 origin-center ${
                    mobileOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-4 rounded-full bg-[#0E2E24] transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-[2px] w-4 rounded-full bg-[#0E2E24] transition-all duration-300 origin-center ${
                    mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile fullscreen overlay ── */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* backdrop */}
        <div
          className="absolute inset-0 bg-[#0E2E24]/60 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />

        {/* panel */}
        <div
          className={`absolute inset-x-4 top-4 rounded-3xl bg-white shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-8 opacity-0 scale-95"
          }`}
        >
          {/* panel header */}
          <div className="flex items-center justify-between p-5">
            <Image
              src="/images/logo3.png"
              alt="Comflo"
              width={100}
              height={33}
              className="h-7 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* links */}
          <div className="px-4 pb-2">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-4 text-[15px] font-medium transition-all ${
                    isActive
                      ? "bg-[#19C37D]/10 text-[#0E2E24]"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  style={{
                    transitionDelay: mobileOpen ? `${80 + i * 40}ms` : "0ms",
                    opacity: mobileOpen ? 1 : 0,
                    transform: mobileOpen ? "translateX(0)" : "translateX(-12px)",
                    transitionDuration: "400ms",
                  }}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#19C37D]" />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* mobile CTA */}
          <div className="p-4 pt-2">
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-2xl bg-[#0E2E24] py-4 text-sm font-semibold text-white transition-all active:scale-[0.98]"
            >
              <MessageCircle size={16} className="opacity-70" />
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
