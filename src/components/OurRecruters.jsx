import React, { useState, useEffect } from 'react'
import "../styles/ourrecruters.scss";

import company1 from "../assets/images/recruiters/company1.jpeg"
import company2 from "../assets/images/recruiters/company2.jpeg"
import company3 from "../assets/images/recruiters/company3.jpeg"
import company4 from "../assets/images/recruiters/company4.jpeg"
import company5 from "../assets/images/recruiters/company5.jpeg"
import company6 from "../assets/images/recruiters/company6.jpeg"
import company7 from "../assets/images/recruiters/company7.jpeg"
import company8 from "../assets/images/recruiters/company8.jpeg"
import company9 from "../assets/images/recruiters/company9.jpeg"
import company10 from "../assets/images/recruiters/company10.jpeg"
 import company12 from "../assets/images/recruiters/company12.jpeg"
import company13 from "../assets/images/recruiters/company13.jpeg"
import company14 from "../assets/images/recruiters/company14.jpeg"
import company15 from "../assets/images/recruiters/company15.jpeg"
import company16 from "../assets/images/recruiters/company16.jpeg"
import company17 from "../assets/images/recruiters/company17.jpeg"
import company18 from "../assets/images/recruiters/company18.jpeg"
import company19 from "../assets/images/recruiters/company19.jpeg"
import company20 from "../assets/images/recruiters/company20.jpeg"

const companies = [
  { id: 1, logo: company1, name: "John Deere", category: "Mechanical" },
  { id: 2, logo: company2, name: "JustDial", category: "Consulting" },
  { id: 3, logo: company3, name: "Wipro", category: "Technology" },
  { id: 4, logo: company4, name: "TCS", category: "IT Service" },
  { id: 5, logo: company5, name: "HIK VISION", category: "Networking" },
  { id: 6, logo: company6, name: "Jaro Education", category: "Consulting" },
  { id: 7, logo: company7, name: "TATA MOTORS", category: "Mechanical" },
  { id: 8, logo: company8, name: "Tech Mahindra", category: "IT Services" },
  { id: 9, logo: company9, name: "ZENSOR", category: "IT Training" },
  { id: 10, logo: company10, name: "Jio Digital", category: "IT Technology" },
   { id: 12, logo: company12, name: "BAJAJ", category: "IT Technology" },
  { id: 13, logo: company13, name: "HP", category: "Technology" },
  { id: 14, logo: company14, name: "DELL", category: "Technology" },
  { id: 15, logo: company15, name: "Acer", category: "IT Training" },
  { id: 16, logo: company16, name: "CODE MINF", category: "IT Security" },
  { id: 17, logo: company17, name: "NP AV", category: "Technology" },
  { id: 18, logo: company18, name: "Microsoft", category: "Mechanical" },
  { id: 19, logo: company19, name: "Mahindra", category: "Technology" },
  { id: 20, logo: company20, name: "SAMSUNG", category: "IT Services" },
];

export default function OurRecruiters() {
  const [hoveredCompany, setHoveredCompany] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Duplicate the array 3 times for smoother infinite scroll with 20 companies
  const duplicateCompanies = [...companies, ...companies, ...companies];

  return (
    <div className="recruiters-section">
      <div className="section-header">
        <div className="header-top">
          <span className="section-label">PARTNERSHIPS</span>
          <div className="header-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>
        <h2 className="section-title">
          Our Esteemed <span className="highlight">Recruiters</span>
        </h2>
        <p className="section-description">
          Leading companies that trust our talent and collaborate with us for campus placements
        </p>
      </div>

      <div
        className="recruiter-slider-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slider-info">
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">160+</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">85%</span>
              <span className="stat-label">Placement Rate</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">₹87 LPA</span>
              <span className="stat-label">Highest Package</span>
            </div>
          </div>
          <div className="slider-controls">
            <div className={`pause-indicator ${isPaused ? 'paused' : ''}`}>
              <span className="indicator-dot"></span>
              <span className="indicator-text">{isPaused ? 'Paused' : 'Auto-scrolling'}</span>
            </div>
          </div>
        </div>

        <div className={`recruiter-slider ${isPaused ? 'paused' : ''}`}>
          <div className="slider-track">
            {duplicateCompanies.map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="company-card"
                onMouseEnter={() => setHoveredCompany(company.id)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                <div className="card-inner">
                  <div className="company-logo">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className={`logo-img ${hoveredCompany === company.id ? 'hovered' : ''}`}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='80' viewBox='0 0 120 80'%3E%3Crect width='120' height='80' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='12' text-anchor='middle' fill='%2364748b' dy='.3em'%3E%3Ctspan x='50%25' dy='-0.6em'%3E" + 
                        encodeURIComponent(company.name.substring(0, 12)) + 
                        "%3C/tspan%3E%3Ctspan x='50%25' dy='1.2em'%3ECompany%3C/tspan%3E%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div className="logo-overlay"></div>
                  </div>
                  <div className="company-info">
                    <h4 className="company-name">{company.name}</h4>
                    <span className="company-category">{company.category}</span>
                  </div>
                  {hoveredCompany === company.id && (
                    <div className="company-hover">
                      <div className="hover-content">
                        <span className="hover-badge">Active Partner</span>
                        <p className="hover-description">
                          Regular campus recruiter with multiple offers each year
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-gradient left"></div>
        <div className="slider-gradient right"></div>
      </div>

      <div className="recruiters-footer">
        <div className="footer-content">
          <div className="placement-info">
            <div className="info-item">
              <div className="info-icon">🏢</div>
              <div>
                <h4>Diverse Industries</h4>
                <p>From IT to Mechanical & Consulting</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📈</div>
              <div>
                <h4>Growing Network</h4>
                <p>New companies added every year</p>
              </div>
            </div>
          </div>
          <button 
            className="placement-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : 'View All Companies'}
            <svg className="btn-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {showMore && (
        <div className="all-companies-grid">
          <h3 className="grid-title">All Recruiting Companies</h3>
          <div className="companies-grid">
            {companies.map((company) => (
              <div
                key={company.id}
                className="company-grid-item"
                onMouseEnter={() => setHoveredCompany(company.id)}
                onMouseLeave={() => setHoveredCompany(null)}
              >
                <div className="grid-card-inner">
                  <div className="grid-company-logo">
                    <img
                      src={company.logo}
                      alt={company.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='60' viewBox='0 0 100 60'%3E%3Crect width='100' height='60' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='10' text-anchor='middle' fill='%2364748b'%3E" + 
                        encodeURIComponent(company.name.substring(0, 10)) + 
                        "%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                  <div className="grid-company-info">
                    <h4>{company.name}</h4>
                    <span>{company.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}