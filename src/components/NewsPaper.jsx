import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s1 from "../assets/images/Campus_Highlits/h1.jpeg";
import s2 from "../assets/images/Campus_Highlits/h2.jpeg";
import s3 from "../assets/images/Campus_Highlits/h3.jpeg";
import s4 from "../assets/images/Campus_Highlits/h4.jpeg";

import "../styles/newspaper.scss";

const newsData = [
  { 
    id: 1, 
    image: s1, 
    title: "Successful Blood Donation Drive at KIT Campus",
    date: "Dec 15, 2024",
    category: "Blood Donation Drive"
  },
  { 
    id: 2, 
    image: s2, 
    title: "Firsy Year Admmision Process Begins for 2025-26 Academic Year",
    date: "Dec 10, 2024",
    category: "First Year "
  },
  { 
    id: 3, 
    image: s3, 
    title: "Jagtik Yoga Divas Celebrated with Enthusiasm at KIT ",
    date: "Dec 5, 2024",
    category: "Event"
  },
  { 
    id: 4, 
    image: s4, 
    title: "KIT Staff selection in university Syllabus Committee",
    date: "Nov 28, 2024",
    category: "Achievement"
  },
];

export default function NewsPaper() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    pauseOnHover: true,
    pauseOnFocus: true,
    beforeChange: (current, next) => setActiveSlide(next),
    appendDots: dots => (
      <div className="custom-dots">
        <ul className="dots-list">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className={`dot ${i === activeSlide ? 'active' : ''}`}>
        <div className="dot-inner"></div>
      </div>
    ),
  };

  return (
    <div className="news-section">
      <div className="section-header">
        <div className="header-content">
          <span className="section-badge">LATEST UPDATES</span>
          <h2 className="section-title">Campus <span className="highlight">Highlights</span></h2>
          <p className="section-subtitle">Stay updated with the latest news and events from KIT</p>
        </div>
        <div className="header-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-circle"></div>
        </div>
      </div>

      <div className="news-slider-container">
        <Slider {...settings}>
          {newsData.map((item) => (
            <div key={item.id} className="news-slide">
              <div className="slide-image">
                <img src={item.image} alt={item.title} />
                <div className="image-overlay"></div>
                <div className="news-category">{item.category}</div>
              </div>
              <div className="slide-content">
                <div className="news-meta">
                  <span className="news-date">{item.date}</span>
                  <span className="news-bullet">•</span>
                  <span className="news-category-tag">{item.category}</span>
                </div>
                <h3 className="news-title">{item.title}</h3>
                
              </div>
            </div>
          ))}
        </Slider>

        <div className="slider-progress">
          <div 
            className="progress-bar" 
            style={{ 
              width: `${((activeSlide + 1) / newsData.length) * 100}%` 
            }}
          ></div>
        </div>
      </div>

      
    </div>
  );
}