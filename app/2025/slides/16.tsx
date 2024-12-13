export default function Slide16() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">
        Anti-Work Software
      </h1>
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="text-6xl font-bold text-blue-600">W</div>
          <div className="text-4xl">=</div>
          <div className="text-6xl font-bold text-blue-600">F</div>
          <div className="text-4xl">×</div>
          <div className="text-6xl font-bold text-blue-600">d</div>
        </div>
        <div className="prose">
          <ul>
            <li>
              Make the best software ubiquitous through AI, open source, and
              serverless
            </li>
            <li>
              Power every part of every business like WordPress powers the
              internet
            </li>
            <li>
              Save{" "}
              <span
                className="group relative cursor-help"
                title="time spent on repetitive tasks"
              >
                time
              </span>
              {", "}
              <span
                className="group relative cursor-help"
                title="money spent on expensive software"
              >
                money
              </span>
              {", and "}
              <span
                className="group relative cursor-help"
                title="energy spent on business operations"
              >
                energy
              </span>
            </li>
            <li>Make Work Play</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
