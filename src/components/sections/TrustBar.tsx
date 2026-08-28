import React from 'react';
import { Microscope, Leaf, Sprout, Recycle, CheckCircle2, Award } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const TrustBar: React.FC = () => {
  const trustItems = [
    { icon: <Microscope className="w-4 h-4 text-agri-accent" />, text: 'Science-Backed Formulations' },
    { icon: <Leaf className="w-4 h-4 text-agri-accent" />, text: '100% Biological Inputs' },
    { icon: <Sprout className="w-4 h-4 text-agri-accent" />, text: 'Farmer-Tested & Proven' },
    { icon: <Recycle className="w-4 h-4 text-agri-accent" />, text: 'Eco-Friendly & Sustainable' },
    { icon: <CheckCircle2 className="w-4 h-4 text-agri-accent" />, text: 'FCO 1985 Compliant' },
    { icon: <Award className="w-4 h-4 text-agri-accent" />, text: 'ISO 9001:2015 Certified' },
  ];

  return (
    <section className="bg-white border-b border-agri-border py-4 sm:py-6 shadow-2xs">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-agri-pale/40 border border-agri-border/60 transition-all hover:bg-agri-pale hover:border-agri-accent/30"
            >
              <div className="p-1.5 rounded-lg bg-white shadow-2xs shrink-0">{item.icon}</div>
              <span className="text-xs sm:text-xs font-bold text-agri-dark leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
