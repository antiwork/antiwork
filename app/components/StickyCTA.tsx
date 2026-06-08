"use client";

import { useEffect, useState } from "react";
import { BookCTA } from "@/app/components/BookCTA";

// A bottom-pinned CTA bar that fades in once the visitor has scrolled past the
// hero, so the ask follows them down a long proof page. It hides itself once
// the real offer block / footer CTA is on screen to avoid doubling up.
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const doc = document.documentElement;
      const nearBottom = y + window.innerHeight >= doc.scrollHeight - 900;
      setVisible(y > 700 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center border-t border-card-border bg-[var(--sticky-bg)] px-4 py-3 backdrop-blur-[8px] transition-[transform,opacity] duration-[250ms] ease-[ease]"
      style={{
        transform: visible ? "translateY(0)" : "translateY(110%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="flex w-full max-w-[640px] items-center justify-between gap-[14px] font-mono">
        <span className="text-[14px] text-muted-2">
          See how it works for your company.
        </span>
        <BookCTA placement="sticky" />
      </div>
    </div>
  );
}
