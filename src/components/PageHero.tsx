import React from 'react';
import { motion } from 'framer-motion';
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children





}: {eyebrow: string;title: React.ReactNode;subtitle?: string;children?: React.ReactNode;}) {
  return (
    <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden bg-cream-radial">
      <div
        className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"
        aria-hidden />
      
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
          'radial-gradient(closest-side, rgba(201,162,75,0.16), rgba(201,162,75,0.04) 50%, transparent 70%)'
        }}
        aria-hidden />
      
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-soft">
          
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-navy-700">
            {eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 16
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.05,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="font-display mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold text-navy-900 tracking-tightest leading-[1.04]">
          
          {title}
        </motion.h1>

        {subtitle &&
        <motion.p
          initial={{
            opacity: 0,
            y: 16
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.1
          }}
          className="mt-6 text-lg sm:text-xl text-navy-500 max-w-2xl mx-auto leading-relaxed">
          
            {subtitle}
          </motion.p>
        }

        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>);

}