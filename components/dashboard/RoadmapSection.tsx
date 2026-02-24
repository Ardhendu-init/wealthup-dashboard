import Card from "@/components/ui/Card";
import Image from "next/image";
import StepOneCard from "./roadmapCard/StepOneCard";
import LockedCard from "./roadmapCard/LockedCard";

export default function RoadmapSection() {
  return (
    <Card className="p-6 bg-linear-to-b from-[#F5F9FD] to-[#EDF3F9] border border-[#E6EEF5] shadow-[0px_20px_60px_rgba(41,79,124,0.15)]">
      <h2 className="text-[22px] font-semibold text-brand-primary mb-10">
        Your personalized roadmap to{" "}
        <span className="font-bold">70+ WealthUp</span> score
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <StepOneCard />
        <LockedCard
          step="Step 2"
          title="Optimize investments"
          description="Invest regularly to build long-term wealth. Explore diversified mutual funds and asset allocation strategies tailored to your risk profile."
          points="+12 pts"
        />
        <LockedCard
          step="Step 3"
          title="Maximize growth"
          description="Accelerate your financial future by reviewing advanced growth options, retirement planning, and tax-efficient investment vehicles."
          points="+8 pts"
        />
      </div>
    </Card>
  );
}
