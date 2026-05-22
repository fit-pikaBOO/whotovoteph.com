"use client";

import { useLocale, useTranslations } from "next-intl";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Fact } from "@/types";

export function FactCard({ fact }: { fact: Fact }) {
  const locale = useLocale();
  const t = useTranslations("officials");

  const title = locale === "fil" ? fact.title_fil : fact.title_en;
  const description = locale === "fil" ? fact.description_fil : fact.description_en;

  return (
    <Card className="h-full">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-semibold text-sm leading-tight">{title}</h3>
          {fact.verified && (
            <Badge variant="secondary" className="text-xs shrink-0 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              {t("verified")}
            </Badge>
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {fact.date_occurred && (
            <span>
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
            className="text-primary hover:underline font-medium"
          >
            {t("source")}: {fact.source_name}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
