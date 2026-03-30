import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.scss";
 
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [fileDropdownOpen, setFileDropdownOpen] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMenu(null);
    setActiveSubmenu(null);
    setFileDropdownOpen({});
    document.body.classList.remove("menu-open");
  }, [location]);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    document.body.classList.toggle("menu-open", newState);
    setActiveSubmenu(null);
    setFileDropdownOpen({});
  };

  const toggleDropdown = (index, e) => {
    e.preventDefault();
    setActiveMenu(activeMenu === index ? null : index);
    setActiveSubmenu(null);
    setFileDropdownOpen({});
  };

  const toggleSubmenu = (parentIndex, subIndex, e) => {
    if (e && e.preventDefault) e.preventDefault();
    const key = `${parentIndex}-${subIndex}`;
    setActiveSubmenu(activeSubmenu === key ? null : key);
    setFileDropdownOpen({});
  };

  const toggleFileDropdown = (parentKey, subKey, e) => {
    if (e && e.preventDefault) e.preventDefault();
    const key = `${parentKey}-${subKey}`;
    setFileDropdownOpen(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Helper function to check if a path is a file (PDF/JPG)
  const isFileLink = (path) => {
    return path && (path.toLowerCase().endsWith('.pdf') || 
                    path.toLowerCase().endsWith('.jpg') || 
                    path.toLowerCase().endsWith('.jpeg'));
  };

  // Helper function to render file links
  const renderFileLink = (item) => {
    if (isFileLink(item.path)) {
      return (
        <a 
          href={item.path} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {item.name}
        </a>
      );
    }
    
    if (item.to) {
      return (
        <a 
          href={item.to} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          {item.name}
        </a>
      );
    }
    
    return <Link to={item.path}>{item.name}</Link>;
  };

  const menuItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      dropdown: [
        { name: "Why KIT", path: "/about/whykit" },
        { name: "About Us", path: "/about/aboutus" },
        {
          name: "AICTE Approvals",
          submenu: [
            { name: "AICTE Approval 1", path: "/AICTEApprovals/AICTE1.pdf" },
            { name: "AICTE Approval 2", path: "/AICTEApprovals/AICTE2.pdf" },
            { name: "AICTE Approval 3", path: "/AICTEApprovals/AICTE3.pdf" },
            { name: "AICTE Approval 4", path: "/AICTEApprovals/AICTE4.pdf" },
          ],
        },
        {
          name: "University Affiliation",
          submenu: [
            { name: "2022-23", path: "/University_Affilation/affiliation01.pdf" },
            { name: "2023-24", path: "/University_Affilation/affiliation02.pdf" },
            { name: "2024-25", path: "/University_Affilation/affiliation03.pdf" },
          ],
        },
        
        { name: "DTE Approval", path: "/DTE_Approval/DTE_Approvals.pdf" },
        { name: "Govt Resolution", path: "/GovtResolution/GovtResolution.pdf" },
        {
          name: "AISHE",
          submenu:[
            { name: "AISHE 2021-22", path: "/AISHE/AISHE_2021-22.pdf" },
            { name: "AISHE 2022-23", path: "/AISHE/AISHE_2022_23.pdf" },
            { name: "AISHE 2023-24", path: "/AISHE/AISHE_2023-24.pdf" },
          ],
        },
      ],
    },
    {
      name: "Admissions",
      dropdown: [
        { name: "FY_DSY Merit List 2025-26", path: "/FY_DSY_ACAP_ILMeritList2025_26/fy_dsy_acap_ilmeritlist2025_26.pdf" },
        { name: "Non-CAP Admissions", path: "/FY_DSY_Non_CAP_IL_Admission/Non_Cap.jpg" },
        { name: "Brochure", path: "/Brochure/Brochure.pdf" },
        {
          name: "Fees Structure",
          submenu: [
            { name: "2025-26", path: "/FeeStructure/Fee_structure_2025-26.pdf" },
          ],
        },
        {
          name: "Admission Process",
          submenu: [
            { name: "Admission Procedure", path: "/Admission_Procedure/Admission_Procedure.pdf" },
            { name: "Eligibility Criteria", path: "/Eligibility_Criteria/Eligibility_Criteria.pdf" },
            { name: "Fee Structure", path: "/FeeStructure/Fee_structure_2025-26.pdf" },
            { name: "Intake Capacity", path: "/Intake/Intake.pdf" },
          ],
        },
      ],
    },
    {
      name: "Departments",
      dropdown: [
          { name: "Civil Engineering", path: "/departments/civil" },
        { name: "Computer Science & Engineering", path: "/departments/computer" },
        { name: "Electronics & Telecommunication", path: "/departments/electronics" },
        { name: "Mechanical Engineering", path: "/departments/mechanical" },
      ],
    },
    {
      name: "NAAC",
      dropdown: [
        { name: "NIRF", path: "/NAAC/NIRF/Karmayogi_Institute_of_Technology_SHELVE_PANDHARPUR.2025-01-31.pdf" },
        { name: "NAAC Certificate", path: "/NAAC/NAAC.pdf" },
        { name: "SSR", path: "/NAAC/SSR/NAAC_Grade_Certificate_(1).pdf" },
        {
          name: "IQSC",
          submenu: [
            { name: "SSS", path: "/NAAC/IQSC/SSS/SSS.pdf" },
            { name: "IQAC Formation", path: "/NAAC/IQSC/IQAC_Members.pdf" },
          ]
        },
        {
          name: "AQAR",
          submenu: [
            { name: "2016-17", path: "/NAAC/AQAR/AQAR_2016-17_KECSP.pdf" },
            { name: "2018-19", path: "/NAAC/AQAR/AQAR_2018-19_KECSP.pdf" },
            { name: "2019-20", path: "/NAAC/AQAR/AQAR_2019-20_KECSP.pdf" },
            { name: "2020-21", path: "/NAAC/AQAR/AQAR_2020-21_KECSP.pdf" },
            { name: "2022-23", path: "/NAAC/AQAR/AQAR_2022-23.pdf" },
          ]
        }
      ],
    },
    {
      name: "Academics",
      dropdown: [
        {
          name: "Academic Calendar",
          submenu:[
            { name: "DBatu", to: "https://dbatu.ac.in/academic-calendar/" },
            { name: "KITSP", path: "/Academic_Calender/Academic_Calender.pdf" },
          ]
        },
        { name: "NPTEL Courses", to: "https://nptel.ac.in/" },
      ],
    },
    {
      name: "Facilities",
      dropdown: [
        { name: "Library", path: "/facilities/library" },
        { name: "Workshop", path: "/facilities/workshop" },
        { name: "ATM Facility", path: "/facilities/atm" },
        { name: "Gym Facility", path: "/facilities/Gym" },
        {
          name: "Scholarships",
          submenu: [
            { name: "Mahatma Phule", to: "https://mahajyoti.org.in/en/home/" },
            { name: "Panjabrao Deshmukh", to: "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51A3D30C2CB15631E4E31F4E2AFF5E4258B33E89887D583052E" },
            { name: "Rajarshi Shahu Maharaj", to: "https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=E9DDFA703C38E51ADF0B5B3136AAAD4C06BEFD7079D45EBAADC7F5BA9DCAA1F3" },
          ]
        },
      ],
    },
    {
      name: "Placements",
      dropdown: [
        { name: "Placement", path: "/Placement/KIT_Placement.pdf" },
      ],
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const renderMenuItem = (item, index) => {
    if (item.dropdown) {
      return (
        <li key={index} className={`nav-item dropdown ${activeMenu === index ? "active" : ""}`}>
          <button
            className="nav-link dropdown-toggle"
            onClick={(e) => toggleDropdown(index, e)}
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => {
              if (!isOpen) {
                setActiveMenu(null);
                setActiveSubmenu(null);
              }
            }}
          >
            {item.name}
            <span className="dropdown-icon">⌄</span>
          </button>
          <div 
            className={`dropdown-menu ${activeMenu === index ? "active" : ""}`}
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => {
              if (!isOpen) {
                setActiveMenu(null);
                setActiveSubmenu(null);
              }
            }}
          >
            {item.dropdown.map((subItem, subIndex) => {
              const parentKey = `${index}-${subIndex}`;
              
              // Check if this dropdown item has only file links
              const hasOnlyFiles = subItem.submenu && 
                subItem.submenu.every(nestedItem => 
                  isFileLink(nestedItem.path) || nestedItem.to
                );

              return (
                <div key={subIndex} className="dropdown-item">
                  {subItem.submenu ? (
                    <>
                      {hasOnlyFiles ? (
                        <>
                          <button
                            className={`submenu-title file-dropdown-title ${fileDropdownOpen[parentKey] ? "open" : ""}`}
                            onClick={(e) => toggleFileDropdown(index, subIndex, e)}
                          >
                            {subItem.name}
                            <span className="dropdown-icon">⌄</span>
                          </button>
                          <div
                            className={`file-submenu ${fileDropdownOpen[parentKey] ? "active" : ""}`}
                          >
                            {subItem.submenu.map((nestedItem, nestedIndex) => (
                              <div key={nestedIndex} className="file-submenu-item">
                                {renderFileLink(nestedItem)}
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <>
                          <button
                            className={`submenu-title ${activeSubmenu === parentKey ? "open" : ""}`}
                            onClick={(e) => toggleSubmenu(index, subIndex, e)}
                            onMouseEnter={() => setActiveSubmenu(parentKey)}
                            onMouseLeave={() => {
                              if (!isOpen) {
                                setActiveSubmenu(null);
                              }
                            }}
                          >
                            {subItem.name}
                            <span className="dropdown-icon">⌄</span>
                          </button>
                          <div
                            className={`submenu ${activeSubmenu === parentKey ? "active" : ""}`}
                            onMouseEnter={() => setActiveSubmenu(parentKey)}
                            onMouseLeave={() => {
                              if (!isOpen) {
                                setActiveSubmenu(null);
                              }
                            }}
                          >
                            {subItem.submenu.map((nestedItem, nestedIndex) => (
                              <div key={nestedIndex} className="submenu-item">
                                {isFileLink(nestedItem.path) || nestedItem.to ? (
                                  <a 
                                    href={nestedItem.path || nestedItem.to} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    {nestedItem.name}
                                  </a>
                                ) : (
                                  <Link to={nestedItem.path}>{nestedItem.name}</Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {isFileLink(subItem.path) || subItem.to ? (
                        renderFileLink(subItem)
                      ) : (
                        <Link to={subItem.path}>{subItem.name}</Link>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </li>
      );
    }

    return (
      <li key={index} className="nav-item">
        <Link to={item.path} className="nav-link">
          {item.name}
        </Link>
      </li>
    );
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`nav-overlay ${isOpen ? "active" : ""}`} onClick={toggleMenu}></div>

        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {menuItems.map(renderMenuItem)}
        </ul>
      </div>
    </nav>
  );
}