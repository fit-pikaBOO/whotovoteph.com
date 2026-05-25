"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer className="bg-[#0A1628] text-white/70 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/20 to-transparent" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-[#F5A623]/10 border border-[#F5A623]/20 rounded-md flex items-center justify-center">
                <span className="text-[#F5A623] text-xs font-bold">W</span>
              </div>
              <span className="text-sm font-bold text-white">
                WhoToVote<span className="text-[#F5A623]">PH</span>
              </span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
              {t("navigation")}
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link href={`/${locale}/officials`} className="text-sm hover:text-[#F5A623] transition-colors">
                {nav("officials")}
              </Link>
              <Link href={`/${locale}/guide`} className="text-sm hover:text-[#F5A623] transition-colors">
                {nav("guide")}
              </Link>
              <Link href={`/${locale}/about`} className="text-sm hover:text-[#F5A623] transition-colors">
                {nav("about")}
              </Link>
            </nav>
          </div>

          {/* Fact Checkers */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
              {t("factcheckers")}
            </h3>
            <nav className="flex flex-col gap-2.5">
              <a href="https://verafiles.org" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#F5A623] transition-colors">
                Vera Files
              </a>
              <a href="https://www.rappler.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#F5A623] transition-colors">
                Rappler
              </a>
              <a href="https://pcij.org" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#F5A623] transition-colors">
                PCIJ
              </a>
              <a href="https://tsek.ph" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#F5A623] transition-colors">
                Tsek.ph
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
              {t("resources")}
            </h3>
            <nav className="flex flex-col gap-2.5">
              <a href="https://www.comelec.gov.ph" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#F5A623] transition-colors">
                COMELEC
              </a>
              <a href="https://www.officialgazette.gov.ph" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#F5A623] transition-colors">
                Official Gazette
              </a>
              <a href="https://www.senate.gov.ph" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#F5A623] transition-colors">
                Philippine Senate
              </a>
            </nav>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-[11px] text-white/30 text-center max-w-xl mx-auto">
            {t("disclaimer")}
          </p>
          <p className="text-[11px] text-white/20 text-center mt-2">
            &copy; {new Date().getFullYear()} WhoToVotePH. Built for the Filipino voter.
          </p>
        </div>
      </div>
    </footer>
  );
}
