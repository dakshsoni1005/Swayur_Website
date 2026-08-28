import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { companyData } from '@/data/company';
import { seoData } from '@/data/seo';
import { siteConfig } from '@/config/site';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoData.home.metaTitle,
    template: `%s | ${companyData.name}`,
  },
  description: seoData.home.metaDescription,
  keywords: [
    'biofertilizer India',
    'liquid biofertilizer Gujarat',
    'biopesticide for crops',
    'Bio-NPK consortia',
    'Trichoderma viride biofungicide',
    'Beauveria bassiana insecticide',
    'Mycorrhiza biofertilizer',
    'Pseudomonas fluorescens biopesticide',
    'KshetraPal',
    'Swayur Agrotech',
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: seoData.home.metaTitle,
    description: seoData.home.metaDescription,
    siteName: companyData.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: seoData.home.metaTitle,
    description: seoData.home.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyData.name,
    legalName: companyData.legalName,
    url: siteConfig.url,
    telephone: companyData.phone,
    email: companyData.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${companyData.address.street}, ${companyData.address.locality}`,
      addressLocality: companyData.address.city,
      addressRegion: companyData.address.state,
      postalCode: companyData.address.pincode,
      addressCountry: 'IN',
    },
    brand: {
      '@type': 'Brand',
      name: `${companyData.brand} (${companyData.brandGujarati})`,
    },
  };

  return (
    <html lang="en" className={`h-full ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-agri-surface text-agri-text antialiased font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton floating />
      </body>
    </html>
  );
}
