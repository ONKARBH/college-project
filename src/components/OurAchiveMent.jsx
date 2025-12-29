import React, { useEffect, useRef, useState } from "react";
import "../styles/AchievementSlider.css";

const cards = [
  { title: "Achievement 1", text: "Description 1" },
  { title: "Achievement 2", text: "Description 2" },
  { title: "Achievement 3", text: "Description 3" },
  { title: "Achievement 4", text: "Description 4" },
  { title: "Achievement 5", text: "Description 5" },
  { title: "Achievement 6", text: "Description 6" },
  { title: "Achievement 7", text: "Description 7" },
  { title: "Achievement 8", text: "Description 8" },
  { title: "Achievement 9", text: "Description 9" }
];

const GROUP_SIZE = 3;

export default function AchievementSlider() {
  const [index, setIndex] = useState(0);
  const totalGroups = Math.ceil(cards.length / GROUP_SIZE);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalGroups);
    }, 2500); // stop → then start

    return () => clearInterval(interval);
  }, [totalGroups]);

  return (
    <div className="slider-wrapper">
          <h4 style={{ textAlign: "right",color:"yellow", marginTop:"800px" }}>Our Achievement</h4>
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${index * 100}%)`
        }}
      >
        {Array.from({ length: totalGroups }).map((_, groupIndex) => (
          <div className="slide-group" key={groupIndex}>
            {cards
              .slice(
                groupIndex * GROUP_SIZE,
                groupIndex * GROUP_SIZE + GROUP_SIZE
              )
              .map((card, i) => (
                <div className="achievement-card">
  <h3>{card.title}</h3>
  <p>{card.text}</p>
</div>

              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
