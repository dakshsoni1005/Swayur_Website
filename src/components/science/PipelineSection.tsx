'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  FlaskConical,
  Microscope,
  Sprout,
  PackageCheck,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { scienceProcessSteps } from '@/data/science';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

export const PipelineSection: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-progress stages every 4 seconds unless hovered/scrolled
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % scienceProcessSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scientific Smart Art Stage Icons
  const getStageSmartArtIcon = (stepNumber: string, isActive: boolean, isCompleted: boolean) => {
    const iconClass = cn(
      'w-6 h-6 transition-all duration-300',
      isActive
        ? 'text-emerald-700 scale-110'
        : isCompleted
        ? 'text-emerald-600'
        : 'text-slate-400'
    );

    switch (stepNumber) {
      case '01':
        // Stage 01: Microbe / Petri Dish
        return (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <circle cx="9" cy="9" r="1.5" fill="currentColor" />
            <circle cx="15" cy="11" r="2" fill="currentColor" />
            <circle cx="11" cy="15" r="1.5" fill="currentColor" />
          </svg>
        );
      case '02':
        // Stage 02: Laboratory Flask / Formulation
        return <FlaskConical className={iconClass} />;
      case '03':
        // Stage 03: Microscope / CFU Testing
        return <Microscope className={iconClass} />;
      case '04':
        // Stage 04: Crop Field / Plant Root
        return <Sprout className={iconClass} />;
      case '05':
        // Stage 05: Factory + Product Package
        return <PackageCheck className={iconClass} />;
      default:
        return <Microscope className={iconClass} />;
    }
  };

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white overflow-hidden border-y border-slate-200">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header (Preserved Content) */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-black uppercase tracking-wider border border-emerald-300/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            R&D DEVELOPMENT PIPELINE
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            How Science Moves From Microbe to Farm
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Every Swayur Agrotech product undergoes a rigorous 5-stage development lifecycle before commercial release.
          </p>
        </div>

        {/* DESKTOP SMART ART: Continuous Horizontal Journey (lg+) */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Continuous Connecting Line Background */}
          <div className="absolute top-[68px] left-[8%] right-[8%] h-1 bg-slate-200 rounded-full z-0">
            {/* Animated Progress Line Filling from Stage 01 to Stage 05 */}
            <div
              className="h-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-amber-500 rounded-full transition-all duration-700 ease-out shadow-xs"
              style={{ width: `${(activeStageIndex / 4) * 100}%` }}
            />
          </div>

          {/* 5 Stage Horizontal Smart Art Cards */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {scienceProcessSteps.map((step, idx) => {
              const isActive = idx === activeStageIndex;
              const isCompleted = idx < activeStageIndex;
              const isFuture = idx > activeStageIndex;
              const isLast = idx === scienceProcessSteps.length - 1;

              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStageIndex(idx)}
                  className={cn(
                    'relative rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden group shadow-2xs',
                    isActive
                      ? 'bg-gradient-to-b from-white via-emerald-50/40 to-white border-2 border-emerald-600 ring-4 ring-emerald-300/40 shadow-xl scale-105 -translate-y-1'
                      : isCompleted
                      ? 'bg-white border-emerald-300/80 hover:border-emerald-500 shadow-sm'
                      : 'bg-white/80 border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-300'
                  )}
                >
                  {/* Top Accent Line */}
                  <div
                    className={cn(
                      'absolute top-0 left-0 right-0 h-1 transition-colors',
                      isActive
                        ? 'bg-emerald-600'
                        : isCompleted
                        ? 'bg-emerald-500'
                        : 'bg-slate-200'
                    )}
                  />

                  {/* Stage Number & Completed Check Badge */}
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span
                      className={cn(
                        'px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-2xs border transition-colors',
                        isActive
                          ? 'bg-[#0d472a] text-white border-[#0d472a]'
                          : isCompleted
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-slate-100 text-slate-600 border-slate-200'
                      )}
                    >
                      Stage {step.stepNumber}
                    </span>

                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <span className="text-[10px] font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    )}
                  </div>

                  {/* Smart Art Icon Circle Container */}
                  <div className="flex justify-center my-3 relative z-10">
                    <div
                      className={cn(
                        'w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-xs',
                        isActive
                          ? 'bg-emerald-100/90 border-emerald-400 ring-2 ring-emerald-200 shadow-md'
                          : isCompleted
                          ? 'bg-emerald-50 border-emerald-200'
                          : 'bg-slate-50 border-slate-200'
                      )}
                    >
                      {getStageSmartArtIcon(step.stepNumber, isActive, isCompleted)}
                    </div>
                  </div>

                  {/* Stage Title & Description */}
                  <div className="space-y-2 text-center pt-1 relative z-10">
                    <h3
                      className={cn(
                        'text-sm font-extrabold tracking-tight leading-snug transition-colors',
                        isActive
                          ? 'text-emerald-950 font-black'
                          : isCompleted
                          ? 'text-slate-900'
                          : 'text-slate-600'
                      )}
                    >
                      {step.title}
                    </h3>

                    <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Arrow between cards */}
                  {!isLast && (
                    <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-white border border-slate-200 shadow-2xs items-center justify-center text-slate-400">
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE SMART ART: Vertical Timeline Layout (<lg) */}
        <div className="lg:hidden max-w-xl mx-auto relative pl-8 space-y-6 border-l-2 border-emerald-500/40">
          {scienceProcessSteps.map((step, idx) => {
            const isActive = idx === activeStageIndex;
            const isCompleted = idx < activeStageIndex;

            return (
              <div
                key={step.stepNumber}
                onClick={() => setActiveStageIndex(idx)}
                className={cn(
                  'relative p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer shadow-2xs',
                  isActive
                    ? 'border-2 border-emerald-600 ring-2 ring-emerald-100 shadow-md bg-gradient-to-br from-white via-emerald-50/30 to-white'
                    : isCompleted
                    ? 'border-emerald-300'
                    : 'border-slate-200 opacity-80'
                )}
              >
                {/* Vertical Timeline Stage Marker Dot */}
                <div
                  className={cn(
                    'absolute -left-[33px] top-6 w-5 h-5 rounded-full bg-white border-2 flex items-center justify-center shadow-xs transition-colors',
                    isActive
                      ? 'border-emerald-600 ring-2 ring-emerald-200'
                      : isCompleted
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-slate-300'
                  )}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  ) : (
                    <div className={cn('w-1.5 h-1.5 rounded-full', isActive ? 'bg-emerald-600' : 'bg-slate-400')} />
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        'px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider',
                        isActive
                          ? 'bg-[#0d472a] text-white'
                          : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      )}
                    >
                      Stage {step.stepNumber}
                    </span>

                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                      {getStageSmartArtIcon(step.stepNumber, isActive, isCompleted)}
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900">{step.title}</h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Downward Direction Arrow between mobile stages */}
                {idx < scienceProcessSteps.length - 1 && (
                  <div className="flex justify-center -mb-9 pt-3">
                    <ChevronDown className="w-4 h-4 text-emerald-500 animate-bounce" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
