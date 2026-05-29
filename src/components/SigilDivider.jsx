/**
 * SigilDivider — horizontal section break with
 * sharp angular cyber-tribal / biomechanical SVG art.
 * Theme: Chrome Metal + Prowler Purple.
 */
export default function SigilDivider({ flip = false }) {
  return (
    <div
      className="sigil-divider"
      aria-hidden="true"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <svg
        viewBox="0 0 1200 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="sigil-divider__svg"
      >
        <defs>
          <linearGradient id="sigilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#a824e6" stopOpacity="0" />
            <stop offset="20%"  stopColor="#a824e6" stopOpacity="0.6" />
            <stop offset="50%"  stopColor="#c458f5" stopOpacity="0.9" />
            <stop offset="80%"  stopColor="#a824e6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#a824e6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#94a3b8" stopOpacity="0" />
            <stop offset="30%"  stopColor="#e2e8f0" stopOpacity="0.25" />
            <stop offset="70%"  stopColor="#94a3b8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base horizontal chrome rule */}
        <rect x="0" y="31" width="1200" height="1" fill="url(#chromeGrad)" />

        {/* Central spike cluster */}
        {/* Main centre diamond spike */}
        <polygon
          points="600,4 622,32 600,44 578,32"
          fill="none"
          stroke="url(#sigilGrad)"
          strokeWidth="1.2"
        />
        {/* Inner centre dot */}
        <circle cx="600" cy="32" r="3" fill="#a824e6" opacity="0.85" />

        {/* Left arm — angular bracket */}
        <polyline
          points="440,32 460,16 490,16 510,32 490,32"
          fill="none"
          stroke="url(#sigilGrad)"
          strokeWidth="1"
          strokeLinejoin="miter"
        />
        {/* Left bracket accent spike */}
        <polygon
          points="455,32 468,22 481,32 468,38"
          fill="rgba(168,36,230,0.12)"
          stroke="#a824e6"
          strokeWidth="0.8"
        />

        {/* Right arm — mirror of left */}
        <polyline
          points="760,32 740,16 710,16 690,32 710,32"
          fill="none"
          stroke="url(#sigilGrad)"
          strokeWidth="1"
          strokeLinejoin="miter"
        />
        <polygon
          points="745,32 732,22 719,32 732,38"
          fill="rgba(168,36,230,0.12)"
          stroke="#a824e6"
          strokeWidth="0.8"
        />

        {/* Far-left ticks */}
        <line x1="200" y1="32" x2="240" y2="32" stroke="#a824e6" strokeWidth="0.6" strokeOpacity="0.45" />
        <line x1="210" y1="26" x2="210" y2="38" stroke="#a824e6" strokeWidth="0.6" strokeOpacity="0.45" />
        <line x1="240" y1="26" x2="240" y2="38" stroke="#a824e6" strokeWidth="0.6" strokeOpacity="0.3" />
        {/* Far-left corner bracket */}
        <polyline points="140,24 120,32 140,40" fill="none" stroke="#a824e6" strokeWidth="0.8" strokeOpacity="0.35" strokeLinejoin="miter" />

        {/* Far-right ticks — mirror */}
        <line x1="960" y1="32" x2="1000" y2="32" stroke="#a824e6" strokeWidth="0.6" strokeOpacity="0.45" />
        <line x1="1000" y1="26" x2="1000" y2="38" stroke="#a824e6" strokeWidth="0.6" strokeOpacity="0.45" />
        <line x1="960" y1="26"  x2="960" y2="38"  stroke="#a824e6" strokeWidth="0.6" strokeOpacity="0.3" />
        <polyline points="1060,24 1080,32 1060,40" fill="none" stroke="#a824e6" strokeWidth="0.8" strokeOpacity="0.35" strokeLinejoin="miter" />

        {/* Mid-left mini spikes */}
        <polygon points="330,32 340,24 350,32 340,40" fill="none" stroke="#a824e6" strokeWidth="0.7" strokeOpacity="0.5" />
        <polygon points="370,32 378,26 386,32 378,38" fill="none" stroke="#a824e6" strokeWidth="0.6" strokeOpacity="0.35" />

        {/* Mid-right mini spikes */}
        <polygon points="870,32 860,24 850,32 860,40" fill="none" stroke="#a824e6" strokeWidth="0.7" strokeOpacity="0.5" />
        <polygon points="830,32 822,26 814,32 822,38" fill="none" stroke="#a824e6" strokeWidth="0.6" strokeOpacity="0.35" />

        {/* Flanking dots */}
        <circle cx="550" cy="32" r="2" fill="#a824e6" opacity="0.55" />
        <circle cx="534" cy="32" r="1.2" fill="#a824e6" opacity="0.3" />
        <circle cx="650" cy="32" r="2" fill="#a824e6" opacity="0.55" />
        <circle cx="666" cy="32" r="1.2" fill="#a824e6" opacity="0.3" />
      </svg>
    </div>
  )
}
