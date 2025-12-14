import React from 'react'
import Card from '../Card/Card'
import './Projects.css'
import va from '../../assets/va.png'
import calculator from '../../assets/calculator.jpeg'
function Projects() {
  return (
    <div id="projects">
      <h1 id="heading">PROJECTS</h1>
      <div className="slider">
        <Card title="Virtual Assisstant" image={va}/>
        <Card title="Calculator" image={calculator}/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Projects
