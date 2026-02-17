export default function SlideRoadmapMigrations() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-1 text-3xl font-bold tracking-tighter text-gray-900 md:mb-3 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        Migrations
      </h1>
      <p className="mb-6 text-base text-gray-500 md:mb-10 md:text-xl lg:text-2xl dark:text-gray-400">
        To speed up shipping
      </p>
      <div className="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            <a
              href="https://github.com/antiwork/gumroad/issues/3028"
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit hover:underline"
            >
              Inertia
            </a>
          </h2>
          <p className="mb-4 text-base text-gray-500 md:text-lg dark:text-gray-400">
            React on Rails → Single Page App
          </p>
          <div className="mb-1 text-4xl font-bold text-pink-500 md:text-5xl">
            9
          </div>
          <p className="mb-4 text-base text-gray-500 md:text-lg dark:text-gray-400">
            pages remaining
          </p>
          <ul className="space-y-1 text-base text-gray-600 md:text-lg dark:text-gray-400">
            <li>
              <a
                href="https://github.com/antiwork/gumroad/issues/3061"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:underline"
              >
                Product pages
              </a>
            </li>
            <li>
              <a
                href="https://github.com/antiwork/gumroad/issues/3047"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:underline"
              >
                Discover page
              </a>
            </li>
            <li>
              <a
                href="https://github.com/antiwork/gumroad/issues/3030"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:underline"
              >
                Edit product page
              </a>
            </li>
            <li>
              <a
                href="https://github.com/antiwork/gumroad/issues/3045"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:underline"
              >
                Communities
              </a>
            </li>
            <li>
              <a
                href="https://github.com/antiwork/gumroad/issues/3146"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:underline"
              >
                User page & follow
              </a>
            </li>
            <li className="text-gray-400 dark:text-gray-500">+ 4 more pages</li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Tailwind
          </h2>
          <p className="mb-4 text-base text-gray-500 md:text-lg dark:text-gray-400">
            SCSS → Tailwind
          </p>
          <div className="mb-1 text-4xl font-bold text-pink-500 md:text-5xl">
            4
          </div>
          <p className="mb-4 text-base text-gray-500 md:text-lg dark:text-gray-400">
            files remaining
          </p>
          <ul className="space-y-1 text-base text-gray-600 md:text-lg dark:text-gray-400">
            <li>
              <a
                href="https://github.com/antiwork/gumroad/issues/3008"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:underline"
              >
                Global & legacy styles
              </a>
            </li>
            <li>
              <a
                href="https://github.com/antiwork/gumroad/issues/3009"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:underline"
              >
                Email styles
              </a>
            </li>
            <li>
              <a
                href="https://github.com/antiwork/gumroad/issues/3010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:underline"
              >
                Rich text editor
              </a>
            </li>
            <li>
              <a
                href="https://github.com/antiwork/gumroad/issues/3011"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:underline"
              >
                Icons
              </a>
            </li>
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 p-5 md:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Expo
          </h2>
          <p className="mb-4 text-base text-gray-500 md:text-lg dark:text-gray-400">
            Brand new mobile apps
          </p>
          <div className="mb-1 text-4xl font-bold text-pink-500 md:text-5xl">
            New
          </div>
          <p className="mb-4 text-base text-gray-500 md:text-lg dark:text-gray-400">
            mobile-first experience
          </p>
          <ul className="space-y-1 text-base text-gray-600 md:text-lg dark:text-gray-400">
            <li>Native iOS & Android</li>
            <li>Built with React Native</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
