import React, { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`nav-items ${open ? "open" : ""}`}>
        <li><a href="/">Home</a></li>

        <li className="dropdown">
          <a href="#">About</a>
          <ul className="dropdown-menu">
            <li><a href="/About/WhyKIT">Why KIT</a></li>
            <li><a href="/About/AboutUs">About Us</a></li>
            <li><a href="/About/AICTE">AICTE Approvals</a></li>
            <li><a href="/About/University">University Affiliation</a></li>
            <li><a href="/About/DTE_Approval">DTE Approval</a></li>
            <li><a href="/About/GovtResolution">Govt Resolution</a></li>
          
          </ul>
        </li>

        <li className="dropdown">
          <a href="#">Admission</a>
          <ul className="dropdown-menu">
            <li><a href="/Admission/FY_DSY_ACAP_IL_Merit_List_2025-26">FY_DSY_ACAP_ILMeritList2025_26</a></li>
            <li><a href="/Admission/FY_DSY_Non_CAP_IL_Admission">FY_DSY_Non_CAP_ILAdmission</a></li>

            <li className="submenu">
              Fees Structure
              <ul>
                <li><a href="/Admission/FeesStructure/2025-26">2025-26</a></li>
              </ul>
            </li>

            <li className="submenu">
              Admission
              <ul>
                <li><a href="./Admissions/Admission/Admission_Enquiry">Admission Enquiry</a></li>
                <li><a href="./Admissions/Admission/Admission_Procedure">Admission Procedure</a></li>
                <li><a href="./Admissions/Admission/Eligibility_Criteria">Eligibility Criteria</a></li>
                <li><a href="./Admissions/Admission/Fee_Structure">Fee Structure</a></li>
                <li><a href="./Admissions/Admission/Intake">Intake</a></li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#">Department</a>
          <ul className="dropdown-menu">
            <li><a href="./Departments/Computer">Computer Science & Engineering</a></li>
            <li><a href="./Departments/Civil">Civil Engineering</a></li>
            <li><a href="./Departments/Electronics">Electronics & Telecommunication</a></li>
            <li><a href="./Departments/Mechanical">Mechanical Engineering</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#">NAAC</a>
          <ul className="dropdown-menu">
            <li><a href="./NAAC/Accreditation">Accreditation</a></li>
            <li><a href="./NAAC/Academic_Calendar">Academic Calendar</a></li>
            <li><a href="./NAAC/Audit_Statement">Audit Statement</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#">Academics</a>
          <ul className="dropdown-menu">
            <li><a href="./Academics/Academic_Calendar">Academic Calendar</a></li>
            <li><a href="./Academics/Rules_Regulations">Rules & Regulations</a></li>
            <li><a href="./Academics/NPTEL_Courses">NPTEL Courses</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#">Facilities</a>
          <ul className="dropdown-menu">
            <li><a href="./Facilities/Library">Library</a></li>
            <li><a href="./Facilities/Workshop">Workshop</a></li>
            <li><a href="./Facilities/ATM">ATM Facility</a></li>
            <li><a href="./Facilities/Sports">Sports</a></li>
          </ul>
        </li>

        <li className="dropdown">
          <a href="#">Placements</a>
          <ul className="dropdown-menu">
            <li><a href="./images/Placements/2020-21">2020-21</a></li>
            <li><a href="./images/Placements/2021-22">2021-22</a></li>
            <li><a href="./images/Placements/2022-23">2022-23</a></li>
            <li><a href="./images/Placements/2023-24">2023-24</a></li>
            <li><a href="./images/Placements/2024-25">2024-25</a></li>
            <li><a href="./images/Placements/2025-26">2025-26</a></li>
          </ul>
        </li>

        <li><a href="./images/Gallery">Gallery</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  );
}
