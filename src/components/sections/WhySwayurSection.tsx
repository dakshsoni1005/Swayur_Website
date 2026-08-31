import React from 'react';
import Link from 'next/link';
import {
  Microscope,
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
      icon: <Microscope className="w-4 h-4 sm:w-7 sm:h-7 text-agri-accent" />,
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
      icon: <Users className="w-4 h-4 sm:w-7 sm:h-7 text-agri-accent" />,
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
      icon: <RefreshCw className="w-4 h-4 sm:w-7 sm:h-7 text-agri-accent" />,
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
    <section className="py-14 sm:py-28 bg-gradient-to-b from-white via-agri-pale/20 to-white text-agri-dark relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-agri-pale/40 via-emerald-50/20 to-transparent blur-3xl pointer-events-none" />

      <Container className="relative z-10 px-3 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-pale border border-agri-accent/30 text-agri-primary text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
            <span>Why Choose Swayur</span>
          </div>

          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-agri-dark">
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-agri-dark via-agri-primary to-agri-accent">
              Swayur Difference
            </span>
          </h2>

          <p className="text-xs sm:text-lg text-agri-muted max-w-2xl mx-auto font-normal leading-relaxed">
            Merging microbial biotechnology, dedicated farmer advisory, and soil regeneration to build a resilient, chemical-free agricultural ecosystem.
          </p>
        </div>

        {/* 3 Cards Grid: Responsive Stack on Mobile (grid-cols-1), 3 Columns on Tablet/Desktop (md:grid-cols-3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-full">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl sm:rounded-3xl bg-white border border-slate-200 sm:border-2 hover:border-agri-accent/50 p-6 sm:p-8 lg:p-9 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r ${pillar.accentGradient} opacity-80 group-hover:opacity-100 transition-opacity`}
              />

              <div className="space-y-4 sm:space-y-6">
                {/* Header: Icon Box + Number Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-agri-pale text-agri-primary border border-agri-accent/30 flex items-center justify-center shadow-xs shrink-0">
                    {React.cloneElement(pillar.icon, {
                      className: 'w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-300 group-hover:text-white',
                    })}
                  </div>
                  <span className="text-2xl sm:text-3xl font-mono font-black text-emerald-600/60 sm:text-agri-accent/30 group-hover:text-agri-accent transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Card Title & Subtitle */}
                <div className="space-y-1">
                  <span className="inline-block text-xs font-black uppercase tracking-wider text-agri-primary truncate max-w-full">
                    {pillar.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-agri-dark tracking-tight leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-agri-muted">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-agri-muted leading-relaxed font-normal">
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

              {/* Bottom Action Link */}
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 sm:border-agri-border/60 flex items-center justify-between">
                <Link
                  href="/our-science"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-agri-primary hover:text-agri-accent transition-colors group/link"
                >
                  <span>Learn Our Science</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
                <span className="text-[10px] sm:text-xs font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-agri-pale text-agri-primary border border-agri-accent/30">
                  Verified Standard
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust & Quality Banner */}
        <div className="mt-12 sm:mt-20 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 sm:border-2 flex flex-col sm:flex-row items-start sm:items-center justify-around gap-4 sm:gap-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-agri-pale text-agri-primary border border-agri-accent/30 shadow-2xs shrink-0">
              <FlaskConical className="w-4 h-4 sm:w-5 sm:h-5 text-agri-accent" />
            </div>
            <div>
              <strong className="text-xs sm:text-sm font-extrabold text-slate-900 block">In-House Quality Control</strong>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Strict microbial purity & viability assays</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-agri-pale text-agri-primary border border-agri-accent/30 shadow-2xs shrink-0">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-agri-accent" />
            </div>
            <div>
              <strong className="text-xs sm:text-sm font-extrabold text-slate-900 block">FCO 1985 Certified</strong>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Schedule I Government Standards</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 rounded-xl bg-agri-pale text-agri-primary border border-agri-accent/30 shadow-2xs shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-agri-accent" />
            </div>
            <div>
              <strong className="text-xs sm:text-sm font-extrabold text-slate-900 block">ISO 9001:2015</strong>
              <span className="text-[11px] sm:text-xs text-slate-500 font-medium">International Quality Management</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
