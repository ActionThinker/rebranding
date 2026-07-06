import type { Metadata } from "next";
import { ArticleFrame, H2, H3, P, Emphasis, FrameworkBox, ChecklistBox } from "@/components/ArticleFrame";

export const metadata: Metadata = {
  title: "成长型 B2B 企业最常见的品牌表达问题及自查方法 | rebranding",
  description:
    "从功能堆叠、价值失焦到页面结构混乱——这 5 个品牌表达问题是成长型 B2B 企业最常见的，每个都附带了自查方法和解决方向。",
};

export default function Page() {
  return (
    <ArticleFrame
      title="成长型 B2B 企业最常见的品牌表达问题（及如何自查）"
      subtitle="从功能堆叠、价值失焦到页面结构混乱——这些问题是成长型 B2B 企业在品牌表达上最容易踩的坑。每个问题都附带了自查方法和解决方向。"
    >
      <H2>为什么成长型 B2B 企业最容易出现品牌表达问题</H2>
      <P>
        成长型 B2B 企业的典型路径是：先有产品，再有客户，然后产品越来越多、客户越来越复杂，最后才想到品牌。在这个过程中，品牌表达往往是「野蛮生长」的——每次需要新页面就加一个，每次需要新材料就做一份，没有人统一管理，也没有统一的规则。
      </P>
      <P>
        结果就是：产品很强、客户很认可，但品牌表达看起来像一家比实际小得多的公司。以下是我们遇到的五种最常见的品牌表达问题，你可以逐条自查。
      </P>

      <H2>问题一：功能堆叠——把官网做成了产品说明书</H2>
      <H3>表现</H3>
      <P>官网上密密麻麻列满了功能点，但客户看完之后仍然不知道「这到底能帮我解决什么问题」。页面结构是功能分类，而不是客户需求分类。</P>
      <H3>自查</H3>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 你的官网首页是否以功能列表开头，而不是以客户问题开头？</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 客户看完你的官网后，最常问的问题是不是「你们到底做什么的」？</li>
      </ul>

      <H2>问题二：价值失焦——讲了很多但什么都没讲清楚</H2>
      <H3>表现</H3>
      <P>品牌有很多优势、产品有很多功能、服务有很多场景——于是官网试图把所有东西都放在首页上。结果是什么都讲了，但客户什么都没记住。</P>
      <H3>自查</H3>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 你能在 10 秒内从首页找到最核心的价值主张吗？</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 首页是否有超过 3 个以上的「主要卖点」同时出现？</li>
      </ul>

      <H2>问题三：信息结构混乱——页面没有阅读路径</H2>
      <H3>表现</H3>
      <P>官网的信息是「堆」上去的，而不是「组织」起来的。不同页面之间缺乏逻辑关系，客户看完一个页面不知道下一步该看什么。网站像一本没有目录的书。</P>
      <H3>自查</H3>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 你的官网是否有清晰的阅读路径——从「你是谁」到「你为什么值得选」到「下一步做什么」？</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 客户是否需要来回跳转才能拼凑出完整信息？</li>
      </ul>

      <H2>问题四：品牌语言不统一——每次都要重新想怎么说</H2>
      <H3>表现</H3>
      <P>官网用一种说法、销售 PPT 用另一种说法、案例介绍又是另一种风格。品牌没有一个统一的表达规则，团队每次做对外材料都要从头讨论。</P>
      <H3>自查</H3>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 你的官网、销售 PPT 和案例介绍放在一起，读起来像同一个品牌吗？</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 团队是否有一套共享的品牌表达规则（不只是视觉规范，还包括怎么写、怎么讲）？</li>
      </ul>

      <H2>问题五：品牌表达与业务阶段不匹配</H2>
      <H3>表现</H3>
      <P>公司已经进入新阶段了——客户更大了、客单价更高了、竞争环境变了——但品牌表达仍然停留在创业初期的样子。品牌看起来比实际的公司「小」。</P>
      <H3>自查</H3>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 如果你的客户第一次通过官网了解你，他们会对你的规模和能力产生正确的预期吗？</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 你的品牌表达是否在帮助销售团队建立信任，还是在拖累他们？</li>
      </ul>

      <H2>五个问题的优先级框架</H2>
      <FrameworkBox
        title="如何判断先解决哪个问题"
        items={[
          "如果问题一和问题二同时存在 —— 先解决价值失焦（问题二），因为功能堆叠往往是价值失焦的表现形式",
          "如果问题三严重 —— 先解决信息结构（问题三），因为即使内容改好了，结构混乱也会让好内容失效",
          "如果问题四突出 —— 在改内容之前先建立品牌语言规则，否则改完还是各说各话",
          "如果问题五是根本 —— 那以上四个问题的解决方式都需要在一个更高的品牌认知框架下进行",
        ]}
      />

      <H2>这篇文章的核心结论</H2>
      <Emphasis>
        成长型 B2B 企业的品牌表达问题，很少是单一原因造成的。功能堆叠、价值失焦、结构混乱、语言不统一——这些问题往往是相互关联的。关键是先诊断清楚哪一个是根因，而不是头痛医头、脚痛医脚。
      </Emphasis>
    </ArticleFrame>
  );
}
