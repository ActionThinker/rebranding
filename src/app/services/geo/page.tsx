import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { SectionIntro } from "@/components/SectionIntro";
import { CTASection } from "@/components/CTASection";
import { GEODiagnostic } from "@/components/GEODiagnostic";
import { BrandName, brandText } from "@/components/BrandName";
import { geoSteps, geoDifferentiators, geoFit, geoTiers, geoFaqs } from "@/data/geo";

export const metadata: Metadata = {
  title: "企业官网 GEO 化服务 —— 让品牌在 AI 搜索中被正确发现和理解 | rebranding",
  description:
    "当客户通过 AI 搜索了解你的品牌时，AI 对品牌的描述是否准确、完整、有说服力？企业官网 GEO 化服务，从诊断到落地，确保品牌在 AI 时代被正确发现和理解。",
};

export default function GEOPage() {
  return (
    <>
      <HeroSection
        title="你的客户在问 AI 关于你之前，AI 已经替你做了第一次介绍。"
        subtitle="如果你的品牌在 AI 搜索中被误解、被遗漏或被竞争对手覆盖，你失去的不是流量——是客户对你的第一次信任判断。"
        primaryCTA={{ label: "做 GEO 就绪度自测", href: "#geo-diagnostic" }}
        secondaryCTA={{ label: "查看服务内容", href: "#methodology" }}
        note="面向 B2B / SaaS / 企业服务 / 专业服务品牌\nCEO 级战略服务 · 非 SEO 技术执行\n已在 3 个品牌站点验证方法论有效性"
      />

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <SectionIntro
            title="AI 正在成为 B2B 采购决策的第一入口。"
            body="60% 以上的 B2B 采购者在访问供应商网站之前，会先通过 AI 搜索了解品牌信息。AI 对品牌的第一段描述，正在取代官网首页成为客户对你的「第一印象」。如果你的品牌在 AI 中被错误描述、被遗漏、或被竞争对手的信息覆盖——你失去的不是一次点击，而是客户对你专业能力的第一次信任判断。"
            emphasis="品牌在 AI 中的可见性和描述准确度，正在成为新的竞争维度——而大多数企业还没有意识到这一点。"
          />
        </div>
      </section>

      <section id="methodology" className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-2">GEO 六步方法论</h2>
          <p className="text-sm text-muted mb-10">
            经过 3 个品牌站点的完整验证，形成了一套从诊断到持续优化的 GEO 服务方法。
          </p>
          <div className="space-y-5">
            {geoSteps.map((s, i) => (
              <div key={i} className="border border-rule rounded-lg p-6">
                <div className="flex gap-4">
                  <div className="text-xl font-bold text-accent shrink-0 w-10">{s.num}</div>
                  <div>
                    <h3 className="font-semibold text-ink mb-2">{s.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-3">{s.desc}</p>
                    <div className="text-xs text-muted">
                      <span className="font-semibold text-ink">交付物：</span>{s.deliverables}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">为什么是 <BrandName /></h2>
          <div className="space-y-5">
            {geoDifferentiators.map((d, i) => (
              <div key={i} className="border border-rule rounded-lg p-6">
                <h3 className="font-semibold text-ink mb-2 text-sm">{d.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-semibold text-ink">
            GEO 不是 SEO 的延伸，也不是品牌设计的附加项。它是一个需要品牌策略能力和 AI 技术能力同时具备的新领域。而这恰好是 <BrandName /> 的位置。
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-2">服务层级</h2>
          <p className="text-sm text-muted mb-10">
            根据企业的当前状态和需求深度，提供三个层级的 GEO 服务。
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {geoTiers.map((t, i) => (
              <div key={i} className="border border-rule rounded-lg p-6 flex flex-col">
                <h3 className="font-semibold text-ink mb-1">{t.name}</h3>
                <p className="text-xs text-accent font-medium mb-3">{t.time}</p>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{t.desc}</p>
                <div className="border-t border-rule pt-3">
                  <p className="text-xs font-semibold text-ink mb-2">交付内容</p>
                  <ul className="space-y-1">
                    {t.outputs.map((o, j) => (
                      <li key={j} className="text-xs text-muted flex gap-1">
                        <span className="text-accent shrink-0">—</span> {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GEODiagnostic />

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">适合的企业</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {geoFit.map((f, i) => (
              <div key={i} className="border border-rule rounded-lg p-4">
                <p className="text-sm text-muted flex gap-2">
                  <span className="text-accent shrink-0">—</span> {f}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">常见问题</h2>
          <div className="space-y-5">
            {geoFaqs.map((f, i) => (
              <details key={i} className="group border-b border-rule pb-5">
                <summary className="font-semibold text-ink cursor-pointer list-none flex justify-between items-center">
                  {f.q}
                  <span className="text-muted text-lg group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-sm text-muted leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="如果你的品牌在 AI 中「不存在」，就值得聊一次。"
        body="你可以先完成上面的 GEO 就绪度自测，或直接带着当前官网来沟通。我们会先帮助你判断：你的品牌在 AI 渠道中的当前状态，以及最值得优先解决的是什么。"
        primaryLabel="预约 GEO 诊断"
        primaryHref="/contact/"
        secondaryLabel="查看品牌升级服务"
        secondaryHref="/services/"
      />
    </>
  );
}
