const features = [
  {
    title: 'On-Time, Every Sprint',
    desc: 'Fixed sprint cadences with demo-able progress, not status updates that dodge the real question.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </>
    ),
  },
  {
    title: 'Senior-Only Specialists',
    desc: 'Every project is staffed with senior developers and marketers — no learning on your invoice.',
    icon: <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />,
  },
  {
    title: 'One Team, Full Funnel',
    desc: 'The people who build your site are the same team running SEO and ads on it — no handoffs, no blame games.',
    icon: (
      <>
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </>
    ),
  },
  {
    title: 'Transparent Pricing',
    desc: 'Fixed-scope development or clear monthly retainers for SEO and ads, quoted before we start.',
    icon: <path d="M3 12h4l2-7 4 14 2-7h6" />,
  },
  {
    title: 'Direct Access to Specialists',
    desc: 'You talk to the people writing your code and running your campaigns, not an account manager relay.',
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" />
      </>
    ),
  },
  {
    title: 'Reporting You Can Read',
    desc: 'Monthly dashboards on traffic, rankings, and ad performance — in plain language, not jargon.',
    icon: <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />,
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32 border-t border-navy-100 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs text-teal tracking-widest uppercase mb-3">// why us</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-navy tracking-tight">
            Why teams choose Codify
          </h2>
          <p className="mt-4 text-slate-soft text-lg">
            No agency theatrics. Just specialists who own outcomes, not just tickets.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="lift rounded-2xl bg-white border border-navy-100 p-7 hover:shadow-soft"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke={i % 2 === 0 ? '#1C3FD1' : '#0FA3C2'}
                strokeWidth="1.8"
                className="mb-5"
              >
                {f.icon}
              </svg>
              <h3 className="font-display font-semibold text-navy text-base">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-soft leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
