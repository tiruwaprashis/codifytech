export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-mist">
      {/* Ambient gradient blobs in brand colors */}
      <div className="absolute -top-24 -right-24 w-[460px] h-[460px] bg-cyan/20 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute top-40 -left-32 w-[380px] h-[380px] bg-brand/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 bg-white border border-navy-100 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan pulse-dot" />
            <span className="font-mono text-xs text-teal tracking-wide">Web · Software · SEO · Meta Ads — under one roof</span>
          </div>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.3rem] leading-[1.08] tracking-tight text-navy">
            Your complete IT &amp;{' '}
            <span className="text-transparent bg-clip-text bg-brand-gradient">digital growth partner.</span>
          </h1>

          <p className="mt-6 text-lg text-slate-soft leading-relaxed max-w-xl">
            Codify.Tech builds your website, software, and apps — then drives traffic and customers to them with SEO, digital marketing, and Meta Ads campaigns that are actually managed, not just switched on.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-gradient text-white font-display font-semibold px-6 py-3.5 rounded-lg transition-transform hover:scale-[1.02] shadow-soft"
            >
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-navy-100 hover:border-brand text-navy font-medium px-6 py-3.5 rounded-lg transition-colors bg-white"
            >
              View Our Services
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm">
            <div>
              <p className="font-display font-semibold text-2xl text-navy">60+</p>
              <p className="text-slate-soft mt-0.5">Sites &amp; apps shipped</p>
            </div>
            <div className="w-px h-9 bg-navy-100" />
            <div>
              <p className="font-display font-semibold text-2xl text-navy">3.4x</p>
              <p className="text-slate-soft mt-0.5">Avg. organic traffic growth</p>
            </div>
            <div className="w-px h-9 bg-navy-100" />
            <div>
              <p className="font-display font-semibold text-2xl text-navy">12+</p>
              <p className="text-slate-soft mt-0.5">Countries served</p>
            </div>
          </div>
        </div>

        {/* Signature element: a signal/pulse monitor card, echoing the heartbeat mark inside the logo's "O" */}
        <div className="relative">
          <div className="rounded-2xl bg-white border border-navy-100 shadow-card overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-navy-100 bg-navy-50">
              <span className="font-mono text-xs text-teal">Growth signal — live</span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-slate-soft">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                trending up
              </span>
            </div>
            <div className="p-8">
              <svg viewBox="0 0 400 120" className="w-full h-28" fill="none">
                <line x1="0" y1="60" x2="400" y2="60" stroke="#D6DDF5" strokeWidth="1" />
                <path
                  className="pulse-line"
                  d="M0 60 H130 L150 30 L165 95 L180 15 L195 60 H400"
                  stroke="url(#pulseGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="pulseGradient" x1="0" y1="0" x2="400" y2="0">
                    <stop offset="0%" stopColor="#1C3FD1" />
                    <stop offset="100%" stopColor="#1FC3E6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-navy-100">
                <div>
                  <p className="font-mono text-[11px] text-slate-soft uppercase tracking-wide">Page load</p>
                  <p className="font-display font-semibold text-navy text-lg mt-1">1.2s</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-slate-soft uppercase tracking-wide">Live campaigns</p>
                  <p className="font-display font-semibold text-navy text-lg mt-1">24</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] text-slate-soft uppercase tracking-wide">Downtime</p>
                  <p className="font-display font-semibold text-navy text-lg mt-1">0</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 bg-white border border-navy-100 rounded-xl px-4 py-3 shadow-card hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan pulse-dot" />
            <span className="font-mono text-xs text-teal">campaigns optimizing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
