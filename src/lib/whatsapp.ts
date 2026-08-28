import { companyData } from '@/data/company';

const WHATSAPP_NUMBER = companyData.whatsapp.replace(/[^0-9]/g, '');

export function buildFarmerWhatsAppUrl(data: {
  fullName: string;
  phone: string;
  email?: string;
  crop: string;
  product?: string;
  location: string;
  farmSize?: string;
  message?: string;
}): string {
  let text = `Hello Swayur Agrotech (KshetraPal),\n\nI would like product and crop advisory information:\n`;
  text += `👤 Name: ${data.fullName}\n`;
  text += `📞 Phone: ${data.phone}\n`;
  if (data.email) text += `✉️ Email: ${data.email}\n`;
  text += `🌾 Crop: ${data.crop}\n`;
  if (data.product) text += `🌱 Product Interested: ${data.product}\n`;
  text += `📍 Location: ${data.location}\n`;
  if (data.farmSize) text += `📐 Farm Size: ${data.farmSize}\n`;
  if (data.message) text += `💬 Requirement: ${data.message}\n`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildDealerWhatsAppUrl(data: {
  firmName: string;
  personName: string;
  phone: string;
  email?: string;
  territory: string;
  state: string;
  businessType?: string;
  productLines?: string;
  message?: string;
}): string {
  let text = `Hello Swayur Agrotech,\n\nI am interested in becoming a KshetraPal Authorized Dealer:\n`;
  text += `🏢 Firm Name: ${data.firmName}\n`;
  text += `👤 Contact Person: ${data.personName}\n`;
  text += `📞 Phone: ${data.phone}\n`;
  if (data.email) text += `✉️ Email: ${data.email}\n`;
  text += `📍 City/District: ${data.territory}\n`;
  text += `🗺️ State: ${data.state}\n`;
  if (data.businessType) text += `💼 Business Type: ${data.businessType}\n`;
  if (data.productLines) text += `📦 Product Lines: ${data.productLines}\n`;
  if (data.message) text += `💬 Requirement: ${data.message}\n`;

  text += `\nPlease share dealership terms and MOQ details (Min Order: ₹10,000).`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildGeneralWhatsAppUrl(data: {
  fullName: string;
  phone: string;
  email?: string;
  message: string;
}): string {
  let text = `Hello Swayur Agrotech,\n\nI have a general inquiry:\n`;
  text += `👤 Name: ${data.fullName}\n`;
  text += `📞 Phone: ${data.phone}\n`;
  if (data.email) text += `✉️ Email: ${data.email}\n`;
  text += `💬 Message: ${data.message}\n`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
