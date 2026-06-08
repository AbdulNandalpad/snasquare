export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-lg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#eff4ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#4a6cf7" floodOpacity="0.12" />
        </filter>
        <filter id="shadow-sm" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#1e293b" floodOpacity="0.08" />
        </filter>
        <linearGradient id="brand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6c8df6" />
          <stop offset="100%" stopColor="#4a6cf7" />
        </linearGradient>
        <linearGradient id="card-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8faff" />
        </linearGradient>
        <linearGradient id="signal-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4a6cf7" stopOpacity="0" />
          <stop offset="50%" stopColor="#4a6cf7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4a6cf7" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="260" cy="240" rx="230" ry="210" fill="url(#bg-glow)" />

      {/* ── Orbit ring ── */}
      <circle cx="260" cy="240" r="155" stroke="#e0e7ff" strokeWidth="1.5" strokeDasharray="6 4" />
      <circle cx="260" cy="240" r="105" stroke="#e8edff" strokeWidth="1" strokeDasharray="4 6" />

      {/* ───────────── CENTER HUB ───────────── */}
      <circle cx="260" cy="240" r="54" fill="white" filter="url(#shadow)" />
      <circle cx="260" cy="240" r="46" fill="url(#brand-grad)" />
      {/* SNA logo text */}
      <text x="260" y="234" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif" letterSpacing="1.5">SNA</text>
      <text x="260" y="250" textAnchor="middle" fill="white" fontSize="9" fontWeight="500" fontFamily="Inter,sans-serif" letterSpacing="1" opacity="0.85">SQUARE</text>

      {/* ───────────── RFID TAG ─ top-left ───────────── */}
      {/* Connector line */}
      <line x1="215" y1="197" x2="135" y2="138" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="135" cy="138" r="3" fill="#4a6cf7" />

      {/* Card */}
      <rect x="64" y="90" width="112" height="82" rx="14" fill="url(#card-grad)" stroke="#e0e7ff" strokeWidth="1.5" filter="url(#shadow-sm)" />
      {/* RFID chip body */}
      <rect x="88" y="107" width="28" height="22" rx="3" fill="#4a6cf7" opacity="0.9" />
      <rect x="91" y="110" width="22" height="16" rx="2" fill="#6c8df6" />
      {/* antenna lines */}
      <line x1="82" y1="112" x2="88" y2="112" stroke="#4a6cf7" strokeWidth="1.5" />
      <line x1="82" y1="118" x2="88" y2="118" stroke="#4a6cf7" strokeWidth="1.5" />
      <line x1="116" y1="112" x2="122" y2="112" stroke="#4a6cf7" strokeWidth="1.5" />
      <line x1="116" y1="118" x2="122" y2="118" stroke="#4a6cf7" strokeWidth="1.5" />
      {/* Signal arcs */}
      <path d="M130 109 Q136 106 136 118 Q136 130 130 127" stroke="#4a6cf7" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M135 104 Q144 99 144 118 Q144 137 135 132" stroke="#4a6cf7" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4" />
      <text x="120" y="146" textAnchor="middle" fill="#4a6cf7" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">RFID</text>
      <text x="120" y="158" textAnchor="middle" fill="#64748b" fontSize="8.5" fontFamily="Inter,sans-serif">Asset Tracking</text>

      {/* ───────────── IOT SENSOR ─ top-right ───────────── */}
      <line x1="305" y1="197" x2="385" y2="138" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="385" cy="138" r="3" fill="#4a6cf7" />

      <rect x="344" y="90" width="112" height="82" rx="14" fill="url(#card-grad)" stroke="#e0e7ff" strokeWidth="1.5" filter="url(#shadow-sm)" />
      {/* Sensor body */}
      <rect x="387" y="108" width="18" height="24" rx="3" fill="#4a6cf7" />
      <rect x="391" y="104" width="10" height="6" rx="2" fill="#6c8df6" />
      <rect x="391" y="132" width="10" height="4" rx="1" fill="#334155" opacity="0.3" />
      {/* Signal waves */}
      <path d="M372 113 Q368 118 372 123" stroke="#4a6cf7" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M367 109 Q360 118 367 127" stroke="#4a6cf7" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M362 105 Q352 118 362 131" stroke="#4a6cf7" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.3" />
      {/* Temp reading */}
      <text x="414" y="116" fill="white" fontSize="8" fontWeight="700" fontFamily="Inter,sans-serif">24°C</text>
      <text x="400" y="150" textAnchor="middle" fill="#4a6cf7" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">IoT</text>
      <text x="400" y="162" textAnchor="middle" fill="#64748b" fontSize="8.5" fontFamily="Inter,sans-serif">Sensor Network</text>

      {/* ───────────── CLOUD / SERVER ─ right ───────────── */}
      <line x1="314" y1="240" x2="385" y2="240" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="385" cy="240" r="3" fill="#4a6cf7" />

      <rect x="390" y="202" width="112" height="76" rx="14" fill="url(#card-grad)" stroke="#e0e7ff" strokeWidth="1.5" filter="url(#shadow-sm)" />
      {/* Cloud shape */}
      <path d="M427 228 Q425 218 433 216 Q432 208 440 208 Q445 202 454 205 Q462 202 466 210 Q474 210 474 218 Q480 220 478 228 Z" fill="#4a6cf7" opacity="0.9" />
      <path d="M430 228 Q428 220 435 218 Q434 211 441 211 Q446 206 454 209 Q461 206 464 213 Q471 213 471 220 Q476 222 474 228 Z" fill="#6c8df6" />
      {/* Upload arrows */}
      <line x1="446" y1="248" x2="446" y2="238" stroke="#4a6cf7" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="443,241 446,238 449,241" stroke="#4a6cf7" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="456" y1="248" x2="456" y2="238" stroke="#4a6cf7" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="453,241 456,238 459,241" stroke="#4a6cf7" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="446" y="265" textAnchor="middle" fill="#4a6cf7" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">Cloud</text>
      <text x="446" y="271" textAnchor="middle" fill="#64748b" fontSize="8.5" fontFamily="Inter,sans-serif"> </text>

      {/* ───────────── ANALYTICS ─ bottom-right ───────────── */}
      <line x1="290" y1="290" x2="360" y2="356" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="360" cy="356" r="3" fill="#4a6cf7" />

      <rect x="330" y="330" width="112" height="76" rx="14" fill="url(#card-grad)" stroke="#e0e7ff" strokeWidth="1.5" filter="url(#shadow-sm)" />
      {/* Bar chart */}
      <rect x="350" y="370" width="8" height="18" rx="2" fill="#4a6cf7" opacity="0.5" />
      <rect x="362" y="360" width="8" height="28" rx="2" fill="#4a6cf7" opacity="0.75" />
      <rect x="374" y="352" width="8" height="36" rx="2" fill="#4a6cf7" />
      <rect x="386" y="358" width="8" height="30" rx="2" fill="#4a6cf7" opacity="0.65" />
      <rect x="398" y="345" width="8" height="43" rx="2" fill="#4a6cf7" opacity="0.45" />
      {/* Trend line */}
      <polyline points="354,365 366,355 378,347 390,353 402,340" stroke="#6c8df6" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="402" cy="340" r="3" fill="#4a6cf7" />
      <text x="386" y="347" textAnchor="middle" fill="#4a6cf7" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">Analytics</text>

      {/* ───────────── HVAC / DEVICE ─ bottom-left ───────────── */}
      <line x1="230" y1="290" x2="160" y2="356" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="160" cy="356" r="3" fill="#4a6cf7" />

      <rect x="78" y="330" width="112" height="76" rx="14" fill="url(#card-grad)" stroke="#e0e7ff" strokeWidth="1.5" filter="url(#shadow-sm)" />
      {/* HVAC unit shape */}
      <rect x="110" y="348" width="40" height="30" rx="5" fill="#4a6cf7" opacity="0.85" />
      <rect x="113" y="351" width="34" height="24" rx="3" fill="#6c8df6" />
      {/* fan blades */}
      <circle cx="130" cy="363" r="8" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
      <line x1="130" y1="355" x2="130" y2="371" stroke="white" strokeWidth="1.5" opacity="0.8" />
      <line x1="122" y1="363" x2="138" y2="363" stroke="white" strokeWidth="1.5" opacity="0.8" />
      <line x1="124" y1="357" x2="136" y2="369" stroke="white" strokeWidth="1.2" opacity="0.5" />
      <line x1="136" y1="357" x2="124" y2="369" stroke="white" strokeWidth="1.2" opacity="0.5" />
      {/* status dots */}
      <circle cx="112" cy="386" r="3" fill="#22c55e" />
      <circle cx="120" cy="386" r="3" fill="#f59e0b" />
      <circle cx="128" cy="386" r="3" fill="#4a6cf7" />
      <text x="134" y="397" textAnchor="middle" fill="#4a6cf7" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">HVAC</text>
      <text x="134" y="407" textAnchor="middle" fill="#64748b" fontSize="8.5" fontFamily="Inter,sans-serif">Automation</text>

      {/* ───────────── LEFT SIDE: EDGE DEVICE ───────────── */}
      <line x1="206" y1="240" x2="135" y2="240" stroke="#c7d2fe" strokeWidth="1.5" strokeDasharray="5 4" />
      <circle cx="135" cy="240" r="3" fill="#4a6cf7" />

      <rect x="18" y="200" width="112" height="78" rx="14" fill="url(#card-grad)" stroke="#e0e7ff" strokeWidth="1.5" filter="url(#shadow-sm)" />
      {/* Circuit board look */}
      <rect x="38" y="218" width="36" height="24" rx="3" fill="#1e293b" opacity="0.85" />
      <rect x="41" y="221" width="30" height="18" rx="2" fill="#334155" />
      {/* chip pins */}
      <line x1="38" y1="223" x2="34" y2="223" stroke="#4a6cf7" strokeWidth="1.5" />
      <line x1="38" y1="228" x2="34" y2="228" stroke="#4a6cf7" strokeWidth="1.5" />
      <line x1="38" y1="233" x2="34" y2="233" stroke="#4a6cf7" strokeWidth="1.5" />
      <line x1="74" y1="223" x2="78" y2="223" stroke="#4a6cf7" strokeWidth="1.5" />
      <line x1="74" y1="228" x2="78" y2="228" stroke="#4a6cf7" strokeWidth="1.5" />
      <line x1="74" y1="233" x2="78" y2="233" stroke="#4a6cf7" strokeWidth="1.5" />
      {/* LED dots on chip */}
      <circle cx="48" cy="227" r="2" fill="#22c55e" />
      <circle cx="55" cy="227" r="2" fill="#4a6cf7" />
      <circle cx="62" cy="227" r="2" fill="#f59e0b" />
      {/* trace lines */}
      <polyline points="56,240 56,248 80,248 80,255 102,255" stroke="#4a6cf7" strokeWidth="1" fill="none" opacity="0.4" />
      <polyline points="64,240 64,252 90,252 90,260 102,260" stroke="#6c8df6" strokeWidth="1" fill="none" opacity="0.3" />
      <text x="74" y="263" textAnchor="middle" fill="#4a6cf7" fontSize="10" fontWeight="600" fontFamily="Inter,sans-serif">Edge</text>
      <text x="74" y="271" textAnchor="middle" fill="#64748b" fontSize="8.5" fontFamily="Inter,sans-serif">Computing</text>

      {/* ── Pulsing rings on center hub ── */}
      <circle cx="260" cy="240" r="62" stroke="#4a6cf7" strokeWidth="1" strokeOpacity="0.15">
        <animate attributeName="r" values="54;72;54" dur="3s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="260" cy="240" r="62" stroke="#4a6cf7" strokeWidth="1" strokeOpacity="0.1">
        <animate attributeName="r" values="54;90;54" dur="3s" begin="0.8s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.15;0;0.15" dur="3s" begin="0.8s" repeatCount="indefinite" />
      </circle>

      {/* Animated data dots on connector lines */}
      {/* Top-left line dot */}
      <circle r="3" fill="#4a6cf7">
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M215,197 L135,138" />
      </circle>
      {/* Top-right line dot */}
      <circle r="3" fill="#4a6cf7">
        <animateMotion dur="2.1s" repeatCount="indefinite" begin="0.5s" path="M305,197 L385,138" />
      </circle>
      {/* Right line dot */}
      <circle r="3" fill="#4a6cf7">
        <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.3s" path="M314,240 L385,240" />
      </circle>
      {/* Bottom-right dot */}
      <circle r="3" fill="#4a6cf7">
        <animateMotion dur="2.2s" repeatCount="indefinite" begin="0.9s" path="M290,290 L360,356" />
      </circle>
      {/* Bottom-left dot */}
      <circle r="3" fill="#4a6cf7">
        <animateMotion dur="2s" repeatCount="indefinite" begin="0.6s" path="M230,290 L160,356" />
      </circle>
      {/* Left dot */}
      <circle r="3" fill="#4a6cf7">
        <animateMotion dur="1.9s" repeatCount="indefinite" begin="1.1s" path="M206,240 L135,240" />
      </circle>
    </svg>
  )
}
