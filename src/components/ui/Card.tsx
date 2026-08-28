import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverable = true,
  bordered = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white rounded-xl p-6 transition-all duration-300',
        bordered && 'border border-agri-border',
        hoverable && 'hover:shadow-lg hover:-translate-y-1 hover:border-agri-accent/40',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
