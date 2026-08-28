import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { ProductSpecificationTable } from '@/components/products/ProductSpecificationTable';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { CheckCircle2, Sprout, FileText } from 'lucide-react';

const product = productsData.find((p) => p.slug === 'bio-npk-consortia')!;

export const metadata: Metadata = {
  title: seoData['bio-npk-consortia'].metaTitle,
  description: seoData['bio-npk-consortia'].metaDescription,
};

export default function BioNpkPage() {
  if (!product) notFound();

  return (
    <div>
      <PageHeader
        badge={product.category}
        title={product.name}
        subtitle={product.tagline}
        breadcrumbs={[{ label: 'Products', href: '/products' }, { label: product.name }]}
      />

      <div className="py-12 sm:py-16 space-y-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Main Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Product Overview */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="green">{product.category}</Badge>
                  <Badge variant="dark">{product.formulation}</Badge>
                  <Badge variant="gold">FCO Compliant</Badge>
                </div>
                <h2 className="text-2xl font-bold text-agri-dark">Product Description</h2>
                <div className="prose prose-slate max-w-none text-agri-muted leading-relaxed whitespace-pre-line text-base">
                  {product.description}
                </div>
              </div>

              {/* Composition Table */}
              <ProductSpecificationTable composition={product.composition} />

              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-agri-dark">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.benefits.map((benefit, idx) => (
                    <Card key={idx} className="flex items-start gap-3 p-4 bg-white">
                      <CheckCircle2 className="w-5 h-5 text-agri-accent shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-agri-dark leading-snug">
                        {benefit}
                      </span>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Directions for Use */}
              <div className="space-y-4 p-6 rounded-xl bg-agri-pale/40 border border-agri-border">
                <h3 className="text-xl font-bold text-agri-dark">Directions for Use & Dosage</h3>
                <div className="p-3 rounded-lg bg-white border border-agri-accent/30 font-bold text-agri-primary text-base inline-block">
                  Recommended Dosage: {product.dosage}
                </div>
                <ul className="space-y-2 text-sm text-agri-muted list-disc list-inside">
                  {product.directionsForUse.map((step, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Crops */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-agri-dark flex items-center gap-2">
                  <Sprout className="w-5 h-5 text-agri-accent" />
                  Recommended Crops
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.recommendedCrops.map((crop, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-white border border-agri-border text-xs sm:text-sm font-medium text-agri-dark shadow-2xs">
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar Quick Inquiry */}
            <div className="lg:col-span-4 space-y-6">
              <Card className="sticky top-24 space-y-6 bg-white border-agri-accent/40 shadow-md">
                <div className="border-b border-agri-border pb-4">
                  <span className="text-xs font-bold text-agri-muted uppercase tracking-wider block">
                    Product Summary
                  </span>
                  <h4 className="text-2xl font-extrabold text-agri-dark mt-1">{product.name}</h4>
                  <p className="text-xs font-semibold text-agri-accent mt-0.5">{product.subcategory}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-1.5 border-b border-agri-border/40">
                    <span className="text-agri-muted">Dosage</span>
                    <span className="font-bold text-agri-dark">{product.dosage}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-agri-border/40">
                    <span className="text-agri-muted">Formulation</span>
                    <span className="font-bold text-agri-dark">{product.formulation}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-agri-border/40">
                    <span className="text-agri-muted">Shelf Life</span>
                    <span className="font-bold text-agri-dark">{product.shelfLife}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <WhatsAppButton text="WhatsApp Inquiry for Bio-NPK" size="lg" className="w-full" />
                  <Button href="/contact" variant="outline" size="md" className="w-full">
                    Dealer & Bulk Inquiry
                  </Button>
                </div>

                {product.pdfReference && (
                  <div className="pt-4 border-t border-agri-border text-center">
                    <a
                      href={product.pdfReference}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-primary hover:text-agri-accent"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Download Product Label (PDF)</span>
                    </a>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
