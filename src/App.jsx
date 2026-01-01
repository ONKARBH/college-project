import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Approved_diif_certificate from "./components/Approved_diif_certificate";
import Slider from "./components/Slider";
import Principle_PresidentMSG from "./components/Principle_PresidentMSG";
import AboutKIT from "./components/AboutKIT";
import VisionMission from "./components/VisionMission";
import PlacedStudent from "./components/PlacedStudent";
import OurAchiveMent from "./components/OurAchiveMent";
import SomeHighlights from "./components/SomeHighlights";
import OurRecruters from "./components/OurRecruters";
import NewsPaper from "./components/NewsPaper";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      {/* HOME CONTENT */}
      <Slider />
      <Principle_PresidentMSG />
      <AboutKIT />
      <Approved_diif_certificate />
      <VisionMission />
      
      <PlacedStudent />
       <SomeHighlights />
       <OurRecruters />
      <OurAchiveMent />
      <NewsPaper/>

     
    </>
  );
}

export default App;
