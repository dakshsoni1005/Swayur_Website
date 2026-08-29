import { companyData } from '@/data/company';

export const siteConfig = {
  name: companyData.name,
  brandName: `${companyData.brand} (${companyData.brandGujarati})`,
  tagline: companyData.tagline,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://swayuragrotech.com',
  ogImage: '/images/brand/og-image.jpg',
  description:
    'India\'s emerging science-backed agri-biologicals company — crafting biofertilizers, biopesticides, and microbial solutions that rebuild soil health, boost crop nutrition, and reduce farmer dependence on chemicals.',
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
      name: 'Products',
      href: '/products#explore-products',
      dropdown: [
        { name: 'Bio-NPK Consortia', href: '/products/bio-npk-consortia', category: 'Biofertilizer' },
        { name: 'Bio-ZSB', href: '/products/bio-zsb', category: 'Biofertilizer' },
        { name: 'Mycorrhiza', href: '/products/mycorrhiza', category: 'Biofertilizer' },
        { name: 'Trichoderma viride', href: '/products/trichoderma-viride', category: 'Biopesticide' },
        { name: 'Beauveria bassiana', href: '/products/beauveria-bassiana', category: 'Biopesticide' },
        { name: 'Pseudomonas fluorescens', href: '/products/pseudomonas-fluorescens', category: 'Biocontrol' },
      ],
    },
    { name: 'Our Science', href: '/our-science' },
    { name: 'Crop Solutions', href: '/crop-solutions' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  whatsappUrl: `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    'Hello Swayur Agrotech, I would like to inquire about KshetraPal products.'
  )}`,
};
