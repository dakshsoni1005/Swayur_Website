import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { productsData } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/our-science',
    '/crop-solutions',
    '/faq',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1.0 : 0.8,
  }));

  const productRoutes = productsData.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
