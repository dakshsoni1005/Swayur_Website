import React from 'react';
import { Metadata } from 'next';
import { Sprout, Check, Star } from 'lucide-react';
import { cropMatrixData, productCombosData } from '@/data/crops';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: seoData['crop-solutions'].metaTitle,
  description: seoData['crop-solutions'].metaDescription,
};

export default function CropSolutionsPage() {
  return (
    <div>
      <PageHeader
        badge="Crop Advisory Matrix"
        title="The Right Product for Every Crop"
        subtitle="Biological inputs work best when matched precisely to crop requirements and growth stage. Discover crop-specific recommendations and target combinations."
        breadcrumbs={[{ label: 'Crop Solutions' }]}
      />

      <div className="py-12 sm:py-16 space-y-16">
        {/* Recommendation Matrix */}
        <Container>
          <SectionHeading
            badge="Product Recommendation Matrix"
            title="Crop Group Suitability Guide"
            subtitle="KshetraPal products are formulated to benefit all major Indian crop groups. Highlighted items denote specialized efficacy."
          />
          <div className="overflow-x-auto border border-agri-border rounded-xl bg-white shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-agri-dark text-white font-bold uppercase tracking-wider">
                  <th className="py-4 px-4 sm:px-6">Crop Group</th>
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
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-agri-pale/20 hover:bg-agri-pale/50'}>
                    <td className="py-3 px-4 sm:px-6 font-bold text-agri-dark">
                      {row.cropGroup}
                      {row.recommendedHighlights && (
                        <span className="block text-[11px] text-agri-primary font-semibold mt-0.5">
                          ★ {row.recommendedHighlights.join(', ')}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Check className="w-5 h-5 text-agri-accent mx-auto" />
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Check className="w-5 h-5 text-agri-accent mx-auto" />
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Check className="w-5 h-5 text-agri-accent mx-auto" />
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Check className="w-5 h-5 text-agri-accent mx-auto" />
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Check className="w-5 h-5 text-agri-accent mx-auto" />
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Check className="w-5 h-5 text-agri-accent mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>

        {/* Proven Product Combos */}
        <section className="bg-agri-pale/40 py-12 border-y border-agri-border">
          <Container>
            <SectionHeading
              badge="Synergistic Combinations"
              title="Proven Biological Product Packs"
              subtitle="For best results, combine complementary KshetraPal products recommended by our agronomy team."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCombosData.map((combo, idx) => (
                <Card key={idx} className="flex flex-col justify-between space-y-4 bg-white border-agri-accent/30">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-agri-dark">{combo.title}</h3>
                    <p className="text-xs sm:text-sm text-agri-muted leading-relaxed">{combo.description}</p>
                    <div className="pt-2">
                      <span className="text-xs font-bold text-agri-dark block mb-1">Products Included:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {combo.products.map((p, pIdx) => (
                          <span key={pIdx} className="px-2.5 py-1 rounded bg-agri-pale text-agri-primary text-xs font-semibold border border-agri-accent/20">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pt-2">
                    <WhatsAppButton text="Inquire for Pack" size="sm" className="w-full" />
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <CTASection />
      </div>
    </div>
  );
}
