import React from 'react';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { companyData } from '@/data/company';
import { Card } from '@/components/ui/Card';
import { GoogleMapEmbed } from '@/components/contact/GoogleMapEmbed';

export const ContactInfo: React.FC = () => {
  const directMapsUrl =
    'https://www.google.com/maps/place/Swayur+Agrotech+LLP/@22.5315834,72.9538916,17z/data=!3m1!4b1!4m6!3m5!1s0x395e4d010d0ce825:0xb321fd17142a7cbb!8m2!3d22.5315834!4d72.9538916!16s%2Fg%2F11zdrsj1v9';

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-agri-primary block">
          Corporate & Support Contact
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark">
          Connect With Our Team
        </h2>
        <p className="text-sm text-agri-muted leading-relaxed">
          We welcome inquiries from farmers, agricultural dealers, FPOs, and bulk partners across India.
        </p>
      </div>

      <div className="space-y-4">
        {/* Phone */}
        <Card className="flex items-start gap-4 p-5 bg-white border-agri-border">
          <div className="p-3 rounded-xl bg-agri-pale text-agri-primary shrink-0">
            <Phone className="w-5 h-5 text-agri-accent" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-agri-muted uppercase tracking-wider block">
              Phone & WhatsApp Inquiry
            </span>
            <a
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
              className="text-lg font-extrabold text-agri-dark hover:text-agri-primary transition-colors block"
            >
              {companyData.phone}
            </a>
            <span className="text-xs text-agri-muted block">
              Mon – Sat: 9:00 AM – 6:30 PM IST
            </span>
          </div>
        </Card>

        {/* Email */}
        <Card className="flex items-start gap-4 p-5 bg-white border-agri-border">
          <div className="p-3 rounded-xl bg-agri-pale text-agri-primary shrink-0">
            <Mail className="w-5 h-5 text-agri-accent" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-agri-muted uppercase tracking-wider block">
              Email Contact
            </span>
            <a
              href={`mailto:${companyData.email}`}
              className="text-base sm:text-lg font-extrabold text-agri-dark hover:text-agri-primary transition-colors block"
            >
              {companyData.email}
            </a>
            <span className="text-xs text-agri-muted block">
              For dealership inquiries, corporate supply & documentation.
            </span>
          </div>
        </Card>

        {/* Registered Address */}
        <Card className="flex items-start gap-4 p-5 bg-white border-agri-border">
          <div className="p-3 rounded-xl bg-agri-pale text-agri-primary shrink-0">
            <MapPin className="w-5 h-5 text-agri-accent" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-agri-muted uppercase tracking-wider block">
              Registered Office & Operations
            </span>
            <address className="text-sm font-semibold text-agri-dark not-italic leading-relaxed">
              {companyData.name} <br />
              {companyData.address.full}
            </address>

            <div className="pt-1">
              <a
                href={directMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-agri-primary hover:text-agri-accent transition-colors"
              >
                <span>Open Direct Location on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </Card>

        {/* Embedded Interactive Map Card */}
        <GoogleMapEmbed />

        {/* Registration Details */}
        <div className="p-4 rounded-xl bg-agri-pale/40 border border-agri-border text-xs text-agri-dark space-y-1">
          <div className="flex items-center justify-between">
            <span className="font-bold">LLP Identification No:</span>
            <span className="font-mono font-bold">{companyData.llpin}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold">GSTIN:</span>
            <span className="font-mono font-bold">{companyData.gstin}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
