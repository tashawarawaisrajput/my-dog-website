'use client';
// app/page.tsx  (Home Page)

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import {
  Award, ShieldCheck, TrendingUp, ArrowRight, Star, ChevronRight,
  Dog, Brain, Users, Heart, CheckCircle, Phone,
} from 'lucide-react';

/* ─── Reveal-on-scroll hook ─────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─── Data ───────────────────────────────────────────────────────── */
const features = [
  {
    Icon: Award,
    title: 'Expert Training',
    desc:  'Over a decade of hands-on experience helping thousands of dogs and their families build confidence and calm.',
  },
  {
    Icon: ShieldCheck,
    title: 'Certified Behaviourist',
    desc:  'Fully accredited with the APDT and COAPE — giving you peace of mind that your dog is in trusted, professional hands.',
  },
  {
    Icon: TrendingUp,
    title: 'Proven Results',
    desc:  'Our science-backed methods deliver measurable, lasting change — not quick fixes — from the very first session.',
  },
];

const services = [
  {
    Icon: Dog,
    tag:   'Most Popular',
    title: 'Puppy Foundation',
    desc:  'Set your puppy up for life with our comprehensive foundation programme covering socialisation, recall, and early manners.',
    href:  '/services#puppy',
    color: 'from-forest to-forest-400',
  },
  {
    Icon: Brain,
    tag:   'Specialist',
    title: 'Behavioural Therapy',
    desc:  'Targeted support for reactivity, anxiety, aggression, and fear using evidence-based counter-conditioning techniques.',
    href:  '/services#behaviour',
    color: 'from-sage to-sage-400',
  },
  {
    Icon: Users,
    tag:   'Group',
    title: 'Training Classes',
    desc:  'Small-group classes that build obedience skills and socialisation in a structured, friendly environment.',
    href:  '/services#classes',
    color: 'from-forest-600 to-sage-500',
  },
];

const testimonials = [
  {
    name:   'Sarah M.',
    dog:    'Border Collie owner',
    rating: 5,
    quote:  'Absolutely life-changing. Our reactive collie is now a joy to walk. WiseK9 understood the root cause and gave us a clear plan that worked.',
  },
  {
    name:   'James R.',
    dog:    'Golden Retriever owner',
    rating: 5,
    quote:  'From pulling on the lead to perfect heel work in 6 weeks. The expertise and patience here are second to none.',
  },
  {
    name:   'Priya K.',
    dog:    'Cockapoo owner',
    rating: 5,
    quote:  'The puppy programme was worth every penny. Our pup has the best recall in the park — all the other owners ask what we did!',
  },
];

const stats = [
  { value: '1,200+', label: 'Dogs Transformed' },
  { value: '12+',    label: 'Years Experience'  },
  { value: '98%',    label: 'Client Satisfaction' },
  { value: '4',      label: 'Certifications'    },
];

