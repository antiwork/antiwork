import { Tweet } from "react-tweet";

export default function Slide7() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
        2025: Make Work Play
      </h1>
      <div className="prose dark:prose-invert">
        <ul>
          <li>
            <Tweet id="1631853875539111938" />
          </li>
          <li>Become the world-class B2B SaaS standard/monopoly/default</li>
          <li>
            Focus on usage–it&apos;s hard, collecting money is relatively easy
          </li>
          <li>
            <span className="font-bold text-blue-600 dark:text-blue-400">
              Open source everything
            </span>{" "}
            and commercial open source model
          </li>
        </ul>
      </div>
    </div>
  );
}
