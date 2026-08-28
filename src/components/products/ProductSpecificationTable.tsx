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
    <div className="w-full space-y-3">
      {title && <h3 className="text-lg font-bold text-agri-dark">{title}</h3>}
      <div className="overflow-hidden border border-agri-border rounded-xl shadow-xs bg-white">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-agri-pale/80 border-b border-agri-border text-agri-dark font-bold text-xs uppercase tracking-wider">
              <th className="py-3.5 px-4 sm:px-6">Parameter / Component</th>
              <th className="py-3.5 px-4 sm:px-6">Guaranteed Specification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-agri-border/60">
            {composition.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-agri-pale/20 hover:bg-agri-pale/40 transition-colors'}
              >
                <td className="py-3 px-4 sm:px-6 font-medium text-agri-dark">{item.parameter}</td>
                <td className="py-3 px-4 sm:px-6 font-semibold text-agri-primary">{item.specification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
