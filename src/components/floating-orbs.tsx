export function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      <div
        className="absolute rounded-full"
        style={{
          width: 700, height: 700, top: "-15%", right: "-10%",
          background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
          animation: "orbDrift 22s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500, bottom: "5%", left: "-8%",
          background: "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
          animation: "orbDrift 28s ease-in-out infinite reverse",
          willChange: "transform",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 300, height: 300, top: "40%", left: "40%",
          background: "radial-gradient(circle, rgba(99,179,237,0.04) 0%, transparent 70%)",
          animation: "orbDrift 18s ease-in-out infinite 3s",
          willChange: "transform",
        }}
      />
    </div>
  );
}

export function HeroParticles() {
  const particles = [
    { id: 0, size: 2, left: 12, top: 20, delay: 0,   dur: 12 },
    { id: 1, size: 3, left: 35, top: 65, delay: 2,   dur: 14 },
    { id: 2, size: 2, left: 58, top: 30, delay: 4,   dur: 11 },
    { id: 3, size: 2, left: 78, top: 80, delay: 1,   dur: 13 },
    { id: 4, size: 3, left: 90, top: 45, delay: 3,   dur: 15 },
    { id: 5, size: 2, left: 22, top: 88, delay: 5,   dur: 12 },
    { id: 6, size: 2, left: 68, top: 15, delay: 1.5, dur: 14 },
    { id: 7, size: 3, left: 45, top: 55, delay: 6,   dur: 10 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-blue-400"
          style={{
            width: p.size, height: p.size,
            left: `${p.left}%`, top: `${p.top}%`,
            opacity: 0,
            animation: `particleDrift ${p.dur}s ease-in-out ${p.delay}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}
    </div>
  );
}
