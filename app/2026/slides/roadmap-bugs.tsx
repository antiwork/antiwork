export default function SlideRoadmapBugs() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-1 text-3xl font-bold tracking-tighter text-gray-900 md:mb-3 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        Bugs & Performance
      </h1>
      <p className="mb-6 text-base text-gray-500 md:mb-10 md:text-xl lg:text-2xl dark:text-gray-400">
        For anyone affected
      </p>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Performance
          </h2>
          <ul className="space-y-3 text-base md:text-lg lg:text-xl">
            <li className="text-gray-700 dark:text-gray-300">
              <a href="https://github.com/antiwork/gumroad/issues/2042" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
                Content page <strong>crashes</strong> for products with many
                files
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <a href="https://github.com/antiwork/gumroad/issues/3134" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
                Product page loads <strong>60s+</strong> across browsers, broken
                on older Safari
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <a href="https://github.com/antiwork/gumroad/issues/2150" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
                Email audience size takes <strong>minutes</strong> to update for
                large audiences
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Bugs
          </h2>
          <ul className="space-y-3 text-base md:text-lg lg:text-xl">
            <li className="text-gray-700 dark:text-gray-300">
              <a href="https://github.com/antiwork/gumroad/issues/3262" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
                Search bar <strong>disappears</strong> when no products match
                query
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <a href="https://github.com/antiwork/gumroad/issues/3319" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
                Mobile purchase page <strong>broken</strong> with installment
                plans
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <a href="https://github.com/antiwork/gumroad/issues/2756" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
                Can&apos;t <strong>unarchive</strong> gifted purchases — library
                sidebar missing
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <a href="https://github.com/antiwork/gumroad/issues/1619" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
                Tip input <strong>loses focus</strong> on first keystroke +
                blocking CI
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <a href="https://github.com/antiwork/gumroad/issues/3152" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
                Angolan IBAN validation <strong>rejects valid</strong> accounts
              </a>
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <a href="https://github.com/antiwork/gumroad/issues/2995" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
                Edit button <strong>hidden behind</strong> nav bar on desktop
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
