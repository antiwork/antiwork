export default function SlideOfficeCompleted() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-4 text-3xl font-bold tracking-tighter text-gray-900 md:mb-8 md:text-5xl lg:mb-12 lg:text-6xl xl:text-7xl dark:text-white">
        The Office (Completed)
      </h1>
      <div className="grid w-full max-w-6xl grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
        <img
          src="https://assets.gumroad.com/assets/careers/office-4-4a7747279c6c0b1468f4b2a0d887da3a71b607b2bdfef66a28cf6d8053b01b2e.jpg"
          alt="Office photo 1"
          className="h-full w-full rounded-lg object-cover shadow-lg"
        />
        <img
          src="https://assets.gumroad.com/assets/careers/office-1-e30ffbe31f6a9ad300264c981b77e810e5cd6eb3a2c63bf38b5f92da85c72e9b.jpg"
          alt="Office photo 2"
          className="h-full w-full rounded-lg object-cover shadow-lg"
        />
        <img
          src="https://assets.gumroad.com/assets/careers/office-2-48f5a438e1fcfab486b0eed9cae68e44823ad0749df05b7991754bc712b6225d.jpg"
          alt="Office photo 3"
          className="h-full w-full rounded-lg object-cover shadow-lg"
        />
        <img
          src="https://assets.gumroad.com/assets/careers/office-3-4ab916a614c8fa9805ffe66bd9668545c79c162017f512d7f24ff8964b670a83.jpg"
          alt="Office photo 4"
          className="h-full w-full rounded-lg object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
