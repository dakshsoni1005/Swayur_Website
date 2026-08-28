import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'dark' | 'earth' | 'gold' | 'outline';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'green',
  className,
  size = 'md',
}) => {
  const variantClasses = {
    green: 'bg-agri-pale text-agri-primary border border-agri-accent/20',
    dark: 'bg-agri-dark text-white',
    earth: 'bg-[#F5EBE6] text-[#7A401A] border border-[#E8D1C5]',
    gold: 'bg-[#FFF9E5] text-[#856404] border border-[#FFEBAA]',
    outline: 'bg-transparent text-agri-muted border border-agri-border',
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 font-medium rounded',
    md: 'text-xs px-2.5 py-1 font-semibold rounded-md uppercase tracking-wider',
  };

  return (
    <span className={cn('inline-flex items-center gap-1', variantClasses[variant], sizeClasses[size], className)}>
      {children}
    </span>
  );
};
