import Image from "next/image";

export default function SlideCeoTransition() {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/2026/team-photo.jpg"
        alt="CEO Transition"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex items-start justify-center pt-8 md:pt-12">
        <h1
          className="text-4xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)" }}
        >
          CEO Transition
        </h1>
      </div>
    </div>
  );
}
