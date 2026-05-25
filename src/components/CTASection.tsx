import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
export function CTASection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 24
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-80px'
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="relative overflow-hidden rounded-[2.25rem] bg-navy-gradient text-cream px-6 sm:px-12 py-16 md:py-20 shadow-deep">
          
          {/* Glow & grid */}
          <div
            className="absolute inset-0 bg-grid-pattern-dark opacity-60"
            aria-hidden />
          
          <div
            className="absolute -top-32 -right-24 w-[640px] h-[640px] rounded-full pointer-events-none"
            style={{
              background:
              'radial-gradient(closest-side, rgba(201,162,75,0.45), transparent 70%)'
            }}
            aria-hidden />
          
          <div
            className="absolute -bottom-32 -left-24 w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{
              background:
              'radial-gradient(closest-side, rgba(27,42,78,0.6), transparent 70%)'
            }}
            aria-hidden />
          

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold-gradient">
                <SparklesIcon className="w-3 h-3 text-white" />
              </span>
              <span className="text-xs font-medium text-cream/85">
                Free forever · 14-day Pro trial
              </span>
            </div>

            <h2 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tightest leading-[1.05]">
              Start building smarter
              <br /> workflows{' '}
              <span className="gold-text-gradient">today.</span>
            </h2>

            <p className="mt-5 text-cream/75 text-lg max-w-xl leading-relaxed">
              Your team's new productivity hub. No credit card required — and
              we'll help you migrate, free of charge.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#start"
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold-gradient text-white font-semibold shadow-gold-glow hover:-translate-y-0.5 transition-all">
                
                Start Free
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 border border-white/20 text-cream font-semibold backdrop-blur-md hover:bg-white/15 transition-all">
                
                Book a Demo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-cream/60">
              <span>✓ SOC 2 Type II</span>
              <span>✓ 99.99% uptime SLA</span>
              <span>✓ 24/7 support</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}