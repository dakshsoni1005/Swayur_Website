import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { ProductDetailPage } from '@/components/products/ProductDetailPage';

const product = productsData.find((p) => p.slug === 'pseudomonas-fluorescens')!;

export const metadata: Metadata = {
  title: seoData['pseudomonas-fluorescens'].metaTitle,
  description: seoData['pseudomonas-fluorescens'].metaDescription,
};

export default function PseudomonasFluorescensPage() {
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
