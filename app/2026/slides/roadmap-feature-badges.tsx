import Image from "next/image";

export default function SlideRoadmapFeatureBadges() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <p className="mb-2 text-base text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
        Features
      </p>
      <h1 className="mb-1 text-3xl font-bold tracking-tighter text-gray-900 md:mb-3 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        <a href="https://github.com/antiwork/gumroad/issues/2859" target="_blank" rel="noopener noreferrer" className="text-inherit hover:underline">
          Badges & Honors
        </a>
      </h1>
      <div className="mb-6 md:mb-8" />
      <div className="flex w-full max-w-6xl gap-4 md:gap-6">
        <div className="w-1/3">
          <Image
            src="/2026/roadmap-badges-product.png"
            alt="Product page with badges and awards"
            width={980}
            height={1280}
            className="h-auto max-h-[60vh] w-full rounded-lg border border-gray-200 object-contain shadow-lg dark:border-gray-700"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/2026/roadmap-badges-grid.png"
            alt="Badges grid showing Creator and Product of the Day"
            width={1240}
            height={1024}
            className="h-auto max-h-[60vh] w-full rounded-lg border border-gray-200 object-contain shadow-lg dark:border-gray-700"
          />
        </div>
        <div className="w-1/3">
          <Image
            src="/2026/roadmap-badges-tweet.png"
            alt="Creator sharing Product of the Day badge on X"
            width={1024}
            height={1024}
            className="h-auto max-h-[60vh] w-full rounded-lg border border-gray-200 object-contain shadow-lg dark:border-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
