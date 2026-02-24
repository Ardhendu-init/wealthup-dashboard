import Header from "@/components/dashboard/Header";
import MainScoreSection from "@/components/dashboard/MainScoreSection";
import RoadmapSection from "@/components/dashboard/RoadmapSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-body-gradient flex justify-center py-8">
      <div className="w-full max-w-295 px-4 md:px-6 lg:px-0 space-y-6 md:space-y-10">
        <div className="flex justify-center">
          <Image
            src="/wealthup-logo.png"
            alt="Wealthup-logo"
            width={126}
            height={40}
            className="h-7 w-auto"
            priority
          />
        </div>

        <Header />
        <MainScoreSection />
        <RoadmapSection />
      </div>
    </main>
  );
}
