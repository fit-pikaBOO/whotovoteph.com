import { notFound } from "next/navigation";
import { getOfficialBySlug } from "@/data/officials";
import { getFactsByOfficial } from "@/data/facts";
import { OfficialProfile } from "@/components/official-profile";

export default async function OfficialPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const official = getOfficialBySlug(slug);

  if (!official) {
    notFound();
  }

  const facts = getFactsByOfficial(official.id);

  return <OfficialProfile official={official} facts={facts} />;
}
