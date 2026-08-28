import React from 'react';
import { ArrowRight, Sprout, ShieldCheck, Microchip, Sparkles } from 'lucide-react';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-agri-dark via-[#134435] to-agri-dark text-white py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-agri-primary/40">
      {/* Background Ambient Glows & Subtle Radial Accents */}
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-agri-accent/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          {/* Top Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-primary/80 border border-agri-accent/40 text-emerald-300 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-sm">
            <Sprout className="w-4 h-4 text-agri-light" />
            <span>India's Emerging Science-Backed Agri-Biologicals Company</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Revitalise Soil.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-agri-light to-emerald-400 font-serif italic">
              Sustain Life.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal max-w-3xl">
            Crafting biofertilizers, biopesticides, and microbial solutions under product brand{' '}
            <strong className="text-white font-bold">{companyData.brand} ({companyData.brandGujarati})</strong>{' '}
            that rebuild soil health, boost crop nutrition, and reduce farmer dependence on chemicals. Nature's microbes. Proven science. Farmer results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 sm:pt-4">
            <Button
              href="/products"
              size="lg"
              variant="secondary"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="w-full sm:w-auto shadow-md"
            >
              Explore Our Products
            </Button>
            <Button
              href="/about"
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white/70 text-white hover:bg-white hover:text-agri-dark"
            >
              Learn Our Story →
            </Button>
          </div>

          {/* Highlight Micro-features Strip */}
          <div className="pt-8 border-t border-agri-primary/50 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-agri-light" />
              <span>Biofertilizers & Biopesticides</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-agri-light" />
              <span>FCO Schedule I Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Microchip className="w-4 h-4 text-agri-light" />
              <span>Verified MTCC/ATCC Microbial Strains</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
