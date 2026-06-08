import type { ReactNode } from "react";

// Brand-colored, bold, underlined inline link for our product names
// (Gumroad / Helper / Flexile). Keeps color + href consistent everywhere
// a product is named in prose.
const BRANDS = {
  gumroad: { href: "https://gumroad.com", color: "#ec4899" },
  helper: { href: "https://helper.ai", color: "#b91c1c" },
  flexile: { href: "https://flexile.com", color: "#006ceb" },
} as const;

export function ProductLink({
  brand,
  children,
}: {
  brand: keyof typeof BRANDS;
  children?: ReactNode;
}) {
  const { href, color } = BRANDS[brand];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color,
        fontWeight: 700,
        textDecoration: "underline",
        textDecorationColor: color,
        textUnderlineOffset: "2px",
      }}
    >
      {children ?? brand.charAt(0).toUpperCase() + brand.slice(1)}
    </a>
  );
}
