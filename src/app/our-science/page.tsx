import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: seoData['our-science'].metaTitle,
  description: seoData['our-science'].metaDescription,
};

export default function OurSciencePage() {
  return (
    <div>
      <PageHeader
        badge="Microbiology & Applied Technology"
        title="Backed by Microbiology. Built for Farms."
        subtitle="Every KshetraPal product is engineered through applied soil microbiology, formulation science, and rigorous field testing against FCO 1985 standards."
        breadcrumbs={[{ label: 'Our Science' }]}
      />

      <div className="py-12 sm:py-16 space-y-16">
        {/* Intro */}
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-agri-dark">
              Scientific Rigor Applied to Real Farm Challenges
            </h2>
            <p className="text-base text-agri-muted leading-relaxed">
              The science behind KshetraPal products is not theoretical. It is the result of deep expertise in applied microbiology, soil science, and agricultural biotechnology — applied to the real challenges Indian farmers face every season.
            </p>
            <p className="text-base text-agri-muted leading-relaxed">
              Every Swayur Agrotech product goes through rigorous development: organism selection from verified strain collections (MTCC/ATCC registered strains), formulation optimization for Indian agro-climatic conditions, quality testing against FCO standards, and field validation before commercial release.
            </p>
          </div>
        </Container>

        {/* 6 Core Science Areas */}
        <section className="bg-agri-pale/30 py-12 border-y border-agri-border">
          <Container>
            <SectionHeading
              badge="Core Science Areas"
              title="What We Know — Deeply"
              subtitle="Specialized biotechnology domain expertise powering KshetraPal product formulation."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: '🔬',
                  title: 'Beneficial Microorganism Science',
                  desc: 'Deep expertise in selecting, cultivating, and stabilizing agriculturally beneficial bacteria and fungi. We work with nitrogen fixers, phosphate solubilizers, potassium mobilizers, mycorrhizal fungi, biocontrol organisms, and PGPR.',
                },
                {
                  icon: '🧪',
                  title: 'Biofertilizer Formulation Technology',
                  desc: 'Advanced liquid and powder formulation expertise — developing products with guaranteed CFU counts, optimized pH ranges, and extended shelf life under Indian storage conditions.',
                },
                {
                  icon: '🌿',
                  title: 'Biopesticide Development',
                  desc: 'Expertise in entomopathogenic fungi (Beauveria bassiana), biocontrol bacteria (Pseudomonas fluorescens, Trichoderma viride) and their practical application in Indian crop protection programs.',
                },
                {
                  icon: '🧫',
                  title: 'Microbial Fermentation',
                  desc: 'Industrial fermentation knowledge for scaling up beneficial microbial production while maintaining strain viability, purity, and efficacy — from seed culture to commercial batch.',
                },
                {
                  icon: '🌱',
                  title: 'Soil & Plant Microbiology',
                  desc: 'Understanding of the complex interactions between soil microbiomes, plant roots, and nutrient cycles — enabling product design that works with nature rather than against it.',
                },
                {
                  icon: '🛡️',
                  title: 'Biological Crop Protection',
                  desc: 'Science-based integrated biological crop protection programs — combining biofertilizers, biocontrol agents, and cultural practices for durable, residue-free crop protection.',
                },
              ].map((area, idx) => (
                <Card key={idx} className="space-y-3 bg-white">
                  <span className="text-3xl">{area.icon}</span>
                  <h3 className="text-lg font-bold text-agri-dark">{area.title}</h3>
                  <p className="text-xs sm:text-sm text-agri-muted leading-relaxed">{area.desc}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Quality Assurance Matrix */}
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <SectionHeading
              badge="Quality Assurance"
              title="Our Quality Promise & Standards"
              subtitle="Every batch of KshetraPal products is quality-tested before release. We guarantee what we print on the label."
            />
            <div className="overflow-hidden border border-agri-border rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-agri-pale/80 border-b border-agri-border text-agri-dark font-bold text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 sm:px-6">Quality Parameter</th>
                    <th className="py-3.5 px-4 sm:px-6">Our Standard & Protocol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-agri-border/60">
                  {[
                    { param: 'CFU Count Guarantee', std: 'Minimum guaranteed count printed on label — verified by plating on selective media' },
                    { param: 'Contamination Testing', std: 'Every batch tested for competing organisms on non-selective media' },
                    { param: 'pH Verification', std: 'Batch pH tested and confirmed within specification range (5.0–7.0)' },
                    { param: 'Shelf Life Testing', std: 'Real-time stability testing under Indian storage temperature conditions' },
                    { param: 'Raw Material Traceability', std: 'Verified strain sources (MTCC/ATCC) — documented lot-wise' },
                    { param: 'Batch Records', std: 'Full batch documentation available on request via QR code on each pack' },
                    { param: 'FCO Compliance', std: 'All products manufactured and labeled as per Fertilizer Control Order 1985' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-agri-pale/20'}>
                      <td className="py-3 px-4 sm:px-6 font-bold text-agri-dark">{row.param}</td>
                      <td className="py-3 px-4 sm:px-6 font-medium text-agri-primary">{row.std}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>

        <CTASection />
      </div>
    </div>
  );
}
