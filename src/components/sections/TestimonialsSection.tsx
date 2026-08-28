import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

export const TestimonialsSection: React.FC = () => {
  const farmerPillarData = [
    {
      title: 'Restoring Soil Health',
      quote:
        'Swayur Agrotech biofertilizers activate natural soil microbial communities, restoring nutrient cycling and soil organic matter.',
      badge: 'Soil Microbiome',
    },
    {
      title: 'Targeted Biological Protection',
      quote:
        'KshetraPal biopesticides provide effective biological control against soil-borne pathogens and crop insect pests.',
      badge: 'Biological Control',
    },
    {
      title: 'Sustaining Farmer Livelihoods',
      quote:
        'By reducing dependence on expensive chemical inputs, our biological inputs help farmers lower input costs while improving harvest quality.',
      badge: 'Farmer Value',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          badge="OUR COMMITMENT"
          title="Designed for Soil, Crops & Farmers"
          subtitle="How KshetraPal biological inputs deliver value across Indian farming systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {farmerPillarData.map((pillar, idx) => (
            <Card
              key={idx}
              className="flex flex-col justify-between space-y-6 p-8 bg-agri-pale/30 border-agri-border hover:border-agri-accent/40 transition-colors shadow-2xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-agri-primary px-3 py-1 rounded bg-white border border-agri-accent/20">
                    {pillar.badge}
                  </span>
                  <Quote className="w-8 h-8 text-agri-accent/40" />
                </div>
                <h3 className="text-xl font-bold text-agri-dark">{pillar.title}</h3>
                <p className="text-sm text-agri-muted leading-relaxed font-normal">
                  &ldquo;{pillar.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-1 text-amber-500 pt-2 border-t border-agri-border/60">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
