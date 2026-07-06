import type { Metadata } from "next";
import { ArticleFrame, H2, P, Emphasis, FrameworkBox, ChecklistBox } from "@/components/ArticleFrame";

export const metadata: Metadata = {
  title: "官网改版还是品牌升级？如何判断你真正需要的是什么 | rebranding",
  description:
    "官网改版解决的是「信息呈现」问题，品牌升级解决的是「如何被理解」问题。这篇文章帮你判断你到底需要哪一个。",
};

export default function Page() {
  return (
    <ArticleFrame
      title="官网改版还是品牌升级：如何判断你真正需要的是什么"
      subtitle="很多企业来找我们时说「我们要改官网」，但深入看下来发现真正需要的是品牌升级。也有的正好相反。这篇文章帮你做一个初步判断。"
    >
      <H2>一个常见的起点混淆</H2>
      <P>
        官网是品牌最可见的触点。当企业觉得「品牌有问题」时，第一个感知到的往往是官网——页面不好看、信息不清楚、客户看了没反应。于是很自然地得出结论：「我们需要改官网」。
      </P>
      <P>
        但官网只是一个容器。容器里的内容、结构、表达方式，是由品牌认知决定的。如果品牌认知本身不清晰，换一个容器解决不了内容的问题。
      </P>

      <Emphasis>
        官网改版解决的是「信息如何呈现」。品牌升级解决的是「品牌应该如何被理解」。两者不同，但常常被混淆。
      </Emphasis>

      <H2>官网改版能解决的问题</H2>
      <P>
        以下这些问题，通常通过官网改版（信息架构重构 + 内容优化 + 视觉升级）就可以解决，不一定需要完整的品牌升级：
      </P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 官网信息层次不清晰，客户找不到重点</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 页面内容组织方式不合理，阅读路径不顺畅</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 视觉风格不统一，不同页面看起来像不同的网站</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 官网内容陈旧，没有反映最新的产品和业务</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 缺少明确的 CTA 和转化路径</li>
      </ul>
      <P>
        <strong>前提条件：</strong>品牌认知本身是清晰的——你知道你是谁、服务谁、核心价值是什么、与竞品的区别在哪。问题仅仅是这些认知没有被有效地呈现在官网上。
      </P>

      <H2>品牌升级才能解决的问题</H2>
      <P>
        以下这些问题，通常说明需要的不只是官网改版，而是一次更有深度的品牌升级：
      </P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 品牌定位不清晰——你自己也说不清楚你和竞品的核心区别</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 品牌表达在不同渠道各说各话——不是因为设计不统一，而是因为对「品牌是什么」没有共识</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 业务已经变了但品牌认知没变——产品线扩展了、客户群升级了，但品牌还在讲以前的故事</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 品牌形象整体落后于业务阶段——不是某一个页面不好看，而是整体品牌感不够成熟</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 不只是官网有问题，销售提案、案例展示、对外 PPT 都有同样的问题</li>
      </ul>

      <H2>一个简单的判断框架</H2>

      <FrameworkBox
        title="官网改版更合适的信号"
        items={[
          "品牌认知清晰，团队对「我们是谁、为谁服务」有共识",
          "问题主要集中在官网这一个触点上，其他对外材料基本 OK",
          "你很清楚要改什么——内容结构、视觉风格、信息层次",
          "业务阶段和客户类型没有发生本质变化",
        ]}
      />

      <FrameworkBox
        title="品牌升级更合适的信号"
        items={[
          "品牌认知不统一——团队内部对品牌的描述差异很大",
          "问题不是某一个触点，而是多个触点都不行（官网、提案、PPT、案例）",
          "你不确定问题到底出在哪——是定位、是视觉、还是内容",
          "业务或客户已经发生实质性变化，品牌表达不再适配",
        ]}
      />

      <ChecklistBox
        title="快速自测：你更需要哪一个"
        items={[
          { label: "你能用一句话说清楚「我们为谁解决什么问题，为什么选我们」吗？", desc: "如果不能，品牌认知需要先梳理——这超出了官网改版的范围。" },
          { label: "你的官网问题是「内容没有组织好」还是「根本不知道应该讲什么」？", desc: "前者是官网改版能解决的，后者需要品牌升级。" },
          { label: "除了官网之外，你的销售提案、案例展示、对外 PPT 是否也存在同样的问题？", desc: "如果是，问题可能是品牌系统性的，不只是官网层面的。" },
        ]}
      />

      <H2>如果还不确定，可以先从哪里开始</H2>
      <P>
        如果你不确定自己属于哪一种情况，最实际的做法是：
      </P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 做一次品牌诊断——先判断品牌认知是否清晰、问题主要出在哪一层</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 如果诊断结论是品牌认知清晰、问题主要集中在网站层面，那就聚焦官网改版</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 如果诊断结论是品牌认知需要先梳理，那就从品牌升级的第一步开始，官网改版作为落地的一部分</li>
      </ul>

      <H2>这篇文章的核心结论</H2>
      <Emphasis>
        官网改版和品牌升级不是非此即彼的选择。很多项目的实际情况是：官网确实需要改，但在改官网之前，需要先把品牌认知梳理清楚——否则改出来的官网只是换了一套视觉，表达仍然不清晰。关键是诊断清楚问题的根因在哪一层。
      </Emphasis>
    </ArticleFrame>
  );
}
