import { useTranslations } from "next-intl";
import { OfficialCard } from "@/components/official-card";
import { officials } from "@/data/officials";

export default function OfficialsPage() {
  const t = useTranslations("officials");

  const president = officials.filter((o) => o.position === "president");
  const vp = officials.filter((o) => o.position === "vice_president");
  const senators = officials.filter((o) => o.position === "senator");

  return (
    <div className="bg-[#0A1628] min-h-screen text-white">
      {/* Hero header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />
        <div className="relative container mx-auto max-w-6xl px-4 pt-12 pb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-[#F5A623] to-transparent" />
            <span className="text-[#F5A623] text-[11px] font-semibold tracking-[0.25em] uppercase">{t("subtitle")}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl leading-tight">{t("title")}</h1>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        {/* President */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
            <h2 className="text-lg font-semibold text-white/90 tracking-wide uppercase">{t("president")}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#F5A623]/30 to-transparent" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {president.map((official) => (
              <OfficialCard key={official.id} official={official} />
            ))}
          </div>
        </section>

        {/* Vice President */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#4A90D9]" />
            <h2 className="text-lg font-semibold text-white/90 tracking-wide uppercase">{t("vice_president")}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#4A90D9]/30 to-transparent" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {vp.map((official) => (
              <OfficialCard key={official.id} official={official} />
            ))}
          </div>
        </section>

        {/* Senators */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#1B7340]" />
            <h2 className="text-lg font-semibold text-white/90 tracking-wide uppercase">{t("senator")}</h2>
            <span className="text-xs text-white/30 ml-1">({senators.length})</span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#1B7340]/30 to-transparent" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {senators.map((official) => (
              <OfficialCard key={official.id} official={official} />
            ))}
          </div>
        </section>

        {/* Congressman placeholder */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
            <h2 className="text-lg font-semibold text-white/90 tracking-wide uppercase">{t("congressman")}</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#8B5CF6]/30 to-transparent" />
          </div>
          <div className="rounded-xl border border-white/10 border-dashed p-10 text-center">
            <p className="text-white/60 font-medium">Coming Soon</p>
            <p className="text-xs text-white/30 mt-2">Congressional district profiles will be added in a future update.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
