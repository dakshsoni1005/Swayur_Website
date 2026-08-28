import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  darkBg?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
  darkBg = false,
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignClasses[align], className)}>
      {badge && (
        <span
          className={cn(
            'inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-3',
            darkBg
              ? 'bg-agri-accent/20 text-agri-light border border-agri-accent/30'
              : 'bg-agri-pale text-agri-primary border border-agri-accent/20'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight',
          darkBg ? 'text-white' : 'text-agri-dark'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed font-normal',
            darkBg ? 'text-slate-300' : 'text-agri-muted'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
