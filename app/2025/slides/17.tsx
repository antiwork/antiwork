export default function Slide17() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Introducing...
      </h1>

      <pre className="font-mono bg-gray-100 rounded-lg p-4">
        <code>
          <span className="text-gray-500">npx</span> create-antiwork-app
        </code>
      </pre>
      <div className="text-gray-700">
        <div className="flex gap-4 mt-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
            TypeScript
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
            React
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
            Next.js
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
            Tailwind
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
            Vercel
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
            Stripe
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
            Resend
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
            Clerk
          </span>
        </div>
      </div>
    </div>
  );
}