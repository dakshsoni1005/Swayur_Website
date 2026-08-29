import React from 'react';
import Image from 'next/image';
import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Badge } from '@/components/ui/Badge';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-transparent pt-12 sm:pt-16 lg:pt-24 pb-16 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Brand Eyebrow Badge */}
            <div className="inline-flex flex-wrap items-center gap-2">
              <Badge variant="green" className="text-xs font-extrabold uppercase tracking-wider py-1 px-3">
                {companyData.brand} ({companyData.brandGujarati})
              </Badge>
              <span className="text-xs font-semibold text-agri-muted">
                FCO 1985 Schedule I Compliant
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark tracking-tight leading-[1.15]">
              Revitalise Soil, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-agri-dark via-agri-primary to-agri-accent">
                Sustain Life.
              </span>
            </h1>

            {/* Subtitle / Intro */}
            <p className="text-base sm:text-lg text-agri-muted max-w-2xl font-normal leading-relaxed">
              Swayur Agrotech LLP manufactures high-potency biofertilizers and biopesticides formulated specifically for Indian soil conditions. Restore natural soil vitality, enhance crop yield, and reduce chemical dependence.
            </p>

            {/* Quick Proof Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-agri-dark">
                <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                <span>Up to 5×10⁸ CFU/ml</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-agri-dark">
                <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                <span>100% Residue-Free</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-agri-dark">
                <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                <span>FCO 1985 Standard</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Button href="/products" variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
                Explore KshetraPal Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <WhatsAppButton
                text="WhatsApp Inquiry"
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Right Column: Key Graphic / Trust Banner */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Product Range Feature Card */}
              <div className="relative rounded-3xl bg-white/90 backdrop-blur-md p-8 border-2 border-agri-accent/30 shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <Image
                    src="/images/brand/kshetrapal-official-logo.png"
                    alt="KshetraPal Brand Logo"
                    width={300}
                    height={100}
                    priority
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                  <Badge variant="gold">Biological Inputs</Badge>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-agri-muted uppercase tracking-wider block">
                    Product Brand
                  </span>
                  <h3 className="text-2xl font-extrabold text-agri-dark">
                    KshetraPal (ક્ષેત્રપાલ)
                  </h3>
                  <p className="text-xs text-agri-muted font-serif italic">
                    &ldquo;Protector of the Field&rdquo;
                  </p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-agri-border/60 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-agri-border/40">
                    <span className="text-agri-muted">Biofertilizers</span>
                    <span className="font-extrabold text-agri-dark">Bio-NPK, Bio-ZSB, Mycorrhiza</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-agri-border/40">
                    <span className="text-agri-muted">Biopesticides</span>
                    <span className="font-extrabold text-agri-dark">Trichoderma, Beauveria</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-agri-muted">Biocontrol</span>
                    <span className="font-extrabold text-agri-dark">Pseudomonas fluorescens</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-agri-pale/80 border border-agri-accent/20 flex items-center gap-3">
                  <Award className="w-6 h-6 text-agri-accent shrink-0" />
                  <div className="text-xs">
                    <strong className="text-agri-dark block">Anand, Gujarat Innovation</strong>
                    <span className="text-agri-muted">Formulated for Indian agro-climatic conditions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
