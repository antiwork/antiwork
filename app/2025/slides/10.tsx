export default function Slide10() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-20">
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <span className="text-xl font-bold">Amazing</span>
        </div>
        <div className="absolute bottom-[280px] right-0 -translate-x-24 rotate-[66deg] origin-bottom-left">
          <span className="text-xl font-bold">Free</span>
        </div>
        <div className="absolute bottom-[280px] left-0 translate-x-24 -rotate-[66deg] origin-bottom-right">
          <span className="text-xl font-bold">Easy</span>
        </div>
        <svg
          width={500}
          height={500}
          viewBox="0 0 28 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="14,2.5 22,21.5 6,21.5" />
          <polygon points="14,2.5 22,21.5 6,21.5" />
        </svg>
      </div>
    </div>
  );
}
