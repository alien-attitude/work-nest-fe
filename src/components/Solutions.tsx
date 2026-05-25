import React from 'react';
import { motion } from 'framer-motion';
import {
  RocketIcon,
  MegaphoneIcon,
  PackageIcon,
  PaletteIcon,
  BuildingIcon,
  GlobeIcon,
  ArrowRightIcon } from
'lucide-react';
import { SectionHeader } from './Features';
const solutions = [
{
  icon: RocketIcon,
  title: 'Startups',
  desc: 'Move fast without breaking process. Operate like a series-B team from day one.'
},
{
  icon: MegaphoneIcon,
  title: 'Marketing Teams',
  desc: 'Plan campaigns, track content, and prove ROI — all from one workspace.'
},
{
  icon: PackageIcon,
  title: 'Product Teams',
  desc: 'Roadmaps, specs, sprints, and feedback — woven into one source of truth.'
},
{
  icon: PaletteIcon,
  title: 'Agencies',
  desc: 'Run dozens of client projects in parallel with bespoke client portals.'
},
{
  icon: BuildingIcon,
  title: 'Enterprises',
  desc: 'Scale with confidence — SSO, audit logs, and granular permissions.'
},
{
  icon: GlobeIcon,
  title: 'Remote Teams',
  desc: 'Async-first by design. Stay aligned across time zones, without meeting overload.'
}];

export function Solutions() {
  return (
    <section
      id="solutions"
      className="relative py-24 md:py-32 bg-cream-50/60 border-y border-border">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Solutions"
          title={
          <>
              Built for every team,
              <br className="hidden sm:block" />
              <span className="gold-text-gradient">tuned to yours.</span>
            </>
          }
          subtitle="WorkNest adapts to your industry, your structure, and your goals — out of the box or fully custom." />
        

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.title}
                href="#"
                initial={{
                  opacity: 0,
                  y: 18
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true,
                  margin: '-60px'
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05
                }}
                className="group relative rounded-3xl bg-white border border-border p-6 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all overflow-hidden block">
                
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background:
                    'radial-gradient(400px 200px at 100% 0%, rgba(201,162,75,0.10), transparent 60%)'
                  }} />
                
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-navy-900 grid place-items-center text-gold-400 shadow-soft">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowRightIcon className="w-4 h-4 text-navy-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                    {s.desc}
                  </p>

                  {/* mini illustration */}
                  <div className="mt-5 grid grid-cols-6 gap-1">
                    {Array.from({
                      length: 6
                    }).map((_, k) =>
                    <div
                      key={k}
                      className={[
                      'h-1.5 rounded-full',
                      k < i % 6 + 2 ? 'bg-gold-gradient' : 'bg-navy-100'].
                      join(' ')} />

                    )}
                  </div>
                </div>
              </motion.a>);

          })}
        </div>
      </div>
    </section>);

}