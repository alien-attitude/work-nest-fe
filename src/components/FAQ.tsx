import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { SectionHeader } from './Features';
const faqs = [
{
  q: 'How is WorkNest different from Notion or Airtable?',
  a: "WorkNest combines the structure of databases with the flexibility of docs and the rigor of project management. It's designed as one cohesive system — not three tools stitched together."
},
{
  q: 'Can I migrate from my existing tools?',
  a: 'Yes. We offer one-click importers for Asana, Trello, Notion, Airtable, Jira, and Linear. Our migration team helps Pro and Enterprise customers free of charge.'
},
{
  q: 'Is WorkNest secure enough for enterprise use?',
  a: 'Absolutely. We are SOC 2 Type II and ISO 27001 certified, GDPR compliant, with SSO/SAML, SCIM, audit logs, and customer-managed encryption keys on Enterprise.'
},
{
  q: 'Do you support real-time collaboration?',
  a: 'Yes — every view, doc, and table is real-time. Comments, mentions, presence, and live cursors are built-in across the entire platform.'
},
{
  q: 'What does AI Automation actually do?',
  a: "WorkNest AI summarizes threads, drafts updates, routes incoming work, suggests next steps, and surfaces risks. It's grounded in your workspace and respects your permissions."
},
{
  q: 'Can I cancel anytime?',
  a: 'Yes. There are no contracts on Free or Pro. You can downgrade or cancel anytime — your data remains exportable for 90 days.'
}];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-32 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={
          <>
              Questions, <span className="gold-text-gradient">answered.</span>
            </>
          }
          subtitle="Everything you need to know before getting started." />
        

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
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
                  duration: 0.4,
                  delay: i * 0.04
                }}
                className={[
                'rounded-2xl border bg-white overflow-hidden transition-shadow',
                isOpen ?
                'border-navy-200 shadow-elevated' :
                'border-border shadow-soft'].
                join(' ')}>
                
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 gap-4"
                  aria-expanded={isOpen}>
                  
                  <span className="font-display font-semibold text-navy-900 text-base sm:text-lg">
                    {f.q}
                  </span>
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0
                    }}
                    transition={{
                      duration: 0.25
                    }}
                    className={[
                    'w-8 h-8 rounded-full grid place-items-center shrink-0 transition-colors',
                    isOpen ?
                    'bg-gold-gradient text-white' :
                    'bg-cream-100 text-navy-700 border border-border'].
                    join(' ')}>
                    
                    <PlusIcon className="w-4 h-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="overflow-hidden">
                    
                      <div className="px-5 sm:px-6 pb-5 text-navy-500 leading-relaxed">
                        {f.a}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </motion.div>);

          })}
        </div>
      </div>
    </section>);

}