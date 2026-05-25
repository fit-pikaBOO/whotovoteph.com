"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Official } from "@/types";

const positionAccents: Record<string, string> = {
  president: "from-[#F5A623] to-[#E8960F]",
  vice_president: "from-[#4A90D9] to-[#357ABD]",
  senator: "from-[#1B7340] to-[#145A33]",
  congressman: "from-[#8B5CF6] to-[#7C3AED]",
};

const positionColors: Record<string, string> = {
  president: "#F5A623",
  vice_president: "#4A90D9",
  senator: "#1B7340",
  congressman: "#8B5CF6",
};

export function OfficialCard({ official, featured }: { official: Official; featured?: boolean }) {
  const locale = useLocale();
  const t = useTranslations("officials");

  const accent = positionAccents[official.position] || "from-gray-400 to-gray-500";
  const color = positionColors[official.position] || "#5C6370";

  if (featured) {
    return (
      <Link href={`/${locale}/officials/${official.slug}`} className="group block h-full">
        <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 h-full hover:bg-white/[0.07] hover:border-[#F5A623]/30 transition-all duration-500 card-glow card-tilt overflow-hidden">
          {/* Gradient mesh background */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full" style={{ background: `radial-gradient(circle, ${color}20, transparent)` }} />
            <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#0038A8]/10 blur-2xl" />
          </div>

          {/* Position accent bar — animated width */}
          <div className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${accent} rounded-full opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:left-4 group-hover:right-4`} />

          <div className="relative">
            {/* Avatar */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-6 relative overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F5A623]/20 to-transparent group-hover:from-[#F5A623]/40 transition-all duration-500 z-10" />
              {official.photo_url ? (
                <Image src={official.photo_url} alt={official.full_name} width={96} height={96} className="w-full h-full object-cover rounded-full" />
              ) : (
                <>
                  <div className="absolute inset-[3px] rounded-full bg-[#0A1628]" />
                  <span className="relative text-2xl md:text-3xl font-heading text-white/80 group-hover:text-[#F5A623] transition-colors duration-300">
                    {official.full_name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </>
              )}
            </div>

            {/* Name */}
            <h3 className="font-heading text-xl md:text-2xl text-white mb-2 leading-tight group-hover:text-[#F5A623] transition-colors duration-300">
              {official.full_name}
            </h3>

            {/* Position badge */}
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
              <span className="text-sm text-white/60 font-medium">
                {t(official.position as 'president' | 'vice_president' | 'senator' | 'congressman')}
              </span>
            </div>

            {/* Party */}
            {official.party && (
              <p className="text-xs text-white/30">
                {official.party}
              </p>
            )}

            {/* View Profile — fades in on hover */}
            <div className="mt-6 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-[#F5A623] text-xs font-semibold tracking-wider uppercase flex items-center gap-2">
                {t("view_profile")}
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/${locale}/officials/${official.slug}`} className="group block h-full">
      <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6 h-full hover:bg-white/[0.07] hover:border-[#F5A623]/30 transition-all duration-300 card-glow card-tilt overflow-hidden">
        {/* Position accent bar */}
        <div className={`absolute top-0 left-4 right-4 h-[3px] bg-gradient-to-r ${accent} rounded-full opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:left-3 group-hover:right-3`} />

        {/* Avatar */}
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent group-hover:from-[#F5A623]/30 transition-all duration-300 z-10" />
          {official.photo_url ? (
            <Image src={official.photo_url} alt={official.full_name} width={56} height={56} className="w-full h-full object-cover rounded-full" />
          ) : (
            <>
              <div className="absolute inset-[2px] rounded-full bg-[#0A1628]" />
              <span className="relative text-base font-bold text-white/80 group-hover:text-[#F5A623] transition-colors duration-300">
                {official.full_name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </span>
            </>
          )}
        </div>

        {/* Name */}
        <h3 className="font-semibold text-sm text-white text-center mb-1.5 leading-tight group-hover:text-[#F5A623] transition-colors duration-300">
          {official.full_name}
        </h3>

        {/* Position with colored dot */}
        <div className="flex items-center justify-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
          <p className="text-[11px] text-white/50">
            {t(official.position as 'president' | 'vice_president' | 'senator' | 'congressman')}
          </p>
        </div>

        {/* Party */}
        {official.party && (
          <p className="text-[10px] text-white/25 text-center mt-1.5 truncate">
            {official.party}
          </p>
        )}

        {/* View Profile — fade in */}
        <div className="mt-4 pt-3 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
          <span className="text-[#F5A623] text-[10px] font-semibold tracking-wider uppercase">
            {t("view_profile")}
          </span>
        </div>
      </div>
    </Link>
  );
}
