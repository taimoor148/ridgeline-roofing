import { services } from './content';

export const estimateFields = ['name', 'contact', 'zip', 'service', 'description'] as const;
export type EstimateField = (typeof estimateFields)[number];
export type EstimateValues = Record<EstimateField, string>;
export type EstimateErrors = Partial<Record<EstimateField, string>>;

export function parseEstimate(data: FormData | Record<string, unknown>): EstimateValues {
  const value = (key: EstimateField) => {
    const raw = data instanceof FormData ? data.get(key) : data[key];
    return typeof raw === 'string' ? raw.trim() : '';
  };
  return { name: value('name'), contact: value('contact'), zip: value('zip'), service: value('service'), description: value('description') };
}

export function validateEstimate(values: EstimateValues): EstimateErrors {
  const errors: EstimateErrors = {};
  if (values.name.length < 2 || values.name.length > 100) errors.name = 'Enter your name (2–100 characters).';
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.contact);
  const phone = /^\+?[\d\s().-]+$/.test(values.contact) && /^[\d]{10,11}$/.test(values.contact.replace(/\D/g, ''));
  if (values.contact.length > 200 || (!email && !phone)) errors.contact = 'Enter a valid email address or US phone number.';
  if (!/^\d{5}(?:-\d{4})?$/.test(values.zip)) errors.zip = 'Enter a five-digit US ZIP code.';
  if (values.service !== 'unsure' && !services.some(service => service.slug === values.service)) errors.service = 'Choose a service or select “I’m not sure.”';
  if (values.description.length < 10 || values.description.length > 1000) errors.description = 'Describe the issue in 10–1,000 characters.';
  return errors;
}
