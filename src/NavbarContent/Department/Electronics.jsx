import React from "react";
import electronics from "../../assets/images/Inside_Department/electronics.png";
import "../../styles/civil.scss"; // Reuse the same SCSS for consistent styling

export default function Electronics() {
  return (
    <div className="civil-dept">
      {/* Top Section: Image Left + First Paragraph Right */}
      <div className="civil-top-row">
        <div className="civil-image">
          <img src={electronics} alt="Electronics & Telecommunication Department" />
        </div>

        <div className="civil-intro-right">
          <h1>Electronics & Telecommunication Department</h1>
          <p>
            The Department of Electronics and Telecommunication Engineering plays a pivotal role in shaping the future of technology and communication. Aligned with our institution’s vision of becoming a globally recognized autonomous institution, we are dedicated to fostering academic excellence, industry collaboration, and impactful research contributing to technological advancements and societal progress.
          </p>
        </div>
      </div>

      {/* Remaining Content Below Full Width */}
      <div className="civil-below">
        <p>
          Our core objective is to deliver high-quality education, training, and research at the undergraduate level, focusing on the design, development, and application of advanced electronic systems. We aim to create a dynamic learning environment that nurtures problem-solving skills through hands-on experience, research-driven education, and industry-oriented methodologies.
        </p>

        <p>
          To equip students with cutting-edge knowledge and align them with emerging global trends, we actively organize expert lectures, industry-driven workshops, and specialized training programs on the latest advancements in Electronics and Telecommunication Engineering. Our department is supported by highly qualified faculty specializing in communication systems, signal and image processing, embedded systems, and applied electronics. State-of-the-art laboratories provide an interactive and immersive learning experience, fostering innovation and technical proficiency.
        </p>

        {/* Vision & Mission */}
        <section className="civil-vm">
          <div className="box">
            <h2>Vision</h2>
            <p>
              To create a vibrant educational environment that prepares technically competent and socially responsible engineers who excel in Industry, Academia, and Research, ready to meet the evolving challenges of tomorrow.
            </p>
          </div>

          <div className="box">
            <h2>Mission</h2>
            <ul>
              <li>Impart in-depth knowledge and train students through effective teaching-learning processes.</li>
              <li>Establish a unique learning environment to enable students to face challenges in Electronics and Telecommunication Engineering.</li>
              <li>Provide a research culture that meets the ever-changing needs of industry, profession, and society through stakeholder involvement and commitment.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
