import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geist = Geist({ subsets: ["latin"] });

const SITE_URL = "https://rebranding.cc";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "品牌升级咨询服务 | rebranding",
  description:
    "rebranding 聚焦品牌升级咨询、品牌识别系统设计与网站内容规划，帮助成长型企业把复杂业务讲清楚，并建立更有说服力的品牌系统。",
  robots: "index, follow, max-snippet:-1, max-image-preview:large",
  authors: [{ name: "rebranding (ActionThinker)" }],
  openGraph: {
    title: "品牌升级咨询服务 | rebranding",
    description:
      "rebranding 聚焦品牌升级咨询、品牌识别系统设计与网站内容规划，帮助成长型企业把复杂业务讲清楚，并建立更有说服力的品牌系统。",
    url: SITE_URL,
    siteName: "rebranding",
    locale: "zh_CN",
    type: "website",
    images: [{ url: `${SITE_URL}/rebranding-og.svg`, width: 1200, height: 630, alt: "rebranding" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "品牌升级咨询服务 | rebranding",
    description:
      "rebranding 聚焦品牌升级咨询、品牌识别系统设计与网站内容规划，帮助成长型企业把复杂业务讲清楚，并建立更有说服力的品牌系统。",
    images: [`${SITE_URL}/rebranding-og.svg`],
  },
  alternates: {
    canonical: SITE_URL,
    languages: { "zh-CN": SITE_URL },
  },
  other: {
    "ai-disclosure": "ai-assisted",
    "ai-system": "Claude (Anthropic)",
    "ai-operator": "ActionThinker",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "rebranding",
      url: SITE_URL,
      description: "品牌升级咨询、品牌识别系统设计与网站内容规划",
      email: "chenlu@opclab.cn",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        availableLanguage: ["Chinese"],
      },
      parentOrganization: {
        "@type": "Organization",
        name: "ActionThinker",
        url: "https://actionthinker.com",
      },
      areaServed: { "@type": "Place", name: "China" },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#service`,
      name: "品牌升级咨询与识别系统设计",
      description: "从品牌诊断、识别系统设计到网站内容规划的系统性品牌升级服务",
      url: `${SITE_URL}/services/`,
      provider: { "@id": `${SITE_URL}/#organization` },
      offers: [
        {
          "@type": "Offer",
          name: "品牌诊断",
          description: "判断品牌问题出在哪一层，明确升级方向",
          url: `${SITE_URL}/services/`,
        },
        {
          "@type": "Offer",
          name: "品牌识别系统设计",
          description: "基于品牌认知，建立统一的视觉识别系统",
          url: `${SITE_URL}/services/`,
        },
        {
          "@type": "Offer",
          name: "品牌网站内容规划",
          description: "重构官网内容结构与品牌表达系统",
          url: `${SITE_URL}/services/`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "品牌升级和单纯做 Logo 有什么区别？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "品牌升级是一项从认知到表达的系统工作，包括品牌认知梳理、识别系统设计和品牌落地三个层次。Logo 只是识别系统中的一个符号，不能独立解决品牌讲不清楚的问题。",
          },
        },
        {
          "@type": "Question",
          name: "什么阶段的企业适合做品牌升级？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "适合已经有业务基础、正在进入新阶段的企业。常见信号包括：业务已经升级但品牌表达没跟上、客户类型发生了变化、官网和销售材料不再支撑当前阶段、准备进入新市场或融资。",
          },
        },
        {
          "@type": "Question",
          name: "品牌升级一般需要多长时间？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "取决于项目范围。品牌诊断通常 1-2 周，完整品牌升级项目通常 2-3 个月，包括认知梳理、识别系统设计和网站内容重构。",
          },
        },
        {
          "@type": "Question",
          name: "可以先做品牌诊断再决定是否做完整升级吗？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "可以。建议先从品牌诊断开始，判断问题出在哪一层，再决定下一步方向。不是所有项目都需要完整 rebranding。",
          },
        },
        {
          "@type": "Question",
          name: "品牌升级后如何确保能够落地？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "品牌落地需要将识别系统应用到官网、提案、销售材料等实际业务场景中。我们会提供完整的品牌表达规则，让团队后续能够持续使用。",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "rebranding",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={`${geist.className} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
