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
    <div
      style={{
        marginTop: 28,
        display: "flex",
        flexWrap: "wrap",
        gap: 22,
        alignItems: "flex-start",
      }}
    >
      {TEAM.map((m) => (
        <div
          key={m.name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            width: 64,
          }}
        >
          <div
            style={{
              position: "relative",
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: m.color,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "ui-rounded, -apple-system, system-ui, sans-serif",
                letterSpacing: m.initials.length > 1 ? "-0.02em" : "0",
              }}
            >
              {m.initials}
            </span>
          </div>
          <span style={{ fontSize: 12, color: "var(--muted-2)" }}>
            {m.name}
          </span>
        </div>
      ))}
    </div>
  );
}
