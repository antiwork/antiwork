import type { ReactNode } from "react";

// Brand-colored, bold, underlined inline link for our product names
// (Gumroad / Helper / Flexile). Keeps color + href consistent everywhere
// a product is named in prose.
const BRANDS = {
  gumroad: {
    href: "https://gumroad.com",
    className: "text-[#ec4899] decoration-[#ec4899]",
  },
  helper: {
    href: "https://helper.ai",
    className: "text-[#b91c1c] decoration-[#b91c1c]",
  },
  flexile: {
    href: "https://flexile.com",
    className: "text-[#006ceb] decoration-[#006ceb]",
  },
} as const;

export function ProductLink({
  brand,
  children,
}: {
  brand: keyof typeof BRANDS;
  children?: ReactNode;
}) {
  const { href, className } = BRANDS[brand];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} font-bold underline underline-offset-[2px]`}
    >
      {children ?? brand.charAt(0).toUpperCase() + brand.slice(1)}
    </a>
  );
}
