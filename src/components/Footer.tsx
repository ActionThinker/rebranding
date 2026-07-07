import Link from "next/link";
import { BrandName } from "@/components/BrandName";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-bg-alt px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap gap-10 justify-between mb-12">
          <div className="min-w-[160px]">
            <div className="text-lg font-semibold tracking-tight text-ink mb-1"><BrandName /></div>
            <p className="text-sm text-muted max-w-[240px] leading-relaxed">
              帮助成长型企业重构品牌认知、识别系统与网站表达。
            </p>
          </div>
          <div className="flex gap-12 flex-wrap">
            <div>
              <div className="text-xs font-semibold text-ink mb-3 tracking-wide">页面</div>
              <Link href="/services" className="block text-sm text-muted hover:text-ink mb-2">服务</Link>
              <Link href="/fit" className="block text-sm text-muted hover:text-ink mb-2">适合客户</Link>
              <Link href="/insights" className="block text-sm text-muted hover:text-ink mb-2">案例/观点</Link>
              <Link href="/about" className="block text-sm text-muted hover:text-ink mb-2">关于</Link>
            </div>
            <div>
              <div className="text-xs font-semibold text-ink mb-3 tracking-wide">联系</div>
              <Link href="/contact" className="block text-sm text-accent hover:text-accent/80 font-medium">预约品牌诊断 →</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-rule pt-6 text-xs text-muted flex flex-wrap gap-4 justify-between">
          <span>&copy; {new Date().getFullYear()} <BrandName />.</span>
          <span>
            Created by <a href="https://actionthinker.com" className="underline hover:text-ink">ActionThinker</a> &amp; OPClab.
          </span>
        </div>
      </div>
    </footer>
  );
}
