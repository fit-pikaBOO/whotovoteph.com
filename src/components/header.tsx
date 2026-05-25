"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { LanguageToggle } from "./language-toggle";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-xl">
      {/* Gold gradient bottom line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F5A623]/20 to-transparent" />
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2 group">
          <div className="w-7 h-7 bg-[#0A1628] rounded-md flex items-center justify-center">
            <span className="text-[#F5A623] text-xs font-bold">W</span>
          </div>
          <span className="text-sm font-bold tracking-tight hidden sm:inline">
            WhoToVote<span className="text-[#F5A623]">PH</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href={`/${locale}/officials`}
            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-colors"
          >
            {t("officials")}
          </Link>
          <Link
            href={`/${locale}/guide`}
            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-colors"
          >
            {t("guide")}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-colors"
          >
            {t("about")}
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <div className="hidden md:flex items-center gap-2 ml-2">
            <Link
              href={`/${locale}/auth/login`}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("login")}
            </Link>
            <Link
              href={`/${locale}/auth/register`}
              className="px-4 py-1.5 text-sm font-medium bg-[#F5A623] text-[#0A1628] rounded-lg hover:bg-[#F5A623]/90 transition-all hover:shadow-md hover:shadow-[#F5A623]/20"
            >
              {t("register")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-xl p-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-1">
            <Link
              href={`/${locale}/officials`}
              className="text-sm font-medium py-2.5 px-3 rounded-md hover:bg-muted/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("officials")}
            </Link>
            <Link
              href={`/${locale}/guide`}
              className="text-sm font-medium py-2.5 px-3 rounded-md hover:bg-muted/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("guide")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-sm font-medium py-2.5 px-3 rounded-md hover:bg-muted/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <div className="flex gap-2 pt-3 mt-2 border-t">
              <Link
                href={`/${locale}/auth/login`}
                className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "flex-1")}
              >
                {t("login")}
              </Link>
              <Link
                href={`/${locale}/auth/register`}
                className="flex-1 px-3 py-1.5 text-sm text-center font-medium bg-[#0A1628] text-white rounded-md"
              >
                {t("register")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
