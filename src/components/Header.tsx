"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "首页" },
  { href: "/services", label: "服务" },
  { href: "/fit", label: "适合客户" },
  { href: "/insights", label: "案例/观点" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-14">
        <Link href="/" className="text-lg font-semibold tracking-tight text-ink">
          re<span className="text-accent font-extrabold">B</span>randing
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted hover:text-ink transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
          >
            预约品牌诊断
          </Link>
        </nav>
        <button className="md:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <rect width="20" height="2" rx="1" fill="currentColor" />
            <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
            <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-rule bg-surface px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-muted hover:text-ink" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white text-center" onClick={() => setOpen(false)}>
            预约品牌诊断
          </Link>
        </div>
      )}
    </header>
  );
}
