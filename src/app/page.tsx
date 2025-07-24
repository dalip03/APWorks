import Hero from "./components/Herosection";
import HeroInfo from "./components/HeroInfo";
import WorkWith from "./components/WorkWith";
import OurVision from "./components/OurVision";
import WhyUs from "./components/WhyUs";
import OurServices from "./components/OurServices";
import Outcomes from "./components/Outcomes";
import Talkus from "./components/Talkus";
import OurMission from "./components/Ourmission";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurMission />
      <HeroInfo />

      <OurServices />
      <WorkWith />
      <OurVision />
      <Outcomes />
      <WhyUs />
      <Talkus />
    </div>
  );
}
