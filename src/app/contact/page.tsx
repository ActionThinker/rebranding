import { HeroSection } from "@/components/HeroSection";
import { BrandDiagnostic } from "@/components/BrandDiagnostic";

const scenarios = [
  "你已经确定要做品牌升级，正在找合适的合作方",
  "你准备升级官网、服务介绍或销售材料，但不确定是否需要完整 rebranding",
  "你感觉品牌表达已经跟不上业务阶段，但还说不清问题根源",
  "你已经有一些现有材料，希望先获得一次判断建议",
];

const steps = [
  { num: "01", title: "添加微信，发送背景", desc: "你可以先发送诊断结果、当前官网、品牌资料或项目背景。不需要很完整，能说明现状即可。" },
  { num: "02", title: "初步阅读与判断", desc: "我们会先了解你的情况，判断当前问题更偏定位、识别系统、网站内容，还是完整品牌升级。" },
  { num: "03", title: "安排深度沟通", desc: "如果项目匹配，我们会安排一次 1v1 沟通，进一步了解业务阶段、目标和优先级。" },
  { num: "04", title: "给出合作建议", desc: "基于你的现状，我们会建议最合适的切入方式，而不是默认套用固定服务模板。" },
];

const faqs = [
  { q: "如果我还不确定是否要做完整品牌升级，可以联系吗？", a: "可以。这也是这页存在的原因之一。你可以先做上面的快速诊断，然后把结果发给我们，我们会帮助你判断更适合从哪里开始。" },
  { q: "如果我只有官网改版需求，也适合联系吗？", a: "适合。如果当前主要问题集中在品牌表达和内容承接上，可以从网站内容规划或页面重构开始。" },
  { q: "需要提前准备很完整的项目 brief 吗？", a: "不需要。只要你能说明当前阶段、主要问题和目标方向，就足够进入第一次判断。诊断结果本身就是一个很好的开场。" },
  { q: "多久会收到回复？", a: "通常会在 1-2 个工作日内回复。如果需求描述和材料较完整，判断也会更快。" },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="如果你正在考虑品牌升级，可以先从一次沟通开始。"
        subtitle="无论你目前更想做品牌诊断、识别系统、官网内容规划，还是还不确定问题到底出在哪里，都可以先把现状和目标发给我们。"
        note={"• 适合品牌升级、官网重构、销售表达优化项目\n• 支持先判断，再决定合作方式\n• 通常会在 1-2 个工作日内回复"}
      />

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-4">你不需要一开始就把需求定义得很完整。</h2>
          <p className="text-base text-muted leading-relaxed mb-4">
            很多客户在联系时，并不能准确说出自己是要做「品牌升级」「VIS」还是「网站内容重构」。这很正常。你只需要尽可能说明：现在处于什么阶段、当前最想解决的问题是什么、最希望品牌支持哪类业务场景。
          </p>
          <p className="text-sm font-semibold text-ink">先把问题讲清楚，通常比一开始就确定服务名称更重要。</p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-ink mb-6">以下这些情况，都适合直接联系。</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {scenarios.map((s, i) => (
              <div key={i} className="border border-rule rounded-lg p-4">
                <p className="text-sm text-muted leading-relaxed flex gap-2"><span className="text-accent shrink-0">—</span> {s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandDiagnostic />

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">添加微信之后，会怎么推进</h2>
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5">
                <div className="text-2xl font-bold text-accent shrink-0 w-10">{s.num}</div>
                <div><h3 className="font-semibold text-ink mb-1">{s.title}</h3><p className="text-sm text-muted leading-relaxed">{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">提交需求前，常见的问题有这些。</h2>
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

      <section className="px-6 py-24 bg-bg-alt text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-ink mb-4">如果你已经感觉到品牌表达不再适合当前阶段，就值得先聊一次。</h2>
          <p className="text-sm text-muted leading-relaxed mb-8">不需要一开始就定义完整项目。先做诊断，再带着结果来沟通，通常会更高效。</p>
          <a href="#diagnostic" className="inline-block rounded-md bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors">开始品牌诊断</a>
        </div>
      </section>
    </>
  );
}
