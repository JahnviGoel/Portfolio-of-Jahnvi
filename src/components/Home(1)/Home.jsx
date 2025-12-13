import React from 'react'
import "./Home.css"
import jahnvi from '../../assets/jahnvi.jpg'
import Typewriter from "typewriter-effect";
function Home() {
  return (
    <div id="home">
      <div className="lefthome">
      <div className="homedetails">
        <div className="line1">I'M</div>
        <div className="line2">JAHNVI GOEL</div>
        <div className="line3">
      
           <Typewriter
        options={{
          strings: ["Frontend Developer", "React Developer", "MERN Developer"],
          autoStart: true,
          loop: true,
          delay: 60,        // typing speed
          deleteSpeed: 50,  // deleting speed
          pauseFor: 1000 ,    // pause after completing a word
          cursor: "|",
        }}
      />
      </div>
      <button>Hire Me</button>
      </div>
      </div>
      <div className="righthome">
        <img src={jahnvi} alt="" />
      </div>
    </div>
  )
}

export default Home
