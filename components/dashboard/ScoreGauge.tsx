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
    <div className="flex flex-col items-center w-full py-4 md:py-6">
      {/* Gauge Wrapper */}
      <div className="relative w-full max-w-97.5 mx-auto">
        {/* Half Ellipse Background */}
        <div
          className="
            absolute bottom-0 left-0 right-0
            h-46.25 md:h-48.75
            bg-white
            rounded-[220px_220px_22px_22px]
            shadow-[0px_0px_28px_rgba(209,230,255,0.6)]
          "
        />

        {/* Gauge Content */}
        <div className="relative flex flex-col items-center">
          {/* Callout Bubble */}
          <div className="absolute -top-7 right-4 md:right-6 flex flex-col items-center">
            <div className="bg-white rounded-2xl px-4 md:px-5 py-2 text-[12px] md:text-[13px] leading-snug text-neutral-800 shadow-[0px_16px_40px_rgba(37,79,127,0.18)]">
              You need{" "}
              <span className="font-semibold text-brand-primary">
                +{remainingPoints}
              </span>{" "}
              points to <br />
              reach a <span className="font-semibold text-success">
                good
              </span>{" "}
              score of{" "}
              <span className="font-semibold text-brand-primary">
                {targetScore}
              </span>
            </div>

            <div className="h-6 border-l border-dashed border-[#C4CFDA]" />
          </div>

          {/* SVG Gauge */}
          <svg viewBox="0 0 300 170" className="w-full">
            <defs>
              <linearGradient
                id="scoreGaugeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#FF6969" />
                <stop offset="60%" stopColor="#FFBC70" />
              </linearGradient>
            </defs>

            {/* Background Arc */}
            <path
              d="M40 150 A110 110 0 0 1 260 150"
              fill="none"
              stroke="#E4E9F0"
              strokeWidth="20"
              strokeLinecap="round"
            />

            {/* Active Arc */}
            <path
              d="M40 150 A110 110 0 0 1 260 150"
              fill="none"
              stroke="url(#scoreGaugeGradient)"
              strokeWidth="20"
              strokeLinecap="round"
              pathLength={100}
              strokeDasharray={100}
              strokeDashoffset={100 - normalizedScore}
            />
          </svg>

          {/* Center Text */}
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="text-[36px] sm:text-[40px] md:text-[46px] font-bold leading-none text-danger">
              {normalizedScore}
            </div>

            <p className="mt-2 text-[14px] sm:text-[16px] md:text-[18px] font-medium text-brand-primary whitespace-nowrap">
              Current WealthUp Score
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="mt-6 text-[15px] md:text-[17px] text-brand-primary text-center">
        Better than <span className="font-semibold">{peersPercentile}%</span> of
        peers
      </p>
    </div>
  );
}
