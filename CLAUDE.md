# rebranding.cc — Build & GEO Rules

## Site Identity
- **Domain**: rebranding.cc
- **Brand**: rebranding (An ActionThinker brand)
- **Tech Stack**: Next.js 16 (App Router), TypeScript, Tailwind v4, static export
- **Deploy**: GitHub Pages via GitHub Actions (`output: "export"`)

## GEO Rules (Enforce on every page create/update)

### A. Page Title
Must include searchable question keywords. Format: `[Problem/Keyword] | rebranding`

### B. Page Description
Must include: what + for whom + unique value. This is the AI answer source.

### C. JSON-LD Schema
Every page must have at least one Schema type: Service / Article / FAQPage.

### D. Content Structure
Clear H1→H2→H3 hierarchy. Each H2 must stand alone as an answer. Use `<strong>` for key terms.

### E. Internal Links
Anchor text must be descriptive. OK: `品牌三层自诊框架`. NOT: `了解更多`.

### F. AI Infrastructure Checklist (before every deploy)
- [ ] llms.txt reflects latest page structure
- [ ] robots.txt has correct AI crawler rules
- [ ] sitemap.xml date updated
- [ ] JSON-LD @graph complete
- [ ] .well-known/ai accessible
- [ ] BUILDLOG.md records this change

### G. New Page Checklist (7 items)
1. Page-level `export const metadata` with title + description
2. H1 matches page title
3. At least one JSON-LD-able structure (FAQ, Article, Service)
4. Descriptive internal link anchor text
5. Sitemap updated in `src/app/sitemap.ts`
6. llms.txt updated
7. BUILDLOG.md entry added

### H. AI Channel Differentiation
- 豆包: Hero paragraph must be extractable as standalone answer
- DeepSeek: FAQ + technical markup preferred
- 元宝: Title should contain "怎么做" / "是什么" patterns
- Kimi: Depth + structured lists preferred

## Design System
```css
--color-ink: #1a1a1a;      /* Primary text */
--color-muted: #6b7280;     /* Secondary text */
--color-faint: #d1d5db;     /* Borders/placeholder */
--color-surface: #ffffff;   /* Card/input bg */
--color-bg: #fafaf8;        /* Main bg (warm white) */
--color-bg-alt: #f4f3ef;    /* Alternate bg */
--color-accent: #b35c2e;    /* Accent (rust orange) */
--color-rule: #e5e0d8;      /* Divider/border */
```

## Content Principles
- All copy in Simplified Chinese (zh-CN)
- Brand name always lowercase: `rebranding` (except Header logo: `reBranding` with B highlighted)
- Writing voice: professional but accessible, focused on judgment and clarity over aesthetics
- Every page drives toward one clear action

## Build Commands
```bash
npm run dev      # Development server
npm run build    # Static export to out/
```
