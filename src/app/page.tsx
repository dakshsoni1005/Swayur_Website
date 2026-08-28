import React from 'react';
import { Metadata } from 'next';
import { seoData } from '@/data/seo';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustBar } from '@/components/sections/TrustBar';
import { ImpactStats } from '@/components/sections/ImpactStats';
import { ProductRangeSection } from '@/components/sections/ProductRangeSection';
import { WhySwayurSection } from '@/components/sections/WhySwayurSection';
import { BiologicalComparison } from '@/components/sections/BiologicalComparison';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: seoData.home.metaTitle,
  description: seoData.home.metaDescription,
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust / Credibility Bar */}
      <TrustBar />

      {/* 3. Impact Statistics */}
      <ImpactStats />

      {/* 4. KshetraPal Product Range */}
      <ProductRangeSection />

      {/* 5. Why Choose Swayur */}
      <WhySwayurSection />

      {/* 6. Soil / Biological Education Section */}
      <BiologicalComparison />

      {/* 7. Farmer Testimonials */}
      <TestimonialsSection />

      {/* 8. Final Conversion CTA */}
      <CTASection
        title="Ready to Rebuild Your Soil?"
        subtitle="Talk to our agronomy team. Get a crop-specific recommendation. Start your journey to better yields and healthier soil — today."
      />
    </div>
  );
}
