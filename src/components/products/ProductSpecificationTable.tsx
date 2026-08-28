import React from 'react';
import { CompositionItem } from '@/types';

interface ProductSpecificationTableProps {
  composition: CompositionItem[];
  title?: string;
}

export const ProductSpecificationTable: React.FC<ProductSpecificationTableProps> = ({
  composition,
  title = 'Composition & Technical Specifications',
}) => {
  return (
    <div className="w-full space-y-4">
      {title && <h3 className="text-base sm:text-lg font-extrabold text-agri-dark">{title}</h3>}

      {/* Desktop Table View (md+) */}
      <div className="hidden md:block overflow-hidden border border-agri-border rounded-xl shadow-xs bg-white">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-agri-pale/80 border-b border-agri-border text-agri-dark font-bold text-xs uppercase tracking-wider">
              <th className="py-3.5 px-6">Parameter / Component</th>
              <th className="py-3.5 px-6">Guaranteed Specification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-agri-border/60">
            {composition.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-agri-pale/20 hover:bg-agri-pale/40 transition-colors'}
              >
                <td className="py-3.5 px-6 font-medium text-agri-dark">{item.parameter}</td>
                <td className="py-3.5 px-6 font-semibold text-agri-primary">{item.specification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Card View (<md) */}
      <div className="md:hidden space-y-3">
        {composition.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-xl bg-white border border-agri-border shadow-2xs space-y-1.5"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-agri-muted block">
              {item.parameter}
            </span>
            <div className="text-sm font-extrabold text-agri-dark break-words">
              {item.specification}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
