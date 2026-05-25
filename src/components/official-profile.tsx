"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FactCard } from "./fact-card";
import { cn } from "@/lib/utils";
import { Official, Fact } from "@/types";

const positionAccents: Record<string, string> = {
  president: "bg-[#F5A623]",
  vice_president: "bg-[#4A90D9]",
  senator: "bg-[#1B7340]",
  congressman: "bg-[#8B5CF6]",
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
    <div>
      {/* Profile Header */}
      <div className="bg-[#0A1628] text-white relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/30 to-transparent" />

        <div className="relative container mx-auto max-w-4xl px-4 pt-8 pb-12">
          {/* Back link */}
          <Link
            href={`/${locale}/officials`}
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#F5A623] text-sm transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            {t("title")}
          </Link>

          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center overflow-hidden">
                {official.photo_url ? (
                  <Image src={official.photo_url} alt={official.full_name} width={96} height={96} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-2xl md:text-3xl font-heading text-[#F5A623]">
                    {official.full_name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                )}
              </div>
              <div className={cn("absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-[#0A1628]", positionAccents[official.position])} />
            </div>

            <div className="flex-1">
              <h1 className="font-heading text-3xl md:text-4xl mb-2">{official.full_name}</h1>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-sm text-[#F5A623] font-medium">
                  {t(official.position as 'president' | 'vice_president' | 'senator' | 'congressman')}
                </span>
                {official.party && (
                  <>
                    <span className="text-white/20">|</span>
                    <span className="text-sm text-white/50">{official.party}</span>
                  </>
                )}
                {official.term_start && (
                  <>
                    <span className="text-white/20">|</span>
                    <span className="text-sm text-white/40">
                      {official.term_start} — {official.term_end || "Present"}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-2xl">{bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Facts Section */}
      <div className="container mx-auto max-w-4xl px-4 py-10">
        <Tabs defaultValue="achievements">
          <TabsList className="mb-8 bg-muted/50 p-1 rounded-lg">
            <TabsTrigger value="achievements" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-success mr-2 inline-block" />
              {t("achievements")} ({achievements.length})
            </TabsTrigger>
            <TabsTrigger value="controversies" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-warning mr-2 inline-block" />
              {t("controversies")} ({controversies.length})
            </TabsTrigger>
            {legislation.length > 0 && (
              <TabsTrigger value="legislation" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm">
                {t("legislation")} ({legislation.length})
              </TabsTrigger>
            )}
            {promises.length > 0 && (
              <TabsTrigger value="promises" className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-md px-4 py-2 text-sm">
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
              <EmptyState message={t("no_facts")} />
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
              <EmptyState message={t("no_facts")} />
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
              <EmptyState message={t("no_facts")} />
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
              <EmptyState message={t("no_facts")} />
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="text-center py-12 border border-dashed rounded-xl">
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  );
}
