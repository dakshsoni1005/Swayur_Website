import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Package } from 'lucide-react';
import { Product } from '@/types';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="flex flex-col h-full justify-between group">
      <div className="space-y-4">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <Badge variant={product.category === 'Biofertilizer' ? 'green' : 'earth'}>
            {product.category}
          </Badge>
          <span className="text-xs font-semibold text-agri-muted flex items-center gap-1">
            <Package className="w-3.5 h-3.5 text-agri-accent" />
            {product.formulation}
          </span>
        </div>

        {/* Product Title */}
        <div>
          <h3 className="text-xl font-bold text-agri-dark group-hover:text-agri-primary transition-colors">
            <Link href={`/products/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="text-xs font-medium text-agri-accent mt-1 line-clamp-1 italic">
            "{product.tagline}"
          </p>
        </div>

        {/* Key dosage preview */}
        <div className="p-2.5 rounded-lg bg-agri-pale/60 border border-agri-border/60 text-xs">
          <span className="font-bold text-agri-dark">Dosage: </span>
          <span className="text-agri-primary font-semibold">{product.dosage}</span>
        </div>

        {/* Benefits snippet (first 3) */}
        <ul className="space-y-1.5 text-xs text-agri-muted">
          {product.benefits.slice(0, 3).map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-1.5 leading-snug">
              <CheckCircle className="w-3.5 h-3.5 text-agri-accent shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action */}
      <div className="pt-6 mt-4 border-t border-agri-border/60 flex items-center justify-between gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="text-xs font-bold text-agri-primary hover:text-agri-accent flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Button href={`/products/${product.slug}`} size="sm" variant="primary">
          Inquire
        </Button>
      </div>
    </Card>
  );
};
