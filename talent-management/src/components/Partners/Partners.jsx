import React from "react";
import "./partners.css";
import AirBnb from "../../images/airbnb-2-logo-svg-vector.svg";
import XD from "../../images/Adobe_XD_CC_icon.svg.png";
import Google from "../../images/google-icon-logo-svg-vector.svg";
import Instagram from "../../images/pinpng.com-instagram-png-22951.png";
import PlayMarket from "../../images/google-play-logo-svg-vector.svg";
import Spotify from "../../images/spotify-1-logo-svg-vector.svg";
import Youtube from "../../images/YouTube_Logo_2017.svg";

const Partners = () => {
  return (
    <div className="partners"  data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <div className="partners-heading">
        <h2 className="partners-title">Our Partners</h2>
        <p className="partners-description">
          We cooperate with various companies, including
        </p>
      </div>
      <ul className="partners-list">
        <li className="partner-item">
          <img className="partner-logo" src={XD} alt="" />
        </li>
        <li className="partner-item">
          <img className="partner-logo" src={AirBnb} alt="" />
        </li>
        <li className="partner-item">
          <img className="partner-logo" src={Google} alt="" />
        </li>
        <li className="partner-item">
          <img className="partner-logo" src={Instagram} alt="" />
        </li>
        <li className="partner-item">
          <img className="partner-logo" src={Spotify} alt="" />
        </li>
        <li className="partner-item">
          <img className="partner-logo" src={PlayMarket} alt="" />
        </li>
        <li className="partner-item">
          <img className="partner-logo youtube" src={Youtube} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Partners;
