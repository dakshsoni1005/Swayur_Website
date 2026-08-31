import React from 'react';
import { Sprout, Microscope, ShieldCheck, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const ImpactStats: React.FC = () => {
  const stats = [
    {
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      value: '6',
      unit: 'Formulations',
      label: 'KshetraPal Range',
      description: 'Biofertilizers & Biopesticides',
      badge: 'Biological Inputs',
    },
    {
      icon: <Microscope className="w-6 h-6 text-emerald-600" />,
      value: '5 × 10⁸',
      unit: 'CFU / ml',
      label: 'Microbial Potency',
      description: 'Guaranteed Colony Count',
      badge: 'High Potency',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      value: 'FCO 1985',
      unit: 'Schedule I',
      label: 'Regulatory Standard',
      description: 'Govt. Quality Compliance',
      badge: 'ISO Certified',
    },
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      value: '100%',
      unit: 'Residue-Free',
      label: 'Biological Safety',
      description: 'Safe for Soil, Water & Crops',
      badge: 'Eco Safe',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-emerald-50/30 to-white border-y border-emerald-900/10 relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-xs border border-emerald-900/10 hover:border-emerald-500/40 shadow-xs hover:shadow-xl hover:shadow-emerald-950/5 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Header: Icon & Pill Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                    {React.cloneElement(stat.icon, {
                      className: 'w-6 h-6 transition-colors duration-300 group-hover:text-white',
                    })}
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-extrabold uppercase tracking-wider border border-emerald-200/60 shrink-0">
                    <Sparkles className="w-3 h-3 text-emerald-500" />
                    {stat.badge}
                  </span>
                </div>

                {/* Main Metric & Unit */}
                <div className="pt-2 space-y-1">
                  <div className="flex flex-wrap items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                      {stat.value}
                    </span>
                    {stat.unit && (
                      <span className="text-xs font-black text-emerald-600 uppercase tracking-wide">
                        {stat.unit}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-extrabold text-slate-800">
                    {stat.label}
                  </h3>
                  <p className="text-xs font-medium text-slate-500">
                    {stat.description}
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-emerald-700">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Verified Standard
                </span>
                <span className="text-slate-400 group-hover:text-emerald-600 transition-colors font-mono">
                  0{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
