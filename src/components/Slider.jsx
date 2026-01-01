import React, { useState, useEffect } from "react";
import slide1 from "../assets/images/slideimg/slide1.png";
import slide2 from "../assets/images/slideimg/slide2.png";
import slide3 from "../assets/images/slideimg/slide3.png";
import "../styles/slider.scss";
export default function Slider() {
  const slides = [slide1, slide2, slide3];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);  // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">

      {slides.map((img, index) => (
        <img
          key={index}
          src={img}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          alt={`slide-${index}`}
        />
      ))}

    </div>
  );
}
