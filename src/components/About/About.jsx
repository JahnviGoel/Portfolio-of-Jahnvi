import React from 'react'
import './About.css'
function About() {
  return (
    <div id="about">
      <div className="leftabout">
      <div className="circle-line">
        <div className="circle"></div>
        <div className="line"></div>
         <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
      </div> 
      <div className="aboutdetail">
        <div className="personalinfo">
          <h1>Personal Info</h1>
          <ul>
            <li> <span>Name</span> : Jahnvi Goel </li>
            <li> <span>Age</span> : 22 year </li>
            <li> <span>Gender</span> : Female </li>
            <li> <span>Language Known</span> : English,Hindi </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="rightabout"></div>
    </div>
  )
}

export default About 
