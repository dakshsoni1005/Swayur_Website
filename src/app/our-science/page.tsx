import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import {
  Microscope,
  FlaskConical,
  ShieldCheck,
  Dna,
  Sprout,
  Recycle,
  FileCheck2,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { seoData } from '@/data/seo';
import {
  scienceAreasData,
  qualityPromiseData,
} from '@/data/science';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';
import { PipelineSection } from '@/components/science/PipelineSection';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export const metadata: Metadata = {
  title: seoData['our-science']?.metaTitle || 'Our Science & R&D | Swayur Agrotech',
  description:
    seoData['our-science']?.metaDescription ||
    'Discover the applied microbiology, formulation technology, and FCO 1985 quality assurance behind KshetraPal biological inputs.',
};

export default function OurSciencePage() {
  const getScienceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Microscope':
        return <Microscope className="w-7 h-7 text-agri-accent" />;
      case 'FlaskConical':
        return <FlaskConical className="w-7 h-7 text-agri-accent" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-agri-accent" />;
      case 'Dna':
        return <Dna className="w-7 h-7 text-agri-accent" />;
      case 'Sprout':
        return <Sprout className="w-7 h-7 text-agri-accent" />;
      default:
        return <Recycle className="w-7 h-7 text-agri-accent" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. Science 2-Column Hero Section with Microbiology Illustration */}
      <div className="bg-gradient-to-b from-agri-pale/80 via-agri-pale/30 to-transparent py-10 sm:py-14 border-b border-agri-border/60">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Title, Subtitle, Badges */}
            <div className="lg:col-span-6 space-y-4">
              <Breadcrumbs items={[{ label: 'Our Science' }]} className="mb-2" />

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d472a] text-white text-xs font-black uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                OUR SCIENCE & R&D
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Backed by Microbiology. Built for Farms.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                The science behind KshetraPal products is not theoretical. It is the result of deep expertise in applied microbiology, soil science, and agricultural biotechnology — applied to the real challenges Indian farmers face every season.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-extrabold text-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>MTCC / ATCC Strains</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-extrabold text-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>FCO 1985 Compliant</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-extrabold text-slate-800 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Residue-Free</span>
                </div>
              </div>
            </div>

            {/* Right Column: Transparent Microbiology Science Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg p-3 sm:p-4 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-emerald-50/40 to-amber-500/10 border border-emerald-500/20 backdrop-blur-sm shadow-xl flex items-center justify-center group">
                {/* Ambient Soft Radial Glow */}
                <div className="absolute inset-0 bg-emerald-400/10 rounded-3xl blur-2xl pointer-events-none group-hover:bg-emerald-400/20 transition-colors" />

                <Image
                  src="/images/science/microbiology-science-hero.png"
                  alt="Swayur Agrotech Applied Microbiology & Soil Science"
                  width={784}
                  height={677}
                  priority
                  className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 relative z-10"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. R&D Development Pipeline */}
      <PipelineSection />

      {/* 3. Core Science Areas (6 Cards) */}
      <section className="bg-agri-pale/30 py-16 sm:py-24 border-y border-agri-border/60">
        <Container>
          <SectionHeading
            badge="Core Capability Areas"
            title="What We Know — Deeply"
            subtitle="Specialized biotechnology domain expertise powering KshetraPal product formulation and stability."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scienceAreasData.map((area, idx) => (
              <Card key={idx} className="space-y-4 p-8 bg-white border-agri-border">
                <div className="w-14 h-14 rounded-2xl bg-agri-pale flex items-center justify-center">
                  {getScienceIcon(area.iconName)}
                </div>
                <h3 className="text-xl font-bold text-agri-dark">{area.title}</h3>
                <p className="text-xs sm:text-sm text-agri-muted leading-relaxed font-normal">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Product Development & Strain Integrity */}
      <Container>
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-agri-dark via-agri-primary to-[#0A261E] text-white space-y-6 shadow-md">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-accent/20 text-agri-light border border-agri-accent/30 text-xs font-bold uppercase tracking-wider">
            <Dna className="w-4 h-4 text-agri-light" />
            <span>Verified Strain Lineage</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            MTCC / ATCC Registered Microbial Strains
          </h2>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            We work exclusively with verified microbial strains sourced from registered strain repositories (<strong className="text-white">MTCC / ATCC</strong>). Strains are screened for high enzyme activity, phosphate solubilization capacity, nitrogen fixation rates, and environmental tolerance before scale-up in industrial fermenters.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-agri-primary/80 text-emerald-300 text-xs font-bold border border-agri-primary">
              ✓ Guaranteed Minimum CFU Counts
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-agri-primary/80 text-emerald-300 text-xs font-bold border border-agri-primary">
              ✓ Zero Contamination Testing
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-agri-primary/80 text-emerald-300 text-xs font-bold border border-agri-primary">
              ✓ Real-time Indian Storage Stability
            </span>
          </div>
        </div>
      </Container>

      {/* 5. Quality Assurance Matrix ("Our Quality Promise") */}
      <Container>
        <div className="max-w-4xl mx-auto space-y-6">
          <SectionHeading
            badge="Quality Assurance"
            title="Our Quality Promise"
            subtitle="Every batch of KshetraPal products is quality-tested before release. We guarantee what we print on the label."
          />

          <div className="overflow-hidden border border-agri-border rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-agri-dark text-white font-bold text-xs uppercase tracking-wider">
                  <th className="py-4 px-4 sm:px-6">Quality Parameter</th>
                  <th className="py-4 px-4 sm:px-6">Our Standard & Protocol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-agri-border/60">
                {qualityPromiseData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-agri-pale/20'}>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark">{row.parameter}</td>
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-agri-primary">{row.standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>

      {/* 6. FCO Compliance Highlight Block */}
      <Container>
        <div className="p-6 sm:p-8 rounded-2xl bg-agri-pale/60 border border-agri-accent/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-agri-accent text-white shrink-0">
              <FileCheck2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-agri-dark">Fertilizer Control Order (FCO 1985) Compliant</h3>
              <p className="text-xs sm:text-sm text-agri-muted mt-1">
                All products manufactured and labeled strictly as per Fertilizer Control Order 1985 specifications.
              </p>
            </div>
          </div>
          <Badge variant="dark" className="text-xs py-1.5 px-3">
            FCO Schedule I
          </Badge>
        </div>
      </Container>

      {/* 7. Science-to-Farm CTA */}
      <CTASection
        title="Science That Works With Nature"
        subtitle="Explore our 6 KshetraPal products or get in touch with our agronomy team to learn how biological inputs can restore your farm's soil health."
      />
    </div>
  );
}
