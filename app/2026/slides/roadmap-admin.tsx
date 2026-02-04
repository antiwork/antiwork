export default function SlideRoadmapAdmin() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-1 text-3xl font-bold tracking-tighter text-gray-900 md:mb-3 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        Creator Admin
      </h1>
      <p className="mb-6 text-base text-gray-500 md:mb-10 md:text-xl lg:text-2xl dark:text-gray-400">
        For existing power users
      </p>
      <div className="w-full max-w-4xl">
        <ul className="space-y-4 text-base md:text-xl lg:text-2xl">

          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a href="https://github.com/antiwork/gumroad/issues/2371" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
              <strong>Autosave in product editor</strong> — prevent losing work
              on navigation, refresh, or crash
            </a>
          </li>
          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a href="https://github.com/antiwork/gumroad/issues/2185" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
              <strong>Bulk version transfer</strong> — move customers between
              product versions in bulk
            </a>
          </li>
          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a href="https://github.com/antiwork/gumroad/issues/2922" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
              <strong>Multi-page content navigation</strong> — better reading
              experience for buyers
            </a>
          </li>
          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a href="https://github.com/antiwork/gumroad/issues/2029" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
              <strong>Bundle search improvements</strong> — show creation date
              and tags when products share a name
            </a>
          </li>
          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a href="https://github.com/antiwork/gumroad/issues/3268" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
              <strong>Onboarding clarity</strong> — help new creators find where
              to upload product files
            </a>
          </li>
          <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-pink-500 md:mt-2.5" />
            <a href="https://github.com/antiwork/gumroad/issues/1928" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
              <strong>Payment form & verification UX</strong> — updated layout
              and clearer copy for all account types
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
