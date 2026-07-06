import type { Metadata } from "next";
import { ArticleFrame, H2, H3, P, Emphasis, FrameworkBox } from "@/components/ArticleFrame";

export const metadata: Metadata = {
  title: "AI 时代下的企业品牌升级白皮书 | rebranding",
  description:
    "AI 不是品牌升级的替代者，而是加速器。这份白皮书从 AI 对品牌表达的冲击、机会与应对策略三个维度，重新理解品牌升级在 AI 时代的意义与方法。",
};

export default function Page() {
  return (
    <ArticleFrame
      title="AI 时代下的企业品牌升级白皮书"
      subtitle="AI 正在改变客户获取信息、评估供应商和建立信任的方式。这份白皮书从冲击、机会和应对策略三个维度，梳理 AI 时代品牌升级的关键变化和行动框架。"
    >
      <H2>引言：品牌升级正在被 AI 重新定义</H2>
      <P>
        过去十年，品牌升级的核心逻辑是：梳理品牌认知 → 设计识别系统 → 落地到官网和销售材料。这套逻辑没有过时——但 AI 的出现，改变了品牌表达被「消费」的方式。
      </P>
      <P>
        当客户在接触你的官网之前，先通过 AI 搜索了解你的品牌时；当客户用 AI 工具评估你和竞品的差异时；当客户的信任建立路径从「看官网 → 看案例 → 联系销售」变成「问 AI → 看 AI 总结 → 再去看官网验证」时——品牌升级的方法也需要随之演进。
      </P>

      <Emphasis>
        AI 不是品牌升级的替代者，而是加速器。它不会取代品牌策略和设计，但会改变品牌表达如何被检索、理解和信任。
      </Emphasis>

      <H2>第一部分：AI 如何改变了品牌被认知的方式</H2>

      <H3>变化一：从「客户来找你」到「AI 先替你被问」</H3>
      <P>
        传统模式下，客户通过搜索找到你的官网，然后逐页浏览来理解你的品牌。现在，越来越多的客户会先问 AI：「有哪些做品牌升级的公司？」「XX 公司靠谱吗？」「品牌升级一般多少钱？」——AI 会基于它能检索到的信息给出答案。
      </P>
      <P>
        这意味着：你的品牌不仅需要对「人」清晰，也需要对「AI」清晰。如果 AI 无法准确理解你是做什么的、为谁服务、有什么独特价值，它在回答客户问题时就会给出模糊甚至错误的描述。
      </P>

      <H3>变化二：从「浏览体验」到「瞬时判断」</H3>
      <P>
        在 AI 搜索场景中，客户的决策路径被压缩了。他们不会花 10 分钟浏览你的官网——他们在几秒钟内看到 AI 的总结，然后决定是否深入了解。品牌的「第一印象」不再由首页决定，而是由 AI 的摘要决定。
      </P>

      <H3>变化三：从「品牌说什么」到「AI 怎么说你」</H3>
      <P>
        品牌过去可以完全控制自己的叙事——官网写什么、案例怎么讲、定位怎么表达。但 AI 时代，品牌的一部分叙事权转移到了 AI 手中。AI 会根据它抓取到的所有公开信息来形成对你的描述——你的官网、你的文章、第三方评价、行业讨论。
      </P>

      <H2>第二部分：AI 时代品牌升级的新机会</H2>

      <FrameworkBox
        title="机会一：品牌内容成为 AI 的「训练素材」"
        items={[
          "如果你持续产出高质量的、结构化的品牌内容，AI 会更可能引用你的观点和框架。",
          "这意味着品牌文章不仅是给客户看的，也是给 AI 看的——它们会成为 AI 理解和描述你品牌的信息来源。",
          "关键行动：确保品牌内容结构化清晰、核心观点可被独立引用、关键信息（定位、服务、方法论）在多个页面中一致。",
        ]}
      />

      <FrameworkBox
        title="机会二：品牌差异化在 AI 时代更有价值"
        items={[
          "AI 擅长总结共性信息，但很难捕捉微妙的品牌差异化——除非你把它表达得非常清晰、非常结构化。",
          "如果品牌差异化模糊，AI 会把你和竞品描述成差不多的样子。如果品牌差异化清晰、结构化，AI 会更准确地传达你的独特性。",
          "关键行动：在品牌认知梳理阶段，把差异化提炼成可以用一句话表达的、AI 可识别的主张。",
        ]}
      />

      <FrameworkBox
        title="机会三：AI 让品牌诊断和品牌管理更高效"
        items={[
          "AI 工具可以帮助企业更高效地审视品牌表达的一致性——跨页面、跨触点、跨渠道的品牌语言和视觉一致性审查。",
          "AI 也可以加速品牌升级过程中的信息整理、竞品分析和内容生成。",
          "关键行动：将 AI 工具整合到品牌升级的工作流中——不是替代策略判断，而是加速执行效率。",
        ]}
      />

      <H2>第三部分：AI 时代的品牌升级行动框架</H2>

      <P>基于以上分析，我们提出一个 AI 时代的品牌升级行动框架——在传统品牌升级的三层结构上，增加 AI 维度的考量：</P>

      <div className="space-y-4 my-6">
        {[
          { layer: "第一层：品牌认知", traditional: "定义品牌定位、价值主张、品牌语言", ai: "+ 确保品牌认知可以被 AI 准确理解和引用——差异化清晰、结构化成文" },
          { layer: "第二层：品牌识别", traditional: "设计 Logo、色彩、字体、版式系统", ai: "+ 确保视觉系统在 AI 生成内容中的一致性（如品牌色、Logo 的 AI 辨识度）" },
          { layer: "第三层：品牌落地", traditional: "官网、提案、销售材料的内容组织", ai: "+ 品牌内容结构化（H1-H3 层次清晰）、Schema 标记、llms.txt 等 AI 基础设施" },
          { layer: "新增维度：AI 可见性", traditional: "——", ai: "确保品牌在 AI 搜索中被正确发现和描述：结构化数据、AI 友好内容、品牌信号一致性" },
        ].map(({ layer, traditional, ai }) => (
          <div key={layer} className="border border-rule rounded-lg p-5 bg-bg-alt">
            <h3 className="font-semibold text-ink mb-2 text-sm">{layer}</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div><span className="text-accent font-semibold">传统做法：</span><span className="text-muted">{traditional}</span></div>
              <div><span className="text-accent font-semibold">AI 时代新增：</span><span className="text-muted">{ai}</span></div>
            </div>
          </div>
        ))}
      </div>

      <H2>第四部分：企业现在可以开始的四件事</H2>
      <P>无论你是否计划在近期做完整品牌升级，以下四件事可以从现在开始：</P>

      <div className="space-y-4 my-6">
        {[
          { num: "01", title: "审视品牌在 AI 中的「形象」", desc: "在豆包、DeepSeek、Kimi 等 AI 工具中搜索你的品牌名和相关关键词，看看 AI 如何描述你。如果描述不准确或不完整，说明品牌信息在公开渠道中不够清晰或不够结构化。" },
          { num: "02", title: "确保官网内容结构清晰可被 AI 理解", desc: "清晰的 H1-H3 层次、每页独立的 meta description、FAQ 结构化标记——这些不只是 SEO，也是 AI 时代品牌表达的基础设施。" },
          { num: "03", title: "把品牌的差异化提炼成一句话", desc: "如果你的团队无法用一句话说清楚「我们与竞品的核心区别」，AI 更不可能替你说清楚。这是品牌认知梳理中最重要的一步。" },
          { num: "04", title: "开始产出结构化的品牌观点内容", desc: "持续产出有框架、有观点、有方法论的品牌内容——案例研究、方法论文章、行业判断。这些内容会成为 AI 理解你品牌的信息基础。" },
        ].map(({ num, title, desc }) => (
          <div key={num} className="flex gap-4">
            <div className="text-xl font-bold text-accent shrink-0 w-8">{num}</div>
            <div>
              <h3 className="text-sm font-semibold text-ink mb-1">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <H2>结语</H2>
      <Emphasis>
        AI 时代的品牌升级，不是抛弃传统品牌方法论，而是在其基础上增加一个 AI 维度。传统方法论回答的是「品牌如何被人理解」——这仍然是基础。AI 维度回答的是「品牌如何被 AI 理解，并通过 AI 被更多人发现」。两者不是二选一，而是叠加关系。先做好品牌认知的基础梳理，再做好 AI 可见性的基础设施——这个顺序不会变。
      </Emphasis>
    </ArticleFrame>
  );
}
