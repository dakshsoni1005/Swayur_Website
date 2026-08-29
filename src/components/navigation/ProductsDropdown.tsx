'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Sprout, ShieldAlert, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Badge } from '@/components/ui/Badge';

interface ProductsDropdownProps {
  onClose?: () => void;
}

export const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ onClose }) => {
  const products = siteConfig.navLinks.find((link) => link.name === 'Products')?.dropdown || [];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Biofertilizer':
        return <Sprout className="w-4 h-4 text-agri-accent" />;
      case 'Biopesticide':
        return <ShieldAlert className="w-4 h-4 text-amber-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <div className="w-[340px] sm:w-[380px] bg-white rounded-xl shadow-xl border border-agri-border p-3 space-y-1">
      <div className="px-3 py-2 border-b border-agri-border/60 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-agri-muted">
          KshetraPal Range (6 Products)
        </span>
        <Link
          href="/products#explore-products"
          onClick={onClose}
          className="text-xs font-semibold text-agri-primary hover:text-agri-accent flex items-center gap-0.5"
        >
          View All <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="py-1">
        {products.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between p-2.5 rounded-lg hover:bg-agri-pale/60 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded-md bg-agri-pale group-hover:bg-white group-hover:shadow-xs transition-all">
                {getCategoryIcon(item.category)}
              </div>
              <span className="text-sm font-medium text-agri-dark group-hover:text-agri-primary">
                {item.name}
              </span>
            </div>
            <Badge size="sm" variant={item.category === 'Biofertilizer' ? 'green' : 'earth'}>
              {item.category}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};
