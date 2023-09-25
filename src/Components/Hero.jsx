import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.img} alt="" />
        <div className="Hero-text">
          <h1>{props.Title}</h1>
          <p>{props.desc}</p>
          <a href={props.btnUrl} className={props.btnClass}>{props.btnText}</a>
        </div>
      </div>
    </>
  );
};

export default Hero;
