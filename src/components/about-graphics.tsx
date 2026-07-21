export function AboutGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 480" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ag-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="ag-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="ag-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <filter id="ag-shadow" x="-40%" y="-20%" width="180%" height="160%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#1e3a8a" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#ag-shadow)">
        <g>
          <polygon points="240,210 380,285 240,360 100,285" fill="url(#ag-top)" opacity="0.14" />
          <polygon points="100,285 240,360 240,410 100,335" fill="#dbeafe" />
          <polygon points="380,285 240,360 240,410 380,335" fill="#bfdbfe" />
          <polygon points="240,210 380,285 240,360 100,285" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
        </g>

        <g>
          <polygon points="240,140 340,192 240,244 140,192" fill="url(#ag-top)" />
          <polygon points="140,192 240,244 240,278 140,226" fill="url(#ag-left)" />
          <polygon points="340,192 240,244 240,278 340,226" fill="url(#ag-right)" />
        </g>

        <g>
          <polygon points="240,88 300,120 240,152 180,120" fill="#93c5fd" />
          <polygon points="180,120 240,152 240,170 180,138" fill="#60a5fa" />
          <polygon points="300,120 240,152 240,170 300,138" fill="#3b82f6" />
        </g>

        <g transform="translate(240,74)">
          <circle r="30" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
          <path d="M0 -14 L11 -8 L11 4 C11 12 5 18 0 20 C-5 18 -11 12 -11 4 L-11 -8 Z" fill="#2563eb" />
          <path d="M-5 0 L-1.5 4 L6 -5" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      <g fill="#2563eb">
        <circle cx="88" cy="150" r="5" opacity="0.55" />
        <circle cx="400" cy="180" r="4" opacity="0.4" />
        <circle cx="70" cy="330" r="4.5" opacity="0.35" />
        <circle cx="420" cy="310" r="5" opacity="0.5" />
      </g>
      <g stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.6">
        <line x1="88" y1="150" x2="180" y2="180" />
        <line x1="400" y1="180" x2="310" y2="190" />
        <line x1="70" y1="330" x2="150" y2="300" />
        <line x1="420" y1="310" x2="330" y2="290" />
      </g>
    </svg>
  );
}