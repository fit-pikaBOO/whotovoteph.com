"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function NewsletterForm() {
  const t = useTranslations("home");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder={t("newsletter_placeholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1"
      />
      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "..." : t("newsletter_submit")}
      </Button>
      {status === "success" && (
        <p className="text-sm text-green-600 mt-2 sm:mt-0 sm:self-center">Subscribed!</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 mt-2 sm:mt-0 sm:self-center">Failed. Try again.</p>
      )}
    </form>
  );
}
