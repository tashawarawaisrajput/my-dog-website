'use client';
// components/Navbar.tsx

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PawPrint, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/',          label: 'Home'     },
  { href: '/services',  label: 'Services' },
  { href: '/about',     label: 'About'    },
  { href: '/contact',   label: 'Contact'  },
];

export default function Navbar() {
  const [open,      setOpen]      = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-forest-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center
                          group-hover:bg-forest-400 transition-colors duration-300">
            <PawPrint size={18} className="text-cream-100" strokeWidth={2.5} />
          </div>
          <span className="font-display font-900 text-xl tracking-tight text-forest">
            Wise<span className="text-paw">K9</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link pb-1 ${pathname === href ? 'text-forest after:w-full' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl
                     bg-forest/5 hover:bg-forest/10 transition-colors text-forest"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/97 backdrop-blur-md border-t border-cream-300 px-4 pt-4 pb-6 space-y-1">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block font-display font-600 text-sm px-4 py-3 rounded-xl transition-colors
                          ${pathname === href
                            ? 'bg-forest text-cream-100'
                            : 'text-forest hover:bg-forest/5'
                          }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <Link href="/contact" className="btn-primary w-full justify-center">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
