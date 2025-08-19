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
      <OurNewServices id="offerings"/>
      <WorkWith id="who-we-are"/>
      <OurVision id="vision"/>
      <Outcomes id="case-studies"/>
      <WhyUs />
      <ProgressDashboard id="in-flight"/>
      <Talkus id="contact"/>
    </div>
  );
}
