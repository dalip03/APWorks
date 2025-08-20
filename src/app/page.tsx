import Hero from "./components/Herosection";
import WorkWith from "./components/WorkWith";
import OurVision from "./components/OurVision";
import WhyUs from "./components/WhyUs";
import Outcomes from "./components/Outcomes";
import Talkus from "./components/Talkus";
import OurNewServices from "./components/OurNewServices";
import ProgressDashboard from "./components/ProgressDashboard";


export default function Home() {
  return (
    <div>
      <Hero id="home"/>
      <ProgressDashboard id="in-flight"/>
      <OurVision id="vision"/>
      <OurNewServices id="offerings"/>
      <Outcomes id="case-studies"/>
      <WhyUs />
      <WorkWith id="who-we-are"/>
      <Talkus id="contact"/>
    </div>
  );
}
