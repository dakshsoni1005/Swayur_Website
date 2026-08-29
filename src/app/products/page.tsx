import React from 'react';
import { Metadata } from 'next';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { ProductFilter } from '@/components/products/ProductFilter';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';
import { ProductsAutoScroll } from '@/components/products/ProductsAutoScroll';

export const metadata: Metadata = {
  title: seoData.products.metaTitle,
  description: seoData.products.metaDescription,
};

export default function ProductsPage() {
  return (
    <div>
      <ProductsAutoScroll />

      <PageHeader
        badge="KHETRAPAL RANGE"
        title="The KshetraPal Range"
        subtitle="KshetraPal — meaning &ldquo;Protector of the Field&rdquo; — is Swayur Agrotech's flagship product brand. Each product in the KshetraPal range is developed using advanced microbial science, formulated for Indian agro-climatic conditions, and manufactured to FCO 1985 quality standards."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <div className="py-12 sm:py-16 space-y-16">
        <Container>
          <div id="explore-products" className="scroll-mt-24 sm:scroll-mt-28">
            <SectionHeading
              badge="All 6 Products"
              title="Explore Biofertilizers & Biopesticides"
              subtitle="Filter by category or click on any product card for detailed technical composition, dosage, application methods, and crop compatibility."
            />
            <ProductFilter products={productsData} />
          </div>
        </Container>

        <CTASection
          title="Need Product Advisory for Your Farm?"
          subtitle="Talk to our agronomy team to select the right biological inputs for your crop and soil situation."
        />
      </div>
    </div>
  );
}
