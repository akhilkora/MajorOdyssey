import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import OurMission from "../components/OurMission"
import GetStarted from "../components/GetStarted"
import FeatureShowcase from "../components/FeatureShowcase"

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <GetStarted />
            <FeatureShowcase/>
            <OurMission/>
        </>
  );
}
