export default function Slide12() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-20">
      <h1 className="text-[8rem] font-bold tracking-tighter text-gray-900 dark:text-white hover:opacity-80 mb-12">
        Open-source everything
      </h1>
      <ul className="space-y-8 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
        <li>✅ <a href="https://github.com/anti-work/shortest" className="hover:opacity-80 underline">Shortest</a> <span className="text-3xl text-gray-500">⭐️ 4.3k</span></li>
        <li>✅ <a href="https://github.com/anti-work/iffy" className="hover:opacity-80 underline">Iffy</a> <span className="text-3xl text-gray-500">⭐️ 175</span></li>
        <li><span className="text-gray-500 ml-2 mr-3">2/28</span> Helper</li>
        <li><span className="text-gray-500 ml-2 mr-3">3/31</span> Flexile</li>
        <li><span className="text-gray-500 ml-2 mr-3">4/4</span> Gumroad</li>
      </ul>
    </div>
  );
}
