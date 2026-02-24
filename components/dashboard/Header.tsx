import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
      {/* Left Content */}
      <div className="max-w-2xl">
        <h1 className="text-[22px] sm:text-[26px] md:text-[28px] font-semibold text-brand-primary leading-tight">
          Good Morning, Ankit!
        </h1>

        <p className="mt-2 text-[14px] sm:text-[16px] md:text-[18px] text-text-secondary leading-relaxed">
          At 28, your income is strong, but your wealth efficiency is lagging.
        </p>
      </div>

      {/* Verified Badge */}
      <div className="self-start md:self-auto flex items-center gap-2 px-4 py-2 rounded-full bg-success-bg text-success-dark text-[12px] sm:text-sm shadow-sm whitespace-nowrap">
        <Image src="/frame.png" alt="verified-logo" width={20} height={20} />
        <span className="font-medium">Verified Analysis</span>
      </div>
    </div>
  );
}
