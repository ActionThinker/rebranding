import { ArticleFrame, H2, P, Emphasis, FrameworkBox, ChecklistBox } from "@/components/ArticleFrame";

export default function Page() {
  return (
    <ArticleFrame
      title="品牌升级项目，为什么不能直接从 Logo 开始"
      subtitle="很多企业在决定做品牌升级时，第一反应是「先设计一个新 Logo」。这个直觉很自然，但往往是让项目走弯路的起点。这篇文章解释为什么——以及应该从哪一步开始。"
    >
      <H2>为什么「从 Logo 开始」是最自然的冲动</H2>
      <P>
        这不难理解。Logo 是品牌最可见的部分——它出现在官网左上角、名片上、PPT 封面、社交媒体头像。当企业觉得「品牌该升级了」，第一个想到的就是换掉这个最显眼的东西。
      </P>
      <P>
        而且 Logo 设计是一个看起来很「确定」的起点：有明确的交付物、有可以评价的视觉结果、有「做完」的时刻。相比之下，「先把品牌认知梳理清楚」听起来模糊、需要讨论、没有立即可见的产出。
      </P>

      <Emphasis>
        但问题恰恰在于：在没有定义清楚「品牌应该被如何理解」之前，Logo 只能基于审美偏好来做决策，而不是基于品牌策略。
      </Emphasis>

      <H2>Logo 在品牌系统里的真实位置</H2>
      <P>
        Logo 是一个识别符号——它的核心任务是让人一眼认出「这是你」。但它不能独立完成以下工作：
      </P>
      <ul className="space-y-2">
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 让客户理解你是做什么的</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 说明你与竞品的区别</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 建立客户信任感</li>
        <li className="text-sm text-muted flex gap-2"><span className="text-accent shrink-0">—</span> 组织官网的信息层次和阅读路径</li>
      </ul>
      <P>
        这些任务，需要的是品牌认知定义、表达逻辑和内容结构。Logo 只是这套系统最末端的视觉输出之一。
      </P>

      <FrameworkBox
        title="一个简单的类比"
        items={[
          "房子：Logo 是门牌号，品牌认知是地基和结构。你可以换一个好看的门牌号，但如果地基不稳，房子还是站不住。",
          "人：Logo 是签名，品牌认知是这个人的性格、专业能力和说话方式。签名可以设计得很漂亮，但如果人本身讲不清楚自己的价值，签名再好看也没用。",
        ]}
      />

      <H2>跳过前置步骤的四个典型后果</H2>

      <FrameworkBox
        title="后果一：Logo 反复修改，因为缺乏判断标准"
        items={[
          '没有品牌认知作为锚点，Logo 的评价只能靠审美偏好——「这个看起来不够高级」「那个颜色不太喜欢」。',
          "决策变成主观拉锯，反复试方向，消耗大量时间和精力。",
          "如果有明确的品牌认知，Logo 的评价标准就会变成：它是否准确传达了品牌应该被理解的方式？",
        ]}
      />

      <FrameworkBox
        title="后果二：Logo 换了，其他一切没变"
        items={[
          "最常见的情况：花两个月做了新 Logo，换到官网上，但网站内容结构、文案逻辑、信息层次完全没有调整。",
          '结果就是客户看到一个新 Logo，但阅读体验和品牌感受没有任何变化。',
          '这就是「表面升级」——看起来新了，但没有真正解决品牌表达的深层问题。',
        ]}
      />

      <FrameworkBox
        title="后果三：Logo 与后续表达脱节"
        items={[
          "如果先做了 Logo，再回头梳理品牌认知，很容易发现 Logo 传达的感觉和品牌应该传达的感觉不一致。",
          '这时候要么推翻重做，要么硬着头皮用——两种结果都不好。',
          "先定义认知，再设计识别，是更有效率的顺序。",
        ]}
      />

      <FrameworkBox
        title="后果四：花了预算，但业务感受不到变化"
        items={[
          '品牌升级的最终目的不是「好看」，而是让品牌在客户沟通和业务场景中更有效。',
          "如果只换了 Logo 而没有升级表达系统，客户感受不到本质变化，品牌升级的投资回报会很低。",
        ]}
      />

      <H2>在开始 Logo 设计之前，应该先回答什么</H2>
      <P>如果你正在考虑品牌升级，在找设计师之前，建议先把下面这四个问题回答清楚。不需要很完美，但需要有一个大致的方向。</P>

      <ChecklistBox
        title="品牌升级前必答的四个问题"
        items={[
          { label: "你的业务现在处于什么阶段？与品牌表达的差距在哪？", desc: "品牌升级应该服务于业务目标，而不是脱离业务做一套新的视觉。" },
          { label: "你的主要客户是谁？他们现在如何理解你？你希望他们如何理解你？", desc: '这决定了品牌表达的核心方向——从「现状」到「目标」的差距就是品牌升级要做的工作。' },
          { label: "你与竞品的关键差异是什么？", desc: '如果说不清楚，那品牌升级后可能看起来「更好看」，但不会让客户更清楚「为什么选你」。' },
          { label: "品牌升级后，会在哪些场景中被使用？", desc: "官网、销售提案、案例展示、社交媒体——不同的场景对品牌表达的要求不同。先想清楚场景，才能让设计和内容真正落地。" },
        ]}
      />

      <H2>一个更高效的品牌升级顺序</H2>
      <P>基于我们的经验，一个品牌升级项目的更有效顺序是这样的：</P>

      <div className="space-y-3 my-6">
        {[
          { step: "1", title: "品牌诊断", desc: "判断当前问题出在哪一层——认知、识别还是落地。不是所有项目都需要做完整 rebranding。" },
          { step: "2", title: "品牌认知梳理", desc: "明确品牌定位、核心价值主张、品牌语言和表达逻辑。这是后续所有设计决策的基础。" },
          { step: "3", title: "识别系统设计", desc: "基于品牌认知，设计 Logo、色彩、字体、图形和版式系统。这时候 Logo 设计有了明确的策略依据。" },
          { step: "4", title: "品牌落地", desc: "将识别系统应用到官网、提案、销售材料等实际场景中，确保品牌表达进入业务。" },
        ].map(({ step, title, desc }) => (
          <div key={step} className="flex gap-4 border border-rule rounded-lg p-4 bg-bg-alt">
            <div className="text-lg font-bold text-accent shrink-0 w-6">{step}</div>
            <div>
              <p className="text-sm font-semibold text-ink mb-0.5">{title}</p>
              <p className="text-xs text-muted leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <H2>这篇文章的核心结论</H2>
      <Emphasis>
        Logo 是品牌升级的结果，不是起点。先定义品牌应该被如何理解，再设计它应该长什么样，这个顺序看起来「慢」，但实际上更快——因为每一步都有判断依据，避免了大量基于偏好的无效迭代。
      </Emphasis>
      <P>
        如果你已经在计划品牌升级，不妨先问问自己：在开始设计之前，品牌认知是否已经足够清晰？如果答案是不确定的，那也许第一步不应该是找设计师。
      </P>
    </ArticleFrame>
  );
}
