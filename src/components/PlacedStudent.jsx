import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../styles/placedstudent.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Civil
import civil1 from "../assets/images/PlacedStudentSection/civil/civil1.jpeg";
import civil2 from "../assets/images/PlacedStudentSection/civil/civil2.jpeg";
import civil3 from "../assets/images/PlacedStudentSection/civil/civil3.jpeg";

// Computer
import computer1 from "../assets/images/PlacedStudentSection/computer/computer1.jpeg";
import computer2 from "../assets/images/PlacedStudentSection/computer/computer2.jpeg";
import computer3 from "../assets/images/PlacedStudentSection/computer/computer3.jpeg";

// Electronics
import electronics1 from "../assets/images/PlacedStudentSection/electronics/electronics1.jpeg";
import electronics2 from "../assets/images/PlacedStudentSection/electronics/electronics2.jpeg";
import electronics3 from "../assets/images/PlacedStudentSection/electronics/electronics3.jpeg";

// Mechanical
import mechanical1 from "../assets/images/PlacedStudentSection/mechanical/mechanical1.jpeg";
import mechanical2 from "../assets/images/PlacedStudentSection/mechanical/mechanical2.jpeg";
import mechanical3 from "../assets/images/PlacedStudentSection/mechanical/mechanical3.jpeg";

/* -------------------- Department-wise Images -------------------- */
const departmentImages = {
  "Computer Science": [computer1, computer2, computer3],
  Electronics: [electronics1, electronics2, electronics3],
  Mechanical: [mechanical1, mechanical2, mechanical3],
  Civil: [civil1, civil2, civil3],
};

/* -------------------- Department Colors -------------------- */
const departmentColors = {
  "Computer Science": "#3b82f6",
  Electronics: "#10b981",
  Mechanical: "#f59e0b",
  Civil: "#8b5cf6",
};

/* -------------------- Student Data -------------------- */
const placedStudents = [
  { id: 1, name: "Prerna Salunke", company: "QSpider", package: "₹2.5 LPA", department: "Computer Science", year: 2025 },
  { id: 2, name: "Sujit Salunke", company: "Antiphox", package: "₹3 LPA", department: "Computer Science", year: 2025 },
  { id: 3, name: "Sanjivani Babalsure", company: "COEP", package: "₹2 LPA", department: "Computer Science", year: 2025 },
  { id: 4, name: "Atharv Rokade", company: "Alada Construction Pune", package: "₹3.5 LPA", department: "Mechanical", year: 2025 },
  { id: 5, name: "Shantanu Kulkarni", company: "Meta Engitech", package: "₹4 LPA", department: "Mechanical", year: 2025 },
  { id: 6, name: "Prathmesh Binwade", company: "Meta Engitech", package: "₹4 LPA", department: "Mechanical", year: 2025 },
  { id: 7, name: "Neha Patil", company: "Alada Construction Pune", package: "₹2.5 LPA", department: "Civil", year: 2025 },
  { id: 8, name: "Rushikush Gajare", company: "Kolobro Group Pvt Ltd", package: "₹2.5 LPA", department: "Civil", year: 2025 },
  { id: 9, name: "Lakshman Chivare", company: "Alada Construction Pune", package: "₹2.5 LPA", department: "Civil", year: 2025 },
  { id: 10, name: "Kashinath Andewadi", company: "ARMS Pvt Ltd", package: "₹2.5 LPA", department: "Electronics", year: 2025 },
  { id: 11, name: "Vivek More ", company: "ARMS Pvt Ltd", package: "₹2.5 LPA", department: "Electronics", year: 2025 },
  { id: 12, name: "Vaibhav Gaikwad", company: "ARMS Pvt Ltd", package: "₹2.5 LPA", department: "Electronics", year: 2025 },
];

// Duplicate students for continuous scrolling effect on mobile
const getDuplicateStudents = (students, count = 3) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result = [...result, ...students.map(s => ({ ...s, key: `${s.id}-${i}` }))];
  }
  return result;
};

/* -------------------- Component -------------------- */
export default function PlacedStudent() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getStudentImage = (student) => {
    const images = departmentImages[student.department];
    return images ? images[student.id % images.length] : civil1;
  };

  const filteredStudents =
    selectedDepartment === "All"
      ? placedStudents
      : placedStudents.filter((s) => s.department === selectedDepartment);

  const departments = ["All", ...new Set(placedStudents.map((s) => s.department))];

  // On mobile, we want all students regardless of filter
  const mobileStudents = getDuplicateStudents(placedStudents, 4);

  /* -------------------- Slider Settings -------------------- */
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 1,
          autoplaySpeed: 1500,
          speed: 600,
        } 
      },
    ],
  };

  /* -------------------- Student Card -------------------- */
  const StudentCard = ({ student }) => (
    <div className="student-card">
      <div className="card-image">
        <img src={getStudentImage(student)} alt={student.name} />
      </div>

      <div className="card-content">
        <h3 className="student-name">{student.name}</h3>
        <div className="department-tag" style={{ backgroundColor: departmentColors[student.department] }}>
          {student.department}
        </div>
        <div className="placement-info">
          <span className="company-name">🏢 {student.company}</span>
          <span className="package-amount">{student.package}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="placed-students-section">
      {/* ---------- INTRO ---------- */}
      <div className="section-intro">
        <h2 className="section-title">
          Our <span className="highlight">Placed</span> Stars
        </h2>
        <p className="section-description">
          Celebrating the achievements of our students placed in top companies
        </p>
      </div>

      {/* ---------- STATS ---------- */}
      <div className="placement-stats">
        <div className="stats-grid">
          <div className="stat-card"><div className="stat-icon">🎯</div><h3 className="stat-number">3200+</h3><p className="stat-label">Total Placements</p></div>
          <div className="stat-card"><div className="stat-icon">🏆</div><h3 className="stat-number">₹87 LPA</h3><p className="stat-label">Highest Package</p></div>
          <div className="stat-card"><div className="stat-icon">📈</div><h3 className="stat-number">85%</h3><p className="stat-label">Placement Rate</p></div>
          <div className="stat-card"><div className="stat-icon">🤝</div><h3 className="stat-number">160+</h3><p className="stat-label">Recruiters</p></div>
        </div>
      </div>

      {/* ---------- FILTER (Hidden on Mobile) ---------- */}
      {!isMobile && (
        <div className="filter-controls">
          <div className="filter-group">
            <div className="filter-label">Filter by Department:</div>
            <div className="filter-buttons">
              {departments.map((dept) => (
                <button
                  key={dept}
                  className={`filter-btn ${selectedDepartment === dept ? "active" : ""}`}
                  onClick={() => setSelectedDepartment(dept)}
                  style={
                    selectedDepartment === dept && dept !== "All"
                      ? { backgroundColor: departmentColors[dept], borderColor: departmentColors[dept] }
                      : {}
                  }
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---------- STUDENTS ---------- */}
      {isMobile ? (
        // Mobile: Show all students in continuous carousel
        <Slider {...sliderSettings}>
          {mobileStudents.map((student) => (
            <StudentCard key={student.key} student={student} />
          ))}
        </Slider>
      ) : selectedDepartment === "All" ? (
        // Desktop: Show filtered students in carousel
        <Slider {...sliderSettings}>
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </Slider>
      ) : (
        // Desktop: Show filtered students in grid
        <div className="students-grid">
          {filteredStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      )}
    </div>
  );
}