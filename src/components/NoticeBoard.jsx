import React from "react";
import "../styles/noticeboard.scss";

export default function NoticeBoard() {
  return (
    <div className="news-box">
      <h5 className="news-title">NEWS / ANNOUNCEMENTS</h5>

      <div className="news-wrapper">
        <ul className="newsItems">
          <li><a href="#">➡️ Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></li>
          <li><a href="#">➡️ Veritatis voluptatum Lorem ipsum dolor sit amet.</a></li>
          <li><a href="#">➡️ Voluptatem dicta Lorem ipsum dolor sit amet.</a></li>
          <li><a href="#">➡️ Illo consectetur Lorem ipsum dolor sit amet.</a></li>
          <li><a href="#">➡️ Praesentium sed Lorem ipsum dolor sit amet.</a></li>

          {/* DUPLICATE FOR INFINITE LOOP */}
          <li><a href="#">➡️ Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></li>
          <li><a href="#">➡️ Veritatis voluptatum Lorem ipsum dolor sit amet.</a></li>
          <li><a href="#">➡️ Voluptatem dicta Lorem ipsum dolor sit amet.</a></li>
          <li><a href="#">➡️ Illo consectetur Lorem ipsum dolor sit amet.</a></li>
          <li><a href="#">➡️ Praesentium sed Lorem ipsum dolor sit amet.</a></li>
        </ul>
      </div>
    </div>
  );
}
