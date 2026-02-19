import Image from "next/image";

const teamMembers = [
  {
    name: "Daniel Vassallo",
    role: "Head of Product",
    image: "/2026/daniel-vassallo.jpeg",
  },
  {
    name: "Gianfranco Piana",
    role: "Engineer",
    image: "/2026/gianfranco-piana.jpeg",
  },
  {
    name: "Nyoman Jyotisa",
    role: "Engineer",
    image: "/2026/nyoman-jyotisa.png",
  },
  {
    name: "Sriram Krishnan",
    role: "Customer Support",
    image: "/2026/sriram-krishnan.jpeg",
  },
  {
    name: "Sherry Ning",
    role: "Customer Support",
    image: "/2026/sherry-ning.jpeg",
  },
  {
    name: "Emmanuel Cousin",
    role: "Engineer",
    image: "/2026/emmanuel-cousin.jpeg",
  },
];

export default function SlideNewTeamMembers() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="mb-12 text-2xl font-bold text-gray-900 md:mb-16 md:text-4xl lg:text-5xl dark:text-white">
        New Team Members
      </h1>
      <div className="flex flex-wrap items-start justify-center gap-8 px-4 md:gap-12 lg:gap-16">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center gap-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full md:h-52 md:w-52 lg:h-64 lg:w-64">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
                {member.name}
              </p>
              <p className="text-base text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
