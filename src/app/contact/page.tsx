import React from 'react';
import { Metadata } from 'next';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactContainer } from '@/components/contact/ContactContainer';
import { WhatsAppInquiry } from '@/components/contact/WhatsAppInquiry';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: seoData.contact?.metaTitle || 'Contact Us & Dealer Inquiry | Swayur Agrotech LLP',
  description:
    seoData.contact?.metaDescription ||
    'Contact Swayur Agrotech LLP in Anand, Gujarat for crop advisory, product inquiries, or becoming an authorized KshetraPal dealer (Min Order ₹10,000).',
};

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. Contact Hero */}
      <PageHeader
        badge="GET IN TOUCH"
        title="Let's Grow Better, Together"
        subtitle="Farmers, agri-dealers, FPOs, and bulk partners can reach Swayur Agrotech LLP directly for crop-specific dosage advice, product supply, or dealership terms in Anand, Gujarat."
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* 2. Main Contact Grid */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Corporate Contact Information */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          {/* Right Column: 3-Way Interactive Form Container */}
          <div className="lg:col-span-7">
            <ContactContainer />
          </div>
        </div>
      </Container>

      {/* 3. WhatsApp Quick Contact Block */}
      <Container>
        <WhatsAppInquiry />
      </Container>

      {/* 4. Final CTA */}
      <CTASection
        title="Have a Question About a Product or Crop?"
        subtitle="Explore our 6 KshetraPal biofertilizers & biopesticides, view crop recommendations, or connect directly on WhatsApp."
      />
    </div>
  );
}
