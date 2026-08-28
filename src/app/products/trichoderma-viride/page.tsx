import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { ProductDetailPage } from '@/components/products/ProductDetailPage';

const product = productsData.find((p) => p.slug === 'trichoderma-viride')!;

export const metadata: Metadata = {
  title: seoData['trichoderma-viride']?.metaTitle || 'Trichoderma viride Biofungicide | KshetraPal',
  description: seoData['trichoderma-viride']?.metaDescription || product?.description.slice(0, 150),
  openGraph: {
    title: product?.name,
    description: product?.tagline,
  },
};

export default function TrichodermaViridePage() {
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
