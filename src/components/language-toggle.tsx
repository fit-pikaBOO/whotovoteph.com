"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "fil" : "en";
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLocale}
      className="text-xs font-semibold min-w-[4rem]"
    >
      {locale === "en" ? "FIL" : "EN"}
    </Button>
  );
}
