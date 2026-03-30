import React from "react";
import civil from "../../assets/images/Inside_Department/Civil.png";
import "../../styles/civil.scss";

export default function Civil() {
  return (
    <div className="civil-dept">
      {/* Top Section: Image Left + First Paragraph Right */}
      <div className="civil-top-row">
        <div className="civil-image">
          <img src={civil} alt="Civil Engineering Department" />
        </div>

        <div className="civil-intro-right">
          <h1>Civil Engineering Department</h1>
          <p>
            Established in 2009 with a sanctioned intake of 60 undergraduate students, 
            the Civil Engineering Department emphasizes strong fundamentals and practical knowledge, 
            keeping up with continuously evolving trends in civil engineering.
          </p>
        </div>
      </div>

      {/* Remaining Content Below Full Width */}
      <div className="civil-below">
        <p>
          The department features state-of-the-art laboratories and modern classrooms. 
          Advanced equipment such as DGPS, Rebound Hammer, Core Cutter, Corrosion Meter, 
          Ultrasonic Pulse Velocity Meter, Universal Testing Machine, and Total Station 
          provide hands-on experience, while LCD-equipped smart classrooms enhance learning.
        </p>

        <section className="civil-section highlight">
          <h2>Achievements & Faculty Strength</h2>
          <p>
            The department has published 10 patents in recent years. Students actively participate 
            in co-curricular and extra-curricular competitions at both the institute and inter-institute levels.
          </p>
          <p>
            There are 12 highly qualified faculty members, including two Ph.D. holders and ten Assistant Professors. 
            Faculty engage in research, innovation, and continuous professional development to contribute effectively to academia and society.
          </p>
        </section>

        {/* Vision & Mission */}
        <section className="civil-vm">
          <div className="box">
            <h2>Vision</h2>
            <p>
              To create world-class professionals guided by experienced faculty 
              in an environment of excellence, research orientation, and modern infrastructure.
            </p>
          </div>

          <div className="box">
            <h2>Mission</h2>
            <ul>
              <li>Provide education from certification courses to doctoral programs</li>
              <li>Collaborate with academia and industry partners</li>
              <li>Promote excellence in technical education</li>
              <li>Develop socially responsible engineers and leaders</li>
            </ul>
          </div>
        </section>

        {/* Salient Features */}
        <section className="civil-section">
          <h2>Salient Features</h2>
          <ul className="features">
            <li>Well-equipped laboratories with advanced analytical instruments</li>
            <li>Experienced and dedicated faculty members</li>
            <li>Innovative teaching and continuous assessment methods</li>
            <li>Computational and simulation software support</li>
            <li>Consistent performance in GATE and other competitive exams</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
