import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyData } from '@/data/company';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const WhatsAppInquiry: React.FC = () => {
  return (
    <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900 via-agri-dark to-[#0A261E] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-emerald-800">
      <div className="space-y-2 text-center md:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Quick Response Channel</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Prefer Instant WhatsApp Advisory?</h3>
        <p className="text-xs sm:text-sm text-emerald-100 max-w-xl leading-relaxed">
          Chat directly with our agronomy and dealer support team in Anand, Gujarat. Get crop recommendations, dosage guides, and order information on WhatsApp.
        </p>
      </div>

      <div className="shrink-0 space-y-2 text-center">
        <WhatsAppButton
          text="Chat on WhatsApp"
          size="lg"
          className="shadow-md"
        />
        <span className="text-[11px] text-emerald-300 block font-medium">
          Official Number: {companyData.phone}
        </span>
      </div>
    </div>
  );
};
