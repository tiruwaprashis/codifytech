const services = [
  {
    title: 'Web Development',
    desc: 'Fast, responsive websites and e-commerce stores built to convert visitors into customers.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
  {
    title: 'Software & App Development',
    desc: 'Custom software and native-feel iOS & Android apps engineered around how your business operates.',
    icon: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  },
  {
    title: 'SEO',
    desc: 'On-page, technical, and content SEO that moves you up the rankings for the searches that matter.',
    icon: <path d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35" />,
  },
  {
    title: 'Digital Marketing',
    desc: 'Email, content, and multi-channel campaigns that build a pipeline, not just impressions.',
    icon: <path d="M3 12h4l2-7 4 14 2-7h6" />,
  },
  {
    title: 'Meta Ads & Social Media',
    desc: 'Facebook & Instagram ad campaigns managed end-to-end — targeting, creative, and daily optimization.',
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: 'IT Consulting',
    desc: 'Auditing your current stack and mapping a practical path to modern, reliable systems.',
    icon: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs text-brand tracking-widest uppercase mb-3">// services</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-navy tracking-tight">
            Full-spectrum IT services
          </h2>
          <p className="mt-4 text-slate-soft text-lg">
            Build, launch, and grow — development, search, and paid social, run by one accountable team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="lift group rounded-2xl bg-white border border-navy-100 p-7 shadow-card hover:border-cyan/60 hover:shadow-cyanGlow"
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center mb-6 transition-colors ${
                  i % 2 === 0
                    ? 'bg-brand/10 border border-brand/20 group-hover:bg-brand/20'
                    : 'bg-cyan/10 border border-cyan/25 group-hover:bg-cyan/20'
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={i % 2 === 0 ? '#1C3FD1' : '#0FA3C2'}
                  strokeWidth="1.8"
                >
                  {s.icon}
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg text-navy">{s.title}</h3>
              <p className="mt-2.5 text-sm text-slate-soft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
