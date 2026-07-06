import type { ReactNode } from "react";

interface Props {
  label?: string;
  title: ReactNode;
  body?: ReactNode;
  emphasis?: ReactNode;
}

export function SectionIntro({ label, title, body, emphasis }: Props) {
  return (
    <div className="mb-12">
      {label && <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">{label}</div>}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-4">{title}</h2>
      {body && <p className="text-base text-muted leading-relaxed max-w-2xl mb-4">{body}</p>}
      {emphasis && <p className="text-sm font-semibold text-ink">{emphasis}</p>}
    </div>
  );
}
