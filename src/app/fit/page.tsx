import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { brandText } from "@/components/BrandName";
import { idealClients, states, notFit } from "@/data/fit";

export const metadata: Metadata = {
  title: "你的企业适合品牌升级吗 | rebranding",
  description:
    "我们并不适合所有项目。了解 rebranding 更适合哪些客户、品牌升级的常见信号，以及哪些需求不太适合这种合作方式。",
};

export default function FitPage() {
  return (
    <>
      <HeroSection
        title="我们并不适合所有项目。"
        subtitle={brandText("rebranding 更适合那些已经有业务基础、正在进入新阶段，并希望通过品牌升级提升表达清晰度、专业感与业务说服力的团队。")}
        primaryCTA={{ label: "看看是否适合", href: "#ideal" }}
        secondaryCTA={{ label: "预约品牌诊断", href: "/contact/" }}
      />

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            title="这项服务更适合「品牌表达已经跟不上业务发展」的项目。"
            body="很多客户来找我们时，问题并不是「没有品牌」，也不是「从零开始」。更常见的情况是：业务已经变复杂了、客户类型已经升级了、销售场景已经变化了、官网和提案已经不够支撑当前阶段。"
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
              <li key={i} className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> {s}</li>
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

      <CTASection
        title="如果你已经感觉到品牌表达跟不上业务阶段，这通常就是适合聊一聊的时候。"
        body={brandText("你可以带着当前官网、品牌资料、销售提案或业务背景来沟通。我们会先帮助你判断：当前问题是否属于品牌升级范畴、更适合从诊断、识别系统还是网站内容开始、项目是否适合完整推进 rebranding。")}
        primaryLabel="预约品牌诊断"
        primaryHref="/contact/"
        secondaryLabel="提交项目需求"
        secondaryHref="/contact/"
      />
    </>
  );
}
