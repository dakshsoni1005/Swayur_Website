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
        return <Layers className="w-4 h-4 text-agri-accent" />;
      case '02':
        return <Leaf className="w-4 h-4 text-agri-accent" />;
      case '03':
        return <FlaskConical className="w-4 h-4 text-agri-accent" />;
      case '04':
        return <ShieldCheck className="w-4 h-4 text-agri-accent" />;
      case '05':
        return <HeartHandshake className="w-4 h-4 text-agri-accent" />;
      default:
        return <Leaf className="w-4 h-4 text-agri-accent" />;
    }
  };

  return (
    <section className="relative py-10 sm:py-14 bg-gradient-to-b from-white via-agri-pale/30 to-white overflow-hidden border-y border-agri-border/60">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Compact Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-pale text-agri-primary text-[11px] font-extrabold uppercase tracking-wider border border-agri-accent/20 shadow-2xs">
            <Sparkles className="w-3 h-3 text-agri-accent" />
            OUR STORY
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
            The Journey Begins in the Soil
          </h2>

          <p className="text-xs sm:text-sm text-agri-muted max-w-xl mx-auto font-normal">
            Swayur Agrotech LLP was founded to address soil degradation in Indian farming using beneficial microbiology.
          </p>
        </div>

        {/* ============================================================ */}
        {/* DESKTOP VIEW: COMPACT FIT CIRCULAR JOURNEY LAYOUT (lg+)       */}
        {/* ============================================================ */}
        <div
          className="hidden lg:block relative max-w-5xl mx-auto h-[540px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* SVG Connecting Circular Ring Passing Through All 5 Cards */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 920 540">
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#15803d" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#d97706" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#15803d" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <circle
              cx="460"
              cy="270"
              r="225"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="2.5"
              strokeDasharray="7 5"
              className="animate-[spin_45s_linear_infinite] origin-[460px_270px]"
            />
          </svg>

          {/* Central Swayur Brand Circle with Official Logo Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-52 h-52 rounded-full bg-white border-2 border-agri-accent/40 shadow-xl flex flex-col items-center justify-center p-4 text-center space-y-1.5 group transition-all duration-300">
            <Image
              src="/images/brand/swayur-agrotech-official-logo.png"
              alt="Swayur Agrotech Official Logo"
              width={300}
              height={180}
              priority
              className="h-20 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <p className="text-[10px] text-agri-muted italic font-serif leading-tight">
              &ldquo;{companyData.tagline}&rdquo;
            </p>
          </div>

          {/* 5 Circular Stage Cards Positioned Clockwise along Ring Orbit */}
          {aboutStorySteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;

            // Radial positions along r=225 ring orbit
            const positions = [
              'top-0 left-1/2 -translate-x-1/2',
              'top-[16%] right-[1%]',
              'bottom-[5%] right-[3%]',
              'bottom-[5%] left-[3%]',
              'top-[16%] left-[1%]',
            ];

            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  'absolute z-30 w-64 p-4 rounded-2xl bg-white/95 backdrop-blur-sm border transition-all duration-300 cursor-pointer group shadow-xs',
                  positions[idx],
                  isActive
                    ? 'border-agri-accent ring-3 ring-agri-pale -translate-y-1 shadow-lg bg-gradient-to-br from-white via-agri-pale/40 to-white'
                    : 'border-agri-border/80 hover:border-agri-accent/40 hover:-translate-y-0.5'
                )}
              >
                {/* Background Watermark Number */}
                <span className="absolute -bottom-2 -right-1 text-5xl font-black text-agri-pale/80 select-none pointer-events-none">
                  {step.step}
                </span>

                {/* Overlapping Stage Number Badge */}
                <div className="absolute -top-3 left-4 z-20">
                  <span
                    className={cn(
                      'px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase shadow-2xs border',
                      isActive
                        ? 'bg-agri-accent text-white border-agri-accent'
                        : 'bg-agri-dark text-white border-agri-dark'
                    )}
                  >
                    Stage {step.step}
                  </span>
                </div>

                <div className="space-y-1.5 pt-1 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-agri-pale text-agri-primary border border-agri-accent/20 shrink-0">
                      {getStageIcon(step.step)}
                    </div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-agri-dark group-hover:text-agri-primary transition-colors leading-snug">
                      {step.title}
                    </h4>
                  </div>

                  <p className="text-[11px] text-agri-muted leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Vertical Layout */}
        <div className="lg:hidden space-y-6 max-w-xl mx-auto">
          <div className="p-5 rounded-2xl bg-white border-2 border-agri-accent/30 shadow-sm text-center space-y-2">
            <Image
              src="/images/brand/swayur-agrotech-official-logo.png"
              alt="Swayur Agrotech Official Logo"
              width={300}
              height={180}
              priority
              className="h-16 w-auto object-contain mx-auto"
            />
            <p className="text-xs text-agri-muted italic font-serif">
              &ldquo;{companyData.tagline}&rdquo;
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-4 border-l-2 border-agri-accent/40">
            {aboutStorySteps.map((step, idx) => {
              const isActive = idx === activeStepIndex;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={cn(
                    'relative p-4 rounded-xl bg-white border transition-all duration-200 cursor-pointer shadow-2xs',
                    isActive
                      ? 'border-agri-accent ring-2 ring-agri-pale shadow-sm bg-gradient-to-br from-white via-agri-pale/30 to-white'
                      : 'border-agri-border hover:border-agri-accent/30'
                  )}
                >
                  <div className="absolute -left-[31px] sm:-left-[39px] top-5 w-4 h-4 rounded-full bg-white border-2 border-agri-accent flex items-center justify-center shadow-2xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-agri-accent" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-agri-primary px-2 py-0.5 rounded-full bg-agri-pale border border-agri-accent/20">
                        Stage {step.step}
                      </span>
                      <div className="p-1 rounded-md bg-agri-pale text-agri-primary">
                        {getStageIcon(step.step)}
                      </div>
                    </div>

                    <h4 className="text-sm font-extrabold text-agri-dark">{step.title}</h4>
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
