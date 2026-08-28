import React from 'react';
import { Metadata } from 'next';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { ProductGrid } from '@/components/products/ProductGrid';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: seoData.products.metaTitle,
  description: seoData.products.metaDescription,
};

export default function ProductsPage() {
  return (
    <div>
      <PageHeader
        badge="KshetraPal Product Range"
        title="Biofertilizers & Biopesticides for Sustainable Agriculture"
        subtitle="Six scientifically formulated, FCO 1985 compliant biological products engineered for Indian crops and soil conditions."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <div className="py-12 sm:py-16 space-y-16">
        <Container>
          <SectionHeading
            badge="All 6 Products"
            title="Explore the Complete KshetraPal Range"
            subtitle="Click on any product card to view composition, dosage, application instructions, and crop suitability."
          />
          <ProductGrid products={productsData} />
        </Container>

        <CTASection />
      </div>
    </div>
  );
}
