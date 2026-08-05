import React, { useRef, useState } from "react";
import "../styles/about.scss";
import college1 from "../assets/images/video/collegeVidio.mp4";
import college2 from "../assets/images/video/Hackathon_2025.mp4";

export default function AboutKIT() {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [playing1, setPlaying1] = useState(false);
  const [playing2, setPlaying2] = useState(false);

  const handlePlay1 = () => {
    videoRef1.current.play();
    setPlaying1(true);
  };

  const handlePlay2 = () => {
    videoRef2.current.play();
    setPlaying2(true);
  };

  return (
    <>
      <div className="aboutKIT-container">
        <h2 className="aboutKIT-heading">About KIT</h2>

        <div className="aboutKIT-video">
          <video
            ref={videoRef1}
            src={college1}
            controls={playing1}
            muted
            playsInline
          />

          {!playing1 && (
            <div className="play-overlay" onClick={handlePlay1}>
              <div className="play-button">▶</div>
            </div>
          )}
        </div>
      </div>

      <div className="container2">
        <div className="aboutKIT-container">
          <h2 className="aboutKIT-heading">Hackathon 2025</h2>

          <div className="aboutKIT-video">
            <video
              ref={videoRef2}
              src={college2}
              controls={playing2}
              muted
              playsInline
            />

            {!playing2 && (
              <div className="play-overlay" onClick={handlePlay2}>
                <div className="play-button">▶</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}