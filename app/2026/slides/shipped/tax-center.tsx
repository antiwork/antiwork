import Image from "next/image";

export default function SlideTaxCenter() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-4 text-2xl font-bold tracking-tighter text-gray-900 hover:opacity-80 md:mb-8 md:text-4xl lg:mb-12 lg:text-5xl xl:text-6xl dark:text-white">
        Tax Center
      </h1>
      <div className="relative max-h-[70vh] w-full max-w-5xl">
        <Image
          src="/2026/tax-center-v2.png"
          alt="Tax Center"
          width={1280}
          height={720}
          className="h-auto max-h-[70vh] w-full rounded-lg object-contain shadow-lg"
        />
      </div>
    </div>
  );
}
