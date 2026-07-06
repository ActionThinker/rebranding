import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export function ArticleFrame({ title, subtitle, children }: Props) {
  return (
    <>
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <Link href="/insights/" className="text-xs font-semibold text-accent uppercase tracking-wider hover:underline">
            ← 返回案例 / 观点
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-ink leading-tight mt-6 mb-4">
            {title}
          </h1>
          <p className="text-base text-muted leading-relaxed">{subtitle}</p>
        </div>
      </section>

      <article className="px-6 pb-24">
        <div className="mx-auto max-w-2xl prose-like space-y-8 text-sm text-muted leading-relaxed">
          {children}
        </div>
      </article>

      <section className="px-6 py-16 bg-bg-alt text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-xl font-bold text-ink mb-4">如果你在这篇文章里看到了自己的问题</h2>
          <p className="text-sm text-muted leading-relaxed mb-8">
            可以先做一次品牌升级快速诊断，或直接带着你的现状来沟通。不需要一开始就把需求定义得很完整。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/contact/#diagnostic" className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors">
              开始品牌诊断
            </Link>
            <Link href="/contact/" className="rounded-md border border-faint px-6 py-3 text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors">
              联系沟通
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* Shared mini-components for article content */

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-xl font-bold text-ink pt-4">{children}</h2>;
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="text-base font-semibold text-ink pt-2">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-sm text-muted leading-relaxed">{children}</p>;
}

export function Emphasis({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-accent pl-5 my-6">
      <p className="text-sm font-semibold text-ink leading-relaxed">{children}</p>
    </div>
  );
}

export function FrameworkBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-rule rounded-lg p-6 bg-bg-alt my-6">
      <h4 className="text-sm font-semibold text-ink mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-muted flex gap-2">
            <span className="text-accent shrink-0">—</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ChecklistBox({ title, items }: { title: string; items: { label: string; desc: string }[] }) {
  return (
    <div className="border border-rule rounded-lg p-6 bg-bg-alt my-6">
      <h4 className="text-sm font-semibold text-ink mb-4">{title}</h4>
      <div className="space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3">
            <div className="text-xs font-bold text-accent shrink-0 w-5 h-5 rounded-full border border-accent flex items-center justify-center mt-0.5">
              {i + 1}
            </div>
            <div>
              <p className="text-sm font-medium text-ink mb-0.5">{item.label}</p>
              <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
