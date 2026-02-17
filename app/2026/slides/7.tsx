import Link from "next/link";

export default function Slide7() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <Link href="/">
        <h1 className="text-4xl font-bold tracking-tighter text-gray-900 hover:opacity-80 md:text-6xl lg:text-8xl xl:text-9xl dark:text-white">
          make work play
        </h1>
      </Link>
    </div>
  );
}
