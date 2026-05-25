import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, SparklesIcon } from 'lucide-react';
import { SectionHeader } from './Features';
type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  yearly: number;
  features: string[];
  cta: string;
  highlight?: boolean;
};
const plans: Plan[] = [
{
  name: 'Free',
  tagline: 'For individuals exploring WorkNest.',
  monthly: 0,
  yearly: 0,
  cta: 'Start Free',
  features: [
  'Up to 3 workspaces',
  'Unlimited tasks & docs',
  'Kanban, table & calendar views',
  'Community support']

},
{
  name: 'Pro',
  tagline: 'For growing teams that ship every week.',
  monthly: 12,
  yearly: 9,
  cta: 'Start 14-day trial',
  highlight: true,
  features: [
  'Unlimited workspaces',
  'AI automations & summaries',
  'Timeline & dashboard views',
  'Priority support · 24h',
  'Guest collaborators']

},
{
  name: 'Enterprise',
  tagline: 'For organizations that demand control.',
  monthly: 0,
  yearly: 0,
  cta: 'Talk to sales',
  features: [
  'Everything in Pro',
  'SSO, SCIM & audit logs',
  'Custom roles & permissions',
  'Dedicated CSM',
  'SLA-backed uptime · 99.99%']

}];

export function Pricing() {
  const [yearly, setYearly] = useState(true);
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 bg-cream-50/60 border-y border-border">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title={
          <>
              Simple pricing.
              <br className="hidden sm:block" />
              <span className="navy-text-gradient">Serious results.</span>
            </>
          }
          subtitle="Start free, scale when you're ready. No credit card required." />
        

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center bg-white border border-border rounded-full p-1 shadow-soft relative">
            <button
              onClick={() => setYearly(false)}
              className="relative px-5 py-2 text-sm font-semibold">
              
              {!yearly &&
              <motion.span
                layoutId="billing-pill"
                className="absolute inset-0 bg-navy-900 rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 32
                }} />

              }
              <span
                className={`relative ${!yearly ? 'text-cream' : 'text-navy-700'}`}>
                
                Monthly
              </span>
            </button>
            <button
              onClick={() => setYearly(true)}
              className="relative px-5 py-2 text-sm font-semibold">
              
              {yearly &&
              <motion.span
                layoutId="billing-pill"
                className="absolute inset-0 bg-navy-900 rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 32
                }} />

              }
              <span
                className={`relative inline-flex items-center gap-2 ${yearly ? 'text-cream' : 'text-navy-700'}`}>
                
                Yearly
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gold-gradient text-white font-bold">
                  -25%
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-12 grid lg:grid-cols-3 gap-5 items-stretch">
          {plans.map((p, i) =>
          <motion.div
            key={p.name}
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
              duration: 0.5,
              delay: i * 0.08
            }}
            className={[
            'relative rounded-3xl p-7 border flex flex-col',
            p.highlight ?
            'bg-navy-900 text-cream border-navy-800 shadow-deep lg:-translate-y-3' :
            'bg-white border-border shadow-soft'].
            join(' ')}>
            
              {p.highlight &&
            <>
                  <div
                className="absolute inset-0 rounded-3xl opacity-70 pointer-events-none"
                style={{
                  background:
                  'radial-gradient(600px 220px at 80% 0%, rgba(201,162,75,0.30), transparent 60%)'
                }} />
              
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-gradient text-white text-[11px] font-bold shadow-gold-glow">
                    <SparklesIcon className="w-3 h-3" />
                    Most popular
                  </div>
                </>
            }

              <div className="relative">
                <div
                className={[
                'font-display text-xl font-bold tracking-tight',
                p.highlight ? 'text-cream' : 'text-navy-900'].
                join(' ')}>
                
                  {p.name}
                </div>
                <div
                className={`mt-1 text-sm ${p.highlight ? 'text-cream/70' : 'text-navy-500'}`}>
                
                  {p.tagline}
                </div>

                <div className="mt-6 flex items-baseline gap-1">
                  {p.name === 'Enterprise' ?
                <span
                  className={[
                  'font-display text-4xl font-bold tracking-tight',
                  p.highlight ? 'text-cream' : 'text-navy-900'].
                  join(' ')}>
                  
                      Custom
                    </span> :

                <>
                      <span
                    className={[
                    'font-display text-5xl font-bold tracking-tight',
                    p.highlight ? 'text-cream' : 'text-navy-900'].
                    join(' ')}>
                    
                        ${yearly ? p.yearly : p.monthly}
                      </span>
                      <span
                    className={`text-sm ${p.highlight ? 'text-cream/60' : 'text-navy-500'}`}>
                    
                        /user/mo
                      </span>
                    </>
                }
                </div>
                {p.name !== 'Enterprise' && p.monthly > 0 &&
              <div
                className={`text-xs mt-1 ${p.highlight ? 'text-cream/60' : 'text-navy-500'}`}>
                
                    Billed {yearly ? 'annually' : 'monthly'}
                  </div>
              }

                <ul className="mt-6 space-y-3">
                  {p.features.map((f) =>
                <li key={f} className="flex items-start gap-2.5">
                      <span
                    className={[
                    'w-5 h-5 rounded-full grid place-items-center shrink-0 mt-0.5',
                    p.highlight ?
                    'bg-gold-gradient text-white' :
                    'bg-gold-100 text-gold-700'].
                    join(' ')}>
                    
                        <CheckIcon className="w-3 h-3" />
                      </span>
                      <span
                    className={`text-sm ${p.highlight ? 'text-cream/90' : 'text-navy-700'}`}>
                    
                        {f}
                      </span>
                    </li>
                )}
                </ul>

                <a
                href="#start"
                className={[
                'mt-8 inline-flex items-center justify-center w-full px-4 py-3 rounded-xl font-semibold transition-all',
                p.highlight ?
                'bg-gold-gradient text-white shadow-gold-glow hover:-translate-y-0.5' :
                'bg-navy-900 text-cream hover:-translate-y-0.5 shadow-soft hover:shadow-elevated'].
                join(' ')}>
                
                  {p.cta}
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}