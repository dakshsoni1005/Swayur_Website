'use client';

import React, { useState } from 'react';
import { InquiryTypeSelector, InquiryType } from '@/components/contact/InquiryTypeSelector';
import { FarmerInquiryForm } from '@/components/contact/FarmerInquiryForm';
import { DealerInquiryForm } from '@/components/contact/DealerInquiryForm';
import { GeneralInquiryForm } from '@/components/contact/GeneralInquiryForm';

export const ContactContainer: React.FC = () => {
  const [selectedType, setSelectedType] = useState<InquiryType>('farmer');

  return (
    <div className="space-y-8">
      {/* 3-Way Inquiry Selector */}
      <InquiryTypeSelector selectedType={selectedType} onSelect={setSelectedType} />

      {/* Form Display */}
      {selectedType === 'farmer' && <FarmerInquiryForm />}
      {selectedType === 'dealer' && <DealerInquiryForm />}
      {selectedType === 'general' && <GeneralInquiryForm />}
    </div>
  );
};
