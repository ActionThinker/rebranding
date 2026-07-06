import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { methods, principles } from "@/data/about";

export const metadata: Metadata = {
  title: "关于 rebranding —— 品牌升级咨询的方法与立场 | rebranding",
  description:
    "rebranding 不是一个泛泛的设计品牌，而是一种工作立场。了解我们如何看待品牌升级、如何工作，以及合作原则。",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="rebranding 不是一个泛泛的设计品牌，而是一种工作立场。"
        subtitle="我们关注的不是把品牌「做得像升级过」，而是帮助企业重新组织品牌认知、视觉系统和网站表达，让品牌真正适配当前阶段。"
        primaryCTA={{ label: "查看服务内容", href: "/services/" }}
        secondaryCTA={{ label: "预约品牌诊断", href: "/contact/" }}
      />

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            title="很多企业的问题，不是没有设计，而是品牌已经落后于业务。"
            body="rebranding 的起点，不是为了再做一个「品牌工作室」。更真实的出发点是：在很多项目里，企业真正的问题并不是缺一个 Logo 或缺几页官网，而是：业务已经变了品牌没变、客户已经变了表达没变、公司已经进入新阶段但市场仍然用旧方式理解它。"
            emphasis="品牌升级不该只是一次视觉翻新，而应该是一次关于「如何被理解」的重新组织。"
          />
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">我们把品牌升级看作一项从认知到表达的系统工作。</h2>
          <div className="space-y-6">
            {[
              ["第一层：品牌认知", "你是谁，服务谁，核心价值是什么。"],
              ["第二层：品牌识别", "当认知清晰之后，如何通过 Logo、色彩、字体、图形和版式建立稳定表达。"],
              ["第三层：品牌落地", "品牌如何进入官网、提案、销售材料和实际沟通场景。"],
            ].map(([t, d], i) => (
              <div key={i} className="border-l-2 border-accent pl-5">
                <h3 className="font-semibold text-ink mb-1">{t}</h3>
                <p className="text-sm text-muted leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-semibold text-ink">所以我们并不把品牌升级理解成一个单点设计项目，而更接近一次「认知重组 + 表达系统化」的工作。</p>
        </div>
      </section>

      <section className="px-6 py-20 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">我们的工作方式，是先判断问题，再决定做什么。</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {methods.map((m, i) => (
              <div key={i} className="border border-rule rounded-lg p-5">
                <h3 className="font-semibold text-ink mb-1 text-sm">{m.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">我们的合作原则很简单。</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {principles.map((p, i) => (
              <div key={i} className="border border-rule rounded-lg p-5">
                <h3 className="font-semibold text-ink mb-1 text-sm">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-bg-alt text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">一句话概括</p>
          <p className="text-xl font-bold text-ink mb-4">帮助成长型企业把复杂业务讲清楚，并重构品牌认知、识别系统与网站表达。</p>
          <p className="text-sm text-muted">如果你正在考虑品牌升级，但不确定问题出在定位、识别系统，还是官网内容本身，我们建议先从一次判断开始。</p>
        </div>
      </section>

      <CTASection
        title="如果你认同「品牌升级不该只是做得更好看」，可以从这里开始。"
        body="你可以先预约一次品牌诊断沟通，带着当前官网、品牌资料、提案或项目背景来。我们会先帮助你判断：当前更适合从哪里开始。"
        primaryLabel="预约品牌诊断"
        primaryHref="/contact/"
        secondaryLabel="查看服务内容"
        secondaryHref="/services/"
      />
    </>
  );
}
