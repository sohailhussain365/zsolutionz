export function ContactGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 480" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cg-body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <filter id="cg-shadow" x="-40%" y="-20%" width="180%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#1e3a8a" floodOpacity="0.18" />
        </filter>
        <style>{`
          .cg-pulse { animation: cgPulse 2.6s ease-in-out infinite; transform-origin: 300px 150px; }
          @keyframes cgPulse { 0%,100% { opacity:.15; transform:scale(0.9);} 50% { opacity:.5; transform:scale(1.15);} }
        `}</style>
      </defs>

      <g filter="url(#cg-shadow)">
        <polygon points="240,240 400,320 240,400 80,320" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        <polygon points="80,320 240,400 240,340 80,262" fill="#dbeafe" />
        <polygon points="400,320 240,400 240,340 400,262" fill="#bfdbfe" />
        <polygon points="80,262 240,340 400,262 240,190" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" />
        <polyline points="80,262 240,182 400,262" fill="none" stroke="#93c5fd" strokeWidth="1.5" />
        <polygon points="205,205 275,205 275,150 240,120 205,150" fill="url(#cg-body)" />
        <line x1="215" y1="165" x2="265" y2="165" stroke="#dbeafe" strokeWidth="3" strokeLinecap="round" />
        <line x1="215" y1="180" x2="255" y2="180" stroke="#dbeafe" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g transform="translate(330,150)" filter="url(#cg-shadow)">
        <path
          d="M-46,-30 h92 a14,14 0 0 1 14,14 v32 a14,14 0 0 1 -14,14 h-56 l-18,18 v-18 h-18 a14,14 0 0 1 -14,-14 v-32 a14,14 0 0 1 14,-14 z"
          fill="url(#cg-body)"
        />
        <circle cx="-18" cy="0" r="4" fill="#eff6ff" />
        <circle cx="0" cy="0" r="4" fill="#eff6ff" />
        <circle cx="18" cy="0" r="4" fill="#eff6ff" />
      </g>

      <circle className="cg-pulse" cx="300" cy="150" r="60" fill="none" stroke="#3b82f6" strokeWidth="2" />
    </svg>
  );
}