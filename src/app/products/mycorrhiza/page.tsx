import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { ProductDetailPage } from '@/components/products/ProductDetailPage';

const product = productsData.find((p) => p.slug === 'mycorrhiza')!;

export const metadata: Metadata = {
  title: seoData.mycorrhiza.metaTitle,
  description: seoData.mycorrhiza.metaDescription,
};

export default function MycorrhizaPage() {
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
