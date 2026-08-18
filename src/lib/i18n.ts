export type Locale = "en" | "id";

export type Bilingual = { en: string; id: string };

export const L = (en: string, id: string): Bilingual => ({ en, id });

export const pick = (value: Bilingual | string, locale: Locale): string =>
  typeof value === "string" ? value : value[locale];

export const en = (value: Bilingual | string): string =>
  pick(value, "en");

export const id = (value: Bilingual | string): string =>
  pick(value, "id");
