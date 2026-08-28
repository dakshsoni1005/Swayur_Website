import React from 'react';
import { Metadata } from 'next';
import { faqData } from '@/data/faq';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: seoData.faq.metaTitle,
  description: seoData.faq.metaDescription,
};

export default function FAQPage() {
  const categories = ['About Biological Products', 'Using KshetraPal Products', 'For Dealers'] as const;

  return (
    <div>
      <PageHeader
        badge="Frequently Asked Questions"
        title="Everything You Need to Know About KshetraPal"
        subtitle="Addressing common queries from farmers, agri-input dealers, and institutional buyers regarding biological products, storage, application, and dealership terms."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      <div className="py-12 sm:py-16 space-y-16">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {categories.map((cat, idx) => {
              const catItems = faqData.filter((item) => item.category === cat);
              return <FAQAccordion key={idx} categoryTitle={cat} items={catItems} />;
            })}
          </div>
        </Container>

        <CTASection
          title="Have More Questions?"
          subtitle="Our agronomy and support team is ready to answer your specific crop or dealership queries."
        />
      </div>
    </div>
  );
}
