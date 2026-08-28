'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    inquiryType: 'Farmer Inquiry',
    crops: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Front-end state handler
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-agri-pale/80 border border-agri-accent/30 text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-agri-accent text-white flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-agri-dark">Inquiry Submitted Successfully!</h3>
        <p className="text-sm text-agri-muted max-w-md mx-auto">
          Thank you for reaching out to Swayur Agrotech. Our agronomy team will review your message and contact you within 24 hours.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-agri-border shadow-xs">
      <h3 className="text-xl font-bold text-agri-dark mb-4">Send Us a Message</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            State / District
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Anand, Gujarat"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="inquiryType" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            Inquiry Type *
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none bg-white"
          >
            <option value="Farmer Inquiry">Farmer Inquiry</option>
            <option value="Dealer Inquiry">Dealer Inquiry</option>
            <option value="Bulk/Institutional">Bulk / Institutional Inquiry</option>
            <option value="General">General Inquiry</option>
          </select>
        </div>

        <div>
          <label htmlFor="crops" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
            Crop(s) You Grow
          </label>
          <input
            type="text"
            id="crops"
            name="crops"
            value={formData.crops}
            onChange={handleChange}
            placeholder="e.g. Cotton, Soybean, Vegetables"
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-agri-dark uppercase tracking-wider mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your crop situation or query..."
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-agri-border focus:border-agri-accent focus:ring-2 focus:ring-agri-pale transition-all outline-none resize-y"
        />
      </div>

      <Button type="submit" size="lg" variant="primary" className="w-full" icon={<Send className="w-4 h-4" />}>
        Submit Inquiry
      </Button>

      <p className="text-xs text-center text-agri-muted pt-2">
        We typically respond within 24 hours. For urgent queries, WhatsApp us directly at{' '}
        <strong className="text-agri-primary">+91 9924838410</strong>
      </p>
    </form>
  );
};
