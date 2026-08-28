import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  floating?: boolean;
  text?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  floating = false,
  text = 'WhatsApp Us',
  className,
  size = 'md',
}) => {
  if (floating) {
    return (
      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Swayur Agrotech on WhatsApp"
        className={cn(
          'fixed bottom-6 right-6 z-50 flex items-center justify-center p-3.5 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba59] hover:scale-110 active:scale-95 transition-all duration-300 group',
          className
        )}
      >
        <MessageCircle className="w-6 h-6 fill-current stroke-none" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-sm font-semibold transition-all duration-300">
          WhatsApp Us
        </span>
      </a>
    );
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  };

  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center font-semibold bg-[#25D366] text-white hover:bg-[#20ba59] active:bg-[#1da851] rounded-lg shadow-sm transition-all duration-200 cursor-pointer',
        sizes[size],
        className
      )}
    >
      <MessageCircle className="w-4 h-4 fill-current stroke-none" />
      <span>{text}</span>
    </a>
  );
};
