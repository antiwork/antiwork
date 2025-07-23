import React from "react";

interface FontProps {
  text?: string;
  color?: string;
  size?: number;
  onOClick?: () => void;
  oRotation?: number;
}

export function Font({
  text = "ANTIWORK",
  color = "#000000",
  size = 176,
  onOClick,
  oRotation = 0,
}: FontProps) {
  // Character definitions using SVG and width
  const charDefinitions: any = {
    A: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 176 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="88,0 0,176 176,176" fill={color} />
        </svg>
      ),
    },
    B: {
      width: 176,
      render: (color: string) => (
        <svg
          width={`${(176 * size) / 176}`}
          height={size}
          viewBox={`0 0 176 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 176,44 0,88" fill={color} />
          <polygon points="0,88 176,132 0,176" fill={color} />
        </svg>
      ),
    },
    C: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="176,0 0,88 176,176" fill={color} />
        </svg>
      ),
    },
    D: {
      width: 176,
      render: (color: string) => (
        <svg
          width={`${(176 * size) / 176}`}
          height={size}
          viewBox={`0 0 176 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 176,88 0,176" fill={color} />
        </svg>
      ),
    },
    E: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 176,0 0,44" fill={color} />
          <polygon points="0,44 176,88 0,132" fill={color} />
          <polygon points="0,132 176,176 0,176" fill={color} />
        </svg>
      ),
    },
    F: {
      width: 176,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 176,0 0,88" fill={color} />
          <polygon points="0,88 176,88 0,176" fill={color} />
        </svg>
      ),
    },
    G: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 176,0 0,176" fill={color} />
          <polygon points="88,88 176,88 176,176" fill={color} />
        </svg>
      ),
    },
    H: {
      width: 200,
      render: (color: string) => (
        <svg
          width={`${(200 * size) / 176}`}
          height={size}
          viewBox={`0 0 200 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="20,0 20,176 108,88" fill={color} />
          <polygon points="196,0 196,176 108,88" fill={color} />
        </svg>
      ),
    },
    I: {
      width: 112,
      render: (color: string) => (
        <svg
          width={`${(100 * size) / 176}`}
          height={size}
          viewBox={`0 0 70 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="16" y="0" width="38" height="176" fill={color} />
        </svg>
      ),
    },
    J: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="176,0 0,176 176,176" fill={color} />
        </svg>
      ),
    },
    K: {
      width: 200,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="0" y="0" width="38" height="176" fill={color} />
          <polygon points="176,0 176,176 38,88" fill={color} />
        </svg>
      ),
    },
    L: {
      width: 200,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 176,176 0,176" fill={color} />
        </svg>
      ),
    },
    M: {
      width: 260,
      render: (color: string) => (
        <svg
          width={`${(250 * size) / 176}`}
          height={size}
          viewBox={`0 0 250 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,176 62,0 125,176" fill={color} />
          <polygon points="125,176 188,0 250,176" fill={color} />
        </svg>
      ),
    },
    N: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 138,176 0,176" fill={color} />
          <rect x="138" y="0" width="38" height="176" fill={color} />
        </svg>
      ),
    },
    O: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="88,0 176,88 88,176 0,88" fill={color} />
        </svg>
      ),
    },
    P: {
      width: 176,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 176,0 0,176" fill={color} />
        </svg>
      ),
    },
    Q: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="88,0 176,88 88,176 0,88" fill={color} />
          <polygon points="133,133 176,133 176,176" fill={color} />
        </svg>
      ),
    },
    R: {
      width: 200,
      render: (color: string) => (
        <svg
          width={`${(176 * size) / 176}`}
          height={size}
          viewBox={`0 0 176 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 176,0 0,138" fill={color} />
          <rect x="0" y="138" width="176" height="38" fill={color} />
        </svg>
      ),
    },
    S: {
      width: 200,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="0" y="69" width="176" height="38" fill={color} />
          <polygon points="0,0 176,0 0,69" fill={color} />
          <polygon points="176,107 0,176 176,176" fill={color} />
        </svg>
      ),
    },
    T: {
      width: 185,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="0" y="0" width="176" height="38" fill={color} />
          <polygon points="0,176 176,176 88,38" fill={color} />
        </svg>
      ),
    },
    U: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="18,0 106,176 194,0" fill={color} />
        </svg>
      ),
    },
    V: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 88,176 176,0" fill={color} />
        </svg>
      ),
    },
    W: {
      width: 276,
      render: (color: string) => (
        <svg
          width={`${(250 * size) / 176}`}
          height={size}
          viewBox={`0 0 250 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 62,176 125,0" fill={color} />
          <polygon points="125,0 188,176 250,0" fill={color} />
        </svg>
      ),
    },
    X: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="0,0 176,0 88,88" fill={color} />
          <polygon points="0,176 176,176 88,88" fill={color} />
        </svg>
      ),
    },
    Y: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <polygon points="176,138 176,0 0,0" fill={color} />
          <rect x="0" y="138" width="176" height="38" fill={color} />
        </svg>
      ),
    },
    Z: {
      width: 212,
      render: (color: string) => (
        <svg
          width={`${(212 * size) / 176}`}
          height={size}
          viewBox={`0 0 212 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="0" y="69" width="176" height="38" fill={color} />
          <polygon points="176,0 0,0 176,69" fill={color} />
          <polygon points="0,107 176,176 0,176" fill={color} />
        </svg>
      ),
    },
    "2": {
      width: 222,
      render: (color: string) => (
        <svg
          width={`${(200 * size) / 176}`}
          height={size}
          viewBox={`0 0 200 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <rect x="0" y="69" width="200" height="38" fill={color} />
          <polygon points="200,0 0,0 200,69" fill={color} />
          <polygon points="0,107 200,176 0,176" fill={color} />
        </svg>
      ),
    },
    " ": {
      width: 90,
      render: () => <svg width={`${(88 * size) / 176}`} height={size}></svg>,
    },
    ".": {
      width: 70,
      render: (color: string) => (
        <svg
          width={`${(70 * size) / 176}`}
          height={size}
          viewBox={`0 0 70 176`}
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx="35" cy="156" r="20" fill={color} />
        </svg>
      ),
    },
  };

  const renderText = () => {
    let prevChar = "";

    return (
      <div
        className="text-row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {Array.from(text.toUpperCase()).map((char, charIndex) => {
          const charDef = charDefinitions[char] || charDefinitions[" "];

          const charStyles: React.CSSProperties = {
            width: `${(charDef.width * size) / 176}px`,
            height: `${size}px`,
            position: "relative",
            margin: "0",
            padding: "0",
            marginRight: `${(10 * size) / 176}px`,
            marginLeft:
              (char === "O" &&
                (prevChar === "W" ||
                  prevChar === "V" ||
                  prevChar === "L" ||
                  prevChar === "O")) ||
              (char === "V" && prevChar === "L")
                ? `${(-20 * size) / 176}px`
                : "",
          };

          const isClickableO = char === "O" && onOClick;

          const result = (
            <div
              className={`char ${isClickableO ? "cursor-pointer" : ""}`}
              style={charStyles}
              key={`char-${charIndex}`}
              onClick={isClickableO ? onOClick : undefined}
            >
              <div
                style={{
                  transform: isClickableO
                    ? `rotate(${oRotation}deg)`
                    : undefined,
                  transition: isClickableO
                    ? "transform 0.3s ease, opacity 0.2s ease"
                    : undefined,
                  opacity: 1,
                  transformOrigin: isClickableO ? "42% center" : undefined,
                }}
                className={isClickableO ? "hover:opacity-80" : ""}
              >
                {charDef.render(color)}
              </div>
            </div>
          );

          prevChar = char; // Remember current character for next iteration
          return result;
        })}
      </div>
    );
  };

  return <div className="font-container">{renderText()}</div>;
}
