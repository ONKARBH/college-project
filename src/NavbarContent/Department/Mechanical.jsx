import React from "react";
import mechanical from "../../assets/images/Inside_Department/Mechanical.png";
import "../../styles/civil.scss"; // Reusing the same SCSS for consistency

export default function Mechanical() {
  return (
    <div className="civil-dept">
      {/* Top Section: Image Left + First Paragraph Right */}
      <div className="civil-top-row">
        <div className="civil-image">
          <img src={mechanical} alt="Mechanical Engineering Department" />
        </div>

        <div className="civil-intro-right">
          <h1>Mechanical Engineering Department</h1>
          <p>
            On behalf of Fabtech Technical Campus, College of Engineering and Research, Sangola, we welcome all stakeholders to the Mechanical Engineering Department. 
            It gives me immense pleasure to lead this prestigious department. Our faculty is a disciplined and dedicated team with a mix of academic and industrial experience, working towards the growth of our students and institution. 
            The department is equipped with state-of-the-art laboratories to support academic programs.
          </p>
        </div>
      </div>

      {/* Remaining Content Below Full Width */}
      <div className="civil-below">
        <p>
          The department has well-qualified and dedicated faculty. We strive to impart knowledge and training of the highest standard, preparing students for successful careers in Industry, Research, and Academics. 
          Efforts are made to develop students’ ability to synthesize data and technical concepts for application in product design. Opportunities are provided to work on multidisciplinary projects as part of a team.
        </p>

        <p>
          For the overall development of students, we have established the Mechanical Engineering Students Association (MESA). Activities organized by MESA enable students to gain knowledge, interact with peers and faculty from other colleges, and collaborate with industry engineers. Students actively participate in various competitions.
        </p>

        {/* Vision & Mission */}
        <section className="civil-vm">
          <div className="box">
            <h2>Vision</h2>
            <p>
              To become a center of excellence for Mechanical Engineering scholars, producing innovative and creative engineers capable of meeting global challenges.
            </p>
          </div>

          <div className="box">
            <h2>Mission</h2>
            <ul>
              <li>Foster high-quality teaching and learning while serving societal needs.</li>
              <li>Encourage and promote excellence in research and technological development.</li>
              <li>Develop students into skilled professionals ready to contribute to industry and academia.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
