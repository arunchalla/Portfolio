export function LogoMark({ size = 38 }: { size?: number }) {
  const id = "logoGrad";
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" className="flex-shrink-0">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#AFEEEE" />
          <stop offset="100%" stopColor="#00CED1" />
        </linearGradient>
      </defs>
      {/* Bold C as outer arc */}
      <path d="M 68,20 A 34 30 0 1 0 68,60" stroke={`url(#${id})`} strokeWidth="10" strokeLinecap="round" fill="none" />
      {/* A inside, right leg aligns with C opening */}
      <line x1="40" y1="18" x2="24" y2="62" stroke={`url(#${id})`} strokeWidth="7" strokeLinecap="round" />
      <line x1="40" y1="18" x2="56" y2="62" stroke={`url(#${id})`} strokeWidth="7" strokeLinecap="round" />
      <line x1="30" y1="46" x2="50" y2="46" stroke={`url(#${id})`} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}
