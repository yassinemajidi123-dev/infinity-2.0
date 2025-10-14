// src/components/WaveDivider.jsx
export default function WaveDivider() {
  return (
    <div className="wave-divider">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0e1626" stopOpacity="1" />
            <stop offset="100%" stopColor="#111a2c" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Back layer */}
        <path
          fill="url(#waveGradient)"
          fillOpacity="0.35"
          d="M0,200 C360,280 1080,60 1440,180 L1440,320 L0,320 Z"
        />

        {/* Middle layer */}
        <path
          fill="url(#waveGradient)"
          fillOpacity="0.55"
          d="M0,180 C240,240 720,80 1440,200 L1440,320 L0,320 Z"
        />

        {/* Front layer */}
        <path
          fill="url(#waveGradient)"
          fillOpacity="0.9"
          d="M0,220 C400,300 1040,100 1440,240 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
}
