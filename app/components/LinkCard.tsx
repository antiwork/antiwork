"use client";

import React, { useEffect, useRef, useState } from "react";

type LinkCardProps = {
  href: string;
  title: string;
  description: string;
  source: string;
  image?: string;
  children: React.ReactNode;
};

// Inline external link with a Gumroad-style preview card.
// Desktop (fine pointer): card appears on hover.
// Mobile (coarse pointer): first tap reveals the card, second tap follows the link.
export function LinkCard({
  href,
  title,
  description,
  source,
  image,
  children,
}: LinkCardProps) {
  const [open, setOpen] = useState(false);
  const [coarse, setCoarse] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Close the card when tapping elsewhere (mobile).
  useEffect(() => {
    if (!open || !coarse) return;
    const onDocClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [open, coarse]);

  const handleClick = (e: React.MouseEvent) => {
    // On touch: if a long-press just opened the card, swallow the click that
    // follows so the first long-press reveals rather than navigates.
    if (coarse && suppressClickRef.current) {
      e.preventDefault();
      suppressClickRef.current = false;
    }
  };

  // Long-press (touch) reveals the card; a normal tap follows the link.
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suppressClickRef = useRef(false);

  const onTouchStart = () => {
    if (!coarse) return;
    pressTimer.current = setTimeout(() => {
      setOpen(true);
      suppressClickRef.current = true;
    }, 350);
  };
  const clearPress = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current);
      pressTimer.current = null;
    }
  };

  return (
    <span
      ref={wrapRef}
      style={{ position: "relative", display: "inline" }}
      onMouseEnter={() => !coarse && setOpen(true)}
      onMouseLeave={() => !coarse && setOpen(false)}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onTouchStart={onTouchStart}
        onTouchEnd={clearPress}
        onTouchMove={clearPress}
        onContextMenu={(e) => coarse && e.preventDefault()}
        style={{
          color: "var(--fg)",
          textDecoration: "underline",
          textDecorationColor: "var(--faint-2)",
          textUnderlineOffset: "2px",
        }}
      >
        {children}
      </a>

      <span
        role="tooltip"
        aria-hidden={!open}
        style={{
          position: "absolute",
          left: 0,
          bottom: "calc(100% + 8px)",
          zIndex: 20,
          width: 320,
          maxWidth: "min(320px, 86vw)",
          background: "var(--surface)",
          border: "1px solid var(--card-border)",
          borderRadius: 10,
          boxShadow: open
            ? "0 8px 28px rgba(0,0,0,0.12)"
            : "0 8px 28px rgba(0,0,0,0)",
          overflow: "hidden",
          textAlign: "left",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(4px)",
          transition: "opacity 150ms ease, transform 150ms ease",
          pointerEvents: open ? "auto" : "none",
          fontFamily:
            "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
        }}
      >
        {image ? (
          <span
            style={{
              display: "block",
              height: 120,
              background: `var(--card-2) url("${image}") center/cover no-repeat`,
              borderBottom: "1px solid var(--card-border)",
            }}
          />
        ) : null}
        <span style={{ display: "block", padding: "12px 14px" }}>
          <span
            style={{
              display: "block",
              fontSize: 14,
              fontWeight: 700,
              lineHeight: 1.35,
              color: "var(--fg)",
            }}
          >
            {title}
          </span>
          <span
            style={{
              display: "block",
              marginTop: 6,
              fontSize: 12.5,
              lineHeight: 1.5,
              color: "var(--muted-2)",
            }}
          >
            {description}
          </span>
          <span
            style={{
              display: "block",
              marginTop: 10,
              fontSize: 11,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {source}
          </span>
        </span>
      </span>
    </span>
  );
}
