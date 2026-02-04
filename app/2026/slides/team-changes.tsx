export default function SlideTeamChanges() {
  const team = [
    { name: "Sahil Lavingia", role: "Chairman" },
    { name: "Ershad Kunnakkadan", role: "CEO" },
    { name: "Steve Kaye", role: "Customer Support + Risk" },
    { name: "Michelle Larney", role: "Customer Support" },
    { name: "Vatsal Kaushik", role: "Customer Support" },
    { name: "Sherry Ning", role: "Customer Support" },
    { name: "Sriram Krishnan", role: "Customer Support" },
    { name: "Daniel Vassallo", role: "Head of Product" },
    { name: "Laura García", role: "Senior Designer" },
    { name: "Harbaksh Chhabra", role: "Senior Software Engineer" },
    { name: "Emmanuel Cousin", role: "Senior Software Engineer" },
    { name: "Jono Mingard", role: "Senior Software Engineer" },
    { name: "Gianfranco Piana", role: "Software Engineer" },
    { name: "Nyoman Jyotisa", role: "Software Engineer" },
  ];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <h1 className="mb-6 text-3xl font-bold tracking-tighter text-gray-900 md:mb-10 md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
        Team
      </h1>
      <div className="grid w-full max-w-4xl grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2 md:gap-y-3">
        {team.map((member) => (
          <div key={member.name} className="flex items-baseline justify-between border-b border-gray-100 py-1.5 md:py-2 dark:border-gray-800">
            <span className="text-base font-medium text-gray-900 md:text-lg lg:text-xl dark:text-white">
              {member.name}
            </span>
            <span className="ml-4 text-sm text-gray-500 md:text-base dark:text-gray-400">
              {member.role}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-6 flex w-full max-w-4xl gap-4 md:mt-10 md:gap-6">
        <div className="flex-1 rounded-xl border border-gray-200 p-3 text-center md:p-4 dark:border-gray-700">
          <div className="text-2xl font-bold text-pink-500 md:text-3xl">5</div>
          <div className="text-sm text-gray-500 md:text-base dark:text-gray-400">Support</div>
        </div>
        <div className="flex-1 rounded-xl border border-gray-200 p-3 text-center md:p-4 dark:border-gray-700">
          <div className="text-2xl font-bold text-pink-500 md:text-3xl">1</div>
          <div className="text-sm text-gray-500 md:text-base dark:text-gray-400">Design</div>
        </div>
        <div className="flex-1 rounded-xl border border-gray-200 p-3 text-center md:p-4 dark:border-gray-700">
          <div className="text-2xl font-bold text-pink-500 md:text-3xl">1</div>
          <div className="text-sm text-gray-500 md:text-base dark:text-gray-400">Product</div>
        </div>
        <div className="flex-1 rounded-xl border border-gray-200 p-3 text-center md:p-4 dark:border-gray-700">
          <div className="text-2xl font-bold text-pink-500 md:text-3xl">5</div>
          <div className="text-sm text-gray-500 md:text-base dark:text-gray-400">Engineering</div>
        </div>
      </div>
    </div>
  );
}
