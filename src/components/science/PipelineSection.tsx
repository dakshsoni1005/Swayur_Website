'use client';

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
import { cn } from '@/lib/utils';

export const PipelineSection: React.FC = () => {
  const getStageIcon = (stepNumber: string) => {
    switch (stepNumber) {
      case '01':
        return <Microscope className="w-5 h-5 text-emerald-700" />;
      case '02':
        return <FlaskConical className="w-5 h-5 text-emerald-700" />;
      case '03':
        return <ShieldCheck className="w-5 h-5 text-emerald-700" />;
      case '04':
        return <Sprout className="w-5 h-5 text-emerald-700" />;
      case '05':
        return <PackageCheck className="w-5 h-5 text-emerald-700" />;
      default:
        return <Microscope className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden border-y border-slate-200">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-black uppercase tracking-wider border border-emerald-300/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            R&D DEVELOPMENT PIPELINE
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            How Science Moves From Microbe to Farm
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Every Swayur Agrotech product undergoes a rigorous 5-stage scientific development lifecycle before commercial release.
          </p>
        </div>

        {/* 5-Stage Horizontal Pipeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Pipeline Line behind cards (Desktop) */}
          <div className="hidden lg:block absolute top-[54px] left-[6%] right-[6%] h-1 bg-gradient-to-r from-emerald-600 via-amber-500 to-emerald-600 z-0 rounded-full">
            {/* Animated Pulse Beam */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-40 animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          {/* 5 Stage Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {scienceProcessSteps.map((step, idx) => {
              const isLast = idx === scienceProcessSteps.length - 1;

              return (
                <div
                  key={step.stepNumber}
                  className="relative rounded-2xl bg-white border border-slate-200 p-6 shadow-xs hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0d472a] opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Watermark Number */}
                  <span className="absolute bottom-2 right-2 text-6xl font-black text-slate-100 select-none pointer-events-none group-hover:text-emerald-50 transition-colors">
                    {step.stepNumber}
                  </span>

                  <div className="space-y-4 relative z-10">
                    {/* Stage Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0d472a] text-white shadow-2xs">
                        Stage {step.stepNumber}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/70 group-hover:bg-emerald-700 group-hover:text-white transition-colors duration-300 shrink-0">
                        {getStageIcon(step.stepNumber)}
                      </div>
                    </div>

                    {/* Stage Title */}
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      {step.title}
                    </h3>

                    {/* Stage Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Arrow (Desktop) */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white border border-slate-300 shadow-xs items-center justify-center text-emerald-700 group-hover:border-emerald-500 group-hover:translate-x-0.5 transition-all">
                      <ChevronRight className="w-4 h-4" />
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
