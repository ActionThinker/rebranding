"use client";

import { useState } from "react";

interface Question {
  q: string;
  options: { label: string; text: string }[];
}

const questions: Question[] = [
  {
    q: "你是否在 AI 工具中搜索过自己的品牌？",
    options: [
      { label: "A", text: "从来没搜过，不知道 AI 怎么描述我们" },
      { label: "B", text: "偶尔搜过几次，但没有系统性地检查" },
      { label: "C", text: "定期检查，了解 AI 对品牌的描述情况" },
    ],
  },
  {
    q: "你的官网是否有结构化数据（JSON-LD / Schema）？",
    options: [
      { label: "A", text: "没有，或者不确定是什么" },
      { label: "B", text: "有一些基础的 SEO 标签，但没有专门为 AI 优化" },
      { label: "C", text: "有完整的 JSON-LD 结构化数据和 AI 基础设施" },
    ],
  },
  {
    q: "你的品牌核心信息在官网上的表达有多一致？",
    options: [
      { label: "A", text: "不同页面各说各的，没有统一规则" },
      { label: "B", text: "大体一致，但细节上经常有差异" },
      { label: "C", text: "品牌定位、价值主张在所有页面高度一致" },
    ],
  },
  {
    q: "你的官网内容结构的清晰程度如何？",
    options: [
      { label: "A", text: "内容堆叠，缺乏清晰的 H1-H3 层次" },
      { label: "B", text: "有层次但不统一，不同页面结构不一致" },
      { label: "C", text: "每个页面都有清晰的内容层次和阅读路径" },
    ],
  },
  {
    q: "你对 AI 搜索作为获客渠道的重视程度？",
    options: [
      { label: "A", text: "还没怎么关注，主要在优化传统搜索和社交媒体" },
      { label: "B", text: "意识到重要性，但还没开始系统性地做" },
      { label: "C", text: "已经在关注和投入，希望进一步提升" },
    ],
  },
];

interface Profile {
  icon: string;
  title: string;
  desc: string;
  recommend: string;
}

const profiles: Record<string, Profile> = {
  uncovered: {
    icon: "🔍",
    title: "GEO 未覆盖型",
    desc: "你的品牌在 AI 搜索渠道中基本处于「未被管理」的状态。AI 对你的品牌描述可能不准确、不完整，甚至可能不存在的风险较高。",
    recommend: "建议从 GEO 诊断开始，先系统性地了解你的品牌在主要 AI 平台中的当前状态，再决定下一步优化策略。",
  },
  partial: {
    icon: "📡",
    title: "GEO 部分可见型",
    desc: "你的品牌在 AI 渠道中有一定的可见性基础，但在结构化数据、内容一致性或 AI 基础设施方面还存在缺口。AI 可能部分正确地描述了你的品牌，但不够完整或精准。",
    recommend: "建议在现有基础上进行 GEO 规划与落地——补全结构化数据、优化内容层次、部署 AI 基础设施，系统性提升品牌的 AI 可见性。",
  },
  optimized: {
    icon: "🚀",
    title: "GEO 领先型",
    desc: "你的品牌在 AI 渠道中已经具备较好的基础设施和内容基础。当前的重点不是「有没有」，而是「够不够好」——在 AI 描述准确度、竞品差异化传达和持续优化方面还有提升空间。",
    recommend: "建议进入 GEO 持续运营阶段——定期监测品牌在 AI 平台中的表现、跟踪 AI 平台变化、优化品牌差异化在 AI 中的传达效果。",
  },
};

function getProfile(answers: number[]): string {
  const total = answers.reduce((a, b) => a + b, 0);
  if (total <= 3) return "uncovered";
  if (total <= 6) return "partial";
  return "optimized";
}

export function GEODiagnostic() {
  const [step, setStep] = useState<"quiz" | "result">("quiz");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleSelect = (idx: number) => {
    const next = [...answers, idx];
    setAnswers(next);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setStep("result");
    }
  };

  const handleRestart = () => {
    setStep("quiz");
    setCurrent(0);
    setAnswers([]);
  };

  const profileKey = getProfile(answers);
  const profile = profiles[profileKey];

  return (
    <section id="geo-diagnostic" className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        {step === "quiz" && (
          <>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-ink mb-3">GEO 就绪度快速自测</h2>
              <p className="text-sm text-muted">5 道题，1 分钟。评估你的品牌在 AI 搜索渠道中的就绪程度。</p>
            </div>

            <div className="flex justify-center gap-2 mb-10">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i < current ? "bg-accent" : i === current ? "bg-accent ring-2 ring-accent/30" : "bg-faint"
                  }`}
                />
              ))}
            </div>

            <div className="border border-rule rounded-lg p-8 bg-surface">
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">
                问题 {current + 1}/{questions.length}
              </div>
              <h3 className="text-lg font-semibold text-ink mb-6">{questions[current].q}</h3>
              <div className="space-y-3">
                {questions[current].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className="w-full text-left px-4 py-3 rounded-md border border-rule bg-bg hover:border-accent hover:bg-accent-light transition-colors group"
                  >
                    <span className="text-sm text-muted group-hover:text-ink transition-colors">
                      <span className="font-semibold text-accent mr-2">{opt.label}.</span>
                      {opt.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {step === "result" && (
          <>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-ink mb-3">你的 GEO 就绪度评估</h2>
              <p className="text-sm text-muted">基于你的回答，以下是你的品牌在 AI 渠道中的当前状态。</p>
            </div>

            <div className="border border-rule rounded-lg p-8 bg-surface text-center mb-8">
              <div className="text-4xl mb-4">{profile.icon}</div>
              <h3 className="text-xl font-bold text-ink mb-3">{profile.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">{profile.desc}</p>
              <p className="text-sm text-muted leading-relaxed">{profile.recommend}</p>
            </div>

            <div className="border border-rule rounded-lg p-8 bg-bg-alt text-center">
              <h3 className="font-semibold text-ink mb-4">带着评估结果，预约一次 GEO 策略沟通</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                基于你的评估结果和品牌现状，我们可以做一次针对性的 GEO 策略解读。
              </p>
              <div className="inline-block mb-4">
                <img
                  src="/wechat-qr.png"
                  alt="微信：ActionThinker"
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
              <p className="text-sm font-semibold text-ink mb-1">ActionThinker</p>
              <p className="text-xs text-muted">扫码或搜索添加 · 24 小时内本人回复</p>
            </div>

            <div className="text-center mt-6">
              <button
                onClick={handleRestart}
                className="text-sm text-muted hover:text-accent transition-colors underline underline-offset-2"
              >
                重新测试
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
