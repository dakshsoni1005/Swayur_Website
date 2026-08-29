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
    <section className="relative py-8 sm:py-12 bg-gradient-to-b from-white via-agri-pale/30 to-white overflow-hidden border-y border-agri-border/60">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Compact Header */}
        <div className="max-w-3xl mx-auto text-center space-y-1.5 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-agri-pale text-agri-primary text-[11px] font-extrabold uppercase tracking-wider border border-agri-accent/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
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
        {/* DESKTOP VIEW: 5-CARD CIRCULAR LAYOUT WITH ANIMATED PROCESS   */}
        {/* ============================================================ */}
        <div
          className="hidden lg:block relative max-w-5xl mx-auto h-[580px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Concentric Spinning Dashed Orbit Ring (580px Diameter) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] pointer-events-none z-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#15803d" stopOpacity="0.7" />
                  <stop offset="50%" stopColor="#d97706" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#15803d" stopOpacity="0.7" />
                </linearGradient>

                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Orbit Ring */}
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="1.2"
                strokeDasharray="2.5 1.8"
                className="animate-[spin_40s_linear_infinite] origin-[50px_50px]"
              />

              {/* Active Animated Process Pulse Arc */}
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray="20 70"
                strokeLinecap="round"
                filter="url(#glow)"
                className="animate-[spin_6s_linear_infinite] origin-[50px_50px]"
              />
            </svg>
          </div>

          {/* Central Swayur Brand Circle with Official Logo & Pulsing Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-48 h-48 rounded-full bg-white border-2 border-emerald-500/50 shadow-2xl flex flex-col items-center justify-center p-4 text-center space-y-1.5 group transition-all duration-300 ring-4 ring-emerald-500/20">
            <Image
              src="/images/brand/swayur-agrotech-official-logo.png"
              alt="Swayur Agrotech Official Logo"
              width={280}
              height={160}
              priority
              className="h-16 sm:h-18 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <p className="text-[10px] text-agri-muted italic font-serif leading-tight">
              &ldquo;{companyData.tagline}&rdquo;
            </p>
          </div>

          {/* 5 Stage Cards Positioned Clockwise Around Circle */}
          {aboutStorySteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;

            // Clockwise radial positions overlapping ~40% on top of dashed ring
            const positions = [
              'top-0 left-1/2 -translate-x-1/2',
              'top-[15%] right-[2%]',
              'bottom-[6%] right-[4%]',
              'bottom-[6%] left-[4%]',
              'top-[15%] left-[2%]',
            ];

            return (
              <div
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  'absolute z-30 w-64 p-4 rounded-2xl bg-white backdrop-blur-xs border transition-all duration-300 cursor-pointer group shadow-md',
                  positions[idx],
                  isActive
                    ? 'border-2 border-emerald-500 ring-4 ring-emerald-400/40 -translate-y-1.5 shadow-2xl bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/50 scale-[1.03]'
                    : 'border-agri-border/80 hover:border-emerald-500/40 hover:-translate-y-0.5'
                )}
              >
                {/* Background Watermark Number */}
                <span
                  className={cn(
                    'absolute -bottom-2 -right-1 text-5xl font-black select-none pointer-events-none transition-colors',
                    isActive ? 'text-emerald-500/20' : 'text-agri-pale/80'
                  )}
                >
                  {step.step}
                </span>

                {/* Overlapping Stage Badge */}
                <div className="absolute -top-3 left-4 z-20 flex items-center gap-1.5">
                  <span
                    className={cn(
                      'px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase shadow-2xs border transition-all',
                      isActive
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md animate-pulse'
                        : 'bg-agri-dark text-white border-agri-dark'
                    )}
                  >
                    Stage {step.step}
                  </span>
                  {isActive && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500 text-white text-[9px] font-black uppercase tracking-wider shadow-xs">
                      Active
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 pt-1 relative z-10">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        'p-1.5 rounded-lg border shrink-0 transition-colors',
                        isActive
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                          : 'bg-agri-pale text-agri-primary border-agri-accent/20'
                      )}
                    >
                      {React.cloneElement(getStageIcon(step.step), {
                        className: cn('w-4 h-4', isActive ? 'text-white' : 'text-agri-accent'),
                      })}
                    </div>
                    <h4
                      className={cn(
                        'text-xs sm:text-sm font-extrabold tracking-tight leading-snug transition-colors',
                        isActive ? 'text-emerald-950 font-black' : 'text-agri-dark group-hover:text-agri-primary'
                      )}
                    >
                      {step.title}
                    </h4>
                  </div>

                  <p
                    className={cn(
                      'text-[11px] leading-relaxed font-normal transition-colors',
                      isActive ? 'text-emerald-900 font-medium' : 'text-agri-muted'
                    )}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop Process Step Navigator Bar */}
        <div className="hidden lg:flex items-center justify-center gap-2 pt-4">
          {aboutStorySteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;

            return (
              <button
                key={step.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer',
                  isActive
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-white text-agri-muted hover:text-agri-dark border-agri-border hover:border-emerald-500/30'
                )}
              >
                <span className={cn('w-2 h-2 rounded-full', isActive ? 'bg-white animate-ping' : 'bg-agri-muted/50')} />
                <span>Stage {step.step}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile & Tablet Vertical Timeline View */}
        <div className="lg:hidden space-y-6 max-w-xl mx-auto">
          <div className="p-5 rounded-2xl bg-white border-2 border-agri-accent/30 shadow-sm text-center space-y-2">
            <Image
              src="/images/brand/swayur-agrotech-official-logo.png"
              alt="Swayur Agrotech Official Logo"
              width={280}
              height={160}
              priority
              className="h-14 w-auto object-contain mx-auto"
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
