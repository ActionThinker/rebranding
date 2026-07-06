import type { Metadata } from "next";
import { ArticleFrame, H2, H3, P, Emphasis, FrameworkBox } from "@/components/ArticleFrame";

export const metadata: Metadata = {
  title: "为什么你的品牌在 AI 搜索中「不存在」—— 以及这对业务意味着什么 | rebranding",
  description:
    "当 60% 以上的 B2B 采购者通过 AI 搜索了解供应商时，品牌在 AI 中的可见性和描述准确度直接影响获客效率。这篇文章从 CEO 视角分析问题、机会和行动框架。",
};

export default function Page() {
  return (
    <ArticleFrame
      title="为什么你的品牌在 AI 搜索中「不存在」—— 以及这对业务意味着什么"
      subtitle="当你的潜在客户在豆包、DeepSeek 或 Kimi 中搜索你的品牌或相关服务时，AI 给出的回答是什么？这个问题值得每一位 CEO 亲自验证——因为你可能会发现，你在最重要的新渠道中并不存在。"
    >
      <H2>一个建议你现在就做的实验</H2>
      <P>
        打开豆包或 DeepSeek，搜索你的品牌名称。再搜索「[你的行业] + 品牌升级/服务商/解决方案」。看看 AI 给出的回答中：
      </P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 你的品牌是否出现在回答中？</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 如果出现了，AI 如何描述你的品牌？描述准确吗？</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 你的竞品是否出现在回答中？他们的描述是否比你的更清晰、更有说服力？</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 如果你的品牌没有出现——AI 推荐了谁？他们的品牌表达有什么不同？</li>
      </ul>

      <Emphasis>
        这个实验只需要 5 分钟。但它可能会改变你对「品牌建设」这件事的理解——因为品牌的价值，不仅在于客户看到你时怎么想，也在于客户通过 AI 了解你时，AI 怎么描述你。
      </Emphasis>

      <H2>AI 搜索正在成为 B2B 采购决策的第一入口</H2>
      <P>
        B2B 采购行为的改变正在加速。过去，客户通过搜索引擎找到你的官网，然后浏览、判断、联系。现在，越来越多的客户在搜索之前——甚至在知道你的品牌之前——先问 AI：「有哪些做品牌升级的公司？」「XX 行业的服务商有哪些？」「品牌升级一般需要多长时间？花多少钱？」
      </P>
      <P>
        AI 给出的回答，正在成为客户对市场的「第一认知」。如果你的品牌在这个回答中不存在、或者被描述得不够清晰、不够专业——客户就不会进入「访问你的官网」这一步。
      </P>

      <FrameworkBox
        title="AI 搜索改变的三个关键环节"
        items={[
          "发现环节：客户不再通过搜索引擎逐条浏览结果，而是让 AI 直接给出整合后的答案。如果你的品牌不在 AI 的答案中，就等于对这个客户不存在。",
          "评估环节：AI 会对比不同品牌的特点，给出优劣势分析。如果 AI 对你的品牌描述不准确或不完整，客户在评估阶段就已经对你产生了偏差认知。",
          "信任环节：AI 引用的信息来源（官网内容、结构化数据、观点文章）直接影响客户对品牌专业度的判断。信息越结构化、越权威，AI 越可能优先引用。",
        ]}
      />

      <H2>「品牌在 AI 中不存在」的三个层级</H2>

      <H3>层级一：完全不可见</H3>
      <P>在 AI 搜索中搜索品牌名或相关关键词，品牌完全不出现。这通常意味着：官网内容没有被 AI 有效抓取、缺少结构化数据、品牌信息在公开渠道中太薄弱。</P>

      <H3>层级二：存在但被错误描述</H3>
      <P>品牌出现了，但 AI 的描述模糊、过时、或错误——比如把你的业务范围描述得太窄，把品牌定位讲得和竞品没有区别，或者引用了过时的信息。这个层级其实比完全不可见更危险：客户以为他了解了你的品牌，但实际上他了解的是错的。</P>

      <H3>层级三：存在但缺乏差异化</H3>
      <P>品牌在 AI 中可见，描述也基本正确，但和竞品放在一起没有明显区别。AI 把你的品牌和竞品描述成了「差不多的选择」——这对高价、高信任度的 B2B 服务来说是致命的，因为客户无法建立选择你的理由。</P>

      <H2>这不是 SEO 问题，是品牌战略问题</H2>
      <P>
        很多企业在意识到这个问题后，第一反应是「我们要做 SEO」。但 AI 搜索和传统搜索引擎的逻辑不一样：
      </P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> SEO 关注的是「排名」——让网站在搜索结果中靠前</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> GEO 关注的是「描述」——让 AI 对品牌的理解准确、完整、有差异化</li>
      </ul>
      <P>
        SEO 解决的是「能不能被找到」。GEO 解决的是「被找到后，AI 怎么说你」。两者互补，但本质上是不同的能力。SEO 公司通常不具备品牌策略能力；品牌设计公司通常不了解 AI 搜索机制。
      </P>

      <H2>CEO 现在应该关注的三件事</H2>
      <div className="space-y-4 my-6">
        {[
          { num: "01", title: "验证现状", desc: "亲自在豆包、DeepSeek、Kimi 中搜索你的品牌和相关关键词。记录 AI 的回答——它准确描述了你的品牌吗？如果答案令你失望，这就是行动信号。" },
          { num: "02", title: "审视品牌表达的一致性", desc: "AI 对品牌的理解来自于它抓取到的公开信息。如果官网、社交媒体、第三方平台上的品牌信息不一致，AI 的描述也会混乱。品牌表达的一致性，是 GEO 的基础。" },
          { num: "03", title: "把 GEO 纳入品牌建设预算", desc: "品牌建设不只是做一套好看的视觉系统。在 AI 时代，确保品牌能被 AI 准确理解和引用，是品牌建设的新基础设施。它不应该被归类为「SEO 费用」，而应该是品牌投资的一部分。" },
        ].map(({ num, title, desc }) => (
          <div key={num} className="flex gap-4 border border-rule rounded-lg p-5 bg-bg-alt">
            <div className="text-lg font-bold text-accent shrink-0 w-8">{num}</div>
            <div>
              <h3 className="text-sm font-semibold text-ink mb-1">{title}</h3>
              <p className="text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <H2>这篇文章的核心结论</H2>
      <Emphasis>
        品牌在 AI 搜索中的可见性和描述准确度，是一个大多数 CEO 还没有意识到、但会很快变得重要的竞争维度。它不是 SEO 部门的事，也不是品牌部门的事——它同时涉及品牌策略、内容架构和技术基础设施。先意识到这个维度的 CEO，会在客户获取上建立先发优势。而后知后觉的，可能会在某一天搜索自己的品牌后，发现自己在最重要的渠道中不存在。
      </Emphasis>
    </ArticleFrame>
  );
}
