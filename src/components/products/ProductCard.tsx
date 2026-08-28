import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Product } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="flex flex-col justify-between h-full group border-agri-border hover:border-agri-accent/50 transition-all duration-300 shadow-2xs hover:shadow-md bg-white">
      <div className="space-y-4 p-6">
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant={product.category === 'Biofertilizer' ? 'green' : 'earth'}>
            {product.category}
          </Badge>
          <Badge variant="dark" className="text-[10px]">
            {product.formulation}
          </Badge>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-agri-muted block">
            KshetraPal Range
          </span>
          <h3 className="text-xl font-bold text-agri-dark group-hover:text-agri-primary transition-colors">
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

        {/* Key Highlights */}
        <div className="space-y-1.5 pt-2 border-t border-agri-border/60">
          <div className="flex items-center justify-between text-xs">
            <span className="text-agri-muted font-medium">Dosage:</span>
            <span className="font-bold text-agri-dark">{product.dosage}</span>
          </div>

          <div className="flex flex-wrap gap-1 pt-1">
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
      <div className="p-4 bg-agri-pale/40 border-t border-agri-border/60 rounded-b-2xl">
        <Link
          href={`/products/${product.slug}`}
          className="flex items-center justify-between w-full text-xs font-bold text-agri-dark group-hover:text-agri-primary transition-colors"
        >
          <span>View Technical Specs & Dosage</span>
          <ArrowRight className="w-4 h-4 text-agri-accent group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
};
