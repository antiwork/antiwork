"use client";

import { useState } from "react";

interface RoadmapItemProps {
  href: string;
  label: string;
  description: string;
}

function RoadmapItem({ href, label, description }: RoadmapItemProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <li className="relative">
      •{" "}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {label}
      </a>
      {showTooltip && (
        <div className="absolute left-0 top-full z-50 mt-1 max-w-xs rounded-md bg-gray-900 px-3 py-2 text-sm text-white shadow-lg dark:bg-gray-100 dark:text-gray-900">
          {description}
        </div>
      )}
    </li>
  );
}

export default function SlideRoadmap() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-6 text-3xl font-bold tracking-tighter text-gray-900 md:mb-10 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        Q1 2026 Roadmap
      </h1>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:gap-6">
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Migrations
          </h2>
          <p className="mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400">
            To speed up shipping
          </p>
          <ul className="space-y-1 text-sm text-gray-600 md:text-base dark:text-gray-400">
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/3028"
              label="Inertia"
              description="React on Rails → Single Page App"
            />
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/3008"
              label="Tailwind"
              description="SCSS → Tailwind"
            />
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/3028"
              label="Expo"
              description="Brand new mobile apps with React Native"
            />
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Features
          </h2>
          <p className="mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400">
            New use cases
          </p>
          <ul className="space-y-1 text-sm text-gray-600 md:text-base dark:text-gray-400">
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/2859"
              label="Badges & Honors"
              description="Show badges and awards on product and creator pages"
            />
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/1838"
              label="Conditional Discounts"
              description="Limit discount codes to owners of another product"
            />
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/3036"
              label="Dynamic Currency Minimums"
              description="Calculate minimum prices based on fees + exchange rates"
            />
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Creator Admin
          </h2>
          <p className="mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400">
            For existing power users
          </p>
          <ul className="space-y-1 text-sm text-gray-600 md:text-base dark:text-gray-400">
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/1837"
              label="Rethink Product Creation & Edit"
              description="Redesign product creation and editing experience"
            />
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/2371"
              label="Autosave in product editor"
              description="Prevent losing work on navigation, refresh, or crash"
            />
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/2185"
              label="Bulk version transfer"
              description="Move customers between product versions in bulk"
            />
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Bugs & Performance
          </h2>
          <p className="mb-3 text-base text-gray-500 md:text-lg dark:text-gray-400">
            Reliability for everyone
          </p>
          <ul className="space-y-1 text-sm text-gray-600 md:text-base dark:text-gray-400">
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/2042"
              label="Content page crashes for large products"
              description="Content page crashes for products with many files"
            />
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/3134"
              label="Product page 60s+ load times"
              description="Product page loads 60s+ across browsers, broken on older Safari"
            />
            <RoadmapItem
              href="https://github.com/antiwork/gumroad/issues/3262"
              label="Email audience size takes minutes to update for large audiences"
              description="Email audience size takes minutes to update for large audiences"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
