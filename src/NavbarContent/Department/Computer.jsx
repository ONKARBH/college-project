 import React from "react";
import cse from "../../assets/images/Inside_Department/CSE.png";
import "../../styles/civil.scss"; // You can reuse civil.scss for styling

export default function Computer() {
  return (
    <div className="civil-dept">
      {/* Top Section: Image Left + First Paragraph Right */}
      <div className="civil-top-row">
        <div className="civil-image">
          <img src={cse} alt="Computer Science Department" />
        </div>

        <div className="civil-intro-right">
          <h1>Computer Science & Engineering Department</h1>
          <p>
            The Department of Computer Science and Engineering (CSE) was established in 2009 with a sanctioned intake of 60 students. 
              The department is accredited by NAAC and maintains strong liaison with reputed industries and R&D organizations.
          </p>
        </div>
      </div>

      {/* Remaining Content Below Full Width */}
      <div className="civil-below">
        <p>
          The department actively conducts programs sponsored by funding agencies, industries, and AICTE. It is recognized for delivering excellent academics and has produced a significant number of University rankers. The department also runs ACES (Association of Computer Engineering Students) to enhance co-curricular and extracurricular activities.
        </p>

        <p>
          With a balanced mix of experienced and young faculty, the department strengthens its educational programs. Almost all faculty members have published papers in journals and conferences. The department aims to become a recognized Ph.D. and research center. The infrastructure includes modern classrooms, multimedia-equipped labs, state-of-the-art equipment, learning software, and a departmental library. Seven batches have graduated successfully, and alumni occupy top positions in private and public organizations.
        </p>

        {/* Vision & Mission */}
        <section className="civil-vm">
          <div className="box">
            <h2>Vision</h2>
            <p>
              To be a center of excellence in computer science and engineering education and research to serve the needs of industry and society.
            </p>
          </div>

          <div className="box">
            <h2>Mission</h2>
            <ul>
              <li>Impart quality education through dynamic curriculum and hands-on experience, building core computing competencies.</li>
              <li>Prepare students for professional excellence and leadership roles in specialized domains.</li>
              <li>Encourage continuous learning, research aptitude, and technological adaptability.</li>
              <li>Foster ethical values, teamwork, and social responsibility.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
