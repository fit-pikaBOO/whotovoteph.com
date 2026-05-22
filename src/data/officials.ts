import { Official } from "@/types";

// Static data for MVP - will be replaced by Supabase queries
export const officials: Official[] = [
  {
    id: "1",
    slug: "marcos-jr",
    full_name: "Ferdinand Marcos Jr.",
    position: "president",
    party: "Partido Federal ng Pilipinas",
    photo_url: null,
    term_start: "2022-06-30",
    term_end: "2028-06-30",
    bio_en:
      "Ferdinand 'Bongbong' Marcos Jr. is the 17th President of the Philippines, serving since June 30, 2022. He won with 31.6 million votes. He is the son of former President Ferdinand Marcos Sr. His administration has focused on infrastructure development, economic recovery, and strengthening international alliances.",
    bio_fil:
      "Si Ferdinand 'Bongbong' Marcos Jr. ang ika-17 Pangulo ng Pilipinas, naglilingkod mula Hunyo 30, 2022. Nanalo siya ng 31.6 milyong boto. Anak siya ng dating Pangulong Ferdinand Marcos Sr. Ang kanyang administrasyon ay nakatuon sa pagpapaunlad ng imprastraktura, pagbangon ng ekonomiya, at pagpapalakas ng mga internasyonal na alyansa.",
    status: "current",
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    slug: "sara-duterte",
    full_name: "Sara Duterte",
    position: "vice_president",
    party: "Lakas-CMD",
    photo_url: null,
    term_start: "2022-06-30",
    term_end: "2028-06-30",
    bio_en:
      "Sara Duterte is the 15th Vice President of the Philippines, serving since June 30, 2022. She won with 32.2 million votes, making her the youngest VP elected at 44. She previously served as Education Secretary until June 2024. She is the daughter of former President Rodrigo Duterte.",
    bio_fil:
      "Si Sara Duterte ang ika-15 Bise Pangulo ng Pilipinas, naglilingkod mula Hunyo 30, 2022. Nanalo siya ng 32.2 milyong boto, ginawa siyang pinakabatang VP na nahalal sa edad na 44. Dati siyang nagsilbi bilang Kalihim ng Edukasyon hanggang Hunyo 2024. Anak siya ng dating Pangulong Rodrigo Duterte.",
    status: "current",
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "3",
    slug: "bong-go",
    full_name: "Bong Go",
    position: "senator",
    party: "PDP-Laban",
    photo_url: null,
    term_start: "2025-06-30",
    term_end: "2031-06-30",
    bio_en:
      "Christopher 'Bong' Go is a Philippine senator who topped the 2025 senatorial race with over 27 million votes. He previously served as senator from 2019-2025 and was the former Special Assistant to President Duterte. He is the author of the Malasakit Center Act.",
    bio_fil:
      "Si Christopher 'Bong' Go ay isang senador ng Pilipinas na nanguna sa 2025 senatorial race na may higit 27 milyong boto. Dati siyang nagsilbi bilang senador mula 2019-2025 at dating Special Assistant ni Pangulong Duterte. Siya ang may-akda ng Malasakit Center Act.",
    status: "current",
    display_order: 3,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "4",
    slug: "erwin-tulfo",
    full_name: "Erwin Tulfo",
    position: "senator",
    party: "Lakas-CMD",
    photo_url: null,
    term_start: "2025-06-30",
    term_end: "2031-06-30",
    bio_en:
      "Erwin Tulfo is a Philippine senator and veteran broadcast journalist. He placed 2nd in the 2025 senatorial race. He previously served as Secretary of the Department of Social Welfare and Development (DSWD) but his appointment was bypassed by the Commission on Appointments.",
    bio_fil:
      "Si Erwin Tulfo ay isang senador ng Pilipinas at beteranong broadcast journalist. Pumangatlo siya sa 2025 senatorial race. Dati siyang nagsilbi bilang Kalihim ng Department of Social Welfare and Development (DSWD) ngunit na-bypass ang kanyang appointment ng Commission on Appointments.",
    status: "current",
    display_order: 4,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "5",
    slug: "ronald-dela-rosa",
    full_name: "Ronald dela Rosa",
    position: "senator",
    party: "PDP-Laban",
    photo_url: null,
    term_start: "2025-06-30",
    term_end: "2031-06-30",
    bio_en:
      "Ronald 'Bato' dela Rosa is a Philippine senator who placed 3rd in the 2025 senatorial race. He is a former Chief of the Philippine National Police (PNP) who led President Duterte's war on drugs campaign. He previously served as senator from 2019-2025.",
    bio_fil:
      "Si Ronald 'Bato' dela Rosa ay isang senador ng Pilipinas na pumangatlo sa 2025 senatorial race. Siya ay dating Hepe ng Philippine National Police (PNP) na namuno sa kampanya ni Pangulong Duterte laban sa droga. Dati siyang nagsilbi bilang senador mula 2019-2025.",
    status: "current",
    display_order: 5,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
];

export function getOfficialBySlug(slug: string): Official | undefined {
  return officials.find((o) => o.slug === slug);
}

export function getOfficialsByPosition(position: string): Official[] {
  return officials.filter((o) => o.position === position);
}
