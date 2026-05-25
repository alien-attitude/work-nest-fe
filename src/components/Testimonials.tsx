import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon, StarIcon } from 'lucide-react';
import { SectionHeader } from './Features';
const testimonials = [
{
  quote:
  'WorkNest replaced four different tools. Our team finally has one place to plan, build, and reflect — and it actually feels good to use.',
  name: 'Maya Chen',
  role: 'Head of Product',
  company: 'NovaTech',
  avatar:
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=faces'
},
{
  quote:
  "The AI doesn't just suggest — it acts. We've cut triage time by 60% and our PMs can focus on strategy again.",
  name: 'Jonas Vargas',
  role: 'VP Engineering',
  company: 'ScaleFlow',
  avatar:
  'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=160&h=160&fit=crop&crop=faces'
},
{
  quote:
  'It feels like Linear and Airtable had a baby — and that baby went to design school. Genuinely best-in-class.',
  name: 'Lin Okafor',
  role: 'Design Lead',
  company: 'MetaCore',
  avatar:
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=faces'
},
{
  quote:
  'Onboarding 200+ new hires used to take a quarter. With WorkNest, it takes a week. Our ops team got their lives back.',
  name: 'Ari Patel',
  role: 'COO',
  company: 'Synapse',
  avatar:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces'
},
{
  quote:
  'Security posture, audit logs, and SSO out of the box. Our IT review took 48 hours — a record for us.',
  name: 'Sara Müller',
  role: 'CISO',
  company: 'Vertex Labs',
  avatar:
  'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=160&h=160&fit=crop&crop=faces'
},
{
  quote:
  'The polish is unreal. Every animation, every interaction — you can tell a real product team built this.',
  name: 'Dev Singh',
  role: 'Founder',
  company: 'Helix',
  avatar:
  'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=160&h=160&fit=crop&crop=faces'
}];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={
          <>
              Loved by teams who
              <br className="hidden sm:block" />
              <span className="gold-text-gradient">ship for a living.</span>
            </>
          }
          subtitle="From scrappy founders to Fortune 500 operators — here's what they say." />
        

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) =>
          <motion.figure
            key={t.name}
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
              delay: i * 0.05
            }}
            className="relative rounded-3xl bg-white border border-border p-6 shadow-soft hover:shadow-elevated transition-all">
            
              <QuoteIcon className="w-7 h-7 text-gold-500 opacity-90" />
              <blockquote className="mt-3 text-navy-800 leading-relaxed text-[15px]">
                "{t.quote}"
              </blockquote>
              <div className="mt-4 flex items-center gap-1 text-gold-500">
                {Array.from({
                length: 5
              }).map((_, k) =>
              <StarIcon key={k} className="w-3.5 h-3.5 fill-current" />
              )}
              </div>
              <figcaption className="mt-5 flex items-center gap-3 pt-5 border-t border-border">
                <img
                src={t.avatar}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover border border-border" />
              
                <div>
                  <div className="font-semibold text-navy-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-navy-500">
                    {t.role} ·{' '}
                    <span className="text-navy-700 font-medium">
                      {t.company}
                    </span>
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </section>);

}