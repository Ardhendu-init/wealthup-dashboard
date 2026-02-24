export default function FinancialAge() {
  return (
    <div className="w-full">
      <h3 className="text-[18px] md:text-[20px] font-normal text-brand-primary mb-4">
        Financial independence age
      </h3>

      <div className="relative w-full max-w-110 mx-auto md:mx-0 flex flex-col md:flex-row rounded-[14px] overflow-hidden shadow-[0px_0px_24px_0px_#4A90E240] border border-[#E6EEF6]">
        {/* Left Box */}
        <div className="flex-1 bg-[#F9F9F9] px-4 py-4 text-center">
          <p className="text-sm text-[#828282]">Current Trajectory</p>

          <p className="text-[26px] md:text-[30px] font-bold text-[#616161] mt-2">
            65
          </p>

          <p className="text-[12px] text-[#7C7C7C] mt-2">
            Based on current savings you have
          </p>
        </div>

        {/* Divider on Desktop Only */}
        <div className="hidden md:block w-px bg-[#E6EEF6]" />

        {/* Right Box */}
        <div className="flex-1 bg-white px-4 py-4 text-center">
          <p className="text-sm text-[#307ED9] font-medium">Your Potential</p>

          <p className="text-[26px] md:text-[30px] font-bold text-brand-primary mt-2">
            38
          </p>

          <p className="text-[12px] text-brand-primary mt-2">
            By following our personalized roadmap
          </p>
        </div>

        {/* Floating Green Badge */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[48%] md:top-1/2 -translate-y-1/2 flex items-center">
          <div className="bg-success rounded-s-md text-white text-[10px] font-medium px-3 py-1 relative shadow-md whitespace-nowrap">
            ✨ 27 years sooner!
            <span
              className="absolute top-0 -right-4 w-0 h-0 
              border-t-12 border-b-12 
              border-l-16
              border-t-transparent 
              border-b-transparent 
              border-l-success"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
