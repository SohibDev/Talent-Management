import React from "react";
import './footer.css'
import Logo from "../../images/LogoFooter.svg";
import Wk from "../../images/wk-64.png";
import Pinterest from "../../images/pinterest.png";
import Instagram from "../../images/instagram.png";
import Twitter from "../../images/twitter.png";
import Facebook from "../../images/facebook.png";

const Footer = () => {
  return (
    <div className="footer" data-aos="zoom-in">
      <div className="map"></div>
      <div className="footer-content">
        <ul className="footer-list">
          <li className="newsletter">
            <img src={Logo} alt="" className="newsletter-image" />
            <p className="newsletter-text">
              Subcribe, to Our Newsletter to get important News, Amazing Offers
              & Inside Scoops:
            </p>
            <div className="newsletter-form">
              <input
                type="text"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </li>
          <hr className="separator" />
          <li>
            <ul className="navigation">
              <p>Navigation</p>
              <li>
                <a href="" className="navigation-link">
                  Main page
                </a>
              </li>
              <li>
                <a href="" className="navigation-link">
                  About us
                </a>
              </li>
              <li>
                <a href="" className="navigation-link">
                  For companies
                </a>
              </li>
              <li>
                <a href="" className="navigation-link">
                  For individuals
                </a>
              </li>
              <li>
                <a href="" className="navigation-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="" className="navigation-link">
                  Blog
                </a>
              </li>
            </ul>
          </li>
          <hr className="separator separator2" />
          <li className="addressColumn">
            <div className="address">
              <p>Address</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the.
              </p>
            </div>
            <div className="social-media">
              <div className="social-media-icons">
                <img src={Wk} alt="" className="social-media-icon" />
                <img src={Pinterest} alt="" className="social-media-icon" />
                <img src={Instagram} alt="" className="social-media-icon" />
                <img src={Twitter} alt="" className="social-media-icon" />
                <img src={Facebook} alt="" className="social-media-icon" />
              </div>
              <ul className="footer-links">
                <li>
                  <a href="" className="footer-link">
                    Terms
                  </a>
                  <a href="" className="footer-link">
                    Privacy
                  </a>
                  <a href="" className="footer-link">
                    Policy
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <p className="footer-text">
        <span className="copyright">&#169;</span>  Copyright 2023 - ITIC
        
        </p>
      </div>
    </div>
  );
};

export default Footer;
