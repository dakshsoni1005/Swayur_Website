import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { ProductDetailPage } from '@/components/products/ProductDetailPage';

const product = productsData.find((p) => p.slug === 'bio-zsb')!;

export const metadata: Metadata = {
  title: seoData['bio-zsb'].metaTitle,
  description: seoData['bio-zsb'].metaDescription,
};

export default function BioZsbPage() {
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
