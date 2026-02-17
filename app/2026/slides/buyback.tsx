import Image from "next/image";

export default function SlideBuyback() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-8 text-5xl font-bold tracking-tighter text-gray-900 md:mb-12 md:text-7xl lg:text-8xl dark:text-white">
        Buyback & Dividend
      </h1>

      <p className="mb-10 max-w-4xl text-center text-xl text-gray-600 md:mb-12 md:text-3xl dark:text-gray-400">
        We are offering shareholders two opportunities:
      </p>

      <div className="mb-12 flex max-w-6xl flex-col gap-8 md:flex-row md:gap-12">
        <div className="flex-1 rounded-3xl border-2 border-gray-200 p-8 md:p-10 dark:border-gray-700">
          <h2 className="mb-4 text-2xl font-semibold text-pink-500 md:text-3xl lg:text-4xl">
            Cash Dividend
          </h2>
          <p className="text-lg text-gray-600 md:text-xl lg:text-2xl dark:text-gray-400">
            We plan to distribute dividends pro rata to all shareholders.
          </p>
        </div>

        <div className="flex-1 rounded-3xl border-2 border-gray-200 p-8 md:p-10 dark:border-gray-700">
          <h2 className="mb-4 text-2xl font-semibold text-pink-500 md:text-3xl lg:text-4xl">
            Share Buyback
          </h2>
          <p className="text-lg text-gray-600 md:text-xl lg:text-2xl dark:text-gray-400">
            We plan to repurchase shares via a reverse Dutch auction.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/2026/buyback-qr.png"
          alt="Survey QR Code"
          width={220}
          height={220}
          className="rounded-xl"
        />
        <p className="mt-4 text-base text-gray-500 md:text-lg dark:text-gray-400">
          Scan to access the{" "}
          <a
            href="https://forms.gle/Mp721kTJGvEddiyy6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 underline hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300"
          >
            survey
          </a>
        </p>
      </div>

      <p className="mt-8 max-w-4xl text-center text-sm text-gray-400 dark:text-gray-500">
        Subject to board approval and applicable legal requirements. This does
        not constitute an offer to purchase securities. Details will be provided
        separately.
      </p>
    </div>
  );
}
