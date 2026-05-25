import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  MessageSquareIcon,
  LifeBuoyIcon,
  BuildingIcon,
  ArrowRightIcon,
  CheckIcon } from
'lucide-react';
import { PageHero } from '../components/PageHero';
import { SectionHeader } from '../components/Features';
const channels = [
{
  icon: MessageSquareIcon,
  title: 'Sales',
  desc: 'Talk to a product expert about plans, migrations, and rollout.',
  cta: '[email protected]',
  href: 'mailto:[email protected]'
},
{
  icon: LifeBuoyIcon,
  title: 'Support',
  desc: '24/7 help from real humans. Pro & Enterprise priority response.',
  cta: '[email protected]',
  href: 'mailto:[email protected]'
},
{
  icon: BuildingIcon,
  title: 'Partnerships',
  desc: 'Integrations, agencies, and co-marketing opportunities.',
  cta: '[email protected]',
  href: 'mailto:[email protected]'
}];

const offices = [
{
  city: 'Lisbon',
  country: 'Portugal · HQ',
  address: 'Rua da Boavista 84, 1200-068'
},
{
  city: 'New York',
  country: 'United States',
  address: '195 Broadway, Floor 12, NY 10007'
},
{
  city: 'Berlin',
  country: 'Germany',
  address: 'Torstraße 138, 10119'
},
{
  city: 'Singapore',
  country: 'APAC',
  address: '8 Marina View, #43-01, 018960'
}];

