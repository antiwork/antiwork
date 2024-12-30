export default function Slide12() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
        Flexile: Manage Your Team, Investors, and Equity
      </h1>
      <div className="grid w-[40%] grid-cols-2 gap-8">
        <div className="border-r border-gray-200 pr-8 dark:border-gray-700">
          <h2 className="mb-4 font-bold dark:text-white">2024</h2>
          <ul className="dark:text-gray-300">
            <li className="line-through">✓ Cap table management</li>
            <li className="line-through">✓ Equity grants and vesting</li>
            <li className="line-through">✓ Team updates</li>
            <li className="line-through">✓ Shareholder communications</li>
          </ul>
        </div>

        <div className="pl-8">
          <h2 className="mb-4 font-bold dark:text-white">2025</h2>
          <ul className="space-y-4 dark:text-gray-300">
            <li>
              Open Source:
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  Free-to-use under 2,000 shareholders, $50M in market cap
                </li>
              </ul>
            </li>

            <li>
              Features:
              <ul className="ml-6 mt-2 space-y-2">
                <li>Buybacks, dividends, and crowdfunding</li>
                <li>Team and performance management</li>
                <li>Compliance automation</li>
                <li>API integrations</li>
                <li>Analytics and reporting</li>
              </ul>
            </li>

            <li>Mobile and desktop apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
