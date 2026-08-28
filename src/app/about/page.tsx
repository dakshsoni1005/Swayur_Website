import React from 'react';
import { Metadata } from 'next';
import {
  Target,
  Eye,
  Microscope,
  Sprout,
  Leaf,
  Lightbulb,
  ShieldCheck,
  FileText,
  MapPin,
} from 'lucide-react';
import { companyData } from '@/data/company';
import { seoData } from '@/data/seo';
import { aboutStorySteps, coreValuesData } from '@/data/about';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { BiologicalComparison } from '@/components/sections/BiologicalComparison';
import { CTASection } from '@/components/sections/CTASection';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: seoData.about.metaTitle,
  description: seoData.about.metaDescription,
};

export default function AboutPage() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Microscope':
        return <Microscope className="w-7 h-7 text-agri-accent" />;
      case 'Sprout':
        return <Sprout className="w-7 h-7 text-agri-accent" />;
      case 'Leaf':
        return <Leaf className="w-7 h-7 text-agri-accent" />;
      case 'Eye':
        return <Eye className="w-7 h-7 text-agri-accent" />;
      case 'Lightbulb':
        return <Lightbulb className="w-7 h-7 text-agri-accent" />;
      default:
        return <ShieldCheck className="w-7 h-7 text-agri-accent" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* 1. About Hero */}
      <PageHeader
        badge="ABOUT SWAYUR AGROTECH"
        title="Who We Are"
        subtitle="We are Swayur Agrotech LLP — an agricultural biotechnology company founded in Anand, Gujarat, with a singular mission: to restore Indian soil to its natural vitality using the power of beneficial microorganisms."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* 2. Who We Are Overview */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-agri-pale text-agri-primary text-xs font-bold uppercase tracking-wider border border-agri-accent/20">
              Swayur Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-agri-dark tracking-tight leading-tight">
              Rooted in Natural Vitality & Science
            </h2>
            <p className="text-base text-agri-muted leading-relaxed font-normal">
              The name <strong className="text-agri-dark font-bold">&ldquo;Swayur&rdquo;</strong> is rooted in the Sanskrit concept of self-sustained, natural vitality. That philosophy runs through every product we make and every farmer we serve.
            </p>
            <p className="text-base text-agri-muted leading-relaxed font-normal">
              Operating under the product brand <strong className="text-agri-dark font-bold">KshetraPal ({companyData.brandGujarati})</strong> — meaning <em className="text-agri-primary font-semibold font-serif">&ldquo;Protector of the Field&rdquo;</em> — we develop biofertilizers, biopesticides, and microbial consortia designed specifically for Indian agro-climatic conditions, Indian crops, and Indian farmers.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Badge variant="green">FCO 1985 Compliant</Badge>
              <Badge variant="dark">ISO 9001:2015 Certified</Badge>
              <Badge variant="gold">Anand, Gujarat Headquarters</Badge>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="p-8 bg-gradient-to-br from-agri-pale/90 via-white to-emerald-50/50 border-2 border-agri-accent/30 space-y-6 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-agri-dark text-white flex items-center justify-center font-bold text-2xl shadow-xs">
                🌱
              </div>
              <h3 className="text-2xl font-bold text-agri-dark">{companyData.name}</h3>
              <p className="text-sm text-agri-muted leading-relaxed">
                &ldquo;{companyData.tagline}&rdquo;
              </p>
              <div className="space-y-3 pt-2 text-xs text-agri-dark font-medium border-t border-agri-border/60">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-agri-accent shrink-0" />
                  <span>Ta. & Dist. Anand, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-agri-accent shrink-0" />
                  <span>LLPIN: {companyData.llpin} | GSTIN: {companyData.gstin}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>

      {/* 3. Our Story ("The Journey Begins in the Soil") */}
      <section className="bg-agri-pale/30 py-16 sm:py-24 border-y border-agri-border/60">
        <Container>
          <SectionHeading
            badge="Our Story"
            title="The Journey Begins in the Soil"
            subtitle="Swayur Agrotech LLP was founded by agricultural scientists and agri-entrepreneurs to address decades of soil degradation in Indian farming."
          />

          <div className="space-y-6 max-w-4xl mx-auto">
            {aboutStorySteps.map((stepItem, idx) => (
              <Card key={idx} className="flex flex-col sm:flex-row items-start gap-5 p-6 bg-white border-agri-border shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-agri-dark text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  {stepItem.step}
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-agri-dark">{stepItem.title}</h3>
                  <p className="text-sm text-agri-muted leading-relaxed font-normal">
                    {stepItem.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Mission & Vision */}
      <Container>
        <SectionHeading
          badge="Purpose & Direction"
          title="Our Mission & Vision"
          subtitle="Building a sustainable agricultural ecosystem from the ground up."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 bg-white border-2 border-agri-accent/30 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-agri-pale text-agri-primary flex items-center justify-center">
                <Target className="w-6 h-6 text-agri-accent" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-agri-muted block">
                  Our Mission
                </span>
                <h3 className="text-2xl font-extrabold text-agri-dark">Restoring Soil Health</h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-agri-muted leading-relaxed font-normal">
              To develop and deliver science-backed biological agricultural inputs that genuinely improve soil health, crop productivity, and farmer livelihoods — while reducing dependence on chemical fertilizers and protecting the environment for future generations.
            </p>
          </Card>

          <Card className="p-8 bg-white border-2 border-agri-accent/30 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-agri-pale text-agri-primary flex items-center justify-center">
                <Eye className="w-6 h-6 text-agri-accent" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-agri-muted block">
                  Our Vision
                </span>
                <h3 className="text-2xl font-extrabold text-agri-dark">Trusted Leadership</h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-agri-muted leading-relaxed font-normal">
              To become India&apos;s most trusted name in agricultural biologicals — recognized by farmers for results, by scientists for integrity, and by the industry for innovation — building a sustainable agriculture ecosystem from the ground up.
            </p>
          </Card>
        </div>
      </Container>

      {/* 5. Core Values ("What We Stand For") */}
      <section className="bg-white py-8">
        <Container>
          <SectionHeading
            badge="Guiding Principles"
            title="What We Stand For"
            subtitle="Core values that guide our product formulations, testing, and farmer advisory."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValuesData.map((val, idx) => (
              <Card key={idx} className="space-y-4 p-6 bg-white border-agri-border">
                <div className="w-12 h-12 rounded-xl bg-agri-pale flex items-center justify-center">
                  {getIconComponent(val.iconName)}
                </div>
                <h3 className="text-xl font-bold text-agri-dark">{val.title}</h3>
                <p className="text-xs sm:text-sm text-agri-muted leading-relaxed font-normal">
                  {val.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Why Biological Inputs ("The Case for Biologicals") */}
      <BiologicalComparison />

      {/* 7. Company Details ("Legal & Registration Information") */}
      <Container>
        <div className="max-w-4xl mx-auto space-y-6">
          <SectionHeading
            badge="Corporate Information"
            title="Legal & Registration Information"
            subtitle="Official corporate parameters, GSTIN, LLPIN, registered address, and regulatory compliance details."
          />

          <div className="overflow-hidden border border-agri-border rounded-2xl bg-white shadow-xs">
            <table className="w-full text-left text-sm border-collapse">
              <tbody className="divide-y divide-agri-border">
                <tr className="bg-white">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50 w-1/3 sm:w-1/4">
                    Company Name
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-primary font-bold">{companyData.name}</td>
                </tr>
                <tr className="bg-agri-pale/20">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Product Brand
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-dark font-semibold">
                    {companyData.brand} ({companyData.brandGujarati})
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    LLP Identification Number
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-agri-dark font-bold">{companyData.llpin}</td>
                </tr>
                <tr className="bg-agri-pale/20">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    GSTIN
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-agri-dark font-bold">{companyData.gstin}</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Registered Office
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-muted font-medium">{companyData.address.full}</td>
                </tr>
                <tr className="bg-agri-pale/20">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Contact Phone / WhatsApp
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-primary font-bold">{companyData.phone}</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Email Address
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-primary font-bold">{companyData.email}</td>
                </tr>
                <tr className="bg-agri-pale/20">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Nature of Business
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-muted font-medium">{companyData.businessNature}</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-agri-dark bg-agri-pale/50">
                    Regulatory Compliance
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-agri-primary font-semibold">
                    {companyData.regulatoryCompliance.join(' | ')}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>

      {/* 8. About Page CTA */}
      <CTASection
        title="Building Healthier Soil for a Sustainable Future"
        subtitle="Connect with our agronomy team in Vallabh Vidyanagar, Anand, Gujarat. Get crop recommendations or inquire about dealership opportunities."
      />
    </div>
  );
}
