import React from 'react';
import { Metadata } from 'next';
import { Sprout, ShieldCheck, Microchip, Award, ArrowRight } from 'lucide-react';
import { companyData } from '@/data/company';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductGrid } from '@/components/products/ProductGrid';
import { CTASection } from '@/components/sections/CTASection';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: seoData.home.metaTitle,
  description: seoData.home.metaDescription,
};

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* Hero Section Foundation */}
      <section className="relative overflow-hidden pt-4 pb-12 sm:pb-20">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-primary border border-agri-accent/30 text-xs sm:text-sm font-semibold">
              <Sprout className="w-4 h-4 text-agri-accent" />
              <span>India's Emerging Science-Backed Agri-Biologicals Company</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-agri-dark leading-tight">
              Revitalise Soil. <span className="text-agri-primary font-serif italic">Sustain Life.</span>
            </h1>

            <p className="text-base sm:text-xl text-agri-muted leading-relaxed font-normal max-w-3xl">
              Crafting biofertilizers, biopesticides, and microbial solutions under brand{' '}
              <strong className="text-agri-dark font-bold">KshetraPal ({companyData.brandGujarati})</strong>{' '}
              that rebuild soil health, boost crop nutrition, and reduce farmer dependence on chemicals. Nature's microbes. Proven science. Farmer results.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button href="/products" size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                🌱 Explore Our Products
              </Button>
              <Button href="/about" size="lg" variant="outline">
                Learn Our Story →
              </Button>
            </div>
          </div>

          {/* Trust Bar Strip */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 pt-8 border-t border-agri-border/60">
            {[
              { icon: '🔬', text: 'Science-Backed' },
              { icon: '🌿', text: '100% Biological' },
              { icon: '🌾', text: 'Farmer-Proven' },
              { icon: '♻️', text: 'Eco-Friendly' },
              { icon: '✅', text: 'FCO 1985 Compliant' },
              { icon: '🏭', text: 'ISO 9001:2015' },
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-white border border-agri-border/60 shadow-2xs">
                <span className="text-lg">{badge.icon}</span>
                <span className="text-xs font-bold text-agri-dark leading-tight">{badge.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Range Overview Section */}
      <section className="bg-agri-pale/30 py-16 border-y border-agri-border/60">
        <Container>
          <SectionHeading
            badge="The KshetraPal Range"
            title="Six Powerful Biological Inputs — One Complete Ecosystem"
            subtitle="Each product is formulated by expert microbiologists and manufactured to FCO 1985 quality standards for Indian farms."
          />
          <ProductGrid products={productsData} />
        </Container>
      </section>

      {/* The Swayur Difference */}
      <section className="py-8">
        <Container>
          <SectionHeading
            badge="The Swayur Difference"
            title="Why Leading Farmers & Dealers Trust Swayur Agrotech"
            subtitle="Combining microbiological rigor with farmer-focused field execution."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-agri-pale text-agri-primary flex items-center justify-center font-bold text-xl">
                🔬
              </div>
              <h3 className="text-xl font-bold text-agri-dark">Science First</h3>
              <p className="text-sm text-agri-muted leading-relaxed">
                Developed by experienced microbiologists with deep expertise in soil biology, microbial fermentation, and plant nutrition — not generic resellers.
              </p>
            </Card>

            <Card className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-agri-pale text-agri-primary flex items-center justify-center font-bold text-xl">
                🌱
              </div>
              <h3 className="text-xl font-bold text-agri-dark">Farmer Trusted</h3>
              <p className="text-sm text-agri-muted leading-relaxed">
                We don't just sell products. We provide crop-specific application support, dosage guidance, and field advisory — ensuring real results on every farm.
              </p>
            </Card>

            <Card className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-agri-pale text-agri-primary flex items-center justify-center font-bold text-xl">
                ♻️
              </div>
              <h3 className="text-xl font-bold text-agri-dark">Soil Regeneration</h3>
              <p className="text-sm text-agri-muted leading-relaxed">
                Every Swayur product is designed to rebuild India's degraded soils, restore microbial life, and create self-sustaining farms for future generations.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Global CTA Banner */}
      <CTASection />
    </div>
  );
}
