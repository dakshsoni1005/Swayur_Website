import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { ProductDetailPage } from '@/components/products/ProductDetailPage';

const product = productsData.find((p) => p.slug === 'beauveria-bassiana')!;

export const metadata: Metadata = {
  title: seoData['beauveria-bassiana']?.metaTitle || 'Beauveria bassiana Bioinsecticide | KshetraPal',
  description: seoData['beauveria-bassiana']?.metaDescription || product?.description.slice(0, 150),
  openGraph: {
    title: product?.name,
    description: product?.tagline,
  },
};

export default function BeauveriaBassianaPage() {
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
