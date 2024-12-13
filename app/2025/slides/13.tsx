export default function Slide13() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">
        Helper: AI Customer Support Agents
      </h1>
      <div className="grid grid-cols-2 gap-8 w-[40%]">
        <div className="border-r pr-8">
          <h2 className="font-bold mb-4">2024</h2>
          <ul>
            <li className="line-through">✓ AI support</li>
            <li className="line-through">✓ In-app live chat</li>
            <li className="line-through">✓ Tool usage</li>
            <li className="line-through">✓ Slack integration</li>
          </ul>
        </div>

        <div className="pl-8">
          <h2 className="font-bold mb-4">2025</h2>
          <ul className="space-y-4">
            <li>
              Open Source:
              <ul className="ml-6 space-y-2 mt-2">
                <li>Free-to-use under $1M/yr in total revenue</li>
              </ul>
            </li>

            <li>
              Features:
              <ul className="ml-6 space-y-2 mt-2">
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

Slide13.backgroundColor = "bg-purple-50";
Slide13.foregroundColor = "text-gray-900";
