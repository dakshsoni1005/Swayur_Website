import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Package } from 'lucide-react';
import { Product } from '@/types';
import { ProductImage } from '@/components/products/ProductImage';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link href={`/products/${product.slug}`} className="block h-full group focus:outline-none">
      <Card className="flex flex-col justify-between h-full border-agri-border group-hover:border-agri-accent/60 transition-all duration-300 shadow-2xs group-hover:shadow-xl group-hover:-translate-y-1 bg-white overflow-hidden cursor-pointer">
        <div className="space-y-4 p-6">
          {/* Centralized Product Image */}
          <ProductImage product={product} size="md" />

          {/* Header Badges: Category, Formulation, Net Content / Weight */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge variant={product.category === 'Biofertilizer' ? 'green' : 'earth'}>
              {product.category}
            </Badge>

            <div className="flex items-center gap-1.5">
              {product.netContent && (
                <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-300/80 shadow-2xs">
                  <Package className="w-3 h-3 text-amber-600 shrink-0" />
                  {product.netContent}
                </span>
              )}
              <Badge variant="dark" className="text-[10px]">
                {product.formulation}
              </Badge>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-agri-muted block">
              KshetraPal Range
            </span>
            <h3 className="text-xl font-extrabold text-agri-dark group-hover:text-agri-primary transition-colors leading-snug">
              {product.name}
            </h3>
            <p className="text-xs font-semibold text-agri-primary italic">
              &ldquo;{product.tagline}&rdquo;
            </p>
          </div>

          {/* Key Description snippet */}
          <p className="text-xs text-agri-muted leading-relaxed line-clamp-3 font-normal">
            {product.description.split('\n\n')[0]}
          </p>

          {/* Key Specifications: Net Content & Dosage */}
          <div className="space-y-1.5 pt-3 border-t border-agri-border/60">
            <div className="flex items-center justify-between text-xs pb-1">
              <span className="text-agri-muted font-medium">Net Vol / Weight:</span>
              <span className="font-extrabold text-agri-dark">
                {product.netContent || (product.formulation === 'Liquid' ? '1 Litre' : '500 gm')}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-agri-muted font-medium">Dosage:</span>
              <span className="font-extrabold text-agri-dark">{product.dosage}</span>
            </div>

            <div className="flex flex-wrap gap-1 pt-1.5">
              {product.benefits.slice(0, 2).map((b, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded bg-agri-pale text-agri-primary font-medium"
                >
                  <Check className="w-3 h-3 text-agri-accent shrink-0" />
                  <span className="truncate max-w-[200px]">{b}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA Button Link */}
        <div className="p-4 bg-agri-pale/40 border-t border-agri-border/60 rounded-b-2xl group-hover:bg-agri-pale/80 transition-colors">
          <div className="flex items-center justify-between w-full text-xs font-bold text-agri-dark group-hover:text-agri-primary transition-colors">
            <span>View Technical Specs & Dosage</span>
            <ArrowRight className="w-4 h-4 text-agri-accent group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Card>
    </Link>
  );
};
