"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FactCard } from "./fact-card";
import { cn } from "@/lib/utils";
import { Official, Fact } from "@/types";

const positionColors: Record<string, string> = {
  president: "bg-yellow-100 text-yellow-800",
  vice_president: "bg-blue-100 text-blue-800",
  senator: "bg-green-100 text-green-800",
  congressman: "bg-purple-100 text-purple-800",
};

export function OfficialProfile({
  official,
  facts,
}: {
  official: Official;
  facts: Fact[];
}) {
  const locale = useLocale();
  const t = useTranslations("officials");

  const bio = locale === "fil" ? official.bio_fil : official.bio_en;

  const achievements = facts.filter((f) => f.type === "achievement");
  const controversies = facts.filter((f) => f.type === "controversy");
  const legislation = facts.filter((f) => f.type === "legislation");
  const promises = facts.filter((f) => f.type === "promise");

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Back link */}
      <Link href={`/${locale}/officials`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "mb-6")}>
        &larr; {t("title")}
      </Link>

      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center shrink-0">
          <span className="text-3xl font-bold text-muted-foreground">
            {official.full_name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </span>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{official.full_name}</h1>
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge className={positionColors[official.position] || ""} variant="secondary">
              {t(official.position as 'president' | 'vice_president' | 'senator' | 'congressman')}
            </Badge>
            {official.party && (
              <Badge variant="outline">{official.party}</Badge>
            )}
          </div>
          {official.term_start && (
            <p className="text-sm text-muted-foreground mb-3">
              Term: {official.term_start} — {official.term_end || "Present"}
            </p>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
        </div>
      </div>

      {/* Facts Tabs */}
      <Tabs defaultValue="achievements">
        <TabsList className="mb-6">
          <TabsTrigger value="achievements">
            {t("achievements")} ({achievements.length})
          </TabsTrigger>
          <TabsTrigger value="controversies">
            {t("controversies")} ({controversies.length})
          </TabsTrigger>
          {legislation.length > 0 && (
            <TabsTrigger value="legislation">
              {t("legislation")} ({legislation.length})
            </TabsTrigger>
          )}
          {promises.length > 0 && (
            <TabsTrigger value="promises">
              {t("promises")} ({promises.length})
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="achievements">
          {achievements.length > 0 ? (
            <div className="grid gap-4">
              {achievements.map((fact) => (
                <FactCard key={fact.id} fact={fact} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              {t("no_facts")}
            </p>
          )}
        </TabsContent>

        <TabsContent value="controversies">
          {controversies.length > 0 ? (
            <div className="grid gap-4">
              {controversies.map((fact) => (
                <FactCard key={fact.id} fact={fact} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              {t("no_facts")}
            </p>
          )}
        </TabsContent>

        <TabsContent value="legislation">
          {legislation.length > 0 ? (
            <div className="grid gap-4">
              {legislation.map((fact) => (
                <FactCard key={fact.id} fact={fact} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              {t("no_facts")}
            </p>
          )}
        </TabsContent>

        <TabsContent value="promises">
          {promises.length > 0 ? (
            <div className="grid gap-4">
              {promises.map((fact) => (
                <FactCard key={fact.id} fact={fact} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              {t("no_facts")}
            </p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
