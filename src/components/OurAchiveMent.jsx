import React, { useState, useEffect, useCallback } from "react";
import "../styles/achivement.scss";

// Sports
import sport1 from "../assets/images/sports/sport1.jpg";
import sport2 from "../assets/images/sports/sport2.jpg";
import sport3 from "../assets/images/sports/sport3.jpg";
import sport4 from "../assets/images/sports/sport4.jpg";
import sport5 from "../assets/images/sports/sport5.jpg";
import sport6 from "../assets/images/sports/sport6.jpg";

// Technical
import tech1 from "../assets/images/technical/technical1.jpg";
import tech2 from "../assets/images/technical/technical2.jpg";
import tech3 from "../assets/images/technical/technical3.jpg";

// Toppers
import topper1 from "../assets/images/toppers/topper1.jpg";
import topper2 from "../assets/images/toppers/topper2.jpg";
import topper3 from "../assets/images/toppers/topper3.jpg";
import topper4 from "../assets/images/toppers/topper4.jpg";

// Civil services
import civil1 from "../assets/images/civil_services/civil_service1.jpg";
import civil2 from "../assets/images/civil_services/civil_service2.jpg";
import civil3 from "../assets/images/civil_services/civil_service3.jpg";

const achievements = [
  // Sports
  {
    id: 1,
    title: "DBATU Wrestling Team",
    image: sport1,
    category: "Sports",
    date: "2024",
    description: "Selected to represent DBATU in the Inter-University kho-kho championship.",
  },
  {
    id: 2,
    title: "Maharashtra State Inter-University Sports Competition",
    image: sport2,
    category: "Sports",
    date: "2024",
    description: "Represented the university in inter-university championships.",
  },
  {
    id: 3,
    title: "Divisional Inter-College Kho-Kho Competition",
    image: sport3,
    category: "Sports",
    date: "2024",
    description: "Multiple students reached the podium across track events.",
  },
  {
    id: 4,
    title: "Divisional Inter-College Kho-kho Competition",
    image: sport4,
    category: "Sports",
    date: "2024",
    description: "Men's volleyball team won the state inter-college tournament.",
  },
  {
    id: 5,
    title:"Divisional Inter-College Kabaddi Competition",
    image: sport5,
    category: "Sports",
    date: "2024",
    description: "District championship title won after penalty shootout.",
  },
  {
    id: 6,
    title: "State-Level Medalists",
    image: sport6,
    category: "Sports",
    date: "2025",
    description: "Students won medals in singles and doubles categories.",
  },

  // Technical
  {
    id: 7,
    title: "Avishkar Competition",
    image: tech1,
    category: "Technical",
    date: "2025",
    description: "Secured first position in the national-level technical competition.",
  },
  {
    id: 8,
    title: "Karmatech Innovation",
    image: tech2,
    category: "Technical",
    date: "2025",
    description: "Student research work accepted in a peer-reviewed IEEE journal.",
  },
  {
    id: 9,
    title: "Parent Meet & Tech Expo",
    image: tech3,
    category: "Technical",
    date: "2025",
    description: "Team secured first position in the national-level hackathon.",
  },

  // Toppers
  {
    id: 10,
    title: "University Rank Holder",
    image: topper1,
    category: "Toppers",
    date: "2025",
    description: "Student secured first rank in university semester examinations.",
  },
  {
    id: 11,
    title: "Merit Scholarship Award",
    image: topper2,
    category: "Toppers",
    date: "2025",
    description: "Multiple students received merit scholarships for academic excellence.",
  },
  {
    id: 12,
    title: "Academic Excellence Award",
    image: topper3,
    category: "Toppers",
    date: "2025",
    description: "Consistent academic performance with 9.5+ CGPA.",
  },
  {
    id: 13,
    title: "Top University Rank",
    image: topper4,
    category: "Toppers",
    date: "2025",
    description: "Students secured admissions in prestigious IITs for higher studies.",
  },

  // Civil Services
  {
    id: 14,
    title: "Civil Services Selection",
    image: civil1,
    category: "Civil Services",
    date: "2024",
    description: "Alumnus selected for prestigious civil services position.",
  },
  {
    id: 15,
    title: "Civil Services Officer",
    image: civil2,
    category: "Civil Services",
    date: "2023",
    description: "Research work recognized at national public administration forum.",
  },
  {
    id: 16,
    title: "Public Administration Recognition",
    image: civil3,
    category: "Civil Services",
    date: "2022",
    description: "Internship with a state ministry for policy research.",
  }
];

const categories = ["All", "Sports", "Technical", "Toppers", "Civil Services"];

export default function AchievementSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter, setFilter] = useState("All");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredAchievements = filter === "All"
    ? achievements
    : achievements.filter(ach => ach.category === filter);

  const totalSlides = Math.ceil(filteredAchievements.length / 3);

  const nextSlide = useCallback(() => {
    setActiveIndex(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveIndex(prev => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  const getVisibleCards = () => {
    const start = activeIndex * 3;
    return filteredAchievements.slice(start, start + 3);
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="achievements-section">
      <div className="section-header">
        <div className="header-main">
          <span className="section-badge">CELEBRATING EXCELLENCE</span>
          <h2 className="section-title">
            Our <span className="highlight">Milestones</span> & Achievements
          </h2>
          <p className="section-description">
            Celebrating the outstanding accomplishments of our students and alumni across various domains
          </p>
        </div>

        <div className="achievement-stats">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">Total Awards</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Research Papers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Sports Victories</div>
          </div>
        </div>
      </div>

      <div className="filter-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-tab ${filter === category ? 'active' : ''}`}
            onClick={() => {
              setFilter(category);
              setActiveIndex(0);
            }}
          >
            {category}
            <span className="tab-count">
              {category === "All"
                ? achievements.length
                : achievements.filter(a => a.category === category).length}
            </span>
          </button>
        ))}
      </div>

      <div
        className="achievements-slider-container"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <button
          className="slider-nav prev"
          onClick={prevSlide}
          aria-label="Previous achievements"
        >
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="achievements-slider">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div className="slide-group" key={slideIndex}>
                {filteredAchievements
                  .slice(slideIndex * 3, slideIndex * 3 + 3)
                  .map((achievement) => (
                    <div
                      key={achievement.id}
                      className="achievement-card"
                    >
                      <div className="card-inner">
                        <div className="card-image">
                          <img 
                            src={achievement.image} 
                            alt={achievement.title}
                            loading="lazy"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='16' text-anchor='middle' fill='%2364748b'%3E🏆 Achievement Image%3C/text%3E%3C/svg%3E";
                            }}
                          />
                          <div className="image-overlay"></div>
                          <div className="achievement-badge">
                            <span className="badge-icon">🏆</span>
                            <span className="badge-text">{achievement.category}</span>
                          </div>
                          <div className="achievement-year">{achievement.date}</div>
                        </div>

                        <div className="card-content">
                          <h3 className="achievement-title">{achievement.title}</h3>
                          <p className="achievement-description">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <button
          className="slider-nav next"
          onClick={nextSlide}
          aria-label="Next achievements"
        >
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="slider-controls">
        <div className="slide-indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="indicator-progress"></div>
            </button>
          ))}
        </div>

        <div className="auto-play-control">
          <button
            className={`auto-play-btn ${isAutoPlaying ? 'playing' : 'paused'}`}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
          >
            <span className="play-icon">
              {isAutoPlaying ? '⏸️' : '▶️'}
            </span>
            <span className="play-text">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'}
            </span>
          </button>
        </div>
      </div>

     
    </div>
  );
}