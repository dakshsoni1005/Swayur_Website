'use client';

import React, { useEffect, useState } from 'react';
import { Container } from '@/components/layout/Container';

export const ImpactStats: React.FC = () => {
  const stats = [
    { value: '6+', label: 'Biological Products', detail: 'FCO compliant formulations' },
    { value: '500+', label: 'Acres Covered', detail: 'Across Indian farms' },
    { value: '10+', label: 'Crops Supported', detail: 'Cereals, pulses, cotton & fruits' },
    { value: '100%', label: 'Natural Inputs', detail: 'Zero chemical residue' },
  ];

  return (
    <section className="bg-agri-dark text-white py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-agri-accent/10 rounded-full blur-3xl pointer-events-none" />
      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 divide-agri-primary/40">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center text-center p-4 space-y-1 ${
                idx > 0 ? 'pt-4 sm:pt-4' : ''
              }`}
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-agri-light tracking-tight">
                {stat.value}
              </span>
              <span className="text-base sm:text-lg font-bold text-white tracking-tight mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-300 font-medium">{stat.detail}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
