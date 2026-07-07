import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyFrame } from "@/components/CaseStudyFrame";
import { caseStudies } from "@/data/case-studies";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = caseStudies.find((c) => c.slug === slug);
  if (!data) return {};
  return {
    title: `${data.title} | rebranding`,
    description: data.challenge.slice(0, 160),
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const data = caseStudies.find((c) => c.slug === slug);
  if (!data) notFound();
  return <CaseStudyFrame data={data} />;
}
