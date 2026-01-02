import React from 'react'
import g1 from '../assets/images/Gallary/g1.jpeg';
import g2 from '../assets/images/Gallary/g2.jpeg';
import g3 from '../assets/images/Gallary/g3.jpeg';
import g4 from '../assets/images/Gallary/g4.jpeg';


export default function Gallery() {
  return (
    <div>
      <img src={g1} alt="" />
      <img src={g2} alt="" />
      <img src={g3} alt="" />
      <img src={g4} alt="" /> 
    </div>
  )
}
