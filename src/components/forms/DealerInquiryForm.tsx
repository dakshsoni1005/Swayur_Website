'use client';

import React, { useState } from 'react';
import { Store, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const DealerInquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firmName: '',
    personName: '',
    phone: '',
    currentBrands: '',
    territory: '',
    turnover: '< ₹1L',
    productLines: 'All products',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-agri-pale/80 border border-agri-accent/30 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-agri-accent text-white flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-agri-dark">Dealer Application Received</h3>
        <p className="text-sm text-agri-muted max-w-md mx-auto">
          Thank you for your interest in partnering with Swayur Agrotech LLP. Our dealership sales manager will review your profile and reach out shortly.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-agri-border shadow-xs">
      <div className="flex items-center gap-2 mb-2">
        <Store className="w-5 h-5 text-agri-accent" />
        <h3 className="text-xl font-bold text-agri-dark">Dealer Partnership Form</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firmName" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            Name of Dealer / Firm *
          </label>
          <input
            type="text"
            id="firmName"
            name="firmName"
            required
            value={formData.firmName}
            onChange={handleChange}
            placeholder="e.g. Patel Krushi Seva Kendra"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="personName" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            Contact Person Name *
          </label>
          <input
            type="text"
            id="personName"
            name="personName"
            required
            value={formData.personName}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="dealerPhone" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            id="dealerPhone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="territory" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            District / Taluka of Operation *
          </label>
          <input
            type="text"
            id="territory"
            name="territory"
            required
            value={formData.territory}
            onChange={handleChange}
            placeholder="e.g. Anand, Kheda"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="turnover" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            Current Monthly Turnover (Approx)
          </label>
          <select
            id="turnover"
            name="turnover"
            value={formData.turnover}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none bg-white"
          >
            <option value="< ₹1L">&lt; ₹1 Lakh</option>
            <option value="₹1–5L">₹1 – ₹5 Lakhs</option>
            <option value="₹5–20L">₹5 – ₹20 Lakhs</option>
            <option value="> ₹20L">&gt; ₹20 Lakhs</option>
          </select>
        </div>

        <div>
          <label htmlFor="productLines" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            Interest in Product Lines
          </label>
          <select
            id="productLines"
            name="productLines"
            value={formData.productLines}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none bg-white"
          >
            <option value="All products">All KshetraPal Products</option>
            <option value="Biofertilizers">Biofertilizers Only</option>
            <option value="Biopesticides">Biopesticides Only</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="currentBrands" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
          Current Agri-Input Brands Handled
        </label>
        <textarea
          id="currentBrands"
          name="currentBrands"
          rows={3}
          value={formData.currentBrands}
          onChange={handleChange}
          placeholder="List major fertilizer, seed, or pesticide brands you currently sell..."
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none resize-y"
        />
      </div>

      <Button type="submit" size="lg" variant="secondary" className="w-full">
        Apply for Dealership
      </Button>
    </form>
  );
};
