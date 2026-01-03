import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* HOME */
import Slider from "./components/Slider";
import Principle_PresidentMSG from "./components/Principle_PresidentMSG";
import AboutKIT from "./components/AboutKIT";
import VisionMission from "./components/VisionMission";
import Approved_diif_certificate from "./components/Approved_diif_certificate";
import PlacedStudent from "./components/PlacedStudent";
import SomeHighlights from "./components/SomeHighlights";
import OurAchiveMent from "./components/OurAchiveMent";
import OurRecruters from "./components/OurRecruters";
import NewsPaper from "./components/NewsPaper";

/* ABOUT */
import WhyKit from "./NavbarContent/About/WhyKit";
import AboutUs from "./NavbarContent/About/AboutUs";
import AICTE from "./NavbarContent/About/AICTE";
import University from "./NavbarContent/About/University";
import DTE_Approval from "./NavbarContent/About/DTE_Approval";
import GovtResolution from "./NavbarContent/About/GovtResolution";

/* ADMISSIONS */
import FY_DSY_ACAP_ILMeritList2025_26 from "./NavbarContent/Admissions/FY_DSY_ACAP_ILMeritList2025_26";
import FY_DSY_Non_CAP_IL_Admission from "./NavbarContent/Admissions/FY_DSY_Non_CAP_IL_Admission";

import Admission_Procedure from "./NavbarContent/Admissions/Admission/Admission_Procedure";
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
import Academic_Calendar1 from "./NavbarContent/NAAC/Academic_Calendar1";

/* ACADEMICS */
import Rules_Regulations from "./NavbarContent/Academics/Rules_Regulations";
import NPTEL_Courses from "./NavbarContent/Academics/NPTEL_Courses";
import Academic_Calendar from "./NavbarContent/Academics/Academic_Calendar";

/* FACILITIES */
import Library from "./NavbarContent/Facilities/Library";
import Workshop from "./NavbarContent/Facilities/Workshop";
import ATM from "./NavbarContent/Facilities/ATM";
import Sports from "./NavbarContent/Facilities/Sports";

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
  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Principle_PresidentMSG />
              <AboutKIT />
              <Approved_diif_certificate />
              <VisionMission />
              <PlacedStudent />
              <SomeHighlights />
              <OurRecruters />
              <OurAchiveMent />
              <NewsPaper />
            </>
          }
        />

        {/* ABOUT */}
        <Route path="/about/whykit" element={<WhyKit />} />
        <Route path="/about/aboutus" element={<AboutUs />} />
        <Route path="/about/aicte" element={<AICTE />} />
        <Route path="/about/university" element={<University />} />
        <Route path="/about/dte_approval" element={<DTE_Approval />} />
        <Route path="/about/govtresolution" element={<GovtResolution />} />

        {/* ADMISSIONS */}
        <Route
          path="/admissions/fy-dsy-acap-il-merit-list-2025-26"
          element={<FY_DSY_ACAP_ILMeritList2025_26 />}
        />
        <Route
          path="/admissions/fy-dsy-non-cap-il-admission"
          element={<FY_DSY_Non_CAP_IL_Admission />}
        />
        <Route path="/admission/admission_procedure" element={<Admission_Procedure />} />
        <Route path="/admission/eligibility_criteria" element={<Eligibility_Criteria />} />
        <Route path="/admission/fee_structure" element={<Fee_Structure />} />
        <Route path="/admission/intake" element={<Intake />} />

        {/* DEPARTMENTS */}
        <Route path="/departments/computer" element={<Computer />} />
        <Route path="/departments/civil" element={<Civil />} />
        <Route path="/departments/electronics" element={<Electronics />} />
        <Route path="/departments/mechanical" element={<Mechanical />} />

        {/* NAAC */}
        <Route path="/naac/accreditation" element={<Accreditation />} />
        <Route path="/naac/academic_calendar1" element={<Academic_Calendar1 />} />
        <Route path="/naac/audit_statement" element={<Audit_Statement />} />

        {/* ACADEMICS */}
        <Route path="/academics/rules_regulations" element={<Rules_Regulations />} />
        <Route path="/academics/nptel_courses" element={<NPTEL_Courses />} />
        <Route path="/academics/academic_calendar" element={<Academic_Calendar />} />

        {/* FACILITIES */}
        <Route path="/facilities/library" element={<Library />} />
        <Route path="/facilities/workshop" element={<Workshop />} />
        <Route path="/facilities/atm" element={<ATM />} />
        <Route path="/facilities/sports" element={<Sports />} />

        {/* PLACEMENTS */}
        <Route path="/placements/placement2020_21" element={<Placement2020_21 />} />
        <Route path="/placements/placement2021_22" element={<Placement2021_22 />} />
        <Route path="/placements/placement2022_23" element={<Placement2022_23 />} />
        <Route path="/placements/placement2023_24" element={<Placement2023_24 />} />
        <Route path="/placements/placement2024_25" element={<Placement2024_25 />} />
        <Route path="/placements/placement2025_26" element={<Placement2025_26 />} />
        {/* OTHERS */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
