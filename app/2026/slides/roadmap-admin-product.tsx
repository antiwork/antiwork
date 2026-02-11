import Image from "next/image";

export default function SlideRoadmapAdminProduct() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <p className="mb-2 text-base text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
        Creator Admin
      </p>
      <h1 className="mb-6 text-3xl font-bold tracking-tighter text-gray-900 md:mb-8 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        <a
          href="https://github.com/antiwork/gumroad/issues/1837"
          target="_blank"
          rel="noopener noreferrer"
          className="text-inherit hover:underline"
        >
          Rethink Product Creation & Edit
        </a>
      </h1>
      <div className="flex w-full max-w-6xl gap-4 md:gap-6">
        <div className="w-1/2">
          <Image
            src="/2026/roadmap-rethink-product-site.png"
            alt="New product site editor"
            width={1280}
            height={960}
            className="h-auto max-h-[60vh] w-full rounded-lg object-contain shadow-lg"
          />
        </div>
        <div className="w-1/2">
          <Image
            src="/2026/roadmap-rethink-product-receipt.png"
            alt="New product receipt editor with publish modal"
            width={1440}
            height={810}
            className="h-auto max-h-[60vh] w-full rounded-lg object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
