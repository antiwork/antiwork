export default function SlideFlexileGitHub() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-4 text-2xl font-bold tracking-tighter text-gray-900 hover:opacity-80 md:mb-8 md:text-4xl lg:mb-12 lg:text-5xl xl:text-6xl dark:text-white">
        Flexile GitHub Integration
      </h1>
      <div className="flex max-h-[70vh] w-full max-w-5xl items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="max-h-full max-w-full rounded-lg shadow-lg"
        >
          <source
            src="/2025/shipped_features/Flexile GitHub integration.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
