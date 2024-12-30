export default function Slide11() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
        Gumroad: Run Your Website, Store, Marketplace, Email Marketing
      </h1>
      <div className="grid w-[40%] grid-cols-2 gap-8">
        <div className="border-r border-gray-200 pr-8 dark:border-gray-700">
          <h2 className="mb-4 font-bold dark:text-white">2024</h2>
          <ul className="dark:text-gray-300">
            <li className="line-through">✓ Merchant of Record</li>
            <li className="line-through">
              ✓ Collabs, bundles, reviews, and wishlists
            </li>
            <li className="line-through">✓ Content editor</li>
            <li className="line-through">✓ Profile/website builder</li>
            <li className="line-through">✓ Discovery on homepage</li>
            <li className="line-through">✓ Abandoned cart emails</li>
            <li className="line-through">
              ✓ Coffee, tipping, calls, commissions
            </li>
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
                <li>Pay-to-use above $1M/yr</li>
                <li>Largest customers subsidize smallest ones</li>
              </ul>
            </li>

            <li>
              Features:
              <ul className="ml-6 mt-2 space-y-2">
                <li>Enhanced email marketing and analytics</li>
                <li>Social proof widgets</li>
                <li>Inline Helper-powered support</li>
                <li>Profile and product page customization</li>
                <li>Community features</li>
                <li>AI product creation tools</li>
              </ul>
            </li>

            <li>Mobile and desktop apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
