'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { companyData } from '@/data/company';
import { Container } from '@/components/layout/Container';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ProductsDropdown } from '@/components/navigation/ProductsDropdown';
import { MobileNavigation } from '@/components/navigation/MobileNavigation';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsHover, setProductsHover] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200 bg-white border-b border-agri-border shadow-xs">
      {/* Tier 1: Main Header (Official Swayur Agrotech Logo + Top Brand Badges) */}
      <div className="py-2.5 sm:py-3.5 border-b border-agri-border/60 bg-white">
        <Container>
          <div className="flex items-center justify-between gap-4 w-full">
            {/* Left: Official Swayur Agrotech Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group focus:outline-none py-0.5">
              <Image
                src="/images/brand/swayur-agrotech-official-logo.png"
                alt="Swayur Agrotech"
                width={600}
                height={400}
                priority
                className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Top Right Quick Brand Badges & FCO Compliance */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-agri-pale text-agri-primary border border-agri-accent/30 flex items-center gap-1.5">
                🌱 {companyData.brand} ({companyData.brandGujarati}) — Biological Inputs
              </span>
              <span className="text-xs font-semibold text-agri-muted">
                FCO 1985 Schedule I Compliant
              </span>
            </div>

            {/* Mobile Hamburger Toggle & Quick WhatsApp CTA */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <WhatsAppButton text="WhatsApp" size="sm" className="sm:hidden whitespace-nowrap" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                className="p-2 rounded-lg text-agri-dark hover:bg-agri-pale focus:outline-none border border-agri-border"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Tier 2: Subheader Navigation Bar (Navigation Links + Call + WhatsApp CTAs) */}
      <div className="hidden lg:block bg-agri-pale/40 py-2 border-t border-white/60">
        <Container>
          <div className="flex items-center justify-between gap-4 w-full">
            {/* Navigation Buttons in Subheader */}
            <nav className="flex items-center gap-1 xl:gap-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.dropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setProductsHover(true)}
                      onMouseLeave={() => setProductsHover(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold rounded-lg transition-all whitespace-nowrap ${
                          pathname.startsWith('/products')
                            ? 'bg-agri-dark text-white shadow-xs'
                            : 'text-agri-dark hover:text-agri-primary hover:bg-white/80'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsHover ? 'transform rotate-180 text-agri-accent' : ''}`} />
                      </Link>

                      {/* Products Hover Dropdown */}
                      {productsHover && (
                        <div className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          <ProductsDropdown onClose={() => setProductsHover(false)} />
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 xl:px-4 py-2 text-xs xl:text-sm font-bold rounded-lg transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-agri-dark text-white shadow-xs'
                        : 'text-agri-dark hover:text-agri-primary hover:bg-white/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Call & WhatsApp CTAs in Subheader */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${companyData.phone}`}
                className="flex items-center gap-1.5 text-xs xl:text-sm font-extrabold text-agri-dark hover:text-agri-primary transition-colors whitespace-nowrap bg-white px-3 py-1.5 rounded-lg border border-agri-border/60 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-agri-accent shrink-0" />
                <span>{companyData.phone}</span>
              </a>
              <WhatsAppButton text="WhatsApp Us" size="sm" className="whitespace-nowrap shadow-xs" />
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer */}
      <MobileNavigation isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
