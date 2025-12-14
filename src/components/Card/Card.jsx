import React from 'react'
import "./Card.css"
function Card(props) {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <div className="hovercard">
        <img src={props.image} alt=""/>
      </div>
    </div>
  )
}

export default Card
