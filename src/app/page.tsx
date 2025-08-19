import Hero from "./components/Herosection";
import WorkWith from "./components/WorkWith";
import OurVision from "./components/OurVision";
import WhyUs from "./components/WhyUs";
import Outcomes from "./components/Outcomes";
import Talkus from "./components/Talkus";
import OurNewServices from "./components/OurNewServices";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurNewServices/>
      <WorkWith />
      <OurVision />
      <Outcomes />
      <WhyUs />
      <Talkus />
    </div>
  );
}
