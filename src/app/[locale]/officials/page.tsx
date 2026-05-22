import { useTranslations } from "next-intl";
import { OfficialCard } from "@/components/official-card";
import { officials } from "@/data/officials";

export default function OfficialsPage() {
  const t = useTranslations("officials");

  const president = officials.filter((o) => o.position === "president");
  const vp = officials.filter((o) => o.position === "vice_president");
  const senators = officials.filter((o) => o.position === "senator");

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{t("title")}</h1>
      <p className="text-muted-foreground mb-10">{t("subtitle")}</p>

      {/* President */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("president")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {president.map((official) => (
            <OfficialCard key={official.id} official={official} />
          ))}
        </div>
      </section>

      {/* Vice President */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("vice_president")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vp.map((official) => (
            <OfficialCard key={official.id} official={official} />
          ))}
        </div>
      </section>

      {/* Senators */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">{t("senator")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {senators.map((official) => (
            <OfficialCard key={official.id} official={official} />
          ))}
        </div>
      </section>

      {/* Congressman placeholder */}
      <section>
        <h2 className="text-xl font-semibold mb-4">{t("congressman")}</h2>
        <div className="rounded-lg border-2 border-dashed p-8 text-center text-muted-foreground">
          <p className="text-lg font-medium">Coming Soon</p>
          <p className="text-sm mt-1">Congressional district profiles will be added in a future update.</p>
        </div>
      </section>
    </div>
  );
}
