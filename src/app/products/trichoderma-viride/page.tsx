import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { ProductDetailPage } from '@/components/products/ProductDetailPage';

const product = productsData.find((p) => p.slug === 'trichoderma-viride')!;

export const metadata: Metadata = {
  title: seoData['trichoderma-viride'].metaTitle,
  description: seoData['trichoderma-viride'].metaDescription,
};

export default function TrichodermaViridePage() {
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
