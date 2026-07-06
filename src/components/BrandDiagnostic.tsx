"use client";

import { useState } from "react";
import { BrandName, brandText } from "@/components/BrandName";

interface Question {
  q: string;
  options: { label: string; text: string }[];
}

const questions: Question[] = [
  {
    q: "你目前最想解决的问题是什么？",
    options: [
      { label: "A", text: "品牌形象不够专业、不够成熟" },
      { label: "B", text: "官网或销售材料说服力不够" },
      { label: "C", text: "业务表达碎片化，缺少统一规则" },
      { label: "D", text: "准备进入新阶段（新市场/大客户/融资）" },
    ],
  },
  {
    q: "你现在更接近哪种状态？",
    options: [
      { label: "A", text: "有产品有客户，但品牌表达还是创业初期写法" },
      { label: "B", text: "业务变复杂了，官网一页讲不清楚" },
      { label: "C", text: "品牌不算差，但整体撑不起下一阶段" },
      { label: "D", text: "已经明确要做品牌升级，正在找合作方" },
    ],
  },
  {
    q: "你更希望先做什么？",
    options: [
      { label: "A", text: "先把问题诊断清楚，再决定怎么做" },
      { label: "B", text: "主要聚焦官网或某一块表达的升级" },
      { label: "C", text: "想做一次完整的品牌升级" },
    ],
  },
  {
    q: "你的预算区间？",
    options: [
      { label: "A", text: "小范围试水" },
      { label: "B", text: "中等投入" },
      { label: "C", text: "完整项目预算" },
    ],
  },
  {
    q: "你的时间预期？",
    options: [
      { label: "A", text: "希望尽快启动" },
      { label: "B", text: "1-2 个月内" },
      { label: "C", text: "可以接受 3 个月以上完整推进" },
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
  explore: {
    icon: "🔍",
    title: "探索型",
    desc: "你目前的问题可能还不太清晰，但这本身就是一个重要信号——品牌表达已经开始让你感到不适配了。",
    recommend: "建议从品牌诊断开始，先系统梳理问题到底在哪一层（认知、识别还是落地），再决定下一步方向。",
  },
  focus: {
    icon: "🎯",
    title: "聚焦型",
    desc: "你的问题比较明确地集中在某一个环节——可能是官网承接力不足，也可能是识别系统需要统一。",
    recommend: "建议从识别系统设计或网站内容规划切入，先解决当前最紧迫的表达问题，再逐步扩展品牌系统。",
  },
  upgrade: {
    icon: "🚀",
    title: "升级型",
    desc: "你的业务阶段已经明显超出当前品牌表达的承载能力，需要的是一次系统性的品牌升级。",
    recommend: "适合完整 rebranding 项目，从品牌认知重组开始，到识别系统重建，再到官网和销售表达的全面落地。",
  },
};

function getProfile(answers: number[]): string {
  const total = answers.reduce((a, b) => a + b, 0);
  if (total <= 4) return "explore";
  if (total <= 8) return "focus";
  return "upgrade";
}

export function BrandDiagnostic() {
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
    <section id="diagnostic" className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        {step === "quiz" && (
          <>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-ink mb-3">品牌升级快速诊断</h2>
              <p className="text-sm text-muted">5 道题，1 分钟。帮你定位当前阶段，找到最适合的切入路径。</p>
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
              <h2 className="text-2xl font-bold text-ink mb-3">你的诊断结果</h2>
              <p className="text-sm text-muted">基于你的回答，以下是适合你的切入建议。</p>
            </div>

            <div className="border border-rule rounded-lg p-8 bg-surface text-center mb-8">
              <div className="text-4xl mb-4">{profile.icon}</div>
              <h3 className="text-xl font-bold text-ink mb-3">{profile.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">{profile.desc}</p>
              <p className="text-sm text-muted leading-relaxed">{brandText(profile.recommend)}</p>
            </div>

            <div className="border border-rule rounded-lg p-8 bg-bg-alt text-center">
              <h3 className="font-semibold text-ink mb-4">基于你的诊断结果，预约一次深度沟通</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                带着你的诊断结果，我们可以做一次针对性的深度解读，帮你进一步判断更适合从哪里开始。
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
