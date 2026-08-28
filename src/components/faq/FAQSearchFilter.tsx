'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, CheckCircle2, ArrowRight, Sprout } from 'lucide-react';
import { FAQItem } from '@/types';
import { productsData } from '@/data/products';
import { cn } from '@/lib/utils';

interface FAQSearchFilterProps {
  items: FAQItem[];
}

export const FAQSearchFilter: React.FC<FAQSearchFilterProps> = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-5', 'faq-9']);

  const categories = [
    'All',
    'About Biological Products',
    'Using KshetraPal Products',
    'For Dealers',
  ];

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredItems = items.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;

    const queryLower = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !queryLower ||
      item.question.toLowerCase().includes(queryLower) ||
      item.answer.toLowerCase().includes(queryLower) ||
      (item.answerPoints &&
        item.answerPoints.some((p) => p.toLowerCase().includes(queryLower)));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Search Input Bar */}
      <div className="relative">
        <label htmlFor="faq-search" className="sr-only">
          Search FAQ questions and answers
        </label>
        <div className="relative">
          <input
            type="text"
            id="faq-search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search your question (e.g. storage, dosage, MOQ, mixing)..."
            className="w-full px-5 py-4 pl-12 text-sm sm:text-base rounded-2xl border-2 border-agri-border bg-white text-agri-dark focus:border-agri-accent focus:ring-4 focus:ring-agri-pale transition-all outline-none shadow-2xs font-medium"
          />
          <Search className="w-5 h-5 text-agri-muted absolute left-4 top-1/2 -translate-y-1/2" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-agri-muted hover:text-agri-dark px-2 py-1 rounded bg-agri-pale"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-agri-pale/80 border border-agri-border/60">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count =
            cat === 'All'
              ? items.length
              : items.filter((i) => i.category === cat).length;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                'px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer',
                isActive
                  ? 'bg-agri-dark text-white shadow-xs'
                  : 'text-agri-muted hover:text-agri-dark hover:bg-white/70'
              )}
            >
              <span>{cat === 'All' ? 'All Questions' : cat}</span>
              <span
                className={cn(
                  'ml-1.5 text-[11px] px-2 py-0.5 rounded-full font-bold',
                  isActive ? 'bg-agri-accent text-white' : 'bg-agri-border/60 text-agri-muted'
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Accordion Results */}
      {filteredItems.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white border border-agri-border space-y-3">
          <p className="text-base sm:text-lg font-bold text-agri-dark">No questions found.</p>
          <p className="text-xs sm:text-sm text-agri-muted">
            Try a different search term or select another category filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="text-xs font-bold text-agri-primary hover:underline pt-2 inline-block"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const isOpen = openIds.includes(item.id);
            const contentId = `faq-content-${item.id}`;
            const headerId = `faq-header-${item.id}`;

            return (
              <div
                key={item.id}
                className="border border-agri-border rounded-2xl bg-white overflow-hidden shadow-2xs transition-all hover:border-agri-accent/40"
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleAccordion(item.id)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-agri-accent transition-colors hover:bg-agri-pale/40"
                >
                  <span className="text-base sm:text-lg font-bold text-agri-dark pr-4 leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 shrink-0 text-agri-accent transition-transform duration-200',
                      isOpen && 'transform rotate-180 text-agri-primary'
                    )}
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-agri-muted leading-relaxed border-t border-agri-border/40 bg-agri-pale/20 space-y-4"
                  >
                    <p className="whitespace-pre-line">{item.answer}</p>

                    {/* Numbered answer points for dealer support */}
                    {item.answerPoints && (
                      <ol className="space-y-2 pl-2 pt-1 list-none">
                        {item.answerPoints.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-agri-dark">
                            <span className="w-5 h-5 rounded-full bg-agri-pale text-agri-primary font-bold text-xs flex items-center justify-center shrink-0 border border-agri-accent/20">
                              {pIdx + 1}
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ol>
                    )}

                    {/* Product Deep Links */}
                    {item.relatedProductSlugs && item.relatedProductSlugs.length > 0 && (
                      <div className="pt-3 border-t border-agri-border/40 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-agri-dark">Related Products:</span>
                        {item.relatedProductSlugs.map((slug) => {
                          const prod = productsData.find((p) => p.slug === slug);
                          if (!prod) return null;
                          return (
                            <Link
                              key={slug}
                              href={`/products/${slug}`}
                              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-agri-border text-agri-primary hover:text-agri-accent hover:border-agri-accent transition-colors"
                            >
                              <Sprout className="w-3.5 h-3.5" />
                              <span>{prod.name}</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
