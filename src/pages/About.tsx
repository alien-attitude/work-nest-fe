import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartIcon,
  CompassIcon,
  ShieldCheckIcon,
  SparklesIcon,
  GlobeIcon,
  ArrowRightIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { SectionHeader } from '../components/Features';
const stats = [
{
  value: '12,000+',
  label: 'Teams using WorkNest'
},
{
  value: '92',
  label: 'Countries served'
},
{
  value: '$140M',
  label: 'Series B funding'
},
{
  value: '186',
  label: 'Worldwide nesters'
}];

const values = [
{
  icon: HeartIcon,
  title: 'Craft over churn',
  desc: 'We sweat the details others skip. Every interaction, every transition — earned, not generated.'
},
{
  icon: CompassIcon,
  title: 'Clarity in chaos',
  desc: 'Software should reduce cognitive load, not add to it. We design for the calm mind.'
},
{
  icon: ShieldCheckIcon,
  title: 'Trust by default',
  desc: 'Security, privacy, and reliability are not features. They are the floor.'
},
{
  icon: SparklesIcon,
  title: 'Boring brilliance',
  desc: "We'd rather ship something that just works than something flashy. The work is the show."
},
{
  icon: GlobeIcon,
  title: 'Async, intentional',
  desc: 'We respect attention. We write things down. We meet only when we must.'
}];

const timeline = [
{
  year: '2021',
  title: 'Founded in Lisbon',
  body: 'Two former operators set out to build the workspace they always wished existed.'
},
{
  year: '2022',
  title: 'Seed round · $6M',
  body: 'Backed by founders from Linear, Figma, and Notion. First 50 customers shipped.'
},
{
  year: '2023',
  title: 'Public launch',
  body: '#1 product of the day on Product Hunt. 4,000 teams in the first month.'
},
{
  year: '2024',
  title: 'Series A · $32M',
  body: 'Opened New York and Berlin offices. Crossed 5,000 paying customers.'
},
{
  year: '2025',
  title: 'WorkNest AI',
  body: 'Launched AI 1.0 — grounded, permission-aware automations for every workspace.'
},
{
  year: '2026',
  title: 'Series B · $140M',
  body: 'Now serving 12,000+ teams across 92 countries. Just getting started.'
}];

const leaders = [
{
  name: 'Sara Lindqvist',
  role: 'Co-founder & CEO',
  img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces'
},
{
  name: 'Tomás Ferreira',
  role: 'Co-founder & CTO',
  img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=faces'
},
{
  name: 'Aisha Okonkwo',
  role: 'Chief Product Officer',
  img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=faces'
},
{
  name: 'Daniel Kim',
  role: 'VP of Design',
  img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop&crop=faces'
},
{
  name: 'Mira Patel',
  role: 'VP of Engineering',
  img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces'
},
{
  name: 'Lukas Brandt',
  role: 'VP of Revenue',
  img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&h=400&fit=crop&crop=faces'
}];

const investors = [
'Sequoia',
'Index',
'Accel',
'Founders Fund',
'Y Combinator',
'Atomico'];

export function About() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title={
        <>
            We build the workspace
            <br />
            <span className="gold-text-gradient">we always wanted.</span>
          </>
        }
        subtitle="WorkNest is a small, opinionated team building software that respects your time, your data, and your taste." />
      

      {/* Stats */}
      <section className="relative -mt-2 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="rounded-3xl bg-white border border-border shadow-elevated p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) =>
            <motion.div
              key={s.label}
              initial={{
                opacity: 0,
                y: 14
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.06
              }}
              className="text-center lg:text-left">
              
                <div className="font-display text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm text-navy-500 mt-1">{s.label}</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-soft">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-navy-700">
                Our mission
              </span>
            </div>
            <h2 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-navy-900 tracking-tightest leading-[1.05]">
              Give every team
              <br />
              <span className="navy-text-gradient">a calm place to work.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-navy-600 text-lg leading-relaxed">
            <p>
              Modern work is fragmented. People juggle a dozen tabs, switch
              contexts a hundred times a day, and lose hours just trying to
              remember where things live. We think that's a design failure — not
              a "you need more discipline" problem.
            </p>
            <p>
              We're building WorkNest because we believe teams deserve software
              that meets them halfway: structured when they need structure,
              flexible when they need to move. Beautiful, always.
            </p>
            <p>
              We're a small, profitable company with a long-term view. We don't
              take ad money, we don't sell your data, and we don't ship for the
              sake of shipping. We build the thing we want to use — and hope you
              do too.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 md:py-24 bg-cream-50/60 border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="What we believe"
            title={
            <>
                Five things we
                <br className="hidden sm:block" />{' '}
                <span className="gold-text-gradient">never compromise on.</span>
              </>
            }
            subtitle="Our values aren't a poster on the wall. They're the filters we run every decision through." />
          
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
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
                  className="rounded-3xl bg-white border border-border p-6 shadow-soft hover:shadow-elevated transition-all">
                  
                  <div className="w-11 h-11 rounded-xl bg-navy-50 border border-border grid place-items-center text-navy-800">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900 tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="Our story"
            title={
            <>
                From two people in a kitchen
                <br className="hidden sm:block" />
                <span className="gold-text-gradient">to a team of 186.</span>
              </>
            } />
          
          <div className="mt-14 relative">
            <div
              className="absolute left-3 md:left-1/2 top-2 bottom-2 w-px bg-border md:-translate-x-1/2"
              aria-hidden />
            
            <div className="space-y-8">
              {timeline.map((t, i) => {
                const right = i % 2 === 1;
                return (
                  <motion.div
                    key={t.year}
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
                      margin: '-40px'
                    }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.04
                    }}
                    className={[
                    'relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-12',
                    right ? '' : ''].
                    join(' ')}>
                    
                    <div
                      className={
                      right ?
                      'md:col-start-2 md:pl-10' :
                      'md:pr-10 md:text-right'
                      }>
                      
                      <div className="text-xs font-semibold uppercase tracking-wider text-gold-700">
                        {t.year}
                      </div>
                      <h3 className="mt-1 font-display text-xl font-bold text-navy-900 tracking-tight">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                        {t.body}
                      </p>
                    </div>
                    <div
                      className={[
                      'absolute left-3 md:left-1/2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-gradient ring-4 ring-cream shadow-gold-glow'].
                      join(' ')}
                      aria-hidden />
                    
                  </motion.div>);

              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative py-20 md:py-24 bg-cream-50/60 border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="Leadership"
            title={
            <>
                The team behind{' '}
                <span className="gold-text-gradient">WorkNest.</span>
              </>
            }
            subtitle="Builders, operators, and designers — most of whom have shipped products you've already used." />
          
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {leaders.map((l, i) =>
            <motion.div
              key={l.name}
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
                margin: '-40px'
              }}
              transition={{
                duration: 0.4,
                delay: i * 0.04
              }}
              className="group">
              
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-soft">
                  <img
                  src={l.img}
                  alt={l.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-3">
                  <div className="font-semibold text-navy-900 text-sm">
                    {l.name}
                  </div>
                  <div className="text-xs text-navy-500">{l.role}</div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="mt-14 text-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-border text-navy-800 font-semibold hover:border-navy-300 transition-all shadow-soft">
              
              View open roles
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-navy-500">
            Backed by the best
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {investors.map((i) =>
            <div
              key={i}
              className="text-2xl font-display font-bold text-navy-300 hover:text-navy-700 transition-colors tracking-tight">
              
                {i}
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </main>);

}