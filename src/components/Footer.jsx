import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-col">
          <h3 className="logo">Karmayogi Institute of Technology</h3>
          <p>
            Karmayogi Institute of Technology was established in 2008 to provide
            quality technical education to cater to the needs of modern India.
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>📍 Gat No. 124, 125, Shelve, Tal. Pandharpur</p>
          <p>Maharashtra 413304</p>
          <p className="blue">📞 +91 8554006300</p>
          <p>✉️ info@karmayogicollege.ac.in</p>
        </div>

        {/* LINKS */}
        <div className="footer-col">
          <h4>Useful Links</h4>
          <ul>
            <li>F.A.Q.</li>
            <li>Events</li>
            <li>Blogs, News & Articles</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div className="footer-col">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Karmayogi Institute of Technology. All Rights Reserved.
      </div>
    </footer>
  );
}
