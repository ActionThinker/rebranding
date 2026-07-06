import { ArticleFrame, H2, H3, P, Emphasis, FrameworkBox, ChecklistBox } from "@/components/ArticleFrame";

export default function Page() {
  return (
    <ArticleFrame
      title="为什么很多企业做了 VIS，品牌还是讲不清楚"
      subtitle="问题往往不在视觉缺失，而在认知入口和表达逻辑没有先被建立起来。这篇文章提供一个三层诊断框架，你可以用它来定位自己的品牌问题到底出在哪一层。"
    >
      <H2>一个常见但容易被忽略的现象</H2>
      <P>
        很多企业花了不少预算做 VIS（视觉识别系统），Logo 是新的、配色是统一的、字体是规范的。但做完之后发现：官网还是讲不清楚自己是做什么的，销售提案还是每份不一样，客户看完还是抓不住重点。
      </P>
      <P>
        这时候最常见的反应是——「是不是设计还不够好？」于是再改、再调、再迭代。但真正的问题，往往不在视觉那一层。
      </P>

      <Emphasis>
        品牌讲不清楚，通常不是「长得不够好看」，而是「没有先定义清楚应该如何被理解」。
      </Emphasis>

      <H2>品牌的三层结构：一个自诊框架</H2>
      <P>
        我们把品牌看作三层结构。每一层的问题，表现出来的症状不同，需要的解决方式也不同。你可以对照自己的情况来判断。
      </P>

      <H3>第一层：品牌认知——「你是谁」是否清晰</H3>
      <P>
        这一层回答的问题是：你服务谁、核心价值是什么、客户为什么要选择你而不是别人。如果这一层不清晰，后面的所有表达都会缺乏一个稳定的锚点。
      </P>
      <P>认知层出问题的典型信号：</P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 每次向客户介绍自己时，说法都不太一样</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 不同同事描述公司的方式差异很大</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 客户看完官网后问的问题，说明他们没有真正理解你是做什么的</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 你很难用一句话说清楚「为什么选我们」</li>
      </ul>

      <H3>第二层：品牌识别——表达是否稳定统一</H3>
      <P>
        这一层是大多数人理解的「做品牌」——Logo、色彩、字体、版式、图形系统。但识别系统的真正价值不是「好看」，而是「稳定」：让品牌在所有触点上被识别为同一个品牌。
      </P>
      <P>识别层出问题的典型信号：</P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 官网、PPT、宣传册看起来像不同的公司</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 每次做对外材料都要重新考虑配色和排版</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 品牌整体看起来不够成熟、不够有信任感</li>
      </ul>

      <H3>第三层：品牌落地——表达是否进入了业务场景</H3>
      <P>
        这一层是最容易被忽略的。品牌规范手册做得再完整，如果官网内容组织、销售提案结构、案例呈现方式没有跟着一起升级，品牌升级的效果会大打折扣。
      </P>
      <P>落地层出问题的典型信号：</P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 有规范手册，但实际页面和提案还是老样子</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 网站信息很多，但客户找不到重点</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 品牌表达在日常沟通中没有被真正用起来</li>
      </ul>

      <H2>最常见的三种「做了 VIS 但讲不清楚」的情况</H2>

      <FrameworkBox
        title="情况一：跳过了认知层，直接做识别层"
        items={[
          "表现：Logo 是新的，配色是统一的，但品牌到底代表什么、跟竞品有什么区别，始终说不清楚。",
          '根源：没有先定义「客户该如何理解我」，就直接进入了「我该长什么样」。',
          "后果：视觉统一了，但表达仍然混乱。客户看到的是一套好看的包装，里面装的东西还是旧的。",
        ]}
      />

      <FrameworkBox
        title="情况二：做了认知和识别，但忽略了落地层"
        items={[
          "表现：品牌定位清晰、视觉规范完整，但官网内容组织、销售材料、案例展示没有跟着重构。",
          '根源：把品牌升级理解成一个「设计交付」，而不是一次「表达系统升级」。',
          "后果：规范手册很完整，但真正影响客户判断的页面和提案，还是老问题。",
        ]}
      />

      <FrameworkBox
        title="情况三：三层都做了，但没有建立逻辑关系"
        items={[
          "表现：每一层单独看都还行，但合在一起不协调——定位说的是一种感觉，视觉传达的是另一种感觉，网站内容又是另一种写法。",
          "根源：三层工作是分开做的，缺乏一个贯穿的「表达逻辑」。",
          "后果：品牌看起来很完整，但客户感受不到一个清晰的、一致的主张。",
        ]}
      />

      <H2>一个快速自诊清单</H2>
      <P>如果你想判断自己的品牌问题主要出在哪一层，可以用下面这些问题快速扫描一遍：</P>

      <ChecklistBox
        title="认知层自诊"
        items={[
          { label: '你能用一句话说清楚「我们为谁解决什么问题」吗？', desc: "如果这句话每次说出来都不一样，或者团队成员说法不一致，认知层需要先梳理。" },
          { label: "客户看完你的官网后，能准确复述你是做什么的吗？", desc: "如果不能，说明认知入口不够清晰。" },
          { label: "你所在的市场里，客户选择你而不是竞品的理由是什么？", desc: "如果这个理由说不清楚，品牌的差异化基础还没建立。" },
        ]}
      />

      <ChecklistBox
        title="识别层自诊"
        items={[
          { label: "你的官网、PPT、宣传册放在一起，能看出是同一个品牌吗？", desc: "如果不能，识别系统需要统一。" },
          { label: "你的品牌视觉给人的感觉，跟你实际的服务水平匹配吗？", desc: '如果品牌看起来比实际服务「小」或「不专业」，说明视觉表达落后于业务。' },
        ]}
      />

      <ChecklistBox
        title="落地层自诊"
        items={[
          { label: "你的官网是有清晰的信息层次和阅读路径，还是把所有东西都堆在上面？", desc: "如果是后者，需要重构网站内容结构。" },
          { label: "销售团队对外沟通时，用的材料、说法、案例是否统一？", desc: "如果不统一，说明品牌语言没有进入实际业务场景。" },
        ]}
      />

      <H2>这篇文章的核心结论</H2>
      <Emphasis>
        品牌讲不清楚，通常不是因为缺一个更好的 Logo 或更完整的 VIS 手册。而是因为在进入视觉之前，认知入口没有先被建立起来；或者视觉做完之后，品牌没有被真正推进到官网、提案和销售场景中去。
      </Emphasis>
      <P>
        如果你对照上面的清单，发现自己主要卡在认知层，那么下一步的优先级不是找设计师，而是先把品牌认知梳理清楚。如果你卡在落地层，那么最紧迫的事不是再做一套规范，而是重新组织网站内容和销售表达。
      </P>
    </ArticleFrame>
  );
}
