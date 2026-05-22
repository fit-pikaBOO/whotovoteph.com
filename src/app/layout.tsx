import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhoToVotePH — Facts. Not opinions.",
  description:
    "A non-partisan voter education platform helping Filipinos make informed decisions based on verified facts about national officials.",
  keywords: ["Philippines", "voting", "election", "voter education", "fact-check", "non-partisan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
