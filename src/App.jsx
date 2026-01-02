// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home page components
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

// About pages
import WhyKit from "./NavbarContent/About/WhyKit";
import AboutUs from "./NavbarContent/About/AboutUs";
import AICTE from "./NavbarContent/About/AICTE";
import University from "./NavbarContent/About/University";
import DTE_Approval from "./NavbarContent/About/DTE_Approval";
import GovtResolution from "./NavbarContent/About/GovtResolution";

// Admission pages
import FYDSYACAP from "./NavbarContent/Admissions/FY_DSY_ACAP_ILMeritList2025_26";
import FYDSYNonCAP from "./NavbarContent/Admissions/FY_DSY_Non_CAP_IL_Admission";
import FeesStructure from "./NavbarContent/Admissions/FeeStructure";
import AdmissionEnquiry from "./NavbarContent/Admissions/Admission/Intake"; // check if Intake page correct
import AdmissionProcedure from "./NavbarContent/Admissions/Admission/Admission_Procedure";
import EligibilityCriteria from "./NavbarContent/Admissions/Admission/Eligibility_Criteria";
import FeeStructure from "./NavbarContent/Admissions/Admission/Fee_Structure";
import Intake from "./NavbarContent/Admissions/Admission/Intake";

// Departments
import ComputerDept from "./NavbarContent/Department/Computer";
import CivilDept from "./NavbarContent/Department/Civil";
import ElectronicsDept from "./NavbarContent/Department/Electronics";
import MechanicalDept from "./NavbarContent/Department/Mechanical";

// NAAC
import Accreditation from "./NavbarContent/NAAC/Accreditation";
import AcademicCalendarNAAC from "./NavbarContent/NAAC/Academic_Calendar";
import AuditStatement from "./NavbarContent/NAAC/Audit_Statement";

// Academics
import RulesRegulations from "./NavbarContent/Academics/Rules_Regulations";
import NPTELCourses from "./NavbarContent/Academics/NPTEL_Courses";
import AcademicCalendar from "./NavbarContent/Academics/Academic_Calendar";

// Facilities
import Library from "./NavbarContent/Facilities/Library";
import Workshop from "./NavbarContent/Facilities/Workshop";  
import ATM from "./NavbarContent/Facilities/ATM";
import Sports from "./NavbarContent/Facilities/Sports";

// Placements
import Placement2020 from "./NavbarContent/Placements/Placement2020_21";
import Placement2021 from "./NavbarContent/Placements/Placement2021_22";
import Placement2022 from "./NavbarContent/Placements/Placement2022_23";
import Placement2023 from "./NavbarContent/Placements/Placement2023_24";
import Placement2024 from "./NavbarContent/Placements/Placement2024_25";
import Placement2025 from "./NavbarContent/Placements/Placement2025_26";

// Others
import Contact from "./NavbarContent/ContactUs";
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

        {/* ADMISSION */}
        <Route path="/admission/fy-dsy-acap-il-merit-list-2025-26" element={<FYDSYACAP />} />
        <Route path="/admission/fy-dsy-non-cap-il-admission" element={<FYDSYNonCAP />} />
        <Route path="/admission/fees-structure/2025-26" element={<FeesStructure />} />
        <Route path="/admission/admission-enquiry" element={<AdmissionEnquiry />} />
        <Route path="/admission/admission-procedure" element={<AdmissionProcedure />} />
        <Route path="/admission/eligibility-criteria" element={<EligibilityCriteria />} />
        <Route path="/admission/fee-structure" element={<FeeStructure />} />
        <Route path="/admission/intake" element={<Intake />} />

        {/* DEPARTMENTS */}
        <Route path="/departments/computer" element={<ComputerDept />} />
        <Route path="/departments/civil" element={<CivilDept />} />
        <Route path="/departments/electronics" element={<ElectronicsDept />} />
        <Route path="/departments/mechanical" element={<MechanicalDept />} />

        {/* NAAC */}
        <Route path="/naac/accreditation" element={<Accreditation />} />
        <Route path="/naac/academic-calendar" element={<AcademicCalendarNAAC />} />
        <Route path="/naac/audit-statement" element={<AuditStatement />} />

        {/* ACADEMICS */}
        <Route path="/academics/rules-regulations" element={<RulesRegulations />} />
        <Route path="/academics/nptel-courses" element={<NPTELCourses />} />
        <Route path="/academics/academic-calendar" element={<AcademicCalendar />} />

        {/* FACILITIES */}
        <Route path="/facilities/library" element={<Library />} />
        <Route path="/facilities/workshop" element={<Workshop />} />
        <Route path="/facilities/atm" element={<ATM />} />
        <Route path="/facilities/sports" element={<Sports />} />

        {/* PLACEMENTS */}
        <Route path="/placements/2020-21" element={<Placement2020 />} />
        <Route path="/placements/2021-22" element={<Placement2021 />} />
        <Route path="/placements/2022-23" element={<Placement2022 />} />
        <Route path="/placements/2023-24" element={<Placement2023 />} />
        <Route path="/placements/2024-25" element={<Placement2024 />} />
        <Route path="/placements/2025-26" element={<Placement2025 />} />

        {/* OTHERS */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
