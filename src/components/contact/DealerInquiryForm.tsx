'use client';

import React, { useState } from 'react';
import { Store, MessageSquare, AlertCircle, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { validateDealerForm } from '@/lib/validation';
import { buildDealerWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/Button';

export const DealerInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firmName: '',
    personName: '',
    phone: '',
    email: '',
    territory: '',
    state: 'Gujarat',
    businessType: 'Agri-Input Retailer',
    productLines: 'All KshetraPal Formulations',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateDealerForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setGeneratedUrl(null);
      return;
    }

    const url = buildDealerWhatsAppUrl(formData);
    setGeneratedUrl(url);

    // Launch WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-6">
      {/* Sourced Dealer Information Block */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-agri-pale/90 via-white to-emerald-50 border-2 border-agri-accent/40 space-y-4">
        <div className="flex items-center gap-2 text-agri-dark">
          <Store className="w-5 h-5 text-agri-accent" />
          <h4 className="text-lg font-bold">Authorized Dealer Program & Terms</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          <div className="p-3 rounded-xl bg-white border border-agri-border shadow-2xs">
            <span className="text-agri-muted block text-[11px] font-bold uppercase tracking-wider">
              Minimum Order Quantity (MOQ)
            </span>
            <strong className="text-base font-extrabold text-agri-dark">₹10,000 Initial Order</strong>
          </div>
          <div className="p-3 rounded-xl bg-white border border-agri-border shadow-2xs">
            <span className="text-agri-muted block text-[11px] font-bold uppercase tracking-wider">
              Quality Assurance
            </span>
            <strong className="text-base font-extrabold text-agri-dark">FCO 1985 & ISO 9001:2015</strong>
          </div>
        </div>

        <div className="pt-2">
          <span className="text-xs font-bold text-agri-dark block mb-2">Dealer Support Package Included:</span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-agri-muted">
            <li className="flex items-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-agri-accent shrink-0 mt-0.5" />
              <span>Product & application training for staff</span>
            </li>
            <li className="flex items-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-agri-accent shrink-0 mt-0.5" />
              <span>Printed brochures & display materials</span>
            </li>
            <li className="flex items-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-agri-accent shrink-0 mt-0.5" />
              <span>Demo product samples for farmer trials</span>
            </li>
            <li className="flex items-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-agri-accent shrink-0 mt-0.5" />
              <span>Direct technical support (+91 9924838410)</span>
            </li>
            <li className="flex items-start gap-1.5 sm:col-span-2">
              <ShieldCheck className="w-4 h-4 text-agri-accent shrink-0 mt-0.5" />
              <span>Co-demonstration plot program in dealer area</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Dealer Application Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-agri-border shadow-xs">
        <div className="space-y-1">
          <h3 className="text-xl font-extrabold text-agri-dark">Dealer Partnership Inquiry Form</h3>
          <p className="text-xs sm:text-sm text-agri-muted">
            Interested in stocking KshetraPal biofertilizers in your district? Fill in your firm details below.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Business / Firm Name */}
          <div className="space-y-1.5">
            <label htmlFor="firmName" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
              Business / Firm Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firmName"
              name="firmName"
              value={formData.firmName}
              onChange={handleChange}
              placeholder="e.g. Kisan Krishi Seva Kendra"
              className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
            />
            {errors.firmName && (
              <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.firmName}
              </p>
            )}
          </div>

          {/* Contact Person Name */}
          <div className="space-y-1.5">
            <label htmlFor="personName" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
              Contact Person Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="personName"
              name="personName"
              autoComplete="name"
              value={formData.personName}
              onChange={handleChange}
              placeholder="e.g. Rajesh Shah"
              className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
            />
            {errors.personName && (
              <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.personName}
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 9876543210"
              className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
            />
            {errors.phone && (
              <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
              Email Address <span className="text-agri-muted font-normal">(Optional)</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. kisankrishi@gmail.com"
              className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
            />
            {errors.email && (
              <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
              </p>
            )}
          </div>

          {/* City / District */}
          <div className="space-y-1.5">
            <label htmlFor="territory" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
              City / District <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="territory"
              name="territory"
              value={formData.territory}
              onChange={handleChange}
              placeholder="e.g. Anand / Vadodara / Rajkot"
              className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
            />
            {errors.territory && (
              <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.territory}
              </p>
            )}
          </div>

          {/* State */}
          <div className="space-y-1.5">
            <label htmlFor="state" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
              State <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="e.g. Gujarat"
              className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
            />
            {errors.state && (
              <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.state}
              </p>
            )}
          </div>

          {/* Business Type */}
          <div className="space-y-1.5">
            <label htmlFor="businessType" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
              Business Type
            </label>
            <select
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark bg-white focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
            >
              <option value="Agri-Input Retailer">🏪 Agri-Input Retailer</option>
              <option value="Wholesaler / Distributor">🏢 Wholesaler / Distributor</option>
              <option value="FPO / Farmer Producer Company">🌾 FPO / Farmer Producer Company</option>
              <option value="Corporate / Bulk Buyer">🏭 Corporate / Bulk Buyer</option>
            </select>
          </div>

          {/* Interested Product Lines */}
          <div className="space-y-1.5">
            <label htmlFor="productLines" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
              Product Lines of Interest
            </label>
            <select
              id="productLines"
              name="productLines"
              value={formData.productLines}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark bg-white focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
            >
              <option value="All KshetraPal Formulations">🌱 All 6 KshetraPal Products</option>
              <option value="Biofertilizers Only (Bio-NPK, Bio-ZSB, Mycorrhiza)">🌱 Biofertilizers Range Only</option>
              <option value="Biopesticides & Biocontrol Only">🛡️ Biopesticides Range Only</option>
            </select>
          </div>

          {/* Message / Requirement */}
          <div className="space-y-1.5 sm:col-span-2">
            <label htmlFor="message" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
              Additional Details / Requirement
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your coverage area, existing brands sold, or order size..."
              className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
            />
          </div>
        </div>

        <div className="pt-2 space-y-3">
          <Button type="submit" variant="whatsapp" size="lg" className="w-full">
            <MessageSquare className="w-5 h-5 mr-2" />
            Submit Dealer Inquiry on WhatsApp
          </Button>

          {generatedUrl && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <p className="text-xs font-bold text-emerald-900 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Dealer WhatsApp launch initiated!
              </p>
              <a
                href={generatedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-extrabold text-agri-primary hover:underline"
              >
                Open WhatsApp Message Directly <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
