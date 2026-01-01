
import React from 'react'
import "../styles/ourrecruters.scss";
import company1 from "../assets/images/recruiters/company1.jpeg"
import company2 from "../assets/images/recruiters/company2.jpeg"
import company3 from "../assets/images/recruiters/company3.jpeg"
import company4 from "../assets/images/recruiters/company4.jpeg"
import company5 from "../assets/images/recruiters/company5.jpeg"
import company6 from "../assets/images/recruiters/company6.jpeg"
import company7 from "../assets/images/recruiters/company7.jpeg"
import company8 from "../assets/images/recruiters/company8.jpeg"
import company9 from "../assets/images/recruiters/company9.jpeg"
import company10 from "../assets/images/recruiters/company10.jpeg"
import company11 from "../assets/images/recruiters/company11.jpeg"

const companies = [
  company1, company2, company3, company4, company5,
  company6, company7, company8, company9, company10, company11
];

export default function OurRecruters() {
  return (
    <div className="recruiter-container">
      <h3 className="recruiter-heading">OUR Recruiters</h3>

      <div className="recruiter-slider">
        <div className="recruiter-track">
          {[...companies, ...companies].map((img, index) => (
            <img key={index} src={img} alt="recruiter" />
          ))}
        </div>
      </div>
    </div>
  )
}
