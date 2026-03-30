import React from "react";
import gym from "../../assets/images/Facilities/Gym/gym.jpeg";
import "../../styles/Gym.scss";

export default function Gym() {
  return (
    <div className="gym-facility">
      <h1 className="page-title">Gym Facility</h1>

      {/* Top Section */}
      <div className="top-section">
        <div className="image-container">
          <img src={gym} alt="Gym Facility at KIT" />
        </div>

        <div className="text-right">
          <p>
            The gym facility at the institute is designed to promote physical
            fitness, mental well-being, and a healthy lifestyle among students
            and staff. Regular exercise helps improve concentration, reduce
            stress, and enhance overall performance in academics and daily life.
            The gym provides a motivating environment where students can focus
            on maintaining their health along with their studies.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-section">
        <p>
          Our gym is equipped with modern fitness equipment suitable for
          strength training, cardio workouts, and general body conditioning.
          Students are encouraged to make physical activity a regular part of
          their routine, helping them build endurance, strength, and discipline.
          The gym facility supports a balanced approach to education by
          emphasizing both mental and physical development.
        </p>
      </div>

      {/* Vision Section */}
      <div className="info-section">
        <h2>Vision</h2>
        <p>
          To create a healthy and energetic campus by providing quality fitness
          facilities that encourage students to adopt an active and disciplined
          lifestyle.
        </p>
      </div>

      {/* Mission Section */}
      <div className="info-section">
        <h2>Mission</h2>
        <p>
          To promote physical fitness and well-being by offering safe,
          accessible, and well-maintained gym facilities that support the
          holistic development of students.
        </p>
      </div>
    </div>
  );
}
