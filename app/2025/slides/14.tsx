export default function Slide14() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
        Iffy: Block Bad Actors
      </h1>
      <div className="grid w-[40%] grid-cols-2 gap-8">
        <div className="border-r border-gray-200 pr-8 dark:border-gray-700">
          <h2 className="mb-4 font-bold dark:text-white">2024</h2>
          <ul className="dark:text-gray-300">
            <li className="line-through">✓ Shipped v1</li>
            <li className="line-through">✓ Shipped v2</li>
            <li className="line-through">✓ Rulesets</li>
            <li className="line-through">✓ Emails</li>
            <li className="line-through">✓ Appeals</li>
            <li className="line-through">✓ Analytics</li>
          </ul>
        </div>

        <div className="pl-8">
          <h2 className="mb-4 font-bold dark:text-white">2025</h2>
          <ul className="space-y-4 dark:text-gray-300">
            <li>
              Open Source:
              <ul className="ml-6 mt-2 space-y-2">
                <li>
                  Free-to-use under $1M/yr in total revenue, $10M/yr in
                  marketplace GMV
                </li>
              </ul>
            </li>

            <li>
              Features:
              <ul className="ml-6 mt-2 space-y-2">
                <li>Stripe integration</li>
                <li>No-code integrations</li>
                <li>Code integrations</li>
                <li>More accurate AI</li>
              </ul>
            </li>

            <li>Mobile and desktop apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
