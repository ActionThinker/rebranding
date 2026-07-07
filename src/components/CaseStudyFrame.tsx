import Link from "next/link";
import type { ReactNode } from "react";

interface CaseStudy {
  slug: string;
  title: string;
  tag: string;
  heroImage?: string;
  client: string;
  industry: string;
  duration: string;
  serviceModules: string[];
  challenge: string;
  diagnosis: string;
  approach: { step: string; desc: string }[];
  result: { metric: string; value: string }[];
  testimonial?: { quote: string; author: string; role: string };
  takeaways: string[];
}

interface Props {
  data: CaseStudy;
}

export function CaseStudyFrame({ data }: Props) {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Link href="/insights/" className="text-xs font-semibold text-accent uppercase tracking-wider hover:underline">
            ← 返回案例 / 观点
          </Link>
          <div className="text-xs font-semibold text-accent uppercase tracking-wider mt-8 mb-4">{data.tag}</div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-ink leading-tight mb-4">
            {data.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted mb-8">
            <span>客户：{data.client}</span>
            <span className="text-faint">|</span>
            <span>行业：{data.industry}</span>
            <span className="text-faint">|</span>
            <span>周期：{data.duration}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.serviceModules.map((m, i) => (
              <span key={i} className="text-xs border border-accent/30 text-accent px-3 py-1 rounded-full">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge + Diagnosis */}
      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">问题</div>
              <p className="text-sm text-muted leading-relaxed">{data.challenge}</p>
            </div>
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">诊断</div>
              <p className="text-sm text-muted leading-relaxed">{data.diagnosis}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">处理方式</h2>
          <div className="space-y-5">
            {data.approach.map((a, i) => (
              <div key={i} className="flex gap-4 border border-rule rounded-lg p-5">
                <div className="text-lg font-bold text-accent shrink-0 w-6">{i + 1}</div>
                <div>
                  <h3 className="text-sm font-semibold text-ink mb-1">{a.step}</h3>
                  <p className="text-sm text-muted leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="px-6 py-20 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">项目价值与效果</h2>
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {data.result.map((r, i) => (
              <div key={i} className="border border-rule rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-accent mb-1">{r.value}</div>
                <div className="text-xs text-muted">{r.metric}</div>
              </div>
            ))}
          </div>
          {data.testimonial && (
            <div className="border-l-2 border-accent pl-5">
              <p className="text-sm text-ink font-medium italic mb-2">「{data.testimonial.quote}」</p>
              <p className="text-xs text-muted">— {data.testimonial.author}，{data.testimonial.role}</p>
            </div>
          )}
        </div>
      </section>

      {/* Takeaways */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-ink mb-6">关键启示</h2>
          <ul className="space-y-3">
            {data.takeaways.map((t, i) => (
              <li key={i} className="text-sm text-muted flex gap-2">
                <span className="text-accent shrink-0">—</span> {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-bg-alt text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-xl font-bold text-ink mb-4">如果你的项目也有类似的品牌问题</h2>
          <p className="text-sm text-muted leading-relaxed mb-8">
            可以先做一次品牌诊断，或直接带着现状来沟通。不需要一开始就把需求定义得很完整。
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

export type { CaseStudy };
