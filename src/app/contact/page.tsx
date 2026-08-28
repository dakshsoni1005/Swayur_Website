import React from 'react';
import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Store, CheckCircle2 } from 'lucide-react';
import { companyData } from '@/data/company';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { ContactForm } from '@/components/forms/ContactForm';
import { DealerInquiryForm } from '@/components/forms/DealerInquiryForm';
import { Card } from '@/components/ui/Card';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const metadata: Metadata = {
  title: seoData.contact.metaTitle,
  description: seoData.contact.metaDescription,
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        badge="Contact Us"
        title="We Are Here to Help"
        subtitle="Whether you are a farmer looking for crop-specific advice, a dealer interested in distribution, or an institution seeking bulk supply — connect with us."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="py-12 sm:py-16 space-y-16">
        {/* Contact Info + Main Contact Form */}
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Contact Details Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-agri-pale text-agri-primary border border-agri-accent/20">
                  Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark">
                  Direct Channels
                </h2>
                <p className="text-sm text-agri-muted leading-relaxed">
                  Our agronomy team in Anand, Gujarat is available Monday through Saturday to respond to product and crop inquiries within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="flex items-start gap-4 p-5 bg-white">
                  <div className="p-3 rounded-xl bg-agri-pale text-agri-primary shrink-0">
                    <MapPin className="w-6 h-6 text-agri-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-agri-dark text-base">Registered Office</h4>
                    <p className="text-xs sm:text-sm text-agri-muted leading-relaxed mt-1">
                      {companyData.address.full}
                    </p>
                  </div>
                </Card>

                <Card className="flex items-start gap-4 p-5 bg-white">
                  <div className="p-3 rounded-xl bg-agri-pale text-agri-primary shrink-0">
                    <Phone className="w-6 h-6 text-agri-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-agri-dark text-base">Phone & WhatsApp</h4>
                    <a
                      href={`tel:${companyData.phone}`}
                      className="text-xs sm:text-sm font-semibold text-agri-primary hover:underline block mt-1"
                    >
                      {companyData.phone}
                    </a>
                  </div>
                </Card>

                <Card className="flex items-start gap-4 p-5 bg-white">
                  <div className="p-3 rounded-xl bg-agri-pale text-agri-primary shrink-0">
                    <Mail className="w-6 h-6 text-agri-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-agri-dark text-base">Email Address</h4>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-xs sm:text-sm font-semibold text-agri-primary hover:underline block mt-1"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </Card>

                <Card className="flex items-start gap-4 p-5 bg-white">
                  <div className="p-3 rounded-xl bg-agri-pale text-agri-primary shrink-0">
                    <Clock className="w-6 h-6 text-agri-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-agri-dark text-base">Business Hours</h4>
                    <p className="text-xs sm:text-sm text-agri-muted mt-1">
                      Monday to Saturday: 9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </Card>
              </div>

              <div className="p-5 rounded-2xl bg-agri-dark text-white space-y-3">
                <h4 className="font-bold text-base">Need Quick Technical Support?</h4>
                <p className="text-xs text-slate-300">
                  Message our agronomist directly on WhatsApp for crop recommendations.
                </p>
                <WhatsAppButton text="Chat on WhatsApp Now" size="md" className="w-full" />
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>

        {/* Dealer Inquiry Section */}
        <section id="dealer-inquiry" className="bg-agri-pale/40 py-12 sm:py-16 border-y border-agri-border">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-6">
                <SectionHeading
                  badge="Dealership Opportunities"
                  title="Become a KshetraPal Authorized Dealer"
                  subtitle="We are expanding our network across Gujarat and other states. Partner with Swayur Agrotech LLP to offer proven biological inputs to your farming community."
                  align="left"
                />

                <div className="space-y-3">
                  <h4 className="font-bold text-agri-dark text-base">Why Partner with Swayur Agrotech?</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-agri-muted">
                    {[
                      'Scientifically formulated, high-quality products with genuine efficacy',
                      'Growing farmer demand for biological inputs — high repeat purchase potential',
                      'Attractive dealer margins — 15–20% on MRP',
                      'Technical support and product training provided for dealer staff',
                      'Marketing materials, brochures, and demo product support',
                      'Co-demonstration plot program in your operational area',
                      'Prompt order fulfillment and logistics support',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-agri-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-7">
                <DealerInquiryForm />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
