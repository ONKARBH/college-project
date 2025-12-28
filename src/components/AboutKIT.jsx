import React from 'react'
import college from "../assets/images/video/collegeVidio.mp4";
export default function AboutKIT() {
    return (

        <div>
        <div className="aboutKIT-container">
            <h5 className=" rounded-[7px] bg-blue-600 text-center border-b-blue-800 font-semibold">About KIT</h5>
            <div className="aboutKIT-video">
                <video src={college} autoPlay loop muted />

            </div>
            
        </div>
        
</div>
    )
}
