import React from "react";
import lab from "../../assets/images/Facilities/Library/library1.jpeg";
import "../../styles/library.scss";

export default function Library() {
  return (
    <div className="library-facility">
      <h1 className="page-title">Library Facility</h1>

      {/* Top Section */}
      <div className="top-section">
        <div className="image-container">
          <img src={lab} alt="College Library" />
        </div>

        <div className="text-right">
          <p>
            The library is the heart of every institute and serves as a strong
            foundation for academic excellence. It acts as a learning
            inspiration by encouraging students to develop a habit of reading
            and research. Our library provides access to archived, contemporary,
            and emerging knowledge resources in both print and digital formats.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="content-section">
        <p>
          Students can explore a wide range of books, journals, magazines, and
          electronic resources, including web-based databases and e-learning
          materials. The library helps bridge the gap between academics,
          industry, and society by providing valuable information and knowledge
          resources. Continuous efforts are made to enrich the collection with
          advanced textbooks, technical reference books, and national and
          international journals.
        </p>

        <p>
          The library is equipped with modern facilities such as library
          automation, resource sharing with reputed institutions, and easy
          access to digital content. These facilities ensure that students and
          faculty receive the right information at the right time in the right
          format to support learning, teaching, and research activities.
        </p>
      </div>

      {/* Vision */}
      <div className="info-section">
        <h2>Vision</h2>
        <p>
          To support the institution and its stakeholders by providing seamless
          access to a wide spectrum of information resources, including digital,
          online databases, print, and non-print materials relevant to academic,
          informational, and innovative research needs.
        </p>
      </div>

      {/* Mission */}
      <div className="info-section">
        <h2>Mission</h2>
        <p>
          To motivate students towards reading and lifelong learning by
          providing access to quality knowledge resources such as books,
          journals, electronic media, and web-based information, thereby
          supporting academic growth and societal development.
        </p>
      </div>
    </div>
  );
}
