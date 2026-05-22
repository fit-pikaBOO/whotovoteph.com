"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold tracking-tight">
              WhoToVote<span className="text-primary">PH</span>
            </span>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-sm mb-3">{t("navigation")}</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href={`/${locale}/officials`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {nav("officials")}
              </Link>
              <Link
                href={`/${locale}/guide`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {nav("guide")}
              </Link>
              <Link
                href={`/${locale}/about`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {nav("about")}
              </Link>
            </nav>
          </div>

          {/* Fact Checkers */}
          <div>
            <h3 className="font-semibold text-sm mb-3">{t("factcheckers")}</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="https://verafiles.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Vera Files
              </a>
              <a
                href="https://www.rappler.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Rappler
              </a>
              <a
                href="https://pcij.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                PCIJ
              </a>
              <a
                href="https://tsek.ph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Tsek.ph
              </a>
            </nav>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-xs text-muted-foreground text-center">
            {t("disclaimer")}
          </p>
          <p className="text-xs text-muted-foreground text-center mt-1">
            &copy; {new Date().getFullYear()} WhoToVotePH
          </p>
        </div>
      </div>
    </footer>
  );
}
