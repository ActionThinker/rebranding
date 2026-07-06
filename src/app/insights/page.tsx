import { HeroSection } from "@/components/HeroSection";
import { CTASection } from "@/components/CTASection";
import { cases, articles } from "@/data/insights";

export default function InsightsPage() {
  return (
    <>
      <HeroSection
        title="案例证明我们做过，观点说明我们为什么这样做。"
        subtitle="这里既展示品牌升级项目中常见的问题与解决方式，也持续分享我们对品牌认知、识别系统、网站表达和转化承接的判断。"
        primaryCTA={{ label: "查看案例", href: "#cases" }}
        secondaryCTA={{ label: "阅读观点", href: "#articles" }}
      />

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-ink mb-4">我们更希望客户先看到判断，再看到结果。</h2>
          <p className="text-base text-muted leading-relaxed">
            在品牌升级项目里，真正重要的并不是最后做出来长什么样，而是：为什么问题会出现在这里、为什么要先处理这一层而不是另一层、为什么这样的表达方式更适合当前业务阶段。
          </p>
        </div>
      </section>

      <section id="cases" className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-2">案例</h2>
          <p className="text-sm text-muted mb-10">品牌升级往往不是从「做设计」开始，而是从「重新理解问题」开始。</p>
          <div className="space-y-12">
            {cases.map((c, i) => (
              <div key={i} className="border-t border-rule pt-8">
                <h3 className="text-xl font-bold text-ink mb-4">{c.title}</h3>
                <div className="space-y-4 text-sm">
                  <div><div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">问题</div><p className="text-muted leading-relaxed">{c.problem}</p></div>
                  <div><div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">处理方式</div><p className="text-muted leading-relaxed">{c.approach}</p></div>
                  <div><div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">项目价值</div><p className="text-muted leading-relaxed">{c.value}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="px-6 py-20 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-2">观点</h2>
          <p className="text-sm text-muted mb-10">我们会持续公开自己如何判断品牌升级问题。如果你还没准备好发起项目，这些内容可以帮助你先理解常见问题和判断方式。</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {articles.map((a, i) => (
              <div key={i} className="border border-rule rounded-lg p-5 bg-surface">
                <h3 className="font-semibold text-ink mb-1 text-sm">{a.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-6">如果你是第一次接触 rebranding，建议从这里开始阅读。</h2>
          <div className="space-y-4">
            {[
              ["先看观点", "如果你还在判断品牌升级是否适合当前阶段，建议先读观点文章，理解常见问题和判断方式。"],
              ["再看案例", "如果你已经有明确项目意向，案例更适合帮助你理解这类项目通常如何推进、解决什么问题。"],
              ["最后进入服务页或联系页", "当你已经知道自己的问题大致属于哪个方向时，再进入服务页或联系页会更高效。"],
            ].map(([t, d], i) => (
              <div key={i} className="border border-rule rounded-lg p-5">
                <h3 className="font-semibold text-ink mb-1">{t}</h3>
                <p className="text-sm text-muted leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="如果你在这些案例或观点里看到了自己的问题，可以继续往前一步。"
        body="你可以先查看服务内容，或直接带着当前官网、品牌资料和项目背景来沟通。我们会先帮助你判断：现在更适合从哪个环节开始。"
        primaryLabel="查看服务内容" primaryHref="/services/"
        secondaryLabel="预约品牌诊断" secondaryHref="/contact/"
      />
    </>
  );
}
