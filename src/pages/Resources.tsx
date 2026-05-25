import React from 'react';
import { motion } from 'framer-motion';
import {
  BookOpenIcon,
  PlayCircleIcon,
  FileTextIcon,
  MicIcon,
  LifeBuoyIcon,
  CodeIcon,
  ArrowRightIcon,
  ClockIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { CTASection } from '../components/CTASection';
import { SectionHeader } from '../components/Features';
const resourceTypes = [
{
  icon: BookOpenIcon,
  title: 'Guides',
  desc: 'Deep-dives on building scalable workspaces, automations, and team rituals.',
  count: '48 articles'
},
{
  icon: PlayCircleIcon,
  title: 'Video Tutorials',
  desc: 'Watch short, focused walkthroughs from our product team and power users.',
  count: '120+ videos'
},
{
  icon: FileTextIcon,
  title: 'Templates',
  desc: 'Battle-tested workspaces you can fork in seconds — sprints, CRM, OKRs, and more.',
  count: '60 templates'
},
{
  icon: MicIcon,
  title: 'Podcast',
  desc: 'Conversations with operators about the craft of building software at scale.',
  count: 'Weekly episodes'
},
{
  icon: LifeBuoyIcon,
  title: 'Help Center',
  desc: 'Every answer, indexed and searchable. Updated by our team daily.',
  count: '900+ articles'
},
{
  icon: CodeIcon,
  title: 'API & Docs',
  desc: 'Build on WorkNest. Reference, SDKs, webhooks, and integration recipes.',
  count: 'v2.4 reference'
}];

const featuredArticles = [
{
  tag: 'Guide',
  title: 'How to design a workspace your team will actually use',
  excerpt:
  'A four-step framework for designing workspaces that respect attention and reduce tool sprawl.',
  author: 'Maya Chen',
  role: 'Head of Product',
  read: '8 min read',
  color: 'from-navy-700 to-navy-900'
},
{
  tag: 'Case study',
  title: 'How ScaleFlow cut triage time by 62% with WorkNest AI',
  excerpt:
  'The story of a 240-person ops team replacing five tools — and what they learned along the way.',
  author: 'Jonas Vargas',
  role: 'VP Engineering',
  read: '12 min read',
  color: 'from-gold-500 to-gold-700'
},
{
  tag: 'Tutorial',
  title: 'Building your first end-to-end automation',
  excerpt:
  'From form intake to assignment routing to status reporting — a real workflow, start to finish.',
  author: 'Lin Okafor',
  role: 'DevRel',
  read: '6 min read',
  color: 'from-navy-800 to-navy-950'
}];

const posts = [
{
  tag: 'Product',
  title: 'Introducing WorkNest AI 2.0',
  date: 'May 18, 2026',
  read: '4 min'
},
{
  tag: 'Engineering',
  title: 'How we built realtime presence at scale',
  date: 'May 11, 2026',
  read: '11 min'
},
{
  tag: 'Design',
  title: 'The art of dense interfaces that still breathe',
  date: 'May 04, 2026',
  read: '7 min'
},
{
  tag: 'Customers',
  title: 'NovaTech ships 3x faster with WorkNest',
  date: 'Apr 28, 2026',
  read: '5 min'
},
{
  tag: 'Security',
  title: 'A practical guide to SSO + SCIM rollouts',
  date: 'Apr 21, 2026',
  read: '9 min'
},
{
  tag: 'Ops',
  title: 'Async-first rituals that actually work',
  date: 'Apr 14, 2026',
  read: '6 min'
}];

export function Resources() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title={
        <>
            Learn, build, and
            <br />
            <span className="gold-text-gradient">level up your team.</span>
          </>
        }
        subtitle="Guides, templates, and stories from the teams shipping the best work of their careers — all in one place." />
      

      {/* Resource types */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceTypes.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.a
                  key={r.title}
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
                  
                  <div className="relative flex items-start justify-between">
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-navy-900 grid place-items-center text-gold-400 shadow-soft">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-navy-900 tracking-tight">
                        {r.title}
                      </h3>
                      <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                        {r.desc}
                      </p>
                      <div className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-gold-700">
                        {r.count}
                      </div>
                    </div>
                    <ArrowRightIcon className="w-4 h-4 text-navy-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>);

            })}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="relative py-20 md:py-24 bg-cream-50/60 border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="Featured"
            title={
            <>
                Hand-picked,{' '}
                <span className="gold-text-gradient">essential reading.</span>
              </>
            }
            subtitle="Start here. These are the most-loved pieces in our library." />
          

          <div className="mt-14 grid lg:grid-cols-3 gap-5">
            {featuredArticles.map((a, i) =>
            <motion.article
              key={a.title}
              initial={{
                opacity: 0,
                y: 22
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
                duration: 0.55,
                delay: i * 0.07
              }}
              className="group rounded-3xl bg-white border border-border shadow-soft hover:shadow-elevated transition-all overflow-hidden">
              
                <div
                className={`relative h-44 bg-gradient-to-br ${a.color} overflow-hidden`}>
                
                  <div className="absolute inset-0 bg-grid-pattern-dark opacity-50" />
                  <div
                  className="absolute -bottom-20 -right-10 w-64 h-64 rounded-full"
                  style={{
                    background:
                    'radial-gradient(closest-side, rgba(255,255,255,0.18), transparent 70%)'
                  }} />
                
                  <span className="absolute top-4 left-4 text-[11px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-md text-cream">
                    {a.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-navy-900 tracking-tight leading-snug group-hover:text-gold-700 transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                    {a.excerpt}
                  </p>
                  <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs text-navy-500">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-navy-900 text-cream text-[10px] font-bold grid place-items-center">
                        {a.author[0]}
                      </span>
                      <span className="font-medium text-navy-700">
                        {a.author}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1">
                      <ClockIcon className="w-3 h-3" />
                      {a.read}
                    </span>
                  </div>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </section>

      {/* Latest posts */}
      <section className="relative py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-900 tracking-tightest">
              Latest from the blog
            </h2>
            <a
              href="#"
              className="text-sm font-semibold text-navy-700 hover:text-gold-700 inline-flex items-center gap-1 group">
              
              View all{' '}
              <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <div className="rounded-3xl border border-border bg-white shadow-soft overflow-hidden">
            {posts.map((p, i) =>
            <motion.a
              key={p.title}
              href="#"
              initial={{
                opacity: 0,
                x: -8
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true,
                margin: '-40px'
              }}
              transition={{
                duration: 0.35,
                delay: i * 0.04
              }}
              className="group flex items-center gap-4 px-5 sm:px-6 py-4 border-b border-border/70 last:border-0 hover:bg-cream-50/60 transition-colors">
              
                <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md bg-gold-100 text-gold-700 shrink-0 w-24 text-center">
                  {p.tag}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-navy-900 group-hover:text-gold-700 transition-colors truncate">
                    {p.title}
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-xs text-navy-500 shrink-0">
                  <span>{p.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <ClockIcon className="w-3 h-3" />
                    {p.read}
                  </span>
                </div>
                <ArrowRightIcon className="w-4 h-4 text-navy-400 group-hover:text-gold-600 group-hover:translate-x-0.5 transition-all shrink-0" />
              </motion.a>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </main>);

}