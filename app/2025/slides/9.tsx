export default function Slide9() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-20">
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <span className="text-xl font-bold">AI</span>
        </div>
        <div className="absolute bottom-[300px] right-0 -translate-x-12 rotate-[66deg] origin-bottom-left">
          <span className="text-xl font-bold">Serverless</span>
        </div>
        <div className="absolute bottom-[300px] left-0 translate-x-8 -rotate-[66deg] origin-bottom-right">
          <span className="text-xl font-bold">Open source</span>
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