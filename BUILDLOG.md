# Build Log — rebranding.cc

## 2026-07-06 — Brand Name Styling & Footer Update

**Changes**:
- Created BrandName component (reBranding with B in accent + extrabold)
- Created brandText() helper for inline text replacement
- Updated HeroSection, SectionIntro, CTASection to accept ReactNode props
- Styled all "rebranding" → reBranding in key JSX: heroes, headings, footer
- Footer attribution: "An ActionThinker brand." → "Created by ActionThinker & Allen."
- Metadata strings retained as plain "rebranding" for SEO/AI readability

## 2026-07-06 — Enterprise GEO Service Productization

**Changes**:
- New service page: `/services/geo/` — 企业官网 GEO 化
- GEO 六步方法论: 诊断 → 规划 → 平台范围 → 行动建议 → 落地 → 效果验证
- GEO 就绪度自测 (GEODiagnostic): 5 题交互式诊断 + 3 种画像
- 新增第 5 服务模块「企业官网 GEO 化」到服务页
- New article: `/insights/why-geo-matters/` — CEO 视角的战略文章
- Updated sitemap, llms.txt with new routes
- Services page: 四类→五类, GEO card links to `/services/geo/`
- Internal validation: enterprise RFP scenario confirms market demand

## 2026-07-06 — GEO Initialization

**Changes**:
- Added full GEO infrastructure: robots.txt, sitemap.xml, llms.txt, llms-full.txt, .well-known/ai
- Added JSON-LD structured data (@graph: Organization, Service, FAQPage, BreadcrumbList)
- Added Open Graph + Twitter Card metadata to all pages
- Added AI transparency meta tags (ai-disclosure, ai-system, ai-operator)
- Created OG image (rebranding-og.svg)
- Added page-level metadata to all route pages
- Created CLAUDE.md with 8 GEO rules
- Created BUILDLOG.md (this file)

**Pages**: 9 routes (home, services, fit, insights, about, contact + 3 articles)

## 2026-07-06 — Secondary Pages Refinement & Articles

**Changes**:
- Slimmed fit page: 5→4 ideal client types, removed redundant strengths section
- Slimmed about page: 4→3 methods, removed strengths overlay, kept brand one-liner
- Replaced contact form with BrandDiagnostic interactive quiz + WeChat QR code
- Reduced insights articles from 6→3 with curated selection
- Added 3 full article pages with standalone thinking frameworks:
  - vis-brand-clarity (3-layer self-diagnosis model)
  - dont-start-with-logo (4 prerequisite questions before design)
  - when-to-rebrand (7 signals + decision framework)
- Header logo: B in accent color + extrabold
- New components: BrandDiagnostic, ArticleFrame

## 2026-07-06 — Initial Site Launch

**Changes**:
- Initial Next.js 16 static export site
- 6 pages: home, services, fit, insights, about, contact
- Design system with warm neutral palette + rust orange accent
- Responsive layout with sticky header + footer
- Deployed to rebranding.cc via GitHub Actions
