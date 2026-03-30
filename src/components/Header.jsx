import React from "react";
import clgLogo from "../assets/images/headerIMG/CLGlogo.png";
import motherMalk from "../assets/images/headerIMG/MotheMalk.png";
import "../styles/header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Logo */}
        <div className="logo-container left-logo">
          <img src={clgLogo} alt="College Logo" className="logo-img" />
        </div>

        {/* Center Content */}
        <div className="center-content">
          {/* <div className="institution-badge">
            <span className="badge">NAAC B++ Accredited</span>
          </div> */}
          <div className="institution-info">
            <p className="trust-name">Shri Pandurang Pratishthan Pandharpur</p>
            <h1 className="college-name">KARMAYOGI INSTITUTE OF TECHNOLOGY</h1>
            <div className="location-info">
              <div className="location-line">
                <div>
                  <span>Gat No. 124/125, A/p: Shelve, Tal.Pandharpur, Dist.Solapur</span>
                </div>
              </div>
              <div className="location-line">
                <div>
                  <span>Approved by AICTE New Delhi & Gov. Maharashtra.</span>
                </div>
              </div>
              <div className="affiliation-line">
                <span>Affilated  to Dr.Babasaheb Ambedkar Technological University, Lonere & Maharashtra State Board of Technical Education, Mumbai.</span>
              </div>
            </div>
            {/* <div className="programs-tags">
              <span className="program-tag">UG Programs</span>
              <span className="program-tag">Civil</span>
              <span className="program-tag">Computer Science</span>
              <span className="program-tag">E&TC</span>
              <span className="program-tag">Mechanical</span>
            </div> */}
          </div>
        </div>

        {/* Right Logo */}
        <div className="logo-container right-logo">
          <img src={motherMalk} alt="Mother Malk" className="logo-img" />
        </div>
      </div>

      {/* Full Width News Ticker - At the very end of header */}
      <div className="news-ticker-fullwidth">
        <div className="news-ticker-inner">
          <div className="ticker-left">
            <span className="announcement-icon">📢</span>
            <span className="ticker-label">NEWS</span>
            <span className="arrow-icon">›</span>
          </div>
          <div className="ticker-track">
            <div className="ticker-content">
              <a 
                href="https://karmatech-2026.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ticker-link"
              >
                🔥 KARMATECH 2K26 – State Level Technical Event on April 2, 2026 – Click for Details & Registration 🔥
              </a>
              <span className="ticker-separator">✦</span>
              <a 
                href="https://karmatech-2026.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ticker-link"
              >
                🔥 KARMATECH 2K26 – State Level Technical Event on April 2, 2026 – Click for Details & Registration 🔥
              </a>
              <span className="ticker-separator">✦</span>
              <a 
                href="https://karmatech-2026.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ticker-link"
              >
                🔥 KARMATECH 2K26 – State Level Technical Event on April 2, 2026 – Click for Details & Registration 🔥
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}