const topics = [
'Sales inquiry',
'Demo request',
'Migration help',
'Partnership',
'Press',
'Other'];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [topic, setTopic] = useState(topics[0]);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={
        <>
            Let's start
            <br />
            <span className="gold-text-gradient">a conversation.</span>
          </>
        }
        subtitle="Whether you want a demo, need help, or just want to say hello — our team usually replies within an hour." />
      

      {/* Channels */}
      <section className="relative -mt-2 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {channels.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.title}
                  href={c.href}
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
                    delay: i * 0.06
                  }}
                  className="group rounded-3xl bg-white border border-border p-6 shadow-soft hover:shadow-elevated hover:-translate-y-0.5 transition-all block">
                  
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-navy-900 grid place-items-center text-gold-400 shadow-soft">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowRightIcon className="w-4 h-4 text-navy-400 group-hover:text-gold-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900 tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-navy-500 leading-relaxed">
                    {c.desc}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-gold-700 group-hover:text-gold-600 transition-colors">
                    {c.cta}
                  </div>
                </motion.a>);

            })}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="lg:col-span-7 rounded-3xl bg-white border border-border shadow-elevated p-6 md:p-8">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-gradient grid place-items-center shadow-gold-glow">
                <MailIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display text-xl font-bold text-navy-900">
                  Send us a message
                </div>
                <div className="text-xs text-navy-500">
                  We reply within an hour during business hours.
                </div>
              </div>
            </div>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="First name" placeholder="Maya" />
                <Field label="Last name" placeholder="Chen" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field
                  label="Work email"
                  type="email"
                  placeholder="[email protected]"
                  required />
                
                <Field label="Company" placeholder="NovaTech" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-navy-700 mb-2">
                  Topic
                </label>
                <div className="flex flex-wrap gap-2">
                  {topics.map((t) =>
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTopic(t)}
                    className={[
                    'text-xs font-semibold px-3 py-1.5 rounded-full border transition-all',
                    topic === t ?
                    'bg-navy-900 text-cream border-navy-900 shadow-soft' :
                    'bg-white text-navy-700 border-border hover:border-navy-300'].
                    join(' ')}>
                    
                      {t}
                    </button>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-navy-700 mb-2">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us a bit about your team and what you're trying to do…"
                  className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-border text-navy-900 placeholder:text-navy-400 text-sm focus:border-gold-500 focus:bg-white transition-colors outline-none resize-none" />
                
              </div>

              <div className="flex items-start gap-2 text-xs text-navy-500">
                <input
                  type="checkbox"
                  id="optin"
                  className="mt-0.5 accent-gold-500" />
                
                <label htmlFor="optin">
                  Send me occasional product updates. I can unsubscribe anytime.
                </label>
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group relative w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-navy-900 text-cream font-semibold shadow-elevated hover:shadow-deep transition-all hover:-translate-y-0.5 disabled:opacity-80 disabled:hover:translate-y-0">
                
                <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-gold-500/40 pointer-events-none" />
                {sent ?
                <>
                    <CheckIcon className="w-4 h-4 text-gold-400" />
                    Message sent — we'll be in touch
                  </> :

                <>
                    Send message
                    <ArrowRightIcon className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
                  </>
                }
              </button>
            </form>
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 18
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: 0.05
              }}
              className="rounded-3xl bg-navy-gradient text-cream p-6 md:p-8 relative overflow-hidden shadow-deep">
              
              <div
                className="absolute inset-0 bg-grid-pattern-dark opacity-50"
                aria-hidden />
              
              <div
                className="absolute -top-24 -right-16 w-80 h-80 rounded-full pointer-events-none"
                style={{
                  background:
                  'radial-gradient(closest-side, rgba(201,162,75,0.30), transparent 70%)'
                }}
                aria-hidden />
              
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.15em] font-semibold text-gold-400">
                  Prefer a quick call?
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                  Book a 30-min demo
                </h3>
                <p className="mt-2 text-sm text-cream/70 leading-relaxed">
                  See WorkNest tailored to your team's workflow — live, with a
                  product specialist.
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gold-gradient text-white font-semibold shadow-gold-glow hover:-translate-y-0.5 transition-all text-sm">
                  
                  Schedule a demo
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>

                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-cream/60 text-xs">Sales</div>
                    <a
                      href="tel:+18005551234"
                      className="font-semibold text-cream hover:text-gold-400 inline-flex items-center gap-1.5 mt-0.5">
                      
                      <PhoneIcon className="w-3.5 h-3.5" />
                      +1 (800) 555-1234
                    </a>
                  </div>
                  <div>
                    <div className="text-cream/60 text-xs">Hours</div>
                    <div className="font-semibold text-cream mt-0.5">
                      Mon–Fri · 24h
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 18
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: 0.1
              }}
              className="rounded-3xl bg-white border border-border shadow-soft p-6">
              
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold text-gold-700">
                <MapPinIcon className="w-4 h-4" />
                Offices
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {offices.map((o) =>
                <div key={o.city} className="text-sm">
                    <div className="font-semibold text-navy-900">{o.city}</div>
                    <div className="text-xs text-navy-500">{o.country}</div>
                    <div className="text-xs text-navy-500 mt-1 leading-relaxed">
                      {o.address}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="relative py-16 md:py-20 bg-cream-50/60 border-y border-border">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <SectionHeader
            eyebrow="Before you ask"
            title={
            <>
                Quick answers,{' '}
                <span className="gold-text-gradient">no waiting.</span>
              </>
            } />
          
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {[
            {
              q: 'How fast do you reply?',
              a: 'Most messages get a response within 60 minutes during business hours. Always within 24 hours otherwise.'
            },
            {
              q: 'Do you offer onboarding help?',
              a: 'Yes — Pro and Enterprise customers get free white-glove migration and setup from our solutions team.'
            },
            {
              q: 'Can I try WorkNest first?',
              a: 'Absolutely. The Free plan is yours forever, and Pro has a 14-day trial — no credit card required.'
            },
            {
              q: 'Where is my data stored?',
              a: 'Choose between US, EU, or APAC regions. Enterprise customers can request a dedicated tenant.'
            }].
            map((q, i) =>
            <motion.div
              key={q.q}
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
                margin: '-40px'
              }}
              transition={{
                duration: 0.45,
                delay: i * 0.05
              }}
              className="rounded-2xl bg-white border border-border p-5 shadow-soft">
              
                <div className="font-display font-bold text-navy-900">
                  {q.q}
                </div>
                <div className="mt-1.5 text-sm text-navy-500 leading-relaxed">
                  {q.a}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>);

}
function Field({
  label,
  placeholder,
  type = 'text',
  required





}: {label: string;placeholder: string;type?: string;required?: boolean;}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider font-semibold text-navy-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-cream-50 border border-border text-navy-900 placeholder:text-navy-400 text-sm focus:border-gold-500 focus:bg-white transition-colors outline-none" />
      
    </div>);

}