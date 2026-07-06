import { HeroSection } from "@/components/HeroSection";

const scenarios = [
  "你已经确定要做品牌升级，正在找合适的合作方",
  "你准备升级官网、服务介绍或销售材料，但不确定是否需要完整 rebranding",
  "你感觉品牌表达已经跟不上业务阶段，但还说不清问题根源",
  "你已经有一些现有材料，希望先获得一次判断建议",
];

const steps = [
  { num: "01", title: "初步阅读与判断", desc: "我们会先阅读你的需求和现有材料，判断当前问题更偏定位、识别系统、网站内容，还是完整品牌升级。" },
  { num: "02", title: "初次沟通", desc: "如果项目匹配，我们会安排一次沟通，进一步了解业务阶段、目标和优先级。" },
  { num: "03", title: "给出合作建议", desc: "基于你的现状，我们会建议更合适的切入方式，而不是默认套用固定服务模板。" },
  { num: "04", title: "确认合作范围", desc: "明确阶段目标、服务范围、节奏和交付方式后，再正式推进合作。" },
];

const faqs = [
  { q: "如果我还不确定是否要做完整品牌升级，可以联系吗？", a: "可以。这也是这页存在的原因之一。你可以先描述现状和问题，我们会帮助你判断更适合从哪里开始。" },
  { q: "如果我只有官网改版需求，也适合联系吗？", a: "适合。如果当前主要问题集中在品牌表达和内容承接上，可以从网站内容规划或页面重构开始。" },
  { q: "需要提前准备很完整的项目 brief 吗？", a: "不需要。只要你能说明当前阶段、主要问题和目标方向，就足够进入第一次判断。" },
  { q: "多久会收到回复？", a: "通常会在 1-2 个工作日内回复。如果需求描述和材料较完整，判断也会更快。" },
];

const fields = [
  { id: "company", label: "公司 / 品牌名称", type: "text" },
  { id: "name", label: "联系人", type: "text" },
  { id: "role", label: "职位 / 角色", type: "text", hint: "例如：创始人、市场负责人、品牌负责人" },
  { id: "contact", label: "联系方式", type: "text", hint: "可填写邮箱、微信或其他方便联系的方式" },
  { id: "industry", label: "所属行业", type: "text" },
  { id: "stage", label: "当前阶段", type: "text", hint: "例如：品牌升级、官网改版、业务扩张、融资准备" },
  { id: "problem", label: "当前最想解决的问题", type: "text", multiline: true },
  { id: "scope", label: "希望合作的内容", type: "text", hint: "例如：品牌诊断、识别系统设计、网站内容规划、销售材料升级" },
  { id: "budget", label: "预算区间", type: "text", hint: "如果方便，可提供一个大致预算范围" },
  { id: "timeline", label: "期望启动时间", type: "text" },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="如果你正在考虑品牌升级，可以先从一次沟通开始。"
        subtitle="无论你目前更想做品牌诊断、识别系统、官网内容规划，还是还不确定问题到底出在哪里，都可以先把现状和目标发给我们。"
        note={"适合品牌升级、官网重构、销售表达优化项目\n支持先判断，再决定合作方式\n通常会在 1-2 个工作日内回复"}
      />

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-4">你不需要一开始就把需求定义得很完整。</h2>
          <p className="text-base text-muted leading-relaxed mb-4">
            很多客户在联系时，并不能准确说出自己是要做品牌升级、VIS 还是网站内容重构。这很正常。你只需要尽可能说明：现在处于什么阶段、当前最想解决的问题是什么、最希望品牌支持哪类业务场景。剩下的，我们会帮你一起判断。
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

      <section className="px-6 py-16 bg-bg-alt">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-ink mb-2">提交你的项目简报</h2>
          <p className="text-sm text-muted mb-8">以下信息不需要一次填得非常完整，但越具体，我们越容易更快判断项目方向与合作方式。</p>
          <form id="form" className="space-y-5" action="#">
            {fields.map(({ id, label, type, hint, multiline }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium text-ink mb-1">{label}</label>
                {multiline ? (
                  <textarea id={id} rows={3} className="w-full rounded-md border border-faint px-3 py-2 text-sm text-ink bg-surface focus:outline-none focus:border-accent resize-y" />
                ) : (
                  <input id={id} type={type} className="w-full rounded-md border border-faint px-3 py-2 text-sm text-ink bg-surface focus:outline-none focus:border-accent" />
                )}
                {hint && <p className="text-xs text-muted mt-1">{hint}</p>}
              </div>
            ))}
            <button type="submit" className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors w-full sm:w-auto">提交项目需求</button>
          </form>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-ink mb-8">提交之后，会怎么推进</h2>
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

      <section className="px-6 py-16 bg-bg-alt">
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
          <p className="text-sm text-muted leading-relaxed mb-8">不需要一开始就定义完整项目。先把问题讲清楚，再决定最合适的合作方式，通常会更高效。</p>
          <a href="#form" className="inline-block rounded-md bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors">提交项目需求</a>
        </div>
      </section>
    </>
  );
}
