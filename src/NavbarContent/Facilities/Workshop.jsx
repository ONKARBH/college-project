import React from "react";
import "../../styles/workshop.scss";
import workshop from "../../assets/images/Facilities/Workshop/workshop.jpeg";

export default function Workshop() {
  return (
    <div className="department-section">
      {/* ---------- INTRO ---------- */}
      <div className="section-intro">
        <h2 className="section-title">
          Workshop <span className="highlight">Facility</span>
        </h2>
        <p className="section-description">
          A fully equipped workshop supporting Polytechnic and Engineering
          practical training
        </p>
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="department-content">
        <div className="department-image">
          <img src={workshop} alt="Workshop Facility" />
        </div>

        <div className="department-details">
          <p>
            I have great pleasure in presenting the workshop report. Our workshop
            is well equipped with all traditional and non-traditional machines
            along with their accessories and measuring instruments.
          </p>

          <p>
            As we operate in both Polytechnic as well as Engineering shifts, the
            workshop caters to the practical requirements of all students.
          </p>

          <ul className="department-list">
            <li>Machine Shop</li>
            <li>Carpentry Shop</li>
            <li>Fitting Shop</li>
            <li>Sheet Metal Section</li>
            <li>Smithy</li>
            <li>Plumbing</li>
            <li>Welding Section</li>
          </ul>

          <p>
            These facilities are utilized for practical work of FE (All
            Branches), SE & TE (Mechanical – Degree), and Polytechnic FY & SY
            students of Civil and Mechanical Engineering.
          </p>
        </div>
      </div>
    </div>
  );
}
