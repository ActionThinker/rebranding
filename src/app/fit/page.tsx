import { HeroSection } from "@/components/HeroSection";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { idealClients, states, notFit, strengths } from "@/data/fit";

export default function FitPage() {
  return (
    <>
      <HeroSection
        title="我们并不适合所有项目。"
        subtitle="rebranding 更适合那些已经有业务基础、正在进入新阶段，并希望通过品牌升级提升表达清晰度、专业感与业务说服力的团队。"
        primaryCTA={{ label: "看看是否适合", href: "#ideal" }}
        secondaryCTA={{ label: "预约品牌诊断", href: "/contact/" }}
      />

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            title="这项服务更适合「品牌表达已经跟不上业务发展」的项目。"
            body="很多客户来找我们时，问题并不是没有品牌，也不是完全从零开始。更常见的情况是：业务已经变复杂了、客户类型已经升级了、销售场景已经变化了、官网和提案已经不够支撑当前阶段。项目真正需要的往往不是单次设计执行，而是一次更系统的品牌升级。"
            emphasis="如果你要解决的是「客户如何理解你」，而不只是「品牌看起来新一点」，这类服务会更适合。"
          />
        </div>
      </section>

      <section className="px-6 py-20" id="ideal">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">以下这类客户，通常更能从这套服务中获得价值。</h2>
          <div className="space-y-5">
            {idealClients.map((c, i) => (
              <div key={i} className="border border-rule rounded-lg p-5">
                <h3 className="font-semibold text-ink mb-1">{c.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-ink mt-16 mb-6">如果你现在处于这些状态，通常就是品牌升级的信号。</h2>
          <ul className="space-y-2 mb-8">
            {states.map((s, i) => (
              <li key={i} className="text-sm text-muted flex gap-2"><span className="text-accent">—</span> {s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">以下这类需求，我们通常不是最合适的合作方式。</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {notFit.map((n, i) => (
              <div key={i} className="border border-rule rounded-lg p-5">
                <h3 className="font-semibold text-ink mb-1 text-sm">{n.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">这些项目通常能体现 rebranding 的核心价值。</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {strengths.map((s, i) => (
              <div key={i} className="border border-rule rounded-lg p-5">
                <h3 className="font-semibold text-ink mb-1 text-sm">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            title="如果你不确定自己是否适合，先判断比直接开始更重要。"
            body="并不是所有项目都应该直接进入 Logo 或官网设计。有些项目更需要先梳理品牌定位，有些更适合先重构网站内容，有些则只需要统一识别系统。在合作开始前，我们通常会先看：当前业务阶段、主要沟通对象是谁、品牌问题集中在哪一层、最需要优先支撑的业务场景是什么。"
            emphasis="先判断项目适合从哪一步开始，通常比直接进入执行更省时间，也更接近有效结果。"
          />
        </div>
      </section>

      <CTASection
        title="如果你已经感觉到品牌表达跟不上业务阶段，这通常就是适合聊一聊的时候。"
        body="你可以带着当前官网、品牌资料、销售提案或业务背景来沟通。我们会先帮助你判断：当前问题是否属于品牌升级范畴、更适合从诊断、识别系统还是网站内容开始。"
        primaryLabel="预约品牌诊断" primaryHref="/contact/"
        secondaryLabel="提交项目需求" secondaryHref="/contact/"
      />
    </>
  );
}
