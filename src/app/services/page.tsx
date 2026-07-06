import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { serviceModules, cooperationModes, faqs } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="不是所有品牌问题都该从视觉开始。"
        subtitle="rebranding 提供品牌升级咨询、品牌识别系统设计与网站内容规划服务，帮助成长型企业重新组织品牌认知、统一表达系统，并把品牌真正落地到官网、提案与业务场景中。"
        primaryCTA={{ label: "预约品牌诊断", href: "/contact/" }}
        secondaryCTA={{ label: "提交项目需求", href: "/contact/" }}
        note={"适合品牌升级、官网重构、销售表达优化项目\n支持从单项切入，也支持从诊断到落地的一体化合作\n更适合成长型 B2B / SaaS / 企业服务品牌"}
      />

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            title="我们提供的不是「更多设计」，而是一套更适合当前阶段的品牌表达方案。"
            body="很多企业来找我们时，表面上提出的是想升级 Logo、想重做官网、想把品牌做得更高级一点。但往下看，问题往往不只是设计执行，而是：品牌认知不清晰、业务结构无法被有效表达、视觉系统已经无法承接业务复杂度、官网内容缺少逻辑和转化能力。所以我们的服务，会从判断问题开始，再决定是先做品牌诊断、识别系统，还是网站内容规划。"
            emphasis="我们不把品牌升级拆成互不相关的单项服务，而是把它看作一个从认知到表达的连续过程。"
          />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-2">当前主要提供四类服务。</h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-8 mb-16">
            {serviceModules.map((m) => (
              <div key={m.id} className="border border-rule rounded-lg p-4">
                <div className="text-xs font-semibold text-accent mb-1">{m.tag}</div>
                <h3 className="font-semibold text-ink text-sm">{m.title}</h3>
              </div>
            ))}
          </div>

          {serviceModules.map((m) => (
            <div key={m.id} id={m.id} className="border-t border-rule pt-12 pb-8">
              <div className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">{m.tag}</div>
              <h3 className="text-2xl font-bold text-ink mb-2">{m.title}</h3>
              <p className="text-sm font-medium text-ink mb-6">{m.summary}</p>

              <div className="mb-6">
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">你可能正在遇到的情况</h4>
                <ul className="space-y-1">
                  {m.situations.map((s, i) => <li key={i} className="text-sm text-muted flex gap-2"><span className="text-accent">—</span> {s}</li>)}
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">这项服务会做什么</h4>
                <div className="flex flex-wrap gap-1.5">
                  {m.deliverables.map((d, i) => <span key={i} className="text-xs bg-accent-light text-accent px-2.5 py-1 rounded-full">{d}</span>)}
                </div>
              </div>
              <div className="mb-4"><h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">解决什么问题</h4><p className="text-sm text-muted leading-relaxed">{m.solves}</p></div>
              <div className="mb-6"><h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">适合的客户</h4><p className="text-sm text-muted leading-relaxed">{m.fit}</p></div>
              <Link href="/contact/" className="text-sm font-semibold text-accent hover:underline">{m.cta} →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            title="这些服务彼此独立，但更适合被放在同一条逻辑线上理解。"
            body="很多客户一开始只会先看到其中一个问题，比如想做 Logo 升级、想重做官网、想把品牌做得更高级一些。但真正推进后会发现，单点优化往往无法彻底解决问题。品牌升级通常是这样一条路径：先判断品牌当前问题与升级方向，再建立统一识别系统，再把表达落到官网与销售场景中。"
            emphasis="如果你不确定该从哪一步开始，最稳妥的方式通常是先做诊断。"
          />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">你可以从完整合作开始，也可以从单项切入。</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {cooperationModes.map(([letter, title, desc]) => (
              <div key={letter} className="border border-rule rounded-lg p-5">
                <div className="text-xs font-bold text-accent mb-1">方式 {letter}</div>
                <h3 className="font-semibold text-ink mb-1">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">关于服务，通常会先被问到这些问题。</h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <details key={i} className="group border-b border-rule pb-5">
                <summary className="font-semibold text-ink cursor-pointer list-none flex justify-between items-center">
                  {f.q}<span className="text-muted text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-muted leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="如果你已经意识到品牌表达跟不上业务阶段，可以先从一次判断开始。"
        body="不需要一开始就确定要做完整 rebranding。先把当前问题看清楚，再决定从诊断、识别系统还是网站内容规划开始，通常会更高效。"
        primaryLabel="预约品牌诊断" primaryHref="/contact/"
        secondaryLabel="提交项目需求" secondaryHref="/contact/"
        note="通常会在 1-2 个工作日内回复。"
      />
    </>
  );
}
