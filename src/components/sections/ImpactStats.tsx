import React from 'react';
import { Sprout, Microscope, ShieldCheck, Leaf, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const ImpactStats: React.FC = () => {
  const stats = [
    {
      icon: <Sprout className="w-6 h-6 text-agri-accent" />,
      value: '6',
      unit: 'Formulations',
      label: 'KshetraPal Products',
      highlight: 'Biofertilizers & Biopesticides',
    },
    {
      icon: <Microscope className="w-6 h-6 text-amber-600" />,
      value: '5 × 10⁸',
      unit: 'CFU / ml',
      label: 'Viable Microbial Count',
      highlight: 'Guaranteed Potency',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-agri-accent" />,
      value: 'FCO 1985',
      unit: 'Schedule I',
      label: 'Regulatory Compliance',
      highlight: 'ISO 9001:2015 Certified',
    },
    {
      icon: <Leaf className="w-6 h-6 text-agri-accent" />,
      value: '100%',
      unit: 'Residue-Free',
      label: 'Biological Safety',
      highlight: 'Safe for Soil & Water',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-agri-pale/30 to-white border-y border-agri-border/60">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group p-6 rounded-2xl bg-white border border-agri-border/80 hover:border-agri-accent/40 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 space-y-4"
            >
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-agri-pale text-agri-primary border border-agri-accent/20 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  {stat.icon}
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-agri-pale text-[11px] font-bold uppercase tracking-wider text-agri-primary border border-agri-accent/20">
                  <Sparkles className="w-3 h-3 text-agri-accent" />
                  {stat.highlight}
                </span>
              </div>

              {/* Main Metric Value */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-agri-dark tracking-tight">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-xs font-bold text-agri-accent uppercase tracking-wider">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-agri-muted">
                  {stat.label}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="h-1 w-12 rounded-full bg-agri-accent/30 group-hover:w-full group-hover:bg-agri-accent transition-all duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
