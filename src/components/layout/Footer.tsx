import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { companyData } from '@/data/company';
import { siteConfig } from '@/config/site';
import { Container } from '@/components/layout/Container';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-agri-dark text-white border-t border-agri-primary/50">
      {/* Top Banner Accent */}
      <div className="h-1.5 bg-gradient-to-r from-agri-accent via-agri-light to-emerald-400" />

      <div className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Col 1: Brand & Identity (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-agri-accent text-white flex items-center justify-center font-bold text-xl">
                  🌱
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {companyData.name}
                  </h3>
                  <p className="text-xs text-agri-light font-semibold">
                    {companyData.brand} ({companyData.brandGujarati}) — Protector of the Field
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 italic font-medium leading-relaxed">
                "{companyData.tagline}"
              </p>

              <p className="text-xs text-slate-400 leading-relaxed">
                India's emerging science-backed agri-biologicals company — crafting biofertilizers, biopesticides, and microbial solutions that rebuild soil health, boost crop nutrition, and reduce farmer dependence on chemicals.
              </p>

              {/* Compliance Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded bg-agri-primary/60 text-emerald-300 border border-agri-primary">
                  <CheckCircle2 className="w-3 h-3 text-agri-light" />
                  FCO 1985 Compliant
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded bg-agri-primary/60 text-emerald-300 border border-agri-primary">
                  <ShieldCheck className="w-3 h-3 text-agri-light" />
                  ISO 9001:2015 Certified
                </span>
              </div>
            </div>

            {/* Col 2: Quick Links (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-agri-light border-b border-agri-primary pb-2">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white hover:underline transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Product Range (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-agri-light border-b border-agri-primary pb-2">
                KshetraPal Range
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/products/bio-npk-consortia" className="hover:text-white hover:underline">
                    Bio-NPK Consortia
                  </Link>
                </li>
                <li>
                  <Link href="/products/bio-zsb" className="hover:text-white hover:underline">
                    Bio-ZSB (Zinc Solubilizer)
                  </Link>
                </li>
                <li>
                  <Link href="/products/mycorrhiza" className="hover:text-white hover:underline">
                    Mycorrhiza (VAM)
                  </Link>
                </li>
                <li>
                  <Link href="/products/trichoderma-viride" className="hover:text-white hover:underline">
                    Trichoderma viride
                  </Link>
                </li>
                <li>
                  <Link href="/products/beauveria-bassiana" className="hover:text-white hover:underline">
                    Beauveria bassiana
                  </Link>
                </li>
                <li>
                  <Link href="/products/pseudomonas-fluorescens" className="hover:text-white hover:underline">
                    Pseudomonas fluorescens
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Registered Office & Contact (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-agri-light border-b border-agri-primary pb-2">
                Contact & Registered Office
              </h4>
              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-agri-light shrink-0 mt-0.5" />
                  <span>{companyData.address.full}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-agri-light shrink-0" />
                  <a href={`tel:${companyData.phone}`} className="hover:text-white">
                    {companyData.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-agri-light shrink-0" />
                  <a href={`mailto:${companyData.email}`} className="hover:text-white">
                    {companyData.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 pt-1 text-slate-400">
                  <FileText className="w-4 h-4 shrink-0 text-slate-400" />
                  <span>
                    LLPIN: <strong className="text-slate-200">{companyData.llpin}</strong> | GSTIN:{' '}
                    <strong className="text-slate-200">{companyData.gstin}</strong>
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppButton text="Direct WhatsApp Inquiry" size="sm" className="w-full" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Legal Copyright Strip */}
      <div className="bg-[#0A261E] py-4 border-t border-agri-primary/40 text-xs text-slate-400">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <div>
              © {new Date().getFullYear()} {companyData.legalName}. All rights reserved. Brand:{' '}
              <span className="text-slate-300 font-semibold">{companyData.brand} ({companyData.brandGujarati})</span>.
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
