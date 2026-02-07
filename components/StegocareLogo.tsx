"use client";

interface StegocareLogoProps {
  className?: string;
  size?: number;
  colorful?: boolean;
}

export default function StegocareLogo({
  className = "",
  size = 40,
  colorful = false,
}: StegocareLogoProps) {
  const colors = colorful
    ? ["#6366F1", "#EC4899", "#14B8A6", "#F59E0B", "#3B82F6"]
    : ["currentColor", "currentColor", "currentColor", "currentColor", "currentColor"];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stegocare logo"
      role="img"
    >
      {/* Abstract stegosaurus mark: rounded body, plates, small eye */}
      <path
        d="M5 22 C5 16 10 12 16 12 H24 C29 12 33 15 34 20 C35 26 31 29 26 29 H15 C9 29 5 27 5 22 Z"
        fill={colors[0]}
        opacity={colorful ? 0.95 : 0.85}
      />
      <path
        d="M7 23 C6 24 5 26 6 28 C7 30 10 30 12 30"
        stroke={colors[0]}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 14 L13.5 9 L16 14 Z"
        fill={colors[1]}
        opacity={colorful ? 0.95 : 0.7}
      />
      <path
        d="M16.5 13.5 L19.5 6.5 L22.5 13.5 Z"
        fill={colors[2]}
        opacity={colorful ? 1 : 0.8}
      />
      <path
        d="M22 14 L24.5 8.5 L27 14 Z"
        fill={colors[3]}
        opacity={colorful ? 0.95 : 0.7}
      />
      <path
        d="M26.5 15 L29 11 L31.5 15 Z"
        fill={colors[4]}
        opacity={colorful ? 0.9 : 0.6}
      />
      <circle cx="26.5" cy="20" r="1.3" fill={colorful ? "#0B1220" : "currentColor"} />
      <path d="M30 21 L33 20.5" stroke={colorful ? "#0B1220" : "currentColor"} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
