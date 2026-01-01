import React from "react";
import clgLogo from "../assets/images/headerIMG/CLGlogo.png";
import motherMalk from "../assets/images/headerIMG/MotheMalk.png";
import "../styles/header.scss";

export default function Header() {
  return (
    <header className="header">
      {/* Left Logo */}
      <div className="left-img">
        <img src={clgLogo} alt="College Logo" />
      </div>

      {/* Title & Messages - Center Content */}
      <div className="title">
        <p className="top-msg">Shri Pandurang Pratishthan Pandharpur</p>
        <h1 className="h1">Karmayogi Institute of Technology, Pandharpur</h1>
        <div className="msg-info">
          <p className="msg1">
            (UG Programmes-CSE, E&TC, MECH, CIVIL) & Accredited by NAAC with "B++" Grade
          </p>
          <p className="msg2">
            AP-Shelve, Pandharpur, Dist-Solapur, Pin-413304, MH, INDIA
          </p>
          <p className="msg3">
            Affiliated to Dr Babasaheb Ambedkar Technological University, Lonere Raigad
          </p>
        </div>
      </div>

      {/* Right Logo */}
      <div className="right-img">
        <img src={motherMalk} alt="Mothe Malk" />
      </div>
    </header>
  );
}