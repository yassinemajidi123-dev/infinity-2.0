export default function WaveDivider({ flip = false }) {
  return (
    <div className={`wave-divider pro ${flip ? "flip" : ""}`} aria-hidden="true">
      {/* back wash (very soft, wide) */}
      <svg className="w back" viewBox="0 0 1440 220" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wd-back" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0"  stopColor="rgba(123,92,255,.18)" />
            <stop offset="1"  stopColor="rgba(198,179,255,.18)" />
          </linearGradient>
        </defs>
        <path fill="url(#wd-back)" d="M0,120 C280,80 480,160 720,120 C960,80 1160,60 1440,110 L1440,220 L0,220 Z"/>
      </svg>

      {/* mid wave (main contour) */}
      <svg className="w mid" viewBox="0 0 1440 180" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wd-mid" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0"  stopColor="var(--violet-1,#c6b3ff)" />
            <stop offset=".6" stopColor="var(--violet-2,#7b5cff)" />
            <stop offset="1"  stopColor="#3846a9" />
          </linearGradient>
        </defs>
        <path fill="url(#wd-mid)" d="M0,110 C220,150 480,60 720,95 C960,130 1200,175 1440,140 L1440,180 L0,180 Z"/>
      </svg>

      {/* foam highlight + inner shadow */}
      <svg className="w foam" viewBox="0 0 1440 140" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wd-foam" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="rgba(255,255,255,.65)"/>
            <stop offset="1" stopColor="rgba(255,255,255,0)"/>
          </linearGradient>
          <filter id="wd-blur" x="-10%" y="-200%" width="120%" height="500%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        {/* a thin crest highlight */}
        <path filter="url(#wd-blur)" fill="url(#wd-foam)"
          d="M0,90 C240,120 480,46 720,80 C960,114 1200,150 1440,120 L1440,140 L0,140 Z"/>
      </svg>
    </div>
  );
}
