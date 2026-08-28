import React from 'react';
import { Metadata } from 'next';
import {
  Microscope,
  FlaskConical,
  ShieldCheck,
  Dna,
  Sprout,
  Recycle,
  FileCheck2,
} from 'lucide-react';
import { seoData } from '@/data/seo';
import {
  scienceAreasData,
  scienceProcessSteps,
  qualityPromiseData,
} from '@/data/science';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/Badge';

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
      {/* 1. Science Hero */}
      <PageHeader
        badge="OUR SCIENCE"
        title="Backed by Microbiology. Built for Farms."
        subtitle="The science behind KshetraPal products is not theoretical. It is the result of deep expertise in applied microbiology, soil science, and agricultural biotechnology — applied to the real challenges Indian farmers face every season."
        breadcrumbs={[{ label: 'Our Science' }]}
      />

      {/* 2. R&D Development Pipeline */}
      <Container>
        <div className="space-y-8">
          <SectionHeading
            badge="R&D Development Pipeline"
            title="How Science Moves From Microbe to Farm"
            subtitle="Every Swayur Agrotech product undergoes a rigorous 5-stage development lifecycle before commercial release."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {scienceProcessSteps.map((proc, idx) => (
              <Card
                key={idx}
                className="flex flex-col justify-between space-y-3 p-5 bg-white border-agri-border relative"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold text-agri-primary px-2.5 py-1 rounded bg-agri-pale inline-block border border-agri-accent/20">
                    Stage {proc.stepNumber}
                  </span>
                  <h3 className="text-base font-bold text-agri-dark leading-snug">{proc.title}</h3>
                  <p className="text-xs text-agri-muted leading-relaxed font-normal">
                    {proc.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>

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
