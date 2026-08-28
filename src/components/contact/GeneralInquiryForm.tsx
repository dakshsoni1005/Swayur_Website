'use client';

import React, { useState } from 'react';
import { MessageSquare, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { validateGeneralForm } from '@/lib/validation';
import { buildGeneralWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/Button';

export const GeneralInquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    const validation = validateGeneralForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      setGeneratedUrl(null);
      return;
    }

    const url = buildGeneralWhatsAppUrl(formData);
    setGeneratedUrl(url);

    // Launch WhatsApp
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-agri-border shadow-xs">
      <div className="space-y-1">
        <h3 className="text-xl font-extrabold text-agri-dark">General Inquiry</h3>
        <p className="text-xs sm:text-sm text-agri-muted">
          Have a question for Swayur Agrotech? Send us a direct message via WhatsApp.
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label htmlFor="gen-fullName" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="gen-fullName"
            name="fullName"
            autoComplete="name"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Anand Kumar"
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
          <label htmlFor="gen-phone" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="gen-phone"
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
          <label htmlFor="gen-email" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
            Email Address <span className="text-agri-muted font-normal">(Optional)</span>
          </label>
          <input
            type="email"
            id="gen-email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. anand@gmail.com"
            className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
          />
          {errors.email && (
            <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="gen-message" className="block text-xs font-bold text-agri-dark uppercase tracking-wider">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="gen-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            className="w-full px-4 py-3 rounded-xl border border-agri-border text-sm text-agri-dark focus:border-agri-accent focus:ring-2 focus:ring-agri-pale outline-none"
          />
          {errors.message && (
            <p className="text-xs text-red-600 font-semibold flex items-center gap-1 mt-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="pt-2 space-y-3">
        <Button type="submit" variant="whatsapp" size="lg" className="w-full">
          <MessageSquare className="w-5 h-5 mr-2" />
          Send Message on WhatsApp
        </Button>

        {generatedUrl && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
            <p className="text-xs font-bold text-emerald-900 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> WhatsApp launch initiated!
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
