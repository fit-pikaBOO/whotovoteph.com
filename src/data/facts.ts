import { Fact } from "@/types";

// Static facts data for MVP - will be replaced by Supabase queries
export const facts: Fact[] = [
  // ===== MARCOS JR. =====
  // Achievements
  {
    id: "f1",
    official_id: "1",
    type: "achievement",
    title_en: "Build Better More Infrastructure Program",
    title_fil: "Build Better More Infrastructure Program",
    description_en:
      "Continued and expanded the infrastructure development program with a target of 194 flagship projects worth PHP 9.6 trillion, focusing on transportation, water, energy, and digital infrastructure.",
    description_fil:
      "Ipinagpatuloy at pinalawak ang infrastructure development program na may target na 194 pangunahing proyekto na nagkakahalaga ng PHP 9.6 trilyon, nakatuon sa transportasyon, tubig, enerhiya, at digital infrastructure.",
    source_url: "https://www.neda.gov.ph/infrastructure-flagship-projects/",
    source_name: "NEDA",
    date_occurred: "2023-01-01",
    verified: true,
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f2",
    official_id: "1",
    type: "achievement",
    title_en: "New Agrarian Emancipation Act (RA 11953)",
    title_fil: "New Agrarian Emancipation Act (RA 11953)",
    description_en:
      "Signed into law the New Agrarian Emancipation Act, which condones over PHP 57.56 billion in agrarian reform debts of 610,054 farmer-beneficiaries.",
    description_fil:
      "Nilagdaan ang New Agrarian Emancipation Act, na nagpapatawad ng higit PHP 57.56 bilyon na utang sa agrarian reform ng 610,054 farmer-beneficiaries.",
    source_url: "https://www.officialgazette.gov.ph/2023/07/07/republic-act-no-11953/",
    source_name: "Official Gazette",
    date_occurred: "2023-07-07",
    verified: true,
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f3",
    official_id: "1",
    type: "achievement",
    title_en: "Firm Stance on West Philippine Sea",
    title_fil: "Matatag na Paninindigan sa West Philippine Sea",
    description_en:
      "Reasserted Philippine sovereignty over the West Philippine Sea, strengthened alliance with the US, and increased transparency of Chinese aggression through public documentation of incidents.",
    description_fil:
      "Muling ipinagtanggol ang soberanya ng Pilipinas sa West Philippine Sea, pinatibay ang alyansa sa US, at dinagdagan ang transparency ng Chinese aggression sa pamamagitan ng public documentation ng mga insidente.",
    source_url: "https://www.rappler.com/nation/marcos-west-philippine-sea-policy/",
    source_name: "Rappler",
    date_occurred: "2023-06-01",
    verified: true,
    display_order: 3,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f4",
    official_id: "1",
    type: "achievement",
    title_en: "Maharlika Investment Fund (RA 11954)",
    title_fil: "Maharlika Investment Fund (RA 11954)",
    description_en:
      "Established the Maharlika Investment Fund, a sovereign wealth fund capitalized with PHP 125 billion, aimed at investing in infrastructure, technology, and economic development.",
    description_fil:
      "Itinatag ang Maharlika Investment Fund, isang sovereign wealth fund na may kapital na PHP 125 bilyon, na naglalayong mag-invest sa infrastructure, technology, at economic development.",
    source_url: "https://www.officialgazette.gov.ph/2023/07/18/republic-act-no-11954/",
    source_name: "Official Gazette",
    date_occurred: "2023-07-18",
    verified: true,
    display_order: 4,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f5",
    official_id: "1",
    type: "achievement",
    title_en: "POGO Ban",
    title_fil: "POGO Ban",
    description_en:
      "Ordered the complete ban of Philippine Offshore Gaming Operations (POGOs) by end of 2024, addressing concerns about criminal activity, human trafficking, and social disruption linked to POGO operations.",
    description_fil:
      "Nag-utos ng kumpletong pagbabawal ng Philippine Offshore Gaming Operations (POGOs) bago matapos ang 2024, tinutugunan ang mga alalahanin tungkol sa kriminal na aktibidad, human trafficking, at social disruption na kaugnay ng POGO operations.",
    source_url: "https://www.philstar.com/headlines/2024/07/22/2371234/marcos-orders-total-pogo-ban",
    source_name: "PhilStar",
    date_occurred: "2024-07-22",
    verified: true,
    display_order: 5,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  // Controversies
  {
    id: "f6",
    official_id: "1",
    type: "controversy",
    title_en: "Infrastructure Corruption Allegations",
    title_fil: "Alegasyon ng Korupsyon sa Infrastructure",
    description_en:
      "Multiple flood control projects under the administration faced corruption allegations, with reports of overpriced contracts and substandard materials. Several DPWH officials were suspended pending investigation.",
    description_fil:
      "Maraming flood control project sa ilalim ng administrasyon ang hinarap ng alegasyon ng korupsyon, na may mga ulat ng overpriced na kontrata at substandard na materyales. Ilang opisyal ng DPWH ang na-suspend habang may imbestigasyon.",
    source_url: "https://www.inquirer.net/dpwh-flood-control-corruption",
    source_name: "Philippine Daily Inquirer",
    date_occurred: "2024-01-15",
    verified: true,
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f7",
    official_id: "1",
    type: "controversy",
    title_en: "Marcos Family Estate Tax Issue",
    title_fil: "Isyu ng Estate Tax ng Pamilya Marcos",
    description_en:
      "The Marcos family owes an estimated PHP 203 billion in estate taxes from the wealth accumulated during the Marcos Sr. regime. The BIR has been criticized for not aggressively pursuing collection.",
    description_fil:
      "Ang pamilya Marcos ay may utang na tinatayang PHP 203 bilyon sa estate tax mula sa kayamanang naiipon sa panahon ng rehimen ni Marcos Sr. Ang BIR ay kinritiko dahil hindi agresibong hinahabol ang koleksyon.",
    source_url: "https://verafiles.org/articles/marcos-estate-tax",
    source_name: "Vera Files",
    date_occurred: "2022-09-01",
    verified: true,
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f8",
    official_id: "1",
    type: "controversy",
    title_en: "Historical Revisionism Concerns",
    title_fil: "Mga Alalahanin sa Historical Revisionism",
    description_en:
      "Critics have accused the administration of historical revisionism regarding the Martial Law era under Marcos Sr., including attempts to rebrand the period and minimize human rights abuses documented by Amnesty International and the Philippine government's own Human Rights Victims Claims Board.",
    description_fil:
      "Inakusahan ng mga kritiko ang administrasyon ng historical revisionism tungkol sa panahon ng Martial Law sa ilalim ni Marcos Sr., kabilang ang mga pagtatangkang i-rebrand ang panahon at bawasan ang mga pang-aabuso sa karapatang pantao na naidokumento ng Amnesty International at ng Human Rights Victims Claims Board ng gobyerno ng Pilipinas.",
    source_url: "https://www.amnesty.org/en/latest/news/philippines-martial-law/",
    source_name: "Amnesty International",
    date_occurred: "2023-09-21",
    verified: true,
    display_order: 3,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f9",
    official_id: "1",
    type: "controversy",
    title_en: "Confidential Funds Controversy",
    title_fil: "Kontrobersya ng Confidential Funds",
    description_en:
      "Questions arose over the use of large confidential and intelligence funds across various government agencies. The Office of the Vice President and the Department of Education were scrutinized for their use of confidential funds.",
    description_fil:
      "Lumitaw ang mga tanong tungkol sa paggamit ng malaking confidential at intelligence funds sa iba't ibang ahensya ng gobyerno. Ang Opisina ng Bise Pangulo at ang Department of Education ay sinuri sa kanilang paggamit ng confidential funds.",
    source_url: "https://www.rappler.com/nation/confidential-funds-controversy/",
    source_name: "Rappler",
    date_occurred: "2023-11-01",
    verified: true,
    display_order: 4,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f10",
    official_id: "1",
    type: "controversy",
    title_en: "Sugar Import Controversy",
    title_fil: "Kontrobersya sa Pag-import ng Asukal",
    description_en:
      "The sugar importation controversy involved unauthorized sugar imports that led to the resignation of the Sugar Regulatory Administration head. Questions about who approved the 300,000 metric tons of sugar imports remained unresolved.",
    description_fil:
      "Ang kontrobersya sa pag-import ng asukal ay may kinalaman sa hindi awtorisadong pag-import ng asukal na humantong sa pagbibitiw ng pinuno ng Sugar Regulatory Administration. Ang mga tanong kung sino ang nag-apruba ng 300,000 metric tons na pag-import ng asukal ay nanatiling hindi nalutas.",
    source_url: "https://www.philstar.com/headlines/sugar-import-controversy",
    source_name: "PhilStar",
    date_occurred: "2022-08-15",
    verified: true,
    display_order: 5,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },

  // ===== SARA DUTERTE =====
  // Achievements
  {
    id: "f11",
    official_id: "2",
    type: "achievement",
    title_en: "Matatag Curriculum Implementation",
    title_fil: "Implementasyon ng Matatag Curriculum",
    description_en:
      "As Education Secretary, spearheaded the Matatag curriculum reform to decongest K-12, reducing subjects and focusing on core competencies, reading, and math fundamentals.",
    description_fil:
      "Bilang Kalihim ng Edukasyon, pinamunuan ang Matatag curriculum reform para i-decongest ang K-12, binabawasan ang mga subject at nakatuon sa core competencies, pagbabasa, at math fundamentals.",
    source_url: "https://www.deped.gov.ph/matatag-curriculum/",
    source_name: "DepEd",
    date_occurred: "2023-08-01",
    verified: true,
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f12",
    official_id: "2",
    type: "achievement",
    title_en: "Highest Voted Vice President",
    title_fil: "Pinakamataas na Boto na Bise Pangulo",
    description_en:
      "Won the 2022 vice presidential race with 32.2 million votes, the highest number of votes ever received by a VP candidate in Philippine history.",
    description_fil:
      "Nanalo sa 2022 vice presidential race na may 32.2 milyong boto, ang pinakamataas na bilang ng boto na natanggap ng isang VP candidate sa kasaysayan ng Pilipinas.",
    source_url: "https://www.comelec.gov.ph/2022-election-results",
    source_name: "COMELEC",
    date_occurred: "2022-05-09",
    verified: true,
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f13",
    official_id: "2",
    type: "achievement",
    title_en: "Davao City Development as Mayor",
    title_fil: "Pag-unlad ng Davao City bilang Mayor",
    description_en:
      "Served as Mayor of Davao City (2016-2022), continuing the city's economic growth and maintaining its reputation as one of the safest cities in the Philippines.",
    description_fil:
      "Nagsilbi bilang Mayor ng Davao City (2016-2022), ipinagpatuloy ang economic growth ng lungsod at pinanatili ang reputasyon nito bilang isa sa mga pinakaligtas na lungsod sa Pilipinas.",
    source_url: "https://www.davaocity.gov.ph",
    source_name: "Davao City Government",
    date_occurred: "2022-06-01",
    verified: true,
    display_order: 3,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  // Controversies
  {
    id: "f14",
    official_id: "2",
    type: "controversy",
    title_en: "Confidential Funds Scandal",
    title_fil: "Eskandalo ng Confidential Funds",
    description_en:
      "Faced scrutiny over PHP 612.5 million in confidential and intelligence funds allocated to the Office of the Vice President and DepEd. Critics questioned the need for such large confidential funds for civilian offices.",
    description_fil:
      "Hinarap ang pagsusuri sa PHP 612.5 milyon sa confidential at intelligence funds na inilaan sa Opisina ng Bise Pangulo at DepEd. Kinwestiyon ng mga kritiko ang pangangailangan ng ganung kalaking confidential funds para sa mga sibilyang opisina.",
    source_url: "https://www.rappler.com/nation/sara-duterte-confidential-funds/",
    source_name: "Rappler",
    date_occurred: "2023-11-15",
    verified: true,
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f15",
    official_id: "2",
    type: "controversy",
    title_en: "Assassination Threats Against President Marcos",
    title_fil: "Banta ng Pagpaslang kay Pangulong Marcos",
    description_en:
      "Made public statements about having told someone to assassinate President Marcos, House Speaker Romualdez, and herself if she were killed. The statements were made during a press conference and led to criminal complaints.",
    description_fil:
      "Gumawa ng mga pampublikong pahayag na nagsabing may sinabihan siyang ipapatay si Pangulong Marcos, House Speaker Romualdez, at ang kanyang sarili kung siya ay mapatay. Ang mga pahayag ay ginawa sa isang press conference at humantong sa mga criminal complaint.",
    source_url: "https://www.inquirer.net/sara-duterte-assassination-threat",
    source_name: "Philippine Daily Inquirer",
    date_occurred: "2024-11-23",
    verified: true,
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f16",
    official_id: "2",
    type: "controversy",
    title_en: "Impeachment as Vice President",
    title_fil: "Impeachment bilang Bise Pangulo",
    description_en:
      "Became the first sitting Vice President in Philippine history to be impeached by the House of Representatives in February 2025, following complaints related to the confidential funds issue and other controversies.",
    description_fil:
      "Naging unang nakaupo na Bise Pangulo sa kasaysayan ng Pilipinas na na-impeach ng House of Representatives noong Pebrero 2025, kasunod ng mga reklamo kaugnay ng isyu ng confidential funds at iba pang kontrobersya.",
    source_url: "https://www.rappler.com/nation/sara-duterte-impeachment/",
    source_name: "Rappler",
    date_occurred: "2025-02-01",
    verified: true,
    display_order: 3,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f17",
    official_id: "2",
    type: "controversy",
    title_en: "Break with Marcos Alliance",
    title_fil: "Pagputol sa Alyansa kay Marcos",
    description_en:
      "The UniTeam alliance between Marcos and Duterte completely collapsed by mid-2024, with Sara resigning as Education Secretary and publicly criticizing the Marcos administration.",
    description_fil:
      "Ang UniTeam alliance sa pagitan nina Marcos at Duterte ay tuluyang bumagsak noong kalagitnaan ng 2024, na may pagbibitiw ni Sara bilang Kalihim ng Edukasyon at hayagang pagpuna sa administrasyong Marcos.",
    source_url: "https://www.philstar.com/marcos-duterte-alliance-collapse",
    source_name: "PhilStar",
    date_occurred: "2024-06-19",
    verified: true,
    display_order: 4,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },

  // ===== BONG GO =====
  // Achievements
  {
    id: "f18",
    official_id: "3",
    type: "achievement",
    title_en: "Malasakit Center Act (RA 11463)",
    title_fil: "Malasakit Center Act (RA 11463)",
    description_en:
      "Authored the Malasakit Center Act, establishing one-stop shops in hospitals nationwide where indigent patients can access medical and financial assistance from various government agencies.",
    description_fil:
      "Sumulat ng Malasakit Center Act, na nagtatatag ng one-stop shops sa mga ospital sa buong bansa kung saan maaaring makakuha ang mga indigent na pasyente ng medikal at pinansyal na tulong mula sa iba't ibang ahensya ng gobyerno.",
    source_url: "https://www.officialgazette.gov.ph/2019/12/03/republic-act-no-11463/",
    source_name: "Official Gazette",
    date_occurred: "2019-12-03",
    verified: true,
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f19",
    official_id: "3",
    type: "achievement",
    title_en: "Record 27+ Million Votes in 2025",
    title_fil: "Rekord na 27+ Milyong Boto sa 2025",
    description_en:
      "Topped the 2025 senatorial race with over 27 million votes, the highest number ever received by a senatorial candidate in Philippine history.",
    description_fil:
      "Nanguna sa 2025 senatorial race na may higit 27 milyong boto, ang pinakamataas na bilang na natanggap ng isang senatorial candidate sa kasaysayan ng Pilipinas.",
    source_url: "https://www.comelec.gov.ph/2025-election-results",
    source_name: "COMELEC",
    date_occurred: "2025-05-12",
    verified: true,
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  // Controversies
  {
    id: "f20",
    official_id: "3",
    type: "controversy",
    title_en: "Alleged Links to Davao Death Squad",
    title_fil: "Alegasyon ng Kaugnayan sa Davao Death Squad",
    description_en:
      "Has been linked by witnesses and whistleblowers to the Davao Death Squad, extrajudicial killings allegedly carried out during the Duterte administration in Davao City. Go has denied these allegations.",
    description_fil:
      "Na-link ng mga saksi at whistleblower sa Davao Death Squad, mga extrajudicial killing na ginawa umano sa panahon ng administrasyong Duterte sa Davao City. Itinanggi ni Go ang mga alegasyong ito.",
    source_url: "https://www.rappler.com/nation/bong-go-davao-death-squad-allegations/",
    source_name: "Rappler",
    date_occurred: "2019-09-01",
    verified: true,
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f21",
    official_id: "3",
    type: "controversy",
    title_en: "PHP 6.6 Billion Government Contracts to Relatives",
    title_fil: "PHP 6.6 Bilyong Government Contracts sa mga Kamag-anak",
    description_en:
      "Reports revealed that companies linked to Go's relatives received at least PHP 6.6 billion in government contracts, raising conflict of interest concerns.",
    description_fil:
      "Ipinahayag ng mga ulat na ang mga kumpanyang nauugnay sa mga kamag-anak ni Go ay nakatanggap ng hindi bababa sa PHP 6.6 bilyon sa mga kontrata ng gobyerno, na nagpapataas ng mga alalahanin sa conflict of interest.",
    source_url: "https://www.pcij.org/article/bong-go-relatives-contracts",
    source_name: "PCIJ",
    date_occurred: "2021-03-01",
    verified: true,
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },

  // ===== ERWIN TULFO =====
  // Achievements
  {
    id: "f22",
    official_id: "4",
    type: "achievement",
    title_en: "DSWD Ayuda Distribution",
    title_fil: "DSWD Ayuda Distribution",
    description_en:
      "As DSWD Secretary (2022-2023), oversaw the distribution of social welfare assistance to millions of Filipinos, including typhoon victims and pandemic-affected families.",
    description_fil:
      "Bilang Kalihim ng DSWD (2022-2023), pinangasiwaan ang pamamahagi ng social welfare assistance sa milyun-milyong Pilipino, kabilang ang mga biktima ng bagyo at mga pamilyang apektado ng pandemya.",
    source_url: "https://www.dswd.gov.ph",
    source_name: "DSWD",
    date_occurred: "2022-08-01",
    verified: true,
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f23",
    official_id: "4",
    type: "achievement",
    title_en: "Public Service Through Broadcasting",
    title_fil: "Serbisyo Publiko sa Pamamagitan ng Broadcasting",
    description_en:
      "Built a decades-long career as a broadcast journalist helping ordinary Filipinos with complaints against government agencies and businesses, earning widespread public trust.",
    description_fil:
      "Nagtatag ng dekada-long career bilang broadcast journalist na tumutulong sa mga ordinaryong Pilipino sa mga reklamo laban sa mga ahensya ng gobyerno at negosyo, na nagkamit ng malawakang tiwala ng publiko.",
    source_url: "https://www.gmanetwork.com/erwin-tulfo-profile",
    source_name: "GMA News",
    date_occurred: "2020-01-01",
    verified: true,
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  // Controversies
  {
    id: "f24",
    official_id: "4",
    type: "controversy",
    title_en: "Libel Conviction",
    title_fil: "Libel Conviction",
    description_en:
      "Was convicted of libel in 2012 for defamatory statements made on his TV program. The conviction was a factor in the Commission on Appointments bypassing his confirmation as DSWD Secretary.",
    description_fil:
      "Nahatulan ng libel noong 2012 para sa mapanirang mga pahayag na ginawa sa kanyang TV program. Ang hatol ay isang salik sa pag-bypass ng Commission on Appointments sa kanyang kumpirmasyon bilang Kalihim ng DSWD.",
    source_url: "https://www.rappler.com/nation/erwin-tulfo-libel-conviction/",
    source_name: "Rappler",
    date_occurred: "2012-06-01",
    verified: true,
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f25",
    official_id: "4",
    type: "controversy",
    title_en: "Commission on Appointments Bypass",
    title_fil: "Pag-bypass ng Commission on Appointments",
    description_en:
      "His appointment as DSWD Secretary was bypassed by the Commission on Appointments in 2023, effectively ending his tenure. Questions about his qualifications and libel conviction were cited.",
    description_fil:
      "Ang kanyang appointment bilang Kalihim ng DSWD ay na-bypass ng Commission on Appointments noong 2023, na epektibong nagtapos ng kanyang termino. Ang mga tanong tungkol sa kanyang mga kwalipikasyon at libel conviction ang binanggit.",
    source_url: "https://www.inquirer.net/erwin-tulfo-ca-bypass",
    source_name: "Philippine Daily Inquirer",
    date_occurred: "2023-02-01",
    verified: true,
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f26",
    official_id: "4",
    type: "controversy",
    title_en: "Contracts Awarded to Relatives",
    title_fil: "Mga Kontrata na Ibinigay sa mga Kamag-anak",
    description_en:
      "Faced allegations that government contracts worth millions were awarded to companies owned by or linked to his relatives during his time as DSWD Secretary.",
    description_fil:
      "Hinarap ang mga alegasyon na ang mga kontrata ng gobyerno na nagkakahalaga ng milyun-milyon ay ibinigay sa mga kumpanyang pag-aari ng o nauugnay sa kanyang mga kamag-anak sa panahon ng kanyang paglilingkod bilang Kalihim ng DSWD.",
    source_url: "https://www.pcij.org/erwin-tulfo-relatives-contracts",
    source_name: "PCIJ",
    date_occurred: "2023-01-15",
    verified: true,
    display_order: 3,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },

  // ===== RONALD DELA ROSA =====
  // Achievements
  {
    id: "f27",
    official_id: "5",
    type: "achievement",
    title_en: "Crime Reduction as PNP Chief",
    title_fil: "Pagbawas ng Krimen bilang PNP Chief",
    description_en:
      "As PNP Chief (2016-2018), oversaw a reported significant decrease in index crimes. Government data showed crime volume dropping during his tenure.",
    description_fil:
      "Bilang PNP Chief (2016-2018), pinangasiwaan ang iniuulat na malaking pagbaba ng index crimes. Ipinakita ng data ng gobyerno na bumaba ang crime volume sa kanyang termino.",
    source_url: "https://www.pnp.gov.ph/crime-statistics",
    source_name: "PNP",
    date_occurred: "2018-04-01",
    verified: true,
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f28",
    official_id: "5",
    type: "achievement",
    title_en: "Senate Committee Work on Public Order",
    title_fil: "Senate Committee Work sa Public Order",
    description_en:
      "As senator (2019-2025), served as Chair of the Senate Committee on Public Order and Dangerous Drugs, authoring legislation related to law enforcement and public safety.",
    description_fil:
      "Bilang senador (2019-2025), nagsilbi bilang Chair ng Senate Committee on Public Order and Dangerous Drugs, sumulat ng lehislasyon na may kaugnayan sa law enforcement at public safety.",
    source_url: "https://www.senate.gov.ph/senators/dela-rosa",
    source_name: "Philippine Senate",
    date_occurred: "2020-01-01",
    verified: true,
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  // Controversies
  {
    id: "f29",
    official_id: "5",
    type: "controversy",
    title_en: "ICC Investigation for Drug War Deaths",
    title_fil: "ICC Investigation para sa mga Namatay sa Drug War",
    description_en:
      "Under investigation by the International Criminal Court (ICC) for his role in the drug war that killed thousands. As PNP Chief, he implemented 'Oplan Tokhang' which led to widespread extrajudicial killings according to human rights organizations.",
    description_fil:
      "Iniimbestigahan ng International Criminal Court (ICC) para sa kanyang papel sa drug war na pumatay ng libu-libo. Bilang PNP Chief, ipinatupad niya ang 'Oplan Tokhang' na humantong sa malawakang extrajudicial killing ayon sa mga human rights organization.",
    source_url: "https://www.icc-cpi.int/philippines",
    source_name: "International Criminal Court",
    date_occurred: "2021-09-15",
    verified: true,
    display_order: 1,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f30",
    official_id: "5",
    type: "controversy",
    title_en: "Drug War Death Toll",
    title_fil: "Bilang ng Namatay sa Drug War",
    description_en:
      "Human rights organizations estimate between 12,000-30,000 people were killed during the drug war he led as PNP Chief. Official police figures acknowledge around 6,000 deaths in anti-drug operations.",
    description_fil:
      "Tinataya ng mga human rights organization na 12,000-30,000 ang pinatay sa panahon ng drug war na pinamunuan niya bilang PNP Chief. Kinilala ng opisyal na police figures ang humigit-kumulang 6,000 na namatay sa anti-drug operations.",
    source_url: "https://www.hrw.org/philippines-drug-war",
    source_name: "Human Rights Watch",
    date_occurred: "2019-01-01",
    verified: true,
    display_order: 2,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
  {
    id: "f31",
    official_id: "5",
    type: "controversy",
    title_en: "Admission of Drug War Killings in Senate Hearing",
    title_fil: "Pag-amin ng Drug War Killings sa Senate Hearing",
    description_en:
      "During Senate hearings, admitted knowledge of police operations that resulted in deaths, though he maintained these were lawful operations against suspects who fought back.",
    description_fil:
      "Sa mga pagdinig sa Senado, inamin ang kaalaman sa mga operasyon ng pulis na nagresulta sa mga pagkamatay, bagaman pinanatili niya na ito ay mga lehitimong operasyon laban sa mga suspek na lumaban.",
    source_url: "https://www.inquirer.net/dela-rosa-senate-hearing-drug-war",
    source_name: "Philippine Daily Inquirer",
    date_occurred: "2022-10-01",
    verified: true,
    display_order: 3,
    created_at: "2024-01-01T00:00:00Z",
    updated_at: "2024-01-01T00:00:00Z",
  },
];

export function getFactsByOfficial(officialId: string): Fact[] {
  return facts.filter((f) => f.official_id === officialId);
}

export function getFactsByOfficialAndType(officialId: string, type: string): Fact[] {
  return facts.filter((f) => f.official_id === officialId && f.type === type);
}
