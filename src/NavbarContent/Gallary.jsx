import React from 'react';
import g1 from '../assets/images/Gallary/g1.jpg';
import g2 from '../assets/images/Gallary/g2.jpg';
import g3 from '../assets/images/Gallary/g3.jpg';
import g4 from '../assets/images/Gallary/g4.jpg';
import g5 from '../assets/images/Gallary/g5.jpg';
import g6 from '../assets/images/Gallary/g6.jpg';
import g7 from '../assets/images/Gallary/g7.jpg';
import g8 from '../assets/images/Gallary/g8.jpg';
import g9 from '../assets/images/Gallary/g9.jpg';
import g10 from '../assets/images/Gallary/g10.jpg';
import g11 from '../assets/images/Gallary/g11.jpg';
import g12 from '../assets/images/Gallary/g12.jpg';
import '../styles/gallery.scss';

export default function Gallery() {
  const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12];

  return (
    <div className="gallery-container">
      {images.map((img, index) => (
        <div key={index} className="gallery-item">
          <img src={img} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
