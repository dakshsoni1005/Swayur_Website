import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { cn } from '@/lib/utils';

interface ProductImageProps {
  product: Product;
  className?: string;
  priority?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
  className,
  priority = false,
  size = 'md',
}) => {
  const aspectRatios = {
    sm: 'aspect-4/3 max-h-36',
    md: 'aspect-4/3 max-h-48 sm:max-h-56',
    lg: 'aspect-square min-h-[300px] sm:min-h-[380px]',
  };

  if (product.image) {
    // Append explicit version string to bypass browser disk cache for updated product images
    const imageUrl = `${product.image}?v=20260828`;

    return (
      <div
        className={cn(
          'relative w-full rounded-xl bg-agri-pale/40 border border-agri-border/60 overflow-hidden flex items-center justify-center p-3 group',
          aspectRatios[size],
          className
        )}
      >
        <Image
          src={imageUrl}
          alt={`${product.name} KshetraPal ${product.category} product`}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          priority={priority}
        />
      </div>
    );
  }

  // Clean Branded Fallback Placeholder
  return (
    <div
      className={cn(
        'relative w-full rounded-xl bg-gradient-to-br from-agri-pale via-white to-emerald-50/50 border border-agri-border/60 flex flex-col items-center justify-center p-6 text-center shadow-2xs',
        aspectRatios[size],
        className
      )}
    >
      <div className="w-16 h-16 rounded-2xl bg-agri-dark text-white flex items-center justify-center font-bold text-2xl shadow-xs">
        {product.category === 'Biofertilizer' ? '🌱' : '🛡️'}
      </div>
      <span className="text-xs font-bold text-agri-dark mt-2 block">{product.name}</span>
      <span className="text-[10px] text-agri-muted font-medium">{product.category}</span>
    </div>
  );
};
