import React from 'react';
import Link from 'next/link';
import {
  Microscope,
  Sprout,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  FlaskConical,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const WhySwayurSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      icon: <Microscope className="w-7 h-7 text-agri-accent" />,
      badge: 'Microbiology R&D',
      title: 'Science-First Formulation',
      subtitle: 'In-house Strain Isolation & Testing',
      desc: 'Our biofertilizers and biopesticides are engineered by experienced microbiologists in Anand, Gujarat. Every batch undergoes strict CFU viability testing before reaching farmers.',
      highlights: [
        '5 × 10⁸ CFU/ml guaranteed potency',
        'FCO 1985 Schedule I compliant',
        'ISO 9001:2015 quality standards',
      ],
      accentGradient: 'from-agri-primary via-agri-accent to-emerald-500',
    },
    {
      number: '02',
      icon: <Users className="w-7 h-7 text-agri-accent" />,
      badge: 'Agronomy Support',
      title: 'Farmer-Centric Advisory',
      subtitle: 'Field Guidance & Dosage Precision',
      desc: 'We don’t just supply inputs — we provide customized crop advisory, application schedules, and dosage recommendations tailored to specific Indian soil conditions.',
      highlights: [
        'Crop & soil-specific dosage protocols',
        'Direct WhatsApp agronomy assistance',
        'Proven yield improvements in field trials',
      ],
      accentGradient: 'from-agri-accent via-emerald-500 to-teal-500',
    },
    {
      number: '03',
      icon: <RefreshCw className="w-7 h-7 text-agri-accent" />,
      badge: 'Soil Regeneration',
      title: 'Long-Term Vitality',
      subtitle: 'Restoring Degraded Agricultural Land',
      desc: 'Designed to rebuild biological activity in chemical-depleted soil. Our beneficial microbes fix nitrogen, solubilize phosphorus, and protect root ecosystems naturally.',
      highlights: [
        '100% Residue-free & non-toxic',
        'Enriches soil organic matter & humus',
        'Reduces reliance on synthetic chemicals',
      ],
      accentGradient: 'from-emerald-500 via-teal-500 to-agri-primary',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-agri-pale/20 to-white text-agri-dark relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-agri-pale/40 via-emerald-50/20 to-transparent blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-agri-pale border border-agri-accent/30 text-agri-primary text-xs font-black uppercase tracking-widest shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
            <span>Why Choose Swayur</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-agri-dark">
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-agri-dark via-agri-primary to-agri-accent">
              Swayur Difference
            </span>
          </h2>

          <p className="text-base sm:text-lg text-agri-muted max-w-2xl mx-auto font-normal leading-relaxed">
            Merging microbial biotechnology, dedicated farmer advisory, and soil regeneration to build a resilient, chemical-free agricultural ecosystem.
          </p>
        </div>

        {/* 3 Modern Feature Cards Grid (Light Background & White Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative group rounded-3xl bg-white border-2 border-agri-border/80 hover:border-agri-accent/50 p-8 sm:p-9 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${pillar.accentGradient} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              <div className="space-y-6">
                {/* Header: Icon Box + Number Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-agri-pale text-agri-primary border border-agri-accent/30 flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:bg-agri-primary group-hover:text-white transition-all duration-300">
                    {React.cloneElement(pillar.icon, {
                      className: 'w-7 h-7 transition-colors duration-300 group-hover:text-white',
                    })}
                  </div>
                  <span className="text-3xl font-mono font-black text-agri-accent/30 group-hover:text-agri-accent transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <div className="space-y-1">
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-agri-primary">
                    {pillar.badge}
                  </span>
                  <h3 className="text-2xl font-black text-agri-dark tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-agri-muted">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-agri-muted leading-relaxed font-normal">
                  {pillar.desc}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-agri-border/60">
                  {pillar.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs text-agri-dark font-medium">
                      <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA / Action Link */}
              <div className="pt-6 mt-6 border-t border-agri-border/60 flex items-center justify-between">
                <Link
                  href="/our-science"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-agri-primary hover:text-agri-accent transition-colors group/link"
                >
                  <span>Learn Our Science</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
                <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-agri-pale text-agri-primary border border-agri-accent/30">
                  Verified Standard
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust & Quality Banner (Light White Theme) */}
        <div className="mt-16 sm:mt-20 p-6 sm:p-8 rounded-3xl bg-white border-2 border-agri-border/80 flex flex-wrap items-center justify-around gap-6 text-center sm:text-left shadow-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-agri-pale text-agri-primary border border-agri-accent/30 shadow-2xs">
              <FlaskConical className="w-5 h-5 text-agri-accent" />
            </div>
            <div>
              <strong className="text-sm font-bold text-agri-dark block">In-House Quality Control</strong>
              <span className="text-xs text-agri-muted">Strict microbial purity & viability assays</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-agri-pale text-agri-primary border border-agri-accent/30 shadow-2xs">
              <Award className="w-5 h-5 text-agri-accent" />
            </div>
            <div>
              <strong className="text-sm font-bold text-agri-dark block">FCO 1985 Certified</strong>
              <span className="text-xs text-agri-muted">Schedule I Government Standards</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-agri-pale text-agri-primary border border-agri-accent/30 shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-agri-accent" />
            </div>
            <div>
              <strong className="text-sm font-bold text-agri-dark block">ISO 9001:2015</strong>
              <span className="text-xs text-agri-muted">International Quality Management</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
