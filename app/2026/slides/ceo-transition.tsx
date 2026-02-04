import Image from "next/image";

export default function SlideCeoTransition() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-6 text-4xl font-bold tracking-tighter text-gray-900 hover:opacity-80 md:mb-10 md:text-6xl lg:text-7xl xl:text-8xl dark:text-white">
        CEO Transition
      </h1>
      <div className="relative max-h-[60vh] w-full max-w-4xl">
        <Image
          src="/2026/team-photo.jpg"
          alt="CEO Transition"
          width={1500}
          height={1000}
          className="h-auto max-h-[60vh] w-full rounded-lg object-contain shadow-lg"
        />
      </div>
    </div>
  );
}
