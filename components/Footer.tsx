// components/Footer.tsx
import Link from 'next/link';
import { PawPrint, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  Services: [
    { href: '/services#puppy',    label: 'Puppy Training'       },
    { href: '/services#obedience',label: 'Obedience Classes'    },
    { href: '/services#behaviour',label: 'Behaviour Therapy'    },
    { href: '/services#1-to-1',   label: '1-to-1 Sessions'     },
    { href: '/services#online',   label: 'Online Consultations' },
  ],
  Company: [
    { href: '/about',   label: 'About Us'     },
    { href: '/contact', label: 'Contact'      },
    { href: '/blog',    label: 'Blog'         },
    { href: '/faq',     label: 'FAQ'          },
  ],
};

const socials = [
  { Icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { Icon: Facebook,  href: 'https://facebook.com',  label: 'Facebook'  },
  { Icon: Youtube,   href: 'https://youtube.com',   label: 'YouTube'   },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-cream-200 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      {/* Top CTA strip */}
      <div className="border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row
                        items-center justify-between gap-6">
          <div>
            <p className="font-display font-800 text-2xl text-white">
              Ready to transform your dog?
            </p>
            <p className="text-cream-300 text-sm mt-1">
              Book a free 15-minute discovery call today.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-paw hover:bg-paw/90 text-forest font-display font-800
                       px-8 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300
                       hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book Your Free Call
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
                <PawPrint size={18} className="text-paw" strokeWidth={2.5} />
              </div>
              <span className="font-display font-900 text-xl text-white">
                Wise<span className="text-paw">K9</span>
              </span>
            </div>
            <p className="text-cream-400 text-sm leading-relaxed mb-6">
              Certified dog trainers and behaviourists dedicated to building lasting bonds
              between dogs and their owners through science-backed, compassionate methods.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 bg-white/10 hover:bg-paw hover:text-forest text-cream-300
                             rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="font-display font-700 text-white text-sm mb-5 tracking-wide uppercase
                            text-xs tracking-[0.15em]">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-cream-400 hover:text-paw text-sm transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="font-display font-700 text-white text-xs tracking-[0.15em] uppercase mb-5">
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <a href="tel:+441234567890"
                   className="flex items-start gap-3 text-cream-400 hover:text-paw text-sm
                              transition-colors duration-200 group">
                  <Phone size={15} className="mt-0.5 shrink-0 group-hover:text-paw" />
                  +44 (0) 123 456 7890
                </a>
              </li>
              <li>
                <a href="mailto:hello@wisek9.co.uk"
                   className="flex items-start gap-3 text-cream-400 hover:text-paw text-sm
                              transition-colors duration-200 group">
                  <Mail size={15} className="mt-0.5 shrink-0 group-hover:text-paw" />
                  hello@wisek9.co.uk
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-cream-400 text-sm">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  Covering Surrey, London &amp; Home Counties
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row
                        items-center justify-between gap-3 text-cream-500 text-xs">
          <p>© {new Date().getFullYear()} WiseK9. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-cream-200 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-cream-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
