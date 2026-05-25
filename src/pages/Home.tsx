import React from 'react';
import { Hero } from '../components/Hero';
import { LogoCloud } from '../components/LogoCloud';
import { Features } from '../components/Features';
import { ProductShowcase } from '../components/ProductShowcase';
import { WhyWorkNest } from '../components/WhyWorkNest';
import { Solutions } from '../components/Solutions';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { FAQ } from '../components/FAQ';
import { CTASection } from '../components/CTASection';
export function Home() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <Features />
      <ProductShowcase />
      <WhyWorkNest />
      <Solutions />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
    </main>);

}