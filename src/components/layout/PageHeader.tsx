import React from 'react';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs, BreadcrumbItem } from '@/components/navigation/Breadcrumbs';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs,
  className,
}) => {
  return (
    <div className={cn('bg-gradient-to-b from-agri-pale/70 via-agri-pale/30 to-transparent py-10 sm:py-14 border-b border-agri-border/60', className)}>
      <Container>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-4" />}
        <div className="max-w-4xl space-y-3">
          {badge && (
            <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-agri-primary text-white">
              {badge}
            </span>
          )}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-agri-dark tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg text-agri-muted leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
};
