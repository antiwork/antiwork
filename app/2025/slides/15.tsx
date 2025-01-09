export default function Slide15() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
        Shortest: AI QA
      </h1>
      <div className="grid w-[40%] grid-cols-2 gap-8">
        <div className="border-r border-gray-200 pr-8 dark:border-gray-700">
          <h2 className="mb-4 font-bold dark:text-white">2024</h2>
          <ul className="dark:text-gray-300">
            <li className="line-through">✓ Shipped v1</li>
            <li className="line-through">✓ Used for Iffy</li>
          </ul>
        </div>

        <div className="pl-8">
          <h2 className="mb-4 font-bold dark:text-white">2025</h2>
          <ul className="space-y-4 dark:text-gray-300">
            <li>Free-to-use, winner-take-all</li>
            <li>Used for Helper</li>
            <li>Used for Flexile</li>
            <li>Used for Gumroad</li>
            <li>Managed CI service</li>
            <li>Reached 4,000 GitHub stars ⭐️ on Shortest!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
