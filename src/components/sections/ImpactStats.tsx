import React from 'react';
import { Sprout, Microscope, ShieldCheck, Leaf, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const ImpactStats: React.FC = () => {
  const stats = [
    {
      icon: <Sprout className="w-6 h-6 text-emerald-400" />,
      value: '6',
      unit: 'Formulations',
      label: 'KshetraPal Products',
      highlight: 'Biofertilizers & Biopesticides',
    },
    {
      icon: <Microscope className="w-6 h-6 text-amber-400" />,
      value: '5 × 10⁸',
      unit: 'CFU / ml',
      label: 'Viable Microbial Count',
      highlight: 'Guaranteed Potency',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      value: 'FCO 1985',
      unit: 'Schedule I',
      label: 'Regulatory Compliance',
      highlight: 'ISO 9001:2015 Certified',
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-400" />,
      value: '100%',
      unit: 'Residue-Free',
      label: 'Biological Safety',
      highlight: 'Safe for Soil & Water',
    },
  ];

  return (
    <section className="relative py-14 sm:py-18 bg-gradient-to-r from-[#03120D] via-[#09291F] to-[#03120D] text-white overflow-hidden border-y border-emerald-800/40 shadow-2xl">
      {/* Background Radial Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05] pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group p-6 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 hover:bg-white/[0.08] transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              {/* Top Card Flex Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300">
                  {stat.icon}
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  {stat.highlight}
                </span>
              </div>

              {/* Main Metric Value */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-100 to-emerald-300">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-xs font-bold text-emerald-400 tracking-wider">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-300 tracking-wide">
                  {stat.label}
                </p>
              </div>

              {/* Subtle Bottom Accent Line */}
              <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-emerald-500/0 via-emerald-500/40 to-emerald-500/0 rounded-full group-hover:via-emerald-400 transition-all duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
