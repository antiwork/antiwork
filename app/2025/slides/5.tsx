import Image from "next/image";

export default function Slide5() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <div className="flex w-full flex-col items-center gap-8">
        <div className="text-center dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Customers
          </h2>
        </div>

        <div className="border-black-500 w-full rounded-lg border-4 bg-white p-8 text-center transition-colors hover:border-black dark:bg-gray-800">
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center">
              <Image
                src="/2024/q4/iffy.svg"
                alt="Iffy"
                width={170}
                height={48}
              />
            </div>
            <span className="text-lg text-gray-600">moderation</span>
          </div>
        </div>

        <div className="border-black-500 w-full rounded-lg border-4 bg-white p-8 text-center transition-colors hover:border-yellow-500 dark:bg-gray-800">
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center">
              <Image
                src="/2024/q4/Helper.svg"
                alt="Helper"
                width={166}
                height={48}
              />
            </div>
            <span className="text-lg text-gray-600">support</span>
          </div>
        </div>

        <div className="border-black-500 w-full rounded-lg border-4 bg-white p-16 text-center transition-colors hover:border-[rgba(255,144,232)] dark:bg-gray-800">
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center">
              <Image
                src="/2024/q4/Gumroad.svg"
                alt="Gumroad"
                width={400}
                height={96}
              />
            </div>
          </div>
        </div>

        <div className="border-black-500 w-full rounded-lg border-4 bg-white p-8 text-center transition-colors hover:border-orange-500 dark:bg-gray-800">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center">
              <div className="text-orange-500">
                <Image
                  src="/2024/q4/Shortest.svg"
                  alt="Shortest"
                  width={48}
                  height={48}
                />
              </div>
              <span className="ml-5 text-[48pt] font-semibold text-gray-900 dark:text-white">
                Shortest
              </span>
            </div>
            <span className="text-lg text-gray-600">QA</span>
          </div>
        </div>

        <div className="border-black-500 w-full rounded-lg border-4 bg-white p-8 text-center transition-colors hover:border-blue-500 dark:bg-gray-800">
          <div className="flex flex-col items-center gap-2">
            <div className="flex justify-center">
              <Image
                src="/2024/q4/Flexile.svg"
                alt="Flexile"
                width={200}
                height={48}
              />
            </div>
            <span className="text-lg text-gray-600">payroll & contractor management</span>
          </div>
        </div>

        <div className="text-center dark:bg-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Government
          </h2>
        </div>
      </div>
    </div>
  );
}
