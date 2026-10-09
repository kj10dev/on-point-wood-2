export default function Logo({ size = 56 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="On-Point Wood holy fire logo">
      <defs>
        <linearGradient id="flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#ea580c"/><stop offset="55%" stopColor="#f97316"/><stop offset="100%" stopColor="#fbbf24"/>
        </linearGradient>
        <radialGradient id="halo" cx=".5" cy=".5" r=".5">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity=".9"/><stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* sacred halo */}
      <circle cx="50" cy="50" r="46" fill="url(#halo)" opacity=".35"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 5" opacity=".8"/>
      {/* cross of logs */}
      <g strokeLinecap="round">
        <rect x="44" y="24" width="12" height="52" rx="5" fill="#7c2d12" stroke="#3f1d0a" strokeWidth="2"/>
        <rect x="30" y="40" width="40" height="12" rx="5" fill="#9a3412" stroke="#3f1d0a" strokeWidth="2"/>
        {/* bark rings */}
        <circle cx="50" cy="30" r="4.5" fill="#fbbf24" opacity=".9"/>
        <circle cx="50" cy="30" r="2" fill="#7c2d12"/>
      </g>
      {/* holy flames licking the cross */}
      <g className="animate-flicker" style={{ transformOrigin: "50px 34px" }}>
        <path d="M50 8 C58 18 62 24 58 32 C56 27 53 26 50 30 C47 26 44 27 42 32 C38 24 42 18 50 8 Z" fill="url(#flame)"/>
        <path d="M50 16 C54 21 55.5 24.5 53.5 29 C52.5 26.5 51.4 26.2 50 28.4 C48.6 26.2 47.5 26.5 46.5 29 C44.5 24.5 46 21 50 16 Z" fill="#fde68a"/>
      </g>
      {/* tiny radiant sparks */}
      <g fill="#fbbf24">
        <circle cx="24" cy="30" r="1.6"/><circle cx="78" cy="26" r="1.6"/><circle cx="16" cy="52" r="1.3"/><circle cx="84" cy="55" r="1.3"/>
      </g>
    </svg>
  );
}
