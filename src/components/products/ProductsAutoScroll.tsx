'use client';

import { useEffect } from 'react';

export const ProductsAutoScroll: React.FC = () => {
  useEffect(() => {
    // Scroll directly to the products filter section when visiting /products page
    const timer = setTimeout(() => {
      const element = document.getElementById('explore-products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
};
