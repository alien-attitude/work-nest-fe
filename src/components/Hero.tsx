import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon,
  CheckCircle2Icon,
  TrendingUpIcon,
  UsersIcon,
  CalendarIcon,
  CircleDotIcon,
  StarIcon } from
'lucide-react';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-cream-radial">
      
      {/* Decorative background */}
      <div
        className="absolute inset-0 bg-dot-pattern opacity-50 pointer-events-none"
        aria-hidden />
      
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
          'radial-gradient(closest-side, rgba(201,162,75,0.18), rgba(201,162,75,0.06) 50%, transparent 70%)'
        }}
        aria-hidden />
      

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left */}
        <div className="lg:col-span-6">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1.5 rounded-full bg-white border border-border shadow-soft">
            
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gold-gradient text-white">
              <SparklesIcon className="w-3 h-3" />
            </span>
            <span className="text-xs font-medium text-navy-700">
              New · WorkNest AI 2.0 — Smart automations
            </span>
            <ArrowRightIcon className="w-3.5 h-3.5 text-navy-500" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={1}
            className="font-display mt-6 text-[2.6rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] leading-[1.04] font-bold text-navy-900 tracking-tightest">
            
            Where teams organize
            <br className="hidden sm:block" /> work{' '}
            <span className="relative inline-block">
              <span className="gold-text-gradient">smarter.</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 220 12"
                fill="none"
                preserveAspectRatio="none">
                
                <path
                  d="M2 8 C 60 2, 140 2, 218 8"
                  stroke="url(#g1)"
                  strokeWidth="3"
                  strokeLinecap="round" />
                
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#E0B86A" />
                    <stop offset="100%" stopColor="#B08A3A" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={2}
            className="mt-6 text-lg text-navy-500 max-w-xl leading-relaxed">
            
            The modern workspace built for fast teams. Manage projects, data,
            and collaboration in one elegant platform — designed to feel as good
            as it works.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={3}
            className="mt-8 flex flex-wrap gap-3">
            
            <a
              href="#start"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 text-cream font-semibold shadow-elevated hover:shadow-deep transition-all hover:-translate-y-0.5">
              
              <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gold-500/40 pointer-events-none" />
              Start Free
              <ArrowRightIcon className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-navy-800 font-semibold border border-border hover:border-navy-300 hover:bg-cream-50 transition-all shadow-soft">
              
              <PlayIcon className="w-4 h-4 text-gold-600" />
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={4}
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
            
            <div className="flex items-center -space-x-2">
              {[
              'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=faces',
              'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=80&h=80&fit=crop&crop=faces'].
              map((src, i) =>
              <img
                key={i}
                src={src}
                alt=""
                className="w-9 h-9 rounded-full border-2 border-cream object-cover shadow-soft" />

              )}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({
                  length: 5
                }).map((_, i) =>
                <StarIcon key={i} className="w-4 h-4 fill-current" />
                )}
                <span className="ml-1 text-sm font-semibold text-navy-800">
                  4.9/5
                </span>
              </div>
              <p className="text-xs text-navy-500 mt-0.5">
                Trusted by 12,000+ teams worldwide
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right — Dashboard mockup */}
        <div className="lg:col-span-6 relative">
          <HeroMockup />
        </div>
      </div>
    </section>);

}
function HeroMockup() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 36,
        scale: 0.98
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }}
      transition={{
        duration: 0.9,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="relative">
      
      {/* Glow */}
      <div
        className="absolute -inset-10 rounded-[3rem] pointer-events-none"
        style={{
          background:
          'radial-gradient(closest-side, rgba(201,162,75,0.22), transparent 70%)'
        }}
        aria-hidden />
      

      {/* Main panel */}
      <div className="relative bg-white rounded-3xl border border-border shadow-deep overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-cream-50">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="text-xs font-medium text-navy-500 flex items-center gap-1.5">
            <CircleDotIcon className="w-3 h-3 text-gold-500" />
            worknest.app / acme-team / sprint-23
          </div>
          <div className="w-12" />
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 min-h-[420px]">
          {/* Sidebar */}
          <aside className="col-span-3 border-r border-border bg-cream-50/60 p-3 hidden md:block">
            <div className="flex items-center gap-2 px-2 py-2">
              <div className="w-7 h-7 rounded-lg bg-navy-900 text-cream grid place-items-center font-bold text-xs">
                A
              </div>
              <div>
                <div className="text-xs font-semibold text-navy-900">
                  Acme Studio
                </div>
                <div className="text-[10px] text-navy-500">Pro workspace</div>
              </div>
            </div>
            <div className="mt-3 space-y-0.5">
              {[
              {
                name: 'Overview',
                active: true
              },
              {
                name: 'Projects'
              },
              {
                name: 'Roadmap'
              },
              {
                name: 'Inbox'
              },
              {
                name: 'Reports'
              }].
              map((item) =>
              <div
                key={item.name}
                className={[
                'flex items-center gap-2 px-2 py-1.5 rounded-md text-xs',
                item.active ?
                'bg-white border border-border shadow-soft text-navy-900 font-semibold' :
                'text-navy-500 hover:text-navy-800'].
                join(' ')}>
                
                  <span
                  className={[
                  'w-1.5 h-1.5 rounded-full',
                  item.active ? 'bg-gold-500' : 'bg-navy-200'].
                  join(' ')} />
                
                  {item.name}
                </div>
              )}
            </div>
            <div className="mt-4 px-2 text-[10px] uppercase tracking-wider text-navy-400 font-semibold">
              Teams
            </div>
            <div className="mt-1 space-y-0.5">
              {['Design', 'Engineering', 'Marketing'].map((t) =>
              <div
                key={t}
                className="flex items-center gap-2 px-2 py-1.5 text-xs text-navy-500">
                
                  <span className="w-4 h-4 rounded bg-navy-100 grid place-items-center text-[9px] font-bold text-navy-700">
                    {t[0]}
                  </span>
                  {t}
                </div>
              )}
            </div>
          </aside>

          {/* Main */}
          <div className="col-span-12 md:col-span-9 p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[11px] text-navy-500 font-medium">
                  Sprint 23 · Overview
                </div>
                <div className="text-lg font-display font-bold text-navy-900">
                  Good morning, Sarah 👋
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center -space-x-1.5">
                  {[1, 2, 3].map((i) =>
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white grid place-items-center text-[10px] font-bold text-cream"
                    style={{
                      background: ['#1B2A4E', '#C9A24B', '#5B6680'][i - 1]
                    }}>
                    
                      {['M', 'J', 'L'][i - 1]}
                    </div>
                  )}
                </div>
                <button className="text-xs font-semibold px-3 py-1.5 rounded-md bg-navy-900 text-cream">
                  Share
                </button>
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[
              {
                label: 'Active tasks',
                value: '128',
                delta: '+12%',
                up: true
              },
              {
                label: 'On-time rate',
                value: '94%',
                delta: '+3.2%',
                up: true
              },
              {
                label: 'Cycle time',
                value: '2.4d',
                delta: '-0.6d',
                up: true
              }].
              map((k) =>
              <div
                key={k.label}
                className="rounded-xl border border-border bg-cream-50/60 p-3">
                
                  <div className="text-[10px] uppercase tracking-wider text-navy-500 font-semibold">
                    {k.label}
                  </div>
                  <div className="mt-1 flex items-end justify-between">
                    <div className="text-xl font-bold text-navy-900">
                      {k.value}
                    </div>
                    <div className="text-[10px] font-semibold text-emerald-600 flex items-center gap-0.5">
                      <TrendingUpIcon className="w-3 h-3" />
                      {k.delta}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chart */}
            <div className="mt-3 rounded-xl border border-border bg-white p-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-navy-900">
                  Weekly throughput
                </div>
                <div className="flex items-center gap-1 text-[10px] text-navy-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-navy-700" />{' '}
                  Planned
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 ml-2" />{' '}
                  Shipped
                </div>
              </div>
              <svg viewBox="0 0 320 90" className="w-full h-24 mt-2">
                <defs>
                  <linearGradient id="navyArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#1B2A4E" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#1B2A4E" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="goldArea" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C9A24B" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,70 C30,60 50,40 80,42 C110,44 130,20 160,30 C190,40 220,18 250,22 C280,26 300,40 320,32 L320,90 L0,90 Z"
                  fill="url(#navyArea)" />
                
                <path
                  d="M0,70 C30,60 50,40 80,42 C110,44 130,20 160,30 C190,40 220,18 250,22 C280,26 300,40 320,32"
                  fill="none"
                  stroke="#1B2A4E"
                  strokeWidth="2" />
                
                <path
                  d="M0,80 C30,72 50,58 80,55 C110,52 130,42 160,46 C190,50 220,32 250,38 C280,44 300,52 320,48 L320,90 L0,90 Z"
                  fill="url(#goldArea)" />
                
                <path
                  d="M0,80 C30,72 50,58 80,55 C110,52 130,42 160,46 C190,50 220,32 250,38 C280,44 300,52 320,48"
                  fill="none"
                  stroke="#C9A24B"
                  strokeWidth="2" />
                
              </svg>
            </div>

            {/* Mini Kanban */}
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
              {
                title: 'To do',
                count: 4,
                accent: 'bg-navy-200'
              },
              {
                title: 'In progress',
                count: 3,
                accent: 'bg-gold-400'
              },
              {
                title: 'Done',
                count: 6,
                accent: 'bg-emerald-400'
              }].
              map((col, idx) =>
              <div
                key={col.title}
                className="rounded-xl bg-cream-50/60 border border-border p-2">
                
                  <div className="flex items-center justify-between px-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-navy-800">
                      <span
                      className={`w-1.5 h-1.5 rounded-full ${col.accent}`} />
                    
                      {col.title}
                    </div>
                    <span className="text-[10px] text-navy-500">
                      {col.count}
                    </span>
                  </div>
                  <div className="mt-1.5 space-y-1.5">
                    {Array.from({
                    length: idx === 1 ? 2 : 1
                  }).map((_, i) =>
                  <div
                    key={i}
                    className="bg-white rounded-lg p-2 border border-border shadow-soft">
                    
                        <div className="h-1.5 w-12 rounded bg-navy-100 mb-1.5" />
                        <div className="h-1 w-20 rounded bg-navy-100/70" />
                        <div className="mt-1.5 flex items-center justify-between">
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-gold-100 text-gold-700 font-semibold">
                            Design
                          </span>
                          <div className="w-4 h-4 rounded-full bg-navy-700" />
                        </div>
                      </div>
                  )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <motion.div
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="hidden md:flex absolute -left-8 top-24 bg-white rounded-2xl shadow-elevated border border-border p-3 w-[230px]">
        
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-gold-gradient grid place-items-center shrink-0">
            <CheckCircle2Icon className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-semibold text-navy-900">
              Sprint goal hit
            </div>
            <div className="text-[11px] text-navy-500 mt-0.5">
              Team shipped 18 tasks this week
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-navy-50 overflow-hidden">
              <div className="h-full w-[88%] bg-gold-gradient rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.4
        }}
        className="hidden md:flex absolute -right-6 bottom-12 bg-white rounded-2xl shadow-elevated border border-border p-3 w-[240px]">
        
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-navy-900 grid place-items-center shrink-0">
            <UsersIcon className="w-5 h-5 text-gold-400" />
          </div>
          <div>
            <div className="text-xs font-semibold text-navy-900">
              3 teammates online
            </div>
            <div className="text-[11px] text-navy-500 mt-0.5">
              Maya, Jonas & Lin are editing
            </div>
            <div className="flex -space-x-1.5 mt-1.5">
              {['M', 'J', 'L'].map((n, i) =>
              <span
                key={n}
                className="w-5 h-5 rounded-full border-2 border-white grid place-items-center text-[9px] font-bold text-cream"
                style={{
                  background: ['#1B2A4E', '#C9A24B', '#5B6680'][i]
                }}>
                
                  {n}
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -8, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="hidden lg:flex absolute -right-10 -top-6 bg-white rounded-2xl shadow-elevated border border-border p-3 w-[210px]">
        
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-cream-200 border border-border grid place-items-center shrink-0">
            <CalendarIcon className="w-5 h-5 text-navy-800" />
          </div>
          <div>
            <div className="text-xs font-semibold text-navy-900">
              Standup at 10:00
            </div>
            <div className="text-[11px] text-navy-500 mt-0.5">
              In 12 minutes · Zoom
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>);

}