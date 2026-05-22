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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            WhoToVote<span className="text-primary">PH</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href={`/${locale}/officials`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("officials")}
          </Link>
          <Link
            href={`/${locale}/guide`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("guide")}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("about")}
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <div className="hidden md:flex items-center gap-2">
            <Link href={`/${locale}/auth/login`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
              {t("login")}
            </Link>
            <Link href={`/${locale}/auth/register`} className={cn(buttonVariants({ size: "sm" }))}>
              {t("register")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4">
          <nav className="flex flex-col gap-3">
            <Link
              href={`/${locale}/officials`}
              className="text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("officials")}
            </Link>
            <Link
              href={`/${locale}/guide`}
              className="text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("guide")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-sm font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("about")}
            </Link>
            <div className="flex gap-2 pt-2 border-t">
              <Link href={`/${locale}/auth/login`} className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "flex-1")}>
                {t("login")}
              </Link>
              <Link href={`/${locale}/auth/register`} className={cn(buttonVariants({ size: "sm" }), "flex-1")}>
                {t("register")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
