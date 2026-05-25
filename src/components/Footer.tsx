import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  YoutubeIcon } from
'lucide-react';
const footerNav: {
  title: string;
  links: {
    label: string;
    to: string;
  }[];
}[] = [
{
  title: 'Product',
  links: [
  {
    label: 'Features',
    to: '/#features'
  },
  {
    label: 'Solutions',
    to: '/#solutions'
  },
  {
    label: 'Pricing',
    to: '/#pricing'
  },
  {
    label: 'FAQ',
    to: '/#faq'
  },
  {
    label: 'Changelog',
    to: '/resources'
  },
  {
    label: 'Roadmap',
    to: '/resources'
  }]

},
{
  title: 'Company',
  links: [
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Customers',
    to: '/about'
  },
  {
    label: 'Careers',
    to: '/about'
  },
  {
    label: 'Press',
    to: '/about'
  },
  {
    label: 'Contact',
    to: '/contact'
  },
  {
    label: 'Brand',
    to: '/about'
  }]

},
{
  title: 'Resources',
  links: [
  {
    label: 'Docs',
    to: '/resources'
  },
  {
    label: 'Help center',
    to: '/resources'
  },
  {
    label: 'Community',
    to: '/resources'
  },
  {
    label: 'Blog',
    to: '/resources'
  },
  {
    label: 'API reference',
    to: '/resources'
  },
  {
    label: 'Status',
    to: '/resources'
  }]

},
{
  title: 'Legal',
  links: [
  {
    label: 'Privacy',
    to: '/contact'
  },
  {
    label: 'Terms',
    to: '/contact'
  },
  {
    label: 'Security',
    to: '/contact'
  },
  {
    label: 'DPA',
    to: '/contact'
  },
  {
    label: 'Cookies',
    to: '/contact'
  },
  {
    label: 'Sub-processors',
    to: '/contact'
  }]

}];

export function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };
  return (
    <footer className="relative bg-navy-950 text-cream overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-pattern-dark opacity-50"
        aria-hidden />
      
      <div
        className="absolute -top-40 left-1/3 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
          'radial-gradient(closest-side, rgba(201,162,75,0.18), transparent 70%)'
        }}
        aria-hidden />
      

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <img
                src="/Work_Nest_Logo.png"
                alt="WorkNest"
                className="h-10 w-10 object-contain rounded-lg bg-white/95 p-0.5" />
              
              <span className="font-display font-bold text-2xl tracking-tight">
                WorkNest
              </span>
            </div>
            <p className="mt-5 text-cream/65 max-w-md leading-relaxed">
              The modern workspace for fast teams. Plan, build, and ship —
              beautifully.
            </p>

            <form onSubmit={onSubmit} className="mt-7 max-w-md">
              <label className="text-xs uppercase tracking-[0.15em] font-semibold text-gold-400">
                Stay in the loop
              </label>
              <div className="mt-2 flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1.5 backdrop-blur-md focus-within:border-gold-500/60 transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 bg-transparent border-0 outline-none px-3 py-2 text-sm text-cream placeholder:text-cream/40" />
                
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gold-gradient text-white text-sm font-semibold shadow-gold-glow hover:-translate-y-0.5 transition-all">
                  
                  Subscribe
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
              {submitted &&
              <p className="mt-2 text-xs text-gold-400">
                  Thanks — we'll be in touch.
                </p>
              }
              <p className="mt-2 text-xs text-cream/40">
                Monthly product news. Unsubscribe anytime.
              </p>
            </form>

            <div className="mt-7 flex items-center gap-2">
              {[
              {
                icon: TwitterIcon,
                label: 'Twitter'
              },
              {
                icon: LinkedinIcon,
                label: 'LinkedIn'
              },
              {
                icon: GithubIcon,
                label: 'GitHub'
              },
              {
                icon: YoutubeIcon,
                label: 'YouTube'
              }].
              map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-cream/70 hover:text-gold-400 hover:border-gold-500/40 transition-colors">
                    
                    <Icon className="w-4 h-4" />
                  </a>);

              })}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerNav.map((col) =>
            <div key={col.title}>
                <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-gold-400">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) =>
                <li key={l.label}>
                      <Link
                    to={l.to}
                    className="text-sm text-cream/70 hover:text-cream transition-colors">
                    
                        {l.label}
                      </Link>
                    </li>
                )}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} WorkNest, Inc. Crafted with care.
          </p>
          <div className="flex items-center gap-5 text-xs text-cream/50">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              All systems normal
            </span>
            <a href="#" className="hover:text-cream transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-cream transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>);

}