export default function SlideRoadmapFeatureDiscounts() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <p className="mb-2 text-base text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
        Features
      </p>
      <h1 className="mb-1 text-3xl font-bold tracking-tighter text-gray-900 md:mb-3 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        <a href="https://github.com/antiwork/gumroad/issues/1838" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
          Conditional Discounts
        </a>
      </h1>
      <p className="mb-6 text-base text-gray-500 md:mb-10 md:text-xl lg:text-2xl dark:text-gray-400">
        Limit discount codes to owners of another product
      </p>
      <div className="w-full max-w-3xl">
        <ul className="space-y-6 text-base text-gray-700 md:text-xl lg:text-2xl dark:text-gray-300">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <span>
              Restrict discounts to customers who already own a specific product
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <span>
              Time-based tiers — e.g. 100% off if purchased within 6 months, 50% off after
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <span>
              Enables upgrade pricing between product versions
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
