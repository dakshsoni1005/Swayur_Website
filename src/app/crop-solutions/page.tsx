import React from 'react';
import { Metadata } from 'next';
import { Check, Star } from 'lucide-react';
import { cropMatrixData, productCombosData } from '@/data/crops';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CropSelector } from '@/components/crops/CropSelector';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: seoData['crop-solutions']?.metaTitle || 'Crop Solutions & Recommendation Matrix | Swayur Agrotech',
  description:
    seoData['crop-solutions']?.metaDescription ||
    'Crop-specific biofertilizer and biopesticide recommendations for cotton, cereals, pulses, vegetables, fruits, and plantation crops.',
};

export default function CropSolutionsPage() {
  const productsList = [
    'Bio-NPK',
    'Bio-ZSB',
    'Mycorrhiza',
    'Trichoderma',
    'Beauveria',
    'Pseudomonas',
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. Hero Header */}
      <PageHeader
        badge="Crop Advisory System"
        title="The Right Product for Every Crop"
        subtitle="Biological inputs work best when matched precisely to crop requirements and growth stage. Select your crop below for customized product recommendations, dosage guides, and proven product packs."
        breadcrumbs={[{ label: 'Crop Solutions' }]}
      />

      {/* 2. Interactive Crop Selector & Recommendation Engine */}
      <Container>
        <CropSelector />
      </Container>

      {/* 3. Proven Product Packs Grid */}
      <section className="bg-agri-pale/30 py-16 sm:py-24 border-y border-agri-border/60">
        <Container>
          <SectionHeading
            badge="Synergistic Combinations"
            title="Proven Biological Product Packs"
            subtitle="For maximum field results, combine complementary KshetraPal products recommended by our agronomy team."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCombosData.map((combo, idx) => (
              <Card key={idx} className="flex flex-col justify-between space-y-4 bg-white border-agri-accent/30 shadow-xs">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-agri-dark">{combo.title}</h3>
                  <p className="text-xs sm:text-sm text-agri-muted leading-relaxed font-normal">
                    {combo.description}
                  </p>
                  <div className="pt-2">
                    <span className="text-xs font-bold text-agri-dark block mb-1.5">
                      Included Formulations:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {combo.products.map((p, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 rounded bg-agri-pale text-agri-primary text-xs font-semibold border border-agri-accent/20"
                        >
                          🌱 {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-agri-border/60">
                  <WhatsAppButton text="Inquire for Pack" size="sm" className="w-full" />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Full 11-Crop Matrix Reference Table */}
      <Container>
        <SectionHeading
          badge="Complete Crop Matrix"
          title="All-Crop Suitability Reference Table"
          subtitle="Comprehensive overview showing product compatibility across all 11 major Indian crop groups."
        />

        {/* Desktop Table View (lg+) */}
        <div className="hidden lg:block overflow-hidden border border-agri-border rounded-2xl bg-white shadow-xs">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-agri-dark text-white font-bold uppercase tracking-wider text-xs">
                <th className="py-4 px-6">Crop Group</th>
                <th className="py-4 px-2 text-center">Bio-NPK</th>
                <th className="py-4 px-2 text-center">Bio-ZSB</th>
                <th className="py-4 px-2 text-center">Mycorrhiza</th>
                <th className="py-4 px-2 text-center">Trichoderma</th>
                <th className="py-4 px-2 text-center">Beauveria</th>
                <th className="py-4 px-2 text-center">Pseudomonas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-agri-border/60">
              {cropMatrixData.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-agri-pale/20 hover:bg-agri-pale/50'}
                >
                  <td className="py-3.5 px-6 font-bold text-agri-dark">
                    {row.cropGroup}
                    {row.recommendedHighlights && (
                      <span className="block text-[11px] text-agri-primary font-semibold mt-0.5">
                        ★ {row.recommendedHighlights.join(', ')}
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <Check className="w-5 h-5 text-agri-accent mx-auto" />
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <Check className="w-5 h-5 text-agri-accent mx-auto" />
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <Check className="w-5 h-5 text-agri-accent mx-auto" />
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <Check className="w-5 h-5 text-agri-accent mx-auto" />
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <Check className="w-5 h-5 text-agri-accent mx-auto" />
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <Check className="w-5 h-5 text-agri-accent mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile / Tablet Stacked Cards View (<lg) */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cropMatrixData.map((row, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-agri-border shadow-2xs space-y-3"
            >
              <div className="space-y-1">
                <h4 className="text-base font-extrabold text-agri-dark">
                  🌾 {row.cropGroup}
                </h4>
                {row.recommendedHighlights && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                    Highly Recommended: {row.recommendedHighlights.join(', ')}
                  </span>
                )}
              </div>

              <div className="pt-2 border-t border-agri-border/60">
                <span className="text-[11px] font-bold uppercase tracking-wider text-agri-muted block mb-2">
                  Suitable Formulations:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {productsList.map((pName, pIdx) => {
                    const isHighlyRec = row.recommendedHighlights?.some((h) =>
                      h.toLowerCase().includes(pName.toLowerCase())
                    );

                    return (
                      <span
                        key={pIdx}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold ${
                          isHighlyRec
                            ? 'bg-amber-100/80 text-amber-900 border border-amber-300 font-extrabold'
                            : 'bg-agri-pale text-agri-primary border border-agri-accent/20'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 text-agri-accent shrink-0" />
                        <span>{pName}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* 5. Final CTA */}
      <CTASection
        title="Get Crop-Specific Advisory for Your Farm"
        subtitle="Talk to our agronomy advisory team in Anand, Gujarat to get dosage schedules and product combinations tailored to your land."
      />
    </div>
  );
}
