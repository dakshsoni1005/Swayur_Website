import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { companyData } from '@/data/company';
import { seoData } from '@/data/seo';

export const metadata: Metadata = {
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
    url: 'https://swayuragrotech.com',
    title: seoData.home.metaTitle,
    description: seoData.home.metaDescription,
    siteName: companyData.name,
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
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col min-h-screen bg-agri-surface text-agri-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton floating />
      </body>
    </html>
  );
}
