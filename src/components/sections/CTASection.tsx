import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to Rebuild Your Soil?',
  subtitle = 'Talk to our agronomy team. Get a crop-specific recommendation. Start your journey to better yields and healthier soil — today.',
  className,
}) => {
  return (
    <section
      className={cn(
        'relative bg-gradient-to-br from-agri-dark via-agri-primary to-[#0A261E] text-white py-16 sm:py-20 overflow-hidden',
        className
      )}
    >
      {/* Decorative accent circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-agri-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-agri-accent/20 text-agri-light border border-agri-accent/30">
            Get Expert Agronomy Support
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <WhatsAppButton text="WhatsApp Agronomy Inquiry" size="lg" className="w-full sm:w-auto" />
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-agri-dark"
            >
              Contact Us Form
            </Button>
          </div>

          <div className="pt-6 border-t border-agri-primary/60 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300">
            <a href={`tel:${companyData.phone}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="w-4 h-4 text-agri-light" />
              <span>Call Us: <strong>{companyData.phone}</strong></span>
            </a>
            <span className="hidden sm:inline text-slate-500">•</span>
            <a href={`mailto:${companyData.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="w-4 h-4 text-agri-light" />
              <span>Email: <strong>{companyData.email}</strong></span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
