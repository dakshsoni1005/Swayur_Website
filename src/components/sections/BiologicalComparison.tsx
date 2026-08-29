import React from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export const BiologicalComparison: React.FC = () => {
  const comparisonItems = [
    {
      label: 'Soil Microbiome',
      chemical: 'Soil microbes depleted over time',
      biological: 'Soil microbial communities restored and strengthened',
    },
    {
      label: 'Fertilizer Requirements',
      chemical: 'Increasing fertilizer doses needed each season',
      biological: 'Nutrient-use efficiency improves season after season',
    },
    {
      label: 'Phosphorus Efficiency',
      chemical: 'Phosphorus fixation — up to 80% locked/wasted',
      biological: 'Biological solubilization makes P plant-available',
    },
    {
      label: 'Crop Quality & Residue',
      chemical: 'Chemical residues in soil and produce',
      biological: 'Residue-free, export-quality crop output',
    },
    {
      label: 'Environmental Impact',
      chemical: 'Environmental pollution — water bodies affected',
      biological: 'Safe for soil, water, and ecosystems',
    },
    {
      label: 'Long-term Input Cost',
      chemical: 'Higher input cost every year',
      biological: 'Reduced chemical cost over 2–3 seasons',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-agri-pale/40 via-white to-agri-pale/40 py-12 sm:py-20 lg:py-24 border-y border-agri-border">
      <Container>
        <SectionHeading
          badge="Education & Soil Health"
          title="The Case for Biologicals"
          subtitle="India loses ₹70,000+ crore annually to soil degradation. Over 60% of agricultural soils in India show declining organic carbon levels. Biological inputs restore the living soil community."
        />

        {/* Side-by-side comparison matrix */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Chemical Only Column */}
          <div className="p-5 sm:p-8 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-amber-200/80">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-black text-amber-950">
                  Chemical-Only Farming
                </h3>
                <p className="text-xs font-bold text-amber-800">Diminishing returns over time</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">{item.label}</strong>
                    <span className="text-slate-600 leading-relaxed font-normal">{item.chemical}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Biological + Integrated Column */}
          <div className="p-5 sm:p-8 rounded-2xl bg-emerald-50/80 border-2 border-emerald-600/40 space-y-6 shadow-sm">
            <div className="flex items-center gap-3 pb-4 border-b border-emerald-200">
              <div className="w-10 h-10 rounded-xl bg-[#0d472a] text-white flex items-center justify-center font-bold shrink-0 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-black text-slate-900">
                  Biological + Integrated Approach
                </h3>
                <p className="text-xs font-bold text-emerald-800">Sustainable & Regenerative</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-800">
              {comparisonItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <div>
                    <strong className="block text-slate-900 font-bold">{item.label}</strong>
                    <span className="text-slate-600 leading-relaxed font-normal">{item.biological}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Button href="/our-science" size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Explore Our Microbiology Science
          </Button>
        </div>
      </Container>
    </section>
  );
};
