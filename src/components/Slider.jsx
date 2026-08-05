import React, { useState, useEffect } from "react";

import slide1 from "../assets/images/slideImg/slide1.jpeg";
import slide2 from "../assets/images/slideImg/slide2.jpeg";
import slide3 from "../assets/images/slideImg/slide3.jpeg";
import slide4 from "../assets/images/slideImg/slide4.jpeg";
import slide5 from "../assets/images/slideImg/slide5.jpeg";
import slide6 from "../assets/images/slideImg/slide6.jpeg";
import slide7 from "../assets/images/slideImg/slide7.jpeg";

import "../styles/slider.scss";

export default function Slider() {
  const slides = [
    { image: slide1 },
    { image: slide2 },
    { image: slide3 },
    { image: slide4 },
    { image: slide5 },
    { image: slide6 },
    { image: slide7 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, 3000); // 3 sec per image

    return () => clearInterval(interval);
  }, []);

  const changeSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    setCurrentSlide((prev) => (prev + 1) % slides.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // animation time
  };

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
