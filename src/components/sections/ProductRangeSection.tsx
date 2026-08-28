import React from 'react';
import { productsData } from '@/data/products';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProductGrid } from '@/components/products/ProductGrid';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const ProductRangeSection: React.FC = () => {
  return (
    <section className="bg-agri-pale/30 py-16 sm:py-24 border-b border-agri-border/60">
      <Container>
        <SectionHeading
          badge="KHETRAPAL RANGE"
          title="The KshetraPal Range"
          subtitle="Six powerful biological inputs — one complete soil-health ecosystem. Each product is formulated by expert microbiologists and backed by field trial data from Indian farms."
        />
        <ProductGrid products={productsData} />

        <div className="mt-12 text-center">
          <Button href="/products" size="lg" variant="outline" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Explore All 6 Product Specifications & Dosage Guides
          </Button>
        </div>
      </Container>
    </section>
  );
};
