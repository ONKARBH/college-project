import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


/* HOME COMPONENTS */
import Slider from "./components/Slider";
import Principle_PresidentMSG from "./components/Principle_PresidentMSG";
import AboutKIT from "./components/AboutKIT";
import PlacedStudent from "./components/PlacedStudent";
import SomeHighlights from "./components/SomeHighlights";
import OurAchiveMent from "./components/OurAchiveMent";
import OurRecruters from "./components/OurRecruters";
import NewsPaper from "./components/NewsPaper";
import DepartmentSection from "./components/DepartmentSection";
// import QuickLinks from "./components/QuickLinks";
// import UpcomingEvents from "./components/UpcomingEvents";
// import CampusGallery from "./components/Gallery";
// import Testimonials from "./components/Testimonials";

/* ABOUT */
import WhyKit from "./NavbarContent/About/WhyKit";
import AboutUs from "./NavbarContent/About/AboutUs";
// import AICTE from "./NavbarContent/About/AICTE";
import University from "./NavbarContent/About/University";
import DTE_Approval from "./NavbarContent/About/DTE_Approval";
import GovtResolution from "./NavbarContent/About/GovtResolution";
import AISHE from "./NavbarContent/About/AISHE";

/* ADMISSIONS */
import FY_DSY_ACAP_ILMeritList2025_26 from "./NavbarContent/Admissions/FY_DSY_ACAP_ILMeritList2025_26";
import FY_DSY_Non_CAP_IL_Admission from "./NavbarContent/Admissions/FY_DSY_Non_CAP_IL_Admission";
import Admission_Procedure from "./NavbarContent/Admissions/Admission/Admission_Procedure";
import Dsy_Merit_List from "./NavbarContent/Admissions/Dsy_Merit_List";
import Brochure from "./NavbarContent/Admissions/Brochure";
import Eligibility_Criteria from "./NavbarContent/Admissions/Admission/Eligibility_Criteria";
import Fee_Structure from "./NavbarContent/Admissions/Admission/Fee_Structure";
import Intake from "./NavbarContent/Admissions/Admission/Intake";

/* DEPARTMENTS */
import Computer from "./NavbarContent/Department/Computer";
import Civil from "./NavbarContent/Department/Civil";
import Electronics from "./NavbarContent/Department/Electronics";
import Mechanical from "./NavbarContent/Department/Mechanical";

/* NAAC */
import Accreditation from "./NavbarContent/NAAC/Accreditation";
import Audit_Statement from "./NavbarContent/NAAC/Audit_Statement";
import Academic_Calendar1 from "./NavbarContent/NAAC/Academic_Calender1";

/* ACADEMICS */
import Rules_Regulations from "./NavbarContent/Academics/Rules_Regulations";
import NPTEL_Courses from "./NavbarContent/Academics/NPTEL_Courses";
import Academic_Calendar from "./NavbarContent/Academics/Academic_Calendar";

/* FACILITIES */
import Library from "./NavbarContent/Facilities/Library";
import Workshop from "./NavbarContent/Facilities/Workshop";
import ATM from "./NavbarContent/Facilities/ATM";
import Gym from "./NavbarContent/Facilities/Gym";
import PanjabRao_Deshmukh_Scholarship from "./NavbarContent/Facilities/scholarships/panjabrao_deshmukh_scholarship";
import Mahatma_Phule_Scholarship from "./NavbarContent/Facilities/scholarships/mahatma_phule_scholarship";
import Rajarshi_Shahu_Maharaj_Scholarship from "./NavbarContent/Facilities/scholarships/rajarshi_shahu_maharaj_scholarship";

/* PLACEMENTS */
import Placement2020_21 from "./NavbarContent/Placements/Placement2020_21";
import Placement2021_22 from "./NavbarContent/Placements/Placement2021_22";
import Placement2022_23 from "./NavbarContent/Placements/Placement2022_23";
import Placement2023_24 from "./NavbarContent/Placements/Placement2023_24";
import Placement2024_25 from "./NavbarContent/Placements/Placement2024_25";
import Placement2025_26 from "./NavbarContent/Placements/Placement2025_26";

/* OTHERS */
import ContactUs from "./NavbarContent/ContactUs";
import Gallery from "./NavbarContent/Gallary";

