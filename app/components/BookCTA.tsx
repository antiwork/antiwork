"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import {
  assignVariant,
  CHECKOUT_URL,
  CTA_LABELS,
  type Variant,
} from "@/app/lib/experiment";

type Placement = "hero" | "mid" | "offer" | "sticky" | "rung";

const SIZES: Record<
  Placement,
  { padding: string; fontSize: number; borderRadius: number }
> = {
  hero: { padding: "14px 24px", fontSize: 17, borderRadius: 999 },
  mid: { padding: "12px 20px", fontSize: 15, borderRadius: 999 },
  offer: { padding: "14px 24px", fontSize: 17, borderRadius: 999 },
  sticky: { padding: "12px 22px", fontSize: 15, borderRadius: 999 },
  rung: { padding: "7px 16px", fontSize: 13, borderRadius: 999 },
};

export function BookCTA({
  placement,
  label,
}: {
  placement: Placement;
  label?: string;
}) {
  // Assign after mount to avoid a hydration mismatch; render the control
  // label on the server and first paint, then swap to the visitor's variant.
  const [variant, setVariant] = useState<Variant>("control");

  useEffect(() => {
    const v = assignVariant();
    setVariant(v);
    track("cta_view", { variant: v, placement });
  }, [placement]);

  const size = SIZES[placement];

  return (
    <a
      href={CHECKOUT_URL}
      onClick={() => track("cta_click", { variant, placement })}
      className="inline-flex items-center border border-[#ec4899] bg-[#ec4899] font-bold text-white no-underline"
      style={{
        padding: size.padding,
        borderRadius: size.borderRadius,
        fontSize: size.fontSize,
      }}
    >
      {label ?? CTA_LABELS[variant]}
    </a>
  );
}
