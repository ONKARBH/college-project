import React from "react";
import "../styles/noticeboard.scss";

export default function NoticeBoard() {
  const newsItems = [
    { href: "https://aaplapandharpur.com/?p=28755", text: "➡️कर्मयोगी इंस्टिट्यूटच्या सहा विद्यार्थ्यांची निवड." },
    { href: "https://pandharpurlivenews.com/news=13697", text: "➡️ कर्मयोगी इन्स्टिट्यूट मध्ये \"वाचन प्रेरणा दिन\" उत्साहात संपन्न, विद्यार्थ्यांसाठी विविध पुस्तकांचे व ग्रंथांचे प्रदर्शन." },
    { href: "https://mjvnews24.blogspot.com/2025/11/blog-post_25.html", text: "➡️ कर्मयोगी इंस्टिट्यूटच्या विद्यार्थ्यांचे क्रीडा स्पर्धेत उल्लेखनीय यश." },
    { href: "https://pandharpurlivenews.com/news=13717", text: "➡️ कर्मयोगीच्या 'आविष्कार' मध्ये समाजोपयोगी प्रकल्पांचे सादरीकरण;" },

    { 
      href: "https://karmatech-2026.netlify.app/", 
      text: "➡️कर्माटेक २०२६ – तंत्रज्ञान आणि नवकल्पना",
      highlight: true 
    },

    { href: "https://tejmaharashtravarta.blogspot.com/2025/10/blog-post_30.html", text: "➡️ कर्मयोगी इन्स्टिट्यूट च्या विद्यार्थ्यांची आंतर महाविद्यालयीन रायफल शूटिंग स्पर्धेत चमकदार कामगिरी." },
  ];

  return (
    <div className="news-box">
      <h5 className="news-title">NEWS / ANNOUNCEMENTS</h5>

      <div className="news-wrapper">
        <div className="news-track">
          <ul className="newsItems">

            {newsItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={item.highlight ? "highlight-news" : ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.highlight && (
                    <>
                      <span className="blink-dot"></span>
                      <span className="new-badge">NEW</span>
                    </>
                  )}
                  {item.text}
                </a>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </div>
  );
}