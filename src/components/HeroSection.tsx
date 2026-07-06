import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  title: ReactNode;
  subtitle: ReactNode;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  note?: ReactNode;
}

export function HeroSection({ title, subtitle, primaryCTA, secondaryCTA, note }: Props) {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-ink leading-tight mb-6">
          {title}
        </h1>
        <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-8">
          {subtitle}
        </p>
        {(primaryCTA || secondaryCTA) && (
          <div className="flex gap-3 flex-wrap mb-6">
            {primaryCTA && (
              <Link href={primaryCTA.href} className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors">
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="rounded-md border border-faint px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors">
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
        {note && <p className="text-xs text-muted leading-relaxed whitespace-pre-line">{note}</p>}
      </div>
    </section>
  );
}
