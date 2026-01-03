import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMenuToggle = () => {
    const newOpenState = !open;
    setOpen(newOpenState);

    if (newOpenState) {
      document.body.classList.add("menu-open");
      setActiveDropdown(null);
      setActiveSubmenu(null);
    } else {
      document.body.classList.remove("menu-open");
    }
  };

  const handleDropdownClick = (index, e) => {
    if (isMobile) {
      e.preventDefault();
      if (activeDropdown === index) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      } else {
        setActiveDropdown(index);
        setActiveSubmenu(null);
      }
    }
  };

  const handleSubmenuClick = (index, e) => {
    if (isMobile) {
      e.preventDefault();
      if (activeSubmenu === index) {
        setActiveSubmenu(null);
      } else {
        setActiveSubmenu(index);
      }
    }
  };

  const handleNavClick = () => {
    setOpen(false);
    setActiveDropdown(null);
    setActiveSubmenu(null);
    document.body.classList.remove("menu-open");
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && !e.target.closest(".navbar")) {
        handleNavClick();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={handleMenuToggle} aria-label="Toggle menu">
        {open ? "✕" : "☰"}
      </button>

      <ul className={`nav-items ${open ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={handleNavClick}>Home</Link>
        </li>

        {/* About Dropdown */}
        <li className={`dropdown ${activeDropdown === 1 ? "active" : ""}`}>
          <button
            className="dropdown-toggle"
            onClick={(e) => handleDropdownClick(1, e)}
          >
            About <span className="dropdown-arrow">▼</span>
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/about/whykit" onClick={handleNavClick}>Why KIT</Link></li>
            <li><Link to="/about/aboutus" onClick={handleNavClick}>About Us</Link></li>
            <li><Link to="/about/aicte" onClick={handleNavClick}>AICTE Approvals</Link></li>
            <li><Link to="/about/university" onClick={handleNavClick}>University Affiliation</Link></li>
            <li><Link to="/about/dte_approval" onClick={handleNavClick}>DTE Approval</Link></li>
            <li><Link to="/about/govtresolution" onClick={handleNavClick}>Govt Resolution</Link></li>
          </ul>
        </li>

        {/* Admission Dropdown */}
        <li className={`dropdown ${activeDropdown === 2 ? "active" : ""}`}>
          <button
            className="dropdown-toggle"
            onClick={(e) => handleDropdownClick(2, e)}
          >
            Admission <span className="dropdown-arrow">▼</span>
          </button>

          <ul className="dropdown-menu">
            <li><Link to="/admissions/fy_dsy_acap_ilmeritlist2025_26" onClick={handleNavClick}>FY_DSY_ACAP_ILMeritList2025_26</Link></li>
            <li><Link to="/admissions/fy_dsy_non_cap_il_admission" onClick={handleNavClick}>FY_DSY_Non_CAP_ILAdmission</Link></li>

            <li className={`submenu ${activeSubmenu === 1 ? "active" : ""}`}>
              <div className="submenu-toggle" onClick={(e) => handleSubmenuClick(1, e)}>
                Fees Structure <span className="submenu-arrow">▶</span>
              </div>
              <ul className="submenu-list">
                <li><Link to="/admissions/feestructure" onClick={handleNavClick}>2025-26</Link></li>
              </ul>
            </li>

            <li className={`submenu ${activeSubmenu === 2 ? "active" : ""}`}>
              <div className="submenu-toggle" onClick={(e) => handleSubmenuClick(2, e)}>
                Admission <span className="submenu-arrow">▶</span>
              </div>
              <ul className="submenu-list">
                 <li><Link to="/admission/admission_procedure" onClick={handleNavClick}>Admission Procedure</Link></li>
                <li><Link to="/admission/eligibility_criteria" onClick={handleNavClick}>Eligibility Criteria</Link></li>
                <li><Link to="/admission/fee_structure" onClick={handleNavClick}>Fee Structure</Link></li>
                <li><Link to="/admission/intake" onClick={handleNavClick}>Intake</Link></li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Department Dropdown */}
        <li className={`dropdown ${activeDropdown === 3 ? "active" : ""}`}>
          <button className="dropdown-toggle" onClick={(e) => handleDropdownClick(3, e)}>
            Department <span className="dropdown-arrow">▼</span>
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/departments/computer" onClick={handleNavClick}>Computer Science & Engineering</Link></li>
            <li><Link to="/departments/civil" onClick={handleNavClick}>Civil Engineering</Link></li>
            <li><Link to="/departments/electronics" onClick={handleNavClick}>Electronics & Telecommunication</Link></li>
            <li><Link to="/departments/mechanical" onClick={handleNavClick}>Mechanical Engineering</Link></li>
          </ul>
        </li>

        {/* NAAC Dropdown */}
        <li className={`dropdown ${activeDropdown === 4 ? "active" : ""}`}>
          <button className="dropdown-toggle" onClick={(e) => handleDropdownClick(4, e)}>
            NAAC <span className="dropdown-arrow">▼</span>
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/naac/accreditation" onClick={handleNavClick}>Accreditation</Link></li>
            <li><Link to="/naac/academic_calendar1" onClick={handleNavClick}>Academic Calendar</Link></li>
            <li><Link to="/naac/audit_statement" onClick={handleNavClick}>Audit Statement</Link></li>
          </ul>
        </li>

        {/* Academics Dropdown */}
        <li className={`dropdown ${activeDropdown === 5 ? "active" : ""}`}>
          <button className="dropdown-toggle" onClick={(e) => handleDropdownClick(5, e)}>
            Academics <span className="dropdown-arrow">▼</span>
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/academics/academic_calendar" onClick={handleNavClick}>Academic Calendar</Link></li>
            <li><Link to="/academics/rules_regulations" onClick={handleNavClick}>Rules & Regulations</Link></li>
            <li><Link to="/academics/nptel_courses" onClick={handleNavClick}>NPTEL Courses</Link></li>
          </ul>
        </li>

        {/* Facilities Dropdown */}
        <li className={`dropdown ${activeDropdown === 6 ? "active" : ""}`}>
          <button className="dropdown-toggle" onClick={(e) => handleDropdownClick(6, e)}>
            Facilities <span className="dropdown-arrow">▼</span>
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/facilities/library" onClick={handleNavClick}>Library</Link></li>
            <li><Link to="/facilities/workshop" onClick={handleNavClick}>Workshop</Link></li>
            <li><Link to="/facilities/atm" onClick={handleNavClick}>ATM Facility</Link></li>
            <li><Link to="/facilities/sports" onClick={handleNavClick}>Sports</Link></li>
          </ul>
        </li>

        {/* Placements Dropdown */}
        <li className={`dropdown ${activeDropdown === 7 ? "active" : ""}`}>
          <button className="dropdown-toggle" onClick={(e) => handleDropdownClick(7, e)}>
            Placements <span className="dropdown-arrow">▼</span>
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/Placements/Placement2020_21" onClick={handleNavClick}>2020-21</Link></li>
            <li><Link to="/Placements/Placement2021_22" onClick={handleNavClick}>2021-22</Link></li>
            <li><Link to="/Placements/Placement2022_23" onClick={handleNavClick}>2022-23</Link></li>
            <li><Link to="/Placements/Placement2023_24" onClick={handleNavClick}>2023-24</Link></li>
            <li><Link to="/Placements/Placement2024_25" onClick={handleNavClick}>2024-25</Link></li>
            <li><Link to="/Placements/Placement2025_26" onClick={handleNavClick}>2025-26</Link></li>
          </ul>
        </li>

        <li><Link to="/gallery" onClick={handleNavClick}>Gallery</Link></li>
        <li><Link to="/contact" onClick={handleNavClick}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}
