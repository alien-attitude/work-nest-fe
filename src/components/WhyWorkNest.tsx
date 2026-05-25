import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  CheckIcon,
  XIcon,
  ArrowRightIcon,
  ZapIcon,
  ShieldCheckIcon,
  TrendingUpIcon } from
'lucide-react';
import { SectionHeader } from './Features';
const stats = [
{
  value: 38,
  suffix: '%',
  label: 'Productivity gain',
  sub: 'vs. legacy tools'
},
{
  value: 12000,
  suffix: '+',
  label: 'Teams onboard',
  sub: 'Across 92 countries'
},
{
  value: 2.4,
  suffix: 'x',
  label: 'Faster delivery',
  sub: 'From plan to ship'
},
{
  value: 99.99,
  suffix: '%',
  label: 'Uptime SLA',
  sub: 'Enterprise-ready'
}];

export function WhyWorkNest() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Why WorkNest"
          title={
          <>
              Built to outperform <br className="hidden sm:block" />
              <span className="gold-text-gradient">every legacy tool.</span>
            </>
          }
          subtitle="From startups to enterprises, teams choose WorkNest for measurable outcomes — not just features." />
        

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) =>
          <StatCard key={s.label} stat={s} index={i} />
          )}
        </div>

        {/* Comparison */}
        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-3xl font-bold text-navy-900 tracking-tight">
              Less switching.
              <br /> More shipping.
            </h3>
            <p className="text-navy-500 leading-relaxed">
              WorkNest replaces the patchwork of disconnected tools with one
              elegant system that scales with your team — from the first sprint
              to IPO.
            </p>

            <ul className="mt-6 space-y-3">
              {[
              {
                icon: ZapIcon,
                t: '10x faster onboarding',
                d: 'Teams are productive in days, not weeks.'
              },
              {
                icon: ShieldCheckIcon,
                t: 'Enterprise-grade security',
                d: 'SOC 2 Type II, ISO 27001, GDPR.'
              },
              {
                icon: TrendingUpIcon,
                t: 'Outcomes that compound',
                d: 'Insights surface bottlenecks early.'
              }].
              map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.t} className="flex gap-3">
                    <div className="w-9 h-9 shrink-0 rounded-xl bg-navy-50 border border-border grid place-items-center text-navy-800">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">{b.t}</div>
                      <div className="text-sm text-navy-500">{b.d}</div>
                    </div>
                  </li>);

              })}
            </ul>

            <a
              href="#start"
              className="mt-6 inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-gold-700 transition-colors group">
              
              See the impact study
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <ComparisonTable />
          </div>
        </div>
      </div>
    </section>);

}
function StatCard({
  stat,
  index








}: {stat: {value: number;suffix: string;label: string;sub: string;};index: number;}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const isFloat = stat.value % 1 !== 0;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(stat.value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);else
      setDisplay(stat.value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, stat.value]);
  const formatted = (() => {
    if (stat.value >= 1000) return Math.round(display).toLocaleString();
    if (stat.value % 1 !== 0)
    return display.toFixed(stat.value === 99.99 ? 2 : 1);
    return Math.round(display).toString();
  })();
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 16
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
        delay: index * 0.06
      }}
      className="rounded-3xl bg-white border border-border p-6 shadow-soft hover:shadow-elevated transition-all">
      
      <div className="font-display text-4xl md:text-5xl font-bold text-navy-900 tracking-tight">
        {formatted}
        <span className="gold-text-gradient">{stat.suffix}</span>
      </div>
      <div className="mt-2 font-semibold text-navy-800">{stat.label}</div>
      <div className="text-sm text-navy-500">{stat.sub}</div>
    </motion.div>);

}
function ComparisonTable() {
  const rows = [
  {
    feature: 'Unified workspace',
    us: true,
    them: false
  },
  {
    feature: 'AI-powered automation',
    us: true,
    them: false
  },
  {
    feature: 'Real-time collaboration',
    us: true,
    them: true
  },
  {
    feature: 'Enterprise SSO & SCIM',
    us: true,
    them: false
  },
  {
    feature: 'Custom workflows',
    us: true,
    them: true
  },
  {
    feature: 'Native analytics dashboards',
    us: true,
    them: false
  }];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
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
        duration: 0.6
      }}
      className="rounded-3xl border border-border bg-white shadow-elevated overflow-hidden">
      
      <div className="grid grid-cols-3 px-6 py-4 bg-cream-50/60 border-b border-border text-sm font-semibold">
        <div className="text-navy-500">Capability</div>
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gold-500" />
            <span className="text-navy-900">WorkNest</span>
          </div>
        </div>
        <div className="text-center text-navy-500">Legacy tools</div>
      </div>
      {rows.map((r) =>
      <div
        key={r.feature}
        className="grid grid-cols-3 items-center px-6 py-3.5 border-b border-border/70 last:border-0 text-sm hover:bg-cream-50/40 transition-colors">
        
          <div className="text-navy-800 font-medium">{r.feature}</div>
          <div className="flex justify-center">
            {r.us ?
          <div className="w-7 h-7 rounded-full bg-gold-gradient grid place-items-center text-white">
                <CheckIcon className="w-4 h-4" />
              </div> :

          <div className="w-7 h-7 rounded-full bg-navy-50 grid place-items-center text-navy-400">
                <XIcon className="w-4 h-4" />
              </div>
          }
          </div>
          <div className="flex justify-center">
            {r.them ?
          <div className="w-7 h-7 rounded-full bg-navy-50 grid place-items-center text-navy-700">
                <CheckIcon className="w-4 h-4" />
              </div> :

          <div className="w-7 h-7 rounded-full bg-navy-50 grid place-items-center text-navy-300">
                <XIcon className="w-4 h-4" />
              </div>
          }
          </div>
        </div>
      )}
    </motion.div>);

}