import React, { useState, Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  KanbanSquareIcon,
  TableIcon,
  CalendarIcon,
  GanttChartIcon,
  CircleDotIcon } from
'lucide-react';
import { SectionHeader } from './Features';
type TabId = 'kanban' | 'table' | 'calendar' | 'timeline';
const tabs: {
  id: TabId;
  label: string;
  icon: ComponentType<{
    className?: string;
  }>;
}[] = [
{
  id: 'kanban',
  label: 'Kanban',
  icon: KanbanSquareIcon
},
{
  id: 'table',
  label: 'Table',
  icon: TableIcon
},
{
  id: 'calendar',
  label: 'Calendar',
  icon: CalendarIcon
},
{
  id: 'timeline',
  label: 'Timeline',
  icon: GanttChartIcon
}];

export function ProductShowcase() {
  const [active, setActive] = useState<TabId>('kanban');
  return (
    <section className="relative py-24 md:py-32 bg-cream-50/60 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Product"
          title={
          <>
              One platform.
              <br className="hidden sm:block" />
              <span className="navy-text-gradient">Every way you work.</span>
            </>
          }
          subtitle="Switch views without switching tools. Kanban, table, calendar, or timeline — your data, perfectly arranged." />
        

        {/* Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex bg-white rounded-2xl border border-border p-1.5 shadow-soft relative">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = active === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className="relative px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
                  
                  {isActive &&
                  <motion.span
                    layoutId="showcase-tab"
                    className="absolute inset-0 bg-navy-900 rounded-xl shadow-soft"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 32
                    }} />

                  }
                  <span
                    className={`relative inline-flex items-center gap-2 ${isActive ? 'text-cream' : 'text-navy-700'}`}>
                    
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{t.label}</span>
                  </span>
                </button>);

            })}
          </div>
        </div>

        {/* Panel */}
        <div className="mt-12 relative">
          <div
            className="absolute -inset-6 sm:-inset-10 rounded-[3rem] pointer-events-none"
            style={{
              background:
              'radial-gradient(closest-side, rgba(201,162,75,0.15), transparent 70%)'
            }}
            aria-hidden />
          
          <div className="relative bg-white rounded-3xl border border-border shadow-deep overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-cream-50/60">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="text-xs font-medium text-navy-500 flex items-center gap-1.5">
                <CircleDotIcon className="w-3 h-3 text-gold-500" />
                worknest.app / projects / launch
              </div>
              <div className="w-12" />
            </div>

            <div className="p-5 sm:p-8 min-h-[460px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                    y: 12
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  exit={{
                    opacity: 0,
                    y: -8
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1]
                  }}>
                  
                  {active === 'kanban' && <KanbanView />}
                  {active === 'table' && <TableView />}
                  {active === 'calendar' && <CalendarView />}
                  {active === 'timeline' && <TimelineView />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>);

}
function KanbanView() {
  const cols = [
  {
    title: 'Backlog',
    accent: 'bg-navy-200',
    cards: [
    {
      t: 'Design system audit',
      tag: 'Design',
      who: 'M',
      priority: 'Low'
    },
    {
      t: 'Pricing page revamp',
      tag: 'Marketing',
      who: 'J',
      priority: 'Med'
    }]

  },
  {
    title: 'In progress',
    accent: 'bg-gold-400',
    cards: [
    {
      t: 'Onboarding redesign',
      tag: 'Product',
      who: 'L',
      priority: 'High'
    },
    {
      t: 'API integrations v2',
      tag: 'Eng',
      who: 'A',
      priority: 'High'
    },
    {
      t: 'Mobile nav overhaul',
      tag: 'Design',
      who: 'M',
      priority: 'Med'
    }]

  },
  {
    title: 'Review',
    accent: 'bg-blue-400',
    cards: [
    {
      t: 'Q3 OKR draft',
      tag: 'Ops',
      who: 'J',
      priority: 'Med'
    }]

  },
  {
    title: 'Shipped',
    accent: 'bg-emerald-400',
    cards: [
    {
      t: 'Dark mode beta',
      tag: 'Design',
      who: 'L',
      priority: 'Low'
    },
    {
      t: 'Billing fixes',
      tag: 'Eng',
      who: 'A',
      priority: 'High'
    }]

  }];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      {cols.map((c) =>
      <div
        key={c.title}
        className="bg-cream-50/60 rounded-2xl border border-border p-3">
        
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-sm font-semibold text-navy-900">
              <span className={`w-2 h-2 rounded-full ${c.accent}`} />
              {c.title}
            </div>
            <span className="text-[11px] text-navy-500">{c.cards.length}</span>
          </div>
          <div className="mt-2 space-y-2">
            {c.cards.map((card, i) =>
          <motion.div
            key={card.t}
            initial={{
              opacity: 0,
              y: 8
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.4,
              delay: i * 0.05
            }}
            className="bg-white rounded-xl border border-border shadow-soft p-3 hover:shadow-elevated transition-all">
            
                <div className="text-sm font-semibold text-navy-900 leading-snug">
                  {card.t}
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-navy-50 text-navy-700">
                    {card.tag}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span
                  className={[
                  'text-[10px] font-semibold px-1.5 py-0.5 rounded',
                  card.priority === 'High' ?
                  'bg-rose-50 text-rose-700' :
                  card.priority === 'Med' ?
                  'bg-gold-100 text-gold-700' :
                  'bg-emerald-50 text-emerald-700'].
                  join(' ')}>
                  
                      {card.priority}
                    </span>
                    <span className="w-5 h-5 rounded-full bg-navy-800 text-cream text-[10px] font-bold grid place-items-center">
                      {card.who}
                    </span>
                  </div>
                </div>
              </motion.div>
          )}
          </div>
        </div>
      )}
    </div>);

}
function TableView() {
  const rows = [
  {
    name: 'Launch landing page',
    owner: 'Maya',
    status: 'In progress',
    due: 'Aug 22',
    priority: 'High'
  },
  {
    name: 'CRM data migration',
    owner: 'Jonas',
    status: 'Review',
    due: 'Aug 24',
    priority: 'Med'
  },
  {
    name: 'Email automation',
    owner: 'Lin',
    status: 'Plan',
    due: 'Aug 28',
    priority: 'Med'
  },
  {
    name: 'Customer interviews',
    owner: 'Ari',
    status: 'Done',
    due: 'Aug 16',
    priority: 'Low'
  },
  {
    name: 'Onboarding overhaul',
    owner: 'Maya',
    status: 'In progress',
    due: 'Sep 02',
    priority: 'High'
  },
  {
    name: 'Pricing experiments',
    owner: 'Lin',
    status: 'Plan',
    due: 'Sep 06',
    priority: 'Med'
  }];

  return (
    <div className="rounded-2xl border border-border overflow-hidden">
      <div className="grid grid-cols-12 px-4 py-2.5 bg-cream-50 text-[11px] uppercase tracking-wider font-semibold text-navy-500 border-b border-border">
        <div className="col-span-5">Task</div>
        <div className="col-span-2">Owner</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-2">Due</div>
        <div className="col-span-1 text-right">Prio</div>
      </div>
      {rows.map((r, i) =>
      <motion.div
        key={r.name}
        initial={{
          opacity: 0,
          x: -8
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 0.3,
          delay: i * 0.04
        }}
        className="grid grid-cols-12 items-center px-4 py-3 border-b border-border/70 last:border-0 text-sm hover:bg-cream-50/60 transition-colors">
        
          <div className="col-span-5 font-medium text-navy-900 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            {r.name}
          </div>
          <div className="col-span-2 text-navy-600">{r.owner}</div>
          <div className="col-span-2">
            <span
            className={[
            'text-[11px] px-2 py-0.5 rounded-full font-semibold',
            r.status === 'Done' ?
            'bg-emerald-50 text-emerald-700' :
            r.status === 'Review' ?
            'bg-blue-50 text-blue-700' :
            r.status === 'Plan' ?
            'bg-navy-50 text-navy-700' :
            'bg-gold-100 text-gold-700'].
            join(' ')}>
            
              {r.status}
            </span>
          </div>
          <div className="col-span-2 text-navy-500">{r.due}</div>
          <div className="col-span-1 text-right">
            <span
            className={[
            'text-[11px] font-semibold px-1.5 py-0.5 rounded',
            r.priority === 'High' ?
            'bg-rose-50 text-rose-700' :
            r.priority === 'Med' ?
            'bg-gold-100 text-gold-700' :
            'bg-emerald-50 text-emerald-700'].
            join(' ')}>
            
              {r.priority}
            </span>
          </div>
        </motion.div>
      )}
    </div>);

}
function CalendarView() {
  const days = Array.from({
    length: 35
  });
  const events: Record<
    number,
    {
      label: string;
      color: string;
    }[]> =
  {
    3: [
    {
      label: 'Kickoff',
      color: 'bg-gold-gradient text-white'
    }],

    7: [
    {
      label: 'Standup',
      color: 'bg-navy-900 text-cream'
    }],

    10: [
    {
      label: 'Design review',
      color: 'bg-emerald-500 text-white'
    }],

    14: [
    {
      label: 'Launch · v2.0',
      color: 'bg-gold-gradient text-white'
    }],

    18: [
    {
      label: 'QA window',
      color: 'bg-navy-700 text-cream'
    }],

    22: [
    {
      label: 'Retro',
      color: 'bg-blue-500 text-white'
    }],

    25: [
    {
      label: 'Demo day',
      color: 'bg-gold-gradient text-white'
    }]

  };
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="font-display text-lg font-bold text-navy-900">
          August 2026
        </div>
        <div className="flex gap-2 text-xs text-navy-500">
          <button className="px-2 py-1 rounded-md border border-border bg-white">
            Today
          </button>
          <button className="px-2 py-1 rounded-md border border-border bg-white">
            ‹
          </button>
          <button className="px-2 py-1 rounded-md border border-border bg-white">
            ›
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-[11px] font-semibold text-navy-500 mb-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) =>
        <div key={d} className="px-2 py-1">
            {d}
          </div>
        )}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((_, i) =>
        <motion.div
          key={i}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.3,
            delay: i * 0.01
          }}
          className="min-h-[80px] rounded-lg border border-border bg-white p-2">
          
            <div className="text-[11px] font-semibold text-navy-500">
              {i + 1}
            </div>
            <div className="mt-1 space-y-1">
              {(events[i] || []).map((e, j) =>
            <div
              key={j}
              className={`text-[10px] px-1.5 py-0.5 rounded ${e.color} truncate font-semibold`}>
              
                  {e.label}
                </div>
            )}
            </div>
          </motion.div>
        )}
      </div>
    </div>);

}
function TimelineView() {
  const lanes = [
  {
    name: 'Discovery',
    color: 'bg-navy-700',
    start: 0,
    length: 18
  },
  {
    name: 'Design',
    color: 'bg-gold-gradient',
    start: 12,
    length: 28
  },
  {
    name: 'Build',
    color: 'bg-emerald-500',
    start: 30,
    length: 38
  },
  {
    name: 'Beta',
    color: 'bg-blue-500',
    start: 56,
    length: 18
  },
  {
    name: 'Launch',
    color: 'bg-rose-500',
    start: 70,
    length: 18
  }];

  const weeks = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'];
  return (
    <div>
      <div className="grid grid-cols-10 text-[11px] font-semibold text-navy-500 mb-2 px-[140px]">
        {weeks.map((w) =>
        <div key={w} className="text-center">
            {w}
          </div>
        )}
      </div>
      <div className="space-y-3">
        {lanes.map((lane, i) =>
        <div key={lane.name} className="flex items-center gap-3">
            <div className="w-[130px] text-sm font-semibold text-navy-800">
              {lane.name}
            </div>
            <div className="flex-1 relative h-9 bg-cream-50 rounded-lg border border-border overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-10">
                {Array.from({
                length: 10
              }).map((_, k) =>
              <div
                key={k}
                className="border-r border-border/60 last:border-0" />

              )}
              </div>
              <motion.div
              initial={{
                scaleX: 0,
                transformOrigin: '0% 50%'
              }}
              animate={{
                scaleX: 1
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`absolute top-1.5 bottom-1.5 rounded-md ${lane.color} shadow-soft flex items-center px-3`}
              style={{
                left: `${lane.start}%`,
                width: `${lane.length}%`
              }}>
              
                <span className="text-[11px] font-semibold text-white">
                  {lane.name}
                </span>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>);

}