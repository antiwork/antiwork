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
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "12px 16px",
        background: "rgba(255,255,255,0.92)",
        borderTop: "1px solid #eee",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transform: visible ? "translateY(0)" : "translateY(110%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.25s ease, opacity 0.25s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 640,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        }}
      >
        <span style={{ fontSize: 14, color: "#444" }}>
          See how it works for your company.
        </span>
        <BookCTA placement="sticky" />
      </div>
    </div>
  );
}
