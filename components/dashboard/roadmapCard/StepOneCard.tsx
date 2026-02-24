import Image from "next/image";

const StepOneCard = () => {
  return (
    <div className="bg-white rounded-2xl border-2 border-[#C7D9EE] shadow-[0px_10px_40px_rgba(41,79,124,0.12)] p-5 flex flex-col h-full">
      {/* Top Content */}
      <div className="flex-1 flex flex-col">
        <p className="text-[12px] font-semibold text-danger mb-2">
          Step 1: Critical
        </p>

        <h3 className="text-[16px] md:text-[18px] font-semibold text-brand-primary mb-2 leading-snug">
          Build your safety net (Emergency fund)
        </h3>

        <p className="text-[12px] text-neutral-600 leading-relaxed mb-4">
          Ankit, avoid a potential 2-year setback. Build your emergency fund to
          be risk-free within the next 6 months.
        </p>

        {/* Saving Commitment */}
        <div className="text-[12px] text-brand-primary mb-3">
          I can commit to saving{" "}
          <span className="bg-[#E6EEF5] px-2 py-1 rounded-md font-semibold">
            ₹500
          </span>{" "}
          monthly
        </div>

        {/* Preset + Input Row (Responsive) */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          {["₹500", "₹1,000", "₹5,000", "₹6,000"].map((amt) => (
            <button
              key={amt}
              className="px-3 py-1 border border-[#D3DFEB] rounded-md text-[11px] text-brand-primary hover:border-brand-primary whitespace-nowrap"
            >
              {amt}
            </button>
          ))}

          <div className="flex items-center border-b border-[#D3DFEB] px-1 min-w-27.5">
            <span className="text-[11px] text-neutral-500 mr-1">₹</span>
            <input
              placeholder="Enter amount"
              className="outline-none text-[11px] w-full bg-transparent"
            />
          </div>
        </div>

        {/* Recommended Funds */}
        <div className="mb-5">
          <p className="text-[13px] font-medium text-brand-primary mb-3">
            Recommended Funds (Top performers)
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <FundCard
              name="HDFC Mid-Cap Fund"
              returns="26.6% (3Y)"
              logo="/hdfc.png"
            />
            <FundCard
              name="Bandhan Small Cap"
              returns="32% (3Y)"
              logo="/bandhan.png"
            />
          </div>
        </div>
      </div>

      {/* Bottom CTA Section (Sticks to bottom) */}
      <div className="mt-auto pt-4">
        <button className="w-full py-3 rounded-full bg-brand-gradient text-white font-medium flex justify-center items-center gap-3 text-[14px]">
          Start Investing Today
          <span className="bg-success-bg text-success px-3 py-1 rounded-full text-[11px] font-semibold">
            +20 pts
          </span>
        </button>

        <div className="mt-4 text-[12px] text-brand-primary flex items-center gap-2">
          ⚡ <span className="font-semibold">Express setup:</span>
          <span className="text-neutral-600">Complete in under 3 minutes</span>
        </div>
      </div>
    </div>
  );
};

export default StepOneCard;

function FundCard({
  name,
  returns,
  logo,
}: {
  name: string;
  returns: string;
  logo: string;
}) {
  return (
    <div className="flex-1 min-w-0 flex items-center gap-3 border border-[#D3DFEB] rounded-xl px-3 py-3 hover:border-brand-primary transition">
      <Image src={logo} alt={name} width={32} height={32} />

      <div className="min-w-0">
        <p className="text-[13px] font-medium text-brand-primary truncate">
          {name}
        </p>
        <p className="text-success text-[11px]">{returns}</p>
      </div>
    </div>
  );
}
