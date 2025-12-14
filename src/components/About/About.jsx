import React from 'react'
import './About.css'
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import dsa from '../../assets/dsa.png'
import java from '../../assets/java.png'
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

        <div className="education">
          <h1>Education</h1>
          <ul>
            <li> <span>MCA</span> : (2026) : 8.67 cgpa</li>
            <li> <span>B.Sc (Maths)</span>(2024) - 8.1 cgpa</li>
            <li> <span>XII</span> : (2021) : 88.4%</li>
            <li> <span>X</span> : (2019) : 86.17%</li>
          </ul>
        </div>

        <div className="skill">
          <h1>Skills</h1>
          <ul>
          <li>MERN stack</li>
          <li>DSA</li>
          <li>JAVA</li>
          <li>HTML,CSS,JavaScript</li>
          </ul>
        </div>

      </div>
      </div>
      <div className="rightabout">
        <Card title="MERN Stack Developer" image={mern}/>
        <Card title="DSA" image={dsa}/>
        <Card title="Java" image={java}/>
      </div>
    </div>
  )
}

export default About 
