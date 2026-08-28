import React from 'react';
import { Container } from '@/components/layout/Container';

export const ImpactStats: React.FC = () => {
  return (
    <section className="py-12 bg-agri-dark text-white border-y border-agri-primary/30">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-agri-light">
              6
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              KshetraPal Products
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-agri-light">
              5 × 10⁸
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              CFU / ml Viability
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-agri-light">
              FCO 1985
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              Schedule I Compliant
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-agri-light">
              100%
            </div>
            <div className="text-xs sm:text-sm text-slate-300 font-medium">
              Residue-Free Solutions
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
