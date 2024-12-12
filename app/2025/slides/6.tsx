export default function Slide6() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">
        2025 Product Focus
      </h1>
      <div className="prose">
        <ul>
          <li>
            Achieve product-market fit for existing products before
            launching new ones
          </li>
          <li>
            Narrow scope of each product to core mission
            <ul>
              <li>Gumroad: Core creator experience to reduce churn</li>
              <li>Helper: Best possible responses, not full platform</li>
              <li>Flexile: Profit sharing for open source contributors</li>
              <li>Iffy: Little-code integrations</li>
              <li>Shortest: Replace e2e tests with natural language</li>
            </ul>
          </li>
          <li>
            Open source projects and build commercial open source model
          </li>
          <li>New products must be additive to existing ecosystem</li>
        </ul>
      </div>
    </div>
  );
}