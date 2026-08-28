'use client';

import React, { useState } from 'react';
import { MessageSquare, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { cropOptionsData } from '@/data/crops';
import { productsData } from '@/data/products';
import { validateFarmerForm } from '@/lib/validation';
import { buildFarmerWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/Button';

export const FarmerInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    crop: 'Cotton',
    product: 'Bio-NPK Consortia',
    location: '',
    farmSize: '',
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
    const validation = validateFarmerForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setGeneratedUrl(null);
      return;
    }

    const url = buildFarmerWhatsAppUrl(formData);
    setGeneratedUrl(url);

    // Launch WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-agri-border shadow-xs">
      <div className="space-y-1">
        <h3 className="text-xl font-extrabold text-agri-dark">Farmer & Crop Advisory Inquiry</h3>
        <p className="text-xs sm:text-sm text-agri-muted">
          Fill in your crop and location details to connect with our agronomy team via WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="fullName" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Ramesh Patel"
            className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
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

        {/* Email Address (Optional) */}
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
            placeholder="e.g. ramesh@gmail.com"
            className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
          />
          {errors.email && (
            <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>

        {/* Location / District */}
        <div className="space-y-1.5">
          <label htmlFor="location" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
            Location / District <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Anand, Gujarat"
            className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
          />
          {errors.location && (
            <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.location}
            </p>
          )}
        </div>

        {/* Select Crop */}
        <div className="space-y-1.5">
          <label htmlFor="crop" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
            Your Crop <span className="text-red-500">*</span>
          </label>
          <select
            id="crop"
            name="crop"
            value={formData.crop}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark bg-white focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
          >
            {cropOptionsData.map((c) => (
              <option key={c.id} value={c.name}>
                {c.icon} {c.name}
              </option>
            ))}
          </select>
          {errors.crop && (
            <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.crop}
            </p>
          )}
        </div>

        {/* Product Interested In */}
        <div className="space-y-1.5">
          <label htmlFor="product" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
            Product Interested In
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark bg-white focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
          >
            <option value="I need help choosing">❓ I need help choosing</option>
            <option value="All KshetraPal Products">🌱 All KshetraPal Products</option>
            {productsData.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name} ({p.category})
              </option>
            ))}
          </select>
        </div>

        {/* Farm Size (Optional) */}
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="farmSize" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
            Farm Size / Land Area <span className="text-agri-muted font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            id="farmSize"
            name="farmSize"
            value={formData.farmSize}
            onChange={handleChange}
            placeholder="e.g. 5 Acres"
            className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
          />
        </div>

        {/* Requirement / Message */}
        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="message" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
            Requirement Details / Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your soil condition, pest issue, or dosage query..."
            className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
          />
        </div>
      </div>

      <div className="pt-2 space-y-3">
        <Button type="submit" variant="whatsapp" size="lg" className="w-full">
          <MessageSquare className="w-5 h-5 mr-2" />
          Send Inquiry on WhatsApp
        </Button>

        {generatedUrl && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
            <p className="text-xs font-bold text-emerald-900 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> WhatsApp launch initiated!
            </p>
            <p className="text-xs text-emerald-700">
              If WhatsApp didn&apos;t open automatically, click the link below:
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
  );
};
