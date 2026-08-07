/**
 * Decorative Memphis shapes — pure CSS animation, no client JS.
 * Fixed layer so the frame always captures motion mid-keyframe.
 */
export function MemphisShapes() {
  return (
    <div className="memphis-layer" aria-hidden="true">
      {/* triangle — drift */}
      <svg
        className="memphis-shape memphis-shape--triangle memphis-anim--drift"
        viewBox="0 0 80 70"
        width="80"
        height="70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="40,6 74,64 6,64"
          fill="#FF6B6B"
          stroke="#181615"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>

      {/* quarter-arc — sway */}
      <svg
        className="memphis-shape memphis-shape--quarter-arc memphis-anim--sway"
        viewBox="0 0 90 90"
        width="90"
        height="90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 78 A66 66 0 0 1 78 12 L78 78 Z"
          fill="#FFD93D"
          stroke="#181615"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>

      {/* dotted circle — spin */}
      <svg
        className="memphis-shape memphis-shape--dotted-circle memphis-anim--spin"
        viewBox="0 0 88 88"
        width="88"
        height="88"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="44"
          cy="44"
          r="30"
          fill="#6BCB77"
          stroke="#181615"
          strokeWidth="5"
          strokeDasharray="3 9"
          strokeLinecap="round"
        />
      </svg>

      {/* plus-sign — bob */}
      <svg
        className="memphis-shape memphis-shape--plus memphis-anim--bob"
        viewBox="0 0 72 72"
        width="72"
        height="72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 8 H44 V28 H64 V44 H44 V64 H28 V44 H8 V28 H28 Z"
          fill="#4D96FF"
          stroke="#181615"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>

        {/* squiggle line — drift */}
      <svg
        className="memphis-shape memphis-shape--squiggle memphis-anim--drift-slow"
        viewBox="0 0 140 48"
        width="140"
        height="48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 24 C22 6, 36 42, 50 24 S78 6, 92 24 S120 42, 132 24"
          fill="none"
          stroke="#181615"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 24 C22 6, 36 42, 50 24 S78 6, 92 24 S120 42, 132 24"
          fill="none"
          stroke="#C77DFF"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* half-circle — sway */}
      <svg
        className="memphis-shape memphis-shape--half-circle memphis-anim--sway"
        viewBox="0 0 100 56"
        width="100"
        height="56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 48 A42 42 0 0 1 92 48 Z"
          fill="#FF9F1C"
          stroke="#181615"
          strokeWidth="5"
          strokeLinejoin="round"
        />
      </svg>

      {/* zigzag — bob */}
      <svg
        className="memphis-shape memphis-shape--zigzag memphis-anim--bob"
        viewBox="0 0 120 52"
        width="120"
        height="52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polyline
          points="6,40 28,12 50,40 72,12 94,40 114,12"
          fill="none"
          stroke="#181615"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="6,40 28,12 50,40 72,12 94,40 114,12"
          fill="none"
          stroke="#FF6B9D"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* striped circle — spin */}
      <svg
        className="memphis-shape memphis-shape--striped-circle memphis-anim--spin"
        viewBox="0 0 84 84"
        width="84"
        height="84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="memphis-stripe-clip">
            <circle cx="42" cy="42" r="30" />
          </clipPath>
        </defs>
        <circle cx="42" cy="42" r="30" fill="#2EC4B6" />
        <g clipPath="url(#memphis-stripe-clip)">
          <path d="M0 10 H84" stroke="#181615" strokeWidth="5" />
          <path d="M0 22 H84" stroke="#181615" strokeWidth="5" />
          <path d="M0 34 H84" stroke="#181615" strokeWidth="5" />
          <path d="M0 46 H84" stroke="#181615" strokeWidth="5" />
          <path d="M0 58 H84" stroke="#181615" strokeWidth="5" />
          <path d="M0 70 H84" stroke="#181615" strokeWidth="5" />
        </g>
        <circle
          cx="42"
          cy="42"
          r="30"
          fill="none"
          stroke="#181615"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
}
