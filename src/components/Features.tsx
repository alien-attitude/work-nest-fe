import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboardIcon,
  SparklesIcon,
  UsersRoundIcon,
  DatabaseIcon,
  WorkflowIcon,
  BarChart3Icon,
  ArrowUpRightIcon } from
'lucide-react';
export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Features"
          title={
          <>
              A complete workspace,
              <br className="hidden sm:block" />
              <span className="gold-text-gradient">crafted for clarity.</span>
            </>
          }
          subtitle="Everything your team needs to plan, build, and ship — woven together in one beautifully orchestrated platform." />
        

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-12 gap-4 md:gap-5">
          {/* Smart Workspaces — large */}
          <FeatureCard
            className="col-span-12 lg:col-span-7 min-h-[340px]"
            icon={<LayoutDashboardIcon className="w-5 h-5" />}
            title="Smart Workspaces"
            description="Customizable workspaces that adapt to how each team actually works — from spreadsheets to docs to roadmaps.">
            
            <MiniWorkspace />
          </FeatureCard>

          {/* AI Automation */}
          <FeatureCard
            className="col-span-12 lg:col-span-5 min-h-[340px]"
            icon={<SparklesIcon className="w-5 h-5" />}
            title="AI Automation"
            description="Let WorkNest AI handle the routine — auto-categorize, summarize, and route work in real time."
            accent>
            
            <MiniAI />
          </FeatureCard>

          {/* Team Collaboration */}
          <FeatureCard
            className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]"
            icon={<UsersRoundIcon className="w-5 h-5" />}
            title="Team Collaboration"
            description="Comment, mention, and co-edit in real time. Stay in sync without the chaos.">
            
            <MiniCollab />
          </FeatureCard>

          {/* Data Management */}
          <FeatureCard
            className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]"
            icon={<DatabaseIcon className="w-5 h-5" />}
            title="Data Management"
            description="Rich tables, relations, and views — your operational source of truth.">
            
            <MiniTable />
          </FeatureCard>

          {/* Workflow Tracking */}
          <FeatureCard
            className="col-span-12 md:col-span-6 lg:col-span-4 min-h-[300px]"
            icon={<WorkflowIcon className="w-5 h-5" />}
            title="Workflow Tracking"
            description="Trigger, route, and audit every step from intake to handoff.">
            
            <MiniWorkflow />
          </FeatureCard>

          {/* Real-Time Analytics — wide */}
          <FeatureCard
            className="col-span-12 min-h-[260px]"
            icon={<BarChart3Icon className="w-5 h-5" />}
            title="Real-Time Analytics"
            description="See performance, throughput, and bottlenecks at a glance. Dashboards that update the moment work moves.">
            
            <MiniAnalytics />
          </FeatureCard>
        </div>
      </div>
    </section>);

}
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center'





}: {eyebrow?: string;title: React.ReactNode;subtitle?: string;align?: 'center' | 'left';}) {
  return (
    <div
      className={
      align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'
      }>
      
      {eyebrow &&
      <motion.div
        initial={{
          opacity: 0,
          y: 8
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.4
        }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border shadow-soft`}>
        
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-navy-700">
            {eyebrow}
          </span>
        </motion.div>
      }
      <motion.h2
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
          delay: 0.05
        }}
        className="font-display mt-4 text-4xl sm:text-5xl font-bold text-navy-900 tracking-tightest leading-[1.05]">
        
        {title}
      </motion.h2>
      {subtitle &&
      <motion.p
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
          delay: 0.1
        }}
        className="mt-5 text-lg text-navy-500 leading-relaxed">
        
          {subtitle}
        </motion.p>
      }
    </div>);

}
function FeatureCard({
  icon,
  title,
  description,
  children,
  className,
  accent







}: {icon: React.ReactNode;title: string;description: string;children?: React.ReactNode;className?: string;accent?: boolean;}) {
  return (
    <motion.article
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
        margin: '-60px'
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={[
      'group relative rounded-3xl border border-border bg-white p-6 md:p-7 overflow-hidden',
      'shadow-soft hover:shadow-elevated transition-all',
      accent ? 'bg-navy-900 text-cream border-navy-800' : '',
      className || ''].
      join(' ')}>
      
      {accent &&
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
          'radial-gradient(600px 200px at 100% 0%, rgba(201,162,75,0.25), transparent 60%)'
        }} />

      }
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div
            className={[
            'inline-flex items-center justify-center w-10 h-10 rounded-xl',
            accent ?
            'bg-gold-gradient text-white shadow-gold-glow' :
            'bg-navy-50 text-navy-800 border border-border'].
            join(' ')}>
            
            {icon}
          </div>
          <h3
            className={[
            'mt-4 font-display text-xl font-bold tracking-tight',
            accent ? 'text-cream' : 'text-navy-900'].
            join(' ')}>
            
            {title}
          </h3>
          <p
            className={[
            'mt-2 text-sm leading-relaxed max-w-md',
            accent ? 'text-cream/70' : 'text-navy-500'].
            join(' ')}>
            
            {description}
          </p>
        </div>
        <ArrowUpRightIcon
          className={[
          'w-5 h-5 shrink-0 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all',
          accent ? 'text-gold-400' : 'text-navy-500'].
          join(' ')} />
        
      </div>
      {children && <div className="relative mt-6">{children}</div>}
    </motion.article>);

}
function MiniWorkspace() {
  return (
    <div className="relative rounded-2xl bg-cream-50 border border-border p-3 overflow-hidden">
      <div className="flex items-center gap-1.5 mb-2.5">
        {['Grid', 'Kanban', 'Calendar', 'Timeline'].map((v, i) =>
        <span
          key={v}
          className={[
          'text-[10px] px-2 py-1 rounded-md font-medium',
          i === 0 ?
          'bg-white border border-border text-navy-900 shadow-soft' :
          'text-navy-500 hover:text-navy-800'].
          join(' ')}>
          
            {v}
          </span>
        )}
      </div>
      <div className="grid grid-cols-5 gap-1">
        {Array.from({
          length: 25
        }).map((_, i) => {
          const colors = [
          'bg-navy-100',
          'bg-gold-100',
          'bg-emerald-100',
          'bg-cream-200'];

          const c = colors[i % colors.length];
          return <div key={i} className={`h-7 rounded-md ${c}`} />;
        })}
      </div>
    </div>);

}
function MiniAI() {
  return (
    <div className="relative rounded-2xl bg-navy-800/40 border border-navy-700 p-4 overflow-hidden">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-lg bg-gold-gradient grid place-items-center shadow-gold-glow">
          <SparklesIcon className="w-3.5 h-3.5 text-white" />
        </div>
        <div className="text-xs font-semibold text-cream">WorkNest AI</div>
      </div>
      <div className="space-y-2">
        <div className="rounded-lg bg-navy-900/70 border border-navy-700 p-2.5">
          <div className="text-[10px] text-gold-400 font-semibold mb-1">
            Suggested
          </div>
          <div className="text-xs text-cream">
            Route 14 new tickets to "Design" — confidence 96%
          </div>
        </div>
        <div className="rounded-lg bg-navy-900/70 border border-navy-700 p-2.5">
          <div className="text-[10px] text-gold-400 font-semibold mb-1">
            Summary
          </div>
          <div className="text-xs text-cream/80">
            Sprint 23 is on track. 3 risks identified across Engineering.
          </div>
        </div>
      </div>
    </div>);

}
function MiniCollab() {
  return (
    <div className="rounded-2xl bg-cream-50 border border-border p-3">
      <div className="flex items-center gap-2">
        <div className="flex -space-x-1.5">
          {['M', 'J', 'L', 'A'].map((n, i) =>
          <div
            key={n}
            className="w-6 h-6 rounded-full border-2 border-white grid place-items-center text-[9px] font-bold text-cream"
            style={{
              background: ['#1B2A4E', '#C9A24B', '#5B6680', '#0F1B36'][i]
            }}>
            
              {n}
            </div>
          )}
        </div>
        <span className="text-[10px] text-navy-500">4 editing now</span>
      </div>
      <div className="mt-2.5 space-y-1.5">
        {[
        {
          who: 'Maya',
          what: 'commented on Hero copy',
          t: 'now'
        },
        {
          who: 'Jonas',
          what: 'resolved 2 threads',
          t: '2m'
        },
        {
          who: 'Lin',
          what: 'updated milestone',
          t: '8m'
        }].
        map((c) =>
        <div
          key={c.who}
          className="flex items-start gap-2 bg-white rounded-lg border border-border p-2">
          
            <div className="w-5 h-5 rounded-full bg-navy-800 text-cream text-[9px] font-bold grid place-items-center">
              {c.who[0]}
            </div>
            <div className="flex-1 text-[11px] text-navy-700">
              <span className="font-semibold">{c.who}</span>{' '}
              <span className="text-navy-500">{c.what}</span>
            </div>
            <span className="text-[9px] text-navy-400">{c.t}</span>
          </div>
        )}
      </div>
    </div>);

}
function MiniTable() {
  return (
    <div className="rounded-2xl bg-cream-50 border border-border p-3">
      <div className="grid grid-cols-4 gap-1 text-[10px] uppercase font-semibold text-navy-500 tracking-wider px-1 pb-2 border-b border-border">
        <div>Task</div>
        <div>Owner</div>
        <div>Stage</div>
        <div className="text-right">Due</div>
      </div>
      {[
      {
        t: 'Refresh CRM views',
        o: 'Maya',
        s: 'Active',
        d: 'Today'
      },
      {
        t: 'Beta onboarding',
        o: 'Jonas',
        s: 'Review',
        d: 'Fri'
      },
      {
        t: 'Pricing A/B',
        o: 'Lin',
        s: 'Plan',
        d: 'Aug 28'
      }].
      map((r, i) =>
      <div
        key={i}
        className="grid grid-cols-4 gap-1 text-[11px] py-2 border-b border-border/70 last:border-0 items-center">
        
          <div className="text-navy-900 font-medium truncate">{r.t}</div>
          <div className="text-navy-600">{r.o}</div>
          <div>
            <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-gold-100 text-gold-700">
              {r.s}
            </span>
          </div>
          <div className="text-right text-navy-500">{r.d}</div>
        </div>
      )}
    </div>);

}
function MiniWorkflow() {
  return (
    <div className="rounded-2xl bg-cream-50 border border-border p-3">
      <div className="flex items-center justify-between gap-1">
        {['Intake', 'Triage', 'Build', 'Ship'].map((s, i) =>
        <Fragment key={s}>
            <div className="flex flex-col items-center">
              <div
              className={[
              'w-7 h-7 rounded-full grid place-items-center text-[10px] font-bold',
              i < 3 ?
              'bg-navy-900 text-cream' :
              'bg-white border border-border text-navy-500'].
              join(' ')}>
              
                {i + 1}
              </div>
              <div className="text-[10px] mt-1 text-navy-700 font-medium">
                {s}
              </div>
            </div>
            {i < 3 &&
          <div className="flex-1 h-0.5 bg-navy-100 relative">
                <div
              className="absolute inset-y-0 left-0 bg-gold-gradient"
              style={{
                width: i < 2 ? '100%' : '60%'
              }} />
            
              </div>
          }
          </Fragment>
        )}
      </div>
      <div className="mt-3 rounded-lg bg-white border border-border p-2 text-[11px] text-navy-700">
        <span className="font-semibold">Trigger:</span> New form → assign to{' '}
        <span className="px-1 py-0.5 rounded bg-gold-100 text-gold-700 font-semibold">
          Design team
        </span>
      </div>
    </div>);

}
function MiniAnalytics() {
  return (
    <div className="grid md:grid-cols-3 gap-3">
      <div className="md:col-span-2 rounded-2xl bg-cream-50 border border-border p-4">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-navy-900">
            Throughput · Last 30 days
          </div>
          <div className="text-[10px] text-navy-500">Updated 12s ago</div>
        </div>
        <svg viewBox="0 0 400 100" className="w-full h-24 mt-2">
          {Array.from({
            length: 30
          }).map((_, i) => {
            const h = 20 + Math.sin(i * 0.5) * 18 + Math.random() * 20;
            return (
              <rect
                key={i}
                x={i * 13}
                y={100 - h}
                width="9"
                height={h}
                rx="2"
                fill={i % 5 === 0 ? '#C9A24B' : '#1B2A4E'}
                opacity={i % 5 === 0 ? 1 : 0.85} />);


          })}
        </svg>
      </div>
      <div className="rounded-2xl bg-navy-900 text-cream p-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
            'radial-gradient(300px 120px at 100% 0%, rgba(201,162,75,0.3), transparent 60%)'
          }} />
        
        <div className="relative">
          <div className="text-[10px] uppercase tracking-wider text-gold-400 font-semibold">
            Productivity Index
          </div>
          <div className="mt-2 text-4xl font-display font-bold">+38%</div>
          <div className="mt-1 text-xs text-cream/70">vs. previous quarter</div>
          <div className="mt-4 h-1.5 rounded-full bg-navy-700 overflow-hidden">
            <div className="h-full w-[82%] bg-gold-gradient rounded-full" />
          </div>
        </div>
      </div>
    </div>);

}