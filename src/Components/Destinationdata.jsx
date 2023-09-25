import React from "react";

const Destinationdata = (props) => {
  return (
    <div className={props.classname}>
      <div className="des-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
      </div>
      <div className="image">
        <img src={props.img1} alt=" landscap pic" />
        <img src={props.img2} alt=" mountain image" />
      </div>
    </div>
  );
};

export default Destinationdata;
