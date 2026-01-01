import React, { useState, useEffect } from "react";
import "../styles/AchievementSlider.scss";

const cards = [
  { title: "Mr. Sanket Karande selected in kho-kho team of DBA", img: "/img/1.jpg" },
  { title: "Mr. Vishwas Kore selected in kho-kho team of DBATU", img: "/img/2.jpg" },
  { title: "Our Alumnus Mr. Viki Babar selected as Revenue Ass", img: "/img/3.jpg" },
  { title: "Achievement 4", img: "/img/4.jpg" },
  { title: "Achievement 5", img: "/img/5.jpg" },
  { title: "Achievement 6", img: "/img/6.jpg" },
];

const GROUP_SIZE = 3;

export default function AchievementSection() {
  const [index, setIndex] = useState(0);
  const totalGroups = Math.ceil(cards.length / GROUP_SIZE);

  const next = () => setIndex((prev) => (prev + 1) % totalGroups);
  const prev = () =>
    setIndex((prev) => (prev - 1 + totalGroups) % totalGroups);

  // auto slide (stop → slide)
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="achievement-wrapper">
      {/* LEFT STATIC CONTENT */}
      <div className="achievement-left">
        <h2>OUR<br />ACHIEVEMENTS</h2>
        <div className="line"></div>
        <p>
          Congratulations from<br />
          Principal, Staff & Students<br />
          to Achievers.
        </p>
        <button className="view-all">VIEW ALL</button>
      </div>

      {/* RIGHT SLIDER */}
      <div className="achievement-right">
        <button className="arrow left" onClick={prev}>❮</button>

        <div className="slider-viewport">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {Array.from({ length: totalGroups }).map((_, g) => (
              <div className="card-group" key={g}>
                {cards
                  .slice(g * GROUP_SIZE, g * GROUP_SIZE + GROUP_SIZE)
                  .map((card, i) => (
                    <div className="achievement-card" key={i}>
                      <img src={card.img} alt="" />
                      <h4>{card.title}</h4>
                      <button>View Details</button>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={next}>❯</button>
      </div>
    </div>
  );
}
