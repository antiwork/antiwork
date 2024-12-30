export default function Slide13() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
        Helper: AI Customer Support Agents
      </h1>
      <div className="grid w-[40%] grid-cols-2 gap-8">
        <div className="border-r border-gray-200 pr-8 dark:border-gray-700">
          <h2 className="mb-4 font-bold dark:text-white">2024</h2>
          <ul className="dark:text-gray-300">
            <li className="line-through">✓ AI support</li>
            <li className="line-through">✓ In-app live chat</li>
            <li className="line-through">✓ Tool usage</li>
            <li className="line-through">✓ Slack integration</li>
          </ul>
        </div>

        <div className="pl-8">
          <h2 className="mb-4 font-bold dark:text-white">2025</h2>
          <ul className="space-y-4 dark:text-gray-300">
            <li>
              Open Source:
              <ul className="ml-6 mt-2 space-y-2">
                <li>Free-to-use under $1M/yr in total revenue</li>
              </ul>
            </li>

            <li>
              Features:
              <ul className="ml-6 mt-2 space-y-2">
                <li>Best possible responses in 5 minutes or less</li>
                <li>Manager feedback</li>
                <li>Agent personas</li>
                <li>Auto-assigning</li>
                <li>Analytics and reporting</li>
                <li>Dashboard first, inbox second</li>
              </ul>
            </li>

            <li>Mobile and desktop apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
