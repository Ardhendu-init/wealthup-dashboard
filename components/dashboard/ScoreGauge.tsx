type ScoreGaugeProps = {
  score?: number;
  targetScore?: number;
  peersPercentile?: number;
};

export default function ScoreGauge({
  score = 43,
  targetScore = 70,
  peersPercentile = 46,
}: ScoreGaugeProps) {
  const normalizedScore = Math.max(0, Math.min(score, 100));
  const remainingPoints = Math.max(targetScore - normalizedScore, 0);

  return (
    <div className="flex flex-col items-center py-6">
      {/* =============================== */}
      {/* Outer Wrapper */}
      {/* =============================== */}
      <div className="relative w-full max-w-90 md:max-w-95 mx-auto">
        {/* =============================== */}
        {/* Background Half Ellipse */}
        {/* =============================== */}
        <div className="absolute bottom-0 left-0 right-0 h-45 bg-white rounded-[200px_200px_16px_16px] shadow-[0px_0px_28px_rgba(209,230,255,0.6)]" />

        {/* =============================== */}
        {/* Gauge Content */}
        {/* =============================== */}
        <div className="relative z-10 flex flex-col items-center">
          {/* ===== Callout Bubble ===== */}
          <div className="absolute -top-10 right-2 md:right-8 flex flex-col items-center gap-1">
            <div className="rounded-[18px] bg-white px-5 py-2 text-[13px] leading-snug text-neutral-800 shadow-[0px_18px_45px_rgba(37,79,127,0.18)]">
              <span>You need </span>
              <span className="font-semibold text-brand-primary">
                +{remainingPoints}
              </span>
              <span> points to</span>
              <br />
              <span>reach a </span>
              <span className="font-semibold text-success">good</span>
              <span> score of </span>
              <span className="font-semibold text-brand-primary">
                {targetScore}
              </span>
            </div>
            <div className="h-8 border-l border-dashed border-[#C4CFDA]" />
          </div>

          {/* ===== SVG Gauge ===== */}
          <svg viewBox="0 0 300 200" className="w-full h-auto">
            <defs>
              <linearGradient
                id="scoreGaugeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF6969" />
                <stop offset="65%" stopColor="#FFBC70" />
              </linearGradient>
            </defs>

            {/* Background Arc */}
            <path
              d="M30 170 A120 120 0 0 1 270 170"
              fill="none"
              stroke="#E6EAF0"
              strokeWidth="26"
              strokeLinecap="round"
            />

            {/* Active Arc */}
            <path
              d="M30 170 A120 120 0 0 1 270 170"
              fill="none"
              stroke="url(#scoreGaugeGradient)"
              strokeWidth="26"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={100 - normalizedScore}
            />
          </svg>

          {/* ===== Center Text ===== */}
          <div className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="text-[36px] sm:text-[42px] md:text-[48px] font-bold leading-none text-danger">
              {normalizedScore}
            </div>

            <p className="mt-2 text-[13px] sm:text-[15px] md:text-[18px] font-medium text-brand-primary whitespace-nowrap">
              Current WealthUp Score
            </p>
          </div>
        </div>
      </div>

      {/* ===== Footer Text ===== */}
      <p className="mt-6 text-[17px] text-brand-primary">
        Better than <span className="font-semibold">{peersPercentile}%</span> of
        peers
      </p>
    </div>
  );
}
