import React from 'react';

export function IconLimpeza() {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Polished anatomical Tooth shape */}
      <path
        d="M24 6C15 6 10 12 10 20C10 28 14 40 18 42C20.5 43.5 22.5 39 24 33C25.5 39 27.5 43.5 30 42C34 40 38 28 38 20C38 12 33 6 24 6Z"
        fill="url(#limpeza-grad)"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Ultrasonic scaler tip / wand */}
      <path
        d="M34 10L42 4M38 14L44 8"
        stroke="#2f6fb0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Sparkle & Water droplets */}
      <path
        d="M16 16C16 14 18 12 20 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="12" r="1.5" fill="#d8f26d" />
      <circle cx="36" cy="18" r="2" fill="#d8f26d" />
      <path
        d="M24 16L25 18.5L27.5 19.5L25 20.5L24 23L23 20.5L20.5 19.5L23 18.5L24 16Z"
        fill="#2f6fb0"
      />
      <defs>
        <linearGradient id="limpeza-grad" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0f7ff" />
          <stop offset="1" stopColor="#dcebf9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconClareamento() {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Brilliant bright tooth */}
      <path
        d="M24 6C15 6 10 12 10 20C10 28 14 40 18 42C20.5 43.5 22.5 39 24 33C25.5 39 27.5 43.5 30 42C34 40 38 28 38 20C38 12 33 6 24 6Z"
        fill="url(#clareamento-grad)"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Diamond Brilliance Starburst in center */}
      <path
        d="M24 12L26 18L32 20L26 22L24 28L22 22L16 20L22 18L24 12Z"
        fill="#d8f26d"
        stroke="#2f6fb0"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Shining ray flashes */}
      <line x1="24" y1="2" x2="24" y2="5" stroke="#2f6fb0" strokeWidth="2" strokeLinecap="round" />
      <line x1="7" y1="9" x2="10" y2="11" stroke="#2f6fb0" strokeWidth="2" strokeLinecap="round" />
      <line x1="41" y1="9" x2="38" y2="11" stroke="#2f6fb0" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="clareamento-grad" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#e8f4fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconOrtodontia() {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tooth */}
      <path
        d="M24 6C15 6 10 12 10 20C10 28 14 40 18 42C20.5 43.5 22.5 39 24 33C25.5 39 27.5 43.5 30 42C34 40 38 28 38 20C38 12 33 6 24 6Z"
        fill="url(#orto-grad)"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Precision Orthodontic Bracket */}
      <rect
        x="18"
        y="17"
        width="12"
        height="10"
        rx="2.5"
        fill="#2f6fb0"
        stroke="#ffffff"
        strokeWidth="1.5"
      />
      {/* Orthodontic Archwire */}
      <path
        d="M8 22C16 22 32 22 40 22"
        stroke="#2f6fb0"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Bracket Ligature / Elastomeric Dot */}
      <circle cx="24" cy="22" r="2.2" fill="#d8f26d" />
      <defs>
        <linearGradient id="orto-grad" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fbff" />
          <stop offset="1" stopColor="#dcebf9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconImplante() {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ceramic Crown */}
      <path
        d="M14 8C14 5 19 4 24 4C29 4 34 5 34 8C35 13 34 18 31 20C28 21 20 21 17 20C14 18 13 13 14 8Z"
        fill="url(#implante-crown-grad)"
        stroke="currentColor"
        strokeWidth="2"
      />
      {/* Titanium Abutment Collar */}
      <path
        d="M19 20H29L27 24H21L19 20Z"
        fill="#2f6fb0"
      />
      {/* Precision Titanium Screw Root with Threads */}
      <path
        d="M21 24H27V38C27 40.5 24 43 24 43C24 43 21 40.5 21 38V24Z"
        fill="#2f6fb0"
        stroke="#2f6fb0"
        strokeWidth="1.5"
      />
      {/* Thread Grooves */}
      <line x1="19" y1="27" x2="29" y2="27" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="20" y1="31" x2="28" y2="31" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="21" y1="35" x2="27" y2="35" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="22" y1="39" x2="26" y2="39" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
      {/* Glow dot */}
      <circle cx="34" cy="7" r="1.5" fill="#d8f26d" />
      <defs>
        <linearGradient id="implante-crown-grad" x1="24" y1="4" x2="24" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#e3f0fc" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconEstetica() {
  return (
    <svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tooth */}
      <path
        d="M24 6C15 6 10 12 10 20C10 28 14 40 18 42C20.5 43.5 22.5 39 24 33C25.5 39 27.5 43.5 30 42C34 40 38 28 38 20C38 12 33 6 24 6Z"
        fill="url(#estetica-grad)"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Porcelain Veneer / Aesthetic Smile Arc */}
      <path
        d="M15 22C18 26 30 26 33 22"
        stroke="#2f6fb0"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Aesthetic Starburst highlight */}
      <path
        d="M33 11L34.5 14L37.5 15.5L34.5 17L33 20L31.5 17L28.5 15.5L31.5 14L33 11Z"
        fill="#d8f26d"
      />
      <circle cx="16" cy="14" r="2" fill="#2f6fb0" opacity="0.6" />
      <defs>
        <linearGradient id="estetica-grad" x1="24" y1="6" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#dbebf9" />
        </linearGradient>
      </defs>
    </svg>
  );
}
