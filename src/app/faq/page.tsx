import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sprout, BookOpen, Microscope, Mail, ArrowRight } from 'lucide-react';
import { faqData } from '@/data/faq';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { FAQSearchFilter } from '@/components/faq/FAQSearchFilter';
import { FAQJsonLd } from '@/components/faq/FAQJsonLd';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: seoData.faq?.metaTitle || 'FAQ | Biofertilizers & Biopesticides Questions Answered',
  description:
    seoData.faq?.metaDescription ||
    'Frequently asked questions about biofertilizers, application methods, safety, storage, and dealer partnerships for Swayur Agrotech KshetraPal products.',
};

export default function FAQPage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      <FAQJsonLd />

      {/* 1. FAQ Hero */}
      <PageHeader
        badge="FREQUENTLY ASKED QUESTIONS"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions from farmers and agri-dealers about KshetraPal biofertilizers, biopesticides, application methods, product safety, storage, and dealership terms."
        breadcrumbs={[{ label: 'FAQ' }]}
      />

      {/* 2. Search, Category Filters & Accordions */}
      <Container>
        <FAQSearchFilter items={faqData} />
      </Container>

      {/* 3. CTA Section */}
      <CTASection
        title="Still Have Questions?"
        subtitle="Talk to our agronomy and support team for product recommendations, crop dosage guidance, or dealer assistance."
      />

      {/* 4. Related Navigation Links */}
      <Container>
        <div className="space-y-6 max-w-4xl mx-auto pt-4 border-t border-agri-border/60">
          <h3 className="text-xl font-bold text-agri-dark text-center">
            Explore More of Swayur Agrotech
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/products" className="group">
              <Card className="flex items-center gap-3 p-4 bg-white hover:border-agri-accent/40">
                <Sprout className="w-5 h-5 text-agri-accent shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-sm font-bold text-agri-dark group-hover:text-agri-primary block">
                    Products
                  </span>
                  <span className="text-xs text-agri-muted block">All 6 Formulations</span>
                </div>
              </Card>
            </Link>

            <Link href="/crop-solutions" className="group">
              <Card className="flex items-center gap-3 p-4 bg-white hover:border-agri-accent/40">
                <BookOpen className="w-5 h-5 text-agri-accent shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-sm font-bold text-agri-dark group-hover:text-agri-primary block">
                    Crop Solutions
                  </span>
                  <span className="text-xs text-agri-muted block">Advisory & Matrix</span>
                </div>
              </Card>
            </Link>

            <Link href="/our-science" className="group">
              <Card className="flex items-center gap-3 p-4 bg-white hover:border-agri-accent/40">
                <Microscope className="w-5 h-5 text-agri-accent shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-sm font-bold text-agri-dark group-hover:text-agri-primary block">
                    Our Science
                  </span>
                  <span className="text-xs text-agri-muted block">R&D & Quality</span>
                </div>
              </Card>
            </Link>

            <Link href="/contact" className="group">
              <Card className="flex items-center gap-3 p-4 bg-white hover:border-agri-accent/40">
                <Mail className="w-5 h-5 text-agri-accent shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-sm font-bold text-agri-dark group-hover:text-agri-primary block">
                    Contact Us
                  </span>
                  <span className="text-xs text-agri-muted block">Farmer & Dealer Form</span>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
