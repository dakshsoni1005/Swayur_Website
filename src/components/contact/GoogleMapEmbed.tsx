import React from 'react';
import { MapPin, ExternalLink, Navigation } from 'lucide-react';
import { companyData } from '@/data/company';
import { Card } from '@/components/ui/Card';

export const GoogleMapEmbed: React.FC = () => {
  const directMapsUrl =
    'https://www.google.com/maps/place/Swayur+Agrotech+LLP/@22.5315834,72.9538916,17z/data=!3m1!4b1!4m6!3m5!1s0x395e4d010d0ce825:0xb321fd17142a7cbb!8m2!3d22.5315834!4d72.9538916!16s%2Fg%2F11zdrsj1v9';

  const embedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.773412497672!2d72.9517029!3d22.5315834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4d010d0ce825%3A0xb321fd17142a7cbb!2sSwayur%20Agrotech%20LLP!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

  return (
    <Card className="overflow-hidden bg-white border-agri-border shadow-xs space-y-0">
      {/* Header */}
      <div className="p-4 sm:p-5 bg-agri-pale/40 border-b border-agri-border flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-white text-agri-primary shadow-2xs border border-agri-accent/20">
            <MapPin className="w-4 h-4 text-agri-accent" />
          </div>
          <div>
            <h4 className="text-sm font-extrabold text-agri-dark">
              Swayur Agrotech LLP Location
            </h4>
            <p className="text-xs text-agri-muted">
              Vallabh Vidyanagar, Anand, Gujarat
            </p>
          </div>
        </div>

        <a
          href={directMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-agri-border text-xs font-bold text-agri-primary hover:text-agri-accent hover:border-agri-accent/40 shadow-2xs transition-colors"
        >
          <Navigation className="w-3.5 h-3.5 text-agri-accent" />
          <span>Open in Google Maps</span>
          <ExternalLink className="w-3 h-3 ml-0.5" />
        </a>
      </div>

      {/* Embedded Google Maps Frame */}
      <div className="relative w-full aspect-16/9 sm:aspect-21/9 min-h-[260px] bg-slate-100">
        <iframe
          title="Swayur Agrotech LLP Google Maps Location"
          src={embedUrl}
          className="w-full h-full border-0 absolute inset-0"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Address Footer inside Map Card */}
      <div className="p-4 bg-white border-t border-agri-border text-xs text-agri-muted flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span className="font-semibold text-agri-dark">
          📍 {companyData.address.full}
        </span>
        <span className="text-[11px] font-bold text-agri-accent">
          Ta. & Dist. Anand, Gujarat 388120
        </span>
      </div>
    </Card>
  );
};
