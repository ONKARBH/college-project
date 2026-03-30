import React from "react";
import "../styles/somehighlights.scss";

export default function Highlights() {
  const stats = [
    { value: "160+", label: "Visiting Companies", icon: "🏢", color: "#4f46e5" },
    { value: "2000+", label: "Total Placements", icon: "🎓", color: "#10b981" },
    { value: "87/3 LPA", label: "High/Avg Package", icon: "💰", color: "#f59e0b" },
    { value: "207+", label: "2024-25 Placements", icon: "📈", color: "#ef4444" },
    { value: "80+", label: "Expert Faculty", icon: "👨‍🏫", color: "#8b5cf6" },
    { value: "5,254+", label: "Students", icon: "👥", color: "#3b82f6" },
    { value: "15000+", label: "Alumni Network", icon: "🌐", color: "#ec4899" },
    { value: "95+", label: "Acres Campus", icon: "🏛️", color: "#06b6d4" },
  ];

  return (
    <div className="highlights-section">
      <div className="section-header">
        <h2 className="section-title">Institutional Highlights</h2>
        <p className="section-subtitle">Numbers that define our excellence</p>
        <div className="title-decoration"></div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ '--stat-color': stat.color }}>
            <div className="stat-icon" style={{ backgroundColor: `${stat.color}20` }}>
              <span className="icon">{stat.icon}</span>
            </div>
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
            <div className="stat-decoration">
              <div className="decoration-line"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}