export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateIndianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  // 10 digits starting with 6, 7, 8, or 9 (with or without leading 91)
  const phoneRegex = /^(?:91)?[6-9]\d{9}$/;
  return phoneRegex.test(cleaned);
}

export function validateEmailFormat(email: string): boolean {
  if (!email || email.trim() === '') return true; // Email optional in most farmer forms
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateFarmerForm(data: {
  fullName: string;
  phone: string;
  email?: string;
  crop: string;
  location: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim() === '') {
    errors.fullName = 'Please enter your full name.';
  }

  if (!data.phone || data.phone.trim() === '') {
    errors.phone = 'Please enter your mobile number.';
  } else if (!validateIndianPhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  if (data.email && !validateEmailFormat(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.crop || data.crop.trim() === '') {
    errors.crop = 'Please select or enter your crop.';
  }

  if (!data.location || data.location.trim() === '') {
    errors.location = 'Please enter your location or district.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateDealerForm(data: {
  firmName: string;
  personName: string;
  phone: string;
  email?: string;
  territory: string;
  state: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.firmName || data.firmName.trim() === '') {
    errors.firmName = 'Please enter your business or firm name.';
  }

  if (!data.personName || data.personName.trim() === '') {
    errors.personName = 'Please enter the contact person name.';
  }

  if (!data.phone || data.phone.trim() === '') {
    errors.phone = 'Please enter your mobile number.';
  } else if (!validateIndianPhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  if (data.email && !validateEmailFormat(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.territory || data.territory.trim() === '') {
    errors.territory = 'Please enter your city or district.';
  }

  if (!data.state || data.state.trim() === '') {
    errors.state = 'Please enter your state.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateGeneralForm(data: {
  fullName: string;
  phone: string;
  email?: string;
  message: string;
}): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim() === '') {
    errors.fullName = 'Please enter your name.';
  }

  if (!data.phone || data.phone.trim() === '') {
    errors.phone = 'Please enter your mobile number.';
  } else if (!validateIndianPhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit mobile number.';
  }

  if (data.email && !validateEmailFormat(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.message || data.message.trim() === '') {
    errors.message = 'Please enter your message.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
