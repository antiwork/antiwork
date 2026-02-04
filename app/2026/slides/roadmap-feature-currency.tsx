export default function SlideRoadmapFeatureCurrency() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <p className="mb-2 text-base text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
        Features
      </p>
      <h1 className="mb-1 text-3xl font-bold tracking-tighter text-gray-900 md:mb-3 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        <a href="https://github.com/antiwork/gumroad/issues/3036" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
          Dynamic Currency Minimums
        </a>
      </h1>
      <p className="mb-6 text-base text-gray-500 md:mb-10 md:text-xl lg:text-2xl dark:text-gray-400">
        Calculate minimum prices based on fees + exchange rates
      </p>
      <div className="w-full max-w-3xl">
        <ul className="space-y-6 text-base text-gray-700 md:text-xl lg:text-2xl dark:text-gray-300">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <span>
              Products at currency minimums can have fees that exceed the price, blocking purchases
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <span>
              Cap fees at checkout so the seller always nets at least 1 cent instead of failing
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
