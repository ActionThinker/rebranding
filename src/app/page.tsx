import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { problems, services, steps, whyUs, idealClients } from "@/data/home";

export default function HomePage() {
  return (
    <>
      <HeroSection
        title="为进入新阶段的企业，重构品牌认知与表达系统。"
        subtitle="rebranding 聚焦品牌升级咨询、品牌识别系统设计与网站内容规划，帮助成长型企业把复杂业务讲清楚，并建立更有说服力的品牌系统。"
        primaryCTA={{ label: "预约品牌诊断", href: "/contact/" }}
        secondaryCTA={{ label: "查看服务内容", href: "/services/" }}
        note={"适用于成长型 B2B / SaaS / 企业服务品牌\n适合品牌升级、官网重构、销售表达优化项目\n从品牌诊断到识别系统与内容规划一体推进"}
      />

      {/* Problem recognition */}
      <section className="px-6 py-20 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-ink mb-6">如果你正在遇到这些问题，通常不是「再做点设计」就能解决。</h2>
          <ul className="space-y-2 mb-8">
            {problems.map((p, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="text-accent mt-0.5 shrink-0">—</span> {p}
              </li>
            ))}
          </ul>
          <p className="text-sm font-semibold text-ink">
            很多品牌真正的问题，不是视觉老旧，而是品牌认知、价值表达和内容结构，已经无法承接当前业务阶段。
          </p>
        </div>
      </section>

      {/* Brand proposition */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            title="我们做的不是单次设计执行，而是品牌升级。"
            body="rebranding 服务那些已经有业务基础、正在进入新阶段，但品牌表达还没有同步升级的企业。我们关注的不只是品牌是否更好看，而是：客户是否更快理解你是谁、你的价值是否被更准确地表达出来、你的官网、提案和销售材料是否在说同一件事。"
            emphasis="品牌升级不是视觉翻新，而是把企业当前阶段真正应该被理解的价值，重新组织出来。"
          />
        </div>
      </section>

      {/* Service overview */}
      <section className="px-6 py-20 bg-bg-alt">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-ink mb-2">围绕品牌认知、视觉系统与转化表达，建立一套真正可用的品牌系统。</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {services.map((s, i) => (
              <div key={i} className="bg-surface border border-rule rounded-lg p-6">
                <h3 className="font-semibold text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services/" className="text-sm font-semibold text-accent hover:underline">查看完整服务 →</Link>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionIntro title="我们的工作方式，是先判断，再设计，再落地。" />
          <div className="space-y-6 mt-8">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5">
                <div className="text-2xl font-bold text-accent shrink-0 w-10">{s.num}</div>
                <div>
                  <h3 className="font-semibold text-ink mb-1">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-semibold text-ink">我们更关心「客户如何理解你」，而不是只关心「页面是否做得漂亮」。</p>
        </div>
      </section>

      {/* Ideal clients */}
      <section className="px-6 py-20 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-6">这类项目，通常更适合我们。</h2>
          <ul className="space-y-2 mb-8">
            {idealClients.map((c, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="text-accent mt-0.5 shrink-0">—</span> {c}
              </li>
            ))}
          </ul>
          <Link href="/fit/" className="text-sm font-semibold text-accent hover:underline">查看是否适合 →</Link>
        </div>
      </section>

      {/* Why us */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <SectionIntro title="不是所有品牌升级项目，都需要更多设计；很多时候，更需要判断力。" />
          <div className="space-y-5 mt-8">
            {whyUs.map((w, i) => (
              <div key={i} className="border border-rule rounded-lg p-5">
                <h3 className="font-semibold text-ink mb-1 text-sm">{w.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights entry */}
      <section className="px-6 py-20 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">通过案例与观点，进一步了解我们如何判断品牌升级问题。</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-accent pl-5">
              <h3 className="font-semibold text-ink mb-1">案例：从功能介绍走向价值表达</h3>
              <p className="text-sm text-muted">查看我们如何帮助成长型品牌重新组织认知结构。</p>
            </div>
            <div className="border-l-2 border-accent pl-5">
              <h3 className="font-semibold text-ink mb-1">观点：为什么很多品牌做了 VIS，还是讲不清楚</h3>
              <p className="text-sm text-muted">品牌问题常常不是因为没有设计，而是因为表达系统从一开始就没有被组织清楚。</p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/insights/" className="text-sm font-semibold text-accent hover:underline">查看案例与文章 →</Link>
          </div>
        </div>
      </section>

      <CTASection
        title="如果你正在考虑品牌升级，但还不确定该从哪里开始，可以先聊一次。"
        body="你可以带着当前官网、品牌资料、销售提案或项目背景来沟通。我们会先帮助你判断：问题更偏定位、架构、表达还是视觉，是否适合直接做完整品牌升级，更合理的项目切入方式是什么。"
        primaryLabel="预约品牌诊断"
        primaryHref="/contact/"
        secondaryLabel="提交项目需求"
        secondaryHref="/contact/"
        note="通常会在 1-2 个工作日内回复。"
      />
    </>
  );
}
