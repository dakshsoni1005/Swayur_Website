import React from 'react';
import { Microscope, Leaf, Sprout, Recycle, CheckCircle2, Award } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const TrustBar: React.FC = () => {
  const trustItems = [
    { icon: <Microscope className="w-4.5 h-4.5 text-agri-accent" />, text: 'Science-Backed Formulations' },
    { icon: <Leaf className="w-4.5 h-4.5 text-agri-accent" />, text: '100% Biological Inputs' },
    { icon: <Sprout className="w-4.5 h-4.5 text-agri-accent" />, text: 'Farmer-Tested & Proven' },
    { icon: <Recycle className="w-4.5 h-4.5 text-agri-accent" />, text: 'Eco-Friendly & Sustainable' },
    { icon: <CheckCircle2 className="w-4.5 h-4.5 text-agri-accent" />, text: 'FCO 1985 Schedule I' },
    { icon: <Award className="w-4.5 h-4.5 text-agri-accent" />, text: 'ISO 9001:2015 Certified' },
  ];

  return (
    <section className="bg-gradient-to-r from-agri-pale/80 via-white to-agri-pale/80 border-b border-agri-border/80 py-4 sm:py-5 shadow-2xs">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-agri-border/80 shadow-2xs hover:border-agri-accent/40 hover:shadow-xs transition-all duration-200"
            >
              <div className="p-1.5 rounded-lg bg-agri-pale text-agri-primary shrink-0">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-agri-dark leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
