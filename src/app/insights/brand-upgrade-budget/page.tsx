import type { Metadata } from "next";
import { ArticleFrame, H2, P, Emphasis, FrameworkBox } from "@/components/ArticleFrame";

export const metadata: Metadata = {
  title: "品牌升级项目的预算该怎么规划 | rebranding",
  description:
    "品牌升级的预算差异很大——从一个诊断到完整 rebranding。这篇文章帮你理解不同投入层级对应的产出，以及如何分阶段规划预算。",
};

export default function Page() {
  return (
    <ArticleFrame
      title="品牌升级项目的预算该怎么规划"
      subtitle="品牌升级的预算差异很大——从一个诊断到完整的 rebranding，投入范围很广。这篇文章帮你理解不同投入层级对应的产出，以及如何分阶段规划。"
    >
      <H2>品牌升级预算为什么难以估算</H2>
      <P>
        品牌升级不像买软件——不是一个固定价格的产品。它的范围取决于很多变量：品牌现状、业务阶段、目标客户、交付深度。一个只需要统一官网视觉的项目，和一个需要从品牌定位开始重新梳理的项目，投入差异巨大。
      </P>
      <P>
        这篇文章不会给你一个具体的「报价单」，而是帮你理解：不同投入层级对应解决什么问题，以及如何根据自己的实际情况规划预算。
      </P>

      <Emphasis>
        品牌升级不是一笔「花费」，而是一次面向增长的投入。关键不是花多少，而是花在哪个层级能带来最大的业务回报。
      </Emphasis>

      <H2>四个投入层级</H2>

      <FrameworkBox
        title="层级一：品牌诊断（最低投入，最高信息回报）"
        items={[
          "适合：不确定问题出在哪、不确定是否需要完整升级、想先有一个专业判断",
          "产出：品牌问题定位报告 + 升级优先级建议 + 下一步行动方案",
          "时间：1-2 周",
          "价值：花最少的预算，获得对品牌问题的系统性判断。这个判断本身就能避免后续大量无效投入。",
        ]}
      />

      <FrameworkBox
        title="层级二：单点升级（中等投入，聚焦单一模块）"
        items={[
          "适合：品牌认知基本清晰，但某一个触点（如官网、识别系统）需要系统性升级",
          "可能的内容：官网内容重构 / 品牌识别系统设计 / 销售材料体系升级",
          "时间：4-8 周",
          "价值：解决当前最紧迫的问题，不涉及完整品牌系统。适合品牌基础还行、问题集中在某一块的情况。",
        ]}
      />

      <FrameworkBox
        title="层级三：完整品牌升级（较高投入，从认知到落地）"
        items={[
          "适合：品牌认知需要重新梳理、识别系统需要重建、官网和销售材料需要全面升级",
          "内容：品牌认知梳理 → 识别系统设计 → 网站内容规划 → 销售材料升级",
          "时间：2-4 个月",
          "价值：一次系统性的品牌重建，从「品牌如何被理解」到「品牌如何在每个触点上被表达」。适合业务已进入新阶段、品牌需要整体升级的公司。",
        ]}
      />

      <FrameworkBox
        title="层级四：品牌持续运营（长期投入，持续优化）"
        items={[
          "适合：已完成品牌升级，需要持续优化品牌表达和内容输出",
          "内容：品牌内容持续产出、官网迭代、销售材料更新、品牌表达规则维护",
          "时间：持续服务",
          "价值：让品牌升级的投入持续产生回报，而不是做完一套规范就束之高阁。",
        ]}
      />

      <H2>影响预算的关键变量</H2>
      <P>除了投入层级，以下几个变量也会显著影响品牌升级的预算：</P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> <strong>业务复杂度</strong>：单一业务线 vs 多业务线 vs 母品牌+子品牌架构——复杂度越高，需要梳理的内容越多</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> <strong>现有材料完整度</strong>：已有品牌基础材料 vs 几乎从零开始——决定了认知梳理的工作量</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> <strong>落地触点数量</strong>：只需要官网 vs 官网+提案+案例+社交媒体+……——触点越多，落地工作量越大</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> <strong>团队参与度</strong>：团队深度参与 vs 大部分外包——决定了沟通成本和时间周期</li>
      </ul>

      <H2>分阶段投入：一个更务实的策略</H2>
      <P>
        如果一次性完整升级的预算超出当前计划，可以采用分阶段策略：
      </P>
      <div className="space-y-3 my-6">
        {[
          { step: "第一阶段", desc: "品牌诊断（1-2 周）——先搞清楚问题出在哪，做一个最低投入的判断" },
          { step: "第二阶段", desc: "根据诊断结果，优先解决最影响业务的那个模块——可能是官网，可能是识别系统，也可能是品牌认知梳理" },
          { step: "第三阶段", desc: "在第一、二阶段的基础上，逐步扩展品牌系统的完整性" },
        ].map(({ step, desc }) => (
          <div key={step} className="flex gap-4 border border-rule rounded-lg p-4 bg-bg-alt">
            <div className="text-sm font-semibold text-accent shrink-0">{step}</div>
            <p className="text-sm text-muted leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <H2>这篇文章的核心结论</H2>
      <Emphasis>
        品牌升级的预算不应该是一个「一口价」的决策。最聪明的投入方式通常是：先花最少的预算做一个诊断，搞清楚问题到底在哪一层、优先级是什么，然后根据诊断结果决定下一步投向哪个层级。这比一开始就决定投入某个固定金额要高效得多。
      </Emphasis>
    </ArticleFrame>
  );
}
