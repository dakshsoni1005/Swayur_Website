'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Layers,
  Leaf,
  FlaskConical,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';
import { aboutStorySteps } from '@/data/about';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

export const CircularStoryJourney: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-rotate active step every 4 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % aboutStorySteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getStageIcon = (stepNumber: string) => {
    switch (stepNumber) {
      case '01':
        return <Layers className="w-5 h-5 text-emerald-600" />;
      case '02':
        return <Leaf className="w-5 h-5 text-emerald-600" />;
      case '03':
        return <FlaskConical className="w-5 h-5 text-emerald-600" />;
      case '04':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case '05':
        return <HeartHandshake className="w-5 h-5 text-emerald-600" />;
      default:
        return <Leaf className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-b from-slate-50/50 via-emerald-50/20 to-slate-50/50 overflow-hidden border-y border-slate-200">
      {/* Soft Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/80 text-emerald-900 text-xs font-black uppercase tracking-wider border border-emerald-300/60 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            OUR STORY
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            The Journey Begins in the Soil
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal leading-relaxed">
            Swayur Agrotech LLP was founded to address decades of soil degradation in Indian farming using beneficial microbiology.
          </p>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP VIEW: ELEGANT 5-STAGE CIRCULAR INFOGRAPHIC (lg+)     */}
        {/* ============================================================ */}
        <div
          className="hidden lg:block relative max-w-5xl mx-auto h-[620px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Concentric Dashed Ring (580px Diameter) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#15803d"
                strokeWidth="0.8"
                strokeDasharray="2 1.5"
                strokeOpacity="0.4"
                className="animate-[spin_60s_linear_infinite] origin-[50px_50px]"
              />
            </svg>
          </div>

          {/* Central Swayur Brand Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-56 h-56 rounded-full bg-white border-2 border-emerald-500/30 shadow-xl flex flex-col items-center justify-center p-5 text-center space-y-2 group transition-all duration-300 hover:scale-105 hover:border-emerald-500/60">
            <Image
              src="/images/brand/swayur-agrotech-official-logo.png"
              alt="Swayur Agrotech Official Logo"
              width={280}
              height={160}
              priority
              className="h-18 w-auto object-contain"
            />
            <p className="text-[11px] text-slate-500 italic font-serif leading-tight">
              &ldquo;{companyData.tagline}&rdquo;
            </p>
          </div>

          {/* 5 Stage Cards Positioned Clockwise Around Ring */}
          {aboutStorySteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;

            // Clockwise positions on r=290px circle orbit
            const positions = [
              'top-0 left-1/2 -translate-x-1/2',
              'top-[14%] right-[0%]',
              'bottom-[6%] right-[2%]',
              'bottom-[6%] left-[2%]',
              'top-[14%] left-[0%]',
            ];

            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  'absolute z-30 w-72 p-5 rounded-2xl bg-white border transition-all duration-300 cursor-pointer group shadow-sm',
                  positions[idx],
                  isActive
                    ? 'border-2 border-emerald-500 ring-4 ring-emerald-100 shadow-xl -translate-y-1'
                    : 'border-slate-200/90 hover:border-emerald-400/60 hover:shadow-md'
                )}
              >
                {/* Background Watermark Number */}
                <span className="absolute bottom-2 right-3 text-5xl font-black text-slate-100 select-none pointer-events-none">
                  {step.step}
                </span>

                {/* Overlapping Stage Badge */}
                <div className="absolute -top-3.5 left-5 z-20">
                  <span
                    className={cn(
                      'px-3 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase shadow-2xs border',
                      isActive
                        ? 'bg-emerald-700 text-white border-emerald-700'
                        : 'bg-[#0d472a] text-white border-[#0d472a]'
                    )}
                  >
                    Stage {step.step}
                  </span>
                </div>

                <div className="space-y-2 pt-1 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200/70 shrink-0">
                      {getStageIcon(step.step)}
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-800 group-hover:text-emerald-700 transition-colors leading-snug">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Vertical Timeline View */}
        <div className="lg:hidden space-y-6 max-w-xl mx-auto">
          <div className="p-6 rounded-2xl bg-white border-2 border-emerald-500/30 shadow-md text-center space-y-2">
            <Image
              src="/images/brand/swayur-agrotech-official-logo.png"
              alt="Swayur Agrotech Official Logo"
              width={280}
              height={160}
              priority
              className="h-16 w-auto object-contain mx-auto"
            />
            <p className="text-xs text-slate-500 italic font-serif">
              &ldquo;{companyData.tagline}&rdquo;
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-4 border-l-2 border-emerald-500/40">
            {aboutStorySteps.map((step, idx) => {
              const isActive = idx === activeStepIndex;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={cn(
                    'relative p-4 rounded-xl bg-white border transition-all duration-200 cursor-pointer shadow-2xs',
                    isActive
                      ? 'border-2 border-emerald-500 ring-2 ring-emerald-100 shadow-md'
                      : 'border-slate-200 hover:border-emerald-400/50'
                  )}
                >
                  <div className="absolute -left-[31px] sm:-left-[39px] top-5 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 flex items-center justify-center shadow-2xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-white px-2.5 py-0.5 rounded-full bg-[#0d472a]">
                        Stage {step.step}
                      </span>
                      <div className="p-1 rounded-md bg-emerald-50 text-emerald-700">
                        {getStageIcon(step.step)}
                      </div>
                    </div>

                    <h4 className="text-sm font-extrabold text-slate-800">{step.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
