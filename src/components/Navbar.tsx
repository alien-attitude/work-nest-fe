import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
type NavLink = {
  label: string;
  to: string;
  section?: boolean;
};
const navLinks: NavLink[] = [
{
  label: 'Home',
  to: '/'
},
{
  label: 'Features',
  to: '/#features',
  section: true
},
{
  label: 'Solutions',
  to: '/#solutions',
  section: true
},
{
  label: 'Pricing',
  to: '/#pricing',
  section: true
},
{
  label: 'FAQ',
  to: '/#faq',
  section: true
},
{
  label: 'Resources',
  to: '/resources'
},
{
  label: 'About',
  to: '/about'
},
{
  label: 'Contact',
  to: '/contact'
}];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);
  const isActive = (l: NavLink) => {
    if (l.section) return false;
    if (l.to === '/') return pathname === '/' && !hash;
    return pathname === l.to;
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{
          y: -20,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={[
        'w-full max-w-7xl flex items-center justify-between',
        'rounded-2xl transition-all duration-300',
        scrolled ?
        'bg-white/75 backdrop-blur-xl border border-border shadow-soft px-4 py-2.5' :
        'bg-white/40 backdrop-blur-md border border-transparent px-5 py-3'].
        join(' ')}>
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="WorkNest home">
          
          <img
            src="/Work_Nest_Logo.png"
            alt="WorkNest"
            className="h-9 w-9 object-contain rounded-lg" />
          
          <span className="font-display font-bold text-navy-900 text-lg tracking-tight hidden sm:block">
            WorkNest
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => {
            const active = isActive(l);
            return (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className={[
                  'relative px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  active ?
                  'text-navy-900' :
                  'text-navy-700/80 hover:text-navy-900 hover:bg-navy-50/60'].
                  join(' ')}>
                  
                  {l.label}
                  {active &&
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-500"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30
                    }} />

                  }
                </Link>
              </li>);

          })}
        </ul>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 rounded-lg transition-colors hover:bg-navy-50/60 inline-flex items-center gap-1">
            
            Book Demo
          </Link>
          <a
            href="#start"
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy-900 text-cream text-sm font-semibold shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5">
            
            <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gold-500/40 pointer-events-none" />
            Start Free
            <span className="text-gold-400 group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg text-navy-800 hover:bg-navy-50/60"
          aria-label="Toggle menu">
          
          {open ?
          <XIcon className="w-5 h-5" /> :

          <MenuIcon className="w-5 h-5" />
          }
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{
            opacity: 0,
            y: -8
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -8
          }}
          transition={{
            duration: 0.2
          }}
          className="lg:hidden fixed top-[76px] left-4 right-4 z-40 bg-white/95 backdrop-blur-xl border border-border rounded-2xl shadow-elevated p-3">
          
            <ul className="flex flex-col">
              {navLinks.map((l) =>
            <li key={l.label}>
                  <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-navy-800 font-medium hover:bg-navy-50/70">
                
                    {l.label}
                  </Link>
                </li>
            )}
            </ul>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link
              to="/contact"
              className="px-3 py-2.5 rounded-lg border border-border text-center text-sm font-medium text-navy-800">
              
                Book Demo
              </Link>
              <a
              href="#start"
              className="px-3 py-2.5 rounded-lg bg-navy-900 text-cream text-center text-sm font-semibold">
              
                Start Free
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}