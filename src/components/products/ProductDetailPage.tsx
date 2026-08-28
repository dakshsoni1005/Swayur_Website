import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Sprout,
  Package,
  Clock,
  ShieldAlert,
  AlertTriangle,
  Bug,
} from 'lucide-react';
import { Product } from '@/types';
import { productsData } from '@/data/products';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ProductSpecificationTable } from '@/components/products/ProductSpecificationTable';
import { ProductCard } from '@/components/products/ProductCard';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface ProductDetailPageProps {
  product: Product;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  // Related products filtering (3 items excluding current product)
  const relatedProducts = productsData
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* 1. Breadcrumbs */}
      <Container>
        <Breadcrumbs
          items={[{ label: 'Products', href: '/products' }, { label: product.name }]}
        />
      </Container>

      {/* 2. Product Hero */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start bg-white p-6 sm:p-10 rounded-3xl border border-agri-border shadow-xs">
          {/* Left Column: Product Visual / Graphic Placeholder */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-4/3 sm:aspect-square w-full rounded-2xl bg-gradient-to-br from-agri-pale via-white to-emerald-50/50 border border-agri-border flex flex-col items-center justify-center p-8 text-center overflow-hidden group">
              <div className="w-24 h-24 sm:w-32 sm:32 rounded-3xl bg-agri-dark text-white flex items-center justify-center font-bold text-4xl sm:text-5xl shadow-md group-hover:scale-105 transition-transform duration-300">
                {product.category === 'Biofertilizer' ? '🌱' : '🛡️'}
              </div>
              <div className="mt-6 space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-agri-muted block">
                  KshetraPal (ક્ષેત્રપાલ)
                </span>
                <h3 className="text-xl font-extrabold text-agri-dark">{product.name}</h3>
                <span className="text-xs font-semibold text-agri-accent block">
                  {product.subcategory || product.category}
                </span>
              </div>
              <div className="absolute top-4 left-4">
                <Badge variant={product.category === 'Biofertilizer' ? 'green' : 'earth'}>
                  {product.category}
                </Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="dark">{product.formulation}</Badge>
              </div>
            </div>
          </div>

          {/* Right Column: Key Summary & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={product.category === 'Biofertilizer' ? 'green' : 'earth'}>
                  {product.category}
                </Badge>
                <Badge variant="gold">FCO Schedule I Compliant</Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-agri-dark tracking-tight">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base font-semibold text-agri-primary italic">
                &ldquo;{product.tagline}&rdquo;
              </p>
            </div>

            <p className="text-sm sm:text-base text-agri-muted leading-relaxed font-normal">
              {product.description.split('\n\n')[0]}
            </p>

            {/* Dosage & Formulation Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-agri-pale/80 border border-agri-accent/30 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white text-agri-primary shrink-0 shadow-2xs">
                  <Sprout className="w-5 h-5 text-agri-accent" />
                </div>
                <div>
                  <span className="text-xs text-agri-muted block font-medium">Recommended Dosage</span>
                  <strong className="text-sm sm:text-base font-extrabold text-agri-dark">
                    {product.dosage}
                  </strong>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-agri-pale/80 border border-agri-accent/30 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white text-agri-primary shrink-0 shadow-2xs">
                  <Package className="w-5 h-5 text-agri-accent" />
                </div>
                <div>
                  <span className="text-xs text-agri-muted block font-medium">Formulation Type</span>
                  <strong className="text-sm sm:text-base font-extrabold text-agri-dark">
                    {product.formulation}
                  </strong>
                </div>
              </div>
            </div>

            {/* Primary & Secondary Hero CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <WhatsAppButton text="WhatsApp for Enquiry" size="lg" className="w-full sm:w-auto" />
              <Button href="/products" variant="outline" size="lg" className="w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Products
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* 3. Product Overview (Full Detailed Description) */}
      <Container>
        <div className="max-w-4xl space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-agri-border">
          <h2 className="text-2xl font-bold text-agri-dark">Product Overview & Science</h2>
          <div className="prose prose-slate max-w-none text-agri-muted leading-relaxed whitespace-pre-line text-sm sm:text-base">
            {product.description}
          </div>
        </div>
      </Container>

      {/* Target Pests / Diseases if applicable */}
      {product.targetPestsOrDiseases && (
        <Container>
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-4">
            <div className="flex items-center gap-2 text-amber-900">
              <Bug className="w-5 h-5 text-amber-600" />
              <h3 className="text-xl font-bold">
                {product.targetPestsOrDiseasesTitle || 'Target Pests & Diseases Controlled'}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.targetPestsOrDiseases.map((target, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-xs sm:text-sm font-bold text-amber-900 shadow-2xs"
                >
                  🎯 {target}
                </span>
              ))}
            </div>
          </div>
        </Container>
      )}

      {/* 4. Key Benefits */}
      <Container>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-agri-dark">Key Agronomic Benefits</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.benefits.map((benefit, idx) => (
              <Card key={idx} className="flex items-start gap-3 p-5 bg-white border-agri-border">
                <CheckCircle2 className="w-5 h-5 text-agri-accent shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-agri-dark leading-snug">
                  {benefit}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      {/* 5. Technical Specifications Table */}
      <Container>
        <ProductSpecificationTable
          composition={product.composition}
          title={`${product.name} — Technical Specifications & Composition`}
        />
      </Container>

      {/* 6. Dosage Prominent Highlight */}
      <Container>
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-agri-dark to-agri-primary text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-agri-light">
              Recommended Application Dosage
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold">{product.dosage}</h3>
            <p className="text-xs text-slate-300">
              Optimal dose for field applications under Indian agro-climatic conditions.
            </p>
          </div>
          <WhatsAppButton text="Get Dosage Advisory" size="md" className="shrink-0" />
        </div>
      </Container>

      {/* 7. Directions / Application Methods & Safety Warning */}
      <Container>
        <div className="space-y-6 p-6 sm:p-8 rounded-2xl bg-agri-pale/40 border border-agri-border">
          <h2 className="text-2xl font-bold text-agri-dark">Directions for Use & Application</h2>

          {product.safetyWarning && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm font-bold">
                Safety & Compatibility Warning: {product.safetyWarning}
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.directionsForUse.map((step, idx) => (
              <Card key={idx} className="flex items-start gap-3 p-4 bg-white">
                <span className="w-7 h-7 rounded-lg bg-agri-pale text-agri-primary font-extrabold text-xs flex items-center justify-center shrink-0 border border-agri-accent/20">
                  0{idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-medium text-agri-dark leading-relaxed">
                  {step}
                </span>
              </Card>
            ))}
          </div>

          {product.applicationMethods && (
            <div className="pt-4 border-t border-agri-border/60">
              <h4 className="text-sm font-bold text-agri-dark mb-2">Supported Application Methods:</h4>
              <div className="flex flex-wrap gap-2">
                {product.applicationMethods.map((method, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white border border-agri-border text-xs sm:text-sm font-semibold text-agri-primary shadow-2xs"
                  >
                    💧 {method}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>

      {/* 8. Recommended Crops */}
      <Container>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-agri-dark flex items-center gap-2">
            <Sprout className="w-6 h-6 text-agri-accent" />
            Recommended Crops
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {product.recommendedCrops.map((crop, idx) => (
              <span
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-white border border-agri-border text-xs sm:text-sm font-semibold text-agri-dark shadow-2xs hover:border-agri-accent/40 transition-colors"
              >
                🌾 {crop}
              </span>
            ))}
          </div>
        </div>
      </Container>

      {/* 9. Storage & Shelf Life Information Block */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="flex items-start gap-3 p-5 bg-white">
            <Clock className="w-6 h-6 text-agri-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-agri-muted block">
                Shelf Life
              </span>
              <strong className="text-sm font-bold text-agri-dark">{product.shelfLife}</strong>
            </div>
          </Card>

          <Card className="flex items-start gap-3 p-5 bg-white">
            <Package className="w-6 h-6 text-agri-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-agri-muted block">
                Storage Conditions
              </span>
              <span className="text-xs sm:text-sm text-agri-dark font-medium">{product.storage}</span>
            </div>
          </Card>

          <Card className="flex items-start gap-3 p-5 bg-white">
            <ShieldAlert className="w-6 h-6 text-agri-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-agri-muted block">
                Quality Compliance
              </span>
              <span className="text-xs sm:text-sm text-agri-dark font-medium">FCO Schedule I Compliant</span>
            </div>
          </Card>
        </div>
      </Container>

      {/* 10. Product-Specific Conversion CTA */}
      <Container>
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-agri-pale via-white to-emerald-50 border-2 border-agri-accent/40 text-center space-y-6 shadow-sm">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-agri-primary text-white">
            Product Inquiry & Order Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-agri-dark tracking-tight">
            Interested in {product.name}?
          </h2>
          <p className="text-base text-agri-muted max-w-2xl mx-auto leading-relaxed">
            Talk to the Swayur Agrotech team for crop-specific dosage advice, bulk supply, or dealership terms in your district.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <WhatsAppButton text={`WhatsApp for ${product.name}`} size="lg" className="w-full sm:w-auto" />
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
              Contact Us Form
            </Button>
          </div>
        </div>
      </Container>

      {/* 11. Related Products */}
      <Container>
        <div className="space-y-6 pt-4 border-t border-agri-border/60">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-agri-dark">
              Explore More KshetraPal Products
            </h2>
            <Link
              href="/products"
              className="text-xs font-bold text-agri-primary hover:text-agri-accent transition-colors"
            >
              View All Products →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
