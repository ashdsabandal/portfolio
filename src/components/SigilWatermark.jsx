/**
 * SigilWatermark — decorative background SVG
 * used as a large faint sigil behind section content.
 */
export default function SigilWatermark({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className={`sigil-watermark ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="wmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#a824e6" stopOpacity="0.18" />
          <stop offset="50%"  stopColor="#c458f5" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#a824e6" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Outer spiky ring */}
      <polygon
        points="200,8 232,80 310,40 280,120 380,130 310,185 370,260 290,245 280,340 200,290 120,340 110,245 30,260 90,185 20,130 120,120 90,40 168,80"
        fill="none"
        stroke="url(#wmGrad)"
        strokeWidth="1.2"
        strokeLinejoin="miter"
      />

      {/* Inner rotated square */}
      <polygon
        points="200,60 310,200 200,340 90,200"
        fill="none"
        stroke="#a824e6"
        strokeWidth="0.8"
        strokeOpacity="0.12"
        strokeDasharray="6 4"
      />

      {/* Centre cross */}
      <line x1="200" y1="140" x2="200" y2="260" stroke="#a824e6" strokeWidth="0.6" strokeOpacity="0.2" />
      <line x1="140" y1="200" x2="260" y2="200" stroke="#a824e6" strokeWidth="0.6" strokeOpacity="0.2" />

      {/* Centre diamond */}
      <polygon
        points="200,170 220,200 200,230 180,200"
        fill="rgba(168,36,230,0.07)"
        stroke="#c458f5"
        strokeWidth="1"
        strokeOpacity="0.35"
      />

      {/* Corner bracket accents */}
      <polyline points="30,30 55,30 55,55"   fill="none" stroke="#a824e6" strokeWidth="1" strokeOpacity="0.25" strokeLinejoin="miter" />
      <polyline points="370,30 345,30 345,55" fill="none" stroke="#a824e6" strokeWidth="1" strokeOpacity="0.25" strokeLinejoin="miter" />
      <polyline points="30,370 55,370 55,345" fill="none" stroke="#a824e6" strokeWidth="1" strokeOpacity="0.25" strokeLinejoin="miter" />
      <polyline points="370,370 345,370 345,345" fill="none" stroke="#a824e6" strokeWidth="1" strokeOpacity="0.25" strokeLinejoin="miter" />

      {/* Orbital dots */}
      <circle cx="200" cy="8"   r="2.5" fill="#a824e6" opacity="0.3" />
      <circle cx="380" cy="130" r="2"   fill="#a824e6" opacity="0.2" />
      <circle cx="280" cy="340" r="2"   fill="#a824e6" opacity="0.2" />
      <circle cx="120" cy="340" r="2"   fill="#a824e6" opacity="0.2" />
      <circle cx="20"  cy="130" r="2"   fill="#a824e6" opacity="0.2" />
      <circle cx="200" cy="200" r="4"   fill="#c458f5" opacity="0.25" />
    </svg>
  )
}
