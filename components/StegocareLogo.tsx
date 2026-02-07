interface StegocareLogoProps {
  className?: string;
  size?: number;
}

export default function StegocareLogo({
  className = "",
  size = 32,
}: StegocareLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Stegocare logo"
      role="img"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M20.5 13C20.5 10.8 18.5 9 16 9C13.5 9 11.5 10.8 11.5 13C11.5 15.2 13.5 16 16 17C18.5 18 20.5 18.8 20.5 21C20.5 23.2 18.5 25 16 25C13.5 25 11.5 23.2 11.5 21"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
