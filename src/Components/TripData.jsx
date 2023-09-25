import React from 'react'

const TripData = (props) => {
  return (
    <div className='t-card'>
        <div className="t-image">
            <img src={props.image} alt="" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text} <a href="">Make A Plan</a></p>
        
    </div>
  )
}

export default TripData