import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import s1 from "../assets/images/StaffPhoto/s1.jpeg";
import s2 from "../assets/images/StaffPhoto/s1.jpeg";
import s3 from "../assets/images/StaffPhoto/s1.jpeg";
import s4 from "../assets/images/StaffPhoto/s1.jpeg";

import "../styles/newspaper.scss";

const newsData = [
  { id: 1, image: s1 },
  { id: 2, image: s2 },
  { id: 3, image: s3 },
  { id: 4, image: s4 },
];

export default function NewsPaper() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    ltr: true
  };

  return (
    <div className="news-wrapper right-align">
      {/* HEADER */}
      <div className="news-top">
        <div className="news-title">
          <h4>WE ARE IN NEWS</h4>
          <div className="line">
            <span className="blue"></span>
            <span className="dots"></span>
          </div>
        </div>
      </div>

      {/* SLIDER */}
      <Slider {...settings}>
        {newsData.map((item) => (
          <div key={item.id} className="slide-item">
            <div className="news-card">
              <img src={item.image} alt="news" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
