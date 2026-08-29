'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { ProductCard } from '@/components/products/ProductCard';
import { cn } from '@/lib/utils';

interface ProductFilterProps {
  products: Product[];
}

export const ProductFilter: React.FC<ProductFilterProps> = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Biofertilizer', 'Biopesticide', 'Biocontrol'];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex items-center sm:justify-center gap-2 p-1.5 rounded-xl bg-agri-pale/80 border border-agri-border/60 max-w-xl mx-auto overflow-x-auto no-scrollbar w-full whitespace-nowrap">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count =
            cat === 'All'
              ? products.length
              : products.filter((p) => p.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer',
                isActive
                  ? 'bg-agri-dark text-white shadow-xs'
                  : 'text-agri-muted hover:text-agri-dark hover:bg-white/60'
              )}
            >
              <span>{cat}</span>
              <span
                className={cn(
                  'ml-1.5 text-[11px] px-1.5 py-0.5 rounded-full font-bold',
                  isActive ? 'bg-agri-accent text-white' : 'bg-agri-border/60 text-agri-muted'
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
