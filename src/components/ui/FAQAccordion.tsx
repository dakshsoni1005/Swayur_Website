'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/types';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  items: FAQItem[];
  categoryTitle?: string;
  className?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  categoryTitle,
  className,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn('w-full space-y-4', className)}>
      {categoryTitle && (
        <h3 className="text-xl font-bold text-agri-dark pb-2 border-b border-agri-border mb-6">
          {categoryTitle}
        </h3>
      )}
      <div className="divide-y divide-agri-border/60 border border-agri-border rounded-xl bg-white overflow-hidden shadow-xs">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="transition-colors">
              <button
                type="button"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between p-5 text-left text-base font-semibold text-agri-dark hover:bg-agri-pale/50 focus:outline-none transition-colors"
              >
                <span className="pr-4 leading-snug">{item.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 shrink-0 text-agri-medium transition-transform duration-200',
                    isOpen && 'transform rotate-180 text-agri-primary'
                  )}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-agri-muted leading-relaxed bg-agri-pale/20">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
