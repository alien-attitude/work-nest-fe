import React from 'react';
import { motion } from 'framer-motion';
const logos = [
'NovaTech',
'ScaleFlow',
'MetaCore',
'Synapse',
'Vertex Labs',
'Helix',
'Northwind',
'Kepler'];

export function LogoCloud() {
  return (
    <section className="py-16 border-y border-border bg-cream-50/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.p
          initial={{
            opacity: 0,
            y: 12
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
            duration: 0.5
          }}
          className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-navy-500">
          
          Trusted by ambitious teams at
        </motion.p>

        <div className="relative mt-8 mask-fade-x overflow-hidden">
          <div
            className="flex gap-12 sm:gap-16 animate-marquee whitespace-nowrap"
            style={{
              width: 'max-content'
            }}>
            
            {[...logos, ...logos].map((name, i) =>
            <div
              key={i}
              className="text-2xl sm:text-3xl font-display font-bold text-navy-300 hover:text-navy-700 transition-colors tracking-tight">
              
                {name}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}