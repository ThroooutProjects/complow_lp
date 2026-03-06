"use client";

import ScrollReveal from "./ScrollReveal";

export default function AudienceSection() {
  const audiences = [
    {
      label: "Fashion & Apparel",
      desc: "Online clothing stores selling via Instagram & WhatsApp",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.38 3.46L16 2 12 5.5 8 2l-4.38 1.46a2 2 0 00-1.34 1.42l-1.1 4.4A1 1 0 002.15 10h3.09a2 2 0 002-1.5l.45-1.8L12 9l4.31-2.3.45 1.8a2 2 0 002 1.5h3.09a1 1 0 00.97-1.22l-1.1-4.4a2 2 0 00-1.34-1.42z" />
          <path d="M3.5 10v10a2 2 0 002 2h13a2 2 0 002-2V10" />
        </svg>
      ),
    },
    {
      label: "Food & Restaurants",
      desc: "Takeaway, catering & home-based food businesses",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 010 8h-1" />
          <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
    {
      label: "Beauty & Wellness",
      desc: "Skincare, cosmetics & salon appointment bookings",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ),
    },
    {
      label: "Service Businesses",
      desc: "Freelancers, agencies & professional service providers",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </svg>
      ),
    },
    {
      label: "D2C & Startups",
      desc: "Direct-to-consumer brands scaling with automation",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50/50" id="audience" aria-label="Who Comflo is for - fashion, food, beauty, services, and D2C businesses">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#19C37D] uppercase">
              Built For You
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0E2E24] sm:text-4xl">
              Who is <span className="gradient-text">Comflo</span> for?
            </h2>
            <p className="mt-4 text-gray-500 text-[15px] leading-relaxed">
              Any business that sells through conversations — we help you automate, organize, and grow.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {audiences.map((a, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="group relative rounded-2xl bg-white border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#0E2E24]/5 hover:border-[#19C37D]/20 hover:-translate-y-1">
                {/* Icon container */}
                <div className="w-11 h-11 rounded-xl bg-[#0E2E24] text-white flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#19C37D]">
                  {a.icon}
                </div>
                <h3 className="text-[14px] font-bold text-[#0E2E24] mb-1.5">
                  {a.label}
                </h3>
                <p className="text-[12px] text-gray-400 leading-relaxed">
                  {a.desc}
                </p>
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#19C37D]/5 rotate-45" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonial — clean professional card */}
        <ScrollReveal delay={200}>
          <div className="mt-20 max-w-2xl mx-auto">
            <div className="relative bg-white rounded-2xl border border-gray-100 p-8 sm:p-10 shadow-sm">
              {/* Quote mark */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full bg-[#19C37D] flex items-center justify-center shadow-lg shadow-[#19C37D]/20">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed mt-2">
                We used to lose 30% of inquiries because we couldn&rsquo;t
                reply fast enough. With Comflo, every message gets an instant,
                personalized response — and the order is placed automatically.
                Our conversion rate jumped from 12% to 34% in the first month.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#19C37D] to-[#0E2E24] flex items-center justify-center text-white text-sm font-bold">
                  N
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0E2E24]">
                    Nadeesha Perera
                  </p>
                  <p className="text-xs text-gray-400">
                    Founder, StyleLK — Online Fashion Store
                  </p>
                </div>
                {/* WhatsApp verified badge */}
                <div className="ml-auto flex items-center gap-1.5 bg-[#19C37D]/10 px-3 py-1 rounded-full">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#19C37D">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  <span className="text-[11px] font-semibold text-[#0E2E24]">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
