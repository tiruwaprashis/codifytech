import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 py-14 bg-mist">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <img src={logo} alt="Codify.Tech" className="h-8 w-auto mb-4" />
            <p className="text-sm text-slate-soft leading-relaxed max-w-sm">
              Web development, software &amp; apps, SEO, digital marketing, and Meta Ads — built from Nepalgunj,
              Nepal, and shipped to clients everywhere.
            </p>
          </div>

          <div>
            <p className="font-display font-semibold text-navy text-sm mb-4">Services</p>
            <ul className="space-y-2.5 text-sm text-slate-soft">
              <li><a href="#services" className="hover:text-navy transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-navy transition-colors">Software &amp; App Development</a></li>
              <li><a href="#services" className="hover:text-navy transition-colors">SEO</a></li>
              <li><a href="#services" className="hover:text-navy transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-navy transition-colors">Meta Ads &amp; Social Media</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display font-semibold text-navy text-sm mb-4">Office</p>
            <p className="text-sm text-slate-soft leading-relaxed">
              Tribhuwan Chowk
              <br />
              Nepalgunj, Banke
              <br />
              Lumbini Province, Nepal
            </p>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-soft">© 2026 Codify.Tech. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-slate-soft">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
