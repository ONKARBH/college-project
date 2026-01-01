import React, { useEffect, useState } from "react";
import img1 from "../assets/images/Approved-certificate/img1.jpeg";
import img2 from "../assets/images/Approved-certificate/img2.jpeg";
import img3 from "../assets/images/Approved-certificate/img3.jpeg";
import img4 from "../assets/images/Approved-certificate/img4.jpeg";
import img5 from "../assets/images/Approved-certificate/img5.jpeg";
import img6 from "../assets/images/Approved-certificate/img6.jpeg";
import "../styles/approvedcertificate.scss";

const slides = [
  [img1, img2],
  [img3, img4],
  [img5, img6],
];

export default function Approved_diif_certificate() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 1000); // slide stop slide

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="approved-container">
      <h1 style={{fontWeight:"bold"}}> Approved & Affiliated By....</h1>
      <div
        className="approved-track"
        style={{ transform: `translateX(-${index * 50}%)` }}
      >
        {slides.map((pair, i) => (
          <div className="approved-column" key={i}>
            <img src={pair[0]} alt="" />
            <img src={pair[1]} alt="" />
          </div>
        ))}

        {/* duplicate for smooth loop */}
        <div className="approved-column">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}
