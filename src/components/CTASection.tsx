import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  title: ReactNode;
  body?: ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  note?: ReactNode;
}

export function CTASection({ title, body, primaryLabel, primaryHref, secondaryLabel, secondaryHref, note }: Props) {
  return (
    <section className="px-6 py-24 bg-bg-alt text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">{title}</h2>
        {body && <p className="text-base text-muted leading-relaxed mb-8">{body}</p>}
        <div className="flex gap-3 justify-center flex-wrap mb-6">
          {primaryLabel && primaryHref && (
            <Link href={primaryHref} className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors">
              {primaryLabel}
            </Link>
          )}
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="rounded-md border border-faint px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors">
              {secondaryLabel}
            </Link>
          )}
        </div>
        {note && <p className="text-xs text-muted">{note}</p>}
      </div>
    </section>
  );
}
