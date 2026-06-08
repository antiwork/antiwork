// Team avatars — skeuomorphic gradient "monogram" spheres with a soft inner
// highlight and drop shadow. Real headshots can be dropped in later by setting
// `img` on a member; until then the polished monogram keeps the row consistent.
const TEAM = [
  { name: "Sahil", initials: "S", from: "#a78bfa", to: "#6d28d9" },
  { name: "Gianfranco", initials: "G", from: "#fdba74", to: "#c2410c" },
  { name: "Ershad", initials: "E", from: "#6ee7b7", to: "#047857" },
  { name: "Mac", initials: "M", from: "#7dd3fc", to: "#0369a1" },
  { name: "Jyo", initials: "J", from: "#f9a8d4", to: "#be185d" },
  { name: "Michelle", initials: "Mi", from: "#fcd34d", to: "#b45309" },
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
              background: `radial-gradient(circle at 32% 28%, ${m.from} 0%, ${m.to} 78%)`,
              boxShadow: `
                0 6px 14px -4px rgba(0,0,0,0.35),
                0 2px 4px -1px rgba(0,0,0,0.2),
                inset 0 2px 3px rgba(255,255,255,0.55),
                inset 0 -5px 9px rgba(0,0,0,0.28)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* glossy top highlight */}
            <span
              style={{
                position: "absolute",
                top: 5,
                left: 9,
                right: 9,
                height: 20,
                borderRadius: "50%",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)",
                pointerEvents: "none",
              }}
            />
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "ui-rounded, -apple-system, system-ui, sans-serif",
                textShadow: "0 1px 2px rgba(0,0,0,0.35)",
                letterSpacing: m.initials.length > 1 ? "-0.02em" : "0",
              }}
            >
              {m.initials}
            </span>
          </div>
          <span style={{ fontSize: 12, color: "#555" }}>{m.name}</span>
        </div>
      ))}
    </div>
  );
}
