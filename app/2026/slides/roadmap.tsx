export default function SlideRoadmap() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-6 text-3xl font-bold tracking-tighter text-gray-900 md:mb-10 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        2026 Roadmap
      </h1>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-3 md:grid-cols-2 md:gap-5 lg:gap-6">
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Migrations
          </h2>
          <p className="text-base text-gray-500 md:text-lg dark:text-gray-400">
            To speed up shipping
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Features
          </h2>
          <p className="text-base text-gray-500 md:text-lg dark:text-gray-400">
            New use cases
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Creator Admin
          </h2>
          <p className="text-base text-gray-500 md:text-lg dark:text-gray-400">
            For existing power users
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Bugs & Performance
          </h2>
          <p className="text-base text-gray-500 md:text-lg dark:text-gray-400">
            Reliability for everyone
          </p>
        </div>
      </div>
    </div>
  );
}
