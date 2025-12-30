import React from "react";
import clgLogo from "../assets/images/headerIMG/CLGlogo.png";
import motherMalk from "../assets/images/headerIMG/MotheMalk.png";
import "../index.css";

export default function Header() {
  return (
    <div className="header">

      <div className="left-img">
        <img src={clgLogo} height="110px" alt="College Logo" />
      </div>

      <div className="title">
        <p className="top-msg">Shri Pandurang Pratishthan Pandharpur</p>
        <h1 className="h1">Karmayogi Institute of Technology,Pandharpur</h1>
        <div className="msg-info">
          <div className="msg1">
            <p>(UG Programmes-CSE,E&TC,MECH,CIVIL)& Accredited by NAAC with "B++"Grade</p>
          </div>
          <div className="msg2">
            <p>AP-Shelve,Pandharpur,Dist-Solapur,Pin-413304,MH,INDIA</p>
          </div>
          <div className="msg3">
            <p>Affiliated to Dr Babasaheb Ambedkar Technological University lonere Raigad</p>
          </div>
        </div>
      </div>

      <div className="right-img">
        
        <img  src={motherMalk} height="110px" alt="Mothe Malk" />
      </div>

    </div>
  );
}
