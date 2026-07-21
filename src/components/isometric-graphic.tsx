import { motion } from "framer-motion";

type BlockColor = "primary" | "dark" | "light";

interface Block {
  col: number;
  row: number;
  height: number;
  color: BlockColor;
  glow?: boolean;
  delay?: number;
}

const PALETTE: Record<BlockColor, { top: string; left: string; right: string }> = {
  primary: { top: "#93c5fd", left: "#2563eb", right: "#1d4ed8" },
  dark: { top: "#334155", left: "#0f172a", right: "#020617" },
  light: { top: "#ffffff", left: "#f1f5f9", right: "#dbe3ee" },
};

const BLOCKS: Block[] = [
  { col: -2, row: 0, height: 88, color: "dark", delay: 0.1 },
  { col: -1, row: -1, height: 132, color: "light", delay: 0.3 },
  { col: -1, row: 1, height: 66, color: "dark", delay: 0.5 },
  { col: 0, row: -2, height: 58, color: "light", delay: 0.2 },
  { col: 0, row: 0, height: 182, color: "light", glow: true, delay: 0 },
  { col: 1, row: -1, height: 148, color: "primary", glow: true, delay: 0.4 },
  { col: 1, row: 1, height: 112, color: "primary", delay: 0.15 },
  { col: 2, row: -2, height: 64, color: "light", delay: 0.35 },
  { col: 2, row: 0, height: 96, color: "dark", delay: 0.25 },
];

const HALF_W = 46;
const HALF_H = 24;
const ORIGIN_X = 300;
const ORIGIN_Y = 258;

function toPath(pts: number[][]) {
  return `M ${pts.map((p) => p.join(",")).join(" L ")} Z`;
}

function geometry(b: Block) {
  const cx = ORIGIN_X + (b.col - b.row) * HALF_W;
  const groundY = ORIGIN_Y + (b.col + b.row) * HALF_H;
  const topY = groundY - b.height;

  const top = [
    [cx, topY - HALF_H],
    [cx + HALF_W, topY],
    [cx, topY + HALF_H],
    [cx - HALF_W, topY],
  ];
  const left = [
    [cx - HALF_W, topY],
    [cx, topY + HALF_H],
    [cx, topY + HALF_H + b.height],
    [cx - HALF_W, topY + b.height],
  ];
  const right = [
    [cx, topY + HALF_H],
    [cx + HALF_W, topY],
    [cx + HALF_W, topY + b.height],
    [cx, topY + HALF_H + b.height],
  ];

  return { top, left, right, cx, topCenterY: topY, groundCx: cx, groundY, depth: b.col + b.row };
}

interface IsometricStackProps {
  className?: string;
}

export function IsometricStack({ className = "" }: IsometricStackProps) {
  const sorted = [...BLOCKS].sort((a, b) => a.col + a.row - (b.col + b.row));
  const geos = sorted.map((b) => ({ block: b, geo: geometry(b) }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full ${className}`}
    >
      <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto overflow-visible">
        <defs>
          <radialGradient id="isoGlow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="rgba(37,99,235,0.16)" />
            <stop offset="100%" stopColor="rgba(37,99,235,0)" />
          </radialGradient>
        </defs>

        {/* Ambient glow */}
        <ellipse cx="300" cy="230" rx="280" ry="200" fill="url(#isoGlow)" />

        {/* Ground footprint diamonds */}
        {geos.map(({ geo }, i) => (
          <path
            key={`ground-${i}`}
            d={toPath([
              [geo.cx, geo.groundY - HALF_H],
              [geo.cx + HALF_W, geo.groundY],
              [geo.cx, geo.groundY + HALF_H],
              [geo.cx - HALF_W, geo.groundY],
            ])}
            fill="none"
            stroke="rgba(37,99,235,0.16)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
        ))}

        {/* Blocks, back to front */}
        {geos.map(({ block, geo }, i) => {
          const pal = PALETTE[block.color];
          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (block.delay ?? 0) + 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <path d={toPath(geo.left)} fill={pal.left} />
              <path d={toPath(geo.right)} fill={pal.right} />
              {block.color === "dark" &&
                Array.from({ length: 4 }, (_, r) => {
                  const t = geo.topCenterY + HALF_H + 14 + r * ((block.height - 24) / 4);
                  return (
                    <line
                      key={r}
                      x1={geo.cx + 4}
                      y1={t}
                      x2={geo.cx + HALF_W - 6}
                      y2={t - (HALF_H - 4) / 2}
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1.5"
                    />
                  );
                })}
              <path
                d={toPath(geo.top)}
                fill={pal.top}
                stroke="rgba(15,23,42,0.06)"
                strokeWidth="1"
              />
              {block.glow && (
                <motion.circle
                  cx={geo.cx}
                  cy={geo.topCenterY}
                  r="5"
                  fill="#2563eb"
                  animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.25, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: block.delay }}
                />
              )}
            </motion.g>
          );
        })}
      </svg>
    </motion.div>
  );
}

export function IsometricStackCompact({ className = "" }: IsometricStackProps) {
  return <IsometricStack className={className} />;
}
