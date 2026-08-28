'use client';

import React, { useState } from 'react';
import { Sprout, Star, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { cropOptionsData, productCombosData, CropOption } from '@/data/crops';
import { productsData } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';

export const CropSelector: React.FC = () => {
  const [selectedCropId, setSelectedCropId] = useState<string>('cotton');

  const selectedCrop = cropOptionsData.find((c) => c.id === selectedCropId) || cropOptionsData[0];

  const recommendedProducts = productsData.filter((p) =>
    selectedCrop.recommendedProductIds.includes(p.id)
  );

  const featuredCombo = productCombosData.find(
    (combo) => combo.title === selectedCrop.featuredComboTitle
  );

  return (
    <div className="space-y-12">
      {/* Selector Box */}
      <div className="max-w-2xl mx-auto p-6 rounded-3xl bg-white border-2 border-agri-accent/40 shadow-md space-y-4 text-center">
        <label
          htmlFor="cropSelect"
          className="block text-xs font-extrabold uppercase tracking-wider text-agri-primary"
        >
          🌱 Step 1: Select Your Crop
        </label>
        <div className="relative">
          <select
            id="cropSelect"
            value={selectedCropId}
            onChange={(e) => setSelectedCropId(e.target.value)}
            className="w-full px-5 py-3.5 text-base sm:text-lg font-extrabold text-agri-dark bg-agri-pale/80 border-2 border-agri-accent/30 rounded-xl focus:border-agri-accent focus:ring-4 focus:ring-agri-pale transition-all outline-none appearance-none cursor-pointer pr-10"
          >
            {cropOptionsData.map((crop) => (
              <option key={crop.id} value={crop.id}>
                {crop.icon} {crop.name}
              </option>
            ))}
          </select>
          <ChevronDown className="w-6 h-6 text-agri-accent absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
        <p className="text-xs sm:text-sm text-agri-muted leading-relaxed font-medium">
          {selectedCrop.description}
        </p>
      </div>

      {/* Recommended Products Title & Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-agri-border">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-agri-muted block">
              Step 2: Recommended Products
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-agri-dark">
              Recommended Products for {selectedCrop.name}
            </h3>
          </div>
          <Badge variant="green" size="md">
            {recommendedProducts.length} Formulations Recommended
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {recommendedProducts.map((product) => {
            const isStar = product.id === selectedCrop.starProductId;
            return (
              <div key={product.id} className="relative">
                {isStar && (
                  <div className="absolute -top-3 left-4 z-20">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 text-white text-[11px] font-extrabold shadow-sm uppercase tracking-wider">
                      <Star className="w-3 h-3 fill-current" /> Highly Recommended
                    </span>
                  </div>
                )}
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Combo Pack for Selected Crop */}
      {featuredCombo && (
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-agri-pale via-white to-emerald-50 border-2 border-agri-accent/40 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-agri-primary block">
                Step 3: Recommended Combo Pack
              </span>
              <h4 className="text-2xl font-extrabold text-agri-dark mt-1">
                {featuredCombo.title}
              </h4>
              <p className="text-sm text-agri-muted mt-1">{featuredCombo.description}</p>
            </div>
            <WhatsAppButton
              text={`Inquire for ${selectedCrop.name} Pack`}
              size="md"
              className="shrink-0"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-agri-border/60">
            <span className="text-xs font-bold text-agri-dark mr-2 my-auto">Included Products:</span>
            {featuredCombo.products.map((p, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white border border-agri-border text-xs sm:text-sm font-bold text-agri-primary shadow-2xs"
              >
                🌱 {p}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Direct Agronomy Team WhatsApp CTA */}
      <div className="p-8 rounded-3xl bg-agri-dark text-white text-center space-y-4">
        <h4 className="text-xl sm:text-2xl font-bold">
          Need Custom Dosage Guidance for {selectedCrop.name}?
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Our agronomy advisory team in Anand, Gujarat provides crop-stage specific dosage schedules and application instructions.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <WhatsAppButton text={`Talk to Agronomy Team for ${selectedCrop.name}`} size="lg" />
          <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-agri-dark">
            Contact Form
          </Button>
        </div>
      </div>
    </div>
  );
};
