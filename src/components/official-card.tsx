"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Official } from "@/types";

const positionColors: Record<string, string> = {
  president: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  vice_president: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  senator: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  congressman: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

export function OfficialCard({ official }: { official: Official }) {
  const locale = useLocale();
  const t = useTranslations("officials");

  const positionKey = official.position as keyof typeof positionColors;

  return (
    <Link href={`/${locale}/officials/${official.slug}`}>
      <Card className="h-full hover:shadow-md transition-shadow cursor-pointer group">
        <CardContent className="p-6">
          {/* Avatar placeholder */}
          <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 group-hover:bg-muted/80 transition-colors">
            <span className="text-2xl font-bold text-muted-foreground">
              {official.full_name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </span>
          </div>

          {/* Name */}
          <h3 className="font-semibold text-center mb-2 group-hover:text-primary transition-colors">
            {official.full_name}
          </h3>

          {/* Position badge */}
          <div className="flex justify-center mb-2">
            <Badge
              variant="secondary"
              className={positionColors[positionKey] || ""}
            >
              {t(positionKey)}
            </Badge>
          </div>

          {/* Party */}
          {official.party && (
            <p className="text-xs text-muted-foreground text-center">
              {official.party}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
