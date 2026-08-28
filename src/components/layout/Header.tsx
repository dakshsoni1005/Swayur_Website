'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-agri-border/60 py-2.5'
          : 'bg-white border-b border-agri-border py-3.5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-agri-dark text-white flex items-center justify-center font-bold text-xl shadow-xs group-hover:bg-agri-primary transition-colors">
              🌱
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-lg sm:text-xl tracking-tight text-agri-dark group-hover:text-agri-primary transition-colors">
                  Swayur Agrotech
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-agri-muted">
                <span className="text-agri-accent font-bold">{companyData.brand}</span>
                <span>({companyData.brandGujarati})</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                      className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        pathname.startsWith('/products')
                          ? 'text-agri-accent font-semibold bg-agri-pale/60'
                          : 'text-agri-dark hover:text-agri-primary hover:bg-agri-pale/40'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productsHover ? 'transform rotate-180 text-agri-accent' : ''}`} />
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
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-agri-accent font-semibold bg-agri-pale/60'
                      : 'text-agri-dark hover:text-agri-primary hover:bg-agri-pale/40'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Header CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${companyData.phone}`}
              className="hidden xl:flex items-center gap-1.5 text-xs font-semibold text-agri-muted hover:text-agri-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-agri-accent" />
              <span>{companyData.phone}</span>
            </a>
            <WhatsAppButton text="WhatsApp Us" size="sm" />
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <WhatsAppButton text="WhatsApp" size="sm" className="sm:hidden" />
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
