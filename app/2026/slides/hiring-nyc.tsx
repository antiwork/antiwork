import Image from "next/image";

export default function SlideHiringNyc() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-8 md:p-12">
      <h1 className="mb-8 text-2xl font-bold text-gray-900 md:mb-12 md:text-4xl lg:text-5xl dark:text-white">
        We are hiring in NYC
      </h1>
      <div className="relative w-full max-w-3xl flex-1">
        <Image
          src="/2026/open-roles.png"
          alt="Open roles: Senior Software Engineer, Senior Designer, Customer Support Specialist"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
