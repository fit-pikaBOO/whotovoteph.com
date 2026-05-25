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
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder={t("newsletter_placeholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 h-12 bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#F5A623]/50 rounded-lg"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-12 px-6 bg-[#F5A623] text-[#0A1628] font-bold rounded-lg hover:bg-[#F5A623]/90 transition-all hover:shadow-lg hover:shadow-[#F5A623]/20 btn-shimmer"
        >
          {status === "loading" ? "..." : t("newsletter_submit")}
        </Button>
      </form>
      {status === "success" && (
        <p className="text-sm text-[#1B7340] mt-3 text-center font-medium">Subscribed!</p>
      )}
      {status === "error" && (
        <p className="text-sm text-[#C23B22] mt-3 text-center font-medium">Failed. Try again.</p>
      )}
    </div>
  );
}
