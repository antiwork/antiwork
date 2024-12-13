export default function Slide8() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">
        Why Open Source Everything?
      </h1>
      <div className="prose">
        <ul>
          <li>Compete with larger players through community</li>
          <li>Focus internal team on highest-impact work</li>
          <li>Community-driven features and roadmap</li>
          <li>Largest customers subsidize smallest ones</li>
          <li>Risky but necessary to scale with small team</li>
        </ul>
      </div>
    </div>
  );
}

Slide8.backgroundColor = "bg-teal-50";
Slide8.foregroundColor = "text-gray-900";
