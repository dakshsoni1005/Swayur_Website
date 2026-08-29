'use client';

import React, { useState } from 'react';
import { Star, ChevronDown, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Sprout } from 'lucide-react';
import { cropOptionsData, productCombosData } from '@/data/crops';
import { productsData } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import { Badge } from '@/components/ui/Badge';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

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
    <div className="space-y-12 sm:space-y-16">
      {/* 3-Step Guidance Header */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 rounded-2xl bg-slate-100/80 border border-slate-200">
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white text-agri-dark font-extrabold text-xs shadow-2xs border border-slate-200">
          <div className="w-6 h-6 rounded-full bg-agri-primary text-white flex items-center justify-center text-[11px] font-black shrink-0">1</div>
          <span>Select Your Crop</span>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-slate-600 font-bold text-xs">
          <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center text-[11px] font-black shrink-0">2</div>
          <span>Review Bio-Inputs</span>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-slate-600 font-bold text-xs">
          <div className="w-6 h-6 rounded-full bg-slate-300 text-slate-700 flex items-center justify-center text-[11px] font-black shrink-0">3</div>
          <span>Dosage & Advisory</span>
        </div>
      </div>

      {/* Modern Visual Crop Selection Suite */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5 text-agri-accent" />
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Step 1: Choose Crop for Customized Solution
            </h3>
          </div>
          <span className="text-xs font-extrabold text-agri-primary bg-agri-pale px-3 py-1 rounded-full border border-agri-accent/20">
            {cropOptionsData.length} Crops Supported
          </span>
        </div>

        {/* Visual Crop Cards Grid (Desktop & Tablet) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {cropOptionsData.map((crop) => {
            const isSelected = crop.id === selectedCropId;

            return (
              <button
                key={crop.id}
                type="button"
                onClick={() => setSelectedCropId(crop.id)}
                className={cn(
                  'relative p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-2 group shadow-2xs focus:outline-none',
                  isSelected
                    ? 'bg-agri-dark text-white border-agri-accent ring-4 ring-agri-pale shadow-md scale-[1.02]'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-agri-accent/40 hover:bg-agri-pale/40'
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-2xl">{crop.icon}</span>
                  <div
                    className={cn(
                      'w-2 h-2 rounded-full transition-all',
                      isSelected ? 'bg-amber-400 ring-4 ring-amber-400/30' : 'bg-slate-300 group-hover:bg-agri-accent/50'
                    )}
                  />
                </div>

                <div>
                  <h4
                    className={cn(
                      'text-xs font-extrabold leading-snug line-clamp-1',
                      isSelected ? 'text-white' : 'text-slate-900 group-hover:text-agri-primary'
                    )}
                  >
                    {crop.name}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Crop Agronomic Detail Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-agri-dark via-emerald-950 to-agri-dark text-white shadow-xl space-y-4 relative overflow-hidden border border-emerald-600/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                {selectedCrop.icon}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/30">
                    Selected Crop
                  </span>
                  <span className="text-xs text-slate-300 font-bold">
                    {recommendedProducts.length} Biological Formulations
                  </span>
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {selectedCrop.name}
                </h4>
              </div>
            </div>

            <WhatsAppButton
              text={`Inquire Bio Solutions for ${selectedCrop.name}`}
              size="md"
              className="shrink-0 shadow-lg"
            />
          </div>

          <div className="pt-2 border-t border-white/10 relative z-10">
            <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed max-w-3xl">
              <strong className="text-amber-400 font-extrabold">Agronomic Focus:</strong> {selectedCrop.description}
            </p>
          </div>
        </div>
      </div>

      {/* Step 2: Recommended Products Grid */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-pale text-agri-primary text-[11px] font-black uppercase tracking-wider border border-agri-accent/20 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-agri-accent" />
              Step 2: Recommended Formulations
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Biological Inputs for {selectedCrop.name}
            </h3>
          </div>
          <Badge variant="green" size="md">
            {recommendedProducts.length} Verified Solutions
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {recommendedProducts.map((product) => {
            const isStar = product.id === selectedCrop.starProductId;
            return (
              <div key={product.id} className="relative group">
                {isStar && (
                  <div className="absolute -top-3 left-4 z-20">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500 text-white text-[11px] font-black shadow-md uppercase tracking-wider">
                      <Star className="w-3.5 h-3.5 fill-current" /> Star Recommended
                    </span>
                  </div>
                )}
                <ProductCard product={product} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Step 3: Featured Combo Pack */}
      {featuredCombo && (
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-agri-pale via-white to-emerald-50 border-2 border-agri-accent/40 space-y-6 shadow-md relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-primary text-white text-[11px] font-black uppercase tracking-wider shadow-xs mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                Step 3: Complete Crop Protection Pack
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {featuredCombo.title}
              </h4>
              <p className="text-sm text-slate-600 mt-1 max-w-2xl font-medium">{featuredCombo.description}</p>
            </div>
            <WhatsAppButton
              text={`Inquire for ${selectedCrop.name} Pack`}
              size="lg"
              className="shrink-0"
            />
          </div>

          <div className="flex flex-wrap gap-2.5 pt-4 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-900 mr-2 my-auto">Formulations Included:</span>
            {featuredCombo.products.map((p, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-extrabold text-agri-primary shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-agri-accent" />
                {p}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Direct Agronomy Team WhatsApp CTA */}
      <div className="p-8 sm:p-10 rounded-3xl bg-agri-dark text-white text-center space-y-4 shadow-xl border border-emerald-600/30">
        <h4 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Need Custom Dosage Schedules for {selectedCrop.name}?
        </h4>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
          Our agronomy advisory team in Anand, Gujarat provides crop-stage specific dosage guidance, tank-mix compatibility, and field application schedules.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <WhatsAppButton text={`Talk to Agronomy Team for ${selectedCrop.name}`} size="lg" />
          <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-agri-dark">
            Contact Agronomist Form
          </Button>
        </div>
      </div>
    </div>
  );
};
