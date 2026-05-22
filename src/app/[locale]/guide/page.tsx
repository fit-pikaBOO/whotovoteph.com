import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";

export default function GuidePage() {
  const t = useTranslations("guide");

  const questions = [
    { title: t("q1_title"), desc: t("q1_desc") },
    { title: t("q2_title"), desc: t("q2_desc") },
    { title: t("q3_title"), desc: t("q3_desc") },
    { title: t("q4_title"), desc: t("q4_desc") },
    { title: t("q5_title"), desc: t("q5_desc") },
  ];

  const factCheckers = [
    { name: "Vera Files", url: "https://verafiles.org", desc: "Independent nonprofit media organization" },
    { name: "Rappler", url: "https://www.rappler.com", desc: "IFCN-certified fact-checking organization" },
    { name: "PCIJ", url: "https://pcij.org", desc: "Philippine Center for Investigative Journalism" },
    { name: "Tsek.ph", url: "https://tsek.ph", desc: "Academe-media collaborative fact-checking" },
    { name: "AFP Fact Check", url: "https://factcheck.afp.com", desc: "Agence France-Presse fact-checking" },
  ];

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{t("title")}</h1>
      <p className="text-muted-foreground mb-8">{t("subtitle")}</p>

      <p className="text-sm mb-8 font-medium">{t("intro")}</p>

      {/* Critical thinking questions */}
      <div className="space-y-4 mb-12">
        {questions.map((q, i) => (
          <Card key={i}>
            <CardContent className="p-5">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{q.title}</h3>
                  <p className="text-sm text-muted-foreground">{q.desc}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fact-checking resources */}
      <h2 className="text-2xl font-bold mb-2">{t("factcheck_title")}</h2>
      <p className="text-muted-foreground mb-6 text-sm">{t("factcheck_desc")}</p>

      <div className="grid gap-3">
        {factCheckers.map((fc) => (
          <a
            key={fc.name}
            href={fc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
          >
            <div>
              <p className="font-medium text-sm">{fc.name}</p>
              <p className="text-xs text-muted-foreground">{fc.desc}</p>
            </div>
            <span className="text-muted-foreground">&rarr;</span>
          </a>
        ))}
      </div>
    </div>
  );
}
