import React from "react";
import "./Hero.css";
import DotsHero from "../../images/DotsHero.png";
import VRGlass from "../../images/VR-Glass.png";
import Properties from "../../images/Properties.png";

const Hero = () => {
  return (
    <div className="hero" data-aos="fade-up">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            The potential of IT could lead to a better and overall smarter
            future for everyone
          </h1>
          <p>
            We strive for excellence in the growing world of talent and we hire,
            curate, and cultivate talent in Uzbekistan
          </p>
          <button>Learn</button>
          <img src={DotsHero} alt="Dots" className="dots-image" />
        </div>
        <div className="hero-image">
          <img src={VRGlass} alt="VRGlass" className="vrglass-image" />
          <div className="properties">
            <img
              src={Properties}
              alt="Properties"
              className="properties-image"
            />
            <ul>
              <li>Hire</li>
              <li>Curate</li>
              <li>Cultivate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
