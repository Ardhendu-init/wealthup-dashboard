export default function Breakdown() {
  const items = [
    { label: "Emergency Funds", value: 0 },
    { label: "Liquidity", value: 55 },
    { label: "Investments", value: 100 },
    { label: "Health Insurance", value: 100 },
    { label: "Life Insurance", value: 35 },
    { label: "Savings", value: 80 },
  ];

  const columns = [
    [items[0], items[3]],
    [items[1], items[4]],
    [items[2], items[5]],
  ];

  return (
    <div className="w-full">
      <h3 className="text-[18px] md:text-[20px] font-semibold text-brand-primary mb-6 md:mb-8">
        Your score breakdown
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {columns.map((col, index) => (
          <div
            key={index}
            className={`
              ${index !== columns.length - 1 ? "md:border-r md:border-[#E6EEF5]" : ""}
              px-0 sm:px-4 md:px-4
            `}
          >
            <div className="space-y-6 md:space-y-8 py-4">
              {col.map((item) => (
                <Bar key={item.label} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-[13px] md:text-sm mb-2">
        <span className="font-medium text-brand-primary truncate">{label}</span>

        <span className="text-[#7C7C7C] whitespace-nowrap">
          {Math.round(value / 5)} / 20
        </span>
      </div>

      <div className="h-2.5 md:h-3 bg-[#E9ECEF] rounded-full overflow-hidden">
        <div
          style={{ width: `${value}%` }}
          className="h-full bg-score-gradient rounded-full"
        />
      </div>
    </div>
  );
}
