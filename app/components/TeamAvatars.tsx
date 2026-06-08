// Team avatars — flat solid-color monogram circles. Real headshots can be
// dropped in later by setting `img` on a member; until then the monogram keeps
// the row consistent.
const TEAM = [
  { name: "Sahil", initials: "S", color: "#6d28d9" },
  { name: "Gianfranco", initials: "G", color: "#c2410c" },
  { name: "Ershad", initials: "E", color: "#047857" },
  { name: "Mac", initials: "M", color: "#0369a1" },
  { name: "Jyo", initials: "J", color: "#be185d" },
  { name: "Michelle", initials: "Mi", color: "#b45309" },
];

export function TeamAvatars() {
  return (
    <div className="mt-7 flex flex-wrap items-start gap-[22px]">
      {TEAM.map((m) => (
        <div key={m.name} className="flex w-16 flex-col items-center gap-2">
          <div
            className="relative flex h-14 w-14 items-center justify-center rounded-full"
            style={{
              background: m.color,
            }}
          >
            <span
              className={`text-[20px] font-bold text-white [font-family:ui-rounded,-apple-system,system-ui,sans-serif] ${
                m.initials.length > 1 ? "tracking-[-0.02em]" : "tracking-[0]"
              }`}
            >
              {m.initials}
            </span>
          </div>
          <span className="text-[12px] text-muted-2">{m.name}</span>
        </div>
      ))}
    </div>
  );
}
