import React from "react";
import "./listStyleClient.css";
import Logo from "../../../images/FormLogo.svg";
import Dots from "../../../images/DotsHero.png";

const ListClientForm = () => {
  return (
    <div className="list-client-form"  data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="" />
        <img className="dots" src={Dots} alt="" />
        <img className="dots d" src={Dots} alt="" />
      </div>
      <div className="form-container">
        <h2 className="form-title">Work with us</h2>
        <form className="form">
          <div className="form-row1 ">
            <input
              className="first-name-input"
              type="text"
              placeholder="First Name"
            />
            <input
              className="last-name-input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="form-row2">
            <input
              className="email-input"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="phone-input"
              type="tel"
              placeholder="Phone Number"
            />
          </div>
          <div className="submitContainer">
            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListClientForm;
