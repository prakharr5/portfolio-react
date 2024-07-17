import React from "react";
import "./Hero.css";
import assets from "../../assets/assets";

function Hero() {
  return (
    <>
      <div className="main">
        <div className="one">
          <h1>
            I'M PRAKHAR SRIVASTAVA <br /> FULL STACK WEB DEVELOPER
          </h1>
        </div>
        <div className="two">
          <img srcSet={assets.photo} alt="prakhar" />
        </div>
      </div>
    </>
  );
}

export default Hero;
