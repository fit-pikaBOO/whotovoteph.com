import { useTranslations } from "next-intl";
import Link from "next/link";
import { OfficialCard } from "@/components/official-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { ScrollReveal } from "@/components/scroll-reveal";
import { officials } from "@/data/officials";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden bg-[#0A1628] text-white min-h-[90vh] flex items-center">
        {/* Layered backgrounds */}
        <div className="absolute inset-0 hero-pattern opacity-40" />
        <div className="absolute inset-0 sun-rays" />
        <div className="texture-grain" />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#F5A623]/[0.03] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A1628] to-transparent" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[#F5A623]/[0.03] blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 left-[5%] w-40 h-40 rounded-full bg-[#0038A8]/[0.05] blur-2xl animate-[float_6s_ease-in-out_infinite_1s]" />

        <div className="relative z-10 container mx-auto max-w-6xl px-4 py-28 md:py-40">
          <div className="max-w-4xl">
            {/* Accent line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-[#F5A623] to-transparent" />
              <span className="text-[#F5A623] text-[11px] font-semibold tracking-[0.25em] uppercase">
                Non-partisan voter education
              </span>
            </div>

            {/* Hero Headline — oversized editorial typography */}
            <h1 className="font-heading text-[clamp(2.8rem,8vw,6.5rem)] leading-[1.02] mb-8 tracking-tight">
              <span className="block">{t("hero_title_prefix")}</span>
              <span className="block text-gradient-gold">{t("hero_title_highlight")}</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-xl leading-relaxed">
              {t("hero_subtitle")}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/en/officials"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#F5A623] text-[#0A1628] font-bold rounded-xl hover:bg-[#F5A623]/90 transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-[#F5A623]/25 btn-shimmer"
              >
                {t("explore_officials")}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/en/guide"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/80 font-medium rounded-xl hover:bg-white/5 hover:border-white/25 transition-all"
              >
                {t("how_it_works")}
              </Link>
            </div>
          </div>

          {/* Stats — staggered reveal */}
          <div className="mt-20 pt-8 border-t border-white/[0.06]">
            <div className="grid grid-cols-3 gap-8 max-w-md">
              {[
                { value: "26", label: t("hero_stats_officials") },
                { value: "115", label: t("hero_stats_facts") },
                { value: "2", label: t("hero_stats_languages") },
              ].map((stat, i) => (
                <div key={stat.label} className={`reveal reveal-delay-${i + 1}`}>
                  <div className="text-3xl md:text-4xl font-heading text-gradient-gold">{stat.value}</div>
                  <div className="text-[11px] text-white/40 mt-1.5 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/40 to-transparent" />
      </section>

      {/* ===== HOW IT WORKS — Timeline ===== */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pattern-tinalak opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] sun-rays opacity-30" />

        <div className="relative container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="text-[#F5A623] text-[11px] font-semibold tracking-[0.25em] uppercase">{t("section_approach")}</span>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 leading-tight">
                {t("how_it_works")}
              </h2>
            </div>
          </ScrollReveal>

          {/* Timeline layout */}
          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[23px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#F5A623] via-[#F5A623]/40 to-transparent hidden md:block" />

            {[
              { num: "01", title: t("step1_title"), desc: t("step1_desc"), icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { num: "02", title: t("step2_title"), desc: t("step2_desc"), icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
              { num: "03", title: t("step3_title"), desc: t("step3_desc"), icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={(i + 1) as 1 | 2 | 3}>
                <div className="flex gap-6 mb-12 last:mb-0 group">
                  {/* Timeline dot */}
                  <div className="shrink-0 relative z-10 mt-2">
                    <div className="timeline-dot group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 bg-card border rounded-xl p-6 md:p-8 hover:shadow-xl hover:shadow-[#F5A623]/5 transition-all duration-300 card-glow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-11 h-11 rounded-lg bg-[#F5A623]/10 flex items-center justify-center shrink-0 group-hover:bg-[#F5A623]/20 transition-colors">
                        <svg className="w-5 h-5 text-[#F5A623]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={step.icon} />
                        </svg>
                      </div>
                      <span className="text-5xl font-heading text-[#F5A623]/10 select-none leading-none">{step.num}</span>
                    </div>
                    <h3 className="font-bold text-lg mt-4 mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* ===== OFFICIALS GRID ===== */}
      <section className="py-24 md:py-32 px-4 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] sun-rays opacity-20" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />

        <div className="relative container mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-[#F5A623] text-[11px] font-semibold tracking-[0.25em] uppercase">{t("section_profiles")}</span>
              <h2 className="font-heading text-4xl md:text-5xl mt-4 text-white leading-tight">
                {t("featured_officials")}
              </h2>
              <p className="text-white/40 mt-4 max-w-md mx-auto text-sm leading-relaxed">
                Equal treatment. Equal depth. Every fact sourced. You decide.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured grid: President larger, rest standard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* President — featured card (spans 2 cols) */}
            <ScrollReveal className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <OfficialCard official={officials[0]} featured />
            </ScrollReveal>

            {/* Rest of officials */}
            {officials.slice(1).map((official, i) => (
              <ScrollReveal key={official.id} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <OfficialCard official={official} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/en/officials"
                className="group inline-flex items-center gap-2 text-[#F5A623] text-sm font-semibold hover:underline underline-offset-4"
              >
                {t("view_all_officials")}
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PRINCIPLES — Bento Grid ===== */}
      <section className="py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 sun-rays opacity-20" />

        <div className="relative container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Left column — Large text */}
            <ScrollReveal className="md:col-span-1">
              <div className="md:sticky md:top-24">
                <span className="text-[#F5A623] text-[11px] font-semibold tracking-[0.25em] uppercase">{t("section_promise")}</span>
                <h2 className="font-heading text-3xl md:text-4xl mt-4 mb-6 leading-tight">
                  {t("promise_text")}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t("promise_desc")}
                </p>
              </div>
            </ScrollReveal>

            {/* Right column — Bento cards */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              {[
                { key: "nonpartisan", accent: "#F5A623" },
                { key: "sourced", accent: "#1B7340" },
                { key: "bilingual", accent: "#0038A8" },
                { key: "bothsides", accent: "#CE1127" },
              ].map((item, i) => (
                <ScrollReveal key={item.key} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                  <div className={`bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 card-glow h-full ${i === 0 ? 'row-span-1' : ''}`}>
                    <div
                      className="w-3 h-3 rounded-full mb-4"
                      style={{ backgroundColor: item.accent }}
                    />
                    <div className="font-bold text-sm mb-1">{t(`principle_${item.key}`)}</div>
                    <div className="text-xs text-muted-foreground leading-relaxed">{t(`principle_${item.key}_desc`)}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER — Full bleed gradient ===== */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#0D2847]" />
        <div className="absolute inset-0 sun-rays opacity-30" />
        <div className="texture-grain" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />

        <div className="relative z-10 container mx-auto max-w-lg text-center">
          <ScrollReveal>
            <span className="text-[#F5A623] text-[11px] font-semibold tracking-[0.25em] uppercase">{t("section_newsletter")}</span>
            <h2 className="font-heading text-3xl md:text-4xl mt-4 mb-3 text-white">{t("newsletter_title")}</h2>
            <p className="text-white/50 mb-10 text-sm">{t("newsletter_desc")}</p>

            <div className="animated-border p-[2px] rounded-xl">
              <div className="bg-[#0A1628] rounded-[10px] p-4">
                <NewsletterForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
