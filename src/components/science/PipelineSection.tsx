import React from 'react';
import {
  Microscope,
  FlaskConical,
  ShieldCheck,
  Sprout,
  PackageCheck,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { scienceProcessSteps } from '@/data/science';
import { Container } from '@/components/layout/Container';

export const PipelineSection: React.FC = () => {
  const getStageIcon = (stepNumber: string) => {
    switch (stepNumber) {
      case '01':
        return <Microscope className="w-6 h-6 text-agri-accent group-hover:scale-110 transition-transform duration-300" />;
      case '02':
        return <FlaskConical className="w-6 h-6 text-agri-accent group-hover:scale-110 transition-transform duration-300" />;
      case '03':
        return <ShieldCheck className="w-6 h-6 text-agri-accent group-hover:scale-110 transition-transform duration-300" />;
      case '04':
        return <Sprout className="w-6 h-6 text-agri-accent group-hover:scale-110 transition-transform duration-300" />;
      case '05':
        return <PackageCheck className="w-6 h-6 text-agri-accent group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <Microscope className="w-6 h-6 text-agri-accent" />;
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-agri-pale/30 to-white overflow-hidden border-y border-agri-border/60">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agri-pale text-agri-primary text-xs font-extrabold uppercase tracking-wider border border-agri-accent/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
            R&D Development Pipeline
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark tracking-tight leading-tight">
            How Science Moves From Microbe to Farm
          </h2>

          <p className="text-base sm:text-lg text-agri-muted leading-relaxed max-w-2xl mx-auto font-normal">
            Every Swayur Agrotech product undergoes a rigorous 5-stage development lifecycle before commercial release.
          </p>
        </div>

        {/* Desktop Pipeline Container */}
        <div className="relative">
          {/* Connecting Pipeline Line behind cards (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-1 bg-gradient-to-r from-agri-accent/20 via-agri-accent to-agri-accent/20 z-0 rounded-full">
            {/* Animated Light Pulse traveling across the pipeline */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-400 to-transparent w-32 animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          {/* 5 Stage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {scienceProcessSteps.map((step, idx) => {
              const isLast = idx === scienceProcessSteps.length - 1;

              return (
                <div
                  key={step.stepNumber}
                  className="relative group rounded-3xl bg-white/95 backdrop-blur-sm border border-agri-border/80 hover:border-agri-accent/40 p-6 shadow-2xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle Background Watermark Number */}
                  <span className="absolute -bottom-4 -right-2 text-7xl font-black text-agri-pale/80 select-none pointer-events-none group-hover:text-agri-pale transition-colors duration-300">
                    {step.stepNumber}
                  </span>

                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-agri-primary via-agri-accent to-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-4 relative z-10">
                    {/* Header Row: Stage Indicator & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-agri-pale text-agri-primary border border-agri-accent/20 shadow-2xs">
                        Stage {step.stepNumber}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-agri-pale text-agri-primary flex items-center justify-center border border-agri-accent/20 group-hover:bg-agri-primary group-hover:text-white transition-colors duration-300">
                        {getStageIcon(step.stepNumber)}
                      </div>
                    </div>

                    {/* Stage Title */}
                    <h3 className="text-lg font-extrabold text-agri-dark group-hover:text-agri-primary transition-colors leading-snug">
                      {step.title}
                    </h3>

                    {/* Stage Description */}
                    <p className="text-xs text-agri-muted leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Desktop Right Connection Arrow */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-agri-border shadow-xs items-center justify-center text-agri-accent group-hover:border-agri-accent group-hover:translate-x-1 transition-all">
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
