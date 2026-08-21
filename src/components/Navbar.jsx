import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Us' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-navy-100 shadow-[0_4px_24px_-8px_rgba(10,30,100,0.12)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="Codify.Tech" className="h-9 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-9 font-medium text-sm text-slate-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-navy transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 bg-brand-gradient text-white font-display font-semibold text-sm px-5 py-2.5 rounded-lg transition-transform hover:scale-[1.03] shadow-soft"
        >
          Get a Quote
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-navy p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-navy-100 px-6 py-5 flex flex-col gap-4 text-sm font-medium text-slate-soft">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-navy transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center items-center gap-2 bg-brand-gradient text-white font-display font-semibold px-5 py-2.5 rounded-lg mt-1"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
