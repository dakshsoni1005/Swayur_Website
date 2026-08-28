export interface ValueCardItem {
  iconName: string;
  title: string;
  description: string;
}

export interface StoryStepItem {
  step: string;
  title: string;
  description: string;
}

export const aboutStorySteps: StoryStepItem[] = [
  {
    step: '01',
    title: 'The Soil Challenge',
    description:
      'Decades of intensive chemical farming led to depleted microbial communities, reduced organic carbon, hardened soil structures, and diminishing returns on fertilizer investment across Indian farms.',
  },
  {
    step: '02',
    title: 'Understanding Nature',
    description:
      'Recognizing that beneficial microorganisms — bacteria, fungi, and microbial allies — have fed plants and rebuilt fertile soils naturally for millions of years.',
  },
  {
    step: '03',
    title: 'Microbial Science',
    description:
      'Isolating, concentrating, and stabilizing specific beneficial organisms into reliable, high-CFU liquid and powder formulations designed for Indian agro-climatic conditions.',
  },
  {
    step: '04',
    title: 'KshetraPal (ક્ષેત્રપાલ)',
    description:
      'Launching our flagship brand — meaning "Protector of the Field" — to deliver FCO 1985 compliant biofertilizers and biopesticides directly to Indian farmers.',
  },
  {
    step: '05',
    title: 'Farmer-Focused Solutions',
    description:
      'Combining science-backed biological inputs with crop-specific advisory, application guidance, and field support to rebuild long-term soil health and boost farmer yields.',
  },
];

export const coreValuesData: ValueCardItem[] = [
  {
    iconName: 'Microscope',
    title: 'Scientific Integrity',
    description:
      'Every product claim is backed by microbiology, field trial data, and quality testing. We never overstate what our products do.',
  },
  {
    iconName: 'Sprout',
    title: 'Farmer First',
    description:
      'The farmer\'s success is our success. We develop products and advisory services that create real, measurable outcomes on the farm.',
  },
  {
    iconName: 'Leaf',
    title: 'Environmental Responsibility',
    description:
      'Biological inputs are not just good for crops — they are good for the planet. We are committed to agriculture that leaves soil better than we found it.',
  },
  {
    iconName: 'Eye',
    title: 'Transparency',
    description:
      'We display guaranteed CFU counts, clear application guidelines, and honest efficacy claims on every product label and in all our communications.',
  },
  {
    iconName: 'Lightbulb',
    title: 'Continuous Innovation',
    description:
      'Soil science is evolving. We stay ahead — researching new organisms, new formulations, and new delivery systems to serve tomorrow\'s farmer today.',
  },
];
