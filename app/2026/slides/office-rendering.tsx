export default function SlideOfficeRendering() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tighter text-gray-900 md:mb-8 md:text-5xl lg:mb-12 lg:text-6xl xl:text-7xl dark:text-white">
        The Office (Rendering)
      </h1>
      <div className="flex w-full max-w-5xl flex-1 items-center justify-center">
        <img
          src="https://antiwork.com/_next/image?url=%2F2024%2Fq4%2Foffice.png&w=3840&q=75"
          alt="Office rendering"
          className="max-h-[70vh] w-auto rounded-lg object-contain shadow-lg"
        />
      </div>
    </div>
  );
}
