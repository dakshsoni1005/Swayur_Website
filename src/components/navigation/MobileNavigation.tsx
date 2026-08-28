'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ChevronDown, Phone, Mail } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { companyData } from '@/data/company';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Badge } from '@/components/ui/Badge';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white">
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-agri-border bg-agri-dark text-white">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-agri-accent flex items-center justify-center font-bold text-white text-lg">
            K
          </div>
          <div>
            <span className="font-bold text-base block leading-tight">{companyData.brand}</span>
            <span className="text-xs text-agri-light block">{companyData.brandGujarati}</span>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close mobile navigation menu"
          className="p-2 rounded-lg text-white hover:bg-agri-primary focus:outline-none"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav List */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
        {siteConfig.navLinks.map((link) => {
          const isActive = pathname === link.href;

          if (link.dropdown) {
            return (
              <div key={link.name} className="border-b border-agri-border/60 pb-3">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full py-2.5 text-base font-semibold text-agri-dark text-left"
                >
                  <span className={isActive ? 'text-agri-accent' : ''}>Products (6)</span>
                  <ChevronDown
                    className={`w-5 h-5 text-agri-muted transition-transform ${
                      productsOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {productsOpen && (
                  <div className="mt-2 pl-3 space-y-2 border-l-2 border-agri-accent/40">
                    <Link
                      href="/products"
                      onClick={onClose}
                      className="block py-1.5 text-xs font-bold uppercase tracking-wider text-agri-primary hover:text-agri-accent"
                    >
                      View All Products →
                    </Link>
                    {link.dropdown.map((prod) => (
                      <Link
                        key={prod.href}
                        href={prod.href}
                        onClick={onClose}
                        className={`flex items-center justify-between py-2 text-sm ${
                          pathname === prod.href
                            ? 'font-bold text-agri-accent'
                            : 'text-agri-dark hover:text-agri-primary'
                        }`}
                      >
                        <span>{prod.name}</span>
                        <Badge size="sm" variant={prod.category === 'Biofertilizer' ? 'green' : 'earth'}>
                          {prod.category}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`block py-3 text-base font-semibold border-b border-agri-border/40 ${
                isActive ? 'text-agri-accent font-bold' : 'text-agri-dark hover:text-agri-primary'
              }`}
            >
              {link.name}
            </Link>
          );
        })}

        {/* Contact info strip */}
        <div className="mt-8 p-4 rounded-xl bg-agri-pale/60 border border-agri-border space-y-3 text-sm">
          <div className="font-semibold text-agri-dark">{companyData.name}</div>
          <a href={`tel:${companyData.phone}`} className="flex items-center gap-2 text-agri-muted hover:text-agri-primary">
            <Phone className="w-4 h-4 text-agri-accent" />
            <span>{companyData.phone}</span>
          </a>
          <a href={`mailto:${companyData.email}`} className="flex items-center gap-2 text-agri-muted hover:text-agri-primary">
            <Mail className="w-4 h-4 text-agri-accent" />
            <span>{companyData.email}</span>
          </a>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-4 border-t border-agri-border bg-agri-pale/30">
        <WhatsAppButton size="lg" className="w-full text-center" />
      </div>
    </div>
  );
};
