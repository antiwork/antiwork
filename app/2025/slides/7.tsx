import { Tweet } from "react-tweet";

export default function Slide7() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <h1 className="mb-12 text-4xl font-bold text-gray-900 dark:text-white">
        2025: Open source everything
      </h1>
      <div className="prose dark:prose-invert">
        <ul>
          <li>
            <Tweet id="1631853875539111938" />
          </li>
          <li>
            Usage is hard (getting people to use software), sales is easy
            (getting them to pay)
          </li>
          <li>
            <a
              href="https://about.fb.com/news/2024/07/open-source-ai-is-the-path-forward/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Follow Meta&apos;s Llama model: open source drives adoption
            </a>
          </li>
          <li>
            <a
              href="https://avc.com/2006/03/my_favorite_bus/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Freemium
            </a>
            : 99.9% free users benefit from OSS,{" "}
            <a
              href="https://berniesanders.com/issues/tax-extreme-wealth/"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              top 0.1% pay
            </a>
          </li>
          <li>Goal: Become the world-class B2b SaaS suite</li>
        </ul>
      </div>
    </div>
  );
}
