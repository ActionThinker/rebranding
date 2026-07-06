"use client";

import { useState } from "react";

export function WeChatModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent/90 transition-colors"
      >
        添加微信咨询
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-surface rounded-xl p-10 max-w-sm mx-4 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted hover:text-ink text-lg leading-none"
              aria-label="关闭"
            >
              ×
            </button>
            <h3 className="text-lg font-bold text-ink mb-2">添加微信咨询</h3>
            <p className="text-sm text-muted mb-6">扫码或搜索添加，24 小时内本人回复</p>
            <img
              src="/wechat-qr.png"
              alt="微信：ActionThinker"
              width={200}
              height={200}
              className="mx-auto rounded-lg mb-4"
            />
            <p className="text-sm font-semibold text-ink">ActionThinker</p>
          </div>
        </div>
      )}
    </>
  );
}