/* ─── Sub-components ─────────────────────────────────────────────── */
function RevealSection({ children, className = '', delay = '' }: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${delay} ${className}`}>
      {children}
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-paw text-paw" />
      ))}
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-forest">
        {/* Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

        {/* Decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-paw/10 blur-3xl" />

        {/* Floating paw prints */}
        <div className="absolute top-1/4 right-1/4 text-white/5 animate-float">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.5 9.5a3 3 0 110-6 3 3 0 010 6zm15 0a3 3 0 110-6 3 3 0 010 6zm-15 9a3 3 0 110-6 3 3 0 010 6zm15 0a3 3 0 110-6 3 3 0 010 6zM12 22a7 7 0 110-14 7 7 0 010 14z"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm
                            text-cream-200 text-xs font-display font-700 tracking-[0.2em] uppercase
                            px-4 py-2 rounded-full mb-8 border border-white/15 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-paw animate-pulse-slow" />
              Certified Dog Trainer &amp; Behaviourist
            </div>

            {/* Heading */}
            <h1 className="font-display font-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                           leading-[1.02] tracking-tight text-white mb-7 animate-fade-up text-balance">
              Your Dog's Best
              <span className="block text-paw">Chapter Starts</span>
              <span className="block text-cream-300 text-opacity-80">Here.</span>
            </h1>

            {/* Sub-text */}
            <p className="text-cream-300 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10
                          animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
              Science-backed training and expert behaviour therapy that creates calm, confident dogs
              and the lifelong bond you've always wanted.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:400ms] opacity-0
                            [animation-fill-mode:forwards]">
              <Link href="/contact" className="btn-white shadow-forest">
                Book a Free Call <ArrowRight size={16} />
              </Link>
              <Link href="/services"
                    className="inline-flex items-center gap-2 border-2 border-white/30 text-cream-200
                               hover:border-white hover:text-white font-display font-700 px-7 py-3.5
                               rounded-full text-sm tracking-wide transition-all duration-300">
                View Services <ChevronRight size={16} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-14
                            animate-fade-up [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
              {['APDT Accredited', 'COAPE Certified', 'Fully Insured'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-cream-300 text-sm">
                  <CheckCircle size={15} className="text-paw" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y-0 md:divide-x md:divide-white/10">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center md:px-8">
                  <p className="font-display font-900 text-2xl md:text-3xl text-paw">{value}</p>
                  <p className="text-cream-400 text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────── */}
      <section className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <span className="section-label">Why Choose WiseK9</span>
            <h2 className="heading-lg max-w-2xl mx-auto text-balance">
              Professional expertise you can trust, results you can see
            </h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map(({ Icon, title, desc }, i) => (
              <RevealSection key={title} delay={`[transition-delay:${i * 100}ms]`}>
                <div className="card-base group border border-cream-300 hover:border-forest/20">
                  <div className="w-14 h-14 bg-forest/8 rounded-2xl flex items-center justify-center mb-6
                                  group-hover:bg-forest group-hover:scale-110 transition-all duration-400">
                    <Icon size={24} className="text-forest group-hover:text-cream-100 transition-colors duration-400" />
                  </div>
                  <h3 className="heading-md text-xl mb-3">{title}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="section-label">Our Services</span>
              <h2 className="heading-lg text-balance">
                Every dog is different.<br />Every plan is too.
              </h2>
            </div>
            <Link href="/services" className="btn-outline shrink-0 self-start md:self-auto">
              All Services <ArrowRight size={16} />
            </Link>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ Icon, tag, title, desc, href, color }, i) => (
              <RevealSection key={title} delay={`[transition-delay:${i * 120}ms]`}>
                <Link href={href} className="group block relative overflow-hidden rounded-2xl
                                            h-full min-h-[320px] cursor-pointer">
                  {/* Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} transition-all duration-500
                                  group-hover:scale-105`} />
                  <div className="absolute inset-0 bg-noise opacity-20" />

                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center
                                        group-hover:bg-white/25 transition-colors duration-300">
                          <Icon size={22} className="text-white" />
                        </div>
                        <span className="bg-paw text-forest text-xs font-display font-700 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      </div>
                      <h3 className="font-display font-800 text-2xl text-white mb-3">{title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed">{desc}</p>
                    </div>

                    <div className="flex items-center gap-2 text-white font-display font-700 text-sm mt-6
                                    group-hover:gap-4 transition-all duration-300">
                      Learn More <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-24 bg-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealSection className="text-center mb-16">
            <span className="section-label">Client Stories</span>
            <h2 className="heading-lg">What our clients say</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ name, dog, rating, quote }, i) => (
              <RevealSection key={name} delay={`[transition-delay:${i * 100}ms]`}>
                <div className="card-base border border-cream-300 h-full flex flex-col">
                  <StarRating count={rating} />
                  <p className="text-forest/70 text-sm leading-relaxed mt-4 mb-6 flex-1">
                    "{quote}"
                  </p>
                  <div className="flex items-center gap-3 border-t border-cream-300 pt-5">
                    <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center
                                    font-display font-800 text-sm text-cream-100">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-display font-700 text-sm text-forest">{name}</p>
                      <p className="text-xs text-forest/50">{dog}</p>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
        <div className="absolute -top-24 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl" />

        <RevealSection className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-paw/20 text-paw text-xs font-display font-700
                           tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6">
            Get Started Today
          </span>
          <h2 className="font-display font-900 text-4xl sm:text-5xl text-white mb-6 text-balance">
            The dog you've always dreamed of is just one call away.
          </h2>
          <p className="text-cream-300 text-lg mb-10 max-w-xl mx-auto">
            Book a free 15-minute discovery call and let's create the perfect plan for you and your dog.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-white shadow-forest">
              Book Your Free Call <Phone size={16} />
            </Link>
            <Link href="/about"
                  className="inline-flex items-center gap-2 border-2 border-white/30 text-cream-200
                             hover:border-white hover:text-white font-display font-700 px-7 py-3.5
                             rounded-full text-sm tracking-wide transition-all duration-300">
              Meet the Team <Heart size={15} />
            </Link>
          </div>
        </RevealSection>
      </section>
    </>
  );
}
