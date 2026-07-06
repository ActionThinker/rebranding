import type { Metadata } from "next";
import { ArticleFrame, H2, P, Emphasis, FrameworkBox, ChecklistBox } from "@/components/ArticleFrame";

export const metadata: Metadata = {
  title: "从创始人品牌到企业品牌：成长型公司的品牌过渡 | rebranding",
  description:
    "当公司从「创始人就是品牌」过渡到「品牌独立于创始人」时，需要的是一次系统性的品牌认知重构。这篇文章提供一个过渡框架。",
};

export default function Page() {
  return (
    <ArticleFrame
      title="从创始人品牌到企业品牌：成长型公司的品牌过渡"
      subtitle="当公司从「创始人就是品牌」过渡到「品牌独立于创始人」时，需要的不是一次 Logo 更新，而是一次系统性的品牌认知重构。这篇文章提供一个过渡框架。"
    >
      <H2>一个很多创始人都会遇到的时刻</H2>
      <P>
        创业初期，创始人就是品牌。客户选择你，是因为认可你的专业能力、你的判断、你的个人信誉。品牌在这个时候是「附着在个人身上」的——你的名字、你的朋友圈、你的行业口碑，就是品牌的主要载体。
      </P>
      <P>
        但随着公司成长，会出现一个拐点：业务规模超出了个人能覆盖的范围，客户不再只通过创始人来接触公司，团队需要一套独立于创始人的品牌表达系统。
      </P>

      <Emphasis>
        从创始人品牌到企业品牌的过渡，不是「去创始人化」，而是「让品牌从附着在个人身上，变成一套可以独立运转的表达系统」。
      </Emphasis>

      <H2>创始人品牌和企业品牌的本质区别</H2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-rule">
              <th className="text-left py-3 pr-4 font-semibold text-ink">维度</th>
              <th className="text-left py-3 pr-4 font-semibold text-ink">创始人品牌</th>
              <th className="text-left py-3 font-semibold text-ink">企业品牌</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["信任来源", "个人信誉和专业能力", "品牌系统 + 客户口碑 + 市场认知"],
              ["表达方式", "创始人怎么说、怎么写、怎么讲", "品牌语言规范 + 团队执行"],
              ["触达范围", "受限于创始人的时间和精力", "可规模化，多人可执行"],
              ["客户认知", "「我选择跟这个人合作」", "「我选择跟这家公司合作」"],
              ["风险", "创始人离开 = 品牌归零", "品牌独立于个人，可持续"],
            ].map(([dim, founder, corp], i) => (
              <tr key={i} className="border-b border-rule/50">
                <td className="py-3 pr-4 font-medium text-ink">{dim}</td>
                <td className="py-3 pr-4 text-muted">{founder}</td>
                <td className="py-3 text-muted">{corp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <H2>什么时候需要启动这个过渡</H2>
      <P>以下几个信号叠加出现时，通常意味着过渡的时机到了：</P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 公司规模超过 20-30 人，创始人无法参与每一次客户沟通</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 销售团队在对外沟通时缺乏统一的品牌表达依据</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 客户开始问「除了你，你们团队还有谁」而不是只找创始人</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 公司准备融资、进入新市场或拓展大客户——需要更成熟的企业品牌形象</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 创始人希望减少在品牌表达上的个人依赖，释放更多精力到战略层面</li>
      </ul>

      <H2>过渡的三个关键步骤</H2>

      <FrameworkBox
        title="第一步：提炼品牌认知——从「我是谁」到「我们是谁」"
        items={[
          "梳理公司的核心价值、服务理念和方法论——把它从创始人的个人认知，变成一套可以被团队理解和使用的品牌语言",
          "关键问题：创始人的专业判断中，哪些是个人特质，哪些可以转化为品牌的方法论和标准？",
        ]}
      />

      <FrameworkBox
        title="第二步：建立品牌表达系统——从「创始人怎么说」到「品牌怎么表达」"
        items={[
          "建立统一的品牌语言、视觉识别系统和内容规则——让团队在对外沟通中有据可依",
          "关键交付：品牌语言规范、视觉识别系统、内容表达指南——不只是「做成什么样」，更是「怎么讲、怎么写」",
        ]}
      />

      <FrameworkBox
        title="第三步：让品牌进入团队——从「创始人一个人」到「全团队执行」"
        items={[
          "品牌系统建好之后，最重要的是让它被团队真正用起来——官网更新、销售材料统一、团队培训",
          "关键原则：创始人仍然是品牌的灵魂，但不再是品牌的唯一执行者",
        ]}
      />

      <ChecklistBox
        title="过渡自测：你现在处于哪个阶段"
        items={[
          { label: "你的客户是因为认可你个人，还是认可公司？", desc: "如果主要还是因为你个人，品牌还没有独立于创始人。" },
          { label: "如果你休假一个月，销售团队能否独立完成对外品牌沟通？", desc: "如果不能，品牌表达系统还没有进入团队。" },
          { label: "你的公司是否有统一的品牌表达规则（不限于视觉）？", desc: "如果没有，品牌仍然附着在个人判断上。" },
        ]}
      />

      <H2>这篇文章的核心结论</H2>
      <Emphasis>
        从创始人品牌到企业品牌的过渡，是成长型公司必经的一步。它不是否定创始人的价值，而是把创始人的专业判断和品牌理念转化为一套团队可以使用的系统。这个过渡不需要一蹴而就——可以先从品牌认知提炼开始，再逐步建立表达系统和团队执行能力。
      </Emphasis>
    </ArticleFrame>
  );
}
