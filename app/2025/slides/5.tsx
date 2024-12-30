export default function Slide5() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
        2024 Review
      </h1>
      <div className="prose dark:prose-invert">
        <ul>
          <li>Gumroad got better, but didn&apos;t grow</li>
          <li>Flexile added equity and dividends</li>
          <li>Launched Helper, Iffy, and Shortest</li>
          <li>Opened NYC office with 4 in-person team members</li>
          <li>Grew revenue X% YoY to $XXM ARR</li>
          <li>Distributed $5.34M in profits</li>
        </ul>
        <blockquote className="mt-8 text-sm italic text-gray-600 dark:text-gray-400">
          &quot;If all 3 work (few million ARR), it would be nice to have ≈36
          people work across the 3 products (up from 28 people today).&quot;
          <br />
          <span className="not-italic">— January 2023 Update</span>
        </blockquote>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          (Narrator: this didn&apos;t happen.)
        </p>
      </div>
    </div>
  );
}
