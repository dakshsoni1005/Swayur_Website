import React from 'react';
import Link from 'next/link';
import { Sprout, Home } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function NotFound() {
  return (
    <div className="py-20 sm:py-28 flex flex-col items-center justify-center min-h-[70vh]">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 rounded-3xl bg-agri-pale text-agri-primary flex items-center justify-center mx-auto text-4xl shadow-sm border border-agri-accent/20">
            🌱
          </div>

          <div className="space-y-3">
            <span className="px-3 py-1 rounded-md bg-agri-pale text-agri-primary text-xs font-extrabold uppercase tracking-wider">
              404 — Page Not Found
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-agri-dark tracking-tight">
              Looking for KshetraPal Products?
            </h1>
            <p className="text-sm sm:text-base text-agri-muted leading-relaxed max-w-lg mx-auto">
              The page you are trying to reach does not exist or has been moved. Explore our public catalog or contact our agronomy team.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/" variant="primary" size="lg">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button href="/products" variant="outline" size="lg">
              <Sprout className="w-4 h-4 mr-2" />
              KshetraPal Products
            </Button>
          </div>

          <div className="pt-8 border-t border-agri-border/60">
            <h3 className="text-xs font-bold uppercase tracking-wider text-agri-muted mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <Link href="/about" className="group">
                <Card className="p-3 bg-white hover:border-agri-accent/40 text-xs font-bold text-agri-dark">
                  About Us
                </Card>
              </Link>
              <Link href="/crop-solutions" className="group">
                <Card className="p-3 bg-white hover:border-agri-accent/40 text-xs font-bold text-agri-dark">
                  Crop Advisory
                </Card>
              </Link>
              <Link href="/faq" className="group">
                <Card className="p-3 bg-white hover:border-agri-accent/40 text-xs font-bold text-agri-dark">
                  FAQ & Support
                </Card>
              </Link>
              <Link href="/contact" className="group">
                <Card className="p-3 bg-white hover:border-agri-accent/40 text-xs font-bold text-agri-dark">
                  Contact Us
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
