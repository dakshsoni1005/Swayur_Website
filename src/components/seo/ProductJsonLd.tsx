import React from 'react';
import { Product } from '@/types';
import { siteConfig } from '@/config/site';

interface ProductJsonLdProps {
  product: Product;
}

export const ProductJsonLd: React.FC<ProductJsonLdProps> = ({ product }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description.split('\n\n')[0],
    brand: {
      '@type': 'Brand',
      name: 'KshetraPal (ક્ષેત્રપાલ)',
    },
    category: product.category,
    url: `${siteConfig.url}/products/${product.slug}`,
    manufacturer: {
      '@type': 'Organization',
      name: 'Swayur Agrotech LLP',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
