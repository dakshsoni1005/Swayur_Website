'use client';

import React from 'react';
import {
  Microscope,
  FlaskConical,
  ShieldCheck,
  Sprout,
  PackageCheck,
  Sparkles,
  RotateCw,
} from 'lucide-react';
import { scienceProcessSteps } from '@/data/science';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

export const PipelineSection: React.FC = () => {
  const getStageIcon = (stepNumber: string, className = 'w-5 h-5') => {
    switch (stepNumber) {
      case '01':
        return <Microscope className={className} />;
      case '02':
        return <FlaskConical className={className} />;
      case '03':
        return <ShieldCheck className={className} />;
      case '04':
        return <Sprout className={className} />;
      case '05':
        return <PackageCheck className={className} />;
      default:
        return <Microscope className={className} />;
    }
  };

  // Gear colors matching the 3-gear interlocking diagram in reference image
  const gearStyles = [
    {
      gearBg: 'from-amber-400 to-amber-600',
      strokeColor: '#d97706',
      badgeBg: 'bg-amber-500 text-white',
      accentColor: 'text-amber-600',
      spinDirection: 'animate-[spin_25s_linear_infinite]',
      arrowColor: '#f59e0b',
    },
    {
      gearBg: 'from-slate-400 to-slate-600',
      strokeColor: '#64748b',
      badgeBg: 'bg-slate-600 text-white',
      accentColor: 'text-slate-600',
      spinDirection: 'animate-[spin_25s_linear_infinite_reverse]',
      arrowColor: '#94a3b8',
    },
    {
      gearBg: 'from-orange-500 to-amber-700',
      strokeColor: '#ea580c',
      badgeBg: 'bg-orange-600 text-white',
      accentColor: 'text-orange-600',
      spinDirection: 'animate-[spin_25s_linear_infinite]',
      arrowColor: '#f97316',
    },
    {
      gearBg: 'from-emerald-500 to-emerald-700',
      strokeColor: '#059669',
      badgeBg: 'bg-emerald-600 text-white',
      accentColor: 'text-emerald-600',
      spinDirection: 'animate-[spin_25s_linear_infinite_reverse]',
      arrowColor: '#10b981',
    },
    {
      gearBg: 'from-emerald-800 to-green-950',
      strokeColor: '#064e3b',
      badgeBg: 'bg-[#0d472a] text-white',
      accentColor: 'text-emerald-900',
      spinDirection: 'animate-[spin_25s_linear_infinite]',
      arrowColor: '#047857',
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-agri-pale/30 to-white overflow-hidden border-y border-agri-border/60">
      {/* Background Soft Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-amber-500/5 via-emerald-500/5 to-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agri-pale text-agri-primary text-xs font-extrabold uppercase tracking-wider border border-agri-accent/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
            R&D INTERLOCKING PROCESS PIPELINE
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-agri-dark tracking-tight leading-tight">
            How Science Moves From Microbe to Farm
          </h2>

          <p className="text-sm sm:text-base text-agri-muted leading-relaxed max-w-2xl mx-auto font-normal">
            Every Swayur Agrotech product undergoes an interlocking 5-stage scientific development lifecycle before commercial release.
          </p>
        </div>

        {/* Interlocking Gear Process Flow Layout */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {scienceProcessSteps.map((step, idx) => {
            const style = gearStyles[idx % gearStyles.length];

            return (
              <div
                key={step.stepNumber}
                className={cn(
                  'flex flex-col md:flex-row items-center gap-6 p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group',
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                )}
              >
                {/* Gear Mechanism Visual Container */}
                <div className="relative shrink-0 flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44">
                  {/* Outer Curved Rotation Arrow Path */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                      <defs>
                        <marker
                          id={`gearArrow-${idx}`}
                          viewBox="0 0 10 10"
                          refX="5"
                          refY="5"
                          markerWidth="5"
                          markerHeight="5"
                          orient="auto-start-reverse"
                        >
                          <path d="M 0 0 L 10 5 L 0 10 z" fill={style.arrowColor} />
                        </marker>
                      </defs>

                      {/* Curved Rotation Arrow Arc */}
                      <path
                        d="M 15 50 A 35 35 0 1 1 85 50"
                        fill="none"
                        stroke={style.arrowColor}
                        strokeWidth="2.5"
                        strokeDasharray="4 2"
                        markerEnd={`url(#gearArrow-${idx})`}
                        className={style.spinDirection}
                      />
                    </svg>
                  </div>

                  {/* Rotating Tooth Gear SVG */}
                  <div className={cn('relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center', style.spinDirection)}>
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <defs>
                        <linearGradient id={`gearGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={style.strokeColor} stopOpacity="0.9" />
                          <stop offset="100%" stopColor={style.arrowColor} stopOpacity="0.75" />
                        </linearGradient>
                      </defs>

                      {/* 8-Tooth Gear Path */}
                      <path
                        fill={`url(#gearGrad-${idx})`}
                        d="M 50 10 
                           L 55 10 L 57 18 C 61 19 65 21 68 24 L 75 20 L 79 24 L 75 32 C 78 35 80 39 81 43 L 89 45 L 89 50 
                           L 89 55 L 81 57 C 80 61 78 65 75 68 L 79 75 L 75 79 L 68 75 C 65 78 61 80 57 81 L 55 89 L 50 89 
                           L 45 89 L 43 81 C 39 80 35 78 32 75 L 25 79 L 21 75 L 25 68 C 22 65 20 61 19 57 L 11 55 L 11 50 
                           L 11 45 L 19 43 C 20 39 22 35 25 32 L 21 24 L 25 20 L 32 24 C 35 21 39 19 43 18 L 45 10 Z"
                      />
                      <circle cx="50" cy="50" r="22" fill="#ffffff" className="drop-shadow-inner" />
                    </svg>
                  </div>

                  {/* Stationary Center Badge with Icon & Stage Number */}
                  <div className="absolute z-20 flex flex-col items-center justify-center text-center">
                    <div className={cn('p-2 rounded-xl shadow-md border border-white/40', style.badgeBg)}>
                      {getStageIcon(step.stepNumber, 'w-5 h-5 text-white')}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-900 mt-1">
                      {step.stepNumber}
                    </span>
                  </div>
                </div>

                {/* Stage Text Rectangle Content */}
                <div className="grow space-y-2 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    <span className={cn('px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-2xs', style.badgeBg)}>
                      Stage {step.stepNumber}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-slate-500 uppercase tracking-wider">
                      <RotateCw className="w-3 h-3 text-emerald-600 animate-spin" />
                      Interlocking R&D Process
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
