import { Logo } from "@/app/components/Logo";

export default function SlideSmallBets() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="text-center text-3xl font-bold tracking-tighter text-gray-900 hover:opacity-80 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        Small Bets
        <br />
        is now a part of
        <br />
        <span className="inline-flex items-center">Antiwork</span>
      </h1>
    </div>
  );
}
