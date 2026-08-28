'use client';

import React from 'react';
import { Sprout, Store, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export type InquiryType = 'farmer' | 'dealer' | 'general';

interface InquiryTypeSelectorProps {
  selectedType: InquiryType;
  onSelect: (type: InquiryType) => void;
}

export const InquiryTypeSelector: React.FC<InquiryTypeSelectorProps> = ({
  selectedType,
  onSelect,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2 rounded-2xl bg-agri-pale/80 border border-agri-border max-w-2xl mx-auto">
      <button
        type="button"
        role="tab"
        aria-selected={selectedType === 'farmer'}
        onClick={() => onSelect('farmer')}
        className={cn(
          'flex-1 w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer',
          selectedType === 'farmer'
            ? 'bg-agri-dark text-white shadow-xs'
            : 'text-agri-muted hover:text-agri-dark hover:bg-white/60'
        )}
      >
        <Sprout className={cn('w-4 h-4', selectedType === 'farmer' ? 'text-agri-accent' : 'text-agri-muted')} />
        <span>Farmer / Product Inquiry</span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={selectedType === 'dealer'}
        onClick={() => onSelect('dealer')}
        className={cn(
          'flex-1 w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer',
          selectedType === 'dealer'
            ? 'bg-agri-dark text-white shadow-xs'
            : 'text-agri-muted hover:text-agri-dark hover:bg-white/60'
        )}
      >
        <Store className={cn('w-4 h-4', selectedType === 'dealer' ? 'text-agri-accent' : 'text-agri-muted')} />
        <span>Dealer Inquiry</span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={selectedType === 'general'}
        onClick={() => onSelect('general')}
        className={cn(
          'flex-1 w-full flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer',
          selectedType === 'general'
            ? 'bg-agri-dark text-white shadow-xs'
            : 'text-agri-muted hover:text-agri-dark hover:bg-white/60'
        )}
      >
        <MessageSquare className={cn('w-4 h-4', selectedType === 'general' ? 'text-agri-accent' : 'text-agri-muted')} />
        <span>General Inquiry</span>
      </button>
    </div>
  );
};
