import { useState } from 'react'
 
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Principle_PresidentMSG from './components/Principle_PresidentMSG'
import NoticeBoard from './components/NoticeBoard'
import AboutKIT from './components/AboutKIT'
import Approved_diif_certificate from './components/Approved_diif_certificate'
import VisionMission from './components/VisionMission'
import PlacedStudent from './components/PlacedStudent'
import SomeHighlights from './components/SomeHighlights'
import OurRecruters from './components/OurRecruters'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Navbar/>
     <Slider/>
     <Principle_PresidentMSG/>
     {/* <NoticeBoard/> */}
     <AboutKIT/>
     <Approved_diif_certificate/>
     <VisionMission/>
     <PlacedStudent/>
     <SomeHighlights/>
     <OurRecruters/>
    </>
  )
}

export default App
