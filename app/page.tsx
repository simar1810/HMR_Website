import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import PopularMenu from "./components/PopularMenu";
import CleanFood from "./components/CleanFood";
import FAQ from "./components/FAQ";
import TotalControl from "./components/TotalControl";
import SlammedSchedule from "./components/SlammedSchedule";
import RealStories from "./components/RealStories";
import CommunityScroller from "./components/CommunityScroller";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />
      <PopularMenu />
      <TotalControl />
      <HowItWorks />
      <SlammedSchedule />
      <RealStories />
      <CleanFood />   
      <FAQ />
      <CommunityScroller />
    

    </main>
  );
}
