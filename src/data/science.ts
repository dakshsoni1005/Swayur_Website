export interface ScienceAreaItem {
  iconName: string;
  title: string;
  description: string;
}

export interface QualityPromiseItem {
  parameter: string;
  standard: string;
}

export interface ScienceProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const scienceAreasData: ScienceAreaItem[] = [
  {
    iconName: 'Microscope',
    title: 'Beneficial Microorganism Science',
    description:
      'Deep expertise in selecting, cultivating, and stabilizing agriculturally beneficial bacteria and fungi. We work with nitrogen fixers, phosphate solubilizers, potassium mobilizers, mycorrhizal fungi, biocontrol organisms, and plant growth-promoting rhizobacteria (PGPR).',
  },
  {
    iconName: 'FlaskConical',
    title: 'Biofertilizer Formulation Technology',
    description:
      'Advanced liquid and powder formulation expertise — developing products with guaranteed CFU counts, optimized pH ranges, and extended shelf life under Indian storage conditions.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Biopesticide Development',
    description:
      'Expertise in entomopathogenic fungi (Beauveria bassiana), biocontrol bacteria (Pseudomonas fluorescens, Trichoderma viride) and their practical application in Indian crop protection programs.',
  },
  {
    iconName: 'Dna',
    title: 'Microbial Fermentation',
    description:
      'Industrial fermentation knowledge for scaling up beneficial microbial production while maintaining strain viability, purity, and efficacy — from seed culture to commercial batch.',
  },
  {
    iconName: 'Sprout',
    title: 'Soil & Plant Microbiology',
    description:
      'Understanding of the complex interactions between soil microbiomes, plant roots, and nutrient cycles — enabling product design that works with nature rather than against it.',
  },
  {
    iconName: 'Recycle',
    title: 'Biological Crop Protection',
    description:
      'Science-based integrated biological crop protection programs — combining biofertilizers, biocontrol agents, and cultural practices for durable, residue-free crop protection.',
  },
];

export const scienceProcessSteps: ScienceProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Organism Selection',
    description:
      'Selection of high-performance beneficial bacterial and fungal strains from verified MTCC/ATCC registered collections.',
  },
  {
    stepNumber: '02',
    title: 'Formulation Optimization',
    description:
      'Developing liquid and powder carriers with optimized pH, osmotic stabilizers, and nutrient media for long shelf stability.',
  },
  {
    stepNumber: '03',
    title: 'Quality & CFU Testing',
    description:
      'Rigorous plating on selective media to guarantee minimum viable CFU counts (up to 5 × 10⁸ CFU/ml) and zero competitor contamination.',
  },
  {
    stepNumber: '04',
    title: 'Field Validation',
    description:
      'Multi-season field trial validation across diverse crop groups under real Indian soil and temperature conditions.',
  },
  {
    stepNumber: '05',
    title: 'Commercial Batch Release',
    description:
      'Manufactured strictly as per Fertilizer Control Order (FCO 1985) guidelines with lot-wise traceability and QR batch records.',
  },
];

export const qualityPromiseData: QualityPromiseItem[] = [
  {
    parameter: 'CFU Count Guarantee',
    standard: 'Minimum guaranteed count printed on label — verified by plating on selective media',
  },
  {
    parameter: 'Contamination Testing',
    standard: 'Every batch tested for competing organisms on non-selective media',
  },
  {
    parameter: 'pH Verification',
    standard: 'Batch pH tested and confirmed within specification range (5.0 – 7.0)',
  },
  {
    parameter: 'Shelf Life Testing',
    standard: 'Real-time stability testing under Indian storage temperature conditions',
  },
  {
    parameter: 'Raw Material Traceability',
    standard: 'Verified strain sources (MTCC/ATCC registered strains) — documented lot-wise',
  },
  {
    parameter: 'Batch Records',
    standard: 'Full batch documentation available on request via QR code on each pack',
  },
  {
    parameter: 'FCO Compliance',
    standard: 'All products manufactured and labeled as per Fertilizer Control Order 1985',
  },
];
