import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';
import { companyData } from '@/data/company';
import { productsData } from '@/data/products';
import { Container } from '@/components/layout/Container';

export const Footer: React.FC = () => {
  const directMapsUrl =
    'https://www.google.com/maps/place/Swayur+Agrotech+LLP/@22.5315834,72.9538916,17z/data=!3m1!4b1!4m6!3m5!1s0x395e4d010d0ce825:0xb321fd17142a7cbb!8m2!3d22.5315834!4d72.9538916!16s%2Fg%2F11zdrsj1v9';

  return (
    <footer className="relative overflow-hidden text-white pt-16 pb-12 border-t border-agri-accent/40">
      {/* Background Image with Parrot Green Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/footer-bg.jpg"
          alt="Swayur Agrotech Agricultural Field"
          fill
          sizes="100vw"
          className="object-cover object-[center_15%] brightness-95 contrast-105"
        />
        {/* Parrot Green 70% Opacity Overlay Layer */}
        <div className="absolute inset-0 bg-[#0e5c33]/70 bg-gradient-to-b from-[#0b3e23]/75 via-[#0f5c34]/70 to-[#072c18]/85" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block space-y-1">
              <span className="text-2xl font-extrabold tracking-tight text-white block">
                {companyData.name}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-agri-light block">
                Brand: {companyData.brand} ({companyData.brandGujarati})
              </span>
            </Link>
            <p className="text-sm text-slate-300 italic font-serif">
              &ldquo;{companyData.tagline}&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Swayur Agrotech LLP is an agricultural biotechnology company based in Anand, Gujarat. We develop and supply biological agricultural inputs to revitalize soil health and sustain farmer livelihoods.
            </p>
            <div className="pt-2 text-xs font-mono text-agri-light space-y-0.5">
              <div>LLPIN: {companyData.llpin}</div>
              <div>GSTIN: {companyData.gstin}</div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-agri-light">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  KshetraPal Products
                </Link>
              </li>
              <li>
                <Link href="/our-science" className="hover:text-white transition-colors">
                  Our Science
                </Link>
              </li>
              <li>
                <Link href="/crop-solutions" className="hover:text-white transition-colors">
                  Crop Solutions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Dealer Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: KshetraPal Products */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-agri-light">
              KshetraPal Products
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {productsData.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{p.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-agri-accent shrink-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-agri-light">
              Contact & Registered Office
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-agri-accent shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {companyData.address.full}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-agri-accent shrink-0" />
                <a
                  href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white font-bold transition-colors"
                >
                  {companyData.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-agri-accent shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {companyData.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={directMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-agri-light hover:underline"
                >
                  <span>Google Maps: Swayur Agrotech LLP</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-[11px]">
            <span>FCO 1985 Schedule I Compliant</span>
            <span>•</span>
            <span>ISO 9001:2015 Certified</span>
            <span>•</span>
            <span>Anand, Gujarat, India</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
