export default function SlideRoadmapFeatures() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-1 text-3xl font-bold tracking-tighter text-gray-900 md:mb-3 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        Features
      </h1>
      <p className="mb-6 text-base text-gray-500 md:mb-10 md:text-xl lg:text-2xl dark:text-gray-400">
        New use cases
      </p>
      <div className="w-full max-w-4xl">
        <ul className="space-y-4 text-base md:text-xl lg:text-2xl">
          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a
              href="https://github.com/antiwork/gumroad/issues/876"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit hover:underline"
            >
              <strong>Auto-handle PayPal disputes</strong> — submit evidence
              automatically via PayPal API
            </a>
          </li>
          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a
              href="https://github.com/antiwork/gumroad/issues/1594"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit hover:underline"
            >
              <strong>Balance top-up for refunds</strong> — load funds via
              credit card when balance is too low
            </a>
          </li>
          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a
              href="https://github.com/antiwork/gumroad/issues/1814"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit hover:underline"
            >
              <strong>Send all missed posts</strong> — bulk resend instead of
              one-by-one
            </a>
          </li>
          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a
              href="https://github.com/antiwork/gumroad/issues/1948"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit hover:underline"
            >
              <strong>Different membership renewal pricing</strong> — initial
              vs. renewal rates
            </a>
          </li>
          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a
              href="https://github.com/antiwork/gumroad/issues/173"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit hover:underline"
            >
              <strong>Membership restart flow</strong> — prevent accidental
              re-purchases
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
