export const locales = ['en', 'fil'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
