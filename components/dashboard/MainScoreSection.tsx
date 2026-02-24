import Card from "../ui/Card";
import Breakdown from "./Breakdown";
import FinancialAge from "./FinancialAge";
import ScoreGauge from "./ScoreGauge";

export default function MainScoreSection() {
  return (
    <div
      className="
      rounded-xl
      bg-linear-to-b
      from-[#F4F8FC]
      to-[#EEF3F8]
      border border-[#E6EEF5]
      shadow-[0px_15px_45px_rgba(41,79,124,0.12)]
    "
    >
      <Card className="p-6 md:p-8 bg-transparent shadow-none">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(320px,360px)_1fr] gap-8 md:gap-16">
          <ScoreGauge />
          <div className="space-y-6 md:space-y-10">
            <FinancialAge />
            <Breakdown />
          </div>
        </div>
      </Card>
    </div>
  );
}
