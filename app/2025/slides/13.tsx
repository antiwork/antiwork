export default function Slide12() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <h1 className="text-[4rem] font-bold tracking-tighter text-gray-900 dark:text-white hover:opacity-80 mb-12">
        Flexile: custom docs
      </h1>
      <div className="mb-12">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-lg shadow-lg"
          width="1280"
        >
          <source src="/2024/q4/flexile-support-custom-docs.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
