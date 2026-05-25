"use client";

import { useLocale, useTranslations } from "next-intl";
import { Fact } from "@/types";

const typeBorderColors: Record<string, string> = {
  achievement: "border-l-[#1B7340]",
  controversy: "border-l-[#C23B22]",
  legislation: "border-l-[#4A90D9]",
  promise: "border-l-[#F5A623]",
  statement: "border-l-[#5C6370]",
};

const typeIndicators: Record<string, { bg: string; text: string }> = {
  achievement: { bg: "bg-[#1B7340]/10", text: "text-[#1B7340]" },
  controversy: { bg: "bg-[#C23B22]/10", text: "text-[#C23B22]" },
  legislation: { bg: "bg-[#4A90D9]/10", text: "text-[#4A90D9]" },
  promise: { bg: "bg-[#F5A623]/10", text: "text-[#F5A623]" },
  statement: { bg: "bg-[#5C6370]/10", text: "text-[#5C6370]" },
};

export function FactCard({ fact }: { fact: Fact }) {
  const locale = useLocale();
  const t = useTranslations("officials");

  const title = locale === "fil" ? fact.title_fil : fact.title_en;
  const description = locale === "fil" ? fact.description_fil : fact.description_en;
  const indicator = typeIndicators[fact.type] || typeIndicators.statement;

  return (
    <div
      className={`bg-card border rounded-lg border-l-4 ${typeBorderColors[fact.type]} p-5 hover:shadow-md transition-shadow duration-200`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-semibold text-sm leading-snug">{title}</h3>
        {fact.verified && (
          <span className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${indicator.bg} ${indicator.text}`}>
            {t("verified")}
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-border/50">
        {fact.date_occurred && (
          <span className="text-xs text-muted-foreground">
            {new Date(fact.date_occurred).toLocaleDateString(
              locale === "fil" ? "fil-PH" : "en-PH",
              { year: "numeric", month: "short", day: "numeric" }
            )}
          </span>
        )}
        <a
          href={fact.source_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#F5A623] hover:underline"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          {fact.source_name}
        </a>
      </div>
    </div>
  );
}
