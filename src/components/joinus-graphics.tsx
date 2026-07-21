export function JoinGraphic({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 480" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="jg-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="jg-left" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <linearGradient id="jg-right" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <filter id="jg-shadow" x="-40%" y="-20%" width="180%" height="160%">
          <feDropShadow dx="0" dy="16" stdDeviation="16" floodColor="#1e3a8a" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#jg-shadow)">
        <g opacity="0.9">
          <polygon points="240,330 340,382 240,434 140,382" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1.5" />
          <polygon points="140,382 240,434 240,460 140,408" fill="#dbeafe" />
          <polygon points="340,382 240,434 240,460 340,408" fill="#bfdbfe" />
        </g>
        <g>
          <polygon points="240,255 320,297 240,339 160,297" fill="url(#jg-top)" opacity="0.9" />
          <polygon points="160,297 240,339 240,360 160,318" fill="url(#jg-left)" opacity="0.9" />
          <polygon points="320,297 240,339 240,360 320,318" fill="url(#jg-right)" opacity="0.9" />
        </g>
        <g>
          <polygon points="240,180 300,212 240,244 180,212" fill="url(#jg-top)" />
          <polygon points="180,212 240,244 240,262 180,230" fill="url(#jg-left)" />
          <polygon points="300,212 240,244 240,262 300,230" fill="url(#jg-right)" />
        </g>

        <g transform="translate(240,150)">
          <circle cy="-6" r="10" fill="#1e3a8a" />
          <path d="M-12,26 C-12,8 12,8 12,26 Z" fill="#2563eb" />
        </g>

        <line x1="290" y1="80" x2="290" y2="150" stroke="#1e40af" strokeWidth="3" strokeLinecap="round" />
        <path d="M290,80 L330,92 L290,104 Z" fill="#60a5fa" />
      </g>

      <g fill="#93c5fd">
        <circle cx="120" cy="410" r="5" />
        <circle cx="150" cy="360" r="4.5" />
        <circle cx="180" cy="300" r="4" />
        <circle cx="205" cy="245" r="3.5" />
      </g>
    </svg>
  );
}