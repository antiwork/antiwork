export default function SlideBalanceSheet() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-8">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
        Balance Sheet
      </h1>

      <div className="max-w-3xl space-y-8 text-left">
        <div className="rounded-xl bg-blue-50 p-6 dark:bg-blue-950">
          <p className="text-3xl font-bold text-blue-600 md:text-4xl dark:text-blue-400">
            $6.1M
          </p>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-400">
            Cash at close
          </p>
        </div>

        <div className="p-2">
          <p className="text-xl text-gray-600 dark:text-gray-400">
            -55% YoY (down from $13.8M)
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Key outflows:
          </p>
          <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>
                <strong className="text-gray-900 dark:text-white">$6.0M</strong>{" "}
                Stock repurchases
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>
                <strong className="text-gray-900 dark:text-white">$2.5M</strong>{" "}
                Dividends
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-gray-400">•</span>
              <span>
                <strong className="text-gray-900 dark:text-white">$1.9M</strong>{" "}
                Investments (Small Bets, MDE.TV, EC Calm Co.)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