function App() {
  const [isEditMode, setIsEditMode] = useState(false);

  const [homeComponents, setHomeComponents] = useState([
    { id: "slider", component: <Slider />, title: "Hero Slider", enabled: true, column: "full" },
    { id: "highlights", component: <SomeHighlights />, title: "Statistics", enabled: true, column: "full" },
    { id: "principleMsg", component: <Principle_PresidentMSG />, title: "Leadership Messages", enabled: true, column: "left" },
    { id: "aboutKit", component: <AboutKIT />, title: "About KIT", enabled: true, column: "left" },
    { id: "departments", component: <DepartmentSection />, title: "Departments", enabled: true, column: "right" },
    { id: "achievements", component: <OurAchiveMent />, title: "Achievements", enabled: true, column: "right" },
    { id: "recruiters", component: <OurRecruters />, title: "Our Recruiters", enabled: true, column: "full" },
    { id: "placedStudents", component: <PlacedStudent />, title: "Placed Students", enabled: true, column: "full" },
    { id: "news", component: <NewsPaper />, title: "News", enabled: true, column: "right" },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setHomeComponents((items) => {
      const oldIndex = items.findIndex((i) => i.id === active.id);
      const newIndex = items.findIndex((i) => i.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
            >
              <SortableContext
                items={homeComponents.map((c) => c.id)}
                strategy={verticalListSortingStrategy}
              >
                {homeComponents.map((c) => (
                  <div key={c.id}>{c.component}</div>
                ))}
              </SortableContext>
            </DndContext>
          }
        />

        {/* ABOUT ROUTES */}
        <Route path="/about/whykit" element={<WhyKit />} />
        <Route path="/about/aboutus" element={<AboutUs />} />
        {/* <Route path="/about/aicte" element={<AICTE />} /> */}

        <Route path="/about/university" element={<University />} />
        <Route path="/about/dte_approval" element={<DTE_Approval />} />
        <Route path="/about/govtresolution" element={<GovtResolution />} />
        <Route path="/about/aishe" element={<AISHE />} />

        {/* ADMISSIONS ROUTES */}
        <Route path="/admissions/fy_dsy_acap_ilmeritlist2025_26" element={<FY_DSY_ACAP_ILMeritList2025_26 />} />
        <Route path="/admissions/fy_dsy_non_cap_il_admission" element={<FY_DSY_Non_CAP_IL_Admission />} />
        <Route path="/admissions/dsy_merit_list" element={<Dsy_Merit_List />} />
        <Route path="/admissions/brochure" element={<Brochure />} />
        <Route path="/admissions/feestructure" element={<Fee_Structure />} />
        <Route path="/admission/admission_procedure" element={<Admission_Procedure />} />
        <Route path="/admission/eligibility_criteria" element={<Eligibility_Criteria />} />
        <Route path="/admission/fee_structure" element={<Fee_Structure />} />
        <Route path="/admission/intake" element={<Intake />} />

        {/* DEPARTMENTS ROUTES */}
        <Route path="/departments/computer" element={<Computer />} />
        <Route path="/departments/civil" element={<Civil />} />
        <Route path="/departments/electronics" element={<Electronics />} />
        <Route path="/departments/mechanical" element={<Mechanical />} />

        {/* NAAC ROUTES */}
        <Route path="/naac/accreditation" element={<Accreditation />} />
        <Route path="/naac/academic_calendar1" element={<Academic_Calendar1 />} />
        <Route path="/naac/audit_statement" element={<Audit_Statement />} />

        {/* ACADEMICS ROUTES */}
        <Route path="/academics/academic_calendar" element={<Academic_Calendar />} />
        <Route path="/academics/rules_regulations" element={<Rules_Regulations />} />
        <Route path="/academics/nptel_courses" element={<NPTEL_Courses />} />

        {/* FACILITIES ROUTES */}
        <Route path="/facilities/library" element={<Library />} />
        <Route path="/facilities/workshop" element={<Workshop />} />
        <Route path="/facilities/atm" element={<ATM />} />
        <Route path="/facilities/Gym" element={<Gym />} />
        <Route path="/facilities/scholarships/mahatma_phule_scholarship" element={<Mahatma_Phule_Scholarship />} />
        <Route path="/facilities/scholarships/panjabrao_deshmukh_scholarship" element={<PanjabRao_Deshmukh_Scholarship />} />
        <Route path="/facilities/scholarships/rajarshi_shahu_maharaj_scholarship" element={<Rajarshi_Shahu_Maharaj_Scholarship />} />

        {/* PLACEMENTS ROUTES */}
        <Route path="/Placements/Placement2020_21" element={<Placement2020_21 />} />
        <Route path="/Placements/Placement2021_22" element={<Placement2021_22 />} />
        <Route path="/Placements/Placement2022_23" element={<Placement2022_23 />} />
        <Route path="/Placements/Placement2023_24" element={<Placement2023_24 />} />
        <Route path="/Placements/Placement2024_25" element={<Placement2024_25 />} />
        <Route path="/Placements/Placement2025_26" element={<Placement2025_26 />} />

        {/* OTHER ROUTES */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
