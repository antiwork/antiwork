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
      className="relative inline"
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
        className="text-fg underline decoration-faint-2 underline-offset-[2px]"
      >
        {children}
      </a>

      <span
        role="tooltip"
        aria-hidden={!open}
        className={`absolute bottom-[calc(100%_+_8px)] left-0 z-20 w-[320px] max-w-[min(320px,86vw)] overflow-hidden rounded-[10px] border border-card-border bg-surface text-left font-mono transition-[opacity,transform] duration-150 ease-[ease] ${
          open
            ? "pointer-events-auto opacity-100 shadow-[0_8px_28px_rgba(0,0,0,0.12)]"
            : "pointer-events-none translate-y-1 opacity-0 shadow-[0_8px_28px_rgba(0,0,0,0)]"
        }`}
      >
        {image ? (
          <span
            className="block h-[120px] border-b border-card-border"
            style={{
              background: `var(--card-2) url("${image}") center/cover no-repeat`,
            }}
          />
        ) : null}
        <span className="block px-[14px] py-3">
          <span className="block text-[14px] font-bold leading-[1.35] text-fg">
            {title}
          </span>
          <span className="mt-[6px] block text-[12.5px] leading-[1.5] text-muted-2">
            {description}
          </span>
          <span className="mt-2.5 block text-[11px] uppercase tracking-[0.04em] text-muted">
            {source}
          </span>
        </span>
      </span>
    </span>
  );
}
