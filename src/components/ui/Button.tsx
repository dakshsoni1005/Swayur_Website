import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  children,
  className,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer rounded-lg shadow-xs';

  const variants = {
    primary:
      'bg-agri-dark text-white hover:bg-agri-primary hover:shadow-md active:bg-agri-dark border border-transparent',
    secondary:
      'bg-agri-accent text-white hover:bg-agri-medium hover:shadow-md active:bg-agri-accent border border-transparent',
    outline:
      'bg-transparent text-agri-dark border-2 border-agri-dark hover:bg-agri-dark hover:text-white active:bg-agri-primary',
    ghost:
      'bg-transparent text-agri-dark hover:bg-agri-pale hover:text-agri-primary border border-transparent shadow-none',
    whatsapp:
      'bg-[#25D366] text-white hover:bg-[#20ba59] hover:shadow-md active:bg-[#1da851] border border-transparent font-semibold',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};
