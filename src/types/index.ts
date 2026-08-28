export interface CompanyInfo {
  name: string;
  legalName: string;
  brand: string;
  brandGujarati: string;
  tagline: string;
  llpin: string;
  gstin: string;
  address: {
    street: string;
    locality: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    full: string;
  };
  phone: string;
  whatsapp: string;
  email: string;
  businessNature: string;
  regulatoryCompliance: string[];
}

export interface CompositionItem {
  parameter: string;
  specification: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'Biofertilizer' | 'Biopesticide' | 'Biocontrol';
  subcategory?: string;
  formulation: 'Liquid' | 'Powder (WP)';
  netContent?: string;
  image?: string;
  labelTexture?: string;
  tagline: string;
  description: string;
  composition: CompositionItem[];
  benefits: string[];
  dosage: string;
  directionsForUse: string[];
  applicationMethods?: string[];
  recommendedCrops: string[];
  shelfLife: string;
  storage: string;
  fcoCompliant: boolean;
  ctaText?: string;
  pdfReference?: string;
  targetPestsOrDiseases?: string[];
  targetPestsOrDiseasesTitle?: string;
  safetyWarning?: string;
}

export interface CropMatrixItem {
  cropGroup: string;
  bioNpk: boolean;
  bioZsb: boolean;
  mycorrhiza: boolean;
  trichoderma: boolean;
  beauveria: boolean;
  pseudomonas: boolean;
  recommendedHighlights?: string[];
}

export interface ProductCombo {
  title: string;
  products: string[];
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'About Biological Products' | 'Using KshetraPal Products' | 'For Dealers';
  answerPoints?: string[];
  relatedProductSlugs?: string[];
}

export interface PageSEO {
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
  canonicalPath: string;
}
