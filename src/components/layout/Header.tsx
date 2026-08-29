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
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-agri-border/60 py-2'
          : 'bg-white/90 backdrop-blur-md border-b border-agri-border py-3'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-4 w-full">
          {/* Official Swayur Agrotech Logo */}
          <Link href="/" className="flex items-center shrink-0 group focus:outline-none py-0.5">
            <Image
              src="/images/brand/swayur-official-logo.png"
              alt="Swayur Agrotech"
              width={600}
              height={400}
              priority
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 shrink-0">
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
                      className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                        pathname.startsWith('/products')
                          ? 'text-agri-accent font-bold bg-agri-pale/80'
                          : 'text-agri-dark hover:text-agri-primary hover:bg-agri-pale/50'
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
                  className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-agri-accent font-bold bg-agri-pale/80'
                      : 'text-agri-dark hover:text-agri-primary hover:bg-agri-pale/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
            <a
              href={`tel:${companyData.phone}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-agri-muted hover:text-agri-primary transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-agri-accent shrink-0" />
              <span>{companyData.phone}</span>
            </a>
            <WhatsAppButton text="WhatsApp Us" size="sm" className="whitespace-nowrap" />
          </div>

          {/* Mobile Hamburger Toggle */}
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

      {/* Mobile Drawer */}
      <MobileNavigation isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
