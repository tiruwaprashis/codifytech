import { useState } from 'react';

const initialForm = { name: '', email: '', service: 'Web Development', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your backend or a form service (e.g. Formspree) when ready.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-navy-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-14">
        <div className="lg:col-span-2">
          <p className="font-mono text-xs text-brand tracking-widest uppercase mb-3">// contact</p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl text-navy tracking-tight">
            Let's scope your project
          </h2>
          <p className="mt-4 text-slate-soft leading-relaxed">
            Tell us what you're building. We'll reply within one business day with next steps — no sales call
            required to get an answer.
          </p>

          <div className="mt-10 space-y-6">
            <InfoRow
              color="#1C3FD1"
              icon={
                <>
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </>
              }
              label="Office"
              value={
                <>
                  Tribhuwan Chowk, Nepalgunj, Banke
                  <br />
                  Lumbini Province, Nepal
                </>
              }
            />
            <InfoRow
              color="#0FA3C2"
              icon={<path d="M3 6l9 7 9-7M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />}
              label="Email"
              value="hello@codify.tech"
            />
            <InfoRow
              color="#1C3FD1"
              icon={
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              }
              label="Phone"
              value="+977 981-2345678"
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:col-span-3 rounded-2xl bg-white border border-navy-100 p-7 sm:p-9 shadow-card"
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12">
              <div className="w-14 h-14 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mb-5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0FA3C2" strokeWidth="2.2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-xl text-navy">Brief sent</h3>
              <p className="mt-2 text-sm text-slate-soft max-w-xs">
                Thanks, {form.name.split(' ')[0] || 'there'} — we'll follow up at {form.email} within one business
                day.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setSubmitted(false);
                }}
                className="mt-6 text-sm font-medium text-brand hover:text-navy transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field
                  id="name"
                  label="Full name"
                  placeholder="Sita Sharma"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <Field
                  id="email"
                  type="email"
                  label="Work email"
                  placeholder="sita@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mt-5">
                <label htmlFor="service" className="block text-xs font-medium text-slate-soft mb-2">
                  What do you need?
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-mist border border-navy-100 rounded-lg px-4 py-3 text-sm text-navy focus:border-brand transition-colors"
                >
                  <option>Web Development</option>
                  <option>Software & App Development</option>
                  <option>SEO</option>
                  <option>Digital Marketing</option>
                  <option>Meta Ads & Social Media</option>
                  <option>IT Consulting</option>
                  <option>Something else</option>
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="block text-xs font-medium text-slate-soft mb-2">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your timeline, budget, and goals..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-mist border border-navy-100 rounded-lg px-4 py-3 text-sm text-navy placeholder:text-slate-soft/60 focus:border-brand transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-display font-semibold px-7 py-3.5 rounded-lg transition-transform hover:scale-[1.02] shadow-soft"
              >
                Send Project Brief
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value, color }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 shrink-0 rounded-lg bg-mist border border-navy-100 flex items-center justify-center">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
          {icon}
        </svg>
      </div>
      <div>
        <p className="text-navy font-medium text-sm">{label}</p>
        <p className="text-slate-soft text-sm mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function Field({ id, label, type = 'text', ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-slate-soft mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        className="w-full bg-mist border border-navy-100 rounded-lg px-4 py-3 text-sm text-navy placeholder:text-slate-soft/60 focus:border-brand transition-colors"
        {...props}
      />
    </div>
  );
}
