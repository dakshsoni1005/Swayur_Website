import React from 'react';
import Link from 'next/link';
import { Package } from 'lucide-react';
import { Product } from '@/types';
import { ProductImage } from '@/components/products/ProductImage';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const netVol = product.netContent || (product.formulation === 'Liquid' ? '1 Litre' : '500 gm');

  return (
    <Link href={`/products/${product.slug}`} className="block h-full group focus:outline-none">
      <div className="flex flex-col justify-between h-full bg-white rounded-3xl border border-agri-border/80 p-6 shadow-2xs group-hover:shadow-xl group-hover:border-agri-accent/60 transition-all duration-300 group-hover:-translate-y-1 cursor-pointer">
        <div className="space-y-5">
          {/* Centralized Product Image Container */}
          <ProductImage product={product} size="md" />

          {/* Header Badges: Category, Net Content, Formulation */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-lg border border-emerald-300 text-emerald-800 bg-emerald-50/50 font-bold text-[11px] uppercase tracking-wider">
              {product.category}
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-amber-400 text-amber-900 bg-amber-50/80 font-extrabold text-[11px]">
              <Package className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              {netVol}
            </span>

            <span className="px-3 py-1 rounded-lg bg-[#0C382B] text-white font-extrabold text-[11px] uppercase tracking-wider ml-auto">
              {product.formulation === 'Powder (WP)' ? 'POWDER' : 'LIQUID'}
            </span>
          </div>

          {/* Product Name & Brand Tag */}
          <div className="space-y-1 pt-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-agri-muted block">
              KshetraPal Range
            </span>
            <h3 className="text-2xl font-extrabold text-agri-dark group-hover:text-agri-primary transition-colors tracking-tight leading-snug">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Bottom Specifications Footer */}
        <div className="pt-6 mt-8 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-500 font-medium">Net Vol / Weight:</span>
            <span className="font-extrabold text-agri-dark">{netVol}</span>
          </div>

          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-500 font-medium">Dosage:</span>
            <span className="font-extrabold text-agri-dark">{product.dosage}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
