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
            <a href="https://www.instagram.com/karmayogi_institute?igsh=Y3U0ODJvMjdteW9l"><FaInstagram /></a>
            <a href="https://youtube.com/@karmayogiinstitute?si=fc8z_Hc0ATdrAS28"><FaYoutube /></a>
            <a href="https://www.linkedin.com/company/karmayogi-institute-of-technology-pandharpur/"><FaLinkedinIn /></a>
            <a href="https://www.facebook.com/share/1bR4gX5y6D/"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Karmayogi Institute of Technology. All Rights Reserved.
      </div>
    </footer>
  );
}
