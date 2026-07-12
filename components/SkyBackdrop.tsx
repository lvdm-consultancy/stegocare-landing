interface SkyBackdropProps {
  /** Optional painted background image (e.g. a Figma export in /public/backgrounds/). */
  image?: string | null;
  /** Fade in from white at the top, for mid-page sections. */
  fadeTop?: boolean;
  /** Extra classes for the image (e.g. object-position tweaks per section). */
  imageClassName?: string;
}

/**
 * Soft, misty sky backdrop. When `image` is provided it is used full-bleed
 * with a legibility veil; otherwise a hand-tuned CSS/SVG sky is rendered.
 * Always fades to white at the bottom so the next section connects cleanly.
 */
export default function SkyBackdrop({
  image,
  fadeTop = false,
  imageClassName = "",
}: SkyBackdropProps) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          loading="eager"
          fetchPriority="high"
          className={`absolute inset-0 h-full w-full object-cover ${imageClassName}`}
        />
      ) : (
        <>
          {/* Sky */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#c6dae8_0%,#dfebf1_46%,#f3f5f2_100%)]" />
          {/* High sun haze */}
          <div className="absolute -top-[20%] left-1/2 h-[70%] w-[130%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(255,255,255,0.85),rgba(255,255,255,0))]" />
          {/* Drifting mist */}
          <div className="absolute left-[8%] top-[22%] h-20 w-[34rem] rounded-full bg-white/60 blur-3xl" />
          <div className="absolute right-[6%] top-[14%] h-16 w-[26rem] rounded-full bg-white/50 blur-3xl" />
          <div className="absolute left-[30%] top-[42%] h-24 w-[40rem] rounded-full bg-white/40 blur-3xl" />
          {/* Far hills */}
          <svg
            className="absolute bottom-0 w-full blur-[2px]"
            viewBox="0 0 1440 240"
            preserveAspectRatio="none"
          >
            <path
              d="M0,160 C180,110 340,150 520,128 C720,104 860,150 1040,138 C1220,126 1330,96 1440,116 L1440,240 L0,240 Z"
              fill="#c4d4c9"
              opacity="0.5"
            />
          </svg>
          {/* Near hills */}
          <svg
            className="absolute bottom-0 w-full"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
          >
            <path
              d="M0,140 C220,90 420,150 640,132 C880,112 1040,160 1240,146 C1330,140 1400,126 1440,132 L1440,200 L0,200 Z"
              fill="#b7c9bc"
              opacity="0.6"
            />
          </svg>
        </>
      )}
      {/* Settle into the page (CSS sky only — the painted image gets a clean edge) */}
      {fadeTop && (
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      )}
      {!image && (
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-white" />
      )}
    </div>
  );
}
