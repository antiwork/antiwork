import Image from "next/image";

export default function SlideRoadmapFeatureAnalytics() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <p className="mb-2 text-base text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
        Features
      </p>
      <h1 className="mb-1 text-3xl font-bold tracking-tighter text-gray-900 md:mb-3 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        <a
          href="https://github.com/antiwork/gumroad/issues/1833"
          target="_blank"
          rel="noopener noreferrer"
          className="text-inherit hover:underline"
        >
          Content Analytics
        </a>
      </h1>
      <p className="mb-6 text-base text-gray-500 md:mb-10 md:text-xl lg:text-2xl dark:text-gray-400">
        Show creators which pages and videos customers view most
      </p>
      <div className="w-full max-w-4xl">
        <Image
          src="/2026/roadmap-content-analytics.png"
          alt="Per-page content analytics"
          width={1120}
          height={1024}
          className="h-auto w-full rounded-lg object-contain shadow-lg"
        />
      </div>
    </div>
  );
}
