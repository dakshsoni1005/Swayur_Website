import React from 'react';
import { Microscope, Sprout, RefreshCw } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

export const WhySwayurSection: React.FC = () => {
  const pillars = [
    {
      icon: <Microscope className="w-7 h-7 text-agri-accent" />,
      title: 'Science First',
      desc: 'Our products are developed by experienced microbiologists with deep expertise in soil biology, microbial fermentation, and plant nutrition — not generic resellers.',
    },
    {
      icon: <Sprout className="w-7 h-7 text-agri-accent" />,
      title: 'Farmer Trusted',
      desc: 'We don\'t just sell products. We provide crop-specific application support, dosage guidance, and field advisory — ensuring every farmer sees real results on their land.',
    },
    {
      icon: <RefreshCw className="w-7 h-7 text-agri-accent" />,
      title: 'Soil Regeneration',
      desc: 'Every Swayur product is designed with a long-term vision: to rebuild India\'s degraded soils, restore microbial life, and create self-sustaining farms for future generations.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Why Choose Swayur"
          title="The Swayur Difference"
          subtitle="Combining microbiological research, farmer advisory, and soil regeneration to build sustainable agriculture."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <Card key={idx} className="space-y-4 p-8 bg-white border-agri-border hover:border-agri-accent/40 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-agri-pale text-agri-primary flex items-center justify-center shadow-2xs">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-agri-dark tracking-tight">{pillar.title}</h3>
              <p className="text-sm sm:text-base text-agri-muted leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
