import React from 'react';
import { Metadata } from 'next';
import { Target, Eye, ShieldCheck, HeartHandshake, Leaf, Award } from 'lucide-react';
import { companyData } from '@/data/company';
import { seoData } from '@/data/seo';
import { Container } from '@/components/layout/Container';
import { PageHeader } from '@/components/layout/PageHeader';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: seoData.about.metaTitle,
  description: seoData.about.metaDescription,
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        badge="About Swayur Agrotech LLP"
        title="Restoring Indian Soil Through Beneficial Microorganisms"
        subtitle="Founded in Anand, Gujarat, with a singular mission: to rebuild soil vitality, support farmers, and promote sustainable agriculture."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      <div className="py-12 sm:py-16 space-y-16">
        {/* Story Section */}
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-agri-dark">
              The Journey Begins in the Soil
            </h2>
            <p className="text-base text-agri-muted leading-relaxed">
              Swayur Agrotech LLP was founded by agricultural scientists and agri-entrepreneurs who had spent years studying what decades of chemical farming had done to India's soils — depleted microbial communities, reduced organic matter, hardened soil structures, and diminishing returns on fertilizer investment.
            </p>
            <p className="text-base text-agri-muted leading-relaxed">
              The solution was clear: nature already has the answer. Beneficial microorganisms — bacteria, fungi, and other microscopic allies — have been feeding plants and rebuilding soils for millions of years. Our job is to harness, concentrate, and deliver them to farmers in reliable, affordable, and farmer-friendly formats.
            </p>
            <p className="text-base text-agri-muted leading-relaxed">
              Operating under the product brand <strong className="text-agri-dark">KshetraPal ({companyData.brandGujarati})</strong> — meaning "Protector of the Field" — we develop biofertilizers, biopesticides, and microbial consortia designed for Indian agro-climatic conditions, Indian crops, and Indian farmers.
            </p>
          </div>
        </Container>

        {/* Mission & Vision */}
        <section className="bg-agri-pale/40 py-12 border-y border-agri-border">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="space-y-4 border-agri-accent/30 bg-white">
                <div className="flex items-center gap-3 text-agri-primary">
                  <Target className="w-8 h-8 text-agri-accent" />
                  <h3 className="text-2xl font-bold text-agri-dark">Our Mission</h3>
                </div>
                <p className="text-sm sm:text-base text-agri-muted leading-relaxed">
                  To develop and deliver science-backed biological agricultural inputs that genuinely improve soil health, crop productivity, and farmer livelihoods — while reducing dependence on chemical fertilizers and protecting the environment for future generations.
                </p>
              </Card>

              <Card className="space-y-4 border-agri-accent/30 bg-white">
                <div className="flex items-center gap-3 text-agri-primary">
                  <Eye className="w-8 h-8 text-agri-accent" />
                  <h3 className="text-2xl font-bold text-agri-dark">Our Vision</h3>
                </div>
                <p className="text-sm sm:text-base text-agri-muted leading-relaxed">
                  To become India's most trusted name in agricultural biologicals — recognized by farmers for results, by scientists for integrity, and by the industry for innovation — building a sustainable agriculture ecosystem from the ground up.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Core Values */}
        <Container>
          <SectionHeading
            badge="Core Values"
            title="What We Stand For"
            subtitle="Principles that guide our research, manufacturing, and farmer communications."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🔬',
                title: 'Scientific Integrity',
                desc: 'Every product claim is backed by microbiology, field trial data, and quality testing. We never overstate what our products do.',
              },
              {
                icon: '🌾',
                title: 'Farmer First',
                desc: 'The farmer\'s success is our success. We develop products and advisory services that create real, measurable outcomes on the farm.',
              },
              {
                icon: '🌍',
                title: 'Environmental Responsibility',
                desc: 'Biological inputs are good for crops and the planet. We are committed to agriculture that leaves soil better than we found it.',
              },
              {
                icon: '🤝',
                title: 'Transparency',
                desc: 'We display guaranteed CFU counts, clear application guidelines, and honest efficacy claims on every product label.',
              },
              {
                icon: '💡',
                title: 'Continuous Innovation',
                desc: 'Soil science is evolving. We stay ahead — researching new organisms and formulations to serve tomorrow\'s farmer today.',
              },
              {
                icon: '✅',
                title: 'Quality Compliance',
                desc: 'Manufactured and tested strictly as per Fertilizer Control Order (FCO 1985) and ISO 9001:2015 quality standards.',
              },
            ].map((value, idx) => (
              <Card key={idx} className="space-y-3">
                <span className="text-2xl">{value.icon}</span>
                <h4 className="text-lg font-bold text-agri-dark">{value.title}</h4>
                <p className="text-xs sm:text-sm text-agri-muted leading-relaxed">{value.desc}</p>
              </Card>
            ))}
          </div>
        </Container>

        {/* Corporate & Registration Details Table */}
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-xl font-bold text-agri-dark text-center">
              Legal & Corporate Registration Details
            </h3>
            <div className="overflow-hidden border border-agri-border rounded-xl bg-white shadow-xs">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-agri-border">
                  <tr>
                    <td className="py-3 px-4 font-bold text-agri-dark bg-agri-pale/50 w-1/3">Company Name</td>
                    <td className="py-3 px-4 text-agri-primary font-semibold">{companyData.name}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-agri-dark bg-agri-pale/50">Brand Name</td>
                    <td className="py-3 px-4 text-agri-dark font-medium">{companyData.brand} ({companyData.brandGujarati})</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-agri-dark bg-agri-pale/50">LLPIN</td>
                    <td className="py-3 px-4 text-agri-dark font-mono">{companyData.llpin}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-agri-dark bg-agri-pale/50">GSTIN</td>
                    <td className="py-3 px-4 text-agri-dark font-mono">{companyData.gstin}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-agri-dark bg-agri-pale/50">Registered Office</td>
                    <td className="py-3 px-4 text-agri-muted">{companyData.address.full}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-agri-dark bg-agri-pale/50">Nature of Business</td>
                    <td className="py-3 px-4 text-agri-muted">{companyData.businessNature}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-bold text-agri-dark bg-agri-pale/50">Regulatory Compliance</td>
                    <td className="py-3 px-4 text-agri-muted">{companyData.regulatoryCompliance.join(' | ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>

        <CTASection />
      </div>
    </div>
  );
}
