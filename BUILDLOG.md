# Build Log — rebranding.cc

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
