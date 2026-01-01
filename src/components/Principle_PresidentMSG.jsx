import React from 'react'

import patilsir from "../assets/images/patilsir_utpatsir/patilsir.png";
import utpatsir from "../assets/images/patilsir_utpatsir/utpatsir.png";
import NoticeBoard from './NoticeBoard';
import "../styles/principalprecidentmsg.scss";
export default function Principle_PresidentMSG() {
  return (
    // <!-- Principle & President Message Section -->
<div className="message-container">

  {/* <!-- Principal Message --> */}
  <div className="card1">
    
    <div className="card-body">
      <h5 className="card-title bg-blue-500 uppercase ">Principal</h5>
      <img
      className="card-img1"
      src={patilsir}
      alt="Principal"
    />
      <p className="card-text1">
        I welcome you all to KIT College of Engineering, which is housed in a
        beautiful campus of 100 acres and developed under dynamic leadership.
        It is a fully residential campus with excellent  
        facilities.  
      </p>
    </div>
  </div>

  {/* <!-- President Message --> */}
  <div className="card2">
    
    <div className="card-body">
      <h5 className="card-title bg-blue-500 uppercase">President</h5>
      <img
      className="card-img2"
      src={utpatsir}
      alt="President"
    />
      <p className="card-text2">
        Dear Friends, I welcome you all to KIT College of Engineering.
        Our focus is on quality education, innovation, and
        holistic student growth through world-class infrastructure.
      </p>
    </div>

  </div>
    <NoticeBoard/>
</div>

  );
}
