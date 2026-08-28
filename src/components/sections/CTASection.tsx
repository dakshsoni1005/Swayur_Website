import React from 'react';
import { Phone, Mail, Sparkles } from 'lucide-react';
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
        'relative py-16 sm:py-24 bg-gradient-to-b from-white via-agri-pale/30 to-white overflow-hidden border-t border-agri-border/60',
        className
      )}
    >
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border-2 border-agri-accent/30 p-8 sm:p-12 shadow-xl text-center space-y-6 relative overflow-hidden">
          {/* Subtle Background Radial Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-agri-pale rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider rounded-full bg-agri-pale text-agri-primary border border-agri-accent/20">
              <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
              Get Expert Agronomy Support
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-agri-dark leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-agri-muted leading-relaxed max-w-2xl mx-auto font-normal">
              {subtitle}
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <WhatsAppButton text="WhatsApp Agronomy Inquiry" size="lg" className="w-full sm:w-auto shadow-md" />
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-agri-border text-agri-dark hover:bg-agri-pale hover:border-agri-accent/40"
            >
              Contact Us Form
            </Button>
          </div>

          <div className="relative z-10 pt-6 border-t border-agri-border/60 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-agri-muted">
            <a href={`tel:${companyData.phone}`} className="flex items-center gap-2 hover:text-agri-primary font-semibold transition-colors">
              <Phone className="w-4 h-4 text-agri-accent" />
              <span>Call Us: <strong className="text-agri-dark">{companyData.phone}</strong></span>
            </a>
            <span className="hidden sm:inline text-agri-border">•</span>
            <a href={`mailto:${companyData.email}`} className="flex items-center gap-2 hover:text-agri-primary font-semibold transition-colors">
              <Mail className="w-4 h-4 text-agri-accent" />
              <span>Email: <strong className="text-agri-dark">{companyData.email}</strong></span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
