import React, { useRef, useState } from "react";
import "../styles/about.scss";
import college1 from "../assets/images/video/collegeVidio.mp4";
import college2 from "../assets/images/video/Hackathon_2025.mp4";
export default function AboutKIT() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  return (
    <>
    <div className="aboutKIT-container">
      <h2 className="aboutKIT-heading">About KIT</h2>

      <div className="aboutKIT-video">
        <video
          ref={videoRef}
          src={college1}
          controls={playing}
          muted
          playsInline
        />

        {!playing && (
          <div className="play-overlay" onClick={handlePlay}>
            <div className="play-button">▶</div>
          </div>
        )}
      </div>
      

    </div>
<div className="container2">
     <div className="aboutKIT-container">
      <h2 className="aboutKIT-heading">About KIT</h2>

      <div className="aboutKIT-video">
        <video
          ref={videoRef}
          src={college2}
          controls={playing}
          muted
          playsInline
        />

        {!playing && (
          <div className="play-overlay" onClick={handlePlay}>
            <div className="play-button">▶</div>
          </div>
        )}
      </div>
      

    </div>
    </div>
    </>
  );
}
