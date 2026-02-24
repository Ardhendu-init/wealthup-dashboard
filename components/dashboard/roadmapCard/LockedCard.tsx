const LockedCard = ({
  step,
  title,
  description,
  points,
}: {
  step: string;
  title: string;
  description: string;
  points: string;
}) => {
  return (
    <div className="bg-[#F3F6FA] rounded-2xl border border-[#E6EEF5] p-4 opacity-80 flex flex-col h-full justify-between">
      {/* TOP CONTENT */}
      <div>
        <p className="text-[13px] text-neutral-500 mb-2">{step}</p>

        <h3 className="text-[18px] font-semibold text-brand-primary mb-2">
          {title}
        </h3>

        <p className="text-[14px] text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-10">
        <button className="w-full py-3 rounded-full bg-[#9DB8D8] text-white font-medium flex justify-center items-center gap-3 cursor-not-allowed">
          Begin Investing
          <span className="bg-success-bg text-success px-3 py-1 rounded-full text-sm font-semibold">
            {points}
          </span>
        </button>

        <div className="mt-4 text-sm text-neutral-500 flex items-center gap-2">
          🔒 Complete step 1 (critical) to unlock
        </div>
      </div>
    </div>
  );
};
export default LockedCard;
