export type OfficialPosition = 'president' | 'vice_president' | 'senator' | 'congressman';
export type OfficialStatus = 'current' | 'former' | 'candidate';
export type FactType = 'achievement' | 'controversy' | 'promise' | 'legislation' | 'statement';
export type Language = 'en' | 'fil';

export interface Official {
  id: string;
  slug: string;
  full_name: string;
  position: OfficialPosition;
  party: string | null;
  photo_url: string | null;
  term_start: string | null;
  term_end: string | null;
  bio_en: string | null;
  bio_fil: string | null;
  status: OfficialStatus;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface Fact {
  id: string;
  official_id: string;
  type: FactType;
  title_en: string;
  title_fil: string;
  description_en: string;
  description_fil: string;
  source_url: string;
  source_name: string;
  date_occurred: string | null;
  verified: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
  categories?: Category[];
}

export interface Category {
  id: string;
  slug: string;
  name_en: string;
  name_fil: string;
}

export interface Profile {
  id: string;
  display_name: string | null;
  preferred_language: Language;
  newsletter_subscribed: boolean;
  created_at: string;
}

export interface Bookmark {
  id: string;
  user_id: string;
  official_id: string;
  created_at: string;
}
