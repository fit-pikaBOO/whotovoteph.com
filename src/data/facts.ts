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

  // ===== ALAN PETER CAYETANO =====
  { id: "f32", official_id: "15", type: "achievement", title_en: "Hosting the 2019 SEA Games as PHISGOC Chair", title_fil: "Pag-host ng 2019 SEA Games bilang PHISGOC Chair", description_en: "As chair of the Philippine Southeast Asian Games Organizing Committee (PHISGOC), led the hosting of the 2019 SEA Games where the Philippines won the overall championship with 149 gold medals.", description_fil: "Bilang tagapangulo ng PHISGOC, pinamunuan ang pag-host ng 2019 SEA Games kung saan nanalo ang Pilipinas ng overall championship na may 149 gold medals.", source_url: "https://www.rappler.com/sports/sea-games-2019-philippines-overall-champion", source_name: "Rappler", date_occurred: "2019-12-11", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f33", official_id: "15", type: "achievement", title_en: "DFA Secretary: Independent Foreign Policy Shift", title_fil: "Kalihim ng DFA: Independent Foreign Policy Shift", description_en: "Served as Secretary of Foreign Affairs (2017-2018), navigating the Philippines' shift toward a more independent foreign policy including engagement with China while maintaining US alliance.", description_fil: "Nagsilbi bilang Kalihim ng Ugnayang Panlabas (2017-2018), namamahala sa paglipat ng Pilipinas patungo sa mas independent na foreign policy kabilang ang pakikipag-ugnayan sa China habang pinapanatili ang alyansa sa US.", source_url: "https://www.philstar.com/headlines/2018/cayetano-dfa-foreign-policy", source_name: "PhilStar", date_occurred: "2018-01-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f34", official_id: "15", type: "controversy", title_en: "SEA Games Budget Overruns and Corruption Allegations", title_fil: "SEA Games Budget Overruns at Alegasyon ng Korapsyon", description_en: "Faced allegations of budget overruns in the 2019 SEA Games hosting, with reports of the cauldron alone costing PHP 50 million. COA flagged questionable expenses totaling billions.", description_fil: "Hinarap ang mga alegasyon ng budget overrun sa 2019 SEA Games hosting, na may mga ulat na ang cauldron lang ay nagkakahalaga ng PHP 50 milyon. Ni-flag ng COA ang mga questionable expenses na umabot sa bilyon.", source_url: "https://www.rappler.com/newsbreak/investigative/sea-games-2019-budget-coa", source_name: "Rappler", date_occurred: "2020-03-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f35", official_id: "15", type: "controversy", title_en: "Speakership Term-Sharing Agreement Dispute", title_fil: "Speakership Term-Sharing Agreement Dispute", description_en: "Was ousted as House Speaker in 2019 after refusing to honor a term-sharing agreement with Marinduque Rep. Lord Allan Velasco, causing a political crisis in the House of Representatives.", description_fil: "Na-oust bilang House Speaker noong 2019 matapos tumanggi na igalang ang term-sharing agreement kay Marinduque Rep. Lord Allan Velasco, na nagdulot ng political crisis sa Kamara.", source_url: "https://www.inquirer.net/cayetano-velasco-speakership-crisis", source_name: "Philippine Daily Inquirer", date_occurred: "2020-10-12", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== JV EJERCITO =====
  { id: "f36", official_id: "16", type: "achievement", title_en: "Philippine Mental Health Act (RA 11036)", title_fil: "Philippine Mental Health Act (RA 11036)", description_en: "Principal author of the Philippine Mental Health Act, a landmark law that establishes mental health policies and services in the country, including integration of mental health into the public health system.", description_fil: "Principal author ng Philippine Mental Health Act, isang makasaysayang batas na nagtatatag ng mga patakaran at serbisyo sa mental health sa bansa, kabilang ang pagsasama ng mental health sa public health system.", source_url: "https://www.officialgazette.gov.ph/2018/06/20/republic-act-no-11036/", source_name: "Official Gazette", date_occurred: "2018-06-20", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f37", official_id: "16", type: "achievement", title_en: "Universal Health Care Act Co-Author", title_fil: "Co-Author ng Universal Health Care Act", description_en: "Co-authored the Universal Health Care Act (RA 11223) which automatically enrolls all Filipinos in the national health insurance program and expands healthcare access for all citizens.", description_fil: "Co-author ng Universal Health Care Act (RA 11223) na awtomatikong nag-eenroll ng lahat ng Pilipino sa national health insurance program at nagpapalawak ng access sa healthcare para sa lahat ng mamamayan.", source_url: "https://www.officialgazette.gov.ph/2019/02/20/republic-act-no-11223/", source_name: "Official Gazette", date_occurred: "2019-02-20", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f38", official_id: "16", type: "controversy", title_en: "Political Dynasty Concerns", title_fil: "Mga Alalahanin sa Political Dynasty", description_en: "Criticized for being part of the Estrada political dynasty alongside his father (former President Estrada) and half-brother Jinggoy, all of whom have held Senate seats or higher office.", description_fil: "Kinritika dahil sa pagiging bahagi ng Estrada political dynasty kasama ang kanyang ama (dating Pangulong Estrada) at kapatid na si Jinggoy, na lahat ay humawak ng puwesto sa Senado o mas mataas.", source_url: "https://www.rappler.com/newsbreak/political-dynasties-philippines", source_name: "Rappler", date_occurred: "2022-05-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f39", official_id: "16", type: "controversy", title_en: "Low Legislative Output in First Term", title_fil: "Mababang Legislative Output sa Unang Termino", description_en: "During his first Senate term (2013-2019), was criticized for relatively few authored laws compared to other senators, though he focused on committee work and health-related legislation.", description_fil: "Sa kanyang unang termino sa Senado (2013-2019), kinritika sa medyo kaunting isinulat na batas kumpara sa ibang senador, bagaman nakatuon siya sa committee work at health-related legislation.", source_url: "https://www.philstar.com/headlines/senate-legislative-output-2019", source_name: "PhilStar", date_occurred: "2019-06-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== CHIZ ESCUDERO =====
  { id: "f40", official_id: "17", type: "achievement", title_en: "Elected Senate President (2024)", title_fil: "Nahalal na Senate President (2024)", description_en: "Elected as Senate President in May 2024, replacing Migz Zubiri. Known for his legislative expertise and fiscal policy knowledge, he has led the Senate through major budget deliberations.", description_fil: "Nahalal bilang Senate President noong Mayo 2024, pumalit kay Migz Zubiri. Kilala sa kanyang legislative expertise at kaalaman sa fiscal policy, pinamunuan niya ang Senado sa mga pangunahing budget deliberation.", source_url: "https://www.rappler.com/nation/chiz-escudero-senate-president-2024", source_name: "Rappler", date_occurred: "2024-05-20", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f41", official_id: "17", type: "achievement", title_en: "Anti-Red Tape Act Author", title_fil: "May-akda ng Anti-Red Tape Act", description_en: "Authored the Anti-Red Tape Act which streamlined government transactions and set time limits for processing of government applications, reducing bureaucratic delays for citizens.", description_fil: "Sumulat ng Anti-Red Tape Act na nag-streamline ng mga government transaction at nagtakda ng time limit sa pagproseso ng mga government application, binabawasan ang bureaucratic delays para sa mga mamamayan.", source_url: "https://www.senate.gov.ph/press_release/anti-red-tape-act", source_name: "Philippine Senate", date_occurred: "2007-06-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f42", official_id: "17", type: "controversy", title_en: "Citizenship and Residency Questions (2016 VP Race)", title_fil: "Mga Tanong sa Citizenship at Residency (2016 VP Race)", description_en: "During his 2016 vice presidential run, faced questions about his US green card status and allegations that he had not properly renounced foreign residency status.", description_fil: "Sa kanyang pagtakbo bilang bise presidente noong 2016, hinarap ang mga tanong tungkol sa kanyang US green card status at mga alegasyon na hindi niya maayos na itinakwil ang foreign residency status.", source_url: "https://www.inquirer.net/escudero-citizenship-2016", source_name: "Philippine Daily Inquirer", date_occurred: "2016-03-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f43", official_id: "17", type: "controversy", title_en: "Senate Leadership Maneuvering", title_fil: "Senate Leadership Maneuvering", description_en: "His ascent to Senate President in 2024 was seen by critics as the result of political maneuvering and alliance-shifting rather than consensus, after the ouster of Migz Zubiri.", description_fil: "Ang kanyang pag-akyat sa Senate President noong 2024 ay itinuring ng mga kritiko bilang resulta ng political maneuvering at alliance-shifting sa halip na consensus, matapos ang pag-oust kay Migz Zubiri.", source_url: "https://www.rappler.com/nation/senate-leadership-change-2024", source_name: "Rappler", date_occurred: "2024-05-15", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== JINGGOY ESTRADA =====
  { id: "f44", official_id: "18", type: "achievement", title_en: "Anti-Hazing Act Author (RA 11053)", title_fil: "May-akda ng Anti-Hazing Act (RA 11053)", description_en: "Principal author of the Anti-Hazing Act of 2018, which strengthened penalties for hazing-related deaths and injuries in fraternities and organizations, following several fatal hazing incidents.", description_fil: "Principal author ng Anti-Hazing Act of 2018, na nagpalakas ng parusa para sa mga pagkamatay at pinsala kaugnay ng hazing sa mga fraternity at organisasyon, matapos ang ilang fatal na insidente ng hazing.", source_url: "https://www.officialgazette.gov.ph/2018/06/29/republic-act-no-11053/", source_name: "Official Gazette", date_occurred: "2018-06-29", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f45", official_id: "18", type: "achievement", title_en: "Return to Senate via Democratic Election (2022)", title_fil: "Pagbabalik sa Senado sa pamamagitan ng Demokratikong Halalan (2022)", description_en: "Won a Senate seat in the 2022 elections, returning to public service after being acquitted of plunder charges. His return reflects voters' judgment on his legislative record.", description_fil: "Nanalo ng puwesto sa Senado sa 2022 elections, bumalik sa public service matapos ma-acquit sa kasong plunder. Ang kanyang pagbabalik ay sumasalamin sa paghatol ng mga botante sa kanyang legislative record.", source_url: "https://www.philstar.com/headlines/2022/jinggoy-estrada-senate-win", source_name: "PhilStar", date_occurred: "2022-05-09", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f46", official_id: "18", type: "controversy", title_en: "PDAF/Pork Barrel Scam Plunder Case", title_fil: "PDAF/Pork Barrel Scam Plunder Case", description_en: "Was detained for nearly 5 years (2014-2017) on plunder charges related to the PDAF (Priority Development Assistance Fund) scam involving Janet Lim-Napoles. He was eventually acquitted in 2022.", description_fil: "Nakulong ng halos 5 taon (2014-2017) sa kasong plunder kaugnay ng PDAF scam na kinasasangkutan ni Janet Lim-Napoles. Sa huli ay na-acquit siya noong 2022.", source_url: "https://www.rappler.com/nation/jinggoy-estrada-pdaf-case-timeline", source_name: "Rappler", date_occurred: "2014-06-23", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f47", official_id: "18", type: "controversy", title_en: "Political Dynasty and Nepotism Concerns", title_fil: "Mga Alalahanin sa Political Dynasty at Nepotismo", description_en: "Part of the Estrada political family with his father (former President), half-brother JV (also senator), and multiple family members holding various government positions simultaneously.", description_fil: "Bahagi ng Estrada political family kasama ang kanyang ama (dating Pangulo), kapatid na si JV (senador din), at maraming miyembro ng pamilya na humahawak ng iba't ibang posisyon sa gobyerno.", source_url: "https://www.inquirer.net/estrada-political-dynasty", source_name: "Philippine Daily Inquirer", date_occurred: "2022-06-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== LOREN LEGARDA =====
  { id: "f48", official_id: "21", type: "achievement", title_en: "Climate Change Act and Environmental Legislation", title_fil: "Climate Change Act at Environmental Legislation", description_en: "Principal author of the Climate Change Act (RA 9729) and numerous environmental laws. Named UNESCO Goodwill Ambassador for climate change in Southeast Asia for her environmental advocacy.", description_fil: "Principal author ng Climate Change Act (RA 9729) at maraming environmental laws. Pinangalanan bilang UNESCO Goodwill Ambassador para sa climate change sa Southeast Asia dahil sa kanyang environmental advocacy.", source_url: "https://www.senate.gov.ph/senators/legarda-environmental-laws", source_name: "Philippine Senate", date_occurred: "2009-10-23", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f49", official_id: "21", type: "achievement", title_en: "Philippine Disaster Risk Reduction and Management Act", title_fil: "Philippine Disaster Risk Reduction and Management Act", description_en: "Authored the Philippine Disaster Risk Reduction and Management Act (RA 10121) which established a comprehensive disaster management framework, critical for a typhoon-prone country.", description_fil: "Sumulat ng Philippine Disaster Risk Reduction and Management Act (RA 10121) na nagtatatag ng komprehensibong disaster management framework, mahalaga para sa isang bansang madalas tamaan ng bagyo.", source_url: "https://www.officialgazette.gov.ph/2010/05/27/republic-act-no-10121/", source_name: "Official Gazette", date_occurred: "2010-05-27", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f50", official_id: "21", type: "controversy", title_en: "Party-Switching and Political Accommodation", title_fil: "Party-Switching at Political Accommodation", description_en: "Criticized for frequently switching political alliances across administrations, from being opposition to becoming an administration ally regardless of who is in power.", description_fil: "Kinritika sa madalas na paglipat ng political alliance sa iba't ibang administrasyon, mula sa pagiging oposisyon hanggang sa pagiging alyado ng administrasyon anuman ang nakaupo.", source_url: "https://www.rappler.com/nation/legarda-political-alliances", source_name: "Rappler", date_occurred: "2022-07-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f51", official_id: "21", type: "controversy", title_en: "Electoral Protest Controversy (2004)", title_fil: "Electoral Protest Controversy (2004)", description_en: "Lost her 2004 vice presidential bid and filed an electoral protest. The case dragged on for years and was ultimately dismissed, but raised questions about electoral integrity.", description_fil: "Natalo sa kanyang 2004 vice presidential bid at nag-file ng electoral protest. Tumagal ang kaso ng maraming taon at sa huli ay na-dismiss, ngunit nagkaroon ng mga tanong tungkol sa electoral integrity.", source_url: "https://www.inquirer.net/legarda-vp-protest-2004", source_name: "Philippine Daily Inquirer", date_occurred: "2004-06-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== ROBIN PADILLA =====
  { id: "f52", official_id: "22", type: "achievement", title_en: "Charter Change and Federalism Advocacy", title_fil: "Charter Change at Pederalismo Advocacy", description_en: "As Chair of the Senate Committee on Constitutional Amendments, has actively pushed for charter change and the shift to a federal system of government aimed at decentralizing power from Manila.", description_fil: "Bilang Chair ng Senate Committee on Constitutional Amendments, aktibong itinataguyod ang charter change at paglipat sa federal system of government na naglalayong i-decentralize ang kapangyarihan mula sa Maynila.", source_url: "https://www.senate.gov.ph/press_release/padilla-charter-change", source_name: "Philippine Senate", date_occurred: "2023-01-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f53", official_id: "22", type: "achievement", title_en: "Bangsamoro and Muslim Filipino Advocacy", title_fil: "Bangsamoro at Muslim Filipino Advocacy", description_en: "As a Muslim convert, has been a vocal advocate for Bangsamoro rights and Muslim Filipino welfare, pushing for better representation and understanding of Muslim communities in Philippine politics.", description_fil: "Bilang isang Muslim convert, naging vocal advocate para sa karapatan ng Bangsamoro at kagalingan ng Muslim Filipino, nagtutulak ng mas mabuting representasyon at pagkaunawa sa mga komunidad ng Muslim sa politika ng Pilipinas.", source_url: "https://www.philstar.com/headlines/padilla-bangsamoro-advocacy", source_name: "PhilStar", date_occurred: "2023-06-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f54", official_id: "22", type: "controversy", title_en: "Lack of Legislative Experience", title_fil: "Kakulangan ng Legislative Experience", description_en: "Has been criticized for his lack of prior government or legislative experience before entering the Senate, with critics questioning his capacity to craft complex legislation.", description_fil: "Kinritika dahil sa kakulangan ng dating karanasan sa gobyerno o lehislatura bago pumasok sa Senado, na may mga kritiko na kinukwestyon ang kanyang kapasidad na gumawa ng komplikadong lehislasyon.", source_url: "https://www.rappler.com/nation/robin-padilla-senate-qualification-debate", source_name: "Rappler", date_occurred: "2022-05-15", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f55", official_id: "22", type: "controversy", title_en: "Criminal Conviction and Presidential Pardon", title_fil: "Criminal Conviction at Presidential Pardon", description_en: "Was convicted of illegal possession of firearms in 1994 and sentenced to prison. He was granted executive clemency through a conditional pardon by President Estrada in 1998.", description_fil: "Nahatulan ng illegal possession of firearms noong 1994 at nasentensiyahan ng pagkakulong. Binigyan siya ng executive clemency sa pamamagitan ng conditional pardon ni Pangulong Estrada noong 1998.", source_url: "https://www.inquirer.net/robin-padilla-pardon-firearms-case", source_name: "Philippine Daily Inquirer", date_occurred: "1998-12-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== RAFFY TULFO =====
  { id: "f56", official_id: "23", type: "achievement", title_en: "Public Service Through Media: Resolving Citizens' Complaints", title_fil: "Serbisyo Publiko sa Media: Paglutas ng mga Reklamo ng Mamamayan", description_en: "Through his show 'Raffy Tulfo in Action' (30M+ YouTube subscribers), has helped resolve thousands of ordinary Filipinos' complaints against businesses, agencies, and individuals for free.", description_fil: "Sa pamamagitan ng kanyang show na 'Raffy Tulfo in Action' (30M+ YouTube subscribers), nakatulong sa paglutas ng libu-libong reklamo ng mga ordinaryong Pilipino laban sa mga negosyo, ahensya, at indibidwal nang libre.", source_url: "https://www.gmanetwork.com/news/raffy-tulfo-public-service", source_name: "GMA News", date_occurred: "2022-01-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f57", official_id: "23", type: "achievement", title_en: "Top Vote-Getter Among Newcomers (2022 Elections)", title_fil: "Nanguna sa mga Baguhan (2022 Elections)", description_en: "Won a Senate seat in 2022 with over 22 million votes, the third-highest vote count, demonstrating massive public support for his brand of accessible public service.", description_fil: "Nanalo ng Senate seat noong 2022 na may higit 22 milyong boto, ang ikatlong pinakamataas na bilang ng boto, nagpapakita ng malawak na suporta ng publiko sa kanyang brand ng accessible na serbisyo publiko.", source_url: "https://www.comelec.gov.ph/2022-election-results", source_name: "COMELEC", date_occurred: "2022-05-09", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f58", official_id: "23", type: "controversy", title_en: "Conflict of Interest: Media Empire While Senator", title_fil: "Conflict of Interest: Media Empire Habang Senador", description_en: "Faces criticism for maintaining his massive media platform while serving as senator, raising conflict of interest concerns as his show often involves government agencies he has oversight over.", description_fil: "Hinarap ang kritisismo sa pagpapanatili ng kanyang malaking media platform habang naglilingkod bilang senador, na nagtataas ng conflict of interest concerns dahil ang kanyang show ay madalas kinasasangkutan ng mga government agency na kanyang ino-oversee.", source_url: "https://www.rappler.com/nation/raffy-tulfo-conflict-interest-senate", source_name: "Rappler", date_occurred: "2022-07-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f59", official_id: "23", type: "controversy", title_en: "Family Members in Government Positions", title_fil: "Mga Miyembro ng Pamilya sa mga Posisyon sa Gobyerno", description_en: "Multiple Tulfo family members hold government positions or media roles, raising concerns about dynastic influence. Brothers Erwin and Ben also hold prominent positions in media and government.", description_fil: "Maraming miyembro ng pamilyang Tulfo ang humahawak ng mga posisyon sa gobyerno o media, na nagpapataas ng mga alalahanin tungkol sa dynastic influence. Ang mga kapatid na sina Erwin at Ben ay humahawak din ng mga prominenteng posisyon.", source_url: "https://www.inquirer.net/tulfo-family-government-positions", source_name: "Philippine Daily Inquirer", date_occurred: "2023-01-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== MARK VILLAR =====
  { id: "f60", official_id: "25", type: "achievement", title_en: "Build Build Build Infrastructure Program (DPWH Secretary)", title_fil: "Build Build Build Infrastructure Program (Kalihim ng DPWH)", description_en: "As DPWH Secretary (2016-2022), led the 'Build Build Build' program completing over 29,000 kilometers of roads, 5,950 bridges, and thousands of flood control projects nationwide.", description_fil: "Bilang Kalihim ng DPWH (2016-2022), pinamunuan ang 'Build Build Build' program na nakumpleto ng higit 29,000 kilometro ng kalsada, 5,950 tulay, at libu-libong flood control project sa buong bansa.", source_url: "https://www.dpwh.gov.ph/build-build-build-accomplishments", source_name: "DPWH", date_occurred: "2022-06-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f61", official_id: "25", type: "achievement", title_en: "Metro Manila Skyway Stage 3 Completion", title_fil: "Pagkumpleto ng Metro Manila Skyway Stage 3", description_en: "Oversaw the completion of the Skyway Stage 3 project connecting NLEX and SLEX, significantly reducing travel time across Metro Manila from over 2 hours to just 20 minutes.", description_fil: "Pinangasiwaan ang pagkumpleto ng Skyway Stage 3 project na nagkokonekta sa NLEX at SLEX, malaking binawasan ang travel time sa Metro Manila mula higit 2 oras hanggang 20 minuto lang.", source_url: "https://www.philstar.com/business/skyway-stage-3-opening", source_name: "PhilStar", date_occurred: "2021-01-14", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f62", official_id: "25", type: "controversy", title_en: "Villar Family Business Interests and Road Projects", title_fil: "Villar Family Business Interests at Road Projects", description_en: "Critics allege potential conflict of interest as DPWH road projects appeared to benefit Villar family real estate developments in Cavite and Bulacan, though no formal charges have been filed.", description_fil: "Inaakusahan ng mga kritiko ang potensyal na conflict of interest dahil ang mga road project ng DPWH ay tila nakinabang ang Villar family real estate developments sa Cavite at Bulacan, bagaman walang pormal na kaso ang nai-file.", source_url: "https://www.rappler.com/newsbreak/villar-dpwh-road-projects-property", source_name: "Rappler", date_occurred: "2020-01-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f63", official_id: "25", type: "controversy", title_en: "Political Dynasty: Villar Family Dominance", title_fil: "Political Dynasty: Villar Family Dominance", description_en: "Part of the wealthy Villar political-business dynasty. His mother Cynthia is also a senator, his father Manny is a former senator and presidential candidate, and the family controls multiple business empires.", description_fil: "Bahagi ng mayamang Villar political-business dynasty. Ang kanyang ina na si Cynthia ay senador din, ang kanyang ama na si Manny ay dating senador at presidential candidate, at ang pamilya ay nagkokontrol ng maraming business empire.", source_url: "https://www.inquirer.net/villar-family-political-dynasty-wealth", source_name: "Philippine Daily Inquirer", date_occurred: "2022-05-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== RISA HONTIVEROS =====
  { id: "f64", official_id: "20", type: "achievement", title_en: "Leading the POGO Investigation", title_fil: "Pamumuno sa POGO Investigation", description_en: "Led the Senate investigation exposing the criminal activities of Philippine Offshore Gaming Operators (POGOs) including human trafficking, kidnapping, and money laundering, leading to POGO ban.", description_fil: "Pinamunuan ang imbestigasyon ng Senado na naglantad ng mga kriminal na aktibidad ng Philippine Offshore Gaming Operators (POGOs) kabilang ang human trafficking, kidnapping, at money laundering, na humantong sa POGO ban.", source_url: "https://www.rappler.com/nation/hontiveros-pogo-investigation-findings", source_name: "Rappler", date_occurred: "2024-03-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f65", official_id: "20", type: "achievement", title_en: "Safe Spaces Act (RA 11313)", title_fil: "Safe Spaces Act (RA 11313)", description_en: "Principal author of the Safe Spaces Act (Bawal Bastos Law), which penalizes gender-based sexual harassment in streets, public spaces, online, workplaces, and educational institutions.", description_fil: "Principal author ng Safe Spaces Act (Bawal Bastos Law), na nagpaparusa sa gender-based sexual harassment sa mga kalye, pampublikong lugar, online, lugar ng trabaho, at mga institusyong pang-edukasyon.", source_url: "https://www.officialgazette.gov.ph/2019/04/17/republic-act-no-11313/", source_name: "Official Gazette", date_occurred: "2019-04-17", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f66", official_id: "20", type: "controversy", title_en: "Red-Tagging Allegations Against Her", title_fil: "Red-Tagging Allegations Laban sa Kanya", description_en: "Has been repeatedly red-tagged (accused of being a communist/terrorist sympathizer) by military officials and political opponents, which she has consistently denied and condemned as dangerous.", description_fil: "Paulit-ulit na na-red-tag (inakusahang simpatisante ng komunista/terorista) ng mga military official at political opponents, na patuloy niyang itinatanggi at kinokondena bilang mapanganib.", source_url: "https://www.rappler.com/nation/hontiveros-red-tagging-controversy", source_name: "Rappler", date_occurred: "2020-11-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f67", official_id: "20", type: "controversy", title_en: "Opposition Stance Criticized as Obstructionist", title_fil: "Oposisyon na Tinuring na Obstructionist", description_en: "Her persistent opposition to administration policies (drug war, anti-terrorism law) has been characterized by supporters of the administration as obstructionist and politically motivated.", description_fil: "Ang kanyang tuloy-tuloy na oposisyon sa mga patakaran ng administrasyon (drug war, anti-terrorism law) ay tinuring ng mga tagasuporta ng administrasyon bilang obstructionist at politically motivated.", source_url: "https://www.philstar.com/opinion/hontiveros-opposition-role", source_name: "PhilStar", date_occurred: "2021-01-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== WIN GATCHALIAN =====
  { id: "f68", official_id: "19", type: "achievement", title_en: "Alternative Learning System Act (RA 11510)", title_fil: "Alternative Learning System Act (RA 11510)", description_en: "Authored the Alternative Learning System Act which institutionalized alternative education for out-of-school youth and adults, providing pathways to education for millions of Filipinos.", description_fil: "Sumulat ng Alternative Learning System Act na nag-institutionalize ng alternatibong edukasyon para sa out-of-school youth at adults, nagbibigay ng pathways sa edukasyon para sa milyun-milyong Pilipino.", source_url: "https://www.officialgazette.gov.ph/2020/01/24/republic-act-no-11510/", source_name: "Official Gazette", date_occurred: "2020-01-24", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f69", official_id: "19", type: "achievement", title_en: "Energy Reform and Electricity Consumer Protection", title_fil: "Energy Reform at Electricity Consumer Protection", description_en: "As chair of the Senate Energy Committee, championed reforms to reduce electricity costs and improve energy security, including investigations into power supply agreements and distribution utilities.", description_fil: "Bilang chair ng Senate Energy Committee, isinulong ang mga reporma para mabawasan ang gastos sa kuryente at mapabuti ang energy security, kabilang ang mga imbestigasyon sa power supply agreements.", source_url: "https://www.senate.gov.ph/press_release/gatchalian-energy-reform", source_name: "Philippine Senate", date_occurred: "2023-06-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f70", official_id: "19", type: "controversy", title_en: "Family Business Interests in Energy Sector", title_fil: "Family Business Interests sa Energy Sector", description_en: "Questions raised about potential conflict of interest given his family's business interests in the energy sector while chairing the Senate Committee on Energy.", description_fil: "Mga tanong ang itinaas tungkol sa potensyal na conflict of interest dahil sa business interests ng kanyang pamilya sa energy sector habang pinupunuan ang Senate Committee on Energy.", source_url: "https://www.rappler.com/business/gatchalian-family-energy-business", source_name: "Rappler", date_occurred: "2020-01-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f71", official_id: "19", type: "controversy", title_en: "Political Dynasty in Valenzuela", title_fil: "Political Dynasty sa Valenzuela", description_en: "The Gatchalian family has maintained political control of Valenzuela City for decades, with family members alternating as mayor and representative, raising concerns about political dynasties.", description_fil: "Ang pamilyang Gatchalian ay nagpapanatili ng political control ng Valenzuela City sa loob ng mga dekada, na ang mga miyembro ng pamilya ay naghahalili bilang alkalde at kinatawan.", source_url: "https://www.inquirer.net/gatchalian-valenzuela-dynasty", source_name: "Philippine Daily Inquirer", date_occurred: "2019-05-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== GRACE POE =====
  // ===== CYNTHIA VILLAR =====
  // ===== IMEE MARCOS =====
  { id: "f80", official_id: "6", type: "achievement", title_en: "Tobacco Farmers Excise Tax Sharing", title_fil: "Tobacco Farmers Excise Tax Sharing", description_en: "Championed legislation ensuring tobacco-producing provinces receive their share of excise taxes, supporting farmers in Ilocos Norte and other tobacco-growing regions.", description_fil: "Isinulong ang mga batas na nagsisiguro na ang mga probinsyang nagtatanim ng tabako ay nakatatanggap ng kanilang bahagi ng excise taxes, sumusuporta sa mga magsasaka sa Ilocos Norte at iba pang tobacco-growing region.", source_url: "https://www.senate.gov.ph/press_release/marcos-tobacco-excise", source_name: "Philippine Senate", date_occurred: "2020-06-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f81", official_id: "6", type: "achievement", title_en: "Creative Industries Development Act Advocacy", title_fil: "Creative Industries Development Act Advocacy", description_en: "Pushed for legislation supporting the Philippine creative economy including film, arts, and cultural industries, aiming to boost employment in creative sectors.", description_fil: "Itinataguyod ang mga batas na sumusuporta sa Philippine creative economy kabilang ang film, arts, at cultural industries, naglalayong mapataas ang trabaho sa creative sectors.", source_url: "https://www.philstar.com/entertainment/marcos-creative-industries", source_name: "PhilStar", date_occurred: "2021-01-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f82", official_id: "6", type: "controversy", title_en: "Falsified Educational Records", title_fil: "Mga Pekeng Educational Record", description_en: "Was found to have misrepresented her educational credentials, including claiming a law degree from the University of the Philippines when records showed she did not complete the program.", description_fil: "Natuklasan na nagmisrepresent ng kanyang educational credentials, kabilang ang pag-claim ng law degree mula sa University of the Philippines nang ipinakita ng mga rekord na hindi niya natapos ang programa.", source_url: "https://www.rappler.com/nation/imee-marcos-fake-degree-oxford-up", source_name: "Rappler", date_occurred: "2019-03-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f83", official_id: "6", type: "controversy", title_en: "Martial Law Era Human Rights Cases", title_fil: "Martial Law Era Human Rights Cases", description_en: "Named in human rights cases related to the Martial Law era under her father's regime. She headed the Kabataang Barangay during this period and is accused of complicity in Marcos-era abuses.", description_fil: "Napangalanan sa mga kaso ng karapatang pantao kaugnay ng Martial Law era sa ilalim ng rehimen ng kanyang ama. Pinamunuan niya ang Kabataang Barangay sa panahong ito at inakusahan ng complicity sa mga pang-aabuso sa panahon ng Marcos.", source_url: "https://www.inquirer.net/imee-marcos-martial-law-human-rights", source_name: "Philippine Daily Inquirer", date_occurred: "1986-01-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== LITO LAPID =====
  { id: "f84", official_id: "8", type: "achievement", title_en: "Senior Citizens' Expanded Benefits Act", title_fil: "Senior Citizens' Expanded Benefits Act", description_en: "Authored legislation expanding benefits for senior citizens including increased discounts, pension increases, and additional healthcare benefits for elderly Filipinos.", description_fil: "Sumulat ng mga batas na nagpapalawak ng mga benepisyo para sa senior citizens kabilang ang increased discounts, pension increases, at karagdagang healthcare benefits para sa matatandang Pilipino.", source_url: "https://www.senate.gov.ph/press_release/lapid-senior-citizens", source_name: "Philippine Senate", date_occurred: "2020-01-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f85", official_id: "8", type: "achievement", title_en: "Workers' Welfare Legislation", title_fil: "Workers' Welfare Legislation", description_en: "Filed numerous bills focused on the welfare of workers, including wage increases for minimum wage earners and benefits for overseas Filipino workers (OFWs).", description_fil: "Nag-file ng maraming bill na nakatuon sa kagalingan ng mga manggagawa, kabilang ang wage increases para sa minimum wage earners at benepisyo para sa overseas Filipino workers (OFWs).", source_url: "https://www.philstar.com/headlines/lapid-workers-bills", source_name: "PhilStar", date_occurred: "2021-06-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f86", official_id: "8", type: "controversy", title_en: "Legislative Productivity Questions", title_fil: "Mga Tanong sa Legislative Productivity", description_en: "Has been criticized for low legislative output and rare participation in Senate debates. Critics question whether his celebrity status rather than policy expertise drives his electoral success.", description_fil: "Kinritika sa mababang legislative output at bihirang paglahok sa Senate debates. Kinuwestyon ng mga kritiko kung ang kanyang celebrity status kaysa policy expertise ang nagtutulak ng kanyang electoral success.", source_url: "https://www.rappler.com/nation/senate-legislative-performance-ranking", source_name: "Rappler", date_occurred: "2022-06-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f87", official_id: "8", type: "controversy", title_en: "English Proficiency Criticism", title_fil: "English Proficiency Criticism", description_en: "Has faced mockery and criticism regarding his English language proficiency in Senate proceedings, which he has addressed by stating he represents ordinary Filipinos who speak Filipino.", description_fil: "Hinarap ang panlalait at kritisismo tungkol sa kanyang kahusayan sa English sa Senate proceedings, na kanyang sinagot sa pamamagitan ng pagsasabing kinakatawan niya ang mga ordinaryong Pilipinong nagsasalita ng Filipino.", source_url: "https://www.inquirer.net/lapid-senate-language-debate", source_name: "Philippine Daily Inquirer", date_occurred: "2019-09-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== BONG REVILLA =====
  // ===== JOEL VILLANUEVA =====
  { id: "f92", official_id: "24", type: "achievement", title_en: "TUPAD Emergency Employment Program", title_fil: "TUPAD Emergency Employment Program", description_en: "As former TESDA Director-General, established the TUPAD (Tulong Panghanapbuhay sa Ating Disadvantaged/Displaced Workers) program providing emergency employment and livelihood assistance.", description_fil: "Bilang dating TESDA Director-General, itinatag ang TUPAD program na nagbibigay ng emergency employment at livelihood assistance sa mga displaced workers.", source_url: "https://www.tesda.gov.ph/tupad-program", source_name: "TESDA", date_occurred: "2016-01-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f93", official_id: "24", type: "achievement", title_en: "Telecommuting Act (RA 11165)", title_fil: "Telecommuting Act (RA 11165)", description_en: "Authored the Telecommuting Act which allows employees in the private sector to work from home, a law that proved crucial during the COVID-19 pandemic.", description_fil: "Sumulat ng Telecommuting Act na nagpapahintulot sa mga empleyado sa private sector na magtrabaho mula sa bahay, isang batas na naging mahalaga sa panahon ng COVID-19 pandemic.", source_url: "https://www.officialgazette.gov.ph/2018/12/20/republic-act-no-11165/", source_name: "Official Gazette", date_occurred: "2018-12-20", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f94", official_id: "24", type: "controversy", title_en: "TESDA Misuse of Funds Allegations", title_fil: "TESDA Misuse of Funds Allegations", description_en: "Faced scrutiny over alleged misuse of TESDA funds during his tenure as Director-General, including questionable scholarship disbursements, though no formal charges were filed.", description_fil: "Hinarap ang pagsisiyasat sa alleged misuse ng TESDA funds sa kanyang termino bilang Director-General, kabilang ang mga questionable scholarship disbursement, bagaman walang pormal na kaso ang na-file.", source_url: "https://www.rappler.com/nation/tesda-funds-audit-villanueva", source_name: "Rappler", date_occurred: "2016-06-01", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f95", official_id: "24", type: "controversy", title_en: "Religious Family Connection Concerns", title_fil: "Mga Alalahanin sa Religious Family Connection", description_en: "Son of Jesus is Lord Church leader Eddie Villanueva. Critics raise concerns about the blurring of church and state, given the church's political influence on his electoral campaigns.", description_fil: "Anak ng lider ng Jesus is Lord Church na si Eddie Villanueva. Nagpalitaw ang mga kritiko ng mga alalahanin tungkol sa paghahalo ng simbahan at estado, dahil sa political influence ng simbahan sa kanyang mga electoral campaign.", source_url: "https://www.inquirer.net/villanueva-church-state-politics", source_name: "Philippine Daily Inquirer", date_occurred: "2019-05-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== NANCY BINAY =====
  // ===== PIA CAYETANO =====
  { id: "f100", official_id: "7", type: "achievement", title_en: "Reproductive Health Law Co-Author (RA 10354)", title_fil: "Co-Author ng Reproductive Health Law (RA 10354)", description_en: "Co-authored the landmark Responsible Parenthood and Reproductive Health Act, providing universal access to contraception, maternal care, and sexual education after decades of legislative battle.", description_fil: "Co-author ng makasaysayang Responsible Parenthood and Reproductive Health Act, na nagbibigay ng universal access sa contraception, maternal care, at sexual education matapos ang dekadang laban sa lehislatura.", source_url: "https://www.officialgazette.gov.ph/2012/12/21/republic-act-no-10354/", source_name: "Official Gazette", date_occurred: "2012-12-21", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f101", official_id: "7", type: "achievement", title_en: "Universal Health Care Act (RA 11223)", title_fil: "Universal Health Care Act (RA 11223)", description_en: "Principal sponsor of the Universal Health Care Act which automatically enrolls all Filipino citizens in the National Health Insurance Program and ensures primary care access.", description_fil: "Principal sponsor ng Universal Health Care Act na awtomatikong nag-eenroll sa lahat ng Filipino citizen sa National Health Insurance Program at nagsisiguro ng primary care access.", source_url: "https://www.officialgazette.gov.ph/2019/02/20/republic-act-no-11223/", source_name: "Official Gazette", date_occurred: "2019-02-20", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f102", official_id: "7", type: "controversy", title_en: "ABS-CBN Franchise Denial as Committee Chair", title_fil: "ABS-CBN Franchise Denial bilang Committee Chair", description_en: "As chair of the committee handling ABS-CBN's franchise renewal in 2020, was criticized for the prolonged hearings that ultimately led to the network's shutdown affecting thousands of workers.", description_fil: "Bilang chair ng committee na humahawak ng ABS-CBN franchise renewal noong 2020, kinritika sa matagal na hearing na sa huli ay humantong sa shutdown ng network na nakaapekto sa libu-libong manggagawa.", source_url: "https://www.rappler.com/entertainment/abs-cbn-franchise-shutdown-cayetano", source_name: "Rappler", date_occurred: "2020-07-10", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f103", official_id: "7", type: "controversy", title_en: "Political Dynasty with Brother Alan Peter", title_fil: "Political Dynasty kasama si Kapatid Alan Peter", description_en: "She and her brother Alan Peter Cayetano both serve in the Senate simultaneously, with critics pointing to this as a clear example of political dynasties in Philippine politics.", description_fil: "Siya at ang kanyang kapatid na si Alan Peter Cayetano ay sabay na naglilingkod sa Senado, na tinuturo ng mga kritiko bilang malinaw na halimbawa ng political dynasty sa politika ng Pilipinas.", source_url: "https://www.inquirer.net/cayetano-siblings-senate-dynasty", source_name: "Philippine Daily Inquirer", date_occurred: "2022-07-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },

  // ===== KOKO PIMENTEL =====
  // ===== FRANCIS TOLENTINO =====
  // ===== MIGZ ZUBIRI =====
  { id: "f112", official_id: "26", type: "achievement", title_en: "Senate President (2022-2024)", title_fil: "Senate President (2022-2024)", description_en: "Served as Senate President from July 2022 to May 2024, leading the chamber through critical legislation including the Maharlika Investment Fund and the 2023-2024 national budgets.", description_fil: "Nagsilbi bilang Senate President mula Hulyo 2022 hanggang Mayo 2024, pinamunuan ang kapulungan sa mga kritikal na batas kabilang ang Maharlika Investment Fund at 2023-2024 national budgets.", source_url: "https://www.senate.gov.ph/senators/zubiri-senate-president", source_name: "Philippine Senate", date_occurred: "2022-07-25", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f113", official_id: "26", type: "achievement", title_en: "Agriculture and Mindanao Development Advocacy", title_fil: "Agriculture at Mindanao Development Advocacy", description_en: "Long-time advocate for Mindanao development and agricultural modernization, pushing for increased budget allocation and infrastructure development for the region.", description_fil: "Matagal nang tagapagtaguyod ng Mindanao development at agricultural modernization, nagtutulak ng increased budget allocation at infrastructure development para sa rehiyon.", source_url: "https://www.philstar.com/nation/zubiri-mindanao-development", source_name: "PhilStar", date_occurred: "2023-01-01", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f114", official_id: "26", type: "controversy", title_en: "Electoral Fraud Allegations (2007)", title_fil: "Electoral Fraud Allegations (2007)", description_en: "Won the 2007 Senate race but was accused of benefiting from electoral fraud linked to the Arroyo administration's 'Hello Garci' scandal. He resigned his seat in 2011 but was re-elected in 2016.", description_fil: "Nanalo sa 2007 Senate race ngunit inakusahan ng pagkakinabang sa electoral fraud na nauugnay sa 'Hello Garci' scandal ng administrasyong Arroyo. Nagbitiw siya sa kanyang puwesto noong 2011 ngunit muling nahalal noong 2016.", source_url: "https://www.rappler.com/nation/zubiri-2007-election-fraud-resignation", source_name: "Rappler", date_occurred: "2011-08-05", verified: true, display_order: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  { id: "f115", official_id: "26", type: "controversy", title_en: "Ouster as Senate President (2024)", title_fil: "Pag-oust bilang Senate President (2024)", description_en: "Was effectively ousted as Senate President in May 2024 after losing majority support amid political realignments. His removal highlighted the volatile nature of Senate leadership politics.", description_fil: "Epektibong na-oust bilang Senate President noong Mayo 2024 matapos mawalan ng majority support sa gitna ng political realignment. Ang kanyang pag-alis ay nagpakita ng volatile nature ng Senate leadership politics.", source_url: "https://www.inquirer.net/zubiri-ouster-senate-president-2024", source_name: "Philippine Daily Inquirer", date_occurred: "2024-05-15", verified: true, display_order: 2, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" },
  // === New Senators (2025 Election) ===
  // Tito Sotto (ID: 9)
  { id: "f116", official_id: "9", type: "achievement", title_en: "Longest-Serving Senator in Philippine History", title_fil: "Pinakamatagal na Nagsilbing Senador sa Kasaysayan ng Pilipinas", description_en: "Elected to a record fifth non-consecutive Senate term in 2025, making him the longest-serving senator in Philippine history. Previously served as Senate President from 2018-2022.", description_fil: "Nahalal sa rekord na ikalimang hindi-magkasunod na termino sa Senado noong 2025, na ginawa siyang pinakamatagal na nagsilbing senador sa kasaysayan ng Pilipinas. Dati siyang nagsilbi bilang Senate President mula 2018-2022.", source_url: "https://www.rappler.com/nation/elections/tito-sotto-wins-2025-senate-race", source_name: "Rappler", date_occurred: "2025-05-12", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f117", official_id: "9", type: "achievement", title_en: "Senate President (2018-2022, 2025-2026)", title_fil: "Senate President (2018-2022, 2025-2026)", description_en: "Served two stints as Senate President, leading the chamber through the COVID-19 pandemic response, the Bayanihan Acts, and the transition from the Duterte to Marcos administrations.", description_fil: "Nagsilbi ng dalawang beses bilang Senate President, pinamunuan ang kapulungan sa COVID-19 pandemic response, ang mga Bayanihan Act, at ang transisyon mula sa administrasyong Duterte tungo sa Marcos.", source_url: "https://www.senate.gov.ph/senators/sotto-senate-president", source_name: "Philippine Senate", date_occurred: "2025-09-08", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f118", official_id: "9", type: "controversy", title_en: "Pepsi Paloma Rape Case Involvement", title_fil: "Pepsi Paloma Rape Case Involvement", description_en: "Has long been accused of involvement in the 1982 Pepsi Paloma case, where actress Paloma alleged she was raped by Sotto's brother Vic Sotto and comedian Joey de Leon. Sotto allegedly pressured Paloma to drop charges.", description_fil: "Matagal nang inakusahan ng pagkakasangkot sa 1982 Pepsi Paloma case, kung saan inakusahan ng aktres na si Paloma na ginahasa siya ng kapatid ni Sotto na si Vic Sotto at comedian Joey de Leon. Si Sotto daw ay pinwersa si Paloma na i-drop ang mga kaso.", source_url: "https://www.rappler.com/newsbreak/iq/sotto-pepsi-paloma-history", source_name: "Rappler", date_occurred: "1982-01-01", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f119", official_id: "9", type: "controversy", title_en: "Plagiarism in RH Bill Debate (2012)", title_fil: "Plagiarism sa RH Bill Debate (2012)", description_en: "Caught plagiarizing portions of his speech against the Reproductive Health Bill from a U.S. blogger's article without attribution, leading to widespread criticism and fact-checking.", description_fil: "Nahuli na nag-plagiarize ng mga bahagi ng kanyang talumpati laban sa Reproductive Health Bill mula sa artikulo ng isang U.S. blogger na walang attribution, na humantong sa malawakang kritisismo at fact-checking.", source_url: "https://www.inquirer.net/sotto-plagiarism-rh-speech-2012", source_name: "Philippine Daily Inquirer", date_occurred: "2012-08-13", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  // Ping Lacson (ID: 10)
  { id: "f120", official_id: "10", type: "achievement", title_en: "National ID System Act (RA 11055)", title_fil: "National ID System Act (RA 11055)", description_en: "Principal author of the Philippine Identification System Act, creating the country's first national ID system (PhilSys) to streamline government transactions and financial inclusion.", description_fil: "Principal author ng Philippine Identification System Act, na lumikha ng unang national ID system (PhilSys) ng bansa para i-streamline ang mga government transaction at financial inclusion.", source_url: "https://www.officialgazette.gov.ph/2018/08/06/republic-act-no-11055/", source_name: "Official Gazette", date_occurred: "2018-08-06", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f121", official_id: "10", type: "achievement", title_en: "Anti-Hazing Law (RA 11053)", title_fil: "Anti-Hazing Law (RA 11053)", description_en: "Authored the Anti-Hazing Act of 2018 which regulates hazing and prohibits it in fraternities, making all forms of hazing punishable, with hazing resulting in death penalized by reclusion perpetua.", description_fil: "Sumulat ng Anti-Hazing Act of 2018 na nagre-regulate ng hazing at nagbabawal nito sa mga fraternity, ginagawang parusahan ang lahat ng uri ng hazing, na may hazing na nagreresulta sa kamatayan na pinarurusahan ng reclusion perpetua.", source_url: "https://www.officialgazette.gov.ph/2018/06/29/republic-act-no-11053/", source_name: "Official Gazette", date_occurred: "2018-06-29", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f122", official_id: "10", type: "controversy", title_en: "Dacer-Corbito Murder Case", title_fil: "Dacer-Corbito Murder Case", description_en: "Faced allegations in the 2000 murder of publicist Salvador Dacer and his driver. Fled the Philippines in 2010, returned in 2011 after charges were withdrawn. The Court of Appeals cited the accuser as 'not credible.'", description_fil: "Hinarap ang mga alegasyon sa 2000 pagpatay sa publicist na si Salvador Dacer at kanyang driver. Tumakas sa Pilipinas noong 2010, bumalik noong 2011 matapos bawiin ang mga kaso. Sinabi ng Court of Appeals na ang akusador ay 'hindi kapani-paniwala.'", source_url: "https://www.rappler.com/nation/lacson-dacer-corbito-case-history", source_name: "Rappler", date_occurred: "2011-03-01", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f123", official_id: "10", type: "controversy", title_en: "Kuratong Baleleng Rubout Allegations", title_fil: "Kuratong Baleleng Rubout Allegations", description_en: "As PNP chief, linked to the 1995 Kuratong Baleleng gang 'rubout' where 11 suspected gang members were killed in what human rights groups claimed was a summary execution rather than a legitimate encounter.", description_fil: "Bilang PNP chief, naiugnay sa 1995 Kuratong Baleleng gang 'rubout' kung saan 11 suspetsadong miyembro ng gang ang napatay sa sinasabi ng mga human rights group na summary execution sa halip na lehitimong engkuwentro.", source_url: "https://www.inquirer.net/lacson-kuratong-baleleng-case", source_name: "Philippine Daily Inquirer", date_occurred: "1995-05-18", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  // Rodante Marcoleta (ID: 11)
  { id: "f124", official_id: "11", type: "achievement", title_en: "Magna Carta of the Poor (RA 11291)", title_fil: "Magna Carta of the Poor (RA 11291)", description_en: "Principal author of the Magna Carta of the Poor, signed in 2019, which establishes a framework for poverty reduction and mandates government programs addressing the basic needs of disadvantaged Filipinos.", description_fil: "Principal author ng Magna Carta of the Poor, nilagdaan noong 2019, na nagtatatag ng framework para sa poverty reduction at nagmamandato ng mga programa ng gobyerno na tumutugon sa mga pangunahing pangangailangan ng mga disadvantaged na Pilipino.", source_url: "https://www.officialgazette.gov.ph/2019/04/12/republic-act-no-11291/", source_name: "Official Gazette", date_occurred: "2019-04-12", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f125", official_id: "11", type: "achievement", title_en: "First INC-Affiliated Elected Senator", title_fil: "Unang INC-Affiliated na Nahalal na Senador", description_en: "Became the first elected senator affiliated with the Iglesia ni Cristo in the 2025 elections, winning with over 15 million votes despite consistently polling outside the top 12 pre-election.", description_fil: "Naging unang nahalal na senador na kaanib ng Iglesia ni Cristo sa 2025 elections, nanalo ng higit 15 milyong boto sa kabila ng patuloy na pagkakalagay sa labas ng top 12 sa pre-election surveys.", source_url: "https://www.philstar.com/headlines/marcoleta-first-inc-senator-2025", source_name: "PhilStar", date_occurred: "2025-05-12", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f126", official_id: "11", type: "controversy", title_en: "ABS-CBN Franchise Denial (2020)", title_fil: "ABS-CBN Franchise Denial (2020)", description_en: "Key figure in denying ABS-CBN's franchise renewal in 2020, orchestrating House committee votes that permanently shut down the country's largest broadcast network, affecting 11,000 workers.", description_fil: "Pangunahing pigura sa pagtanggi ng franchise renewal ng ABS-CBN noong 2020, nag-orchestrate ng House committee votes na permanenteng nagsara ng pinakamalaking broadcast network ng bansa, na nakaapekto sa 11,000 manggagawa.", source_url: "https://www.rappler.com/nation/abs-cbn-franchise-denial-marcoleta-role", source_name: "Rappler", date_occurred: "2020-07-10", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f127", official_id: "11", type: "controversy", title_en: "Pork Barrel Fund Channeling to Dubious NGOs", title_fil: "Pork Barrel Fund Channeling sa Dubious NGOs", description_en: "Commission on Audit reported he channeled ₱15 million of pork barrel funds to dubious NGOs during his earlier congressional tenure, raising questions about fund misuse.", description_fil: "Iniulat ng Commission on Audit na nag-channel siya ng ₱15 milyon ng pork barrel funds sa mga dubious NGO sa kanyang naunang congressional tenure, na nagtaas ng mga tanong tungkol sa fund misuse.", source_url: "https://www.inquirer.net/marcoleta-coa-pork-barrel-ngos", source_name: "Philippine Daily Inquirer", date_occurred: "2013-01-01", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  // Bam Aquino (ID: 12)
  { id: "f128", official_id: "12", type: "achievement", title_en: "Free Tuition Law (RA 10931)", title_fil: "Free Tuition Law (RA 10931)", description_en: "Principal sponsor of the Universal Access to Quality Tertiary Education Act, making tuition and fees free at all state universities and colleges, benefiting millions of Filipino students.", description_fil: "Principal sponsor ng Universal Access to Quality Tertiary Education Act, na ginawang libre ang tuition at fees sa lahat ng state university at college, na nakinabang ang milyun-milyong estudyanteng Pilipino.", source_url: "https://www.officialgazette.gov.ph/2017/08/03/republic-act-no-10931/", source_name: "Official Gazette", date_occurred: "2017-08-03", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f129", official_id: "12", type: "achievement", title_en: "Go Negosyo Act (RA 10644)", title_fil: "Go Negosyo Act (RA 10644)", description_en: "Authored the Go Negosyo Act establishing Negosyo Centers nationwide — one-stop shops that provide business registration assistance, mentoring, and access to financing for micro-entrepreneurs.", description_fil: "Sumulat ng Go Negosyo Act na nagtatatag ng mga Negosyo Center sa buong bansa — mga one-stop shop na nagbibigay ng business registration assistance, mentoring, at access sa financing para sa micro-entrepreneurs.", source_url: "https://www.officialgazette.gov.ph/2014/07/15/republic-act-no-10644/", source_name: "Official Gazette", date_occurred: "2014-07-15", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f130", official_id: "12", type: "controversy", title_en: "Sedition Charges (2019, Cleared 2020)", title_fil: "Sedition Charges (2019, Na-clear 2020)", description_en: "Faced sedition and inciting to sedition charges in July 2019 along with other opposition figures, accused of plotting to destabilize the Duterte administration. Charges were dismissed in February 2020.", description_fil: "Hinarap ang mga kaso ng sedition at inciting to sedition noong Hulyo 2019 kasama ang ibang opposition figures, inakusahang nagplano na magdestabilize sa administrasyong Duterte. Na-dismiss ang mga kaso noong Pebrero 2020.", source_url: "https://www.rappler.com/nation/aquino-sedition-charges-filed-2019", source_name: "Rappler", date_occurred: "2019-07-19", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f131", official_id: "12", type: "controversy", title_en: "Alleged Blogger Hiring Against Political Rivals", title_fil: "Alleged Blogger Hiring Laban sa Political Rivals", description_en: "Accused of hiring a social media blogger to produce content discrediting then-Senator Bong Go. Aquino denied the allegations, calling them politically motivated.", description_fil: "Inakusahan ng pag-hire ng social media blogger para gumawa ng content na nanira kay dating Senador Bong Go. Itinanggi ni Aquino ang mga alegasyon, na sinasabing politically motivated.", source_url: "https://www.philstar.com/headlines/aquino-blogger-hiring-allegations", source_name: "PhilStar", date_occurred: "2019-10-01", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  // Kiko Pangilinan (ID: 13)
  { id: "f132", official_id: "13", type: "achievement", title_en: "Juvenile Justice and Welfare Act ('Pangilinan Law')", title_fil: "Juvenile Justice and Welfare Act ('Pangilinan Law')", description_en: "Principal author of the Juvenile Justice and Welfare Act (RA 9344), establishing a separate justice system for minors and setting the minimum age of criminal responsibility at 15, protecting children from adult prison.", description_fil: "Principal author ng Juvenile Justice and Welfare Act (RA 9344), na nagtatatag ng hiwalay na justice system para sa mga menor de edad at nagtatakda ng minimum age of criminal responsibility sa 15, na nagpoprotekta sa mga bata mula sa adult prison.", source_url: "https://www.officialgazette.gov.ph/2006/04/28/republic-act-no-9344/", source_name: "Official Gazette", date_occurred: "2006-04-28", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f133", official_id: "13", type: "achievement", title_en: "Coconut Farmers Trust Fund Act", title_fil: "Coconut Farmers Trust Fund Act", description_en: "Key proponent of legislation creating the ₱105 billion Coconut Farmers Trust Fund, returning coco levy funds collected from farmers during martial law to benefit the coconut industry.", description_fil: "Pangunahing tagapagsulong ng batas na lumikha ng ₱105 bilyong Coconut Farmers Trust Fund, na ibinabalik ang coco levy funds na kinolekta mula sa mga magsasaka noong martial law para makinabang ang coconut industry.", source_url: "https://www.rappler.com/nation/coconut-farmers-trust-fund-pangilinan", source_name: "Rappler", date_occurred: "2021-02-26", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f134", official_id: "13", type: "controversy", title_en: "Decisive Loss in 2022 VP Race", title_fil: "Malaking Pagkatalo sa 2022 VP Race", description_en: "Lost the 2022 vice-presidential election decisively to Sara Duterte by over 22 million votes, raising questions about the opposition's electoral strategy and his political viability.", description_fil: "Malaking natalo sa 2022 vice-presidential election kay Sara Duterte ng higit 22 milyong boto, na nagtaas ng mga tanong tungkol sa electoral strategy ng oposisyon at kanyang political viability.", source_url: "https://www.inquirer.net/pangilinan-vp-loss-2022-analysis", source_name: "Philippine Daily Inquirer", date_occurred: "2022-05-09", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f135", official_id: "13", type: "controversy", title_en: "Juvenile Justice Law Blamed for Youth Crime", title_fil: "Juvenile Justice Law Sinisisi sa Youth Crime", description_en: "The Juvenile Justice Act he authored has been criticized by the Duterte administration and some law enforcement for allegedly enabling juvenile crime, though Pangilinan argues the issue is poor implementation, not the law itself.", description_fil: "Ang Juvenile Justice Act na kanyang sinulat ay kinritika ng administrasyong Duterte at ilang law enforcement dahil daw sa pag-enable ng juvenile crime, bagaman argumento ni Pangilinan na ang isyu ay mahinang implementation, hindi ang batas mismo.", source_url: "https://www.rappler.com/nation/pangilinan-juvenile-justice-law-criticism", source_name: "Rappler", date_occurred: "2019-01-15", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  // Camille Villar (ID: 14)
  { id: "f136", official_id: "14", type: "achievement", title_en: "Youngest Senator in Current Congress", title_fil: "Pinakabatang Senador sa Kasalukuyang Kongreso", description_en: "Elected to the Senate in 2025 at age 40, becoming the youngest member of the chamber. Represents a generational shift in Philippine politics as a millennial senator.", description_fil: "Nahalal sa Senado noong 2025 sa edad na 40, naging pinakabatang miyembro ng kapulungan. Kumakatawan sa generational shift sa politika ng Pilipinas bilang isang millennial senator.", source_url: "https://www.philstar.com/headlines/camille-villar-youngest-senator-2025", source_name: "PhilStar", date_occurred: "2025-05-12", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f137", official_id: "14", type: "achievement", title_en: "Deputy Speaker of the House (2021-2025)", title_fil: "Deputy Speaker ng Kamara (2021-2025)", description_en: "Served as Deputy Speaker of the House of Representatives during the 18th and 19th Congress, working on housing, infrastructure, and MSME development legislation for Las Piñas.", description_fil: "Nagsilbi bilang Deputy Speaker ng House of Representatives sa ika-18 at ika-19 na Kongreso, nagtrabaho sa housing, infrastructure, at MSME development legislation para sa Las Piñas.", source_url: "https://www.congress.gov.ph/members/villar-deputy-speaker", source_name: "House of Representatives", date_occurred: "2021-07-26", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f138", official_id: "14", type: "controversy", title_en: "Political Dynasty and Villar Family Wealth", title_fil: "Political Dynasty at Villar Family Wealth", description_en: "Criticized as a product of political dynasty — her mother Cynthia Villar served as senator, father Manny Villar is a billionaire former senator, and brother Mark Villar currently serves alongside her in the Senate.", description_fil: "Kinritika bilang produkto ng political dynasty — ang kanyang ina na si Cynthia Villar ay nagsilbi bilang senador, ang ama na si Manny Villar ay isang bilyonaryo na dating senador, at ang kapatid na si Mark Villar ay kasalukuyang naglilingkod kasama niya sa Senado.", source_url: "https://www.rappler.com/nation/camille-villar-dynasty-criticism-2025", source_name: "Rappler", date_occurred: "2025-03-01", verified: true, display_order: 1, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" },
  { id: "f139", official_id: "14", type: "controversy", title_en: "SEC Insider Trading Complaint (2026)", title_fil: "SEC Insider Trading Complaint (2026)", description_en: "In January 2026, the Securities and Exchange Commission filed complaints against Villar Land and family members including Camille, alleging insider trading and market manipulation related to share purchases in December 2017.", description_fil: "Noong Enero 2026, nag-file ang Securities and Exchange Commission ng mga reklamo laban sa Villar Land at mga miyembro ng pamilya kabilang si Camille, na inakusahan ng insider trading at market manipulation kaugnay ng share purchases noong Disyembre 2017.", source_url: "https://www.inquirer.net/sec-villar-insider-trading-2026", source_name: "Philippine Daily Inquirer", date_occurred: "2026-01-15", verified: true, display_order: 2, created_at: "2025-05-25T00:00:00Z", updated_at: "2025-05-25T00:00:00Z" }
];

export function getFactsByOfficial(officialId: string): Fact[] {
  return facts.filter((f) => f.official_id === officialId);
}

export function getFactsByOfficialAndType(officialId: string, type: string): Fact[] {
  return facts.filter((f) => f.official_id === officialId && f.type === type);
}
