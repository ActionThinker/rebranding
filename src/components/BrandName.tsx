import type { ReactNode } from "react";

export function BrandName() {
  return (
    <>
      re<span className="text-accent font-extrabold">B</span>randing
    </>
  );
}

export function brandText(text: string): ReactNode {
  const parts = text.split(/(rebranding)/g);
  return parts.map((part, i) =>
    part === "rebranding" ? <BrandName key={i} /> : part
  );
}
