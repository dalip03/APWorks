import Hero from "./components/Herosection";
import WorkWith from "./components/WorkWith";
import OurVision from "./components/OurVision";
import WhyUs from "./components/WhyUs";
import Outcomes from "./components/Outcomes";
import Talkus from "./components/Talkus";
import OurNewServices from "./components/OurNewServices";
import ProgressDashboard from "./components/ProgressDashboard";
import DotGrid from "./components/Backgrounds/DotGrid";
import Galaxy from "./components/Backgrounds/Galaxy";

export default function Home() {
  return (
    <div>  
      <DotGrid
        dotSize={3}
        gap={15}
        baseColor="#281E37"
        activeColor="#ffffff"
        proximity={120}
        speedTrigger={80}
        shockRadius={250}
        shockStrength={10}
        maxSpeed={4000}
        resistance={750}
        returnDuration={1.5}
        className="my-dot-grid"
        style={{ }} // Add this line to satisfy the required prop
        id="home"
      />
       <Galaxy
        hueShift={0}
        starSpeed={0.6}
        density={0.6}
        glowIntensity={0.1}
        saturation={0}
        rotationSpeed={0.05}
      />
      <ProgressDashboard id="in-flight" />
      <OurVision id="vision" />
      <OurNewServices id="offerings" />
      <Outcomes id="case-studies" />
      <WhyUs />
      <WorkWith id="who-we-are" />
      <Talkus id="contact" />
    </div>
  );
}
