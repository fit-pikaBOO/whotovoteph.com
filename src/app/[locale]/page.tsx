import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OfficialCard } from "@/components/official-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { officials } from "@/data/officials";

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t("hero_title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("hero_subtitle")}
          </p>
          <Button size="lg" render={<Link href="/en/officials" />}>
            {t("explore_officials")}
          </Button>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {t("how_it_works")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">{t("step1_title")}</h3>
              <p className="text-sm text-muted-foreground">{t("step1_desc")}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">{t("step2_title")}</h3>
              <p className="text-sm text-muted-foreground">{t("step2_desc")}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">{t("step3_title")}</h3>
              <p className="text-sm text-muted-foreground">{t("step3_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Officials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            {t("featured_officials")}
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            {t("hero_subtitle")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {officials.map((official) => (
              <OfficialCard key={official.id} official={official} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-2">{t("newsletter_title")}</h2>
          <p className="text-muted-foreground mb-6">{t("newsletter_desc")}</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
