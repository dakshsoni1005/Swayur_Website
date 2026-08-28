import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productsData } from '@/data/products';
import { seoData } from '@/data/seo';
import { ProductDetailPage } from '@/components/products/ProductDetailPage';

const product = productsData.find((p) => p.slug === 'bio-npk-consortia')!;

export const metadata: Metadata = {
  title: seoData['bio-npk-consortia']?.metaTitle || 'Bio-NPK Consortia | KshetraPal Biofertilizer',
  description: seoData['bio-npk-consortia']?.metaDescription || product?.description.slice(0, 150),
  openGraph: {
    title: product?.name,
    description: product?.tagline,
  },
};

export default function BioNpkPage() {
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
