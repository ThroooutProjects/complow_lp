export default function Footer() {
  return (
    <footer className="relative bg-[#0E2E24] text-white overflow-hidden" role="contentinfo" aria-label="Comflo footer">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Soft glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#19C37D]/6 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Top section — CTA strip */}
        <div className="py-12 border-b border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              Ready to automate your business?
            </h3>
            <p className="text-white/40 text-sm mt-1">
              Join 50+ businesses already growing with Comflo.
            </p>
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#19C37D] px-7 py-3 text-sm font-bold text-white transition-all hover:bg-[#15a86b] hover:shadow-lg hover:shadow-[#19C37D]/20 shrink-0"
          >
            Get Early Access
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* Main footer grid */}
        <div className="py-14 grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-5">
              <img
                src="/images/logo1.png"
                alt="Comflo - WhatsApp Automation Platform for Online Businesses"
                className="h-8 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-white/40 text-[13.5px] max-w-sm leading-relaxed">
              The all-in-one WhatsApp automation platform for online businesses.
              Manage conversations, orders, follow-ups, and growth — all from
              one place.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                // {
                //   label: "Twitter",
                //   link: "https://twitter.com/comflo",
                //   path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                // },
                {
                  label: "LinkedIn",
                  link: "https://www.linkedin.com/company/comflo",
                  path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z",
                },
                {
                  label: "Instagram",
                  link: "https://www.instagram.com/comfloapp?igsh=MXc2Y2ltYmxzZTFxcg==",
                  path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.04] flex items-center justify-center text-white/40 transition-all hover:border-[#19C37D]/30 hover:bg-[#19C37D]/10 hover:text-[#19C37D]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-2 md:col-start-7">
            <h4 className="text-[11px] font-bold tracking-[0.15em] text-white/25 uppercase mb-5">
              Product
            </h4>
            <div className="space-y-3">
              {["Features", "Pricing", "Integrations", "Demo", "Changelog"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-[13px] text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.15em] text-white/25 uppercase mb-5">
              Company
            </h4>
            <div className="space-y-3">
              {["About", "Blog", "Careers", "Contact", "Press"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-[13px] text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-bold tracking-[0.15em] text-white/25 uppercase mb-5">
              Legal
            </h4>
            <div className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map(
                (link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-[13px] text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-white/25">
            © 2026 Comflo. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-[12px] text-white/25">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#19C37D] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#19C37D]" />
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
