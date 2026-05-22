import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">{t("title")}</h1>

      <div className="space-y-10">
        {/* Mission */}
        <section>
          <h2 className="text-xl font-semibold mb-3">{t("mission_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("mission_desc")}
          </p>
        </section>

        {/* Methodology */}
        <section>
          <h2 className="text-xl font-semibold mb-3">{t("methodology_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("methodology_desc")}
          </p>
        </section>

        {/* Non-partisan commitment */}
        <section>
          <h2 className="text-xl font-semibold mb-3">{t("nonpartisan_title")}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {t("nonpartisan_desc")}
          </p>
        </section>

        {/* Sources */}
        <section>
          <h2 className="text-xl font-semibold mb-3">{t("sources_title")}</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t("sources_desc")}
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <a href="https://verafiles.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Vera Files
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <a href="https://www.rappler.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Rappler
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <a href="https://pcij.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Philippine Center for Investigative Journalism (PCIJ)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <a href="https://tsek.ph" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Tsek.ph
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Official Gazette of the Philippines
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Philippine Senate &amp; House of Representatives records
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              COMELEC official election data
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
