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
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';
import { aboutStorySteps } from '@/data/about';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';
import { cn } from '@/lib/utils';

export const CircularStoryJourney: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-rotate stages every 5 seconds unless hovered/interacted
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % aboutStorySteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeStep = aboutStorySteps[activeStepIndex];

  const getStageIcon = (stepNumber: string, className = 'w-5 h-5') => {
    switch (stepNumber) {
      case '01':
        return <Layers className={className} />;
      case '02':
        return <Leaf className={className} />;
      case '03':
        return <FlaskConical className={className} />;
      case '04':
        return <ShieldCheck className={className} />;
      case '05':
        return <HeartHandshake className={className} />;
      default:
        return <Leaf className={className} />;
    }
  };

  // Clockwise positions on orbit ring (380px diameter, r=160px)
  // Angles: 01 (270° top), 02 (342° top-right), 03 (54° bottom-right), 04 (126° bottom-left), 05 (198° top-left)
  const nodePositions = [
    'top-0 left-1/2 -translate-x-1/2',
    'top-[18%] right-[2%]',
    'bottom-[12%] right-[5%]',
    'bottom-[12%] left-[5%]',
    'top-[18%] left-[2%]',
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-agri-pale/30 to-white overflow-hidden border-y border-agri-border/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-emerald-500/5 via-amber-500/5 to-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-agri-pale text-agri-primary text-xs font-extrabold uppercase tracking-wider border border-agri-accent/20 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
            OUR STORY & MILESTONES
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark tracking-tight">
            The Journey Begins in the Soil
          </h2>

          <p className="text-base sm:text-lg text-agri-muted leading-relaxed max-w-2xl mx-auto font-normal">
            Select any stage on the orbit wheel below to explore how Swayur Agrotech evolved to revitalize Indian agriculture.
          </p>
        </div>

        {/* 2 Column Layout: Interactive Orbit Wheel (Left) + Stage Spotlight Card (Right) */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Column 1: Interactive Orbit Wheel */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              {/* Rotating Dashed Orbit Ring */}
              <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#15803d" stopOpacity="0.6" />
                      <stop offset="50%" stopColor="#d97706" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#15803d" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#orbitGrad)"
                    strokeWidth="1.2"
                    strokeDasharray="3 2"
                    className="animate-[spin_55s_linear_infinite] origin-[50px_50px]"
                  />
                </svg>
              </div>

              {/* Central Swayur Agrotech Brand Logo Card */}
              <div className="z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-white border-2 border-agri-accent/40 shadow-xl flex flex-col items-center justify-center p-4 text-center space-y-1.5 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/brand/swayur-agrotech-official-logo.png"
                  alt="Swayur Agrotech Official Logo"
                  width={300}
                  height={180}
                  priority
                  className="h-16 sm:h-20 w-auto object-contain"
                />
                <p className="text-[10px] text-agri-muted italic font-serif leading-tight">
                  &ldquo;{companyData.tagline}&rdquo;
                </p>
              </div>

              {/* 5 Interactive Circular Stage Nodes on the Orbit */}
              {aboutStorySteps.map((step, idx) => {
                const isActive = idx === activeStepIndex;

                return (
                  <button
                    key={step.step}
                    type="button"
                    onClick={() => setActiveStepIndex(idx)}
                    className={cn(
                      'absolute z-20 flex items-center gap-2 p-2.5 sm:p-3 rounded-2xl border transition-all duration-300 shadow-md group cursor-pointer focus:outline-none',
                      nodePositions[idx],
                      isActive
                        ? 'bg-agri-dark text-white border-agri-accent scale-110 shadow-xl ring-4 ring-agri-pale'
                        : 'bg-white text-agri-dark border-agri-border hover:border-agri-accent/60 hover:scale-105'
                    )}
                  >
                    <div
                      className={cn(
                        'w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs transition-colors',
                        isActive ? 'bg-agri-accent text-white' : 'bg-agri-pale text-agri-primary'
                      )}
                    >
                      {step.step}
                    </div>
                    <span
                      className={cn(
                        'text-xs font-extrabold pr-1 hidden sm:inline-block max-w-[110px] truncate text-left',
                        isActive ? 'text-white' : 'text-agri-dark group-hover:text-agri-primary'
                      )}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Column 2: Active Stage Spotlight Detail Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative p-7 sm:p-9 rounded-3xl bg-white border-2 border-agri-accent/30 shadow-xl space-y-6">
              {/* Card Header: Stage Pill & Navigation Buttons */}
              <div className="flex items-center justify-between gap-4 border-b border-agri-border/60 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-agri-pale text-agri-primary border border-agri-accent/20">
                    {getStageIcon(activeStep.step, 'w-6 h-6 text-agri-accent')}
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-agri-primary block">
                      Stage {activeStep.step} of 05
                    </span>
                    <strong className="text-xs text-agri-muted font-bold">
                      Milestone Phase
                    </strong>
                  </div>
                </div>

                {/* Next / Previous Controls */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveStepIndex(
                        (prev) => (prev - 1 + aboutStorySteps.length) % aboutStorySteps.length
                      )
                    }
                    aria-label="Previous stage"
                    className="p-2 rounded-xl bg-agri-pale/80 hover:bg-agri-primary hover:text-white text-agri-dark transition-colors border border-agri-border"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveStepIndex((prev) => (prev + 1) % aboutStorySteps.length)
                    }
                    aria-label="Next stage"
                    className="p-2 rounded-xl bg-agri-pale/80 hover:bg-agri-primary hover:text-white text-agri-dark transition-colors border border-agri-border"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-agri-dark tracking-tight">
                  {activeStep.title}
                </h3>
                <p className="text-sm sm:text-base text-agri-muted leading-relaxed font-normal">
                  {activeStep.description}
                </p>
              </div>

              {/* Highlight Badges */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-agri-pale text-agri-dark text-xs font-extrabold border border-agri-accent/20">
                  <CheckCircle2 className="w-4 h-4 text-agri-accent" />
                  <span>Science-Backed Milestone</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-agri-pale text-agri-dark text-xs font-extrabold border border-agri-accent/20">
                  <CheckCircle2 className="w-4 h-4 text-agri-accent" />
                  <span>Swayur Biological Initiative</span>
                </div>
              </div>

              {/* Step Progress Bar */}
              <div className="pt-4 border-t border-agri-border/60">
                <div className="flex items-center justify-between text-xs font-bold text-agri-muted mb-2">
                  <span>Journey Progress</span>
                  <span className="text-agri-primary">{((activeStepIndex + 1) / 5) * 100}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-agri-pale overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-agri-primary to-agri-accent transition-all duration-500 rounded-full"
                    style={{ width: `${((activeStepIndex + 1) / 5) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
