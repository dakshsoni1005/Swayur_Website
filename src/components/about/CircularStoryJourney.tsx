'use client';

import React, { useState, useEffect } from 'react';
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

  // Cyclic auto-rotation every 4 seconds unless hovered
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
        return <Layers className="w-5 h-5 text-agri-accent" />;
      case '02':
        return <Leaf className="w-5 h-5 text-agri-accent" />;
      case '03':
        return <FlaskConical className="w-5 h-5 text-agri-accent" />;
      case '04':
        return <ShieldCheck className="w-5 h-5 text-agri-accent" />;
      case '05':
        return <HeartHandshake className="w-5 h-5 text-agri-accent" />;
      default:
        return <Leaf className="w-5 h-5 text-agri-accent" />;
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-agri-pale/30 to-white overflow-hidden border-y border-agri-border/60">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agri-pale text-agri-primary text-xs font-extrabold uppercase tracking-wider border border-agri-accent/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
            OUR STORY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark tracking-tight leading-tight">
            The Journey Begins in the Soil
          </h2>

          <p className="text-base sm:text-lg text-agri-muted leading-relaxed max-w-2xl mx-auto font-normal">
            Swayur Agrotech LLP was founded by agricultural scientists and agri-entrepreneurs to address decades of soil degradation in Indian farming.
          </p>

          <div className="flex items-center justify-center gap-2 pt-1 text-agri-accent/60">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-agri-accent/40 rounded-full" />
            <span className="text-xs">🌱</span>
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-agri-accent/40 rounded-full" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP VIEW: CIRCULAR JOURNEY LAYOUT (lg+)                 */}
        {/* ============================================================ */}
        <div
          className="hidden lg:block relative max-w-5xl mx-auto min-h-[640px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* SVG Connecting Circular Ring */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 1000 640">
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2E8B57" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2E8B57" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <circle
              cx="500"
              cy="320"
              r="240"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="2.5"
              strokeDasharray="8 6"
            />
          </svg>

          {/* Central Swayur Brand Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-64 h-64 rounded-full bg-white border-2 border-agri-accent/40 shadow-xl flex flex-col items-center justify-center p-6 text-center space-y-2 group transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-agri-pale text-agri-primary border border-agri-accent/30 flex items-center justify-center font-extrabold text-2xl shadow-inner group-hover:scale-110 transition-transform">
              🌱
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-agri-dark tracking-tight">SWAYUR</h3>
              <span className="text-xs font-bold uppercase tracking-wider text-agri-primary block">
                AGROTECH LLP
              </span>
            </div>
            <p className="text-[11px] text-agri-muted italic font-serif leading-tight">
              &ldquo;{companyData.tagline}&rdquo;
            </p>
          </div>

          {/* 5 Circular Stage Cards Positioned Clockwise */}
          {aboutStorySteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;

            // Clockwise radial positions around (500, 320) with radius 240
            // Index 0 (Top / 12 o'clock): top-0 left-1/2 -translate-x-1/2
            // Index 1 (Top-Right / 2:30): top-[18%] right-[8%]
            // Index 2 (Bottom-Right / 4:30): bottom-[12%] right-[10%]
            // Index 3 (Bottom-Left / 7:30): bottom-[12%] left-[10%]
            // Index 4 (Top-Left / 9:30): top-[18%] left-[8%]
            const positions = [
              'top-0 left-1/2 -translate-x-1/2',
              'top-[16%] right-[6%]',
              'bottom-[8%] right-[8%]',
              'bottom-[8%] left-[8%]',
              'top-[16%] left-[6%]',
            ];

            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  'absolute z-30 w-72 p-5 rounded-3xl bg-white/95 backdrop-blur-sm border transition-all duration-300 cursor-pointer group shadow-sm',
                  positions[idx],
                  isActive
                    ? 'border-agri-accent ring-4 ring-agri-pale -translate-y-2 shadow-xl bg-gradient-to-br from-white via-agri-pale/40 to-white'
                    : 'border-agri-border/80 hover:border-agri-accent/40 hover:-translate-y-1'
                )}
              >
                {/* Background Watermark Number */}
                <span className="absolute -bottom-3 -right-2 text-6xl font-black text-agri-pale/80 select-none pointer-events-none">
                  {step.step}
                </span>

                {/* Overlapping Stage Number Badge */}
                <div className="absolute -top-3.5 left-5 z-20">
                  <span
                    className={cn(
                      'px-3 py-0.5 rounded-full text-xs font-black tracking-wider uppercase shadow-2xs border',
                      isActive
                        ? 'bg-agri-accent text-white border-agri-accent'
                        : 'bg-agri-dark text-white border-agri-dark'
                    )}
                  >
                    Stage {step.step}
                  </span>
                </div>

                <div className="space-y-2 pt-2 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-agri-pale text-agri-primary border border-agri-accent/20 shrink-0">
                      {getStageIcon(step.step)}
                    </div>
                    <h4 className="text-base font-extrabold text-agri-dark group-hover:text-agri-primary transition-colors leading-snug">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-xs text-agri-muted leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* MOBILE & TABLET VIEW: VERTICAL TIMELINE LAYOUT (<lg)        */}
        {/* ============================================================ */}
        <div className="lg:hidden space-y-8 max-w-xl mx-auto">
          {/* Top Central Swayur Badge */}
          <div className="p-6 rounded-3xl bg-white border-2 border-agri-accent/30 shadow-md text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-agri-pale text-agri-primary flex items-center justify-center font-extrabold text-xl mx-auto border border-agri-accent/20">
              🌱
            </div>
            <h3 className="text-xl font-extrabold text-agri-dark">SWAYUR AGROTECH LLP</h3>
            <p className="text-xs text-agri-muted italic font-serif">
              &ldquo;{companyData.tagline}&rdquo;
            </p>
          </div>

          {/* Vertical Timeline Stages */}
          <div className="relative pl-6 sm:pl-8 space-y-6 border-l-2 border-agri-accent/40">
            {aboutStorySteps.map((step, idx) => {
              const isActive = idx === activeStepIndex;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={cn(
                    'relative p-5 rounded-2xl bg-white border transition-all duration-200 cursor-pointer shadow-2xs',
                    isActive
                      ? 'border-agri-accent ring-2 ring-agri-pale shadow-md bg-gradient-to-br from-white via-agri-pale/30 to-white'
                      : 'border-agri-border hover:border-agri-accent/30'
                  )}
                >
                  {/* Timeline Node Bullet */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full bg-white border-2 border-agri-accent flex items-center justify-center shadow-2xs">
                    <div className="w-2 h-2 rounded-full bg-agri-accent" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-black uppercase tracking-wider text-agri-primary px-2.5 py-0.5 rounded-full bg-agri-pale border border-agri-accent/20">
                        Stage {step.step}
                      </span>
                      <div className="p-1.5 rounded-lg bg-agri-pale text-agri-primary">
                        {getStageIcon(step.step)}
                      </div>
                    </div>

                    <h4 className="text-base font-extrabold text-agri-dark">{step.title}</h4>
                    <p className="text-xs text-agri-muted leading-relaxed font-normal">
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
