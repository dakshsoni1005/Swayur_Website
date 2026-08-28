import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'After using KshetraPal Bio-NPK Consortia on my soybean crop, I noticed stronger root growth and better nodulation. My yield improved and I reduced DAP usage by 40%. Excellent product with good results.',
      name: 'Rameshbhai Patel',
      role: 'Progressive Farmer',
      location: 'Anand District',
      crop: 'Soybean',
    },
    {
      quote:
        'Trichoderma viride saved my tomato crop from root rot this kharif season. I was skeptical about biological products, but this genuinely works. I will use it every season now.',
      name: 'Sureshbhai Desai',
      role: 'Vegetable Farmer',
      location: 'Kheda',
      crop: 'Tomato',
    },
    {
      quote:
        'Mycorrhiza treatment at transplanting gave my banana crop much stronger root structure. The plants are visibly healthier. I recommend every fruit farmer try it.',
      name: 'Kantibhai Prajapati',
      role: 'Banana Grower',
      location: 'Anand',
      crop: 'Banana',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <SectionHeading
          badge="Real Field Results"
          title="What Farmers Say"
          subtitle="Feedback from Indian farmers using KshetraPal biofertilizers and biopesticides on their fields."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <Card key={idx} className="flex flex-col justify-between p-8 bg-white border-agri-border space-y-6">
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-agri-accent/30" />

                <p className="text-sm sm:text-base text-agri-muted leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-agri-border/60">
                <h4 className="text-base font-bold text-agri-dark">{item.name}</h4>
                <p className="text-xs text-agri-primary font-medium mt-0.5">
                  {item.role} • {item.location} ({item.crop})
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
